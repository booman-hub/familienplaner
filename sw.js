// Minimaler Service Worker – nur damit Chrome „App installieren" anbietet.
// Er speichert nichts: die App selbst kommt immer frisch von Google.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* Netz wie immer */ });
