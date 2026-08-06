// ===== I18N =====
const I18N = {
    en: {
        app_title: 'Claude Data Migrator',
        conversations: 'Chats',
        projects: 'Projects',
        memories: 'Memo',
        export: 'Export',
        search_placeholder: 'Search conversations... (⌘K)',
        loading: 'Loading',
        no_conversations: 'No conversations',
        untitled: 'Untitled',
        unnamed_project: 'Unnamed project',
        hello: 'Hello',
        select_conversation: '\u2190 Select a conversation to browse',
        messages_unit: 'messages',
        today: 'Today',
        yesterday: 'Yesterday',
        last_7_days: 'Last 7 days',
        last_30_days: 'Last 30 days',
        unknown: 'Unknown',
        you: 'You',
        no_results: 'No results found',
        results_found: 'results found',
        title_match: 'Title',
        content_match: 'Content',
        tag_project: 'Tag Project',
        no_projects: 'No projects',
        created_at: 'Created',
        docs_unit: 'docs',
        click_project: 'Click a project on the right to view conversations',
        no_tagged: 'No tagged conversations',
        tag_hint: 'Open a conversation and click "Tag Project" to add',
        claude_memories: 'Claude Memories',
        conversation_memory: 'Conversation Memory',
        memory_files: 'Memory Files',
        load_failed: 'Failed to load',
        thinking_process: 'Thinking',
        attachment: 'Attachment',
        file: 'File',
        export_mode: 'Export Mode',
        exit_export: 'Exit',
        select_all: 'Select All',
        deselect_all: 'Deselect All',
        selected_count: 'selected',
        estimated_size: 'Est. size',
        export_btn: 'Export',
        export_confirm_title: 'Export Conversations',
        export_mode_label: 'Content Mode',
        compact_mode: 'Compact (text only)',
        full_mode: 'Full (all content)',
        export_format: 'File Format',
        export_desc_label: 'Description (optional)',
        export_desc_placeholder: 'Describe what these conversations are about...',
        confirm_export: 'Export',
        cancel: 'Cancel',
        save_dir_label: 'Save to',
        save_dir_placeholder: 'Leave empty to save to Desktop',
        export_success: 'Export saved to:',
        export_error: 'Export failed',
        size_warning: 'File may be large for Project Knowledge upload',
        size_danger: 'Exceeds Claude Project Knowledge limit (30MB)',
        date_from: 'From',
        date_to: 'To',
        filter_by_date: 'Filter by date',
        clear_filter: 'Clear',
        select_project_convs: 'Select all from project',
    },
    zh: {
        app_title: 'Claude Data Migrator',
        conversations: '\u5BF9\u8BDD',
        projects: '\u9879\u76EE',
        memories: '\u8BB0\u5FC6',
        export: '\u5BFC\u51FA',
        search_placeholder: '\u641C\u7D22\u5BF9\u8BDD\u2026 (\u2318K)',
        loading: '\u52A0\u8F7D\u4E2D',
        no_conversations: '\u6CA1\u6709\u5BF9\u8BDD',
        untitled: '\u672A\u547D\u540D\u5BF9\u8BDD',
        unnamed_project: '\u672A\u547D\u540D\u9879\u76EE',
        hello: '\u4F60\u597D',
        select_conversation: '\u2190 \u9009\u62E9\u5DE6\u4FA7\u7684\u5BF9\u8BDD\u5F00\u59CB\u6D4F\u89C8',
        messages_unit: '\u6761\u6D88\u606F',
        today: '\u4ECA\u5929',
        yesterday: '\u6628\u5929',
        last_7_days: '\u6700\u8FD1 7 \u5929',
        last_30_days: '\u6700\u8FD1 30 \u5929',
        unknown: '\u672A\u77E5',
        you: '\u4F60',
        no_results: '\u672A\u627E\u5230\u7ED3\u679C',
        results_found: '\u4E2A\u7ED3\u679C',
        title_match: '\u6807\u9898',
        content_match: '\u5185\u5BB9',
        tag_project: '\u6807\u8BB0\u9879\u76EE',
        no_projects: '\u6CA1\u6709\u9879\u76EE',
        created_at: '\u521B\u5EFA\u4E8E',
        docs_unit: '\u4E2A\u6587\u6863',
        click_project: '\u70B9\u51FB\u53F3\u4FA7\u9879\u76EE\u67E5\u770B\u76F8\u5173\u5BF9\u8BDD',
        no_tagged: '\u6CA1\u6709\u6807\u8BB0\u7684\u5BF9\u8BDD',
        tag_hint: '\u6253\u5F00\u5BF9\u8BDD\u540E\u70B9\u51FB\u300C\u6807\u8BB0\u9879\u76EE\u300D\u6DFB\u52A0',
        claude_memories: 'Claude \u7684\u8BB0\u5FC6',
        conversation_memory: '\u5BF9\u8BDD\u8BB0\u5FC6',
        memory_files: '\u8BB0\u5FC6\u6587\u4EF6',
        load_failed: '\u52A0\u8F7D\u5931\u8D25',
        thinking_process: '\u601D\u8003\u8FC7\u7A0B',
        attachment: '\u9644\u4EF6',
        file: '\u6587\u4EF6',
        export_mode: '\u5BFC\u51FA\u6A21\u5F0F',
        exit_export: '\u9000\u51FA',
        select_all: '\u5168\u9009',
        deselect_all: '\u53D6\u6D88\u5168\u9009',
        selected_count: '\u5DF2\u9009',
        estimated_size: '\u9884\u4F30\u5927\u5C0F',
        export_btn: '\u5BFC\u51FA',
        export_confirm_title: '\u5BFC\u51FA\u5BF9\u8BDD',
        export_mode_label: '\u5185\u5BB9\u6A21\u5F0F',
        compact_mode: '\u7CBE\u7B80\u6A21\u5F0F\uFF08\u4EC5\u6587\u672C\uFF09',
        full_mode: '\u5B8C\u6574\u6A21\u5F0F\uFF08\u6240\u6709\u5185\u5BB9\uFF09',
        export_format: '\u6587\u4EF6\u683C\u5F0F',
        export_desc_label: '\u8BF4\u660E\uFF08\u53EF\u9009\uFF09',
        export_desc_placeholder: '\u63CF\u8FF0\u8FD9\u4E9B\u5BF9\u8BDD\u7684\u5185\u5BB9\u2026',
        confirm_export: '\u5BFC\u51FA',
        cancel: '\u53D6\u6D88',
        save_dir_label: '\u4FDD\u5B58\u5230',
        save_dir_placeholder: '\u7559\u7A7A\u5219\u4FDD\u5B58\u5230\u684C\u9762',
        export_success: '\u5DF2\u5BFC\u51FA\u5230\uFF1A',
        export_error: '\u5BFC\u51FA\u5931\u8D25',
        size_warning: '\u6587\u4EF6\u8F83\u5927\uFF0C\u53EF\u80FD\u4E0D\u9002\u5408\u4F5C\u4E3A\u9879\u76EE\u77E5\u8BC6\u4E0A\u4F20',
        size_danger: '\u8D85\u8FC7 Claude \u9879\u76EE\u77E5\u8BC6\u4E0A\u9650 (30MB)',
        date_from: '\u4ECE',
        date_to: '\u81F3',
        filter_by_date: '\u6309\u65E5\u671F\u7B5B\u9009',
        clear_filter: '\u6E05\u9664',
        select_project_convs: '\u9009\u62E9\u9879\u76EE\u4E0B\u6240\u6709\u5BF9\u8BDD',
    },
};

let currentLang = localStorage.getItem('cdm-lang') || 'en';

function t(key) {
    return (I18N[currentLang] || I18N.en)[key] || key;
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('cdm-lang', lang);
    reRenderAll();
}

// ===== API =====
const API = {
    async getStats() {
        return (await fetch('/api/stats')).json();
    },
    async getConversations() {
        return (await fetch('/api/conversations')).json();
    },
    async getConversation(uuid) {
        return (await fetch(`/api/conversations/${uuid}`)).json();
    },
    async getMemories() {
        return (await fetch('/api/memories')).json();
    },
    async getProjects() {
        return (await fetch('/api/projects')).json();
    },
    async search(q) {
        return (await fetch(`/api/search?q=${encodeURIComponent(q)}`)).json();
    },
    async getProjectConversations(uuid) {
        return (await fetch(`/api/projects/${uuid}/conversations`)).json();
    },
    async getConversationProjects(convUuid) {
        return (await fetch(`/api/conversations/${convUuid}/projects`)).json();
    },
    async tagConversation(projectUuid, convUuid) {
        return (await fetch(`/api/projects/${projectUuid}/tag`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ conversation_uuid: convUuid }),
        })).json();
    },
    async untagConversation(projectUuid, convUuid) {
        return (await fetch(`/api/projects/${projectUuid}/tag/${convUuid}`, {
            method: 'DELETE',
        })).json();
    },
    async estimateExport(uuids, mode) {
        return (await fetch('/api/export/estimate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ conversation_uuids: uuids, mode }),
        })).json();
    },
    async doExport(uuids, mode, format, description, saveDir) {
        const resp = await fetch('/api/export', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                conversation_uuids: uuids, mode, format, description,
                save_dir: saveDir || '',
            }),
        });
        return resp.json();
    },
};

// ===== State =====
const state = {
    view: 'conversations',
    conversations: [],
    selectedId: null,
    stats: null,
    searchTimeout: null,
    allProjects: null,
    activeProject: null,
    projectsData: null,
    exportMode: false,
    exportSelected: new Set(),
    exportDateFrom: '',
    exportDateTo: '',
    exportEstimate: null,
};

// ===== Init =====
async function init() {
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            gfm: true,
            breaks: false,
            highlight: function (code, lang) {
                if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
                    try { return hljs.highlight(code, { language: lang }).value; } catch (e) { /* skip */ }
                }
                return code;
            },
        });
    }

    const [stats, conversations] = await Promise.all([
        API.getStats(),
        API.getConversations(),
    ]);

    state.stats = stats;
    state.conversations = conversations;

    setupEventListeners();
    renderNavButtons();
    renderConversationList(conversations);
    renderWelcome(stats);
}

// Re-render everything for the currently active view (used by language switching)
function reRenderAll() {
    renderNavButtons();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = t('search_placeholder');
    }

    if (state.view === 'conversations') {
        const query = searchInput ? searchInput.value.trim() : '';
        if (query) {
            handleSearchInput({ target: searchInput });
        } else {
            renderConversationList(state.conversations);
        }
        if (state.selectedId) {
            selectConversation(state.selectedId);
        } else {
            renderWelcome(state.stats);
        }
    } else if (state.view === 'projects') {
        loadAndRenderProjects();
        if (state.activeProject) {
            refreshProjectSidebar(state.activeProject);
        } else {
            renderSidebarMessage(t('click_project'));
        }
    } else if (state.view === 'memories') {
        renderSidebarMessage('');
        loadAndRenderMemories();
    }
}

function renderNavButtons() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;
    nav.querySelectorAll('.nav-btn').forEach(btn => {
        const view = btn.dataset.view;
        const span = btn.querySelector('span[data-i18n]');
        if (span) {
            span.textContent = t(span.dataset.i18n);
        } else if (view) {
            const textSpan = btn.querySelector('span:not(.nav-count)');
            if (textSpan) {
                const key = { conversations: 'conversations', projects: 'projects', memories: 'memories', export: 'export' }[view];
                if (key) textSpan.textContent = t(key);
            }
        }
    });

    // Update language toggle active state
    document.querySelectorAll('#lang-toggle button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Update search placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('search_placeholder');
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    searchInput.placeholder = t('search_placeholder');
    searchInput.addEventListener('input', handleSearchInput);

    document.getElementById('search-clear').addEventListener('click', clearSearch);

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.view === 'export') {
                toggleExportMode();
            } else {
                switchView(btn.dataset.view);
            }
        });
    });

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-lang]');
        if (!btn) return;
        setLang(btn.dataset.lang);
    });

    document.getElementById('logo').addEventListener('click', () => {
        state.selectedId = null;
        updateSidebarActive();
        if (state.view === 'conversations') {
            renderWelcome(state.stats);
        }
    });

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (state.exportMode) exitExportMode();
            switchView('conversations');
            searchInput.focus();
            searchInput.select();
        }
        if (e.key === 'Escape') {
            if (document.querySelector('.export-dialog-overlay')) {
                closeExportDialog();
            } else if (document.activeElement === searchInput) {
                clearSearch();
                searchInput.blur();
            }
        }
    });
}

// ===== View Switching =====
function switchView(view) {
    state.view = view;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.view === 'export') {
            btn.classList.toggle('active', state.exportMode);
        } else {
            btn.classList.toggle('active', btn.dataset.view === view);
        }
    });

    const searchSection = document.getElementById('search-section');
    searchSection.style.display = (view === 'conversations') ? 'block' : 'none';

    if (view === 'conversations') {
        state.selectedId = null;
        state.activeProject = null;
        renderConversationList(state.conversations);
        if (!state.exportMode) {
            renderWelcome(state.stats);
        }
    } else if (view === 'projects') {
        state.activeProject = null;
        if (!state.exportMode) {
            renderSidebarMessage(t('click_project'));
        } else {
            renderSidebarMessage('');
        }
        loadAndRenderProjects();
    } else if (view === 'memories') {
        if (state.exportMode) exitExportMode();
        renderSidebarMessage('');
        loadAndRenderMemories();
    }
}

function renderSidebarMessage(msg) {
    const container = document.getElementById('sidebar-list');
    if (msg) {
        container.innerHTML = `<div class="empty-state">${escapeHtml(msg)}</div>`;
    } else {
        container.innerHTML = '';
    }
}

// ===== Export Mode =====
function toggleExportMode() {
    if (state.exportMode) {
        exitExportMode();
    } else {
        enterExportMode();
    }
}

function enterExportMode() {
    state.exportMode = true;
    state.exportSelected = new Set();
    state.exportDateFrom = '';
    state.exportDateTo = '';
    state.exportEstimate = null;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.view === 'export') btn.classList.add('active');
    });

    if (state.view === 'conversations') {
        renderConversationList(state.conversations);
    } else if (state.view === 'projects') {
        loadAndRenderProjects();
        if (state.activeProject) {
            refreshProjectSidebar(state.activeProject);
        }
    }
}

function exitExportMode() {
    state.exportMode = false;
    state.exportSelected = new Set();
    state.exportDateFrom = '';
    state.exportDateTo = '';
    state.exportEstimate = null;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.view === 'export') btn.classList.remove('active');
    });

    if (state.view === 'conversations') {
        renderConversationList(state.conversations);
        if (state.selectedId) {
            selectConversation(state.selectedId);
        } else {
            renderWelcome(state.stats);
        }
    } else if (state.view === 'projects') {
        if (state.activeProject) {
            refreshProjectSidebar(state.activeProject);
        } else {
            renderSidebarMessage(t('click_project'));
        }
    }
}

function buildExportToolbarHtml() {
    const count = state.exportSelected.size;
    const sizeStr = state.exportEstimate
        ? formatFileSize(state.exportEstimate.estimated_size || 0)
        : '~0 B';
    const allVisible = getVisibleConversationUuids();
    const allSelected = allVisible.length > 0 && allVisible.every(u => state.exportSelected.has(u));

    return `<div class="export-toolbar">
        <div class="export-toolbar-row">
            <button class="export-toolbar-btn export-exit-btn" id="export-exit-btn">${t('exit_export')}</button>
            <button class="export-toolbar-btn" id="export-toggle-all-btn">
                ${allSelected ? t('deselect_all') : t('select_all')}
            </button>
        </div>
        <div class="export-toolbar-row export-date-row">
            <label>${t('date_from')}</label>
            <input type="date" id="export-date-from" value="${state.exportDateFrom}">
            <label>${t('date_to')}</label>
            <input type="date" id="export-date-to" value="${state.exportDateTo}">
            <button class="export-toolbar-btn export-clear-date" id="export-clear-date">${t('clear_filter')}</button>
        </div>
        <div class="export-toolbar-row export-status-row">
            <span>${count} ${t('selected_count')} \u00B7 ~${sizeStr}</span>
            <button class="export-toolbar-btn export-do-btn" id="export-do-btn" ${count === 0 ? 'disabled' : ''}>${t('export_btn')}</button>
        </div>
    </div>`;
}

function bindExportToolbarEvents() {
    const exitBtn = document.getElementById('export-exit-btn');
    if (exitBtn) exitBtn.addEventListener('click', exitExportMode);

    const toggleAllBtn = document.getElementById('export-toggle-all-btn');
    if (toggleAllBtn) {
        toggleAllBtn.addEventListener('click', () => {
            const allVisible = getVisibleConversationUuids();
            const allSelected = allVisible.length > 0 && allVisible.every(u => state.exportSelected.has(u));
            if (allSelected) {
                allVisible.forEach(u => state.exportSelected.delete(u));
            } else {
                allVisible.forEach(u => state.exportSelected.add(u));
            }
            refreshExportUI();
        });
    }

    const dateFrom = document.getElementById('export-date-from');
    const dateTo = document.getElementById('export-date-to');
    if (dateFrom) {
        dateFrom.addEventListener('change', (e) => {
            state.exportDateFrom = e.target.value;
            renderConversationList(state.conversations);
        });
    }
    if (dateTo) {
        dateTo.addEventListener('change', (e) => {
            state.exportDateTo = e.target.value;
            renderConversationList(state.conversations);
        });
    }

    const clearDateBtn = document.getElementById('export-clear-date');
    if (clearDateBtn) {
        clearDateBtn.addEventListener('click', () => {
            state.exportDateFrom = '';
            state.exportDateTo = '';
            renderConversationList(state.conversations);
        });
    }

    const doBtn = document.getElementById('export-do-btn');
    if (doBtn) doBtn.addEventListener('click', openExportDialog);
}

function getVisibleConversationUuids() {
    const items = document.querySelectorAll('.conv-item-export[data-uuid], .conv-item[data-uuid], .search-result[data-uuid]');
    return Array.from(items).map(el => el.dataset.uuid);
}

function refreshExportUI() {
    if (state.view === 'conversations') {
        const searchInput = document.getElementById('search-input');
        const query = searchInput ? searchInput.value.trim() : '';
        if (query) {
            handleSearchInput({ target: searchInput });
        } else {
            renderConversationList(state.conversations);
        }
    } else if (state.view === 'projects' && state.activeProject) {
        refreshProjectSidebar(state.activeProject);
    }
    updateExportEstimate();
}

async function updateExportEstimate() {
    const uuids = Array.from(state.exportSelected);
    if (!uuids.length) {
        state.exportEstimate = null;
        updateExportStatusLine();
        return;
    }
    try {
        state.exportEstimate = await API.estimateExport(uuids, 'compact');
        updateExportStatusLine();
    } catch (e) {
        /* skip */
    }
}

function updateExportStatusLine() {
    const count = state.exportSelected.size;
    const sizeStr = state.exportEstimate
        ? formatFileSize(state.exportEstimate.estimated_size || 0)
        : '~0 B';
    const statusRow = document.querySelector('.export-status-row');
    if (statusRow) {
        statusRow.innerHTML = `
            <span>${count} ${t('selected_count')} \u00B7 ~${sizeStr}</span>
            <button class="export-toolbar-btn export-do-btn" id="export-do-btn" ${count === 0 ? 'disabled' : ''}>${t('export_btn')}</button>
        `;
        const doBtn = document.getElementById('export-do-btn');
        if (doBtn) doBtn.addEventListener('click', openExportDialog);
    }

    const toggleAllBtn = document.getElementById('export-toggle-all-btn');
    if (toggleAllBtn) {
        const allVisible = getVisibleConversationUuids();
        const allSelected = allVisible.length > 0 && allVisible.every(u => state.exportSelected.has(u));
        toggleAllBtn.textContent = allSelected ? t('deselect_all') : t('select_all');
    }

    document.querySelectorAll('.export-checkbox').forEach(cb => {
        const isChecked = state.exportSelected.has(cb.dataset.uuid);
        cb.checked = isChecked;
        const parent = cb.closest('.conv-item-export');
        if (parent) parent.classList.toggle('selected', isChecked);
    });
}

function showToast(message, type = 'info', duration = 4000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.whiteSpace = 'pre-line';
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ===== Export Dialog =====
function openExportDialog() {
    const uuids = Array.from(state.exportSelected);
    if (!uuids.length) return;

    const sizeStr = state.exportEstimate
        ? formatFileSize(state.exportEstimate.estimated_size || 0)
        : '~0 B';
    const sizeBytes = state.exportEstimate ? (state.exportEstimate.estimated_size || 0) : 0;

    let sizeWarningHtml = '';
    if (sizeBytes > 30 * 1024 * 1024) {
        sizeWarningHtml = `<div class="export-size-warning danger">${t('size_danger')}</div>`;
    } else if (sizeBytes > 10 * 1024 * 1024) {
        sizeWarningHtml = `<div class="export-size-warning warning">${t('size_warning')}</div>`;
    }

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal">
        <div class="modal-header">
            <h2>${t('export_confirm_title')}</h2>
            <div class="modal-subtitle">${uuids.length} ${t('conversations').toLowerCase()} \u00B7 ~${sizeStr}</div>
        </div>
        <div class="modal-body">
            ${sizeWarningHtml ? `<div class="modal-warning ${sizeBytes > 30*1024*1024 ? 'danger' : 'warn'}">${sizeBytes > 30*1024*1024 ? t('size_danger') : t('size_warning')}</div>` : ''}
            <div class="modal-field">
                <label>${t('export_mode_label')}</label>
                <div class="modal-radio-group">
                    <div class="modal-radio active" data-name="export-content-mode" data-value="compact">${t('compact_mode')}</div>
                    <div class="modal-radio" data-name="export-content-mode" data-value="full">${t('full_mode')}</div>
                </div>
            </div>
            <div class="modal-field">
                <label>${t('export_format')}</label>
                <div class="modal-radio-group">
                    <div class="modal-radio active" data-name="export-format" data-value="json">JSON</div>
                    <div class="modal-radio" data-name="export-format" data-value="md">Markdown</div>
                </div>
            </div>
            <div class="modal-field">
                <label>${t('save_dir_label')}</label>
                <input type="text" id="export-save-dir" class="modal-input" placeholder="${t('save_dir_placeholder')}">
            </div>
            <div class="modal-field">
                <label>${t('export_desc_label')}</label>
                <textarea id="export-desc" placeholder="${t('export_desc_placeholder')}" rows="2"></textarea>
            </div>
            <div id="export-dialog-size-warning"></div>
        </div>
        <div class="modal-footer">
            <button class="btn-cancel" id="export-cancel-btn">${t('cancel')}</button>
            <button class="btn-primary" id="export-confirm-btn">${t('confirm_export')}</button>
        </div>
    </div>`;

    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeExportDialog();
    });
    document.getElementById('export-cancel-btn').addEventListener('click', closeExportDialog);
    document.getElementById('export-confirm-btn').addEventListener('click', handleExportConfirm);

    // Radio button toggle (modal-radio divs)
    overlay.querySelectorAll('.modal-radio-group').forEach(group => {
        group.querySelectorAll('.modal-radio').forEach(radio => {
            radio.addEventListener('click', () => {
                group.querySelectorAll('.modal-radio').forEach(r => r.classList.remove('active'));
                radio.classList.add('active');
            });
        });
    });

    // Re-estimate on content mode change
    overlay.querySelectorAll('.modal-radio[data-name="export-content-mode"]').forEach(radio => {
        radio.addEventListener('click', async () => {
            const mode = radio.dataset.value;
            try {
                const est = await API.estimateExport(uuids, mode);
                const newSize = est.estimated_bytes || 0;
                const newSizeStr = formatFileSize(newSize);
                const subtitle = overlay.querySelector('.modal-subtitle');
                if (subtitle) subtitle.textContent = `${uuids.length} ${t('conversations').toLowerCase()} \u00B7 ~${newSizeStr}`;

                const warnEl = document.getElementById('export-dialog-size-warning');
                if (warnEl) {
                    if (newSize > 30 * 1024 * 1024) {
                        warnEl.innerHTML = `<div class="modal-warning danger">${t('size_danger')}</div>`;
                    } else if (newSize > 10 * 1024 * 1024) {
                        warnEl.innerHTML = `<div class="modal-warning warn">${t('size_warning')}</div>`;
                    } else {
                        warnEl.innerHTML = '';
                    }
                }
            } catch (e) { /* skip */ }
        });
    });
}

function closeExportDialog() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.remove();
}

async function handleExportConfirm() {
    const overlay = document.querySelector('.modal-overlay');
    if (!overlay) return;

    const modeEl = overlay.querySelector('.modal-radio[data-name="export-content-mode"].active');
    const formatEl = overlay.querySelector('.modal-radio[data-name="export-format"].active');
    const mode = modeEl ? modeEl.dataset.value : 'compact';
    const format = formatEl ? formatEl.dataset.value : 'json';
    const description = document.getElementById('export-desc')?.value || '';
    const uuids = Array.from(state.exportSelected);

    const saveDir = document.getElementById('export-save-dir')?.value || '';

    const confirmBtn = document.getElementById('export-confirm-btn');
    if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.textContent = '...';
    }

    try {
        const result = await API.doExport(uuids, mode, format, description, saveDir);
        closeExportDialog();
        if (result.success) {
            showToast(`${t('export_success')}\n${result.path}`, 'success', 6000);
        } else {
            showToast(`${t('export_error')}: ${result.error || 'Unknown'}`, 'error');
        }
    } catch (e) {
        closeExportDialog();
        showToast(`${t('export_error')}: ${e.message}`, 'error');
    }
}

// ===== Date Grouping =====
function getDateGroup(dateStr) {
    if (!dateStr) return t('unknown');
    const date = new Date(dateStr);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);
    const lastMonth = new Date(today);
    lastMonth.setDate(lastMonth.getDate() - 30);

    if (date >= today) return t('today');
    if (date >= yesterday) return t('yesterday');
    if (date >= lastWeek) return t('last_7_days');
    if (date >= lastMonth) return t('last_30_days');

    return date.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', {
        year: 'numeric',
        month: 'long',
    });
}

function groupByDate(conversations) {
    const groups = new Map();
    for (const conv of conversations) {
        const group = getDateGroup(conv.created_at);
        if (!groups.has(group)) groups.set(group, []);
        groups.get(group).push(conv);
    }
    return groups;
}

// Filter conversations by export date range
function filterByDateRange(conversations) {
    if (!state.exportMode) return conversations;
    if (!state.exportDateFrom && !state.exportDateTo) return conversations;

    return conversations.filter(c => {
        if (!c.created_at) return false;
        const d = new Date(c.created_at);
        if (state.exportDateFrom && d < new Date(state.exportDateFrom)) return false;
        if (state.exportDateTo) {
            const to = new Date(state.exportDateTo);
            to.setDate(to.getDate() + 1);
            if (d >= to) return false;
        }
        return true;
    });
}

// ===== Sidebar: Conversation List =====
function renderConversationList(conversations) {
    const container = document.getElementById('sidebar-list');
    const filtered = filterByDateRange(conversations);

    let html = '';

    if (state.exportMode) {
        html += buildExportToolbarHtml();
    }

    if (!filtered.length) {
        html += `<div class="empty-state">${t('no_conversations')}</div>`;
        container.innerHTML = html;
        if (state.exportMode) bindExportToolbarEvents();
        return;
    }

    const groups = groupByDate(filtered);

    for (const [group, convs] of groups) {
        html += `<div class="date-group">
            <div class="date-group-label">${escapeHtml(group)}</div>
            ${convs.map(c => {
                const isActive = c.uuid === state.selectedId && !state.exportMode;
                const isChecked = state.exportSelected.has(c.uuid);
                if (state.exportMode) {
                    return `<div class="conv-item-export${isChecked ? ' selected' : ''}" data-uuid="${c.uuid}">
                        <input type="checkbox" class="export-checkbox" data-uuid="${c.uuid}" ${isChecked ? 'checked' : ''}>
                        <span class="conv-title">${escapeHtml(c.name || t('untitled'))}</span>
                        <span class="conv-meta">${c.message_count || 0} msg</span>
                    </div>`;
                }
                return `<div class="conv-item${isActive ? ' active' : ''}" data-uuid="${c.uuid}">
                    <span class="conv-title">${escapeHtml(c.name || t('untitled'))}</span>
                    <span class="conv-meta">${c.message_count || 0} msg</span>
                </div>`;
            }).join('')}
        </div>`;
    }

    container.innerHTML = html;

    if (state.exportMode) {
        bindExportToolbarEvents();
        bindExportCheckboxes(container);
    } else {
        bindConversationClicks(container);
    }

    const countEl = document.getElementById('conv-count');
    if (countEl) countEl.textContent = state.conversations.length;
}

function renderSearchResults(results) {
    const container = document.getElementById('sidebar-list');

    let html = '';
    if (state.exportMode) {
        html += buildExportToolbarHtml();
    }

    if (!results.length) {
        html += `<div class="empty-state">${t('no_results')}</div>`;
        container.innerHTML = html;
        if (state.exportMode) bindExportToolbarEvents();
        return;
    }

    html += `<div class="date-group-label">${results.length} ${t('results_found')}</div>`;

    for (const r of results) {
        const badge = r.match_type === 'content'
            ? `<span class="search-result-badge">${t('content_match')}</span>`
            : `<span class="search-result-badge">${t('title_match')}</span>`;
        const isChecked = state.exportSelected.has(r.uuid);
        if (state.exportMode) {
            html += `<div class="conv-item-export${isChecked ? ' selected' : ''}" data-uuid="${r.uuid}">
                <input type="checkbox" class="export-checkbox" data-uuid="${r.uuid}" ${isChecked ? 'checked' : ''}>
                <span class="conv-title">${escapeHtml(r.name)}</span>
            </div>`;
        } else {
            html += `<div class="search-result${r.uuid === state.selectedId ? ' active' : ''}" data-uuid="${r.uuid}">
                <div class="search-result-title">${badge}${escapeHtml(r.name)}</div>
                ${r.snippet && r.match_type === 'content'
                    ? `<div class="search-result-snippet">${escapeHtml(r.snippet)}</div>`
                    : ''}
            </div>`;
        }
    }

    container.innerHTML = html;

    if (state.exportMode) {
        bindExportToolbarEvents();
        bindExportCheckboxes(container);
    } else {
        container.querySelectorAll('.search-result').forEach(el => {
            el.addEventListener('click', () => selectConversation(el.dataset.uuid));
        });
    }
}

function bindConversationClicks(container) {
    container.querySelectorAll('.conv-item').forEach(el => {
        el.addEventListener('click', () => selectConversation(el.dataset.uuid));
    });
}

function bindExportCheckboxes(container) {
    container.querySelectorAll('.conv-item-export').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.tagName === 'INPUT') return;
            const uuid = el.dataset.uuid;
            toggleExportSelection(uuid);
            const cb = el.querySelector('.export-checkbox');
            if (cb) cb.checked = state.exportSelected.has(uuid);
            el.classList.toggle('selected', state.exportSelected.has(uuid));
        });
    });

    container.querySelectorAll('.export-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
            toggleExportSelection(cb.dataset.uuid);
            const parent = cb.closest('.conv-item-export');
            if (parent) parent.classList.toggle('selected', state.exportSelected.has(cb.dataset.uuid));
        });
    });
}

function toggleExportSelection(uuid) {
    if (state.exportSelected.has(uuid)) {
        state.exportSelected.delete(uuid);
    } else {
        state.exportSelected.add(uuid);
    }
    updateExportEstimate();
}

function updateSidebarActive() {
    document.querySelectorAll('.conv-item, .search-result').forEach(el => {
        el.classList.toggle('active', el.dataset.uuid === state.selectedId);
    });
}

// ===== Search =====
function handleSearchInput(e) {
    const query = e.target.value.trim();
    document.getElementById('search-clear').style.display = query ? 'flex' : 'none';

    if (!query) {
        renderConversationList(state.conversations);
        return;
    }

    // Instant client-side title filter
    const lower = query.toLowerCase();
    const filtered = state.conversations.filter(c =>
        (c.name || '').toLowerCase().includes(lower)
    );
    renderConversationList(filtered);

    // Debounced server-side full-text search
    clearTimeout(state.searchTimeout);
    state.searchTimeout = setTimeout(async () => {
        const current = document.getElementById('search-input').value.trim();
        if (current !== query) return;
        const results = await API.search(query);
        if (document.getElementById('search-input').value.trim() === query) {
            renderSearchResults(results);
        }
    }, 400);
}

function clearSearch() {
    const input = document.getElementById('search-input');
    input.value = '';
    document.getElementById('search-clear').style.display = 'none';
    renderConversationList(state.conversations);
}

// ===== Conversation Display =====
async function selectConversation(uuid) {
    if (state.exportMode) return;

    if (state.view !== 'conversations' && state.view !== 'projects') {
        state.view = 'conversations';
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === 'conversations');
        });
        document.getElementById('search-section').style.display = 'block';
        renderConversationList(state.conversations);
    }

    state.selectedId = uuid;
    updateSidebarActive();

    const main = document.getElementById('main-content');
    main.innerHTML = `<div class="loading">${t('loading')}</div>`;

    try {
        const conv = await API.getConversation(uuid);
        renderConversation(conv);
    } catch (e) {
        main.innerHTML = `<div class="empty-state">${t('load_failed')}</div>`;
    }
}

async function renderConversation(conv) {
    const main = document.getElementById('main-content');
    const messages = conv.chat_messages || [];
    const userName = state.stats?.user?.full_name || 'U';
    const userInitial = userName[0].toUpperCase();

    let taggedProjects = [];
    try {
        taggedProjects = await API.getConversationProjects(conv.uuid);
    } catch (e) { /* skip */ }

    const tagBadgesHtml = taggedProjects.map(p =>
        `<span class="tag-badge" data-project-uuid="${p.uuid}">
            <span class="tag-badge-name">${escapeHtml(p.name)}</span>
            <span class="tag-badge-remove" data-project-uuid="${p.uuid}" data-conv-uuid="${conv.uuid}">&times;</span>
        </span>`
    ).join('');

    main.innerHTML = `<div class="conversation">
        <div class="conversation-header">
            <div class="conversation-header-top">
                <h1>${escapeHtml(conv.name || t('untitled'))}</h1>
                <div class="tag-area">
                    ${tagBadgesHtml}
                    <button class="tag-btn" id="tag-btn" title="${t('tag_project')}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                        <span>${t('tag_project')}</span>
                    </button>
                    <div class="tag-dropdown" id="tag-dropdown" style="display:none"></div>
                </div>
            </div>
            <span class="conversation-meta">${formatDate(conv.created_at)} \u00B7 ${messages.length} ${t('messages_unit')}</span>
        </div>
        <div class="messages">
            ${messages.map(msg => renderMessage(msg, userInitial)).join('')}
        </div>
    </div>`;

    highlightAll(main);
    bindToggleBlocks(main);
    bindTagControls(conv.uuid, taggedProjects);
    main.scrollTop = 0;
}

async function bindTagControls(convUuid, taggedProjects) {
    const btn = document.getElementById('tag-btn');
    const dropdown = document.getElementById('tag-dropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (dropdown.style.display !== 'none') {
            dropdown.style.display = 'none';
            return;
        }

        const projects = state.allProjects || await API.getProjects();
        state.allProjects = projects;

        const taggedIds = new Set(taggedProjects.map(p => p.uuid));
        dropdown.innerHTML = projects.map(p => `
            <label class="tag-option" data-project-uuid="${p.uuid}">
                <input type="checkbox" ${taggedIds.has(p.uuid) ? 'checked' : ''}
                       data-project-uuid="${p.uuid}">
                <span>${escapeHtml(p.name)}</span>
            </label>
        `).join('') || `<div class="tag-empty">${t('no_projects')}</div>`;

        dropdown.style.display = 'block';

        dropdown.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', async () => {
                const pid = cb.dataset.projectUuid;
                if (cb.checked) {
                    await API.tagConversation(pid, convUuid);
                } else {
                    await API.untagConversation(pid, convUuid);
                }
                const conv = await API.getConversation(convUuid);
                renderConversation(conv);

                if (state.activeProject) {
                    refreshProjectSidebar(state.activeProject);
                }
            });
        });
    });

    document.addEventListener('click', function closeDropdown(e) {
        if (!dropdown.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    }, { once: false });

    document.querySelectorAll('.tag-badge-remove').forEach(el => {
        el.addEventListener('click', async (e) => {
            e.stopPropagation();
            const pid = el.dataset.projectUuid;
            const cid = el.dataset.convUuid;
            await API.untagConversation(pid, cid);
            const conv = await API.getConversation(cid);
            renderConversation(conv);
            if (state.activeProject) {
                refreshProjectSidebar(state.activeProject);
            }
        });
    });
}

async function refreshProjectSidebar(projectUuid) {
    const convs = await API.getProjectConversations(projectUuid);
    const project = (state.allProjects || []).find(p => p.uuid === projectUuid);
    const projectName = project ? project.name : t('projects');

    const container = document.getElementById('sidebar-list');
    let html = '';

    if (state.exportMode) {
        html += buildExportToolbarHtml();
    }

    html += `<div class="project-filter">
        <span class="project-filter-label">${escapeHtml(projectName)}</span>
        <button class="project-filter-clear" id="clear-project-filter">&times;</button>
    </div>`;

    if (!convs.length) {
        html += `<div class="empty-state">${t('no_tagged')}<br><small>${t('tag_hint')}</small></div>`;
    } else {
        html += `<div class="date-group-label">${convs.length} ${t('conversations').toLowerCase()}</div>`;
        html += convs.map(c => {
            const isActive = c.uuid === state.selectedId && !state.exportMode;
            const isChecked = state.exportSelected.has(c.uuid);
            if (state.exportMode) {
                return `<div class="conv-item-export${isChecked ? ' selected' : ''}" data-uuid="${c.uuid}">
                    <input type="checkbox" class="export-checkbox" data-uuid="${c.uuid}" ${isChecked ? 'checked' : ''}>
                    <span class="conv-title">${escapeHtml(c.name || t('untitled'))}</span>
                    <span class="conv-meta">${c.message_count} ${t('messages_unit')}</span>
                </div>`;
            }
            return `<div class="conv-item${isActive ? ' active' : ''}" data-uuid="${c.uuid}">
                <span class="conv-title">${escapeHtml(c.name || t('untitled'))}</span>
                <span class="conv-meta">${c.message_count} ${t('messages_unit')}</span>
            </div>`;
        }).join('');
    }

    container.innerHTML = html;

    if (state.exportMode) {
        bindExportToolbarEvents();
        bindExportCheckboxes(container);
    } else {
        bindConversationClicks(container);
    }

    document.getElementById('clear-project-filter')?.addEventListener('click', () => {
        state.activeProject = null;
        document.querySelectorAll('.project-card').forEach(c => c.classList.remove('project-active'));
        if (state.exportMode) {
            renderSidebarMessage('');
        } else {
            renderSidebarMessage(t('click_project'));
        }
    });
}

function bindToggleBlocks(root) {
    root.querySelectorAll('.thinking-header, .tool-header').forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.target;
            if (!targetId) return;
            const content = document.getElementById(targetId);
            if (!content) return;
            const arrow = header.querySelector('.thinking-arrow, .tool-arrow');
            const expanded = content.classList.toggle('expanded');
            if (arrow) arrow.textContent = expanded ? '\u25BC' : '\u25B6';
            if (expanded) highlightAll(content);
        });
    });
}

function renderMessage(msg, userInitial) {
    const isHuman = msg.sender === 'human';

    const avatarHtml = isHuman
        ? `<div class="avatar avatar-user">${userInitial}</div>`
        : `<div class="avatar avatar-claude"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"/></svg></div>`;

    const senderName = isHuman ? t('you') : 'Claude';
    const timeStr = msg.created_at ? formatTime(msg.created_at) : '';
    const attachmentsHtml = renderAttachments(msg);

    const contentHtml = renderMessageContent(msg, isHuman);
    if (!contentHtml && !attachmentsHtml) return '';

    const msgText = getMessageText(msg);
    const cpId = msgText ? storeCopyText(msgText) : '';

    return `<div class="message ${isHuman ? 'message-human' : 'message-assistant'} copyable-block">
        <div class="message-header">
            ${avatarHtml}
            <span class="sender-name">${senderName}</span>
            ${timeStr ? `<span class="message-time">${timeStr}</span>` : ''}
            ${cpId ? copyBtnHtml(cpId) : ''}
        </div>
        ${contentHtml}
        ${attachmentsHtml}
    </div>`;
}

function renderMessageContent(msg, isHuman) {
    if (Array.isArray(msg.content) && msg.content.length) {
        return renderContentBlocks(msg.content, isHuman);
    }

    if (msg.text) {
        const rendered = isHuman
            ? `<p>${escapeHtml(msg.text).replace(/\n/g, '<br>')}</p>`
            : renderMarkdown(msg.text);
        return `<div class="message-content">${rendered}</div>`;
    }

    return '';
}

function renderContentBlocks(blocks, isHuman) {
    let html = '';
    for (const block of blocks) {
        switch (block.type) {
            case 'text':
                if (block.text && block.text.trim() !== UNSUPPORTED_PLACEHOLDER) {
                    const rendered = isHuman
                        ? `<p>${escapeHtml(block.text).replace(/\n/g, '<br>')}</p>`
                        : renderMarkdown(block.text);
                    html += `<div class="message-content">${rendered}</div>`;
                }
                break;

            case 'thinking': {
                const thinkingText = (block.thinking || '').trim();
                const isHidden = block.thinking_hidden || block.hidden || !thinkingText;
                const summaries = block.summaries || [];
                const summaryText = summaries.map(s => s.summary).filter(Boolean).join(' \u2192 ');
                const displaySummary = summaryText || t('thinking_process');

                if (isHidden) {
                    html += `<div class="thinking-block thinking-hidden">
                        <div class="thinking-header no-expand">
                            <svg class="thinking-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            <span class="thinking-label">${escapeHtml(displaySummary)}</span>
                        </div>
                    </div>`;
                } else {
                    const blockId = 'think-' + Math.random().toString(36).slice(2, 8);
                    const thinkCpId = storeCopyText(thinkingText);
                    html += `<div class="thinking-block copyable-block" data-block-id="${blockId}">
                        <div class="thinking-header" data-target="${blockId}">
                            <svg class="thinking-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            <span class="thinking-label">${escapeHtml(displaySummary)}</span>
                            ${copyBtnHtml(thinkCpId)}
                            <span class="thinking-arrow">\u25B6</span>
                        </div>
                        <div class="thinking-content" id="${blockId}"><div class="message-content">${renderMarkdown(thinkingText)}</div></div>
                    </div>`;
                }
                break;
            }

            case 'tool_use': {
                const toolName = block.name || 'tool';
                const toolMsg = block.message || block.display_content?.text || '';
                const inputStr = block.input ? JSON.stringify(block.input, null, 2) : '';
                const blockId = 'tool-' + Math.random().toString(36).slice(2, 8);
                const toolCpId = inputStr ? storeCopyText(inputStr) : '';
                html += `<div class="tool-block tool-use-block copyable-block" data-block-id="${blockId}">
                    <div class="tool-header" data-target="${blockId}">
                        <svg class="tool-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                        <span class="tool-name">${escapeHtml(toolName)}</span>
                        ${toolMsg ? `<span class="tool-msg">${escapeHtml(toolMsg)}</span>` : ''}
                        ${toolCpId ? copyBtnHtml(toolCpId) : ''}
                        <span class="tool-arrow">\u25B6</span>
                    </div>
                    ${inputStr ? `<div class="tool-content" id="${blockId}"><pre><code class="language-json">${escapeHtml(inputStr)}</code></pre></div>` : ''}
                </div>`;
                break;
            }

            case 'tool_result': {
                const resultName = block.name || 'result';
                const isError = block.is_error;
                let resultText = '';
                if (Array.isArray(block.content)) {
                    resultText = block.content
                        .filter(b => b.type === 'text')
                        .map(b => b.text)
                        .join('\n');
                } else if (typeof block.content === 'string') {
                    resultText = block.content;
                }
                if (!resultText) break;
                const blockId = 'res-' + Math.random().toString(36).slice(2, 8);
                const maxPreview = 120;
                const preview = resultText.length > maxPreview
                    ? resultText.slice(0, maxPreview) + '\u2026'
                    : resultText;
                const resCpId = storeCopyText(resultText);
                html += `<div class="tool-block tool-result-block${isError ? ' tool-error' : ''} copyable-block" data-block-id="${blockId}">
                    <div class="tool-header" data-target="${blockId}">
                        <svg class="tool-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                        <span class="tool-name">${escapeHtml(resultName)}</span>
                        <span class="tool-preview">${escapeHtml(preview)}</span>
                        ${copyBtnHtml(resCpId)}
                        <span class="tool-arrow">\u25B6</span>
                    </div>
                    <div class="tool-content" id="${blockId}"><pre><code>${escapeHtml(resultText)}</code></pre></div>
                </div>`;
                break;
            }

            default:
                break;
        }
    }

    return html;
}

const UNSUPPORTED_PLACEHOLDER = 'This block is not supported on your current device yet.';

function getMessageText(msg) {
    if (msg.text) return msg.text;
    if (msg.content) {
        if (typeof msg.content === 'string') return msg.content;
        if (Array.isArray(msg.content)) {
            return msg.content
                .filter(b => b.type === 'text' && b.text && b.text.trim() !== UNSUPPORTED_PLACEHOLDER)
                .map(b => b.text)
                .join('\n\n');
        }
    }
    return '';
}

function hasAttachments(msg) {
    return (msg.attachments && msg.attachments.length > 0) ||
           (msg.files && msg.files.length > 0);
}

function renderAttachments(msg) {
    const items = [];

    if (msg.attachments) {
        for (const att of msg.attachments) {
            items.push(att.file_name || att.filename || att.name || t('attachment'));
        }
    }
    if (msg.files) {
        for (const file of msg.files) {
            items.push(file.file_name || file.filename || file.name || t('file'));
        }
    }

    if (!items.length) return '';

    return `<div class="message-attachments">
        ${items.map(name => `
            <div class="attachment-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                    <polyline points="13 2 13 9 20 9"/>
                </svg>
                ${escapeHtml(name)}
            </div>
        `).join('')}
    </div>`;
}

// ===== Welcome Screen =====
function renderWelcome(stats) {
    if (!stats) return;
    const main = document.getElementById('main-content');
    const userName = stats.user?.full_name || 'User';
    const dateRange = stats.date_range?.start && stats.date_range?.end
        ? `${stats.date_range.start} ~ ${stats.date_range.end}`
        : '';

    main.innerHTML = `<div class="welcome">
        <div class="welcome-icon">\u2726</div>
        <h1>${t('hello')}, ${escapeHtml(userName)}</h1>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${stats.conversation_count}</div>
                <div class="stat-label">${t('conversations')}</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.message_count.toLocaleString()}</div>
                <div class="stat-label">${t('messages_unit')}</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.project_count}</div>
                <div class="stat-label">${t('projects')}</div>
            </div>
        </div>
        ${dateRange ? `<div class="welcome-date">${dateRange}</div>` : ''}
        <div class="welcome-hint">${t('select_conversation')}</div>
    </div>`;
}

// ===== Projects View =====
async function loadAndRenderProjects() {
    const main = document.getElementById('main-content');
    main.innerHTML = `<div class="loading">${t('loading')}</div>`;

    const [projects, memories] = await Promise.all([
        API.getProjects(),
        API.getMemories(),
    ]);
    state.projectsData = projects;
    state.allProjects = projects;
    const projectMemories = memories.project_memories || {};

    let html = `<div class="projects-view">
        <h1>${t('projects')} (${projects.length})</h1>
        ${!projects.length ? `<div class="empty-state">${t('no_projects')}</div>` : ''}
        ${projects.map(p => {
            const docs = p.docs || [];
            const mem = projectMemories[p.uuid];
            const memRaw = mem ? (typeof mem === 'string' ? mem : JSON.stringify(mem, null, 2)) : '';
            const memCpId = memRaw ? storeCopyText(memRaw) : '';
            const memHtml = memRaw
                ? `<div class="project-memory message-content copyable-block">${copyBtnHtml(memCpId)}${renderMarkdown(memRaw)}</div>`
                : '';
            const isActive = state.activeProject === p.uuid;
            const selectAllBtnHtml = state.exportMode
                ? `<button class="export-toolbar-btn export-select-project" data-project-uuid="${p.uuid}">${t('select_project_convs')}</button>`
                : '';
            return `<div class="project-card${isActive ? ' project-active' : ''}" data-project-uuid="${p.uuid}">
                <div class="project-name">${escapeHtml(p.name || t('unnamed_project'))}</div>
                <div class="project-meta">
                    ${t('created_at')} ${formatDate(p.created_at)}${docs.length ? ` \u00B7 ${docs.length} ${t('docs_unit')}` : ''}
                </div>
                ${p.description ? (() => { const descCpId = storeCopyText(p.description); return `<div class="project-docs copyable-block">${copyBtnHtml(descCpId)}${escapeHtml(p.description)}</div>`; })() : ''}
                ${docs.length ? `<div class="project-docs">${docs.map(d => escapeHtml(d.filename || d.name || t('untitled'))).join(', ')}</div>` : ''}
                ${memHtml}
                ${selectAllBtnHtml}
            </div>`;
        }).join('')}
    </div>`;

    main.innerHTML = html;
    highlightAll(main);

    main.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('export-select-project')) return;
            selectProject(card.dataset.projectUuid);
        });
    });

    // Bind "select all from project" buttons in export mode
    if (state.exportMode) {
        main.querySelectorAll('.export-select-project').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const projectUuid = btn.dataset.projectUuid;
                try {
                    const convs = await API.getProjectConversations(projectUuid);
                    convs.forEach(c => state.exportSelected.add(c.uuid));
                    updateExportEstimate();
                } catch (err) { /* skip */ }
            });
        });
    }

    main.scrollTop = 0;
}

async function selectProject(projectUuid) {
    state.activeProject = projectUuid;
    state.allProjects = state.allProjects || state.projectsData;

    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.toggle('project-active', card.dataset.projectUuid === projectUuid);
    });

    const container = document.getElementById('sidebar-list');
    container.innerHTML = `<div class="loading" style="height:auto;padding:20px">${t('loading')}</div>`;

    await refreshProjectSidebar(projectUuid);
}

// ===== Memories View =====
async function loadAndRenderMemories() {
    const main = document.getElementById('main-content');
    main.innerHTML = `<div class="loading">${t('loading')}</div>`;

    const memories = await API.getMemories();
    let html = `<div class="memories-view"><h1>${t('claude_memories')}</h1>`;

    if (memories.conversations_memory) {
        html += `<div class="memory-section">
            <h2>${t('conversation_memory')}</h2>
            <div class="memory-content message-content">${renderMarkdown(memories.conversations_memory)}</div>
        </div>`;
    }

    const files = memories.memory_files || [];
    if (files.length) {
        html += `<div class="memory-section">
            <h2>${t('memory_files')} (${files.length})</h2>
            ${files.map((f, i) => `
                <div class="memory-file">
                    <div class="memory-file-header" data-idx="${i}">
                        <span class="arrow">\u25B6</span>
                        <span class="memory-file-path">${escapeHtml(f.path)}</span>
                        ${f.updated_at ? `<span class="memory-file-date">${formatDate(f.updated_at)}</span>` : ''}
                    </div>
                    <div class="memory-file-content message-content" id="mf-${i}">${renderMarkdown(f.content || '')}</div>
                </div>
            `).join('')}
        </div>`;
    }

    html += '</div>';
    main.innerHTML = html;
    highlightAll(main);

    main.querySelectorAll('.memory-file-header').forEach(header => {
        header.addEventListener('click', () => {
            const idx = header.dataset.idx;
            const content = document.getElementById(`mf-${idx}`);
            const arrow = header.querySelector('.arrow');
            const expanded = content.classList.toggle('expanded');
            arrow.textContent = expanded ? '\u25BC' : '\u25B6';
        });
    });

    main.scrollTop = 0;
}

// ===== Utilities =====
const COPY_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
const CHECK_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

function copyBtnHtml(copyId) {
    return `<button class="copy-btn" data-copy-id="${copyId}" title="Copy">${COPY_ICON}</button>`;
}

const _copyStore = {};
let _copyIdCounter = 0;

function storeCopyText(text) {
    const id = 'cp-' + (++_copyIdCounter);
    _copyStore[id] = text;
    return id;
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;opacity:0;left:-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
    } finally {
        textarea.remove();
    }
    return Promise.resolve();
}

function setupCopyButtons(root) {
    root.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            e.preventDefault();
            const id = btn.dataset.copyId;
            const text = _copyStore[id];
            if (!text) return;
            try {
                await copyToClipboard(text);
                btn.innerHTML = CHECK_ICON;
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.innerHTML = COPY_ICON;
                    btn.classList.remove('copied');
                }, 1500);
            } catch (err) {
                console.error('Copy failed:', err);
            }
        });
    });
}

function escapeHtml(text) {
    if (!text) return '';
    const el = document.createElement('div');
    el.textContent = text;
    return el.innerHTML;
}

function renderMarkdown(text) {
    if (!text) return '';
    if (typeof marked !== 'undefined') {
        try { return marked.parse(text); } catch (e) { /* skip */ }
    }
    return escapeHtml(text).replace(/\n/g, '<br>');
}

function highlightAll(root) {
    setupCopyButtons(root);
    if (typeof hljs !== 'undefined') {
        root.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }
    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(root, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true },
            ],
            throwOnError: false,
            trust: true,
        });
    }
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        const d = new Date(dateStr);
        const locale = currentLang === 'zh' ? 'zh-CN' : 'en-US';
        return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) {
        return dateStr.slice(0, 10);
    }
}

function formatTime(dateStr) {
    if (!dateStr) return '';
    try {
        const d = new Date(dateStr);
        const locale = currentLang === 'zh' ? 'zh-CN' : 'en-US';
        return d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
        return '';
    }
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);
