import { root } from '../package.json';

const version = 'v5';
const assets = [
  root,
  root + 'bundle.js',
  root + 'index.html',
  root + 'manifest.json',
  root + 'normalize.css',
  root + 'style.css',
];

self.addEventListener( 'install', ev => {
  ev.waitUntil( caches.open( version ).then( cache => cache.addAll( assets ) ) );
} );

self.addEventListener( 'fetch', ev => {
  ev.respondWith( caches.open( version ).then( cache => cache.match( ev.request ).then( res => res || Promise.reject( 'no-match' ) ) ) );
} );
