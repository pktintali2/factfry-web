'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/img/dark-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/light-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/img/light-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/dark-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/dark-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/light-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/light-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/dark-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/style.css": "3f80d51781f907d2597898bb74841ccb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "f0b9b02a886aa80bc2c0d43183ff7b0f",
"assets/AssetManifest.json": "97476beda619d6fe3ff0b234c6b5fcdd",
"assets/shaders/ink_sparkle.frag": "6f41b9dc089f4cd72e747e756cf6bc9d",
"assets/assets/images/avatar5.png": "8e08f5723279cc8bfb2e5280305b4ff9",
"assets/assets/images/avatar15.png": "660ccb6f971f7a3d321e7e728a7ae104",
"assets/assets/images/swipe_logo.png": "05234c2e421c6da8a16e013e9d199fd8",
"assets/assets/images/splash3.png": "560e5f89adb851fac9694689c5b3a102",
"assets/assets/images/avatar10.png": "f79acc4e6604f13f57d6b1d6aced7b5b",
"assets/assets/images/avatar11.png": "842d9edecb53136dc4381a4e2b4e58f6",
"assets/assets/images/avatar14.png": "e3f21314f6c2efa4e547f4a1bf5951a2",
"assets/assets/images/avatar13.png": "addfa3e187adc82b77bda878babd633e",
"assets/assets/images/avatar8.png": "5902c379af5db5411b06fe55ebd83b26",
"assets/assets/images/empty_coupons.png": "7cd26651d3bc9747809a07fb1ea2ebd5",
"assets/assets/images/avatar9.png": "b5d064d98c8f6a0c7913ee2a83332759",
"assets/assets/images/avatar4.png": "2de4675e346f82d720300337dacff237",
"assets/assets/images/avatar2.png": "6ee043ecff2494569dfb21b52c6e162c",
"assets/assets/images/faq.png": "428cd11b33c559a02e7be1b8ec6184f5",
"assets/assets/images/empty.png": "99c43d6047bb43ec8b8335de45347e6d",
"assets/assets/images/first.png": "68c80699c2f8c296101cf57d3237fd43",
"assets/assets/images/avatar6.png": "d494f6af3e87274f82a86e91a711894b",
"assets/assets/images/empty_request.png": "961705d4f86217ae8e60aabd28bf5dbd",
"assets/assets/images/avatar3.png": "85e79442e745037627b0d32adcbedcf3",
"assets/assets/images/avatar12.png": "0c46298e79e11f26c780929592407d5e",
"assets/assets/images/empty_coins.png": "dc0a489ce1ff0009685cbbd1c1f52b04",
"assets/assets/images/avatar1.png": "443109302e3dc4493529a80bd4724166",
"assets/assets/images/avatar7.png": "90a5a5ad3f018f1e265f9a76f6e3eae4",
"assets/assets/images/category_vote.png": "20237f05407ad1e8f764a7fae552e062",
"assets/assets/images/report.png": "6c6cc9e9ef0556c17832ddbb726a2a2e",
"assets/assets/images/coin_image.png": "77b8696caa4a06f72560ff0e08f77fe4",
"assets/assets/images/premium.png": "083253d03740ad4945b1f16e9132bd42",
"assets/assets/images/empty_bookmark.png": "ca1eab15ab607c8f50eca94e2825c4e5",
"assets/assets/images/empty_fav.png": "333c2065eebca47a03af8a5678283f8a",
"assets/assets/images/avatar0.png": "1051badcb1f45c197298175e3b5941f2",
"assets/assets/images/splash4.png": "557822a45b5800e654e5e6ae3dd54fd4",
"assets/assets/images/splash2.png": "1bb6dca4dc5d8a5804994f515572fb8c",
"assets/assets/images/empty_req.png": "ad75d5102fda159cf93842bb9579120f",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"version.json": "0104aaf6c45ddfcf3ac5bad2f501881e",
"manifest.json": "15aeaaec6bbd33bc20fcd623307e7ed6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "7e6532297d7e87ba91ead044e8952c95",
"index.html": "4121a1e30bcbe7de7a16a26446946624",
"/": "4121a1e30bcbe7de7a16a26446946624",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
