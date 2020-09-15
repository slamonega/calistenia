import { root } from '../package.json';

const version = 'v7';
const assets = [
  root,
  root + 'bundle.js',
  root + 'bundle.js.map',
  root + 'index.html',
  root + 'manifest.json',
  root + 'normalize.css',
  root + 'style.css',
  // favicon
  root + 'android-chrome-192x192.png',
  root + 'android-chrome-512x512.png',
  root + 'apple-touch-icon.png',
  root + 'favicon.svg',
  root + 'browserconfig.xml',
  root + 'favicon-16x16.png',
  root + 'favicon-32x32.png',
  root + 'favicon.ico',
  root + 'mstile-144x144.png',
  root + 'mstile-150x150.png',
  root + 'mstile-310x150.png',
  root + 'mstile-310x310.png',
  root + 'mstile-70x70.png',
  root + 'safari-pinned-tab.svg',
];

self.addEventListener( 'install', ev => {
  ev.waitUntil( caches.open( version ).then( cache => cache.addAll( assets ) ) );
} );

self.addEventListener( 'fetch', ev => {
  ev.respondWith( caches.open( version ).then( cache => cache.match( ev.request ).then( res => res || Promise.reject( 'no-match' ) ) ) );
} );
