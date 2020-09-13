const version = 'v2';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/bundle.js',
];

self.addEventListener( 'install', ev => {
  ev.waitUntil( caches.open( version ).then( cache => cache.addAll( assets ) ) );
} );

self.addEventListener( 'fetch', ev => {
  ev.respondWith( caches.open( version ).then( cache => cache.match( ev.request ).then( res => res || Promise.reject( 'no-match' ) ) ) );
} );
