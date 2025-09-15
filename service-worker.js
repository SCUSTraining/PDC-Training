---
---
const CACHE_NAME = 'fr-gamehub-v8';
const ASSETS = [
  '{{ "/" | relative_url }}',
  '{{ "/index.html" | relative_url }}',
  '{{ "/manifest.webmanifest" | relative_url }}',
  '{{ "/icons/icon-192.png" | relative_url }}',
  '{{ "/icons/icon-512.png" | relative_url }}',
  '{{ "/games/Fault_Response_SOLO_Trainer_v2.html" | relative_url }}',
  '{{ "/games/Fault_Response_SOLO_Trainer_30Q_Badges.html" | relative_url }}',
  '{{ "/games/Fault_Response_Jeopardy_Interactive.html" | relative_url }}'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached ||
      fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('{{ "/index.html" | relative_url }}'))
    )
  );
});
