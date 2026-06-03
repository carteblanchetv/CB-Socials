// Carte Blanche Social Copy & Scheduling Engine

// 1. Initial State & Configuration
const PLATFORMS_CONFIG = {
  twitter: { name: 'X', limit: 280, color: 'var(--color-twitter)', icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
  facebook: { name: 'Facebook', limit: 63206, color: 'var(--color-facebook)', icon: `<svg width="12" height="12" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
  instagram: { name: 'Instagram', limit: 2200, color: 'var(--color-instagram-end)', icon: `<svg width="12" height="12" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>` },
  bluesky: { name: 'BlueSky', limit: 300, color: 'var(--color-bluesky)', icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.272c-1.233-1.636-3.834-4.63-7.556-7.054C2.39 2.802 0 1.274 0 3.518c0 1.547.773 4.636 2.39 7.053 1.233 1.638 2.467 2.32 3.864 2.32C4.856 12.891 3.62 13.57 2.39 15.21c-1.617 2.417-2.39 5.506-2.39 7.053 0 2.244 2.39.716 4.444-1.303 3.722-2.424 6.323-5.418 7.556-7.054 1.233 1.636 3.834 4.63 7.556 7.054 2.054 2.02 4.444 3.547 4.444 1.303 0-1.547-.773-4.636-2.39-7.053-1.233-1.638-2.467-2.32-3.864-2.32 1.398 0 2.632-.68 3.864-2.32 1.617-2.417 2.39-5.506 2.39-7.053 0-2.244-2.39-.716-4.444 1.303-3.722 2.424-6.323 5.418-7.556 7.054z"/></svg>` },
  tiktok: { name: 'TikTok', limit: 2200, color: 'var(--color-tiktok-accent)', icon: `<svg width="12" height="12" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.52-4.06-1.37-.28-.2-.53-.43-.77-.68-.07 2.64-.02 5.28-.05 7.92-.09 2.11-.69 4.25-2.15 5.82-1.6 1.77-4.14 2.53-6.49 2.22-2.7-.31-5.12-2.22-5.99-4.83-1.07-3.05-.12-6.7 2.41-8.63 1.58-1.24 3.62-1.83 5.64-1.63v4.03c-1.12-.13-2.31.11-3.19.83-.93.73-1.38 1.99-1.2 3.16.19 1.41 1.37 2.59 2.79 2.77 1.53.22 3.15-.65 3.68-2.11.23-.62.29-1.29.28-1.95.01-4.73-.01-9.46.01-14.19z"/></svg>` },
  youtube: { name: 'YouTube', limit: 5000, color: 'var(--color-youtube)', icon: `<svg width="12" height="12" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.5 12 20.5 12 20.5s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>` }
};

// Seeding standard suggested times for three times per day
const POSTING_SUGGESTIONS = {
  Mon: [
    { platform: 'twitter', times: ['09:00 AM', '01:00 PM', '06:00 PM'], engagement: 88 },
    { platform: 'facebook', times: ['10:00 AM', '02:00 PM', '07:00 PM'], engagement: 82 },
    { platform: 'instagram', times: ['09:00 AM', '12:30 PM', '06:30 PM'], engagement: 91 },
    { platform: 'bluesky', times: ['08:00 AM', '01:30 PM', '07:00 PM'], engagement: 84 },
    { platform: 'tiktok', times: ['11:00 AM', '03:00 PM', '08:00 PM'], engagement: 95 },
    { platform: 'youtube', times: ['12:00 PM', '04:00 PM', '09:00 PM'], engagement: 79 }
  ],
  Tue: [
    { platform: 'twitter', times: ['08:30 AM', '12:00 PM', '05:30 PM'], engagement: 94 },
    { platform: 'facebook', times: ['09:00 AM', '01:00 PM', '06:00 PM'], engagement: 89 },
    { platform: 'instagram', times: ['08:00 AM', '11:30 AM', '05:00 PM'], engagement: 96 },
    { platform: 'bluesky', times: ['09:00 AM', '12:00 PM', '06:00 PM'], engagement: 91 },
    { platform: 'tiktok', times: ['10:00 AM', '02:00 PM', '07:30 PM'], engagement: 97 },
    { platform: 'youtube', times: ['11:30 AM', '03:30 PM', '08:30 PM'], engagement: 88 }
  ],
  Wed: [
    { platform: 'twitter', times: ['09:00 AM', '01:00 PM', '06:30 PM'], engagement: 95 },
    { platform: 'facebook', times: ['10:00 AM', '02:00 PM', '07:00 PM'], engagement: 92 },
    { platform: 'instagram', times: ['09:00 AM', '12:00 PM', '06:00 PM'], engagement: 98 },
    { platform: 'bluesky', times: ['08:30 AM', '01:00 PM', '06:30 PM'], engagement: 94 },
    { platform: 'tiktok', times: ['09:00 AM', '03:00 PM', '08:00 PM'], engagement: 99 },
    { platform: 'youtube', times: ['10:00 AM', '04:00 PM', '09:00 PM'], engagement: 92 }
  ],
  Thu: [
    { platform: 'twitter', times: ['08:00 AM', '12:30 PM', '05:00 PM'], engagement: 92 },
    { platform: 'facebook', times: ['09:00 AM', '01:30 PM', '06:00 PM'], engagement: 88 },
    { platform: 'instagram', times: ['08:30 AM', '11:00 AM', '05:30 PM'], engagement: 93 },
    { platform: 'bluesky', times: ['09:00 AM', '12:30 PM', '06:00 PM'], engagement: 90 },
    { platform: 'tiktok', times: ['10:00 AM', '02:30 PM', '07:00 PM'], engagement: 94 },
    { platform: 'youtube', times: ['11:00 AM', '03:00 PM', '08:00 PM'], engagement: 86 }
  ],
  Fri: [
    { platform: 'twitter', times: ['09:00 AM', '01:00 PM', '06:00 PM'], engagement: 90 },
    { platform: 'facebook', times: ['09:00 AM', '12:00 PM', '05:00 PM'], engagement: 85 },
    { platform: 'instagram', times: ['09:00 AM', '12:00 PM', '06:00 PM'], engagement: 92 },
    { platform: 'bluesky', times: ['08:00 AM', '01:00 PM', '05:30 PM'], engagement: 88 },
    { platform: 'tiktok', times: ['11:00 AM', '03:00 PM', '09:00 PM'], engagement: 96 },
    { platform: 'youtube', times: ['12:00 PM', '04:00 PM', '08:30 PM'], engagement: 89 }
  ],
  Sat: [
    { platform: 'twitter', times: ['10:00 AM', '02:00 PM', '07:00 PM'], engagement: 74 },
    { platform: 'facebook', times: ['11:00 AM', '03:00 PM', '08:00 PM'], engagement: 76 },
    { platform: 'instagram', times: ['10:00 AM', '01:00 PM', '08:00 PM'], engagement: 85 },
    { platform: 'bluesky', times: ['10:30 AM', '02:30 PM', '07:30 PM'], engagement: 79 },
    { platform: 'tiktok', times: ['11:00 AM', '04:00 PM', '09:30 PM'], engagement: 88 },
    { platform: 'youtube', times: ['09:00 AM', '01:00 PM', '06:00 PM'], engagement: 82 }
  ],
  Sun: [
    { platform: 'twitter', times: ['09:00 AM', '01:00 PM', '06:00 PM'], engagement: 72 },
    { platform: 'facebook', times: ['10:00 AM', '02:00 PM', '07:00 PM'], engagement: 75 },
    { platform: 'instagram', times: ['09:00 AM', '02:00 PM', '07:00 PM'], engagement: 84 },
    { platform: 'bluesky', times: ['09:30 AM', '01:30 PM', '06:30 PM'], engagement: 78 },
    { platform: 'tiktok', times: ['10:00 AM', '03:00 PM', '09:00 PM'], engagement: 87 },
    { platform: 'youtube', times: ['10:00 AM', '02:00 PM', '07:00 PM'], engagement: 85 }
  ]
};

const MOCK_POSTS = [
  {
    id: 'post-1',
    title: 'CB Socials launch 🚀',
    text: 'Excited to announce the launch of CB Socials! A gorgeous, glassmorphic content dashboard that organizes post schedules and visualizes live preview feeds in real-time. Try it out now! #design #socialmedia #SaaS',
    platforms: ['twitter', 'bluesky', 'facebook'],
    scheduledDate: '2026-06-01',
    scheduledTime: '09:00',
    status: 'Scheduled'
  },
  {
    id: 'post-2',
    title: 'Behind the Scenes snapshot',
    text: 'A sneak peek of the premium dark-theme interface we created for social creators. Minimal design and ultra responsive. Let us know what you think!',
    platforms: ['instagram', 'tiktok'],
    scheduledDate: '2026-05-29',
    scheduledTime: '12:30',
    status: 'Published'
  },
  {
    id: 'post-3',
    title: 'Tips for scheduling engagement',
    text: 'Tip #1: Always check for platform specific character limits. For instance, Twitter has a 280 character ceiling while BlueSky allows up to 300! Aligning your campaigns ensures perfect formatting.',
    platforms: ['twitter', 'bluesky', 'youtube'],
    scheduledDate: '2026-06-03',
    scheduledTime: '18:00',
    status: 'Draft'
  }
];

const MOCK_COPY_LIBRARY = [
  {
    id: 'copy-1',
    title: 'Brand Bio — Short',
    category: 'Bios',
    platforms: ['twitter', 'instagram', 'bluesky'],
    text: 'Carte Blanche — where bold ideas meet beautiful execution. Content that cuts through the noise. 🎯',
    updatedAt: new Date().toISOString()
  },
  {
    id: 'copy-2',
    title: 'Weekly Hook',
    category: 'Hooks',
    platforms: ['tiktok', 'instagram'],
    text: 'This week we\'re talking about something that\'s been on everyone\'s mind. Stay tuned for the full breakdown 👀',
    updatedAt: new Date().toISOString()
  },
  {
    id: 'copy-3',
    title: 'General CTA',
    category: 'CTAs',
    platforms: ['facebook', 'instagram'],
    text: 'Love what you see? Drop a comment below or share this with someone who needs to hear it. 💬',
    updatedAt: new Date().toISOString()
  }
];

const SEED_STORIES = [
  { id: 'story-1', txDate: '31 MAY 2026', title: 'WRATH OF THE BREEDE', legalNote: '', copyVersions: ['Mud-caked cellars, uprooted trellises, vast expanses of vineyard reduced to swampland. The historic Robertson Wine Valley rebuilds after historic floods.', 'A legacy built by generations of farmers, threatened by historic floods in a matter of hours. What can be saved from the wreckage?', 'It tore through the valley with a force locals have never seen before. More than a million bottles of wine destroyed - livelihoods and legacies threatened. But the community\'s spirit is harder to wash away.'], updatedAt: new Date().toISOString() },
  { id: 'story-2', txDate: '31 MAY 2026', title: 'UNCOOPERATIVE COOPERATIVE', legalNote: 'No mention of Anweskus anywhere (even the filenames, please)', copyVersions: ['They packed up their lives and moved to a remote farm in search of self-governance. But this great trek is ending, for some, in tears.', 'Communal living on the remote West Coast. For some, a dream come true. But now, neighbours are turning on each other in a bitter fight for survival.', 'They were promised an Afrikaner utopia - freedom, ownership and work. Families put everything on the line - but now they are trapped in limbo.', 'It began as a dream of land, work and independence. Families invested everything. But was this remote cooperative ever even legal?'], updatedAt: new Date().toISOString() },
  { id: 'story-3', txDate: '31 MAY 2026', title: 'SKATE A NATION', legalNote: '', copyVersions: ['A skateboard, a stranger, and a journey that went viral - as crowds gather, communities rally and South Africans show up for something good.', 'An American skater set out from Uganda to cross Africa for charity. When his Ugandan teammates were denied SA visas, he pushed on alone. Then South Africa showed up.', 'What does it look like when a community decides to show up? A US skateboarder witnessed the spirit of South Africa.'], updatedAt: new Date().toISOString() },
  { id: 'story-4', txDate: '24 MAY 2026', title: 'CONTRACT FOR VIOLENCE?', legalNote: 'No mention of Ensure anywhere (even the filenames, please)', copyVersions: ['Brutally beaten, driven away... Months later, he\'s still missing. An isolated incident, or a pattern of violence in plain sight?', 'A public security contract, reports of beatings, and a disappearance. A case of rogue officers, or a campaign of violence?', 'Reports of beatings - then, a brutal assault caught on camera. But no one has been charged. Is a security company targeting activists?', 'An alleged pattern of violence emerges on Durban\'s streets. Activists say warnings were ignored. Are authorities turning a blind eye?'], updatedAt: new Date().toISOString() },
  { id: 'story-5', txDate: '24 MAY 2026', title: 'VENEZUELA: A NATION REAWAKENS', legalNote: '', copyVersions: ['Its authoritarian president is gone, but Venezuela\'s future remains unwritten. A fragile new era of hope and uncertainty.', 'A South African teacher living in Caracas witnessed a nation in collapse... Now, through his eyes, we see Venezuela standing at a crossroads.', 'It\'s a country historically plagued by poverty, inflation and authoritarian government. Now, its future is in flux. A new era is beginning.'], updatedAt: new Date().toISOString() },
  { id: 'story-6', txDate: '17 MAY 2026', title: 'SHERIFF SHAMBLES', legalNote: '', copyVersions: ['A deep dive into the world of sheriffs where allegations of corruption have surfaced. But the Minister of Justice says there is nothing to see here.', 'They\'re the enforcement arm of the courts, and it can be a lucrative position. But insiders say all is not well in the world of sheriffs.', 'Allegations against a vital arm of the justice system... The minister insists they hold no water. Who holds the truth?'], updatedAt: new Date().toISOString() }
];

// Safe localStorage parsing helper
function loadStoredData(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Return parsed value if it is not null
      if (parsed !== null) return parsed;
    }
  } catch (e) {
    console.error(`Error parsing stored data for key "${key}":`, e);
  }
  return fallback;
}

let appState = {
  posts: loadStoredData('cbsocials_posts', MOCK_POSTS),
  stories: loadStoredData('cbsocials_stories', SEED_STORIES),
  storySearch: '',
  collapsedGroups: new Set(loadStoredData('cbsocials_collapsed_groups', [])),
  activeHubTab: 'stories',
  copyLibrary: loadStoredData('cbsocials_copy_library', MOCK_COPY_LIBRARY),
  activeCopyFilter: 'all',
  activeDay: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()],
  searchQuery: '',
  filterPlatform: 'all',
  filterStatus: 'all',
  selectedPreviewPostId: null,
  activePreviewPlatform: 'twitter',
  optimizerMode: 'industry',
  importedAnalytics: loadStoredData('cbsocials_analytics', [])
};

// Save state to LocalStorage
function saveState() {
  try {
    localStorage.setItem('cbsocials_posts', JSON.stringify(appState.posts));
    updateStats();
  } catch (e) {
    console.error('Error saving cbsocials_posts:', e);
  }
}

function saveStories() {
  try {
    localStorage.setItem('cbsocials_stories', JSON.stringify(appState.stories));
    console.log('Stories saved to localStorage. Total:', appState.stories.length);
  } catch (e) {
    console.error('Error saving cbsocials_stories:', e);
  }
}

function saveCopyLibrary() {
  localStorage.setItem('cbsocials_copy_library', JSON.stringify(appState.copyLibrary));
}

// 2. DOM Elements
const elements = {
  dayTabsList: document.getElementById('day-tabs-list'),
  suggestionsGrid: document.getElementById('suggestions-grid'),
  draftsGrid: document.getElementById('drafts-grid'),
  draftsEmptyState: document.getElementById('drafts-empty-state'),
  searchInput: document.getElementById('search-input'),
  filterPlatform: document.getElementById('filter-platform'),
  filterStatus: document.getElementById('filter-status'),
  btnNewPost: document.getElementById('btn-new-post'),
  btnEmptyCreate: document.getElementById('btn-empty-create'),
  postModal: document.getElementById('post-modal'),
  modalTitle: document.getElementById('modal-title'),
  btnModalClose: document.getElementById('btn-modal-close'),
  btnModalCancel: document.getElementById('btn-modal-cancel'),
  postForm: document.getElementById('post-form'),
  formPostId: document.getElementById('form-post-id'),
  formPostTitle: document.getElementById('form-post-title'),
  formPostDate: document.getElementById('form-post-date'),
  formPostTime: document.getElementById('form-post-time'),
  formPostStatus: document.getElementById('form-post-status'),
  formPostText: document.getElementById('form-post-text'),
  formCharCount: document.getElementById('form-char-count'),
  limitsWarnings: document.getElementById('limits-warnings'),
  feedSimulatorBody: document.getElementById('feed-simulator-body'),
  toast: document.getElementById('toast'),
  btnThemeToggle: document.getElementById('btn-theme-toggle'),
  countTotal: document.getElementById('count-total'),
  countScheduled: document.getElementById('count-scheduled'),
  countPublished: document.getElementById('count-published'),
  // Mode selectors & CSV elements
  modeIndustry: document.getElementById('mode-industry'),
  modeCustom: document.getElementById('mode-custom'),
  csvDropzone: document.getElementById('csv-dropzone'),
  csvFileInput: document.getElementById('csv-file-input'),
  csvBrowseTrigger: document.getElementById('csv-browse-trigger'),
  // Copy Library elements
  btnAddCopyItem: document.getElementById('btn-add-copy-item'),
  copyLibraryList: document.getElementById('copy-library-list'),
  copyLibraryEmpty: document.getElementById('copy-library-empty'),
  copyLibFilters: document.getElementById('copy-lib-filters'),
  copyItemModal: document.getElementById('copy-item-modal'),
  copyItemModalTitle: document.getElementById('copy-item-modal-title'),
  btnCopyItemModalClose: document.getElementById('btn-copy-item-modal-close'),
  btnCopyItemCancel: document.getElementById('btn-copy-item-cancel'),
  copyItemForm: document.getElementById('copy-item-form'),
  copyItemFormId: document.getElementById('copy-item-form-id'),
  copyItemFormTitle: document.getElementById('copy-item-form-title'),
  copyItemFormCategory: document.getElementById('copy-item-form-category'),
  copyItemFormText: document.getElementById('copy-item-form-text'),
  copyItemCharCount: document.getElementById('copy-item-char-count'),
  // Stories Hub elements
  storiesHubList: document.getElementById('stories-hub-list'),
  storiesHubEmpty: document.getElementById('stories-hub-empty'),
  storySearchInput: document.getElementById('story-search-input'),
  btnAddStory: document.getElementById('btn-add-story'),
  btnImportDocx: document.getElementById('btn-import-docx'),
  docxFileInput: document.getElementById('docx-file-input'),
  storyModal: document.getElementById('story-modal'),
  storyModalTitle: document.getElementById('story-modal-title'),
  btnStoryModalClose: document.getElementById('btn-story-modal-close'),
  btnStoryCancel: document.getElementById('btn-story-cancel'),
  storyForm: document.getElementById('story-form'),
  storyFormId: document.getElementById('story-form-id'),
  storyFormTxdate: document.getElementById('story-form-txdate'),
  storyFormTitle: document.getElementById('story-form-title'),
  storyFormLegal: document.getElementById('story-form-legal'),
  storyFormVersionsList: document.getElementById('story-copy-versions-list'),
  btnAddCopyVersion: document.getElementById('btn-add-copy-version'),
  hubTabStories: document.getElementById('hub-tab-stories'),
  hubTabDrafts: document.getElementById('hub-tab-drafts'),
  hubPanelStories: document.getElementById('hub-panel-stories'),
  hubPanelDrafts: document.getElementById('hub-panel-drafts')
};

// Custom Suggestions Generator based on local parsed CSV data
function getCustomSuggestions() {
  const day = appState.activeDay;
  const analytics = appState.importedAnalytics || [];
  const platforms = ['bluesky', 'facebook', 'instagram', 'tiktok', 'twitter', 'youtube'];
  
  return platforms.map(plat => {
    // Filter points matching platform and day of week
    const matches = analytics.filter(p => p.platform === plat && p.dayOfWeek === day);
    
    let times = [];
    let engagement = 50;
    let isCustom = false;
    
    if (matches.length >= 3) {
      isCustom = true;
      // Group by hour bins and compute engagement
      const bins = {};
      matches.forEach(item => {
        const hour = item.hour;
        if (!bins[hour]) bins[hour] = { count: 0, sum: 0 };
        bins[hour].count++;
        bins[hour].sum += item.engagementCount;
      });
      
      // Sort bins by average engagement
      const sortedHours = Object.keys(bins).sort((a, b) => {
        return (bins[b].sum / bins[b].count) - (bins[a].sum / bins[a].count);
      });
      
      // Take top 3
      const topHours = sortedHours.slice(0, 3);
      times = topHours.map(h => {
        const hourNum = parseInt(h, 10);
        const ampm = hourNum >= 12 ? 'PM' : 'AM';
        const displayHour = hourNum % 12 === 0 ? 12 : hourNum % 12;
        return `${String(displayHour).padStart(2, '0')}:00 ${ampm}`;
      });
      
      // Pad if less than 3 times found
      while (times.length < 3) {
        const defSuggestions = POSTING_SUGGESTIONS[day].find(s => s.platform === plat);
        const nextTime = defSuggestions.times[times.length] || '12:00 PM';
        if (!times.includes(nextTime)) {
          times.push(nextTime);
        } else {
          times.push('09:00 AM');
        }
      }
      
      // Average engagement rate representation
      engagement = Math.min(100, Math.round(Math.max(...matches.map(m => m.engagementCount)) / 10));
      if (engagement < 30) engagement = 65;
    } else {
      // Fallback to industry standard
      const defSuggestions = POSTING_SUGGESTIONS[day].find(s => s.platform === plat);
      times = [...defSuggestions.times];
      engagement = defSuggestions.engagement;
    }
    
    // Sort times chronologically
    times.sort((a, b) => {
      return convertTo24h(a).localeCompare(convertTo24h(b));
    });
    
    return {
      platform: plat,
      times,
      engagement,
      isCustom
    };
  });
}

// 3. Scheduling suggestions renderer
function renderSuggestions() {
  const suggestions = appState.optimizerMode === 'custom' 
    ? getCustomSuggestions() 
    : [...POSTING_SUGGESTIONS[appState.activeDay]];

  suggestions.sort((a, b) => {
    const nameA = PLATFORMS_CONFIG[a.platform]?.name || '';
    const nameB = PLATFORMS_CONFIG[b.platform]?.name || '';
    return nameA.localeCompare(nameB);
  });

  elements.suggestionsGrid.innerHTML = '';

  suggestions.forEach(item => {
    const config = PLATFORMS_CONFIG[item.platform];
    if (!config) return;

    const card = document.createElement('div');
    card.className = 'suggestion-card';

    // Build the UI
    card.innerHTML = `
      <div class="suggestion-header">
        <span class="platform-badge badge-${item.platform}">
          ${config.icon}
          ${config.name}
        </span>
        <span class="engagement-score">${item.isCustom ? '⭐ Personal Peak' : 'Industry Peak'}: ${item.engagement}% Engagement</span>
      </div>
      <div class="engagement-bar">
        <div class="engagement-bar-fill" style="width: ${item.engagement}%; background: ${config.color}"></div>
      </div>
      <div class="times-row">
        ${item.times.map(t => `
          <button class="time-pill" data-platform="${item.platform}" data-time="${t}">
            ${t}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        `).join('')}
      </div>
    `;

    elements.suggestionsGrid.appendChild(card);
  });

  // Attach event listeners to time pills
  elements.suggestionsGrid.querySelectorAll('.time-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const platform = pill.dataset.platform;
      const timeStr = pill.dataset.time;
      openNewPostModalForSuggested(platform, timeStr);
    });
  });
}

// Convert 12 hour AM/PM string to 24h format for HTML time input
function convertTo24h(time12h) {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

// Map day of week name to the upcoming calendar date
function getNextDateForDay(dayName) {
  const daysMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const targetDay = daysMap[dayName];
  const today = new Date();
  const currentDay = today.getDay();
  
  let distance = targetDay - currentDay;
  if (distance <= 0) distance += 7; // Target day next week
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + distance);
  return targetDate.toISOString().split('T')[0];
}

function openNewPostModalForSuggested(platform, time12h) {
  resetPostForm();
  
  // Set values based on suggestion
  elements.formPostDate.value = getNextDateForDay(appState.activeDay);
  elements.formPostTime.value = convertTo24h(time12h);
  
  // Set platform checkbox
  document.querySelectorAll('input[name="form-platforms"]').forEach(cb => {
    cb.checked = (cb.value === platform);
    // Trigger styling change
    cb.dispatchEvent(new Event('change'));
  });

  elements.modalTitle.textContent = 'Create Suggested Draft';
  elements.postModal.style.display = 'flex';
  updateWarnings();
}

// 4. Copy Drafts Hub Renderer
function renderDrafts() {
  const query = appState.searchQuery.toLowerCase();
  
  const filteredPosts = appState.posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(query) || post.text.toLowerCase().includes(query);
    const matchesPlatform = appState.filterPlatform === 'all' || post.platforms.includes(appState.filterPlatform);
    const matchesStatus = appState.filterStatus === 'all' || post.status === appState.filterStatus;
    
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  if (filteredPosts.length === 0) {
    elements.draftsGrid.innerHTML = '';
    elements.draftsEmptyState.style.display = 'flex';
    return;
  }

  elements.draftsEmptyState.style.display = 'none';
  elements.draftsGrid.innerHTML = '';

  filteredPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = `draft-card ${appState.selectedPreviewPostId === post.id ? 'active-preview-card' : ''}`;
    
    // Character Limit checks
    let limitBadgesHTML = '';
    post.platforms.forEach(plat => {
      const config = PLATFORMS_CONFIG[plat];
      if (!config) return;
      const count = post.text.length;
      let warningClass = '';
      if (count > config.limit) {
        warningClass = 'danger';
      } else if (count > config.limit * 0.9) {
        warningClass = 'warning';
      }
      
      limitBadgesHTML += `
        <span class="mini-counter-badge ${warningClass}">
          ${config.name.split('/')[0]}: ${count}/${config.limit}
        </span>
      `;
    });

    const formattedTime = post.scheduledDate ? `${post.scheduledDate} @ ${post.scheduledTime}` : 'Not scheduled';

    card.innerHTML = `
      <div class="draft-card-header">
        <div class="draft-title">${escapeHtml(post.title)}</div>
        <div class="status-indicator status-${post.status.toLowerCase()}">
          <span class="status-dot"></span>
          <span>${post.status}</span>
        </div>
      </div>
      
      <div class="draft-body">${escapeHtml(post.text)}</div>
      
      <div class="draft-platforms">
        ${post.platforms.map(plat => {
          const config = PLATFORMS_CONFIG[plat];
          return `<span class="mini-badge" style="background: ${config.color}">${config.name}</span>`;
        }).join('')}
      </div>

      <div class="card-counter-row">
        ${limitBadgesHTML}
      </div>

      <div class="draft-meta">
        <div class="draft-time">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>${formattedTime}</span>
        </div>
      </div>

      <div class="draft-actions">
        <button class="btn btn-outline btn-sm btn-action-preview" data-id="${post.id}">Preview Feed</button>
        <button class="btn btn-outline btn-sm btn-action-copy" data-id="${post.id}">Copy Copy</button>
        <button class="btn btn-outline btn-sm btn-action-edit" data-id="${post.id}">Edit</button>
        <button class="btn btn-outline btn-sm btn-action-delete" style="color: var(--color-danger); border-color: rgba(239,68,68,0.2)" data-id="${post.id}">Delete</button>
      </div>
    `;

    // Highlight selected card if it matches preview ID
    if (appState.selectedPreviewPostId === post.id) {
      card.style.borderColor = 'var(--primary)';
      card.style.background = 'var(--card-hover-bg)';
    }

    elements.draftsGrid.appendChild(card);
  });

  // Attach Action Button Handlers
  elements.draftsGrid.querySelectorAll('.btn-action-preview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      appState.selectedPreviewPostId = btn.dataset.id;
      renderDrafts();
      renderFeedSimulator();
    });
  });

  elements.draftsGrid.querySelectorAll('.btn-action-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const post = appState.posts.find(p => p.id === btn.dataset.id);
      if (post) {
        navigator.clipboard.writeText(post.text).then(() => {
          showToast('Copy text copied to clipboard!');
        });
      }
    });
  });

  elements.draftsGrid.querySelectorAll('.btn-action-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      openEditPostModal(btn.dataset.id);
    });
  });

  elements.draftsGrid.querySelectorAll('.btn-action-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this post draft?')) {
        appState.posts = appState.posts.filter(p => p.id !== btn.dataset.id);
        if (appState.selectedPreviewPostId === btn.dataset.id) {
          appState.selectedPreviewPostId = null;
        }
        saveState();
        renderDrafts();
        renderFeedSimulator();
      }
    });
  });
}

// Helper to escape HTML tags
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 5. Mock Preview Simulator Feed Renderer
function renderFeedSimulator() {
  const feed = elements.feedSimulatorBody;
  if (!feed) return;
  
  if (!appState.selectedPreviewPostId) {
    feed.innerHTML = `
      <div class="preview-placeholder">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></svg>
        <p>Select "Preview Feed" on a post draft card to preview simulated live output.</p>
      </div>
    `;
    return;
  }

  const post = appState.posts.find(p => p.id === appState.selectedPreviewPostId);
  if (!post) {
    appState.selectedPreviewPostId = null;
    renderFeedSimulator();
    return;
  }

  const activePlatform = appState.activePreviewPlatform;
  
  // Custom styling rendering based on selected simulator platform
  if (activePlatform === 'twitter') {
    feed.innerHTML = `
      <div class="sim-tweet">
        <div class="sim-user-row">
          <div class="sim-avatar">CB</div>
          <div class="sim-user-info">
            <span class="sim-display-name">CB Socials <svg width="12" height="12" viewBox="0 0 24 24" fill="#1da1f2"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span>
            <span class="sim-handle">@cb_socials</span>
          </div>
        </div>
        <div class="sim-text">${formatHashtagsAndLinks(escapeHtml(post.text))}</div>
        <div class="sim-footer">
          <span>9:41 AM · ${post.scheduledDate || 'Today'} · CB Socials Scheduler</span>
        </div>
      </div>
    `;
  } else if (activePlatform === 'bluesky') {
    feed.innerHTML = `
      <div class="sim-bluesky">
        <div class="sim-user-row">
          <div class="sim-avatar">🦋</div>
          <div class="sim-user-info">
            <span class="sim-display-name">cbsocials.bsky.social</span>
            <span class="sim-handle">@cbsocials.bsky.social</span>
          </div>
        </div>
        <div class="sim-text">${formatHashtagsAndLinks(escapeHtml(post.text))}</div>
        <div class="sim-footer">
          <span>9:41 AM · ${post.scheduledDate || 'Today'}</span>
        </div>
      </div>
    `;
  } else if (activePlatform === 'instagram') {
    feed.innerHTML = `
      <div class="sim-instagram">
        <div class="sim-ig-header">
          <div class="sim-ig-avatar">
            <div class="sim-ig-avatar-inner">IG</div>
          </div>
          <span style="font-weight: 700; font-size: 0.75rem;">cb_socials</span>
        </div>
        <div class="sim-ig-image-placeholder">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span style="font-size: 0.7rem; font-weight: 600;">Post Image / Media Placeholder</span>
        </div>
        <div class="sim-ig-actions">
          <span style="color: red; font-size: 0.95rem;">♥</span>
          <span style="font-size: 0.95rem;">💬</span>
          <span style="font-size: 0.95rem;">✈</span>
        </div>
        <div class="sim-ig-caption">
          <span class="sim-ig-user">cb_socials</span>${formatHashtagsAndLinks(escapeHtml(post.text))}
        </div>
      </div>
    `;
  } else if (activePlatform === 'facebook') {
    feed.innerHTML = `
      <div class="sim-facebook">
        <div class="sim-fb-header">
          <div class="sim-fb-avatar">FB</div>
          <div class="sim-fb-meta">
            <span class="sim-fb-name">CB Socials Hub</span>
            <span class="sim-fb-time">${post.scheduledDate || 'Today'} at 9:41 AM · 🌐</span>
          </div>
        </div>
        <div class="sim-fb-text">${formatHashtagsAndLinks(escapeHtml(post.text))}</div>
      </div>
    `;
  }
}

function formatHashtagsAndLinks(text) {
  return text
    .replace(/(#[a-zA-Z0-9_]+)/g, '<span style="color: var(--primary)">$1</span>')
    .replace(/(@[a-zA-Z0-9_]+)/g, '<span style="color: var(--primary)">$1</span>')
    .replace(/(https?:\/\/[^\s]+)/g, '<span style="text-decoration: underline; color: var(--color-bluesky)">$1</span>');
}

// 6. Stats Calculator
function updateStats() {
  const total = appState.posts.length;
  const scheduled = appState.posts.filter(p => p.status === 'Scheduled').length;
  const published = appState.posts.filter(p => p.status === 'Published').length;

  elements.countTotal.textContent = total;
  elements.countScheduled.textContent = scheduled;
  elements.countPublished.textContent = published;
}

// 7. Modal Handlers
function openNewPostModal() {
  resetPostForm();
  elements.modalTitle.textContent = 'Create Copy Draft';
  elements.postModal.style.display = 'flex';
  updateWarnings();
}

function openEditPostModal(id) {
  const post = appState.posts.find(p => p.id === id);
  if (!post) return;

  resetPostForm();
  
  elements.formPostId.value = post.id;
  elements.formPostTitle.value = post.title;
  elements.formPostDate.value = post.scheduledDate;
  elements.formPostTime.value = post.scheduledTime;
  elements.formPostStatus.value = post.status;
  elements.formPostText.value = post.text;

  // Check boxes for platforms
  document.querySelectorAll('input[name="form-platforms"]').forEach(cb => {
    cb.checked = post.platforms.includes(cb.value);
  });

  elements.modalTitle.textContent = 'Edit Copy Draft';
  elements.postModal.style.display = 'flex';
  
  updateWarnings();
}

function resetPostForm() {
  elements.formPostId.value = '';
  elements.formPostTitle.value = '';
  elements.formPostDate.value = new Date().toISOString().split('T')[0];
  elements.formPostTime.value = '12:00';
  elements.formPostStatus.value = 'Draft';
  elements.formPostText.value = '';
  
  document.querySelectorAll('input[name="form-platforms"]').forEach(cb => {
    cb.checked = (cb.value === 'twitter'); // Default check Twitter
  });
}

function updateWarnings() {
  const text = elements.formPostText.value;
  elements.formCharCount.textContent = `${text.length} characters`;

  // Collect checked platforms
  const checkedPlats = [];
  document.querySelectorAll('input[name="form-platforms"]:checked').forEach(cb => {
    checkedPlats.push(cb.value);
  });

  elements.limitsWarnings.innerHTML = '';
  
  if (checkedPlats.length === 0) {
    elements.limitsWarnings.innerHTML = `
      <div class="warning-item warning">
        ⚠️ Select at least one platform to validate limits.
      </div>
    `;
    return;
  }

  checkedPlats.forEach(plat => {
    const config = PLATFORMS_CONFIG[plat];
    if (!config) return;

    if (text.length > config.limit) {
      const over = text.length - config.limit;
      const warningDiv = document.createElement('div');
      warningDiv.className = 'warning-item danger';
      warningDiv.innerHTML = `
        ❌ <strong>${config.name} limit exceeded!</strong> Over by ${over} character(s) (Maximum ${config.limit}).
      `;
      elements.limitsWarnings.appendChild(warningDiv);
    } else if (text.length > config.limit * 0.9) {
      const remaining = config.limit - text.length;
      const warningDiv = document.createElement('div');
      warningDiv.className = 'warning-item warning';
      warningDiv.innerHTML = `
        ⚠️ <strong>${config.name} limit warning.</strong> ${remaining} character(s) left.
      `;
      elements.limitsWarnings.appendChild(warningDiv);
    }
  });
}

// Toast Helper
function showToast(message) {
  elements.toast.querySelector('.toast-message').textContent = message;
  elements.toast.classList.add('show');
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2500);
}

// 8. Event Listeners Init
function initEvents() {
  // Theme Toggle
  elements.btnThemeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('cbsocials_theme', newTheme);
  });

  // Load Theme
  const savedTheme = localStorage.getItem('cbsocials_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  // Day suggestions picker
  elements.dayTabsList.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      elements.dayTabsList.querySelector('.day-tab.active').classList.remove('active');
      tab.classList.add('active');
      appState.activeDay = tab.dataset.day;
      renderSuggestions();
    });
  });

  // Search & Filter
  elements.searchInput.addEventListener('input', (e) => {
    appState.searchQuery = e.target.value;
    renderDrafts();
  });

  elements.filterPlatform.addEventListener('change', (e) => {
    appState.filterPlatform = e.target.value;
    renderDrafts();
  });

  elements.filterStatus.addEventListener('change', (e) => {
    appState.filterStatus = e.target.value;
    renderDrafts();
  });

  // Modal open triggers
  elements.btnNewPost.addEventListener('click', openNewPostModal);
  elements.btnEmptyCreate.addEventListener('click', openNewPostModal);

  // Modal close triggers
  elements.btnModalClose.addEventListener('click', () => {
    elements.postModal.style.display = 'none';
  });
  elements.btnModalCancel.addEventListener('click', () => {
    elements.postModal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === elements.postModal) {
      elements.postModal.style.display = 'none';
    }
  });

  // Live validation on post edit
  elements.formPostText.addEventListener('input', updateWarnings);
  document.querySelectorAll('input[name="form-platforms"]').forEach(cb => {
    cb.addEventListener('change', updateWarnings);
  });

  // Post form submit
  elements.postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = elements.formPostId.value;
    const title = elements.formPostTitle.value.trim();
    const text = elements.formPostText.value.trim();
    const date = elements.formPostDate.value;
    const time = elements.formPostTime.value;
    const status = elements.formPostStatus.value;

    const platforms = [];
    document.querySelectorAll('input[name="form-platforms"]:checked').forEach(cb => {
      platforms.push(cb.value);
    });

    if (platforms.length === 0) {
      alert('Please select at least one social platform.');
      return;
    }

    if (id) {
      // Edit post
      const index = appState.posts.findIndex(p => p.id === id);
      if (index !== -1) {
        appState.posts[index] = {
          id, title, text, platforms, scheduledDate: date, scheduledTime: time, status
        };
        showToast('Draft updated successfully!');
      }
    } else {
      // Create new
      const newPost = {
        id: `post-${Date.now()}`,
        title, text, platforms, scheduledDate: date, scheduledTime: time, status
      };
      appState.posts.push(newPost);
      // Auto-preview new drafts
      appState.selectedPreviewPostId = newPost.id;
      showToast('New copy draft created!');
    }

    saveState();
    elements.postModal.style.display = 'none';
    renderDrafts();
    renderFeedSimulator();
  });

  // Feed preview switcher
  document.querySelectorAll('.preview-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const previewPlatform = tab.dataset.previewPlatform;
      document.querySelector('.preview-tab.active').classList.remove('active');
      tab.classList.add('active');
      appState.activePreviewPlatform = previewPlatform;
      renderFeedSimulator();
    });
  });

  // Optimizer Mode Toggles
  elements.modeIndustry.addEventListener('click', () => {
    elements.modeIndustry.classList.add('active');
    elements.modeCustom.classList.remove('active');
    appState.optimizerMode = 'industry';
    renderSuggestions();
  });

  elements.modeCustom.addEventListener('click', () => {
    elements.modeCustom.classList.add('active');
    elements.modeIndustry.classList.remove('active');
    appState.optimizerMode = 'custom';
    renderSuggestions();
  });

  // Browse file trigger
  elements.csvBrowseTrigger.addEventListener('click', () => {
    elements.csvFileInput.click();
  });

  elements.csvFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleCSVUpload(e.target.files[0]);
    }
  });

  // Drag and Drop events
  const dropzone = elements.csvDropzone;
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragging');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragging');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      handleCSVUpload(files[0]);
    }
  });

  // ── Copy Library Events ───────────────────────────────────────────────────
  elements.btnAddCopyItem.addEventListener('click', () => openCopyItemModal());

  elements.btnCopyItemModalClose.addEventListener('click', closeCopyItemModal);
  elements.btnCopyItemCancel.addEventListener('click', closeCopyItemModal);

  window.addEventListener('click', (e) => {
    if (e.target === elements.copyItemModal) closeCopyItemModal();
  });

  // Live char counter in copy library modal
  elements.copyItemFormText.addEventListener('input', () => {
    const len = elements.copyItemFormText.value.length;
    elements.copyItemCharCount.textContent = `${len} character${len !== 1 ? 's' : ''}`;
  });

  // Category filter pills
  elements.copyLibFilters.querySelectorAll('.copy-filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      elements.copyLibFilters.querySelectorAll('.copy-filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      appState.activeCopyFilter = pill.dataset.filter;
      renderCopyLibrary();
    });
  });

  // Copy Library form submit
  elements.copyItemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = elements.copyItemFormId.value;
    const title = elements.copyItemFormTitle.value.trim();
    const category = elements.copyItemFormCategory.value;
    const text = elements.copyItemFormText.value.trim();
    const platforms = [];
    document.querySelectorAll('input[name="copy-item-platforms"]:checked').forEach(cb => {
      platforms.push(cb.value);
    });

    if (id) {
      // Edit existing
      const idx = appState.copyLibrary.findIndex(c => c.id === id);
      if (idx !== -1) {
        appState.copyLibrary[idx] = { id, title, category, platforms, text, updatedAt: new Date().toISOString() };
        showToast('Copy updated!');
      }
    } else {
      // Add new
      appState.copyLibrary.unshift({
        id: `copy-${Date.now()}`,
        title, category, platforms, text,
        updatedAt: new Date().toISOString()
      });
      showToast('Copy added to library!');
    }

    saveCopyLibrary();
    closeCopyItemModal();
    renderCopyLibrary();
  });

  // ── Stories Hub Events ───────────────────────────────────────────────────
  // Hub tab switching
  [elements.hubTabStories, elements.hubTabDrafts].forEach(tab => {
    tab.addEventListener('click', () => {
      const hub = tab.dataset.hub;
      appState.activeHubTab = hub;
      elements.hubTabStories.classList.toggle('active', hub === 'stories');
      elements.hubTabDrafts.classList.toggle('active', hub === 'drafts');
      elements.hubPanelStories.style.display = hub === 'stories' ? 'block' : 'none';
      elements.hubPanelDrafts.style.display = hub === 'drafts' ? 'block' : 'none';
    });
  });

  // Story search
  elements.storySearchInput.addEventListener('input', (e) => {
    appState.storySearch = e.target.value.toLowerCase();
    renderStoriesHub();
  });

  // Add Story button
  elements.btnAddStory.addEventListener('click', () => openStoryModal());

  // Import DOCX button
  elements.btnImportDocx.addEventListener('click', () => elements.docxFileInput.click());
  elements.docxFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleDocxImport(e.target.files[0]);
    e.target.value = ''; // reset so same file can be re-imported
  });

  // Story modal close
  elements.btnStoryModalClose.addEventListener('click', closeStoryModal);
  elements.btnStoryCancel.addEventListener('click', closeStoryModal);
  window.addEventListener('click', (e) => {
    if (e.target === elements.storyModal) closeStoryModal();
  });

  // Add copy version textarea
  elements.btnAddCopyVersion.addEventListener('click', () => addCopyVersionField());

  // Story form submit
  elements.storyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = elements.storyFormId.value;
    const txDate = elements.storyFormTxdate.value.trim().toUpperCase();
    const title = elements.storyFormTitle.value.trim().toUpperCase();
    const legalNote = elements.storyFormLegal.value.trim();
    const copyVersions = [];
    
    elements.storyFormVersionsList.querySelectorAll('.copy-version-field').forEach((el, index) => {
      const ta = el.querySelector('textarea');
      if (ta) {
        const v = ta.value.trim();
        if (v) {
          let platforms = [];
          if (id) {
            const story = appState.stories.find(s => s.id === id);
            if (story && story.copyVersions && story.copyVersions[index]) {
              const oldCv = story.copyVersions[index];
              if (getCopyVersionText(oldCv) === v) {
                platforms = getCopyVersionPlatforms(oldCv);
              }
            }
          }
          copyVersions.push({ text: v, platforms });
        }
      }
    });

    if (id) {
      const idx = appState.stories.findIndex(s => s.id === id);
      if (idx !== -1) {
        appState.stories[idx] = { id, txDate, title, legalNote, copyVersions, updatedAt: new Date().toISOString() };
        showToast('Story updated!');
      }
    } else {
      appState.stories.unshift({ id: `story-${Date.now()}`, txDate, title, legalNote, copyVersions, updatedAt: new Date().toISOString() });
      showToast('Story added!');
    }
    saveStories();
    closeStoryModal();
    renderStoriesHub();
  });
}

// ── Copy Library Modal Helpers ────────────────────────────────────────────────
function openCopyItemModal(id = null) {
  elements.copyItemFormId.value = '';
  elements.copyItemFormTitle.value = '';
  elements.copyItemFormCategory.value = 'General';
  elements.copyItemFormText.value = '';
  elements.copyItemCharCount.textContent = '0 characters';
  document.querySelectorAll('input[name="copy-item-platforms"]').forEach(cb => { cb.checked = false; });

  if (id) {
    const item = appState.copyLibrary.find(c => c.id === id);
    if (item) {
      elements.copyItemFormId.value = item.id;
      elements.copyItemFormTitle.value = item.title;
      elements.copyItemFormCategory.value = item.category;
      elements.copyItemFormText.value = item.text;
      elements.copyItemCharCount.textContent = `${item.text.length} characters`;
      document.querySelectorAll('input[name="copy-item-platforms"]').forEach(cb => {
        cb.checked = (item.platforms || []).includes(cb.value);
      });
      elements.copyItemModalTitle.textContent = 'Edit Copy';
    }
  } else {
    elements.copyItemModalTitle.textContent = 'Add Copy';
  }

  elements.copyItemModal.style.display = 'flex';
}

function closeCopyItemModal() {
  elements.copyItemModal.style.display = 'none';
}

// ── Copy Library Renderer ─────────────────────────────────────────────────────
function renderCopyLibrary() {
  const filter = appState.activeCopyFilter;
  const items = appState.copyLibrary.filter(c => filter === 'all' || c.category === filter);

  const list = elements.copyLibraryList;
  const emptyEl = elements.copyLibraryEmpty;

  list.innerHTML = '';

  if (items.length === 0) {
    emptyEl.style.display = 'flex';
    return;
  }

  emptyEl.style.display = 'none';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'copy-lib-card';

    // Platform badges
    const platBadges = (item.platforms || []).map(plat => {
      const cfg = PLATFORMS_CONFIG[plat];
      if (!cfg) return '';
      return `<span class="copy-lib-plat-badge" style="background:${cfg.color}">${cfg.name}</span>`;
    }).join('');

    // Format updated time
    const updatedDate = new Date(item.updatedAt);
    const timeAgo = formatTimeAgo(updatedDate);

    card.innerHTML = `
      <div class="copy-lib-card-top">
        <div class="copy-lib-card-meta">
          <span class="copy-lib-category-tag">${escapeHtml(item.category)}</span>
          <span class="copy-lib-time">${timeAgo}</span>
        </div>
        <div class="copy-lib-card-actions">
          <button class="btn-copy-lib-action btn-copy-lib-copy" data-id="${item.id}" title="Copy to clipboard">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
          <button class="btn-copy-lib-action btn-copy-lib-draft" data-id="${item.id}" title="Push to draft">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
          <button class="btn-copy-lib-action btn-copy-lib-edit" data-id="${item.id}" title="Edit">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
          <button class="btn-copy-lib-action btn-copy-lib-delete" data-id="${item.id}" title="Delete">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>
      </div>
      <h4 class="copy-lib-card-title">${escapeHtml(item.title)}</h4>
      <p class="copy-lib-card-text">${escapeHtml(item.text)}</p>
      ${platBadges ? `<div class="copy-lib-plat-badges">${platBadges}</div>` : ''}
    `;

    list.appendChild(card);
  });

  // Attach button events
  list.querySelectorAll('.btn-copy-lib-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = appState.copyLibrary.find(c => c.id === btn.dataset.id);
      if (item) {
        navigator.clipboard.writeText(item.text).then(() => showToast('Copy text copied to clipboard!'));
      }
    });
  });

  list.querySelectorAll('.btn-copy-lib-draft').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = appState.copyLibrary.find(c => c.id === btn.dataset.id);
      if (!item) return;
      const newPost = {
        id: `post-${Date.now()}`,
        title: item.title,
        text: item.text,
        platforms: item.platforms && item.platforms.length > 0 ? item.platforms : ['twitter'],
        scheduledDate: new Date().toISOString().split('T')[0],
        scheduledTime: '12:00',
        status: 'Draft'
      };
      appState.posts.unshift(newPost);
      appState.selectedPreviewPostId = newPost.id;
      saveState();
      renderDrafts();
      renderFeedSimulator();
      showToast(`"${item.title}" pushed to drafts!`);
    });
  });

  list.querySelectorAll('.btn-copy-lib-edit').forEach(btn => {
    btn.addEventListener('click', () => openCopyItemModal(btn.dataset.id));
  });

  list.querySelectorAll('.btn-copy-lib-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = appState.copyLibrary.find(c => c.id === btn.dataset.id);
      if (!item) return;
      if (confirm(`Delete "${item.title}"? This cannot be undone.`)) {
        appState.copyLibrary = appState.copyLibrary.filter(c => c.id !== btn.dataset.id);
        saveCopyLibrary();
        renderCopyLibrary();
        showToast('Copy deleted.');
      }
    });
  });
}

// ── Time-ago helper ───────────────────────────────────────────────────────────
function formatTimeAgo(date) {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  if (!parsedDate || isNaN(parsedDate.getTime())) return '';
  const now = new Date();
  const diff = Math.floor((now - parsedDate) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return parsedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

// Helper to extract text from a copy version (which can be a string or object)
function getCopyVersionText(cv) {
  if (!cv) return '';
  return typeof cv === 'string' ? cv : (cv.text || '');
}

// Helper to extract platforms from a copy version
function getCopyVersionPlatforms(cv) {
  if (!cv) return [];
  return typeof cv === 'string' ? [] : (cv.platforms || []);
}

// ── Stories Hub ───────────────────────────────────────────────────────────────
function renderStoriesHub() {
  const container = elements.storiesHubList;
  const emptyEl = elements.storiesHubEmpty;
  const query = appState.storySearch;

  let stories = appState.stories;
  if (query) {
    stories = stories.filter(s =>
      s.title.toLowerCase().includes(query) ||
      s.txDate.toLowerCase().includes(query) ||
      (s.legalNote || '').toLowerCase().includes(query) ||
      (s.copyVersions || []).some(v => getCopyVersionText(v).toLowerCase().includes(query))
    );
  }

  container.innerHTML = '';

  if (stories.length === 0) {
    emptyEl.style.display = 'flex';
    return;
  }
  emptyEl.style.display = 'none';

  // Sort by TX date descending (most recent first)
  const sortedStories = [...stories].sort((a, b) => {
    return parseTxDate(b.txDate) - parseTxDate(a.txDate);
  });

  // Group by TX date
  const groups = {};
  sortedStories.forEach(s => {
    if (!groups[s.txDate]) groups[s.txDate] = [];
    groups[s.txDate].push(s);
  });

  Object.keys(groups).forEach(txDate => {
    const isCollapsed = appState.collapsedGroups.has(txDate);
    const groupEl = document.createElement('div');
    groupEl.className = 'story-date-group' + (isCollapsed ? ' collapsed' : '');

    const storyList = groups[txDate];
    const groupHeader = document.createElement('div');
    groupHeader.className = 'story-date-header story-date-header--clickable';
    groupHeader.setAttribute('role', 'button');
    groupHeader.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
    groupHeader.innerHTML = `
      <div class="story-date-label">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        TX: <strong>${escapeHtml(txDate)}</strong>
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <span class="story-count-badge">${storyList.length} ${storyList.length === 1 ? 'story' : 'stories'}</span>
        <svg class="story-group-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    `;

    groupHeader.addEventListener('click', () => {
      const nowCollapsed = groupEl.classList.toggle('collapsed');
      groupHeader.setAttribute('aria-expanded', nowCollapsed ? 'false' : 'true');
      if (nowCollapsed) {
        appState.collapsedGroups.add(txDate);
      } else {
        appState.collapsedGroups.delete(txDate);
      }
      localStorage.setItem('cbsocials_collapsed_groups', JSON.stringify([...appState.collapsedGroups]));
    });

    groupEl.appendChild(groupHeader);

    storyList.forEach(story => {
      const storyCard = document.createElement('div');
      storyCard.className = 'story-card';

      const legalHtml = story.legalNote ? `
        <div class="story-legal-note">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span>${escapeHtml(story.legalNote)}</span>
        </div>
      ` : '';

      const copyVersionsHtml = (story.copyVersions || []).map((cv, i) => {
        const text = getCopyVersionText(cv);
        const cvPlatforms = getCopyVersionPlatforms(cv);
        
        const platformsList = ['twitter', 'bluesky', 'instagram', 'facebook', 'tiktok', 'youtube'];
        const platformBadgesHtml = platformsList.map(plat => {
          const isActive = cvPlatforms.includes(plat);
          let nameLetter = '';
          if (plat === 'twitter') nameLetter = 'X';
          else if (plat === 'bluesky') nameLetter = 'BS';
          else if (plat === 'instagram') nameLetter = 'IG';
          else if (plat === 'facebook') nameLetter = 'FB';
          else if (plat === 'tiktok') nameLetter = 'TT';
          else if (plat === 'youtube') nameLetter = 'YT';
          const config = PLATFORMS_CONFIG[plat];
          return `
            <button class="cv-platform-toggle ${isActive ? 'active' : ''}" 
                    data-story-id="${story.id}" 
                    data-cv-idx="${i}" 
                    data-platform="${plat}" 
                    style="--plat-color: ${config.color}"
                    title="Toggle ${config.name}">
              ${nameLetter}
            </button>
          `;
        }).join('');

        return `
          <div class="story-copy-row">
            <div class="story-copy-num">V${i + 1}</div>
            <div class="story-copy-text-container">
              <div class="story-copy-text">${escapeHtml(text)}</div>
              <div class="story-copy-platforms-row">
                <span class="story-copy-platforms-label">Platforms:</span>
                ${platformBadgesHtml}
              </div>
            </div>
            <div class="story-copy-actions">
              <button class="btn-copy-lib-action btn-story-copy-version" data-id="${story.id}" data-idx="${i}" title="Copy to clipboard">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
              <button class="btn-copy-lib-action btn-story-draft-version" data-id="${story.id}" data-idx="${i}" title="Push to draft">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
          </div>
        `;
      }).join('');

      storyCard.innerHTML = `
        <div class="story-card-header">
          <h4 class="story-title">${escapeHtml(story.title)}</h4>
          <div class="story-card-controls">
            <button class="btn-copy-lib-action btn-story-edit" data-id="${story.id}" title="Edit story">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="btn-copy-lib-action btn-copy-lib-delete btn-story-delete" data-id="${story.id}" title="Delete story">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            </button>
          </div>
        </div>
        ${legalHtml}
        <div class="story-copies-list">
          ${copyVersionsHtml || '<p style="font-size:0.72rem;color:var(--text-muted);padding:0.5rem 0;">No copy versions yet.</p>'}
        </div>
      `;

      groupEl.appendChild(storyCard);
    });

    container.appendChild(groupEl);
  });

  // Attach copy/draft/edit/delete/platform-toggle events
  container.querySelectorAll('.btn-story-copy-version').forEach(btn => {
    btn.addEventListener('click', () => {
      const story = appState.stories.find(s => s.id === btn.dataset.id);
      if (!story) return;
      const text = getCopyVersionText(story.copyVersions[parseInt(btn.dataset.idx, 10)]);
      navigator.clipboard.writeText(text).then(() => showToast('Copy text copied to clipboard!'));
    });
  });

  container.querySelectorAll('.btn-story-draft-version').forEach(btn => {
    btn.addEventListener('click', () => {
      const story = appState.stories.find(s => s.id === btn.dataset.id);
      if (!story) return;
      const text = getCopyVersionText(story.copyVersions[parseInt(btn.dataset.idx, 10)]);
      const newPost = {
        id: `post-${Date.now()}`,
        title: story.title + ' (V' + (parseInt(btn.dataset.idx, 10) + 1) + ')',
        text,
        platforms: ['twitter'],
        scheduledDate: new Date().toISOString().split('T')[0],
        scheduledTime: '12:00',
        status: 'Draft'
      };
      appState.posts.unshift(newPost);
      appState.selectedPreviewPostId = newPost.id;
      saveState();
      renderDrafts();
      renderFeedSimulator();
      showToast(`"${story.title}" copy pushed to drafts!`);
    });
  });

  container.querySelectorAll('.btn-story-edit').forEach(btn => {
    btn.addEventListener('click', () => openStoryModal(btn.dataset.id));
  });

  container.querySelectorAll('.cv-platform-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const storyId = btn.dataset.storyId;
      const cvIdx = parseInt(btn.dataset.cvIdx, 10);
      const platform = btn.dataset.platform;

      const story = appState.stories.find(s => s.id === storyId);
      if (!story) return;

      // Ensure the copy version is structured as an object
      let cv = story.copyVersions[cvIdx];
      if (typeof cv === 'string') {
        cv = { text: cv, platforms: [] };
        story.copyVersions[cvIdx] = cv;
      }

      if (!cv.platforms) cv.platforms = [];

      const platIdx = cv.platforms.indexOf(platform);
      if (platIdx !== -1) {
        cv.platforms.splice(platIdx, 1);
      } else {
        cv.platforms.push(platform);
      }

      saveStories();
      renderStoriesHub();
    });
  });

  container.querySelectorAll('.btn-story-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const story = appState.stories.find(s => s.id === btn.dataset.id);
      if (!story) return;
      if (confirm(`Delete "${story.title}"? This cannot be undone.`)) {
        appState.stories = appState.stories.filter(s => s.id !== btn.dataset.id);
        saveStories();
        renderStoriesHub();
        showToast('Story deleted.');
      }
    });
  });
}

function parseTxDate(dateStr) {
  if (!dateStr) return 0;
  try {
    // Convert "31 MAY 2026" → Date
    return new Date(dateStr.replace(/(\d+)\s+([A-Z]+)\s+(\d+)/, '$1 $2 $3'));
  } catch(e) { return 0; }
}

// ── Story Modal ───────────────────────────────────────────────────────────────
function openStoryModal(id = null) {
  elements.storyFormId.value = '';
  elements.storyFormTxdate.value = '';
  elements.storyFormTitle.value = '';
  elements.storyFormLegal.value = '';
  elements.storyFormVersionsList.innerHTML = '';

  if (id) {
    const story = appState.stories.find(s => s.id === id);
    if (story) {
      elements.storyFormId.value = story.id;
      elements.storyFormTxdate.value = story.txDate;
      elements.storyFormTitle.value = story.title;
      elements.storyFormLegal.value = story.legalNote || '';
      (story.copyVersions || []).forEach(v => addCopyVersionField(v));
      elements.storyModalTitle.textContent = 'Edit Story';
    }
  } else {
    elements.storyModalTitle.textContent = 'Add Story';
    addCopyVersionField(); // Start with one empty version
  }

  elements.storyModal.style.display = 'flex';
}

function closeStoryModal() {
  elements.storyModal.style.display = 'none';
}

function addCopyVersionField(value = '') {
  const textVal = typeof value === 'string' ? value : (value.text || '');
  const list = elements.storyFormVersionsList;
  const idx = list.children.length + 1;
  const wrapper = document.createElement('div');
  wrapper.className = 'copy-version-field';
  wrapper.innerHTML = `
    <div class="copy-version-field-header">
      <span class="copy-version-label">Version ${idx}</span>
      <button type="button" class="btn-copy-version-remove" title="Remove">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <textarea placeholder="Write copy version ${idx}..." style="min-height:70px; resize:vertical;">${escapeHtml(textVal)}</textarea>
  `;
  wrapper.querySelector('.btn-copy-version-remove').addEventListener('click', () => {
    wrapper.remove();
    // Re-number remaining versions
    list.querySelectorAll('.copy-version-label').forEach((lbl, i) => {
      lbl.textContent = `Version ${i + 1}`;
    });
  });
  list.appendChild(wrapper);
}

// ── Client-side DOCX Importer ─────────────────────────────────────────────────
function handleDocxImport(file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const arrayBuffer = e.target.result;
      const stories = await parseDocxToStories(arrayBuffer);
      if (stories.length === 0) {
        showToast('No stories found in document.');
        return;
      }
      // Merge: add stories not already in state (match by title+date)
      let added = 0;
      stories.forEach(s => {
        const exists = appState.stories.find(existing =>
          existing.title === s.title && existing.txDate === s.txDate
        );
        if (!exists) {
          appState.stories.push(s);
          added++;
        } else {
          // Update copy versions & legal note (preserving platform assignments where text matches)
          const oldVersions = exists.copyVersions || [];
          exists.copyVersions = s.copyVersions.map(newCvText => {
            const match = oldVersions.find(oldCv => getCopyVersionText(oldCv) === newCvText);
            return match ? match : newCvText;
          });
          exists.legalNote = s.legalNote;
          exists.updatedAt = s.updatedAt;
        }
      });
      saveStories();
      renderStoriesHub();
      showToast(`Imported ${stories.length} stories (${added} new, ${stories.length - added} updated)!`);
    } catch(err) {
      console.error('DOCX import error:', err);
      alert('Could not parse DOCX: ' + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

async function parseDocxToStories(arrayBuffer) {
  // Unzip the DOCX (it's a ZIP file) and read word/document.xml
  const zip = await unzipDocx(arrayBuffer);
  const xmlText = new TextDecoder('utf-8').decode(zip['word/document.xml']);

  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'application/xml');
  const NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';

  const paragraphs = [];
  doc.querySelectorAll('p').forEach(para => {
    const pPr = para.querySelector('pPr');
    const pStyle = pPr ? pPr.querySelector('pStyle') : null;
    const style = pStyle ? pStyle.getAttributeNS(NS, 'val') || pStyle.getAttribute('w:val') : null;

    let text = '';
    let isBold = false;
    para.querySelectorAll('r').forEach(run => {
      const rPr = run.querySelector('rPr');
      const bold = rPr && (rPr.querySelector('b') !== null);
      const tEl = run.querySelector('t');
      if (tEl && tEl.textContent) {
        text += tEl.textContent;
        if (bold) isBold = true;
      }
    });

    text = text.trim()
      .replace(/\u2019/g, "'").replace(/\u2018/g, "'")
      .replace(/\u201c/g, '"').replace(/\u201d/g, '"')
      .replace(/\u2026/g, '...').replace(/\u2013/g, '-').replace(/\u2014/g, '-')
      .replace(/\ufffd/g, '').replace(/\u00a0/g, ' ');

    if (text) paragraphs.push({ text, bold: isBold, style });
  });

  // Parse structure identical to Python parser
  const stories = [];
  let currentDate = null;
  let currentStory = null;
  const SKIP = ['FOR LATER', 'BEST OF 2025', 'MASTER DOC', 'TEASER COPY'];

  function looksLikeDate(t) {
    return /^\d{1,2}\s+[A-Z]+\s+\d{4}$/.test(t.trim());
  }
  function isTxDate(p) {
    return (p.bold && p.style === 'Heading1') || (p.bold && looksLikeDate(p.text));
  }
  function isStoryTitle(p) {
    if (p.style === 'Heading3') return true;
    const t = p.text.trim();
    return t === t.toUpperCase() && t.length < 80 && !p.bold && !looksLikeDate(t);
  }
  function isLegalNote(p) {
    return p.bold && !isTxDate(p) && !isStoryTitle(p);
  }

  paragraphs.forEach(p => {
    if (SKIP.some(s => p.text.includes(s))) return;
    if (isTxDate(p)) {
      if (currentStory) stories.push(currentStory);
      currentDate = p.text;
      currentStory = null;
    } else if (isStoryTitle(p) && currentDate) {
      if (currentStory) stories.push(currentStory);
      currentStory = { id: `story-${Date.now()}-${Math.random().toString(36).slice(2,6)}`, txDate: currentDate, title: p.text, legalNote: '', copyVersions: [], updatedAt: new Date().toISOString() };
    } else if (currentStory) {
      if (isLegalNote(p)) {
        currentStory.legalNote = p.text;
      } else {
        currentStory.copyVersions.push(p.text);
      }
    }
  });
  if (currentStory) stories.push(currentStory);
  return stories;
}

// Minimal DOCX unzipper using DecompressionStream (available in modern browsers)
async function unzipDocx(arrayBuffer) {
  const files = {};
  // Use JSZip-style manual parsing via DataView
  // DOCX files are ZIP archives — we iterate the local file headers
  const data = new Uint8Array(arrayBuffer);
  const view = new DataView(arrayBuffer);
  let offset = 0;

  while (offset < data.length - 4) {
    const sig = view.getUint32(offset, true);
    if (sig !== 0x04034b50) break; // Local file header signature

    const compression = view.getUint16(offset + 8, true);
    const compressedSize = view.getUint32(offset + 18, true);
    const uncompressedSize = view.getUint32(offset + 22, true);
    const fileNameLen = view.getUint16(offset + 26, true);
    const extraFieldLen = view.getUint16(offset + 28, true);
    const fileNameBytes = data.slice(offset + 30, offset + 30 + fileNameLen);
    const fileName = new TextDecoder().decode(fileNameBytes);
    const dataOffset = offset + 30 + fileNameLen + extraFieldLen;
    const compressedData = data.slice(dataOffset, dataOffset + compressedSize);

    if (compression === 0) {
      // Stored (no compression)
      files[fileName] = compressedData;
    } else if (compression === 8) {
      // Deflate — use DecompressionStream
      try {
        const ds = new DecompressionStream('deflate-raw');
        const writer = ds.writable.getWriter();
        const reader = ds.readable.getReader();
        writer.write(compressedData);
        writer.close();
        const chunks = [];
        let done = false;
        while (!done) {
          const result = await reader.read();
          done = result.done;
          if (result.value) chunks.push(result.value);
        }
        const totalLen = chunks.reduce((sum, c) => sum + c.length, 0);
        const combined = new Uint8Array(totalLen);
        let pos = 0;
        chunks.forEach(c => { combined.set(c, pos); pos += c.length; });
        files[fileName] = combined;
      } catch (e) {
        // Skip files that fail decompression
      }
    }

    offset = dataOffset + compressedSize;
  }

  if (!files['word/document.xml']) {
    throw new Error('Could not find word/document.xml in the uploaded file. Please ensure it is a valid .docx file.');
  }

  return files;
}


function handleCSVUpload(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    try {
      const rows = parseCSVText(text);
      if (rows.length < 2) {
        alert('CSV file appears to be empty or formatting is incorrect.');
        return;
      }
      const parsedPoints = processCSVData(rows);
      if (parsedPoints.length === 0) {
        alert('Could not detect social analytics headers in CSV. Please verify column headers.');
        return;
      }
      
      // Store in state and save
      appState.importedAnalytics = [...appState.importedAnalytics, ...parsedPoints];
      localStorage.setItem('cbsocials_analytics', JSON.stringify(appState.importedAnalytics));
      
      showToast(`Imported ${parsedPoints.length} analytics data points successfully!`);
      
      // Auto toggle to custom mode and re-render
      elements.modeCustom.click();
    } catch (err) {
      console.error(err);
      alert('Error parsing CSV: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// Robust CSV Line Parser supporting quotes
function parseCSVText(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i+1];
    
    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push('');
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++;
      }
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }
  return lines;
}

// Maps column indexes from headers and parses raw lines into structured objects
// Helper to parse dates like "29 May", "9 November" without year or specific locales
function parseResilientDate(dateStr) {
  if (!dateStr) return null;
  
  // Try standard Date constructor
  let date = new Date(dateStr);
  if (!isNaN(date.getTime())) return date;
  
  // Custom dictionary parsing for formats like "29 May", "9 November", etc.
  const monthsMap = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
    january: 0, february: 1, march: 2, april: 3, june: 5, july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };
  
  const tokens = dateStr.toLowerCase().split(/[\s,]+/);
  let day = 1;
  let month = -1;
  let year = new Date().getFullYear();
  
  tokens.forEach(token => {
    const num = parseInt(token, 10);
    if (!isNaN(num)) {
      if (num > 31) {
        year = num;
      } else {
        day = num;
      }
    } else if (monthsMap[token] !== undefined) {
      month = monthsMap[token];
    }
  });
  
  if (month !== -1) {
    return new Date(year, month, day, 12, 0, 0); // Default to midday
  }
  
  return null;
}

// Maps column indexes from headers and parses raw lines into structured objects
function processCSVData(rows) {
  const parsed = [];
  let platform = 'bluesky'; // default
  
  // 1. Resiliently search for the platform name in the file text
  const fileText = JSON.stringify(rows).toLowerCase();
  if (fileText.includes('bluesky') || fileText.includes('bsky')) {
    platform = 'bluesky';
  } else if (fileText.includes('youtube') || fileText.includes('video title')) {
    platform = 'youtube';
  } else if (fileText.includes('tiktok') || fileText.includes('play count')) {
    platform = 'tiktok';
  } else if (fileText.includes('tweet') || fileText.includes('twitter') || fileText.includes('impressions')) {
    platform = 'twitter';
  } else if (fileText.includes('facebook') || fileText.includes('organic reach')) {
    platform = 'facebook';
  }

  // 2. Scan for "best time to post" summary row (like BlueSky Overview layout)
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cleanRow = row.map(cell => String(cell).replace(/^\ufeff/, '').replace(/^["']|["']$/g, '').trim());
    const lowerRow = cleanRow.map(c => c.toLowerCase());
    
    const bestTimeIdx = lowerRow.findIndex(c => c.includes('best time to post'));
    if (bestTimeIdx !== -1 && i + 1 < rows.length) {
      const dataRow = rows[i+1].map(cell => String(cell).replace(/^\ufeff/, '').replace(/^["']|["']$/g, '').trim());
      const bestTimeVal = dataRow[bestTimeIdx]; // e.g. "Sunday 21:00"
      
      if (bestTimeVal) {
        // Parse formats like "Sunday 21:00" or "Sunday at 9pm"
        const tokens = bestTimeVal.split(/[\s:]+/);
        const dayMap = {
          sunday: 'Sun', monday: 'Mon', tuesday: 'Tue', wednesday: 'Wed', thursday: 'Thu', friday: 'Fri', saturday: 'Sat',
          sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat'
        };
        
        let dayOfWeek = 'Sun';
        let hour = 12;
        
        tokens.forEach(tok => {
          const t = tok.toLowerCase();
          if (dayMap[t]) {
            dayOfWeek = dayMap[t];
          } else {
            const val = parseInt(tok, 10);
            if (!isNaN(val) && val >= 0 && val <= 23) {
              hour = val;
            }
          }
        });
        
        const engagementsIdx = lowerRow.findIndex(c => c.includes('engagement'));
        const followersIdx = lowerRow.findIndex(c => c.includes('follower') || c.includes('member'));
        
        const engagements = engagementsIdx !== -1 ? (parseInt(dataRow[engagementsIdx], 10) || 100) : 100;
        const reach = followersIdx !== -1 ? (parseInt(dataRow[followersIdx], 10) || 500) : 500;
        
        // Push 3 points around this best time to populate suggestions grid bins
        for (let offset = -1; offset <= 1; offset++) {
          parsed.push({
            platform,
            dayOfWeek,
            hour: (hour + offset + 24) % 24,
            engagementCount: Math.round(engagements * (offset === 0 ? 1 : 0.8)),
            reachCount: reach
          });
        }
      }
    }
  }

  // 3. Scan for individual post item headers (fallback post list parsing)
  let headerRowIndex = -1;
  for (let i = 0; i < Math.min(20, rows.length); i++) {
    const row = rows[i];
    const cleanHeaders = row.map(h => String(h).replace(/^\ufeff/, '').replace(/^["']|["']$/g, '').trim().toLowerCase());
    if (cleanHeaders.includes('post') || cleanHeaders.includes('post text') || cleanHeaders.includes('tweet') || cleanHeaders.includes('video title') || cleanHeaders.includes('post id')) {
      if (!cleanHeaders.includes('best time to post')) {
        headerRowIndex = i;
        break;
      }
    }
  }

  if (headerRowIndex !== -1) {
    const headers = rows[headerRowIndex].map(h => String(h).replace(/^\ufeff/, '').replace(/^["']|["']$/g, '').trim().toLowerCase());
    
    let timeCol = headers.findIndex(h => h.includes('time') || h.includes('date') || h.includes('posted'));
    let viewCol = headers.findIndex(h => h.includes('views') || h.includes('impressions') || h.includes('clicks') || h.includes('reach') || h.includes('play'));
    let likeCol = headers.findIndex(h => h.includes('likes') || h.includes('engagements') || h.includes('reactions'));
    
    if (timeCol !== -1 && viewCol !== -1) {
      for (let i = headerRowIndex + 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length < Math.max(timeCol, viewCol) + 1) continue;
        
        // Stop if we hit a blank line or a new section
        if (row.length < 2 || !row[0]) break;
        
        const timeVal = String(row[timeCol]).trim().replace(/^["']|["']$/g, '');
        if (!timeVal) continue;
        
        const dateObj = parseResilientDate(timeVal);
        if (!dateObj || isNaN(dateObj.getTime())) continue;
        
        const daysMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayOfWeek = daysMap[dateObj.getDay()];
        const hour = dateObj.getHours();
        
        const views = parseInt(String(row[viewCol]).replace(/[^0-9]/g, ''), 10) || 0;
        const likes = likeCol !== -1 ? (parseInt(String(row[likeCol]).replace(/[^0-9]/g, ''), 10) || 0) : 0;
        
        parsed.push({
          platform,
          dayOfWeek,
          hour,
          engagementCount: likes + 1,
          reachCount: views
        });
      }
    }
  }

  return parsed;
}

// 9. Startup Initialization
function init() {
  // Highlight the tab matching the current activeDay
  if (elements.dayTabsList) {
    const currentTab = elements.dayTabsList.querySelector(`.day-tab[data-day="${appState.activeDay}"]`);
    if (currentTab) {
      const activeTab = elements.dayTabsList.querySelector('.day-tab.active');
      if (activeTab) activeTab.classList.remove('active');
      currentTab.classList.add('active');
    }
  }

  initEvents();
  renderSuggestions();
  renderDrafts();
  renderCopyLibrary();
  renderStoriesHub();
  updateStats();
  
  // Start by previewing the first post if any exists
  if (appState.posts.length > 0) {
    appState.selectedPreviewPostId = appState.posts[0].id;
    renderDrafts();
    renderFeedSimulator();
  }
}

// Run app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
