const CACHE_NAME = 'dsu-lost-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// 1. 서비스 워커 설치 및 파일 캐싱
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. 네트워크 요청 가로채기 (Network First 전략)
// 항상 최신 데이터를 서버에서 가져오되, 오프라인일 때만 캐시를 보여줍니다.
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// 3. 오래된 캐시 삭제
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});