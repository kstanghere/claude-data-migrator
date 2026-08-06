#!/usr/bin/env python3
"""
Claude Data Migrator - Browse and export Claude data exports locally.

Usage:
    python app.py <path-to-zip-or-directory>
    python app.py ~/Downloads/claude-export.zip
    python app.py ~/Downloads/data-xxxxx/
"""

import io
import json
import sys
import zipfile
import tempfile
import argparse
from datetime import datetime, timezone
from pathlib import Path

from flask import Flask, Response, render_template, jsonify, request

app = Flask(__name__)

FULL_MODE_STRIP_FIELDS = {
    "start_timestamp",
    "stop_timestamp",
    "flags",
    "signature",
    "cut_off",
    "truncated",
    "hidden",
    "thinking_hidden",
    "alternative_display_type",
    "approval_options",
    "approval_key",
    "approval_key_legacy",
    "is_mcp_app",
    "hidden_in_chat",
    "mcp_server_url",
    "integration_icon_url",
}

FULL_MODE_KEEP_FIELDS = {
    "type",
    "text",
    "thinking",
    "summaries",
    "name",
    "input",
    "content",
    "id",
    "is_error",
    "message",
    "display_content",
    "tool_identifier",
    "integration_name",
    "icon_name",
    "context",
}


class DataStore:
    TAGS_FILENAME = "_migrator_tags.json"

    def __init__(self):
        self.users = []
        self.conversations = []
        self.conv_index = {}
        self.memories = {}
        self.projects = []
        self.project_index = {}
        self.user_info = None
        self.data_dir = None
        self.project_convs = {}

    def load(self, data_dir):
        """Load all data files from the given directory."""
        self.data_dir = Path(data_dir)

        users_file = self.data_dir / "users.json"
        if users_file.exists():
            self.users = json.loads(users_file.read_text(encoding="utf-8"))
            if self.users:
                self.user_info = self.users[0]

        memories_file = self.data_dir / "memories.json"
        if memories_file.exists():
            raw = json.loads(memories_file.read_text(encoding="utf-8"))
            if raw and isinstance(raw, list):
                self.memories = raw[0] if raw else {}

        conv_file = self.data_dir / "conversations.json"
        if conv_file.exists():
            self.conversations = json.loads(conv_file.read_text(encoding="utf-8"))
            self.conversations.sort(
                key=lambda x: x.get("created_at", ""), reverse=True
            )
            self.conv_index = {c["uuid"]: c for c in self.conversations}

        projects_dir = self.data_dir / "projects"
        if projects_dir.exists() and projects_dir.is_dir():
            for f in projects_dir.glob("*.json"):
                self.projects.append(json.loads(f.read_text(encoding="utf-8")))
            self.projects.sort(
                key=lambda x: x.get("created_at", ""), reverse=True
            )
            self.project_index = {p["uuid"]: p for p in self.projects}

        self._load_tags()

    # ---- Tag persistence ----

    @property
    def _tags_path(self):
        return self.data_dir / self.TAGS_FILENAME

    def _load_tags(self):
        """Load manual project-conversation tags from file.
        Falls back to legacy filename (_viewer_tags.json) for compatibility."""
        self.project_convs = {p["uuid"]: [] for p in self.projects}
        tags_file = self._tags_path
        if not tags_file.exists():
            legacy = self.data_dir / "_viewer_tags.json"
            if legacy.exists():
                tags_file = legacy
        if tags_file.exists():
            try:
                saved = json.loads(tags_file.read_text(encoding="utf-8"))
                for pid, cids in saved.items():
                    if pid in self.project_convs and isinstance(cids, list):
                        valid = [c for c in cids if c in self.conv_index]
                        self.project_convs[pid] = valid
            except (json.JSONDecodeError, ValueError):
                pass

    def _save_tags(self):
        """Persist project-conversation tags to disk."""
        self._tags_path.write_text(
            json.dumps(self.project_convs, indent=2, ensure_ascii=False),
            encoding="utf-8",
        )

    def tag_conversation(self, project_uuid, conv_uuid):
        """Tag a conversation to a project. Returns True on success."""
        if project_uuid not in self.project_convs:
            return False
        if conv_uuid not in self.conv_index:
            return False
        if conv_uuid not in self.project_convs[project_uuid]:
            self.project_convs[project_uuid].append(conv_uuid)
            self._save_tags()
        return True

    def untag_conversation(self, project_uuid, conv_uuid):
        """Remove a conversation tag from a project. Returns True on success."""
        if project_uuid not in self.project_convs:
            return False
        if conv_uuid in self.project_convs[project_uuid]:
            self.project_convs[project_uuid].remove(conv_uuid)
            self._save_tags()
        return True

    def get_conv_projects(self, conv_uuid):
        """Return list of project UUIDs a conversation is tagged to."""
        return [
            pid for pid, cids in self.project_convs.items()
            if conv_uuid in cids
        ]


store = DataStore()


# ---------------------------------------------------------------------------
# Existing routes
# ---------------------------------------------------------------------------

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/user")
def get_user():
    return jsonify(store.user_info or {})


@app.route("/api/stats")
def get_stats():
    total_msgs = sum(
        len(c.get("chat_messages", [])) for c in store.conversations
    )
    dates = [
        c.get("created_at", "")[:10]
        for c in store.conversations
        if c.get("created_at")
    ]
    return jsonify(
        {
            "conversation_count": len(store.conversations),
            "message_count": total_msgs,
            "project_count": len(store.projects),
            "date_range": {
                "start": min(dates) if dates else None,
                "end": max(dates) if dates else None,
            },
            "user": store.user_info,
        }
    )


@app.route("/api/conversations")
def get_conversations():
    result = []
    for c in store.conversations:
        msgs = c.get("chat_messages", [])
        preview = ""
        if msgs:
            preview = (msgs[0].get("text", "") or "")[:120]
        result.append(
            {
                "uuid": c["uuid"],
                "name": c.get("name", "Untitled conversation"),
                "created_at": c.get("created_at", ""),
                "updated_at": c.get("updated_at", ""),
                "message_count": len(msgs),
                "preview": preview,
            }
        )
    return jsonify(result)


@app.route("/api/conversations/<uuid>")
def get_conversation(uuid):
    conv = store.conv_index.get(uuid)
    if not conv:
        return jsonify({"error": "Not found"}), 404
    return jsonify(conv)


@app.route("/api/memories")
def get_memories():
    return jsonify(store.memories)


@app.route("/api/projects")
def get_projects():
    return jsonify(store.projects)


@app.route("/api/projects/<uuid>/conversations")
def get_project_conversations(uuid):
    conv_uuids = store.project_convs.get(uuid, [])
    result = []
    for cid in conv_uuids:
        c = store.conv_index.get(cid)
        if not c:
            continue
        msgs = c.get("chat_messages", [])
        result.append(
            {
                "uuid": c["uuid"],
                "name": c.get("name", "Untitled conversation"),
                "created_at": c.get("created_at", ""),
                "updated_at": c.get("updated_at", ""),
                "message_count": len(msgs),
            }
        )
    return jsonify(result)


@app.route("/api/projects/<project_uuid>/tag", methods=["POST"])
def tag_conv_to_project(project_uuid):
    data = request.get_json(force=True)
    conv_uuid = data.get("conversation_uuid", "")
    if store.tag_conversation(project_uuid, conv_uuid):
        return jsonify({"ok": True})
    return jsonify({"error": "Invalid project or conversation UUID"}), 400


@app.route(
    "/api/projects/<project_uuid>/tag/<conv_uuid>", methods=["DELETE"]
)
def untag_conv_from_project(project_uuid, conv_uuid):
    store.untag_conversation(project_uuid, conv_uuid)
    return jsonify({"ok": True})


@app.route("/api/conversations/<conv_uuid>/projects")
def get_conversation_projects(conv_uuid):
    pids = store.get_conv_projects(conv_uuid)
    result = []
    for pid in pids:
        p = store.project_index.get(pid)
        if p:
            result.append({"uuid": pid, "name": p.get("name", "")})
    return jsonify(result)


@app.route("/api/search")
def search_conversations():
    q = request.args.get("q", "").lower().strip()
    if not q or len(q) < 1:
        return jsonify([])

    results = []
    for c in store.conversations:
        name = c.get("name", "")
        if q in name.lower():
            results.append(
                {
                    "uuid": c["uuid"],
                    "name": name or "Untitled conversation",
                    "created_at": c.get("created_at", ""),
                    "match_type": "title",
                    "snippet": name,
                }
            )
            continue

        for msg in c.get("chat_messages", []):
            text = msg.get("text", "") or ""
            pos = text.lower().find(q)
            if pos != -1:
                start = max(0, pos - 40)
                end = min(len(text), pos + len(q) + 40)
                snippet = (
                    ("…" if start > 0 else "")
                    + text[start:end]
                    + ("…" if end < len(text) else "")
                )
                results.append(
                    {
                        "uuid": c["uuid"],
                        "name": c.get("name", "Untitled conversation"),
                        "created_at": c.get("created_at", ""),
                        "match_type": "content",
                        "snippet": snippet,
                        "sender": msg.get("sender", ""),
                    }
                )
                break

        if len(results) >= 50:
            break

    return jsonify(results)


# ---------------------------------------------------------------------------
# Export helpers
# ---------------------------------------------------------------------------

def _extract_text_content(msg):
    """Extract only text blocks from a message (compact mode)."""
    content = msg.get("content", [])
    if isinstance(content, list):
        return [
            {"type": "text", "text": block.get("text", "")}
            for block in content
            if isinstance(block, dict) and block.get("type") == "text"
        ]
    fallback = msg.get("text", "")
    if fallback:
        return [{"type": "text", "text": fallback}]
    return []


def _strip_content_block(block):
    """Keep only allowed fields on a content block (full mode)."""
    if not isinstance(block, dict):
        return block
    return {k: v for k, v in block.items() if k in FULL_MODE_KEEP_FIELDS}


def _extract_full_content(msg):
    """Return all content blocks with metadata fields stripped (full mode)."""
    content = msg.get("content", [])
    if isinstance(content, list):
        return [_strip_content_block(b) for b in content]
    fallback = msg.get("text", "")
    if fallback:
        return [{"type": "text", "text": fallback}]
    return []


def _estimate_bytes_for_conv(conv, mode):
    """Estimate byte size of a single conversation's message content."""
    total = 0
    for msg in conv.get("chat_messages", []):
        if mode == "compact":
            blocks = _extract_text_content(msg)
        else:
            blocks = _extract_full_content(msg)
        total += len(json.dumps(blocks, ensure_ascii=False).encode("utf-8"))
    return total


def _build_conversation_entry(conv, mode):
    """Build a single conversation dict for the export payload."""
    title = conv.get("name", "Untitled conversation")
    date = (conv.get("created_at") or "")[:10]
    summary = conv.get("summary", "")

    messages = []
    for msg in conv.get("chat_messages", []):
        role = "user" if msg.get("sender") == "human" else "assistant"
        if mode == "compact":
            content = _extract_text_content(msg)
        else:
            content = _extract_full_content(msg)
        messages.append({"role": role, "content": content})

    return {
        "title": title,
        "date": date,
        "summary": summary,
        "messages": messages,
    }


def _render_markdown(conversations_data, mode, description, exported_at, count):
    """Render the export payload as a Markdown string."""
    buf = io.StringIO()
    buf.write("# Claude Data Migrator Export\n")
    buf.write(f"> Description: {description}  \n")
    buf.write(f"> Exported: {exported_at} | Mode: {mode} | Conversations: {count}\n")
    buf.write("\n---\n")

    for entry in conversations_data:
        buf.write(f"\n## {entry['title']}\n")
        buf.write(f"*Date: {entry['date']}*\n\n")

        for msg in entry["messages"]:
            label = "User" if msg["role"] == "user" else "Assistant"
            buf.write(f"**{label}:**\n")

            for block in msg["content"]:
                if not isinstance(block, dict):
                    continue
                btype = block.get("type", "text")

                if mode == "compact":
                    buf.write(block.get("text", "") + "\n")
                else:
                    if btype == "thinking":
                        buf.write(f"> [Thinking] {block.get('thinking', '')}\n")
                    elif btype == "tool_use":
                        buf.write(f"> [Tool: {block.get('name', '')}] ...\n")
                    elif btype == "tool_result":
                        buf.write(f"> [Result] {block.get('text', block.get('content', ''))}\n")
                    else:
                        buf.write(block.get("text", "") + "\n")

            buf.write("\n")

        buf.write("---\n")

    return buf.getvalue()


# ---------------------------------------------------------------------------
# Export endpoints
# ---------------------------------------------------------------------------

@app.route("/api/export/estimate", methods=["POST"])
def export_estimate():
    """Estimate the size of an export without generating the file."""
    data = request.get_json(force=True)
    uuids = data.get("conversation_uuids", [])
    mode = data.get("mode", "compact")
    if mode not in ("compact", "full"):
        return jsonify({"error": "mode must be 'compact' or 'full'"}), 400

    total_bytes = 0
    count = 0
    for uid in uuids:
        conv = store.conv_index.get(uid)
        if conv is None:
            continue
        count += 1
        total_bytes += _estimate_bytes_for_conv(conv, mode)

    return jsonify({
        "conversation_count": count,
        "estimated_bytes": total_bytes,
    })


@app.route("/api/export", methods=["POST"])
def export_conversations():
    """Export selected conversations directly to local filesystem."""
    data = request.get_json(force=True)
    uuids = data.get("conversation_uuids", [])
    mode = data.get("mode", "compact")
    fmt = data.get("format", "json")
    description = data.get("description", "")
    save_dir = data.get("save_dir", "")

    if mode not in ("compact", "full"):
        return jsonify({"error": "mode must be 'compact' or 'full'"}), 400
    if fmt not in ("json", "md"):
        return jsonify({"error": "format must be 'json' or 'md'"}), 400

    exported_at = datetime.now(timezone.utc).isoformat()
    now_stamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")

    conversations_data = []
    for uid in uuids:
        conv = store.conv_index.get(uid)
        if conv is None:
            continue
        conversations_data.append(_build_conversation_entry(conv, mode))

    ext = "json" if fmt == "json" else "md"
    filename = f"claude-export-{now_stamp}.{ext}"

    if fmt == "json":
        payload = {
            "export_info": {
                "source": "Claude Data Migrator",
                "exported_at": exported_at,
                "mode": mode,
                "conversation_count": len(conversations_data),
                "description": description,
            },
            "conversations": conversations_data,
        }
        output = json.dumps(payload, ensure_ascii=False, indent=2)
    else:
        output = _render_markdown(
            conversations_data, mode, description, exported_at,
            len(conversations_data),
        )

    target_dir = Path(save_dir) if save_dir else Path.home() / "Desktop"
    target_dir.mkdir(parents=True, exist_ok=True)
    target_path = target_dir / filename

    target_path.write_text(output, encoding="utf-8")

    return jsonify({
        "success": True,
        "path": str(target_path),
        "filename": filename,
        "size": len(output.encode("utf-8")),
    })


# ---------------------------------------------------------------------------
# Data directory resolution
# ---------------------------------------------------------------------------

def find_data_dir(path):
    """Locate the data directory containing conversations.json."""
    path = Path(path).resolve()

    if path.is_dir():
        if (path / "conversations.json").exists():
            return path
        for sub in path.iterdir():
            if sub.is_dir() and (sub / "conversations.json").exists():
                return sub
        raise FileNotFoundError(
            f"conversations.json not found in {path}"
        )

    if path.suffix == ".zip":
        temp_dir = tempfile.mkdtemp(prefix="claude-migrator-")
        print(f"Extracting to {temp_dir} ...")
        with zipfile.ZipFile(path, "r") as zf:
            zf.extractall(temp_dir)

        temp_path = Path(temp_dir)
        if (temp_path / "conversations.json").exists():
            return temp_path
        for sub in temp_path.iterdir():
            if sub.is_dir() and (sub / "conversations.json").exists():
                return sub
        for match in temp_path.rglob("conversations.json"):
            return match.parent
        raise FileNotFoundError(
            "conversations.json not found in ZIP archive"
        )

    raise ValueError(f"Unsupported path type: {path}")


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Claude Data Migrator - Browse and export Claude data exports locally"
    )
    parser.add_argument(
        "path",
        help="Path to a Claude data export (ZIP file or extracted directory)",
    )
    parser.add_argument(
        "--port", type=int, default=5000,
        help="Server port (default: 5000)",
    )
    parser.add_argument(
        "--host", default="127.0.0.1",
        help="Bind address (default: 127.0.0.1)",
    )
    args = parser.parse_args()

    try:
        data_dir = find_data_dir(args.path)
    except (FileNotFoundError, ValueError) as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

    print(f"Loading data from: {data_dir}")
    store.load(data_dir)

    conv_count = len(store.conversations)
    msg_count = sum(
        len(c.get("chat_messages", [])) for c in store.conversations
    )
    proj_count = len(store.projects)

    print(
        f"Loaded: {conv_count} conversations, "
        f"{msg_count} messages, {proj_count} projects"
    )
    print(f"\n  Open: http://{args.host}:{args.port}\n")

    app.run(host=args.host, port=args.port, debug=False)


if __name__ == "__main__":
    main()
