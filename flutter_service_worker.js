'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "902631ac75e23d2016c859d71667c218",
"/": "902631ac75e23d2016c859d71667c218",
"main.dart.js": "a81a0c0e829f51c91d9326314904941b",
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
".git/config": "e9463796138570eeb7457046eab57c37",
".git/objects/59/4bee3a3cfc294d80a086d031ffca364edcb1c2": "cab09aef44987e288c7c0cb96715e357",
".git/objects/92/1ec81fe4029205478564bc5d4b168193f1fdeb": "135a5842480983910d0cc1afca305420",
".git/objects/66/937848893adce48f8e3eec1d9556b9c7096549": "af6bb000ff72ef31130a8fdf04f33da2",
".git/objects/3e/b46f45ad69ce4957d12a8f43cefef35b575c3b": "f5e3e137262c6832e78c33cc4df796c5",
".git/objects/3e/26a1ecf362ee729cc22eb965efe1b80fff4f32": "fcad3377aa38af741fbde2d374627195",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/9c/92b651d0e827ba4a9f3bed9c25776f0118d943": "522688b0b40d39e9342779709827ba8d",
".git/objects/b3/a666d503a2ee4cfc44f5f98dc68dee9244f391": "ba0850165f784a141b2ef780ecbf1e15",
".git/objects/da/98ce907c384fcac16ac796d0c3aa5c5e697086": "df5228e113714cfdede80f737ab82811",
".git/objects/d1/e4bcf82bdec60deb69a687d7c8140a4d1e06c3": "2316be0cf8198143439fc384c50e83a1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/a08fb3964476a6d838f60f652157f44694e9ee": "3952669fbdf090f19ad6e4a216c5f936",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/433ced40ea42cb3f8e9fe3ed45e3e6b2553b66": "cf0d44798baebf310a9769e8a73a0f46",
".git/objects/f4/c3d51dfcc508b4f98fed28ddf158fb94585b03": "ab2c2220980a86e5e9e53444e4948d92",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/84cf15a8be1cfec54d14f823410fe1d44d7123": "e5828e4d205faf79bb9ee7fff2bc7437",
".git/objects/ee/989c1ba14c41066c0e68eb2252d2409f86eec7": "8c8a4ed47854b98c6c162a404a8a0561",
".git/objects/fc/a2703dad9328beeddc2ec3c96089029bc861ca": "7470ebe50c77fa7bba3e12592a50b512",
".git/objects/fd/35d787aeae1c99874916b84a608631e7f4e98c": "e029739616710d18d91ec03b252acf4c",
".git/objects/f2/7a1b0aee6f390cf3162c4511368210bfa2a711": "f4ffefd650afb9c6233a4e5474a25501",
".git/objects/e3/2979251b9094245a6ec515e099ea7c43ee1c48": "89902aaf8139b3d73b491afa7ccf6212",
".git/objects/20/7da1434c7756b75c8e10d48d910c7e3b1a7cab": "b7cea9c68c9980c8a9f093ad659fb068",
".git/objects/7c/a0459472f8611fcb97c4afbc9c08960d431930": "cbc81124c7b37ab02c0dcd3d1aaeb5d0",
".git/objects/42/4f158e325b49bb79ca9c8d0875c7f90a92a7dd": "87ebcbc4fde15f5bae051422250b8e8f",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/1f/27515fd6d524445be8026d322da3729354e7c0": "a1d18233e9ce7811ecabea9921c8bbee",
".git/objects/8f/fa6b12712be57d973d679b809bc035500d10ee": "8640887928f6267a2a4ac74eb2502d0d",
".git/objects/8a/394b20bd315e03cc2f7f305c3b2bbea29872f5": "8642c98a4cb3028bd86cf484536639bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/6f39fd33f9d8710b983e0b6df75e5759271273": "8750bde417cb23ab459cb3a650f77131",
".git/objects/4d/0f267acf110d5ca8f0413bf6472064716f148f": "468da32294a2b566de8520be4b2c98be",
".git/objects/2a/2c6c7d2d6a1066a69844852a52dd46c9ca1c2e": "18e9bb4030b89820d259146b607cad0f",
".git/objects/43/9154b50dbe04c67b9f25de281b85369b7c00fc": "42b1de31704b57a396956c5fa44bb5e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/ad4dfa1f1d857b9cf29351447231741f8305f9": "53b2ef5e7e7aaf993c8fc9c1fb272376",
".git/objects/98/954a4354ed257055d271ff366137606a3f9aef": "8e681302b7da0f1a3454952cb13054b0",
".git/objects/53/0a0596c511e018c7d2dd5b83fef14d82996618": "25a530404d2e22c71bb1a5b2f04685fd",
".git/objects/53/847dbd8b115090f79f1d03425ac9e65e7f6b9a": "1e15490265dd337ca0bb54bad101aba1",
".git/objects/39/0a8a366113e56f21cb23ccc974e572fab9eca6": "d9f03a11c2643312ae9a9d459747539a",
".git/objects/63/f7897f18771baa83134fe76f04cd7b1a276979": "7c849ab0211bc9a41e0021cbc8f31654",
".git/objects/64/6e9f0432685142522b3a52bd1f1f7bc3811eb5": "ea0199f7783caa871ed8d41872e342e4",
".git/objects/bf/14ffddf8df74d17b8acb5713affaf1d476e3a4": "d73ed6b67bc924c97945c33af28e26eb",
".git/objects/ba/be074f86df9799508b8557bc61f448a7815ffe": "451e0518a555e4ef2dd703409e8d1b24",
".git/objects/ba/09b8fd806d4a67e399f9e16681c7ac7edccdb5": "c5bd1362de3ac20dc2eff2300b60fc20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/297fa4dde718d759afb6315d5d2860748b955d": "96f7259c87ef416f891d7cef92600372",
".git/objects/a8/213c05f95b2ed24b3fbb2df71c317fa6b1c004": "013d4554fb603690c695103bd3417d2f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/af09465d003ba58ffde783fe85ee3384cd4683": "46e0691369125a1310d51acd574660bd",
".git/objects/ea/2e4d7c120a45e1a64bb7a72c707745600f6e63": "2a7641852d968b20c4cd281aed6117f6",
".git/objects/cd/3ae56d78c9fd77e16a9ddc5ba98755f2d87143": "4b05c077186d871dfc96518f6391e75f",
".git/objects/f0/354cf6887cbd8d4dcb47a77063ef66b7b0c377": "d658895aa1aef633e94c45c753c8e31e",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/f6/b15c375f1939de709eb6712b191c7687132a46": "5698246e5bdd43bb53789ad456107e0c",
".git/objects/e7/99f1f8afb0d115507ddc5d918d00595fff0487": "b0de3ae7798c76a401fc1a54758dc676",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/465656e37845ec0c222a0d52c92a8481e1fe47": "e5904d0a0a5afb720429544fd9e574cf",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/15/1d3de80809fa50e9aaffde413afa79178fd3bf": "282b5c06606a3f7db4bfcfa27c9d4320",
".git/objects/71/b51a53a31c011ffc9aa965514bb6978df73fe0": "5467e08d38b8a8318bcfc572de79c5c0",
".git/objects/78/184d561c55727734eb4f2bbd268c1d5d0beaf6": "0d14a4c06516301b644944cee091583d",
".git/objects/13/4ae8037393c90e49ba08872fa6f5cdb1db3601": "e1c6a79ad56d6957adecd83bc46ac7b2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3cc13199fd2b8c3ecbf798d58179ea6b",
".git/logs/refs/heads/main": "3cc13199fd2b8c3ecbf798d58179ea6b",
".git/logs/refs/remotes/origin/main": "84af5cd954aef7f82d9213d3d4d4d9b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fd79fc10ef839bfef91b343e26549a12",
".git/refs/remotes/origin/main": "fd79fc10ef839bfef91b343e26549a12",
".git/index": "7aefed3a0f69a45336bd1140ccf5aa51",
".git/COMMIT_EDITMSG": "6f4f98a9299b01ecb203e8e2fc8a4bcd",
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
