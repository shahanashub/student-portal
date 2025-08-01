// Simple service worker for offline/app mode
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('scientia-portal-v1').then(function(cache) {
    return cache.addAll([
      './StudentPortal.html',
      './manifest.json',
      'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap',
      'https://img.icons8.com/fluency/192/000000/school-building.png',
      'https://img.icons8.com/fluency/512/000000/school-building.png'
    ]);
  }));
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
