// install service workersss
self.addEventListener('install', evt => {
    console.log("sevice worker has been installed");
});

// listen to activate event
self.addEventListener('activate', evt => {
    console.log("service worker has been activated");
});

// listen to fetch event
self.addEventListener('fetch', evt => {
    console.log("fetch event", evt);
});