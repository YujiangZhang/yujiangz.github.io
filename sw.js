if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const n=e=>c(e,f),t={module:{uri:f},exports:r,require:n};s[f]=Promise.all(a.map((e=>t[e]||n(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ea130468"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/574275d6.css",revision:"4cc098fa0d8771e98d623de5267111ff"},{url:"assets/css/de0f2ec2.css",revision:"5688ef2d25b7fa23025f662f98eae77c"},{url:"assets/js/1a9c32f4.js",revision:"40e3933dfa9b4cb16430fba1aff3a42d"},{url:"assets/js/1f363fcf.js",revision:"e19ec7bc2775bf15b0d9ec729e29f990"},{url:"assets/js/3c83c744.js",revision:"c6ad4f728e60713e3d378c63d311d708"},{url:"assets/js/415961ac.js",revision:"4880225483cfd78887e11af672daa31a"},{url:"assets/js/41edb194.js",revision:"a6c4053ec100044d94f23e08910ca8ba"},{url:"assets/js/6b55e830.js",revision:"eb4b42f8eb4693c106a6f0a5672de6e9"},{url:"assets/js/7517fd62.js",revision:"e1b29a06240a73ca2edf7f812fae0d86"},{url:"assets/js/83500e56.js",revision:"1038c1cbabb278304033f09efd62a338"},{url:"assets/js/a7b12eab.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"assets/js/ce0e91a7.js",revision:"69b1453c0bf522e5e636b6f4e0601047"},{url:"index.html",revision:"6ed8154cfba363f274cc7421c87f2c07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*\.md$/i,new e.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
