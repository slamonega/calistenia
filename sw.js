var e="/bodyworkplans/";const n=[e,e+"bundle.js",e+"index.html",e+"manifest.json",e+"normalize.css",e+"style.css"];self.addEventListener("install",e=>{e.waitUntil(caches.open("v5").then(e=>e.addAll(n)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.open("v5").then(n=>n.match(e.request).then(e=>e||Promise.reject("no-match"))))});
//# sourceMappingURL=sw.js.map
