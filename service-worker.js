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

importScripts(
  "/Cjochen2/Conways-Game-of-Life-Tutorial-React/tree/613eeafc6acb7276b3bab9691a09b5ef94e325c7/gameoflife/precache-manifest.85244191c604765cf24c9be9b95a9b07.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/Cjochen2/Conways-Game-of-Life-Tutorial-React/tree/613eeafc6acb7276b3bab9691a09b5ef94e325c7/gameoflife/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
});
