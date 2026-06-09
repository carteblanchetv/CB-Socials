const CACHE_NAME = 'cb-socials-cache-v10';

self.addEventListener('install', (event) => {
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim control of any open clients immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Do NOT intercept the main HTML page, styles, or application scripts
  // This ensures browser-level refreshes/hard-refreshes hit the network/CDN directly.
  if (
    url.pathname === '/' ||
    url.pathname.endsWith('index.html') ||
    url.pathname.endsWith('style.css') ||
    url.pathname.endsWith('app.js') ||
    url.pathname.endsWith('sw.js')
  ) {
    return; // Let the browser handle it natively
  }

  // Intercept other local assets if needed
  if (
    request.method === 'GET' && 
    request.url.startsWith(self.location.origin)
  ) {
    url.searchParams.set('_cb_nocache', Date.now().toString());
    event.respondWith(
      fetch(url.toString(), {
        cache: 'no-store'
      }).catch(() => {
        return fetch(request);
      })
    );
  }
});
