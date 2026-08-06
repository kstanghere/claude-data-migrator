<h1 align="center"><img src="docs/logo.png" alt="" height="46">&nbsp;Claude Data Migrator</h1>

<p align="center">
  <strong>妈妈再也不用担心我的Claude被封号了。</strong><br>
  浏览、搜索、标记、导出你的 Claude 数据 —— 随时迁移到新账号。
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> •
  <a href="#功能特性">功能特性</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#导出格式">导出格式</a> •
  <a href="#开源协议">开源协议</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python 3.8+">
  <img src="https://img.shields.io/badge/flask-3.0+-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/license-MIT-orange?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/badge/平台-macOS%20%7C%20Linux%20%7C%20Windows-lightgrey?style=for-the-badge" alt="Platform">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/UI-暗色主题-1b1b18?style=flat-square&logo=css3&logoColor=white" alt="Dark Theme">
  <img src="https://img.shields.io/badge/国际化-EN%20%7C%20中文-blue?style=flat-square&logo=googletranslate&logoColor=white" alt="i18n">
  <img src="https://img.shields.io/badge/数据-100%25%20本地-brightgreen?style=flat-square&logo=shield&logoColor=white" alt="100% Local">
  <img src="https://img.shields.io/badge/无需%20npm-原生%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/依赖-仅%201%20个%20(flask)-success?style=flat-square" alt="Minimal Dependencies">
</p>

---

## 为什么需要这个工具？

**Claude 账号可能会被封禁。** 一旦封号，多年积累的对话记录、项目知识、记忆数据全部消失。

更糟糕的是，就算你导出了数据（设置 → 导出数据），拿到手的也是一言难尽：

- 一个巨大的扁平化 `conversations.json`，几千条消息堆在一起
- 思考块、工具调用、工具结果以嵌套 JSON 格式存储，几乎无法阅读
- 对话与项目没有关联关系，Claude 的数据导出压根不包含哪些对话属于哪个项目
- 没有界面、没有搜索、没有办法按需筛选你要的内容

你只能盯着几十兆的原始 JSON 发呆，不知道 200 多条对话里哪些才是真正重要的。

**Claude Data Migrator** 解决了所有这些问题。它在本地还原了 Claude Web 的界面，同样的深色主题、同样的对话气泡、同样的思考块和工具调用展示，让你像在 claude.ai 上一样浏览自己的数据。然后你挑选需要的对话，一键导出为 Claude 可以理解的 JSON 文件，直接上传到新账号作为项目知识。

你的数据，你做主。☕

---

## 功能特性

🎨 **还原 Claude Web 界面** — 将扁平的 JSON 数据还原成熟悉的 Claude 界面：深色主题、对话气泡、思考块、工具调用 —— 跟在 claude.ai 上浏览一模一样

🗂️ **浏览** — 按日期分组查看所有对话、项目和记忆，显示消息数量

🔍 **搜索** — 全文搜索，覆盖对话标题和消息内容

🏷️ **标记** — 由于 Claude 数据导出不包含对话与项目的关联关系，本工具提供手动标签系统，让你重新将对话关联到对应的项目下

📤 **导出** — 勾选对话（可单选、按项目选、按日期筛选、全选），导出为 JSON 或 Markdown，直接保存到本地磁盘 —— 不通过浏览器下载，没有 macOS 安全提示

📋 **复制** — 鼠标悬停在消息、思考块、工具调用上即可显示复制按钮（复制原始 Markdown）

🌐 **中英双语** — 支持中英文界面一键切换

🔒 **完全本地** — 所有数据仅在你的电脑上处理，不上传、不追踪、不经过任何第三方服务器

---

## 效果展示

<table>
  <tr>
    <td align="center" width="33%">
      <img src="docs/screenshot-conversations.png" alt="浏览对话" width="280"><br>
      <sub><b>浏览</b> — 按日期分组的对话列表</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshot-export-mode.png" alt="导出模式" width="280"><br>
      <sub><b>选择</b> — 勾选 + 日期范围筛选</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshot-export-dialog.png" alt="导出弹窗" width="280"><br>
      <sub><b>导出</b> — 模式、格式、保存路径</sub>
    </td>
  </tr>
</table>

<details>
<summary>🖼️ 点击查看大图</summary>

<br>

**按日期分组浏览对话，显示消息数量**

<img src="docs/screenshot-conversations.png" alt="对话浏览" width="800">

**勾选对话，支持按日期范围筛选**

<img src="docs/screenshot-export-mode.png" alt="导出模式" width="800">

**选择内容模式、文件格式和保存路径**

<img src="docs/screenshot-export-dialog.png" alt="导出弹窗" width="800">

</details>

---

## 快速开始

### 1. 获取 Claude 数据

前往 [claude.ai](https://claude.ai) → **设置** → **账户** → **导出数据**

你会收到一个 ZIP 文件或文件夹，包含 `conversations.json`、`memories.json` 和 `projects/` 目录。

### 2. 安装并运行

```bash
# 克隆仓库
git clone https://github.com/kstanghere/claude-data-migrator.git
cd claude-data-migrator

# 安装依赖
pip install -r requirements.txt

# 运行 —— 指向你的数据文件（ZIP 文件或解压后的文件夹）
python app.py /path/to/your/claude-data-export

# 也可以指定端口
python app.py --port 8080 /path/to/your/claude-data-export
```

打开浏览器访问 [http://127.0.0.1:5000](http://127.0.0.1:5000)，搞定。

### 3. 导出并迁移

1. 点击导航栏的 **导出** 标签
2. 勾选要导出的对话（可以单选、按项目选、按日期筛选、或全选）
3. 点击 **导出** → 选择内容模式和文件格式 → **导出**
4. 文件直接保存到桌面（或自定义路径）—— 不通过浏览器下载，没有 macOS 安全提示
5. 将导出的 JSON 文件作为**项目知识**上传到新的 Claude 账号

---

## 导出格式

### JSON 结构

导出的 JSON 文件结构清晰、人类可读，Claude 可以直接理解：

```json
{
  "export_info": {
    "source": "Claude Data Migrator",
    "exported_at": "2026-08-06T05:30:00+00:00",
    "mode": "full",
    "conversation_count": 5,
    "description": "我的 AI 研究对话"
  },
  "conversations": [
    {
      "title": "对话标题",
      "date": "2026-07-15",
      "summary": "",
      "messages": [
        {
          "role": "user",
          "content": [
            { "type": "text", "text": "你好，请帮我..." }
          ]
        },
        {
          "role": "assistant",
          "content": [
            { "type": "text", "text": "当然！以下是..." }
          ]
        }
      ]
    }
  ]
}
```

### 内容模式

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| **精简模式** | 仅保留文本内容 | 文件更小，适合上传为项目知识 |
| **完整模式** | 保留所有内容块（文本、思考、工具调用、工具结果） | 完整备份，保留全部上下文 |

### 文件大小参考

Claude 项目知识有上传大小限制。导出弹窗会实时显示预估大小：

- 🟢 **< 10 MB** — 可以直接上传
- 🟡 **10–30 MB** — 建议拆分成多次导出
- 🔴 **> 30 MB** — 超过限制，请拆分或使用精简模式

---

## 项目结构

```
claude-data-migrator/
├── app.py              # Flask 后端（API + 静态文件服务）
├── requirements.txt    # Python 依赖
├── templates/
│   └── index.html      # 单页 HTML 框架
├── static/
│   ├── app.js          # 前端逻辑（国际化、渲染、导出）
│   └── style.css       # 暗色主题样式
└── docs/
    ├── logo.png
    └── 截图...
```

---

## 标签系统

由于 Claude 数据导出不包含对话与项目的关联关系，本工具提供了**手动标签系统**：

1. 打开任意对话
2. 点击标题旁的 **"标记项目"** 按钮
3. 选择一个或多个项目进行关联
4. 标签保存在数据目录的 `_migrator_tags.json` 文件中
5. 在项目标签页中点击项目即可查看已标记的对话

---


## 参与贡献

欢迎任何形式的贡献！无论是 Bug 修复、新功能还是文档改进，都可以提 Issue 或 PR。

```bash
# Fork & 克隆
git clone https://github.com/YOUR_USERNAME/claude-data-migrator.git
cd claude-data-migrator

# 创建分支
git checkout -b feat/your-feature

# 修改后提交 PR
```

一些可以贡献的方向：

- 🌍 增加更多语言翻译
- 📊 对话统计分析面板
- 🔄 自动检测对话与项目的关联
- 🎨 亮色主题支持
- 📱 移动端响应式适配

---

## 开源协议

[MIT](LICENSE) — 随便用。

---

<p align="center">
  <em>献给每一个曾经丢失过 Claude 账号的人。<br>
  早导出，多导出，保平安。</em>
</p>
