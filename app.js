// Carte Blanche Social Copy & Scheduling Engine

// 1. Initial State & Configuration
const PLATFORMS_CONFIG = {
  twitter: { name: 'X', limit: 280, color: 'var(--color-twitter)', icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
  facebook: { name: 'Facebook', limit: 63206, color: 'var(--color-facebook)', icon: `<svg width="12" height="12" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
  instagram: { name: 'Instagram', limit: 2200, color: 'var(--color-instagram-end)', icon: `<svg width="12" height="12" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>` },
  bluesky: { name: 'BlueSky', limit: 300, color: 'var(--color-bluesky)', icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.272c-1.233-1.636-3.834-4.63-7.556-7.054C2.39 2.802 0 1.274 0 3.518c0 1.547.773 4.636 2.39 7.053 1.233 1.638 2.467 2.32 3.864 2.32C4.856 12.891 3.62 13.57 2.39 15.21c-1.617 2.417-2.39 5.506-2.39 7.053 0 2.244 2.39.716 4.444-1.303 3.722-2.424 6.323-5.418 7.556-7.054 1.233 1.636 3.834 4.63 7.556 7.054 2.054 2.02 4.444 3.547 4.444 1.303 0-1.547-.773-4.636-2.39-7.053-1.233-1.638-2.467-2.32-3.864-2.32 1.398 0 2.632-.68 3.864-2.32 1.617-2.417 2.39-5.506 2.39-7.053 0-2.244-2.39-.716-4.444 1.303-3.722 2.424-6.323 5.418-7.556 7.054z"/></svg>` },
  tiktok: { name: 'TikTok', limit: 2200, color: 'var(--color-tiktok)', icon: `<svg width="12" height="12" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.52-4.06-1.37-.28-.2-.53-.43-.77-.68-.07 2.64-.02 5.28-.05 7.92-.09 2.11-.69 4.25-2.15 5.82-1.6 1.77-4.14 2.53-6.49 2.22-2.7-.31-5.12-2.22-5.99-4.83-1.07-3.05-.12-6.7 2.41-8.63 1.58-1.24 3.62-1.83 5.64-1.63v4.03c-1.12-.13-2.31.11-3.19.83-.93.73-1.38 1.99-1.2 3.16.19 1.41 1.37 2.59 2.79 2.77 1.53.22 3.15-.65 3.68-2.11.23-.62.29-1.29.28-1.95.01-4.73-.01-9.46.01-14.19z"/></svg>` },
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
  // ── TBC / Unlinked ─────────────────────────────────────────────────────────
  { id: 'story-tbc-1', txDate: 'TBC', title: 'BECOMING DUMA', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-tbc-2', txDate: 'TBC', title: 'CLONED NUMBER PLATES', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-tbc-3', txDate: 'TBC', title: 'VILLAGE OF WITCHES', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-tbc-4', txDate: 'TBC', title: 'MADLANGA 101', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-tbc-5', txDate: 'TBC', title: 'LONELINESS CLUB', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-tbc-6', txDate: 'TBC', title: 'PASSION IN ACTION', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },

  // ── 14 JUNE 2026 ───────────────────────────────────────────────────────────
  { id: 'story-jun14-1', txDate: '14 JUN 2026', title: 'REFORESTING THE CEDERBERG', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-jun14-2', txDate: '14 JUN 2026', title: 'ROAD TO NOWHERE', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-jun14-3', txDate: '14 JUN 2026', title: 'THIRST TRAP', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },

  // ── 7 JUNE 2026 ────────────────────────────────────────────────────────────
  { id: 'story-jun7-1', txDate: '7 JUN 2026', title: 'FUTURE CLINIC', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-jun7-2', txDate: '7 JUN 2026', title: 'KILLER MIDWIFE', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },
  { id: 'story-jun7-3', txDate: '7 JUN 2026', title: 'KIRSTENBOSCH COLLAPSE', legalNote: '', copyVersions: ['Copy to be added — import DOCX or edit this story to add copy versions.'], updatedAt: new Date().toISOString() },

  // ── 31 MAY 2026 ────────────────────────────────────────────────────────────
  { id: 'story-1', txDate: '31 MAY 2026', title: 'WRATH OF THE BREEDE', legalNote: '', copyVersions: ['Mud-caked cellars, uprooted trellises, vast expanses of vineyard reduced to swampland. The historic Robertson Wine Valley rebuilds after historic floods.', 'A legacy built by generations of farmers, threatened by historic floods in a matter of hours. What can be saved from the wreckage?', 'It tore through the valley with a force locals have never seen before. More than a million bottles of wine destroyed - livelihoods and legacies threatened. But the community\'s spirit is harder to wash away.'], updatedAt: new Date().toISOString() },
  { id: 'story-2', txDate: '31 MAY 2026', title: 'UNCOOPERATIVE COOPERATIVE', legalNote: 'No mention of Anweskus anywhere (even the filenames, please)', copyVersions: ['They packed up their lives and moved to a remote farm in search of self-governance. But this great trek is ending, for some, in tears.', 'Communal living on the remote West Coast. For some, a dream come true. But now, neighbours are turning on each other in a bitter fight for survival.', 'They were promised an Afrikaner utopia - freedom, ownership and work. Families put everything on the line - but now they are trapped in limbo.', 'It began as a dream of land, work and independence. Families invested everything. But was this remote cooperative ever even legal?'], updatedAt: new Date().toISOString() },
  { id: 'story-3', txDate: '31 MAY 2026', title: 'SKATE A NATION', legalNote: '', copyVersions: ['A skateboard, a stranger, and a journey that went viral - as crowds gather, communities rally and South Africans show up for something good.', 'An American skater set out from Uganda to cross Africa for charity. When his Ugandan teammates were denied SA visas, he pushed on alone. Then South Africa showed up.', 'What does it look like when a community decides to show up? A US skateboarder witnessed the spirit of South Africa.'], updatedAt: new Date().toISOString() },

  // ── 24 MAY 2026 ────────────────────────────────────────────────────────────
  { id: 'story-4', txDate: '24 MAY 2026', title: 'CONTRACT FOR VIOLENCE?', legalNote: 'No mention of Ensure anywhere (even the filenames, please)', copyVersions: ['Brutally beaten, driven away... Months later, he\'s still missing. An isolated incident, or a pattern of violence in plain sight?', 'A public security contract, reports of beatings, and a disappearance. A case of rogue officers, or a campaign of violence?', 'Reports of beatings - then, a brutal assault caught on camera. But no one has been charged. Is a security company targeting activists?', 'An alleged pattern of violence emerges on Durban\'s streets. Activists say warnings were ignored. Are authorities turning a blind eye?'], updatedAt: new Date().toISOString() },
  { id: 'story-5', txDate: '24 MAY 2026', title: 'VENEZUELA: A NATION REAWAKENS', legalNote: '', copyVersions: ['Its authoritarian president is gone, but Venezuela\'s future remains unwritten. A fragile new era of hope and uncertainty.', 'A South African teacher living in Caracas witnessed a nation in collapse... Now, through his eyes, we see Venezuela standing at a crossroads.', 'It\'s a country historically plagued by poverty, inflation and authoritarian government. Now, its future is in flux. A new era is beginning.'], updatedAt: new Date().toISOString() },

  // ── 17 MAY 2026 ────────────────────────────────────────────────────────────
  { id: 'story-6', txDate: '17 MAY 2026', title: 'SHERIFF SHAMBLES', legalNote: '', copyVersions: ['A deep dive into the world of sheriffs where allegations of corruption have surfaced. But the Minister of Justice says there is nothing to see here.', 'They\'re the enforcement arm of the courts, and it can be a lucrative position. But insiders say all is not well in the world of sheriffs.', 'Allegations against a vital arm of the justice system... The minister insists they hold no water. Who holds the truth?'], updatedAt: new Date().toISOString() }
];

// Firebase Client References & Initialization
let firebaseApp = null;
let firebaseAuth = null;
let firestoreDb = null;

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCaBKQk602tqk0251lzped5FBf1mx6WxKs",
  authDomain: "cb-socials.firebaseapp.com",
  projectId: "cb-socials",
  storageBucket: "cb-socials.firebasestorage.app",
  messagingSenderId: "201282195290",
  appId: "1:201282195290:web:cd37171760b551e30c2d63",
  measurementId: "G-0P4Q2XCGD0"
};

function initFirebase() {
  const configStr = localStorage.getItem('cbsocials_firebase_config');
  let config = DEFAULT_FIREBASE_CONFIG;
  if (configStr) {
    try {
      config = JSON.parse(configStr);
    } catch (e) {
      console.error('Failed to parse override firebase config, using default:', e);
    }
  }
  
  if (config) {
    try {
      if (window.firebase) {
        if (window.firebase.apps.length === 0) {
          firebaseApp = window.firebase.initializeApp(config);
        } else {
          firebaseApp = window.firebase.app();
        }
        firebaseAuth = window.firebase.auth();
        firestoreDb = window.firebase.firestore();
        console.log('Firebase client initialized successfully.');
      } else {
        console.warn('Firebase library compat CDNs not loaded on window.');
      }
    } catch (e) {
      console.error('Failed to initialize Firebase client:', e);
    }
  }
}

// Safe localStorage parsing helper
function loadStoredData(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed !== null) return parsed;
    }
  } catch (e) {
    console.error(`Error parsing stored data for key "${key}":`, e);
  }
  return fallback;
}

function cleanTextForMatching(t) {
  if (!t) return '';
  return t.trim()
    .replace(/\s+/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .toLowerCase();
}

function isSimilarTitle(titleA, titleB) {
  if (!titleA || !titleB) return false;
  const a = titleA.trim().toUpperCase();
  const b = titleB.trim().toUpperCase();
  if (a === b) return true;
  
  if (a.includes('/') && a.split('/').map(part => part.trim()).some(part => part === b)) {
    return true;
  }
  if (b.includes('/') && b.split('/').map(part => part.trim()).some(part => part === a)) {
    return true;
  }
  
  if (a.startsWith(b) && (a[b.length] === ' ' || a[b.length] === '/')) return true;
  if (b.startsWith(a) && (b[a.length] === ' ' || b[a.length] === '/')) return true;
  
  return false;
}

function cleanDuplicateStories(storiesList) {
  if (!Array.isArray(storiesList)) return [];
  
  const groups = [];
  storiesList.forEach(s => {
    if (!s.title) return;
    let foundGroup = groups.find(g => isSimilarTitle(g[0].title, s.title));
    if (foundGroup) {
      foundGroup.push(s);
    } else {
      groups.push([s]);
    }
  });

  const cleaned = [];
  groups.forEach(group => {
    if (group.length <= 1) {
      cleaned.push(...group);
    } else {
      // Find if there is a populated one (without the placeholder copy)
      const populated = group.filter(s => {
        const firstCopy = s.copyVersions && s.copyVersions[0];
        const hasPlaceholder = firstCopy && (
          (typeof firstCopy === 'string' && firstCopy.includes('Copy to be added')) ||
          (typeof firstCopy === 'object' && firstCopy.text && firstCopy.text.includes('Copy to be added'))
        );
        return !hasPlaceholder;
      });

      if (populated.length > 0) {
        // Keep only the populated version(s)
        cleaned.push(...populated);
      } else {
        // All are placeholder versions, keep the first one
        cleaned.push(group[0]);
      }
    }
  });
  
  return cleaned;
}

function getMergedStories() {
  let loaded = loadStoredData('cbsocials_stories', SEED_STORIES);
  if (!Array.isArray(loaded)) {
    loaded = SEED_STORIES;
  }
  
  let cleaned = cleanDuplicateStories(loaded);
  
  // Ensure every seed story exists in the cleaned list (by title similarity)
  SEED_STORIES.forEach(seed => {
    const exists = cleaned.some(s => s.id === seed.id || isSimilarTitle(s.title, seed.title));
    if (!exists) {
      cleaned.push({ ...seed });
    }
  });
  
  return cleaned.map(s => {
    if (s.txDate) s.txDate = normalizeDateString(s.txDate);
    return s;
  });
}

let appState = {
  posts: loadStoredData('cbsocials_posts', MOCK_POSTS),
  stories: getMergedStories(),
  isDirty: localStorage.getItem('cbsocials_stories_dirty') === 'true',
  storySearch: '',
  collapsedGroups: new Set(loadStoredData('cbsocials_collapsed_groups', [])),
  isFirstStoriesLoad: true,
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
  importedAnalytics: loadStoredData('cbsocials_analytics', []),
  calendarNotes: loadStoredData('cbsocials_calendar_notes', []),
  currentCalendarDate: new Date(),
  calendarPlatformFilter: 'all',
  calendarViewMode: 'week',
  activeOptimizerPlatform: 'instagram',
  // News Monitor state
  currentWorkspace: 'calendar', // 'calendar' or 'news'
  newsKeywords: loadStoredData('cb_news_keywords', ['eskom', 'corruption', 'load shedding', 'inflation', 'policy', 'delivery']),
  liveNewsFeed: loadStoredData('cb_live_news_feed', []),
  trackedNewsItems: loadStoredData('cb_tracked_news_items', [
    {
      id: 'news-1',
      title: 'City Power faces substation failure in Johannesburg North',
      category: 'delivery',
      source: 'Johannesburg Post',
      summary: 'A critical transformer blew at the local substation this morning, plunging several blocks into blackout. Repairs are estimated to take 24 to 48 hours.',
      timestamp: new Date(Date.now() - 4 * 3600 * 1000).toISOString()
    },
    {
      id: 'news-2',
      title: 'Consumer Price Index rises by 5.4% YoY',
      category: 'consumer',
      source: 'StatsSA Official Report',
      summary: 'Consumer price inflation ticked higher last month, driven primarily by fuel prices and food cost increases. Analysts urge vigilance.',
      timestamp: new Date(Date.now() - 8 * 3600 * 1000).toISOString()
    },
    {
      id: 'news-3',
      title: 'New Parliament bill proposes strict data security norms',
      category: 'policy',
      source: 'Government Gazette',
      summary: 'Draft legislation detailing amendments to digital sovereignty regulations has been officially tabled for open public comment.',
      timestamp: new Date(Date.now() - 20 * 3600 * 1000).toISOString()
    }
  ]),
  activeNewsCategoryFilter: 'all',
  newsSearchQuery: '',
  newsFeedSource: loadStoredData('cb_news_feed_source', 'live-rss'), // 'simulated' or 'live-rss'
  rssFeeds: loadStoredData('cb_rss_feeds', [
    'https://feeds.news24.com/articles/news24/SouthAfrica/rss',
    'https://feeds.news24.com/articles/netwerk24/nuus/rss',
    'https://ewn.co.za/RSS%20Feeds/Latest%20News',
    'https://rss.iol.io/iol/news',
    'https://www.dailymaverick.co.za/feed/',
    'https://maroelamedia.co.za/feed/',
    'https://mg.co.za/feed/',
    'https://businesstech.co.za/news/feed/',
    'https://mybroadband.co.za/news/feed/',
    'https://techcentral.co.za/feed/',
    'https://teeveetee.blogspot.com/feeds/posts/default?alt=rss',
    'https://www.businesslive.co.za/bd/rss',
    'https://www.moneyweb.co.za/feed/',
    'https://www.enca.com/feed/rss/latest-news',
    'https://www.timeslive.co.za/rss/',
    'https://www.dispatchlive.co.za/rss/',
    'https://www.citizen.co.za/feed/',
    'https://www.citizen.co.za/network-news/feed/'
  ])
};

// Sync copy version platforms from scheduled posts
function syncCopyVersionPlatformsFromCalendar() {
  const updatedStoryIds = [];
  appState.stories.forEach(story => {
    let storyUpdated = false;
    if (story.copyVersions) {
      story.copyVersions.forEach((cv, idx) => {
        // Find all calendar posts for this story and copy version
        const posts = appState.posts.filter(p => p.storyId === story.id && p.cvIdx === idx);
        // Gather all platforms from these posts
        const activePlatforms = new Set();
        posts.forEach(p => {
          if (p.platforms) {
            p.platforms.forEach(plat => activePlatforms.add(plat));
          }
        });
        
        const currentPlats = typeof cv === 'string' ? [] : (cv.platforms || []);
        const match = currentPlats.length === activePlatforms.size && currentPlats.every(p => activePlatforms.has(p));
        
        if (!match) {
          storyUpdated = true;
          // Update the copy version platforms
          if (typeof cv === 'string') {
            story.copyVersions[idx] = { text: cv, platforms: Array.from(activePlatforms) };
          } else {
            cv.platforms = Array.from(activePlatforms);
          }
        }
      });
    }
    if (storyUpdated) {
      story.updatedAt = new Date().toISOString();
      updatedStoryIds.push(story.id);
    }
  });
  
  if (updatedStoryIds.length > 0) {
    saveStories(updatedStoryIds);
  }
  renderStoriesHub();
}

// Save state to LocalStorage and Firestore
function saveState() {
  try {
    localStorage.setItem('cbsocials_posts', JSON.stringify(appState.posts));
    updateStats();
    syncCopyVersionPlatformsFromCalendar();
    savePostsToCloud();
  } catch (e) {
    console.error('Error saving cbsocials_posts:', e);
  }
}

function deletePost(id) {
  const post = appState.posts.find(p => p.id === id);
  if (post) {
    const storyId = post.storyId;
    const cvIdx = post.cvIdx;
    const platforms = post.platforms || [];
    
    appState.posts = appState.posts.filter(p => p.id !== id);
    if (appState.selectedPreviewPostId === id) {
      appState.selectedPreviewPostId = null;
    }
    saveState();
    if (firestoreDb) {
      deletePostFromDb(id);
    }
    
    // Recalculate and untoggle platforms in the hub if they are no longer scheduled anywhere for this version
    if (storyId && cvIdx !== undefined) {
      const story = appState.stories.find(s => s.id === storyId);
      if (story) {
        let cvObj = story.copyVersions[cvIdx];
        if (cvObj && typeof cvObj === 'object' && cvObj.platforms) {
          let updated = false;
          platforms.forEach(plat => {
            const otherScheduled = appState.posts.some(p => 
              p.storyId === storyId && 
              p.cvIdx === cvIdx && 
              p.platforms && p.platforms.includes(plat)
            );
            if (!otherScheduled) {
              const idx = cvObj.platforms.indexOf(plat);
              if (idx !== -1) {
                cvObj.platforms.splice(idx, 1);
                updated = true;
              }
            }
          });
          
          if (updated) {
            story.updatedAt = new Date().toISOString();
            saveStories([storyId]);
            renderStoriesHub();
          }
        }
      }
    }
  } else {
    appState.posts = appState.posts.filter(p => p.id !== id);
  }
  
  renderDrafts();
  renderCalendar();
  renderFeedSimulator();
  showToast('Post deleted.');
}

async function saveStories(storyIds = null, localOnly = false) {
  try {
    appState.isDirty = true;
    localStorage.setItem('cbsocials_stories_dirty', 'true');
    localStorage.setItem('cbsocials_stories', JSON.stringify(appState.stories));
    console.log('Stories saved to localStorage (dirty state). Total:', appState.stories.length);
    
    if (localOnly) {
      appState.isDirty = false;
      localStorage.removeItem('cbsocials_stories_dirty');
      return;
    }
    
    if (firebaseAuth && firestoreDb) {
      const user = firebaseAuth.currentUser;
      if (user) {
        let storiesToSave = appState.stories;
        
        if (storyIds !== null) {
          const idsSet = new Set(Array.isArray(storyIds) ? storyIds : [storyIds]);
          storiesToSave = appState.stories.filter(s => idsSet.has(s.id));
        }
        
        if (storiesToSave.length > 0) {
          const chunkSize = 200;
          for (let i = 0; i < storiesToSave.length; i += chunkSize) {
            const chunk = storiesToSave.slice(i, i + chunkSize);
            const batch = firestoreDb.batch();
            chunk.forEach(s => {
              const docRef = firestoreDb.collection('stories').doc(s.id);
              batch.set(docRef, {
                id: s.id,
                txDate: s.txDate ? normalizeDateString(s.txDate) : 'TBC',
                title: s.title || '',
                legalNote: s.legalNote || '',
                copyVersions: s.copyVersions || [],
                updatedAt: s.updatedAt || new Date().toISOString(),
                userId: user.uid
              });
            });
            await batch.commit();
          }
          console.log(`Synced ${storiesToSave.length} stories to Firestore.`);
        }
        
        appState.isDirty = false;
        localStorage.removeItem('cbsocials_stories_dirty');
        console.log('Stories synced to Firestore successfully.');
        showToast('Stories synced to Cloud successfully!');
      }
    }
  } catch (e) {
    console.error('Error saving cbsocials_stories to Firestore:', e);
    showToast('Sync error: ' + e.message);
  }
}


function saveCopyLibrary(itemIds = null) {
  localStorage.setItem('cbsocials_copy_library', JSON.stringify(appState.copyLibrary));
  
  if (firebaseAuth && firestoreDb && firebaseAuth.currentUser) {
    let toSave = appState.copyLibrary;
    if (itemIds !== null) {
      const idsSet = new Set(Array.isArray(itemIds) ? itemIds : [itemIds]);
      toSave = appState.copyLibrary.filter(c => idsSet.has(c.id));
    }
    
    if (toSave.length > 0) {
      const batch = firestoreDb.batch();
      toSave.forEach(c => {
        const docRef = firestoreDb.collection('copy_library').doc(c.id);
        batch.set(docRef, {
          id: c.id,
          title: c.title || '',
          category: c.category || 'General',
          platforms: c.platforms || [],
          text: c.text || '',
          updatedAt: c.updatedAt || new Date().toISOString()
        });
      });
      batch.commit()
        .then(() => console.log('Copy Library templates saved to Firestore.'))
        .catch(err => console.error('Error saving copy library batch:', err));
    }
  }
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
  btnModalDelete: document.getElementById('btn-modal-delete'),
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
  btnStoriesCollapseAll: document.getElementById('btn-stories-collapse-all'),
  btnStoriesExpandAll: document.getElementById('btn-stories-expand-all'),
  hubPanelStories: document.getElementById('hub-panel-stories'),
  hubPanelDrafts: document.getElementById('hub-panel-drafts'),
  btnCalendarPrev: document.getElementById('btn-calendar-prev'),
  btnCalendarNext: document.getElementById('btn-calendar-next'),
  calendarMonthTitle: document.getElementById('calendar-month-title'),
  calendarGrid: document.getElementById('calendar-grid'),
  calendarNoteModal: document.getElementById('calendar-note-modal'),
  calendarNoteModalTitle: document.getElementById('calendar-note-modal-title'),
  btnCalendarNoteClose: document.getElementById('btn-calendar-note-close'),
  btnCalendarNoteCancel: document.getElementById('btn-calendar-note-cancel'),
  btnCalendarNoteDelete: document.getElementById('btn-calendar-note-delete'),
  calendarNoteForm: document.getElementById('calendar-note-form'),
  calendarNoteDate: document.getElementById('calendar-note-date'),
  calendarNoteText: document.getElementById('calendar-note-text'),

  // Push to Calendar elements
  pushCalendarModal: document.getElementById('push-calendar-modal'),
  pushCalendarForm: document.getElementById('push-calendar-form'),
  pushCalendarStoryId: document.getElementById('push-calendar-story-id'),
  pushCalendarCvIdx: document.getElementById('push-calendar-cv-idx'),
  pushCalendarCopyPreview: document.getElementById('push-calendar-copy-preview'),
  pushCalendarPlatformsContainer: document.getElementById('push-calendar-platforms-container'),
  pushPlatformsSelector: document.getElementById('push-platforms-selector'),
  btnPushCalendarSave: document.getElementById('btn-push-calendar-save'),
  btnPushCalendarClose: document.getElementById('btn-push-calendar-close'),
  btnPushCalendarCancel: document.getElementById('btn-push-calendar-cancel'),

  // Help Guide Modal
  btnHelpToggle: document.getElementById('btn-help-toggle'),
  helpModal: document.getElementById('help-modal'),
  btnHelpModalClose: document.getElementById('btn-help-modal-close'),
  btnHelpCloseOk: document.getElementById('btn-help-close-ok'),

  // Supabase Database & Auth Elements
  btnDbStatus: document.getElementById('btn-db-status'),
  dbStatusDot: document.getElementById('db-status-dot'),
  dbStatusText: document.getElementById('db-status-text'),
  btnLogout: document.getElementById('btn-logout'),
  
  authOverlay: document.getElementById('auth-overlay'),
  authForm: document.getElementById('auth-form'),
  authEmail: document.getElementById('auth-email'),
  authPassword: document.getElementById('auth-password'),
  btnAuthSubmit: document.getElementById('btn-auth-submit'),
  btnAuthToggle: document.getElementById('btn-auth-toggle'),
  authToggleText: document.getElementById('auth-toggle-text'),
  authTitle: document.getElementById('auth-title'),
  authSubtitle: document.getElementById('auth-subtitle'),
  btnAuthDbConfig: document.getElementById('btn-auth-db-config'),

  dbSettingsModal: document.getElementById('db-settings-modal'),
  dbSettingsForm: document.getElementById('db-settings-form'),
  dbFirebaseConfig: document.getElementById('db-firebase-config'),
  btnDbSettingsCancel: document.getElementById('btn-db-settings-cancel'),
  btnDbSettingsClose: document.getElementById('btn-db-settings-close'),

  // News Monitor DOM elements
  navBtnCalendar: document.getElementById('nav-btn-calendar'),
  navBtnNews: document.getElementById('nav-btn-news'),
  newsMonitorGrid: document.getElementById('news-monitor-grid'),
  panelScheduler: document.getElementById('panel-scheduler'),
  dashboardGrid: document.querySelector('.dashboard-grid:not(.news-monitor-grid)'),
  newsKeywordInput: document.getElementById('news-keyword-input'),
  btnAddKeyword: document.getElementById('btn-add-keyword'),
  keywordPillsContainer: document.getElementById('keyword-pills-container'),
  liveFeedContent: document.getElementById('live-feed-content'),
  btnClearFeed: document.getElementById('btn-clear-feed'),
  btnManualNewsAdd: document.getElementById('btn-add-news-manual'),
  newsSearchInput: document.getElementById('news-search-input'),
  newsCategoriesList: document.getElementById('news-categories-list'),
  newsModal: document.getElementById('news-modal'),
  newsForm: document.getElementById('news-form'),
  newsFormId: document.getElementById('news-form-id'),
  newsFormTitle: document.getElementById('news-form-title'),
  newsFormCategory: document.getElementById('news-form-category'),
  newsFormSource: document.getElementById('news-form-source'),
  newsFormSummary: document.getElementById('news-form-summary'),
  btnNewsCancel: document.getElementById('btn-news-cancel'),
  btnNewsModalClose: document.getElementById('btn-news-modal-close'),
  newsTabs: document.querySelectorAll('.panel-news-categories .hub-tab-switcher button'),
  
  // RSS Feed references
  btnFetchFeed: document.getElementById('btn-fetch-feed'),
  btnManageRss: document.getElementById('btn-manage-rss'),
  rssManagerModal: document.getElementById('rss-manager-modal'),
  btnRssManagerClose: document.getElementById('btn-rss-manager-close'),
  btnRssManagerDone: document.getElementById('btn-rss-manager-done'),
  rssFeedForm: document.getElementById('rss-feed-form'),
  rssFeedUrl: document.getElementById('rss-feed-url'),
  rssFeedsList: document.getElementById('rss-feeds-list'),
  liveFeedSubtitle: document.getElementById('live-feed-subtitle')
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
  if (!elements.suggestionsGrid) return;
  
  const suggestions = appState.optimizerMode === 'custom' 
    ? getCustomSuggestions() 
    : [...POSTING_SUGGESTIONS[appState.activeDay]];

  const targetPlat = appState.activeOptimizerPlatform || 'instagram';
  const item = suggestions.find(s => s.platform === targetPlat);
  
  elements.suggestionsGrid.innerHTML = '';
  
  if (!item || !item.times || item.times.length === 0) {
    elements.suggestionsGrid.innerHTML = `<span style="font-size: 0.7rem; color: var(--text-muted); padding: 0.2rem 0.5rem;">No suggestions available for this day.</span>`;
    return;
  }

  // Sync active platform tab button state in UI
  document.querySelectorAll('.opt-platform-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.platform === targetPlat);
  });

  const timesHtml = item.times.map(t => `
    <button class="time-pill" data-platform="${targetPlat}" data-time="${t}">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right: 0.25rem;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      ${t}
    </button>
  `).join('');
  
  elements.suggestionsGrid.innerHTML = timesHtml;

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

function updateFormOptimumTimes() {
  const container = document.getElementById('form-optimum-times-container');
  if (!container) return;
  container.innerHTML = '';
  
  const dateVal = elements.formPostDate.value;
  if (!dateVal) return;
  const d = new Date(dateVal);
  if (isNaN(d.getTime())) return;
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = dayNames[d.getDay()];
  
  // Get all checked platforms
  const checkedPlats = [];
  document.querySelectorAll('input[name="form-platforms"]:checked').forEach(cb => {
    checkedPlats.push(cb.value);
  });
  
  if (checkedPlats.length === 0) return;
  
  // Get suggestions for each selected platform
  const allTimesMap = new Map(); // Keep track of unique times and their platform sources
  checkedPlats.forEach(plat => {
    let platTimes = [];
    if (appState.optimizerMode === 'custom') {
      platTimes = getCustomSuggestions().find(s => s.platform === plat)?.times || [];
    } else {
      platTimes = POSTING_SUGGESTIONS[dayName]?.find(s => s.platform === plat)?.times || [];
    }
    platTimes.forEach(tStr => {
      if (!allTimesMap.has(tStr)) {
        allTimesMap.set(tStr, []);
      }
      allTimesMap.get(tStr).push(plat);
    });
  });
  
  if (allTimesMap.size > 0) {
    container.innerHTML = `
      <span style="font-size:0.62rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-right:0.25rem; width:100%; display:block; margin-bottom:0.15rem;">Optimum Times:</span>
    `;
    
    // Sort times
    const sortedTimes = Array.from(allTimesMap.keys()).sort((a, b) => {
      return convertTo24h(a).localeCompare(convertTo24h(b));
    });
    
    sortedTimes.forEach(tStr => {
      const timeVal = convertTo24h(tStr);
      const platforms = allTimesMap.get(tStr);
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'form-optimum-pill';
      pill.style.cssText = `
        background: rgba(255,255,255,0.06);
        border: 1px solid var(--border-glass);
        color: var(--text-secondary);
        font-size: 0.62rem;
        padding: 0.15rem 0.45rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.15s ease;
      `;
      
      let badgeIndicators = platforms.map(pl => {
        let name = '';
        if (pl === 'twitter') name = 'X';
        else if (pl === 'bluesky') name = 'BS';
        else if (pl === 'instagram') name = 'IG';
        else if (pl === 'facebook') name = 'FB';
        else if (pl === 'tiktok') name = 'TT';
        else if (pl === 'youtube') name = 'YT';
        return name;
      }).join(', ');
      
      pill.innerHTML = `${tStr} <span style="font-size:0.55rem; color:var(--text-muted);">(${badgeIndicators})</span>`;
      pill.addEventListener('click', () => {
        elements.formPostTime.value = timeVal;
        
        container.querySelectorAll('.form-optimum-pill').forEach(p => {
          p.style.background = 'rgba(255,255,255,0.06)';
          p.style.borderColor = 'var(--border-glass)';
          p.style.color = 'var(--text-secondary)';
        });
        pill.style.background = 'var(--primary)';
        pill.style.borderColor = 'var(--primary)';
        pill.style.color = '#fff';
      });
      container.appendChild(pill);
    });
  }
}

function updatePushOptimumTimes(plat, dateVal) {
  const container = document.getElementById(`push-optimum-${plat}`);
  if (!container) return;
  container.innerHTML = '';
  
  if (!dateVal) return;
  const d = new Date(dateVal);
  if (isNaN(d.getTime())) return;
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = dayNames[d.getDay()];
  
  // Find suggestions for this day and platform
  let suggestions = [];
  if (appState.optimizerMode === 'custom') {
    suggestions = getCustomSuggestions().find(s => s.platform === plat)?.times || [];
  } else {
    suggestions = POSTING_SUGGESTIONS[dayName]?.find(s => s.platform === plat)?.times || [];
  }
  
  if (suggestions.length > 0) {
    container.innerHTML = `
      <span style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; font-weight:700; margin-right:0.35rem;">Optimum:</span>
    `;
    suggestions.forEach(tStr => {
      const timeVal = convertTo24h(tStr);
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'push-optimum-pill';
      pill.style.cssText = `
        background: rgba(255,255,255,0.06);
        border: 1px solid var(--border-glass);
        color: var(--text-secondary);
        font-size: 0.82rem;
        font-weight: 600;
        padding: 0.25rem 0.65rem;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.15s ease;
      `;
      pill.innerHTML = tStr;
      pill.addEventListener('click', () => {
        const timeInput = document.getElementById(`push-time-${plat}`);
        if (timeInput) {
          timeInput.value = timeVal;
        }
        // Highlight selected pill
        container.querySelectorAll('.push-optimum-pill').forEach(p => {
          p.style.background = 'rgba(255,255,255,0.06)';
          p.style.borderColor = 'var(--border-glass)';
          p.style.color = 'var(--text-secondary)';
        });
        pill.style.background = 'var(--primary)';
        pill.style.borderColor = 'var(--primary)';
        pill.style.color = '#fff';
      });
      container.appendChild(pill);
    });
  } else {
    container.innerHTML = `<span style="font-size:0.62rem; color:var(--text-muted);">No suggestions for this day</span>`;
  }
}

// Map day of week name to the upcoming calendar date
function getNextDateForDay(dayName) {
  const daysMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const targetDay = daysMap[dayName];
  const today = new Date();
  const currentDay = today.getDay();
  
  let distance = targetDay - currentDay;
  if (distance < 0) distance += 7; // Target day next week if it already passed this week
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + distance);
  return targetDate.toISOString().split('T')[0];
}

function openNewPostModalForSuggested(platform, time12h) {
  resetPostForm();
  
  // Set values based on suggestion
  elements.formPostDate.value = getNextDateForDay(appState.activeDay);
  elements.formPostTime.value = convertTo24h(time12h);
  elements.formPostStatus.value = 'Scheduled';
  
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
    if (!post) return false;
    const matchesSearch = post.title.toLowerCase().includes(query) || post.text.toLowerCase().includes(query);
    const matchesPlatform = appState.filterPlatform === 'all' || (post.platforms && post.platforms.includes(appState.filterPlatform));
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
    const platformsList = post.platforms || [];
    platformsList.forEach(plat => {
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
        ${platformsList.map(plat => {
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

  if (elements.countTotal) elements.countTotal.textContent = total;
  if (elements.countScheduled) elements.countScheduled.textContent = scheduled;
  if (elements.countPublished) elements.countPublished.textContent = published;
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
    cb.checked = (post.platforms || []).includes(cb.value);
  });

  elements.modalTitle.textContent = 'Edit Copy Draft';
  if (elements.btnModalDelete) elements.btnModalDelete.style.display = 'inline-block';
  elements.postModal.style.display = 'flex';
  
  updateWarnings();
  updateFormOptimumTimes();
}

function resetPostForm() {
  elements.formPostId.value = '';
  elements.formPostTitle.value = '';
  elements.formPostDate.value = new Date().toISOString().split('T')[0];
  elements.formPostTime.value = '12:00';
  elements.formPostStatus.value = 'Draft';
  elements.formPostText.value = '';
  if (elements.btnModalDelete) elements.btnModalDelete.style.display = 'none';
  
  document.querySelectorAll('input[name="form-platforms"]').forEach(cb => {
    cb.checked = (cb.value === 'twitter'); // Default check Twitter
  });
  updateFormOptimumTimes();
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

  // Optimizer platform tabs selector click
  document.querySelectorAll('.opt-platform-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.opt-platform-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      appState.activeOptimizerPlatform = tab.dataset.platform;
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
  if (elements.btnModalDelete) {
    elements.btnModalDelete.addEventListener('click', () => {
      const id = elements.formPostId.value;
      if (id && confirm('Are you sure you want to delete this post draft?')) {
        deletePost(id);
        elements.postModal.style.display = 'none';
      }
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === elements.postModal) {
      elements.postModal.style.display = 'none';
    }
  });

  // Live validation on post edit
  elements.formPostText.addEventListener('input', updateWarnings);
  document.querySelectorAll('input[name="form-platforms"]').forEach(cb => {
    cb.addEventListener('change', () => {
      updateWarnings();
      updateFormOptimumTimes();
    });
  });
  elements.formPostDate.addEventListener('change', updateFormOptimumTimes);

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
        const originalPost = appState.posts[index];
        appState.posts[index] = {
          ...originalPost,
          title, text, platforms, scheduledDate: date, scheduledTime: time, status
        };
        showToast('Draft updated successfully!');

        // Update story copy version tags
        let storyId = originalPost.storyId;
        let cvIdx = originalPost.cvIdx;
        
        // Fallback for older posts or minor edits: match by cleaned text
        if (!storyId || cvIdx === undefined) {
          const cleanText = cleanTextForMatching(text);
          const matchingStory = appState.stories.find(s => 
            (s.copyVersions || []).some(cv => cleanTextForMatching(getCopyVersionText(cv)) === cleanText)
          );
          if (matchingStory) {
            storyId = matchingStory.id;
            cvIdx = matchingStory.copyVersions.findIndex(cv => cleanTextForMatching(getCopyVersionText(cv)) === cleanText);
            
            // Retroactively set storyId and cvIdx on the post object
            appState.posts[index].storyId = storyId;
            appState.posts[index].cvIdx = cvIdx;
          }
        }

        if (storyId && cvIdx !== undefined) {
          const story = appState.stories.find(s => s.id === storyId);
          if (story) {
            let cvObj = story.copyVersions[cvIdx];
            if (typeof cvObj === 'string') {
              cvObj = { text: cvObj, platforms: [] };
              story.copyVersions[cvIdx] = cvObj;
            }
            if (!cvObj.platforms) cvObj.platforms = [];
            
            let updated = false;
            const isDifferent = cvObj.platforms.length !== platforms.length || 
                                !cvObj.platforms.every(p => platforms.includes(p));
            if (isDifferent) {
              cvObj.platforms = [...platforms];
              updated = true;
            }
            
            if (updated) {
              story.updatedAt = new Date().toISOString();
              saveStories([storyId]);
              renderStoriesHub();
            }
          }
        }
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
    renderCalendar();
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
  if (elements.modeIndustry) {
    elements.modeIndustry.addEventListener('click', () => {
      elements.modeIndustry.classList.add('active');
      elements.modeCustom.classList.remove('active');
      appState.optimizerMode = 'industry';
      renderSuggestions();
    });
  }

  if (elements.modeCustom) {
    elements.modeCustom.addEventListener('click', () => {
      elements.modeCustom.classList.add('active');
      elements.modeIndustry.classList.remove('active');
      appState.optimizerMode = 'custom';
      renderSuggestions();
    });
  }

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
  if (elements.btnAddCopyItem) {
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
  }

  // ── Stories Hub Events ───────────────────────────────────────────────────
  // Hub tab switching
  [elements.hubTabStories, elements.hubTabDrafts].forEach(tab => {
    tab.addEventListener('click', () => {
      const hub = tab.dataset.hub;
      appState.activeHubTab = hub;
      elements.hubTabStories.classList.toggle('active', hub === 'stories');
      elements.hubTabDrafts.classList.toggle('active', hub === 'drafts');
      
      elements.hubPanelStories.style.display = hub === 'stories' ? 'flex' : 'none';
      elements.hubPanelDrafts.style.display = hub === 'drafts' ? 'flex' : 'none';
    });
  });

  // Story search
  elements.storySearchInput.addEventListener('input', (e) => {
    appState.storySearch = e.target.value.toLowerCase();
    renderStoriesHub();
  });

  if (elements.btnStoriesCollapseAll) {
    elements.btnStoriesCollapseAll.addEventListener('click', () => {
      const txDates = [...new Set(appState.stories.map(s => s.txDate || 'TBC'))];
      txDates.forEach(d => appState.collapsedGroups.add(d));
      localStorage.setItem('cbsocials_collapsed_groups', JSON.stringify([...appState.collapsedGroups]));
      renderStoriesHub();
    });
  }

  if (elements.btnStoriesExpandAll) {
    elements.btnStoriesExpandAll.addEventListener('click', () => {
      appState.collapsedGroups.clear();
      localStorage.setItem('cbsocials_collapsed_groups', JSON.stringify([]));
      renderStoriesHub();
    });
  }

  // Add Story button
  elements.btnAddStory.addEventListener('click', () => openStoryModal());

  // ── News Monitor Tab Navigation ────────────────────────
  if (elements.navBtnCalendar && elements.navBtnNews) {
    [elements.navBtnCalendar, elements.navBtnNews].forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        appState.currentWorkspace = tab;
        
        elements.navBtnCalendar.classList.toggle('active', tab === 'calendar');
        elements.navBtnNews.classList.toggle('active', tab === 'news');

        if (tab === 'calendar') {
          document.body.classList.add('body-workspace-calendar');
          document.body.classList.remove('body-workspace-news');
          elements.newsMonitorGrid.style.display = 'none';
          elements.panelScheduler.style.display = 'flex';
          elements.dashboardGrid.style.display = 'grid';
        } else {
          document.body.classList.add('body-workspace-news');
          document.body.classList.remove('body-workspace-calendar');
          elements.panelScheduler.style.display = 'none';
          elements.dashboardGrid.style.display = 'none';
          elements.newsMonitorGrid.style.display = 'grid';
          renderKeywords();
          renderLiveFeed();
          renderTrackedNews();
        }
      });
    });
  }

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
    if (e.target === elements.calendarNoteModal) closeCalendarNoteModal();
    if (e.target === elements.pushCalendarModal) closePushToCalendarModal();
  });

  // Add copy version textarea
  elements.btnAddCopyVersion.addEventListener('click', () => addCopyVersionField());

  // Push to Calendar Modal Events
  if (elements.pushCalendarForm) {
    elements.pushCalendarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const storyId = elements.pushCalendarStoryId.value;
      const cvIdx = parseInt(elements.pushCalendarCvIdx.value, 10);
      const story = appState.stories.find(s => s.id === storyId);
      if (!story) return;
      
      const cv = story.copyVersions[cvIdx];
      const text = getCopyVersionText(cv);
      
      // Get all checked platforms in the selector
      const selectedPlatforms = [];
      document.querySelectorAll('input[name="push-platforms"]:checked').forEach(cb => {
        selectedPlatforms.push(cb.value);
      });
      
      if (selectedPlatforms.length === 0) {
        alert('Please select at least one platform to schedule.');
        return;
      }
      
      // For each platform, create a separate post/draft item
      selectedPlatforms.forEach(plat => {
        const dateVal = document.getElementById(`push-date-${plat}`).value;
        const timeVal = document.getElementById(`push-time-${plat}`).value;
        
        const newPost = {
          id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          storyId: story.id,
          cvIdx: cvIdx,
          title: `${story.title} (${plat.toUpperCase()})`,
          text,
          platforms: [plat],
          scheduledDate: dateVal,
          scheduledTime: timeVal,
          status: 'Scheduled'
        };
        
        appState.posts.unshift(newPost);
      });

      // Synchronize chosen platform(s) to the copy version's tagged platforms in the hub
      if (story.copyVersions && story.copyVersions[cvIdx]) {
        let cvObj = story.copyVersions[cvIdx];
        if (typeof cvObj === 'string') {
          cvObj = { text: cvObj, platforms: [] };
          story.copyVersions[cvIdx] = cvObj;
        }
        if (!cvObj.platforms) cvObj.platforms = [];
        
        let updated = false;
        selectedPlatforms.forEach(plat => {
          if (!cvObj.platforms.includes(plat)) {
            cvObj.platforms.push(plat);
            updated = true;
          }
        });
        
        if (updated) {
          story.updatedAt = new Date().toISOString();
          saveStories([story.id]);
          renderStoriesHub();
        }
      }
      
      saveState();
      renderDrafts();
      renderFeedSimulator();
      renderCalendar();
      closePushToCalendarModal();
      showToast('Copy scheduled & added to Calendar!');
    });
  }
  if (elements.btnPushCalendarClose) {
    elements.btnPushCalendarClose.addEventListener('click', closePushToCalendarModal);
  }
  if (elements.btnPushCalendarCancel) {
    elements.btnPushCalendarCancel.addEventListener('click', closePushToCalendarModal);
  }

  // Story form submit
  elements.storyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = elements.storyFormId.value;
    const txDateInput = elements.storyFormTxdate.value;
    const txDate = txDateInput ? normalizeDateString(formatDateToStandard(txDateInput)) : 'TBC';
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

    const targetId = id || `story-${Date.now()}`;
    if (id) {
      const idx = appState.stories.findIndex(s => s.id === id);
      if (idx !== -1) {
        appState.stories[idx] = { id, txDate, title, legalNote, copyVersions, updatedAt: new Date().toISOString() };
        showToast('Story updated!');
      }
    } else {
      appState.stories.unshift({ id: targetId, txDate, title, legalNote, copyVersions, updatedAt: new Date().toISOString() });
      showToast('Story added!');
    }
    saveStories([targetId]);
    closeStoryModal();
    renderStoriesHub();
  });

  // Help Guide Modal Event Listeners
  if (elements.btnHelpToggle) {
    elements.btnHelpToggle.addEventListener('click', () => {
      if (elements.helpModal) elements.helpModal.style.display = 'flex';
    });
  }
  if (elements.btnHelpModalClose) {
    elements.btnHelpModalClose.addEventListener('click', () => {
      if (elements.helpModal) elements.helpModal.style.display = 'none';
    });
  }
  if (elements.btnHelpCloseOk) {
    elements.btnHelpCloseOk.addEventListener('click', () => {
      if (elements.helpModal) elements.helpModal.style.display = 'none';
    });
  }
  window.addEventListener('click', (e) => {
    if (elements.helpModal && e.target === elements.helpModal) {
      elements.helpModal.style.display = 'none';
    }
  });

  // DB Settings Event Listeners
  if (elements.btnDbStatus) {
    elements.btnDbStatus.addEventListener('click', () => {
      if (elements.dbFirebaseConfig) elements.dbFirebaseConfig.value = localStorage.getItem('cbsocials_firebase_config') || '';
      if (elements.dbSettingsModal) elements.dbSettingsModal.style.display = 'flex';
    });
  }
  if (elements.btnDbSettingsClose) {
    elements.btnDbSettingsClose.addEventListener('click', () => {
      if (elements.dbSettingsModal) elements.dbSettingsModal.style.display = 'none';
    });
  }
  if (elements.btnDbSettingsCancel) {
    elements.btnDbSettingsCancel.addEventListener('click', () => {
      if (elements.dbSettingsModal) elements.dbSettingsModal.style.display = 'none';
    });
  }
  window.addEventListener('click', (e) => {
    if (elements.dbSettingsModal && e.target === elements.dbSettingsModal) {
      elements.dbSettingsModal.style.display = 'none';
    }
  });

  if (elements.dbSettingsForm) {
    elements.dbSettingsForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const configStr = elements.dbFirebaseConfig ? elements.dbFirebaseConfig.value.trim() : '';
      
      if (configStr) {
        try {
          JSON.parse(configStr); // Quick syntax validation
          localStorage.setItem('cbsocials_firebase_config', configStr);
          showToast('Firebase configuration saved. Re-connecting...');
        } catch (err) {
          alert('Invalid configuration JSON format. Please verify the copied config.');
          return;
        }
      } else {
        localStorage.removeItem('cbsocials_firebase_config');
        showToast('Credentials cleared. Reverting to Local Mode.');
      }
      if (elements.dbSettingsModal) elements.dbSettingsModal.style.display = 'none';
      await initAuth();
    });
  }

  // Auth Overlay Event Listeners
  let authMode = 'login';
  if (elements.btnAuthToggle) {
    elements.btnAuthToggle.addEventListener('click', () => {
      if (authMode === 'login') {
        authMode = 'signup';
        if (elements.authTitle) elements.authTitle.textContent = 'Create an Account';
        if (elements.authSubtitle) elements.authSubtitle.textContent = 'Sign up to sync socials copy in real-time';
        if (elements.btnAuthSubmit) elements.btnAuthSubmit.textContent = 'Sign Up';
        if (elements.authToggleText) elements.authToggleText.textContent = 'Already have an account?';
        elements.btnAuthToggle.textContent = 'Log In';
      } else {
        authMode = 'login';
        if (elements.authTitle) elements.authTitle.textContent = 'Log in to Dashboard';
        if (elements.authSubtitle) elements.authSubtitle.textContent = 'Enter your email and password to sync socials copy';
        if (elements.btnAuthSubmit) elements.btnAuthSubmit.textContent = 'Log In';
        if (elements.authToggleText) elements.authToggleText.textContent = 'Need an account?';
        elements.btnAuthToggle.textContent = 'Sign Up';
      }
    });
  }

  if (elements.authForm) {
    elements.authForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = elements.authEmail ? elements.authEmail.value.trim() : '';
      const password = elements.authPassword ? elements.authPassword.value : '';
      
      if (!firebaseAuth) {
        showToast('Firebase client not connected. Configure connection first.');
        return;
      }
      
      if (elements.btnAuthSubmit) {
        elements.btnAuthSubmit.disabled = true;
        elements.btnAuthSubmit.textContent = authMode === 'login' ? 'Logging in...' : 'Signing up...';
      }
      
      try {
        if (authMode === 'login') {
          await firebaseAuth.signInWithEmailAndPassword(email, password);
          showToast('Logged in successfully!');
        } else {
          await firebaseAuth.createUserWithEmailAndPassword(email, password);
          showToast('Sign up successful! You are now logged in.');
        }
        await initAuth();
      } catch (err) {
        console.error('Authentication error:', err);
        alert(err.message || 'Authentication failed. Please verify credentials.');
        if (elements.btnAuthSubmit) {
          elements.btnAuthSubmit.textContent = authMode === 'login' ? 'Log In' : 'Sign Up';
        }
      } finally {
        if (elements.btnAuthSubmit) {
          elements.btnAuthSubmit.disabled = false;
        }
      }
    });
  }

  if (elements.btnAuthDbConfig) {
    elements.btnAuthDbConfig.addEventListener('click', () => {
      if (elements.dbFirebaseConfig) elements.dbFirebaseConfig.value = localStorage.getItem('cbsocials_firebase_config') || '';
      if (elements.dbSettingsModal) elements.dbSettingsModal.style.display = 'flex';
    });
  }

  if (elements.btnLogout) {
    elements.btnLogout.addEventListener('click', async () => {
      if (firebaseAuth) {
        await firebaseAuth.signOut();
        showToast('Logged out.');
        await initAuth();
      }
    });
  }

  // Sync state if credentials change in another tab
  window.addEventListener('storage', async (e) => {
    if (e.key === 'cbsocials_firebase_config') {
      console.log('Firebase credentials updated in another window/tab. Re-connecting...');
      await initAuth();
    }
  });

  // Calendar Events
  if (elements.btnCalendarPrev) {
    elements.btnCalendarPrev.addEventListener('click', () => {
      if (appState.calendarViewMode === 'week') {
        appState.currentCalendarDate.setDate(appState.currentCalendarDate.getDate() - 7);
      } else {
        appState.currentCalendarDate.setMonth(appState.currentCalendarDate.getMonth() - 1);
      }
      renderCalendar();
    });
  }
  if (elements.btnCalendarNext) {
    elements.btnCalendarNext.addEventListener('click', () => {
      if (appState.calendarViewMode === 'week') {
        appState.currentCalendarDate.setDate(appState.currentCalendarDate.getDate() + 7);
      } else {
        appState.currentCalendarDate.setMonth(appState.currentCalendarDate.getMonth() + 1);
      }
      renderCalendar();
    });
  }

  // Calendar View Toggles
  document.querySelectorAll('.calendar-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calendar-view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.calendarViewMode = btn.dataset.view;
      renderCalendar();
    });
  });
  if (elements.calendarNoteForm) {
    elements.calendarNoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const dateStr = elements.calendarNoteDate.value;
      const text = elements.calendarNoteText.value;
      saveCalendarNote(dateStr, text);
      closeCalendarNoteModal();
    });
  }
  if (elements.btnCalendarNoteCancel) {
    elements.btnCalendarNoteCancel.addEventListener('click', closeCalendarNoteModal);
  }
  if (elements.btnCalendarNoteClose) {
    elements.btnCalendarNoteClose.addEventListener('click', closeCalendarNoteModal);
  }
  if (elements.btnCalendarNoteDelete) {
    elements.btnCalendarNoteDelete.addEventListener('click', () => {
      const dateStr = elements.calendarNoteDate.value;
      saveCalendarNote(dateStr, '');
      closeCalendarNoteModal();
    });
  }

  // Calendar platform filters
  document.querySelectorAll('.calendar-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calendar-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.calendarPlatformFilter = btn.dataset.platform;
      
      const calendarSection = document.getElementById('panel-calendar-fullwidth');
      const rectBefore = calendarSection ? calendarSection.getBoundingClientRect() : null;
      const scrollTopBefore = window.scrollY;

      renderCalendar();

      if (calendarSection && rectBefore) {
        const rectAfter = calendarSection.getBoundingClientRect();
        const diff = rectAfter.top - rectBefore.top;
        if (Math.abs(diff) > 1) {
          window.scrollTo(0, scrollTopBefore + diff);
        }
      }
    });
  });

  // Dragstart delegation for copy rows
  if (elements.storiesHubList) {
    elements.storiesHubList.addEventListener('dragstart', (e) => {
      const row = e.target.closest('.story-copy-row');
      if (row) {
        e.dataTransfer.setData('application/json', JSON.stringify({
          storyId: row.dataset.storyId,
          cvIdx: parseInt(row.dataset.cvIdx, 10)
        }));
        e.dataTransfer.effectAllowed = 'copy';
        
        // Auto scroll calendar into view after drag starts (prevents drag image clipping)
        setTimeout(() => {
          const calendar = document.getElementById('panel-calendar-fullwidth');
          if (calendar) {
            calendar.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50);
      }
    });
  }

  // ── News Monitor Event Listeners ─────────────────────
  if (elements.btnAddKeyword) {
    elements.btnAddKeyword.addEventListener('click', () => {
      const val = elements.newsKeywordInput.value.trim().toLowerCase();
      if (val && !appState.newsKeywords.includes(val)) {
        appState.newsKeywords.push(val);
        localStorage.setItem('cb_news_keywords', JSON.stringify(appState.newsKeywords));
        elements.newsKeywordInput.value = '';
        renderKeywords();
        renderLiveFeed(); // Update the live feed immediately to reflect the new keyword filter
        showToast(`Keyword "${val}" added!`);
        saveSettingsToCloud();
      }
    });
  }

  if (elements.newsKeywordInput) {
    elements.newsKeywordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        elements.btnAddKeyword.click();
      }
    });
  }

  if (elements.btnClearFeed) {
    elements.btnClearFeed.addEventListener('click', () => {
      appState.liveNewsFeed = [];
      localStorage.setItem('cb_live_news_feed', JSON.stringify(appState.liveNewsFeed));
      renderLiveFeed();
      showToast('Live news feed cleared.');
    });
  }

  if (elements.btnManualNewsAdd) {
    elements.btnManualNewsAdd.addEventListener('click', () => {
      openNewsModal();
    });
  }

  if (elements.newsSearchInput) {
    elements.newsSearchInput.addEventListener('input', (e) => {
      appState.newsSearchQuery = e.target.value.toLowerCase();
      renderTrackedNews();
    });
  }

  if (elements.newsForm) {
    elements.newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = elements.newsFormId.value;
      const title = elements.newsFormTitle.value.trim();
      const category = elements.newsFormCategory.value;
      const source = elements.newsFormSource.value.trim() || 'Manual Entry';
      const summary = elements.newsFormSummary.value.trim();

      if (id) {
        // Edit existing
        const idx = appState.trackedNewsItems.findIndex(item => item.id === id);
        if (idx !== -1) {
          appState.trackedNewsItems[idx] = { id, title, category, source, summary, timestamp: new Date().toISOString() };
          showToast('Tracked news article updated!');
        }
      } else {
        // Add new
        appState.trackedNewsItems.unshift({
          id: `news-${Date.now()}`,
          title, category, source, summary,
          timestamp: new Date().toISOString()
        });
        showToast('News article added to tracking!');
      }

      localStorage.setItem('cb_tracked_news_items', JSON.stringify(appState.trackedNewsItems));
      closeNewsModal();
      renderTrackedNews();
      saveTrackedNewsToCloud();
    });
  }

  if (elements.btnNewsCancel) elements.btnNewsCancel.addEventListener('click', closeNewsModal);
  if (elements.btnNewsModalClose) elements.btnNewsModalClose.addEventListener('click', closeNewsModal);

  // Category filter tabs switching
  elements.newsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elements.newsTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      appState.activeNewsCategoryFilter = tab.dataset.categoryFilter;
      renderTrackedNews();
    });
  });

  // RSS Feed triggers
  if (elements.btnFetchFeed) {
    elements.btnFetchFeed.addEventListener('click', async () => {
      const refreshIcon = elements.btnFetchFeed.querySelector('.icon-refresh');
      if (refreshIcon) refreshIcon.classList.add('spinning');
      elements.btnFetchFeed.disabled = true;

      try {
        await fetchLiveRSSFeeds();
        showToast('RSS Feeds refreshed successfully!');
      } catch (err) {
        console.error('Manual refresh failed:', err);
        showToast('Failed to refresh some feeds.');
      } finally {
        if (refreshIcon) refreshIcon.classList.remove('spinning');
        elements.btnFetchFeed.disabled = false;
      }
    });
  }

  if (elements.btnManageRss) {
    elements.btnManageRss.addEventListener('click', () => {
      openRssManagerModal();
    });
  }

  if (elements.btnRssManagerClose) elements.btnRssManagerClose.addEventListener('click', closeRssManagerModal);
  if (elements.btnRssManagerDone) elements.btnRssManagerDone.addEventListener('click', closeRssManagerModal);

  if (elements.rssFeedForm) {
    elements.rssFeedForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawUrl = elements.rssFeedUrl.value.trim();
      const url = normalizeRssUrl(rawUrl);
      if (url && !appState.rssFeeds.includes(url)) {
        appState.rssFeeds.push(url);
        localStorage.setItem('cb_rss_feeds', JSON.stringify(appState.rssFeeds));
        elements.rssFeedUrl.value = '';
        renderRssFeedsList();
        fetchLiveRSSFeeds();
        showToast('RSS Feed added!');
        saveSettingsToCloud();
      } else if (appState.rssFeeds.includes(url)) {
        showToast('RSS Feed is already in the list!');
      }
    });
  }
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

// ── News Monitor Rendering and Feed Simulation Helpers ─────────────────────────
function renderKeywords() {
  if (!elements.keywordPillsContainer) return;
  const container = elements.keywordPillsContainer;
  container.innerHTML = '';
  
  if (appState.newsKeywords.length === 0) {
    container.innerHTML = `<span style="font-size:0.75rem; color:var(--text-muted);">No keywords set. Add keywords to filter simulated news updates.</span>`;
    return;
  }

  appState.newsKeywords.forEach(kw => {
    const pill = document.createElement('span');
    pill.className = 'keyword-pill';
    pill.innerHTML = `
      #${kw}
      <button class="btn-remove-keyword" data-keyword="${kw}" title="Remove keyword">&times;</button>
    `;
    pill.querySelector('.btn-remove-keyword').addEventListener('click', (e) => {
      const keywordToRemove = e.target.dataset.keyword;
      appState.newsKeywords = appState.newsKeywords.filter(k => k !== keywordToRemove);
      localStorage.setItem('cb_news_keywords', JSON.stringify(appState.newsKeywords));
      renderKeywords();
      renderLiveFeed(); // Update the live feed immediately to reflect the removed keyword filter
      showToast(`Keyword "${keywordToRemove}" removed.`);
      saveSettingsToCloud();
    });
    container.appendChild(pill);
  });
}

function renderLiveFeed() {
  if (!elements.liveFeedContent) return;
  const container = elements.liveFeedContent;
  container.innerHTML = '';

  const matchedItems = appState.liveNewsFeed.filter(item => {
    if (appState.newsKeywords.length === 0) return true; // Show all if no keywords are set
    return appState.newsKeywords.some(kw => {
      const kwLower = kw.toLowerCase();
      return item.title.toLowerCase().includes(kwLower) || 
             item.summary.toLowerCase().includes(kwLower);
    });
  });

  if (matchedItems.length === 0) {
    const isLive = appState.newsFeedSource === 'live-rss';
    const message = isLive
      ? 'No live updates matching keywords. Try adding more general keywords or check your internet connection.'
      : 'No updates matching keywords. Simulated updates arrive every 30 seconds.';
    container.innerHTML = `
      <div class="preview-placeholder" style="flex:1;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><circle cx="9" cy="9" r="2"/></svg>
        <p style="font-size:0.75rem;">${message}</p>
      </div>
    `;
    return;
  }

  matchedItems.forEach(item => {
    const card = document.createElement('div');
    card.className = `live-feed-card news-card-${item.category}`;
    
    let categoryLabel = 'Breaking News';
    if (item.category === 'updates') categoryLabel = 'Updates';
    else if (item.category === 'delivery') categoryLabel = 'Service Delivery';
    else if (item.category === 'consumer') categoryLabel = 'Consumer Issues';
    else if (item.category === 'policy') categoryLabel = 'Policy News';

    const isIol = (item.source && item.source.toLowerCase().includes('iol')) || (item.link && item.link.toLowerCase().includes('iol.co.za'));
    const isTimesLive = (item.source && item.source.toLowerCase().includes('timeslive')) || (item.link && item.link.toLowerCase().includes('timeslive.co.za'));
    const factCheckBadge = (isIol || isTimesLive)
      ? `<span class="fact-check-badge" style="color:var(--color-danger); font-weight:700; font-size:0.6rem; border:1.5px solid var(--color-danger); padding:0.1rem 0.35rem; border-radius:4px; text-transform:uppercase; letter-spacing:0.04em; margin-left:0.5rem; display:inline-flex; align-items:center; background:rgba(239, 68, 68, 0.1);">Fact Check</span>`
      : '';

    card.innerHTML = `
      <div class="live-feed-card-header">
        <span>Source: <strong>${escapeHtml(item.source)}</strong>${factCheckBadge}</span>
        <span>${formatTimeAgo(new Date(item.timestamp))}</span>
      </div>
      <h4 class="live-feed-card-title">${escapeHtml(item.title)}</h4>
      <p class="live-feed-card-summary">${escapeHtml(item.summary)}</p>
      <div class="live-feed-card-actions">
        <button class="btn btn-primary btn-sm btn-formulate" data-id="${item.id}" style="font-size:0.7rem; padding:0.25rem 0.6rem; border-radius:4px;">Formulate Post</button>
        <button class="btn btn-outline btn-sm btn-track-article" data-id="${item.id}" style="font-size:0.7rem; padding:0.25rem 0.6rem; border-radius:4px;">Track Article</button>
      </div>
    `;

    // Click handler for formulate post
    card.querySelector('.btn-formulate').addEventListener('click', () => {
      openFormulateModal(item.title, item.summary, item.source);
    });

    // Track article
    card.querySelector('.btn-track-article').addEventListener('click', () => {
      const exists = appState.trackedNewsItems.some(n => n.title === item.title);
      if (exists) {
        showToast('Article is already tracked!');
      } else {
        appState.trackedNewsItems.unshift({
          id: `news-${Date.now()}`,
          title: item.title,
          category: item.category,
          source: item.source,
          summary: item.summary,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('cb_tracked_news_items', JSON.stringify(appState.trackedNewsItems));
        renderTrackedNews();
        showToast('Added to Tracked News Items!');
        saveTrackedNewsToCloud();
      }
    });

    container.appendChild(card);
  });
}

function renderTrackedNews() {
  if (!elements.newsCategoriesList) return;
  const container = elements.newsCategoriesList;
  container.innerHTML = '';

  const filter = appState.activeNewsCategoryFilter;
  const query = appState.newsSearchQuery;

  const items = appState.trackedNewsItems.filter(item => {
    const matchesCat = (filter === 'all' || item.category === filter);
    const matchesSearch = !query || 
      item.title.toLowerCase().includes(query) || 
      item.summary.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  if (items.length === 0) {
    container.innerHTML = `
      <div class="preview-placeholder" style="padding: 2rem 0;">
        <p style="font-size:0.75rem;">No tracked articles match your criteria.</p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'news-tracker-item';
    
    let badgeClass = 'badge-cat-breaking';
    let categoryLabel = 'Breaking News';
    if (item.category === 'updates') { badgeClass = 'badge-cat-updates'; categoryLabel = 'Updates'; }
    else if (item.category === 'delivery') { badgeClass = 'badge-cat-delivery'; categoryLabel = 'Service Delivery'; }
    else if (item.category === 'consumer') { badgeClass = 'badge-cat-consumer'; categoryLabel = 'Consumer Issues'; }
    else if (item.category === 'policy') { badgeClass = 'badge-cat-policy'; categoryLabel = 'Policy News'; }

    card.innerHTML = `
      <div class="news-tracker-header">
        <div>
          <span class="news-category-badge ${badgeClass}">${categoryLabel}</span>
          <span style="font-size:0.7rem; color:var(--text-muted); margin-left:0.4rem;">Source: ${escapeHtml(item.source)}</span>
        </div>
        <div style="display:flex; gap:0.35rem;">
          <button class="btn-copy-lib-action btn-news-edit" data-id="${item.id}" title="Edit article">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-copy-lib-action btn-copy-lib-delete btn-news-delete" data-id="${item.id}" title="Delete article">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>
      </div>
      <h4 class="live-feed-card-title">${escapeHtml(item.title)}</h4>
      <p class="live-feed-card-summary">${escapeHtml(item.summary)}</p>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.25rem;">
        <span style="font-size:0.7rem; color:var(--text-muted);">${formatTimeAgo(new Date(item.timestamp))}</span>
        <button class="btn btn-primary btn-sm btn-formulate-tracked" data-id="${item.id}" style="font-size:0.7rem; padding:0.25rem 0.65rem; border-radius:4px;">
          Formulate Draft Post
        </button>
      </div>
    `;

    card.querySelector('.btn-formulate-tracked').addEventListener('click', () => {
      openFormulateModal(item.title, item.summary, item.source);
    });

    card.querySelector('.btn-news-edit').addEventListener('click', () => {
      openNewsModal(item.id);
    });

    card.querySelector('.btn-news-delete').addEventListener('click', () => {
      appState.trackedNewsItems = appState.trackedNewsItems.filter(n => n.id !== item.id);
      localStorage.setItem('cb_tracked_news_items', JSON.stringify(appState.trackedNewsItems));
      renderTrackedNews();
      showToast('Article removed from tracking.');
      deleteTrackedNewsFromDb(item.id);
    });

    container.appendChild(card);
  });
}

function openNewsModal(id = null) {
  elements.newsFormId.value = '';
  elements.newsFormTitle.value = '';
  elements.newsFormCategory.value = 'breaking';
  elements.newsFormSource.value = '';
  elements.newsFormSummary.value = '';

  if (id) {
    const item = appState.trackedNewsItems.find(n => n.id === id);
    if (item) {
      elements.newsFormId.value = item.id;
      elements.newsFormTitle.value = item.title;
      elements.newsFormCategory.value = item.category;
      elements.newsFormSource.value = item.source;
      elements.newsFormSummary.value = item.summary;
    }
  }

  elements.newsModal.style.display = 'flex';
}

function closeNewsModal() {
  elements.newsModal.style.display = 'none';
}

function openFormulateModal(title, summary, source) {
  openNewPostModal();
  elements.formPostTitle.value = `News Post: ${title.substring(0, 30)}...`;
  
  // Format template social copy based on the source and article summary
  elements.formPostText.value = `BREAKING NEWS // ${title.toUpperCase()}\n\n${summary.substring(0, 160)}...\n\nSource: ${source} #CarteBlanche #SocialUpdates`;
  
  const charCounter = elements.formCharCount;
  if (charCounter) {
    charCounter.textContent = `${elements.formPostText.value.length} characters`;
  }
}

// ── RSS Feeds Manager & Client Fetcher ─────────────────────────────────────────
function openRssManagerModal() {
  renderRssFeedsList();
  elements.rssManagerModal.style.display = 'flex';
}

function closeRssManagerModal() {
  elements.rssManagerModal.style.display = 'none';
}

function renderRssFeedsList() {
  const container = elements.rssFeedsList;
  container.innerHTML = '';

  if (appState.rssFeeds.length === 0) {
    container.innerHTML = `<div style="font-size:0.75rem;color:var(--text-muted);text-align:center;padding:1rem 0;">No feeds added yet.</div>`;
    return;
  }

  appState.rssFeeds.forEach((feed, idx) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.15); padding:0.4rem 0.6rem; border-radius:6px; border:1px solid var(--border-glass); font-size:0.75rem;';
    
    let domain = 'Feed';
    try {
      domain = new URL(feed).hostname;
    } catch(e){}

    row.innerHTML = `
      <div style="flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding-right:0.5rem;" title="${feed}">
        <strong>${domain}</strong> <span style="color:var(--text-muted); font-size:0.7rem;">(${feed})</span>
      </div>
      <button class="btn-copy-lib-action btn-rss-delete" data-index="${idx}" style="color:var(--color-danger); cursor:pointer;">
        &times;
      </button>
    `;

    row.querySelector('.btn-rss-delete').addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index, 10);
      appState.rssFeeds.splice(index, 1);
      localStorage.setItem('cb_rss_feeds', JSON.stringify(appState.rssFeeds));
      renderRssFeedsList();
      fetchLiveRSSFeeds();
      showToast('RSS Feed removed.');
      saveSettingsToCloud();
    });

    container.appendChild(row);
  });
}

function normalizeRssUrl(url) {
  if (!url) return '';
  let cleanUrl = url.trim().toLowerCase();
  
  // Migrate old down domain to the new working subdomain
  if (cleanUrl.includes('feeds.24.com')) {
    url = url.replace('feeds.24.com', 'feeds.news24.com');
    cleanUrl = cleanUrl.replace('feeds.24.com', 'feeds.news24.com');
  }

  // Strip trailing slash for exact matching
  if (cleanUrl.endsWith('/')) {
    cleanUrl = cleanUrl.slice(0, -1);
  }
  
  // Strip protocol prefix to make matching simpler and domain-independent
  cleanUrl = cleanUrl.replace(/^https?:\/\/(www\.)?/, '');

  const mapping = {
    'news24.com': 'https://feeds.news24.com/articles/news24/SouthAfrica/rss',
    'netwerk24.com': 'https://feeds.news24.com/articles/netwerk24/nuus/rss',
    'ewn.co.za': 'https://ewn.co.za/RSS%20Feeds/Latest%20News',
    'iol.co.za': 'https://rss.iol.io/iol/news',
    'dailymaverick.co.za': 'https://www.dailymaverick.co.za/feed/',
    'maroelamedia.co.za': 'https://maroelamedia.co.za/feed/',
    'mg.co.za': 'https://mg.co.za/feed/',
    'businesstech.co.za/news': 'https://businesstech.co.za/news/feed/',
    'businesstech.co.za': 'https://businesstech.co.za/news/feed/',
    'mybroadband.co.za/news': 'https://mybroadband.co.za/news/feed/',
    'mybroadband.co.za': 'https://mybroadband.co.za/news/feed/',
    'techcentral.co.za': 'https://techcentral.co.za/feed/',
    'teeveetee.blogspot.com': 'https://teeveetee.blogspot.com/feeds/posts/default?alt=rss',
    'businessday.co.za': 'https://www.businesslive.co.za/bd/rss',
    'moneyweb.co.za': 'https://www.moneyweb.co.za/feed/',
    'enca.com': 'https://www.enca.com/feed/rss/latest-news',
    'timeslive.co.za': 'https://www.timeslive.co.za/rss/',
    'dailydispatch.co.za': 'https://www.dispatchlive.co.za/rss/',
    'citizen.co.za': 'https://www.citizen.co.za/feed/',
    'citizen.co.za/network-news': 'https://www.citizen.co.za/network-news/feed/'
  };

  if (mapping[cleanUrl]) {
    return mapping[cleanUrl];
  }

  return url;
}

// Client-side RSS fetching via public cross-origin API proxies
async function fetchLiveRSSFeeds() {
  if (appState.newsFeedSource !== 'live-rss') return;

  if (appState.rssFeeds.length === 0) {
    appState.liveNewsFeed = [];
    renderLiveFeed();
    return;
  }

  let allItems = [];
  const container = elements.liveFeedContent;
  container.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:3rem; gap:0.5rem;">
      <span class="live-pulse-dot" style="background:#60a5fa; box-shadow: 0 0 8px #60a5fa;"></span>
      <span style="font-size:0.75rem; color:var(--text-muted);">Fetching live feeds...</span>
    </div>
  `;

  // Fetch feeds sequentially/concurrently
  const fetchPromises = appState.rssFeeds.map(async (feedUrl) => {
    try {
      let xmlText = '';
      let success = false;

      // 1. Try corsproxy.io first (direct XML response)
      try {
        console.log(`[RSS] Trying corsproxy.io for: ${feedUrl}`);
        const res = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(feedUrl)}`);
        if (res.ok) {
          const text = await res.text();
          if (text && !text.includes('error') && !text.includes('Access Denied')) {
            xmlText = text;
            success = true;
            console.log(`[RSS] Successfully fetched via corsproxy.io: ${feedUrl}`);
          }
        }
      } catch (e) {
        console.warn(`[RSS] corsproxy.io failed for ${feedUrl}, trying codetabs...`, e);
      }

      // 2. Try api.codetabs.com next (direct XML response)
      if (!success) {
        try {
          console.log(`[RSS] Trying codetabs for: ${feedUrl}`);
          const res = await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(feedUrl)}`);
          if (res.ok) {
            const text = await res.text();
            if (text && !text.includes('Error')) {
              xmlText = text;
              success = true;
              console.log(`[RSS] Successfully fetched via codetabs: ${feedUrl}`);
            }
          }
        } catch (e) {
          console.warn(`[RSS] codetabs failed for ${feedUrl}, trying allorigins...`, e);
        }
      }

      // 3. Fallback to allorigins.win (JSON wrapped response)
      if (!success) {
        try {
          console.log(`[RSS] Trying allorigins.win for: ${feedUrl}`);
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
          const res = await fetch(proxyUrl);
          if (res.ok) {
            const data = await res.json();
            if (data && data.contents) {
              xmlText = data.contents;
              success = true;
              console.log(`[RSS] Successfully fetched via allorigins: ${feedUrl}`);
            }
          }
        } catch (e) {
          console.warn(`[RSS] allorigins failed for ${feedUrl}`, e);
        }
      }

      if (!success || !xmlText) {
        console.warn(`[RSS] All proxies failed to fetch RSS feed: ${feedUrl}`);
        return;
      }

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      
      if (xmlDoc.querySelector("parsererror")) {
        console.warn(`[RSS] XML parsing error for feed: ${feedUrl}`);
        return;
      }

      const items = xmlDoc.querySelectorAll("item");
      const channelTitle = xmlDoc.querySelector("channel > title")?.textContent || "RSS Feed";

      items.forEach((item, idx) => {
        // limit to 10 articles per feed
        if (idx >= 10) return;

        const title = item.querySelector("title")?.textContent || "No Title";
        const link = item.querySelector("link")?.textContent || feedUrl;
        const descriptionRaw = item.querySelector("description")?.textContent || "";
        
        // Strip html tags from description
        const summary = descriptionRaw.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 160);
        const pubDateStr = item.querySelector("pubDate")?.textContent;
        const timestamp = pubDateStr ? new Date(pubDateStr).toISOString() : new Date().toISOString();

        // Infer Category based on Title keywords
        let category = 'updates';
        const titleL = title.toLowerCase();
        if (titleL.includes('break') || titleL.includes('kill') || titleL.includes('warn') || titleL.includes('arrest')) {
          category = 'breaking';
        } else if (titleL.includes('power') || titleL.includes('water') || titleL.includes('eskom') || titleL.includes('municip') || titleL.includes('load')) {
          category = 'delivery';
        } else if (titleL.includes('price') || titleL.includes('inflation') || titleL.includes('scam') || titleL.includes('bank') || titleL.includes('fraud')) {
          category = 'consumer';
        } else if (titleL.includes('bill') || titleL.includes('parliament') || titleL.includes('court') || titleL.includes('policy') || titleL.includes('law')) {
          category = 'policy';
        }

        allItems.push({
          id: `rss-${channelTitle}-${idx}-${Date.now()}`,
          title,
          summary,
          category,
          source: channelTitle,
          link,
          timestamp
        });
      });
    } catch (err) {
      console.warn(`Failed to parse RSS Feed: ${feedUrl}`, err);
    }
  });

  await Promise.all(fetchPromises);

  // Merge new items with existing items, ensuring uniqueness by link or title
  const existingItems = appState.liveNewsFeed || [];
  const mergedItems = [...allItems];
  
  existingItems.forEach(existing => {
    const isDuplicate = mergedItems.some(item => 
      (item.link && existing.link && item.link === existing.link) || 
      (item.title === existing.title)
    );
    if (!isDuplicate) {
      mergedItems.push(existing);
    }
  });

  // Sort by date descending
  mergedItems.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  // Keep up to 150 historic news items
  appState.liveNewsFeed = mergedItems.slice(0, 150);
  localStorage.setItem('cb_live_news_feed', JSON.stringify(appState.liveNewsFeed));
  
  if (appState.currentWorkspace === 'news') {
    renderLiveFeed();
  }
}

// Background Live News Simulation Loop
let newsSimulationInterval = null;
const SIMULATION_TEMPLATES = [
  {
    title: "Eskom reports unit failures at Tutuka and Majuba stations",
    category: "delivery",
    source: "PowerWatch SA",
    summary: "Two generation units broke down early today, putting severe pressure on capacity. Energy analysts predict load shedding stages may escalate tomorrow."
  },
  {
    title: "Gauteng water reservoir levels fall below 35%",
    category: "delivery",
    source: "Municipal Bulletin",
    summary: "Due to high temperatures and pumping station failures, municipal water boards warn that supply restrictions will be enforced across JHB Metro."
  },
  {
    title: "New Treasury regulations proposed to tighten tender transparency",
    category: "policy",
    source: "Financial News",
    summary: "The Finance Department announced draft regulations mandating real-time database auditing of all municipal tenders exceeding 5 million ZAR."
  },
  {
    title: "Nersa approves tariff restructure for major industrial users",
    category: "policy",
    source: "Business Intelligence",
    summary: "National Energy Regulator has signed off on changes to peak industrial rates, hoping to incentivize heavy factories to operate during off-peak hours."
  },
  {
    title: "Scam alert: SMS phishing targeting banking clients nationwide",
    category: "consumer",
    source: "SA Banking Risk Office",
    summary: "Security researchers identify a massive spoofing campaign sending fake text warnings about account suspension to collect client login keys."
  },
  {
    title: "Petrol prices estimated to increase by 42c next month",
    category: "consumer",
    source: "Automobile Club",
    summary: "Rising global oil benchmarks combined with local currency pressure point to a retail price hike. Transport logistics groups warn margins will suffer."
  },
  {
    title: "Corruption trial of regional director set to resume",
    category: "breaking",
    source: "News24",
    summary: "The High Court will reopen the hearing on financial irregularities surrounding regional infrastructure budgets. The state prosecutor files new evidence."
  },
  {
    title: "Special Investigating Unit raids municipal procurement offices",
    category: "breaking",
    source: "SIU Press Office",
    summary: "Investigators have secured digital documents and contracts detailing municipal hardware acquisitions that took place over the last fiscal year."
  }
];

function initNewsSimulation() {
  if (newsSimulationInterval) clearInterval(newsSimulationInterval);

  // Generate 2 seed articles instantly on start if feed is empty and source is simulated
  if (appState.newsFeedSource === 'simulated' && appState.liveNewsFeed.length === 0) {
    for (let i = 0; i < 3; i++) {
      const template = SIMULATION_TEMPLATES[Math.floor(Math.random() * SIMULATION_TEMPLATES.length)];
      appState.liveNewsFeed.unshift({
        id: `sim-${Date.now()}-${i}`,
        ...template,
        timestamp: new Date(Date.now() - i * 15 * 60 * 1000).toISOString()
      });
    }
    localStorage.setItem('cb_live_news_feed', JSON.stringify(appState.liveNewsFeed));
  }

  newsSimulationInterval = setInterval(() => {
    if (appState.newsFeedSource !== 'simulated') return;

    const template = SIMULATION_TEMPLATES[Math.floor(Math.random() * SIMULATION_TEMPLATES.length)];
    appState.liveNewsFeed.unshift({
      id: `sim-${Date.now()}`,
      ...template,
      timestamp: new Date().toISOString()
    });

    // Cap at 25 simulated items
    if (appState.liveNewsFeed.length > 25) {
      appState.liveNewsFeed.pop();
    }

    localStorage.setItem('cb_live_news_feed', JSON.stringify(appState.liveNewsFeed));
    
    if (appState.currentWorkspace === 'news') {
      renderLiveFeed();
    }
  }, 30000); // Trigger simulated article every 30 seconds
}

function closeCopyItemModal() {
  elements.copyItemModal.style.display = 'none';
}

// ── Copy Library Renderer ─────────────────────────────────────────────────────
function renderCopyLibrary() {
  if (!elements.copyLibraryList) return;
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
        deleteCopyFromDb(btn.dataset.id);
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
      (s.txDate || '').toLowerCase().includes(query) ||
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
    const key = s.txDate ? normalizeDateString(s.txDate) : 'TBC';
    if (!groups[key]) groups[key] = [];
    groups[key].push(s);
  });

  // Calculate upcoming Sunday string (e.g., "7 JUN 2026")
  const today = new Date();
  const dayOfWeekNum = today.getDay();
  const diffDays = dayOfWeekNum === 0 ? 0 : 7 - dayOfWeekNum;
  const upcomingSunday = new Date(today);
  upcomingSunday.setDate(today.getDate() + diffDays);
  const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const upcomingSundayStr = `${upcomingSunday.getDate()} ${months[upcomingSunday.getMonth()]} ${upcomingSunday.getFullYear()}`;

  // If this is the initial load, collapse all groups except the Active Broadcast Week
  if (appState.isFirstStoriesLoad && Object.keys(groups).length > 0) {
    appState.collapsedGroups.clear();
    Object.keys(groups).forEach(key => {
      const isUpcomingActive = key !== 'TBC' && key !== 'UNLINKED' && parseTxDate(key) === parseTxDate(upcomingSundayStr);
      if (!isUpcomingActive) {
        appState.collapsedGroups.add(key);
      }
    });
    appState.isFirstStoriesLoad = false;
    localStorage.setItem('cbsocials_collapsed_groups', JSON.stringify([...appState.collapsedGroups]));
  }

  // Sort groups: place TBC/Unlinked at the absolute top, then chronological descending
  const sortedGroupKeys = Object.keys(groups).sort((a, b) => {
    const isATbc = a.includes('TBC') || a.includes('UNLINKED');
    const isBTbc = b.includes('TBC') || b.includes('UNLINKED');
    if (isATbc && !isBTbc) return -1;
    if (!isATbc && isBTbc) return 1;
    return parseTxDate(b) - parseTxDate(a);
  });

  sortedGroupKeys.forEach(txDate => {
    const isCollapsed = appState.collapsedGroups.has(txDate);
    const groupEl = document.createElement('div');
    groupEl.className = 'story-date-group' + (isCollapsed ? ' collapsed' : '');

    const storyList = groups[txDate];
    const groupHeader = document.createElement('div');
    
    const isTbc = txDate.includes('TBC') || txDate.includes('UNLINKED');
    const isUpcomingActive = !isTbc && parseTxDate(txDate) === parseTxDate(upcomingSundayStr);

    let headerClass = 'story-date-header story-date-header--clickable';
    let labelIcon = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
    let labelText = `TX: <strong>${escapeHtml(txDate)}</strong>`;
    let activeBadgeHtml = '';

    if (isTbc) {
      headerClass += ' story-date-header--tbc';
      labelIcon = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
      labelText = `<strong style="color: var(--color-warning);">UNLINKED DRAFTS / TBC</strong>`;
    } else if (isUpcomingActive) {
      headerClass += ' story-date-header--active-week';
      activeBadgeHtml = `<span class="active-week-badge">Active Broadcast Week</span>`;
    }

    groupHeader.className = headerClass;
    groupHeader.setAttribute('role', 'button');
    groupHeader.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
    groupHeader.innerHTML = `
      <div class="story-date-label">
        ${labelIcon}
        <span>${labelText}</span>
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        ${activeBadgeHtml}
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

        let warningsHtml = '';
        cvPlatforms.forEach(plat => {
          const limit = PLATFORMS_CONFIG[plat]?.limit;
          if (limit && text.length > limit) {
            const label = plat === 'twitter' ? 'X' : plat.toUpperCase();
            warningsHtml += `<span class="copy-limit-badge" title="Exceeds ${PLATFORMS_CONFIG[plat].name} character limit of ${limit}">⚠️ ${label}</span>`;
          }
        });

        return `
          <div class="story-copy-row" draggable="true" data-story-id="${story.id}" data-cv-idx="${i}">
            <div class="story-copy-num">V${i + 1}</div>
            <div class="story-copy-text-container">
              <div class="story-copy-text">${escapeHtml(text)}</div>
              <div class="story-copy-platforms-row">
                <span class="story-copy-platforms-label">Platforms:</span>
                ${platformBadgesHtml}
                ${warningsHtml}
              </div>
            </div>
            <div class="story-copy-actions">
              <button class="btn-copy-lib-action btn-story-copy-version" data-id="${story.id}" data-idx="${i}" title="Copy to clipboard">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
              <button class="btn-copy-lib-action btn-story-calendar-version" data-id="${story.id}" data-idx="${i}" title="Push to calendar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
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

  container.querySelectorAll('.btn-story-calendar-version').forEach(btn => {
    btn.addEventListener('click', () => {
      const story = appState.stories.find(s => s.id === btn.dataset.id);
      if (!story) return;
      const cvIdx = parseInt(btn.dataset.idx, 10);
      const cv = story.copyVersions[cvIdx];
      const text = getCopyVersionText(cv);
      const taggedPlatforms = getCopyVersionPlatforms(cv);
      
      openPushToCalendarModal(story.id, cvIdx, text, taggedPlatforms);
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
        // Toggle off: remove this platform from any scheduled posts on the calendar for this story and copy version
        appState.posts.forEach(p => {
          if (p.storyId === storyId && p.cvIdx === cvIdx && p.platforms) {
            p.platforms = p.platforms.filter(plat => plat !== platform);
          }
        });
        // Remove empty posts (posts with no platforms left)
        appState.posts = appState.posts.filter(p => p.platforms && p.platforms.length > 0);
        saveState();
        renderCalendar();
      } else {
        // Toggle on: open the push to calendar modal
        const text = getCopyVersionText(cv);
        openPushToCalendarModal(storyId, cvIdx, text, [platform]);
      }
    });
  });

  container.querySelectorAll('.btn-story-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const story = appState.stories.find(s => s.id === btn.dataset.id);
      if (!story) return;
      if (confirm(`Delete "${story.title}"? This cannot be undone.`)) {
        appState.stories = appState.stories.filter(s => s.id !== btn.dataset.id);
        saveStories(null, true);
        if (firestoreDb) {
          deleteStoryFromDb(btn.dataset.id);
        }
        renderStoriesHub();
        showToast('Story deleted.');
      }
    });
  });
}

function parseTxDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return 0;
  const clean = dateStr.toUpperCase().trim();
  if (clean === 'TBC' || clean === 'UNLINKED' || clean === '') return 0;
  try {
    const ymdMatch = clean.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (ymdMatch) {
      const year = parseInt(ymdMatch[1], 10);
      const monthIdx = parseInt(ymdMatch[2], 10) - 1;
      const day = parseInt(ymdMatch[3], 10);
      return new Date(year, monthIdx, day).getTime();
    }
    const matched = clean.match(/(\d+)\s+([A-Z]+)\s+(\d+)/);
    if (matched) {
      const day = parseInt(matched[1], 10);
      const monthStr = matched[2];
      const year = parseInt(matched[3], 10);
      const months3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const monthsFull = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
      let monthIdx = monthsFull.indexOf(monthStr);
      if (monthIdx === -1) {
        monthIdx = months3.indexOf(monthStr);
      }
      if (monthIdx !== -1) {
        return new Date(year, monthIdx, day).getTime();
      }
    }
    const d = new Date(clean);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  } catch(e) { return 0; }
}

function formatDateToStandard(dateStr) {
  if (!dateStr) return 'TBC';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  return `${day} ${months[monthIdx]} ${year}`;
}

function normalizeDateString(dateStr) {
  if (!dateStr) return 'TBC';
  const clean = dateStr.toUpperCase().trim();
  if (clean === 'TBC' || clean === 'UNLINKED' || clean === '') return 'TBC';
  const timestamp = parseTxDate(dateStr);
  if (timestamp === 0) return dateStr;
  const d = new Date(timestamp);
  const day = d.getDate();
  const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

function formatStandardToInputDate(stdDateStr) {
  if (!stdDateStr || stdDateStr === 'TBC') return '';
  const parts = stdDateStr.trim().toUpperCase().split(/\s+/);
  if (parts.length !== 3) return '';
  const day = parts[0].padStart(2, '0');
  const monthStr = parts[1];
  const year = parts[2];
  const months3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const monthsFull = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  let monthIdx = monthsFull.indexOf(monthStr);
  if (monthIdx === -1) {
    monthIdx = months3.indexOf(monthStr);
  }
  if (monthIdx === -1) return '';
  const month = String(monthIdx + 1).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// ── Cloud Firestore Posts Sync ───────────────────────────────────────────────
let postsRealtimeListener = null;
let isPostsDirty = false;

function setupRealtimePostsSubscription() {
  if (!firestoreDb || postsRealtimeListener) return;
  
  postsRealtimeListener = firestoreDb
    .collection('cbsocials_posts')
    .onSnapshot((snapshot) => {
      const updatedPosts = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        updatedPosts.push({
          id: doc.id,
          storyId: data.storyId || null,
          cvIdx: data.cvIdx !== undefined ? data.cvIdx : null,
          title: data.title || '',
          text: data.text || '',
          platforms: data.platforms || [],
          scheduledDate: data.scheduledDate || '',
          scheduledTime: data.scheduledTime || '',
          status: data.status || 'Draft',
          updatedAt: data.updatedAt || new Date().toISOString()
        });
      });
      
      if (isPostsDirty) {
        console.log('Local posts are unsynced (dirty state). Skipping cloud override...');
        return;
      }
      
      if (updatedPosts.length > 0) {
        appState.posts = updatedPosts;
        localStorage.setItem('cbsocials_posts', JSON.stringify(appState.posts));
        
        syncCopyVersionPlatformsFromCalendar();
        renderDrafts();
        renderCalendar();
        renderFeedSimulator();
        console.log('Firebase Firestore posts synchronized. Total:', updatedPosts.length);
      } else {
        const local = localStorage.getItem('cbsocials_posts');
        let localPosts = [];
        try {
          localPosts = local ? JSON.parse(local) : [];
        } catch (e) {
          localPosts = [];
        }
        if (localPosts.length > 0) {
          console.log('Cloud has no posts, uploading local posts...');
          appState.posts = localPosts;
          savePostsToCloud();
        } else {
          appState.posts = MOCK_POSTS;
          localStorage.setItem('cbsocials_posts', JSON.stringify(appState.posts));
          savePostsToCloud();
        }
      }
    }, (err) => {
      console.error('Firebase Firestore posts realtime sync error:', err);
    });
}

async function savePostsToCloud() {
  if (!firebaseAuth || !firestoreDb) return;
  const user = firebaseAuth.currentUser;
  if (!user) return;
  
  try {
    isPostsDirty = true;
    const batch = firestoreDb.batch();
    
    appState.posts.forEach(p => {
      const docRef = firestoreDb.collection('cbsocials_posts').doc(p.id);
      batch.set(docRef, {
        id: p.id,
        storyId: p.storyId || null,
        cvIdx: p.cvIdx !== undefined ? p.cvIdx : null,
        title: p.title || '',
        text: p.text || '',
        platforms: p.platforms || [],
        scheduledDate: p.scheduledDate || '',
        scheduledTime: p.scheduledTime || '',
        status: p.status || 'Draft',
        updatedAt: p.updatedAt || new Date().toISOString(),
        userId: user.uid
      });
    });
    
    await batch.commit();
    isPostsDirty = false;
    console.log('Posts saved to Firebase Firestore successfully.');
  } catch (err) {
    console.error('Failed to save posts to Firebase:', err);
  }
}

async function deletePostFromDb(postId) {
  if (!firestoreDb) return;
  try {
    await firestoreDb.collection('cbsocials_posts').doc(postId).delete();
    console.log('Post deleted from Firebase:', postId);
  } catch (err) {
    console.error('Error deleting post from Firebase:', err);
  }
}

// ── Cloud Firestore Tracked Articles Sync ──────────────────────────────────────────────
let trackedNewsRealtimeListener = null;

function setupRealtimeTrackedNewsSubscription() {
  if (!firestoreDb || trackedNewsRealtimeListener) return;

  trackedNewsRealtimeListener = firestoreDb
    .collection('tracked_articles')
    .onSnapshot((snapshot) => {
      const updatedItems = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        updatedItems.push({
          id: doc.id,
          title: data.title || '',
          category: data.category || 'updates',
          source: data.source || '',
          summary: data.summary || '',
          timestamp: data.timestamp || new Date().toISOString()
        });
      });

      // Sort by date descending
      updatedItems.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      // Overwrite state and localStorage if there is any update
      if (updatedItems.length > 0 || appState.trackedNewsItems.length > 0) {
        const match = appState.trackedNewsItems.length === updatedItems.length &&
                      appState.trackedNewsItems.every((item, idx) => item.id === updatedItems[idx].id);
        if (!match) {
          appState.trackedNewsItems = updatedItems;
          localStorage.setItem('cb_tracked_news_items', JSON.stringify(appState.trackedNewsItems));
          renderTrackedNews();
        }
      }
    }, (err) => {
      console.error('Error fetching tracked articles from Firestore:', err);
    });
}

function saveTrackedNewsToCloud() {
  if (firebaseAuth && firestoreDb && firebaseAuth.currentUser) {
    const batch = firestoreDb.batch();
    appState.trackedNewsItems.forEach(item => {
      const docRef = firestoreDb.collection('tracked_articles').doc(item.id);
      batch.set(docRef, {
        id: item.id,
        title: item.title,
        category: item.category,
        source: item.source,
        summary: item.summary,
        timestamp: item.timestamp,
        updatedAt: new Date().toISOString()
      });
    });
    batch.commit()
      .then(() => console.log('Tracked articles batch saved to Firestore.'))
      .catch(e => console.error('Error batch saving tracked articles:', e));
  }
}

async function deleteTrackedNewsFromDb(itemId) {
  if (!firestoreDb) return;
  try {
    await firestoreDb.collection('tracked_articles').doc(itemId).delete();
    console.log('Tracked article deleted from Firestore:', itemId);
  } catch (err) {
    console.error('Error deleting tracked article from Firestore:', err);
  }
}

// ── Cloud Firestore Copy Library Sync ───────────────────────────────────────────────
let copyLibraryRealtimeListener = null;

function setupRealtimeCopyLibrarySubscription() {
  if (!firestoreDb || copyLibraryRealtimeListener) return;

  copyLibraryRealtimeListener = firestoreDb
    .collection('copy_library')
    .onSnapshot((snapshot) => {
      const updatedLibrary = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        updatedLibrary.push({
          id: doc.id,
          title: data.title || '',
          category: data.category || 'General',
          platforms: data.platforms || [],
          text: data.text || '',
          updatedAt: data.updatedAt || new Date().toISOString()
        });
      });

      updatedLibrary.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

      if (updatedLibrary.length > 0 || appState.copyLibrary.length > 0) {
        const match = appState.copyLibrary.length === updatedLibrary.length &&
                      appState.copyLibrary.every((c, idx) => c.id === updatedLibrary[idx].id);
        if (!match) {
          appState.copyLibrary = updatedLibrary;
          localStorage.setItem('cbsocials_copy_library', JSON.stringify(appState.copyLibrary));
          renderCopyLibrary();
        }
      }
    }, (err) => {
      console.error('Error subscribing to Copy Library in Firestore:', err);
    });
}

async function deleteCopyFromDb(copyId) {
  if (!firestoreDb) return;
  try {
    await firestoreDb.collection('copy_library').doc(copyId).delete();
    console.log('Copy Library template deleted from Firebase:', copyId);
  } catch (err) {
    console.error('Error deleting copy template from Firebase:', err);
  }
}

// ── Cloud Firestore Settings Sync (Keywords & Feeds) ──────────────────────────────────
let settingsRealtimeListener = null;

function setupRealtimeSettingsSubscription() {
  if (!firestoreDb || settingsRealtimeListener) return;

  settingsRealtimeListener = firestoreDb
    .collection('settings')
    .doc('news_monitor')
    .onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        let changed = false;

        if (data.keywords && Array.isArray(data.keywords)) {
          // Check if current list differs before overriding to prevent loops
          const match = appState.newsKeywords.length === data.keywords.length &&
                        appState.newsKeywords.every((kw, idx) => kw === data.keywords[idx]);
          if (!match) {
            appState.newsKeywords = data.keywords;
            localStorage.setItem('cb_news_keywords', JSON.stringify(appState.newsKeywords));
            renderKeywords();
            changed = true;
          }
        }

        if (data.feeds && Array.isArray(data.feeds)) {
          const normalizedFeeds = Array.from(new Set(data.feeds.map(normalizeRssUrl)));
          const match = appState.rssFeeds.length === normalizedFeeds.length &&
                        appState.rssFeeds.every((f, idx) => f === normalizedFeeds[idx]);
          if (!match) {
            appState.rssFeeds = normalizedFeeds;
            localStorage.setItem('cb_rss_feeds', JSON.stringify(appState.rssFeeds));
            renderRssFeedsList();
            changed = true;
          }
        }

        if (changed) {
          fetchLiveRSSFeeds();
        }
      }
    }, (err) => {
      console.error('Error fetching settings from Firestore:', err);
    });
}

function saveSettingsToCloud() {
  if (firebaseAuth && firestoreDb && firebaseAuth.currentUser) {
    firestoreDb.collection('settings').doc('news_monitor').set({
      keywords: appState.newsKeywords,
      feeds: appState.rssFeeds,
      updatedAt: new Date().toISOString()
    }).then(() => {
      console.log('Monitor settings (keywords/feeds) successfully saved to Firestore.');
    }).catch(e => {
      console.error('Error saving settings to Firestore:', e);
    });
  }
}

// ── Calendar Notes ────────────────────────────────────────────────────────────
let calendarRealtimeListener = null;

function setupRealtimeCalendarNotesSubscription() {
  if (!firestoreDb || calendarRealtimeListener) return;
  
  calendarRealtimeListener = firestoreDb
    .collection('calendar_notes')
    .onSnapshot((snapshot) => {
      const updatedNotes = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        updatedNotes.push({
          id: doc.id,
          date: data.date,
          text: data.text,
          updatedAt: data.updatedAt
        });
      });
      
      appState.calendarNotes = updatedNotes;
      localStorage.setItem('cbsocials_calendar_notes', JSON.stringify(appState.calendarNotes));
      renderCalendar();
      console.log('Firebase Firestore calendar notes synchronized. Total:', updatedNotes.length);
    }, (err) => {
      console.error('Firebase Firestore calendar notes realtime sync error:', err);
    });
}

async function saveCalendarNote(date, text) {
  const existingIdx = appState.calendarNotes.findIndex(n => n.date === date);
  const updatedAt = new Date().toISOString();
  
  if (text.trim() === '') {
    if (existingIdx !== -1) {
      appState.calendarNotes.splice(existingIdx, 1);
    }
    if (firebaseAuth && firestoreDb && firebaseAuth.currentUser) {
      try {
        await firestoreDb.collection('calendar_notes').doc(date).delete();
      } catch (e) {
        console.error('Failed to delete calendar note in Firestore:', e);
      }
    }
  } else {
    const noteObj = {
      id: date,
      date,
      text: text.trim(),
      updatedAt
    };
    if (existingIdx !== -1) {
      appState.calendarNotes[existingIdx] = noteObj;
    } else {
      appState.calendarNotes.push(noteObj);
    }
    
    if (firebaseAuth && firestoreDb && firebaseAuth.currentUser) {
      try {
        await firestoreDb.collection('calendar_notes').doc(date).set({
          date,
          text: text.trim(),
          updatedAt,
          userId: firebaseAuth.currentUser.uid
        });
      } catch (e) {
        console.error('Failed to save calendar note in Firestore:', e);
      }
    }
  }
  
  localStorage.setItem('cbsocials_calendar_notes', JSON.stringify(appState.calendarNotes));
  renderCalendar();
}

function renderCalendar() {
  if (!elements.calendarGrid) return;
  
  const d = appState.currentCalendarDate;
  const year = d.getFullYear();
  const month = d.getMonth();
  
  // Sync view button active class
  document.querySelectorAll('.calendar-view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === appState.calendarViewMode);
  });
  
  // Update nav tooltips
  if (elements.btnCalendarPrev) {
    elements.btnCalendarPrev.title = appState.calendarViewMode === 'week' ? 'Previous Week' : 'Previous Month';
  }
  if (elements.btnCalendarNext) {
    elements.btnCalendarNext.title = appState.calendarViewMode === 'week' ? 'Next Week' : 'Next Month';
  }

  let daysToRender = [];
  const monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const monthShorts = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  if (appState.calendarViewMode === 'week') {
    // Week view: Find Monday of current calendar date week
    const current = new Date(d);
    const day = current.getDay();
    const diff = current.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(current.setDate(diff));
    
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);
      daysToRender.push({
        date: nextDay,
        isEmpty: false,
        dayNum: nextDay.getDate(),
        month: nextDay.getMonth(),
        year: nextDay.getFullYear()
      });
    }
    
    const mon = daysToRender[0].date;
    const sun = daysToRender[6].date;
    let headerText = '';
    if (mon.getFullYear() !== sun.getFullYear()) {
      headerText = `${mon.getDate()} ${monthShorts[mon.getMonth()]} ${mon.getFullYear()} - ${sun.getDate()} ${monthShorts[sun.getMonth()]} ${sun.getFullYear()}`;
    } else if (mon.getMonth() !== sun.getMonth()) {
      headerText = `${mon.getDate()} ${monthShorts[mon.getMonth()]} - ${sun.getDate()} ${monthShorts[sun.getMonth()]} ${mon.getFullYear()}`;
    } else {
      headerText = `${mon.getDate()} - ${sun.getDate()} ${monthShorts[mon.getMonth()]} ${mon.getFullYear()}`;
    }
    elements.calendarMonthTitle.textContent = headerText;
  } else {
    // Month view
    elements.calendarMonthTitle.textContent = `${monthNames[month]} ${year}`;
    const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    for (let i = 0; i < firstDayIndex; i++) {
      daysToRender.push({ isEmpty: true });
    }
    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      daysToRender.push({
        date: new Date(year, month, dayNum),
        isEmpty: false,
        dayNum,
        month,
        year
      });
    }
  }
  
  elements.calendarGrid.innerHTML = '';
  const today = new Date();
  
  daysToRender.forEach(dayInfo => {
    try {
      if (dayInfo.isEmpty) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        elements.calendarGrid.appendChild(emptyCell);
        return;
      }
      
      const { date, dayNum, month: m, year: y } = dayInfo;
      const dayCell = document.createElement('div');
      dayCell.className = 'calendar-day';
      
      const isToday = today.getFullYear() === y && today.getMonth() === m && today.getDate() === dayNum;
      if (isToday) {
        dayCell.classList.add('today');
      }
      
      const dateStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      const note = appState.calendarNotes.find(n => n.date === dateStr);
      
      let noteHtml = '';
      if (note && note.text) {
        dayCell.classList.add('calendar-day-has-note');
        noteHtml = `<div class="calendar-day-note-preview" title="${escapeHtml(note.text)}">${escapeHtml(note.text)}</div>`;
      }
      
      let dayPosts = appState.posts.filter(p => p && p.scheduledDate === dateStr);
      if (appState.calendarPlatformFilter && appState.calendarPlatformFilter !== 'all') {
        dayPosts = dayPosts.filter(p => p.platforms && p.platforms.includes(appState.calendarPlatformFilter));
      }
      // Sort chronologically from earliest to latest
      dayPosts.sort((a, b) => (a.scheduledTime || '').localeCompare(b.scheduledTime || ''));
      
      let postsHtml = dayPosts.map(p => {
        const platformsList = p.platforms || [];
        const badgesHtml = platformsList.map(pl => {
          let nameLetter = '';
          if (pl === 'twitter') nameLetter = 'X';
          else if (pl === 'bluesky') nameLetter = 'BS';
          else if (pl === 'instagram') nameLetter = 'IG';
          else if (pl === 'facebook') nameLetter = 'FB';
          else if (pl === 'tiktok') nameLetter = 'TT';
          else if (pl === 'youtube') nameLetter = 'YT';
          return `<span class="calendar-post-badge ${pl}">${nameLetter}</span>`;
        }).join('');
        
        const isPublished = p.status === 'Published';
        let statusClass = 'status-scheduled';
        if (isPublished) {
          statusClass = 'status-published';
        } else if (p.status === 'Draft') {
          statusClass = 'status-draft';
        }
        
        return `
          <div class="calendar-day-post-preview ${statusClass}" data-post-id="${p.id}" title="${escapeHtml(p.title)}: ${escapeHtml(p.text)}">
            <div class="calendar-post-header">
              <span class="post-time">${p.scheduledTime || ''}</span>
              <div class="calendar-post-actions">
                <button class="calendar-post-action-btn btn-copy-post" title="Copy Post Copy" data-id="${p.id}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 12px; height: 12px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
                <button class="calendar-post-action-btn btn-publish-post ${isPublished ? 'published' : ''}" title="${isPublished ? 'Mark as Scheduled' : 'Mark as Published'}" data-id="${p.id}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 12px; height: 12px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </button>
              </div>
            </div>
            <span class="post-title">${escapeHtml(p.title)}</span>
            <div class="post-badges">${badgesHtml}</div>
          </div>
        `;
      }).join('');
      
      dayCell.dataset.date = dateStr;
      dayCell.innerHTML = `
        <div class="calendar-day-header">
          <div class="calendar-day-num">${dayNum}</div>
          <button class="calendar-day-quick-add" title="Quick add upload note" data-date="${dateStr}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
        ${noteHtml}
        <div class="calendar-day-posts">
          ${postsHtml}
        </div>
      `;
      
      // Drag & drop event listeners for calendar day cell
      dayCell.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
      });
      dayCell.addEventListener('dragenter', (e) => {
        dayCell.classList.add('drag-over');
      });
      dayCell.addEventListener('dragleave', () => {
        dayCell.classList.remove('drag-over');
      });
      dayCell.addEventListener('drop', (e) => {
        dayCell.classList.remove('drag-over');
        try {
          const rawData = e.dataTransfer.getData('application/json');
          if (rawData) {
            const data = JSON.parse(rawData);
            if (data && data.storyId && data.cvIdx !== undefined) {
              const story = appState.stories.find(s => s.id === data.storyId);
              if (story) {
                const cv = story.copyVersions[data.cvIdx];
                const text = getCopyVersionText(cv);
                const taggedPlatforms = getCopyVersionPlatforms(cv);
                openPushToCalendarModal(story.id, data.cvIdx, text, taggedPlatforms, dateStr);
              }
            }
          }
        } catch (err) {
          console.error('Error handling copy drop:', err);
        }
      });

      dayCell.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.btn-copy-post');
        if (copyBtn) {
          e.stopPropagation();
          const postId = copyBtn.dataset.id;
          const post = appState.posts.find(p => p.id === postId);
          if (post && post.text) {
            navigator.clipboard.writeText(post.text).then(() => {
              showToast('Post copy copied to clipboard!');
            }).catch(err => {
              console.error('Failed to copy text: ', err);
              showToast('Failed to copy post copy.');
            });
          }
          return;
        }

        const publishBtn = e.target.closest('.btn-publish-post');
        if (publishBtn) {
          e.stopPropagation();
          const postId = publishBtn.dataset.id;
          const post = appState.posts.find(p => p.id === postId);
          if (post) {
            post.status = post.status === 'Published' ? 'Scheduled' : 'Published';
            saveState();
            renderDrafts();
            renderCalendar();
            renderFeedSimulator();
            showToast(`Post marked as ${post.status.toLowerCase()}.`);
          }
          return;
        }

        const quickAddBtn = e.target.closest('.calendar-day-quick-add');
        if (quickAddBtn) {
          e.stopPropagation();
          openCalendarNoteModal(dateStr, note ? note.text : '');
          return;
        }
        const postCard = e.target.closest('.calendar-day-post-preview');
        if (postCard) {
          e.stopPropagation();
          openEditPostModal(postCard.dataset.postId);
          return;
        }
        openCalendarNoteModal(dateStr, note ? note.text : '');
      });
      
      elements.calendarGrid.appendChild(dayCell);
    } catch (err) {
      console.error('Error rendering calendar day:', err, dayInfo);
    }
  });
}

function openPushToCalendarModal(storyId, cvIdx, text, taggedPlatforms, targetDate = null) {
  elements.pushCalendarStoryId.value = storyId;
  elements.pushCalendarCvIdx.value = cvIdx;
  elements.pushCalendarCopyPreview.textContent = text;
  
  // Save parameters to modal state for redraws
  elements.pushCalendarModal.dataset.storyId = storyId;
  elements.pushCalendarModal.dataset.cvIdx = cvIdx;
  elements.pushCalendarModal.dataset.targetDate = targetDate || '';
  
  const selector = elements.pushPlatformsSelector;
  selector.innerHTML = '';
  
  const platformsList = ['bluesky', 'facebook', 'instagram', 'tiktok', 'twitter', 'youtube'];
  
  platformsList.forEach(plat => {
    const isChecked = taggedPlatforms && taggedPlatforms.includes(plat);
    const wrapper = document.createElement('label');
    let themeClass = `${plat}-theme`;
    if (plat === 'twitter') themeClass = 'x-theme';
    wrapper.className = `platform-checkbox-wrapper ${themeClass}`;
    
    let nameLabel = '';
    if (plat === 'twitter') nameLabel = 'X';
    else if (plat === 'bluesky') nameLabel = 'BlueSky';
    else if (plat === 'instagram') nameLabel = 'Instagram';
    else if (plat === 'facebook') nameLabel = 'Facebook';
    else if (plat === 'tiktok') nameLabel = 'TikTok';
    else if (plat === 'youtube') nameLabel = 'YouTube';
    
    wrapper.innerHTML = `
      <input type="checkbox" name="push-platforms" value="${plat}" ${isChecked ? 'checked' : ''}>
      <span class="checkbox-custom"></span>
      <span class="platform-name" style="font-size: 0.85rem;">${nameLabel}</span>
    `;
    
    wrapper.querySelector('input').addEventListener('change', () => {
      renderPushCalendarInputs();
    });
    
    selector.appendChild(wrapper);
  });
  
  renderPushCalendarInputs();
  elements.pushCalendarModal.style.display = 'flex';
}

function renderPushCalendarInputs() {
  const container = elements.pushCalendarPlatformsContainer;
  container.innerHTML = '';
  
  const selectedPlatforms = [];
  document.querySelectorAll('input[name="push-platforms"]:checked').forEach(cb => {
    selectedPlatforms.push(cb.value);
  });
  
  const targetDate = elements.pushCalendarModal.dataset.targetDate || new Date().toISOString().split('T')[0];
  const storyId = elements.pushCalendarModal.dataset.storyId;
  const story = appState.stories.find(s => s.id === storyId);
  
  let defaultDate = targetDate;
  if (!elements.pushCalendarModal.dataset.targetDate && story && story.txDate && story.txDate !== 'TBC') {
    const parsedTime = parseTxDate(story.txDate);
    if (parsedTime > 0) {
      defaultDate = new Date(parsedTime).toISOString().split('T')[0];
    }
  }

  if (selectedPlatforms.length === 0) {
    container.innerHTML = `
      <div style="font-size:0.75rem; color:var(--color-warning); padding:0.5rem; border:1px dashed var(--color-warning); border-radius:4px; text-align:center; width:100%;">
        No platforms selected. Please check at least one platform above to configure schedule times.
      </div>
    `;
    elements.btnPushCalendarSave.disabled = true;
  } else {
    elements.btnPushCalendarSave.disabled = false;
    
    selectedPlatforms.forEach(plat => {
      const config = PLATFORMS_CONFIG[plat];
      const platRow = document.createElement('div');
      platRow.className = 'push-calendar-row';
      platRow.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        background: rgba(255,255,255,0.02);
        padding: 0.5rem 0.65rem;
        border-radius: 6px;
        border: 1px solid var(--border-glass);
        margin-bottom: 0.4rem;
        width: 100%;
      `;
      
      let nameLetter = '';
      if (plat === 'twitter') nameLetter = 'X';
      else if (plat === 'bluesky') nameLetter = 'BS';
      else if (plat === 'instagram') nameLetter = 'IG';
      else if (plat === 'facebook') nameLetter = 'FB';
      else if (plat === 'tiktok') nameLetter = 'TT';
      else if (plat === 'youtube') nameLetter = 'YT';
      
      platRow.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%; flex-wrap:wrap; gap:0.5rem;">
          <span class="push-calendar-platform-badge" style="background: ${config.color}; font-size:0.8rem; padding:0.2rem 0.5rem; border-radius:4px; color:#fff; font-weight:700;">${nameLetter} (${config.name})</span>
          <div class="push-calendar-inputs" style="display:flex; gap:0.4rem; align-items:center;">
            <input type="date" id="push-date-${plat}" name="push-date-${plat}" value="${defaultDate}" required style="font-size:0.85rem; padding:0.25rem 0.45rem; border-radius:4px; background:rgba(0,0,0,0.25); border:1px solid var(--border-glass); color:#fff;">
            <input type="time" id="push-time-${plat}" name="push-time-${plat}" value="09:00" required style="font-size:0.85rem; padding:0.25rem 0.45rem; border-radius:4px; background:rgba(0,0,0,0.25); border:1px solid var(--border-glass); color:#fff;">
          </div>
        </div>
        <div class="push-optimum-times" id="push-optimum-${plat}" style="display:flex; flex-wrap:wrap; gap:0.25rem; align-items:center; padding-left:0.1rem; margin-top:0.15rem;">
          <!-- Populated dynamically -->
        </div>
      `;
      
      container.appendChild(platRow);
      
      // Update optimum times for the default date
      updatePushOptimumTimes(plat, defaultDate);
      
      // Watch date input changes to update optimum times
      platRow.querySelector(`input[type="date"]`).addEventListener('change', (e) => {
        updatePushOptimumTimes(plat, e.target.value);
      });
    });
  }
}

function closePushToCalendarModal() {
  elements.pushCalendarModal.style.display = 'none';
}

function openCalendarNoteModal(dateStr, currentText) {
  const parts = dateStr.split('-');
  const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const humanDate = `${parseInt(parts[2], 10)} ${months[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
  
  elements.calendarNoteModalTitle.textContent = `Upload Notes for ${humanDate}`;
  elements.calendarNoteDate.value = dateStr;
  elements.calendarNoteText.value = currentText;
  
  elements.calendarNoteModal.style.display = 'flex';
  elements.calendarNoteText.focus();
}

function closeCalendarNoteModal() {
  elements.calendarNoteModal.style.display = 'none';
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
      elements.storyFormTxdate.value = formatStandardToInputDate(story.txDate);
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
      const affectedIds = [];
      stories.forEach(s => {
        const exists = appState.stories.find(existing =>
          existing.title === s.title && existing.txDate === s.txDate
        );
        if (!exists) {
          appState.stories.push(s);
          added++;
          affectedIds.push(s.id);
        } else {
          // Update copy versions & legal note (preserving platform assignments where text matches)
          const oldVersions = exists.copyVersions || [];
          exists.copyVersions = s.copyVersions.map(newCvText => {
            const match = oldVersions.find(oldCv => getCopyVersionText(oldCv) === newCvText);
            return match ? match : newCvText;
          });
          exists.legalNote = s.legalNote;
          exists.updatedAt = s.updatedAt || new Date().toISOString();
          affectedIds.push(exists.id);
        }
      });
      saveStories(affectedIds);
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
      currentDate = normalizeDateString(p.text);
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

// Firebase Authentication, Realtime Synchronisation & DB Sync
let realtimeListener = null;

async function initAuth() {
  initFirebase();
  
  if (!firebaseAuth || !firestoreDb) {
    // Local/Offline fallback mode
    elements.authOverlay.style.display = 'none';
    elements.btnLogout.style.display = 'none';
    
    // Set UI indicators to local mode
    if (elements.dbStatusDot) elements.dbStatusDot.className = 'db-status-dot';
    if (elements.dbStatusText) elements.dbStatusText.textContent = 'Local Mode';
    if (elements.btnDbStatus) elements.btnDbStatus.title = 'Database Connection Status (Local Mode)';
    
    if (realtimeListener) {
      realtimeListener();
      realtimeListener = null;
    }
    
    // Restore stories from local storage
    appState.stories = getMergedStories();
    renderStoriesHub();
    return;
  }
  
  // Set up Firebase Authentication state changes listener
  firebaseAuth.onAuthStateChanged(async (user) => {
    if (!user) {
      // User is not logged in, show auth form overlay
      elements.authOverlay.style.display = 'flex';
      elements.btnLogout.style.display = 'none';
      
      if (elements.dbStatusDot) elements.dbStatusDot.className = 'db-status-dot offline';
      if (elements.dbStatusText) elements.dbStatusText.textContent = 'Offline (Click to login)';
      if (elements.btnDbStatus) elements.btnDbStatus.title = 'Database Connection Offline. Log in to sync.';
      
      if (realtimeListener) {
        realtimeListener();
        realtimeListener = null;
      }
      if (calendarRealtimeListener) {
        calendarRealtimeListener();
        calendarRealtimeListener = null;
      }
      if (postsRealtimeListener) {
        postsRealtimeListener();
        postsRealtimeListener = null;
      }
      if (settingsRealtimeListener) {
        settingsRealtimeListener();
        settingsRealtimeListener = null;
      }
      if (trackedNewsRealtimeListener) {
        trackedNewsRealtimeListener();
        trackedNewsRealtimeListener = null;
      }
      if (copyLibraryRealtimeListener) {
        copyLibraryRealtimeListener();
        copyLibraryRealtimeListener = null;
      }
    } else {
      // User is logged in, hide auth overlay and set status to connected
      elements.authOverlay.style.display = 'none';
      elements.btnLogout.style.display = 'inline-block';
      
      if (elements.dbStatusDot) elements.dbStatusDot.className = 'db-status-dot connected';
      if (elements.dbStatusText) elements.dbStatusText.textContent = 'Connected';
      if (elements.btnDbStatus) elements.btnDbStatus.title = `Connected to Firebase as ${user.email}`;
      
      // Listen to realtime updates
      setupRealtimeSubscription();
      setupRealtimeCalendarNotesSubscription();
      setupRealtimePostsSubscription();
      setupRealtimeSettingsSubscription();
      setupRealtimeTrackedNewsSubscription();
      setupRealtimeCopyLibrarySubscription();
    }
  });
}

async function deleteStoryFromDb(storyId) {
  if (!firestoreDb) return;
  try {
    await firestoreDb.collection('stories').doc(storyId).delete();
    console.log('Story deleted from Firebase:', storyId);
  } catch (err) {
    console.error('Error deleting story from Firebase:', err);
    showToast('Failed to delete story from database.');
  }
}

async function restoreStoriesFromBackup() {
  try {
    let stored = localStorage.getItem('cbsocials_stories');
    let stories = [];
    try {
      stories = stored ? JSON.parse(stored) : [];
    } catch (e) {
      stories = [];
    }
    
    if (stories.length === 0) {
      console.log('Local storage empty, fetching parsed_stories.json backup from server...');
      const response = await fetch('parsed_stories.json');
      if (response.ok) {
        const parsed = await response.json();
        if (parsed && parsed.length > 0) {
          // Format correctly to match appState.stories expectations
          stories = parsed.map((s, idx) => ({
            id: s.id || `story-backup-${idx}-${Date.now()}`,
            txDate: s.txDate ? normalizeDateString(s.txDate) : 'TBC',
            title: s.title || '',
            legalNote: s.legalNote || '',
            copyVersions: s.copyVersions || [],
            updatedAt: s.updatedAt || new Date().toISOString()
          }));
        }
      }
    }
    
    if (stories.length === 0) {
      stories = SEED_STORIES;
    }
    
    appState.stories = stories;
    localStorage.setItem('cbsocials_stories', JSON.stringify(appState.stories));
    renderStoriesHub();
    
    // Sync to Firestore using the batch save function
    await saveStories();
    showToast('Stories restored from local backup successfully!');
  } catch (err) {
    console.error('Failed to restore stories from backup:', err);
  }
}

let isFirstLoad = true;

function setupRealtimeSubscription() {
  if (!firestoreDb || realtimeListener) return;
  
  realtimeListener = firestoreDb
    .collection('stories')
    .orderBy('updatedAt', 'desc')
    .onSnapshot((snapshot) => {
      const updatedStories = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        updatedStories.push({
          id: data.id,
          txDate: data.txDate ? normalizeDateString(data.txDate) : 'TBC',
          title: data.title,
          legalNote: data.legalNote,
          copyVersions: data.copyVersions,
          updatedAt: data.updatedAt
        });
      });
      
      // Filter out duplicate placeholder versions from Firestore snapshot
      const cleanedSnapshot = cleanDuplicateStories(updatedStories);
      
      // If duplicates were found and filtered out, delete them from Firestore
      if (cleanedSnapshot.length < updatedStories.length) {
        console.log('Detected duplicate placeholder stories in Firestore snapshot. Cleaning cloud...');
        const idsToKeep = new Set(cleanedSnapshot.map(s => s.id));
        updatedStories.forEach(s => {
          if (!idsToKeep.has(s.id)) {
            firestoreDb.collection('stories').doc(s.id).delete()
              .then(() => console.log(`Deleted duplicate seed story ${s.title} (${s.id}) from Firestore`))
              .catch(e => console.error('Error deleting duplicate from Firestore:', e));
          }
        });
      }
      
      if (appState.isDirty) {
        console.log('Local changes are unsynced (dirty state). Skipping cloud override and uploading local state...');
        saveStories();
        return;
      }
      
      const localStoriesCleaned = cleanDuplicateStories(appState.stories);
      if (cleanedSnapshot.length > 0) {
        if (cleanedSnapshot.length >= localStoriesCleaned.length) {
          // Override local stories list with Cloud Database snapshot
          appState.stories = cleanedSnapshot;
          localStorage.setItem('cbsocials_stories', JSON.stringify(appState.stories));
          renderStoriesHub();
          isFirstLoad = false;
          console.log('Firebase Firestore snapshot synchronized and cleaned. Total:', cleanedSnapshot.length);
        } else {
          // Local state has more stories than the cloud (likely a pending local upload).
          // Push local stories to the cloud to ensure all users receive the latest set.
          console.log('Local client has more stories than Cloud. Uploading local copy to Firestore...');
          saveStories();
        }
      } else if (isFirstLoad) {
        // First load and cloud database is completely empty. Restore from local backup.
        isFirstLoad = false;
        console.log('Cloud database is empty on first load. Restoring from local backup...');
        restoreStoriesFromBackup();
      } else {
        // User manually deleted all stories
        appState.stories = [];
        localStorage.setItem('cbsocials_stories', JSON.stringify(appState.stories));
        renderStoriesHub();
      }
    }, (err) => {
      console.error('Firebase Firestore realtime sync error:', err);
    });
}

// 9. Startup Initialization
function init() {
  // Clean, normalize and remove duplicates from stored RSS feeds
  if (appState.rssFeeds && Array.isArray(appState.rssFeeds)) {
    appState.rssFeeds = Array.from(new Set(appState.rssFeeds.map(normalizeRssUrl)));
    localStorage.setItem('cb_rss_feeds', JSON.stringify(appState.rssFeeds));
  }

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
  initAuth();
  renderSuggestions();
  renderDrafts();
  renderCopyLibrary();
  renderStoriesHub();
  renderCalendar();
  updateStats();
  
  // Initialize News Monitor Background Simulation
  initNewsSimulation();
  if (appState.newsFeedSource === 'live-rss') {
    fetchLiveRSSFeeds();
  }

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
