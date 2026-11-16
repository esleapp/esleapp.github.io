// Eşle: yüklenebilir uygulama (PWA) servis çalışanı; önbellek tutmaz. Web bildirimlerini gösterir.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

self.addEventListener('push', (e) => {
  let v = {};
  try { v = e.data ? e.data.json() : {}; } catch (_) { /* boş */ }
  e.waitUntil(self.registration.showNotification(v.baslik || 'Eşle', {
    body: v.govde || '', icon: '/icon-192.png', badge: '/icon-192.png', tag: 'esle',
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((liste) => {
    for (const c of liste) { if ('focus' in c) return c.focus(); }
    return self.clients.openWindow('/');
  }));
});
