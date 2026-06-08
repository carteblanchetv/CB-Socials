const CACHE_NAME = 'cb-socials-cache-v9';

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
  
  // Only intercept GET requests for local assets (HTML, CSS, JS) to bypass CDN/Browser cache
  if (
    request.method === 'GET' && 
    request.url.startsWith(self.location.origin) &&
    !request.url.includes('sw.js')
  ) {
    const url = new URL(request.url);
    // Append a cache-busting timestamp to the network fetch request only
    url.searchParams.set('_cb_nocache', Date.now().toString());
    
    event.respondWith(
      fetch(url.toString(), {
        cache: 'no-store'
      }).catch(() => {
        // Offline fallback: try fetching the original cached/normal request
        return fetch(request);
      })
    );
  }
});
