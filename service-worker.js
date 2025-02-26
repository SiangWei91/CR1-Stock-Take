const CACHE_NAME = 'CR1-Stock-Take-cache-v2.7';
const urlsToCache = [
    '/CR1-Stock-Take/',
    '/CR1-Stock-Take/index.html',
    '/CR1-Stock-Take/app.js',
    '/CR1-Stock-Take/manifest.json',
    '/CR1-Stock-Take/icons/CR1icon-192x192.png',
    '/CR1-Stock-Take/icons/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(networkResponse) {
          // Clone response before caching
          const responseToCache = networkResponse.clone();
          cache.put(event.request, responseToCache);
          return networkResponse;
        });
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
