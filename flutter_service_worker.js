'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "8ba3a94898c56ca273c60a13431e63e9",
"/": "8ba3a94898c56ca273c60a13431e63e9",
"main.dart.js": "520bbce36b828204b7a25248e9a21940",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "5293a727884a8e96a8d34c5971124c07",
"icons/favicon.ico": "bcf230947d949259f5755358341d0278",
"icons/android-chrome-192x192.png": "945849ed3a2a278adfbab557b972180a",
"icons/apple-touch-icon.png": "8c12650d8dbc2a972d53e453f7c44ee1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/android-chrome-512x512.png": "c7b50bffce6d52cae19bb96aeb02a367",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "f392b722d5379975413b41dc5e3fe6a9",
"manifest.json": "cea477422596aca80ace11868a43e579",
"assets/AssetManifest.json": "2c94780491c947774633ccb992217d11",
"assets/NOTICES": "db07b23842163e630c7ce7c4dc18d40a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/images/spotify.png": "480c112d259d9f281fc18410f142bed4",
"assets/lib/images/ignm.png": "bfdea8f14d661ccddfab622fff2b4b4a",
"assets/lib/images/saranda.png": "0fe332ef60189047ae1c6cc5341cb54f",
"assets/lib/images/python.png": "7494e83354e2662240d06630cc31f08d",
"assets/lib/images/flutter.png": "04a3c8770fa0fd9f48622dc659d03c8b",
"assets/lib/images/cpp.png": "e6eedf0e0986a9fba637819fa3e5ecaa",
"assets/lib/images/vsco.png": "c513dddd805456265e1ef83d921931c9",
"assets/lib/images/tetriss.png": "b3c0b7cd5416ee8be475bed49e21d9c6",
"assets/lib/images/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/lib/images/mainpic.png": "5f13e66294142c3ab0236be409b8ac83",
"assets/lib/images/android.png": "ac56bda8374ebe08cfadd85d70f865c4",
"assets/lib/images/gmail.png": "96d919bd5ba9cc49142a81edaba27070",
"assets/lib/images/ig.png": "4845a8b40f8c6a1f906bd63067ad54d4",
"assets/lib/images/ps.jpg": "8de917f3524fcfc5233606e6de7d3b1d",
"assets/lib/images/premierepro.jpg": "d848bac1208c26207e363dee8012da08",
"assets/lib/images/linkedin.png": "099f1abb06c418f9d6ba200408d0930d",
"assets/lib/images/ign2.png": "9101ee2aadbea7f0e1dd447cb4ac899a",
"assets/lib/images/wc.png": "8d372683cbe4c707fe9080799f6497b5",
"assets/lib/images/ign1.png": "9aad3be735ae7144ed519311d9e01b9c",
"assets/lib/images/nyuadpool.jpg": "beee44d5666ffad6f2b64f8e03959e80",
"assets/lib/images/cv.png": "6301b9c925f1a13c810528c91d7a5091",
"assets/lib/images/ign.png": "846a9a2a723e9dbbb13c275c98ea60a4",
"assets/lib/images/mario.png": "09411c125d7c56110b83263bb4228352",
"assets/lib/images/wcw.png": "a3e3a4ee1d06c91bcde6bc0b888cab99",
"assets/lib/images/palms.png": "8c37835187e16cbfbd800ca745e377ca",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
