if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const u=e=>n(e,o),c={module:{uri:o},exports:l,require:u};s[o]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-todo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/925.1544660f.css",revision:null},{url:"/css/chunk-vendors.a02310d6.css",revision:null},{url:"/img/bg.82a17237.jpg",revision:null},{url:"/index.html",revision:"ad55f6cf7fe20f51b8ef550499148fa9"},{url:"/js/30.ec4af88f.js",revision:null},{url:"/js/925.295e38ca.js",revision:null},{url:"/js/app.1a589698.js",revision:null},{url:"/js/chunk-vendors.faacf04a.js",revision:null},{url:"/manifest.json",revision:"fbafddbca0454e2cf83c4640f9391b35"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
