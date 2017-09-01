const OFFLINE_URL = 'offline.html';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('offline-page').then(function(cache) {
      return cache.add(OFFLINE_URL);
    })
  )
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(
      error => caches.match(OFFLINE_URL)
    )
  );
});
