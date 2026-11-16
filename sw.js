// Eşle: yüklenebilir uygulama (PWA) için en küçük servis çalışanı; önbellek tutmaz, her zaman ağdan okur.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
