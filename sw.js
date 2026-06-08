const CACHE_NAME = 'future-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// 安裝時，把網頁和設定檔存進手機快取
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 打開 APP 時，優先從手機快取抓取資料（達到秒開、離線可用）
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
