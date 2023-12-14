import { manifest, version } from '@parcel/service-worker';

async function install() {
  const cache = await caches.open(version);
  await cache.addAll(manifest);
}

self.addEventListener('install', event => {
  event.waitUntil(install());
});

async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(key => {
      if (key !== version) {
        return caches.delete(key);
      }
      return null;
    })
  );
}

self.addEventListener('activate', event => {
  event.waitUntil(activate());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
