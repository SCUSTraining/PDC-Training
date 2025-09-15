---
const CACHE_NAME = 'fr-gamehub-v6';
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
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)))
);
self.addEventListener('activate', e =>
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE_NAME?caches.delete(k):null))))
);
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CACHE_NAME).then(c => c.put(e.request, copy)); return res;
    }).catch(() => caches.match('{{ "/index.html" | relative_url }}')))
  );
});
