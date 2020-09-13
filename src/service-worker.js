const version = 'v3';
const assets = [
  '/',
  '/bundle.js',
  '/index.html',
  '/manifest.json',
  '/normalize.css',
  '/style.css',
];

self.addEventListener( 'install', ev => {
  ev.waitUntil( caches.open( version ).then( cache => cache.addAll( assets ) ) );
} );

self.addEventListener( 'fetch', ev => {
  ev.respondWith( caches.open( version ).then( cache => cache.match( ev.request ).then( res => res || Promise.reject( 'no-match' ) ) ) );
} );
