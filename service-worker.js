if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let o={};const u=e=>i(e,t),c={module:{uri:t},exports:o,require:u};r[t]=Promise.all(s.map((e=>c[e]||u(e)))).then((e=>(n(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"uri-redirect"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/uri-redirect/css/chunk-vendors.7f1c8ff6.css",revision:null},{url:"/uri-redirect/img/logo.4d6033c9.svg",revision:null},{url:"/uri-redirect/index.html",revision:"434ea33539b2ba1fea5dd3e2c3189034"},{url:"/uri-redirect/js/about.59ab4fe8.js",revision:null},{url:"/uri-redirect/js/app.2f2e9de9.js",revision:null},{url:"/uri-redirect/js/chunk-vendors.c20d09ca.js",revision:null},{url:"/uri-redirect/manifest.json",revision:"b3a7f1a38bb4fac9e71db2432aa3d1f5"},{url:"/uri-redirect/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map