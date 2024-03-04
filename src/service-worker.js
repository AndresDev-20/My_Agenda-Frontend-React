importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.2.1/workbox-sw.js');


const CACHE_NAME = 'miapp-cache';
const dynamicCacheName = 'miapp-dynamic-cache';
const vapidPublicKey = 'tu-clave-publica-vapid'; 

const staticAssets = [
  '/',
  '/index.html',
  '/otras-rutas',
  '/manifest.json',
  // Agrega aquí todos los archivos estáticos que quieres cachear
];

const wb = new WorkboxSW();

// Estrategia para cachear archivos estáticos
wb.precache(staticAssets);

// Estrategia para cachear y actualizar dinámicamente otros recursos
wb.router.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  wb.strategies.cacheFirst({
    cacheName: dynamicCacheName,
    plugins: [
      new wb.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache durante 30 días
      }),
    ],
  })
);

// Estrategia para cachear y actualizar dinámicamente las solicitudes a la API
wb.router.registerRoute(
  '/api/',
  wb.strategies.networkFirst({
    cacheName: dynamicCacheName,
    plugins: [
      new wb.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 5 * 60, // Cache durante 5 minutos
      }),
    ],
  })
);

// Estrategia para cachear y actualizar dinámicamente las páginas HTML
wb.router.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  wb.strategies.networkFirst({
    cacheName: dynamicCacheName,
    plugins: [
      new wb.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 5 * 60, // Cache durante 5 minutos
      }),
    ],
  })
);

// Manejo de la actualización del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    wb.update()
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    wb.clearCaches()
      .then(() => self.clients.claim())
  );
});
