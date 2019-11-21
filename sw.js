const staticCacheName = "static-cache";
const assets = [
    '/',
    '/index.html',
    'js/app.js',
    'js/ui.js',
    'css/styles.css',
    'css/materialize.min.css',
    'img/dish.png',
    'js/materialize.min.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// install service workersss
self.addEventListener('install', evt => {
    // console.log("sevice worker has been installed");
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// listen to activate event
self.addEventListener('activate', evt => {
    console.log("service worker has been activated");
});

// listen to fetch event
self.addEventListener('fetch', evt => {
    console.log("fetch event", evt);
});