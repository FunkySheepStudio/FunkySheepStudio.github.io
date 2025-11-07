const CACHE_VERSION = 0;
const CURRENT_CACHE = `main-${CACHE_VERSION}`;

const cacheFiles = [
  "/inventag/",
  "/inventag/favicon.png",
  "/inventag/sw.js",
  "/inventag/index.html",
  "/inventag/libs/vuetify.min.css",
  "/inventag/libs/materialdesignicons.min.css",
  "/inventag/libs/vue.global.prod.min.js",
  "/inventag/libs/vuetify.min.js",
  "/inventag/libs/vue3-sfc-loader.js",
  "/inventag/libs/vue-router.global.js",
  "/inventag/libs/html5-qrcode.js",
  "/inventag/manifest.json",
  "/inventag/pages/login.vue",
  "/inventag/pages/result.vue",
  "/inventag/pages/scan.vue",
  "/inventag/molecules/delete.vue",
  "/inventag/molecules/ui.vue",
  "/inventag/modules/store.js",
  "/inventag/layouts/index.vue",
  "/inventag/imgs/icon-512.png",
  "/inventag/imgs/scan.png"
]
// on activation we clean up the previously registered service workers
self.addEventListener('activate', evt =>
  evt.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CURRENT_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  )
);

// on install we download the routes we want to cache for offline
self.addEventListener('install', evt =>
  evt.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll(cacheFiles);
    })
  )
);

// fetch the resource from the network
const fromNetwork = (request, timeout) =>
  new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response => {
      clearTimeout(timeoutId);
      fulfill(response);
      const url = new URL(request.url);
      const rel = url.toString().substring(url.origin.length)

      if (cacheFiles.includes(rel))
      {
        update(request);
      }
    }, reject);
  });

// fetch the resource from the browser cache
const fromCache = (request, cacheName) =>
{
  if (cacheName === undefined)
  {
    cacheName = CURRENT_CACHE
  }

  return caches
    .open(cacheName)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching || cache.match('/offline/'))
    );
}

// cache the current page to make it available for offline
const update = request =>
  caches
  .open(CURRENT_CACHE)
  .then(cache =>
    fetch(request).then(response => cache.put(request, response)).catch(() => {})
  );

self.addEventListener('fetch', async evt => {
  /*if (evt.request.method === "POST") {
    return evt.respondWith(
      (async () => {
        const formData = await evt.request.formData();
        let messageContent = {}
        messageContent.title = formData.get('title')
        messageContent.text = formData.get('text')
        messageContent.urls = []
        if (formData.get('url') !== null)
        {
          messageContent.urls.push(formData.get('url'))
        }

        if (messageContent.text !== null)
        {
          let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
          let newUrls = messageContent.text.match(urlRegex)
          messageContent.urls = messageContent.urls.concat(newUrls)
        }
        
        messageContent.medias = []
        
        const medias = formData.getAll('medias');
        const openRequest = indexedDB.open('db', 1)

        await new Promise(resolve => {
          openRequest.onsuccess = function(e) {
            let db = e.target.result
            const tx = db.transaction('shared_target', 'readwrite');
            const store = tx.objectStore('shared_target');
            store.clear()
            store.add(messageContent);
            return resolve()
          }
        })

        await caches.delete("medias")
        const mediaCache = await caches.open("medias");
        for (const image of medias) {
          await mediaCache.put(
            "medias/" + image.name,
            new Response(
              image,
              {
                headers: {
                  'content-length': image.size,
                  'content-type': image.type,
                },
              }
            )
          );
        }
        return Response.redirect('/create', 303);
      })(),
    );
  }

  if (evt.request.url.split('/')[3] === "medias")
  {
    return evt.respondWith(
      fromCache(evt.request, 'medias')
    );
  }*/

  evt.respondWith(
    fromNetwork(evt.request, 500).catch(() => fromCache(evt.request))
  );
});