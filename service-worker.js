/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f3805cfd1909c9b801fba1548ac43d3"
  },
  {
    "url": "assets/css/0.styles.fbd252ba.css",
    "revision": "efd30b242e81c6925c534e3f0df74493"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.60de010e.js",
    "revision": "318b8a3d17d0500c6787495864e351f9"
  },
  {
    "url": "assets/js/10.6111cc48.js",
    "revision": "f8130d20e46be01a3c1e670aadd6aba9"
  },
  {
    "url": "assets/js/11.7e4ebf55.js",
    "revision": "f465c704824a91e4e5bf4e6fc6c63cac"
  },
  {
    "url": "assets/js/12.131c1c7f.js",
    "revision": "f18b125451c7f86020b335512acc76d4"
  },
  {
    "url": "assets/js/13.86f21272.js",
    "revision": "bdde254d81f796e8cf80dc01ba2bcee1"
  },
  {
    "url": "assets/js/14.0c4333be.js",
    "revision": "72e392f8798a5468efef903e9db17d06"
  },
  {
    "url": "assets/js/15.9ec25c40.js",
    "revision": "aa3a059610a3dfe9c81ad6fecf2e930f"
  },
  {
    "url": "assets/js/16.3df79fe8.js",
    "revision": "7c5e05060e184a1d24a06d09d9d60143"
  },
  {
    "url": "assets/js/17.b684f749.js",
    "revision": "ade22ce76321a04a97a93a815f700780"
  },
  {
    "url": "assets/js/18.00abebe4.js",
    "revision": "0de22279782f4e1f6a568fc24fd115ce"
  },
  {
    "url": "assets/js/19.bef9f411.js",
    "revision": "a62596e2e5bc539b9ffc1b638cacdc5c"
  },
  {
    "url": "assets/js/20.49d963e9.js",
    "revision": "380695e45b72e87197c8a2c159a17a5c"
  },
  {
    "url": "assets/js/21.614d8e73.js",
    "revision": "e11ed0a1934422cda89fede9a519115d"
  },
  {
    "url": "assets/js/3.7274736f.js",
    "revision": "24973319d9df421806f3a7a4472b94a4"
  },
  {
    "url": "assets/js/4.5686ede3.js",
    "revision": "3a8a2249420df526d14a82deeced3607"
  },
  {
    "url": "assets/js/5.5cf13d5d.js",
    "revision": "d73cb9814636ea983b17ae537d763f89"
  },
  {
    "url": "assets/js/6.dddcad35.js",
    "revision": "a3675f450b4782626e8191be1eca956a"
  },
  {
    "url": "assets/js/7.4ff12795.js",
    "revision": "5533f2ceae569409eb44c3fb1cc4bee9"
  },
  {
    "url": "assets/js/8.c97dfba9.js",
    "revision": "edf34c9dcc4b47a3e702fc8018970fc2"
  },
  {
    "url": "assets/js/9.2b3c1776.js",
    "revision": "03eb6e803cc08ba5db77ea3968e915e7"
  },
  {
    "url": "assets/js/app.596c0e8b.js",
    "revision": "0e0a2d654731fb1682536b9670492fd8"
  },
  {
    "url": "avatar.jpg",
    "revision": "3ebc6ea68561caa62e19f5df52b97a4a"
  },
  {
    "url": "bj01.jpg",
    "revision": "22080d26d9aca860d65cc394494fa60d"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "18175070eba80371a97234b4ef1c6041"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "f97541a7a19125de52a3aba1bef95ff5"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "cbdcc6768aada756ff3554a7914ce98a"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "5fa3432904b46cb8da37b40f16b31cd3"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "5ef41605cfc25a51022a8a79258810e7"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "f40fc149e81391d7fd2906b54f461aad"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "c78cd0b3790dd1817ed69970724a19aa"
  },
  {
    "url": "categories/index.html",
    "revision": "63481c2e5c6974007417e825f94a9c34"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "a80791086c117852d7f1ad7a7b7341d8"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "850a4b025c18b96f8b2e3897b71e8aae"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "70e2597765b76050c4b5ae5bd741b616"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "38280ceee159d71112d9216b2145b94a"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d183cc8e494b4963eb58104904f27ec9"
  },
  {
    "url": "jg.png",
    "revision": "3f854d12044ce2d7b8cf301917d71562"
  },
  {
    "url": "logo.gif",
    "revision": "b334e83801e81cc0f5bf6677e91e6338"
  },
  {
    "url": "tag/index.html",
    "revision": "f57431b5a80d6126a25ba99052787ef9"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "551ef924f07b8040f69400df308023f5"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "db9994f25d27f3b3f259c321b69fb22d"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "0d20c528165cf10243d9a18f47774c0f"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4a3d121594bdb94ff2698e31177af68d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5976849e636485c3b75d97b32dddd7ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
