"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/background.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/background.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/background/window-overlay.png */ "./src/media/images/background/window-overlay.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/background/curtain-fold.png */ "./src/media/images/background/curtain-fold.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".background {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  overflow: hidden;\r\n  background-color: black;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bg-window {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n/* courtains properties */\r\n\r\n.bg-curtains {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, .75);\r\n  transition: 1s ease-in-out;\r\n}\r\n.background.ready .bg-curtains {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.bg-curtain {\r\n  --separation-1: 32%;\r\n  --separation-2: 28%;\r\n  --separation-3: 23%;\r\n  --separation-4: 15%;\r\n  --separation-5: 5%;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 20%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-size: 100% 100%;\r\n  transform: translateX(-50%);\r\n  transition: 1s ease-in-out;\r\n}\r\n.background.ready .bg-curtain {\r\n  --separation-1: 3%;\r\n  --separation-2: 2%;\r\n  --separation-3: 0%;\r\n  --separation-4: -2%;\r\n  --separation-5: -5%;\r\n}\r\n\r\n.bg-curtain-left {\r\n  left: 0;\r\n}\r\n\r\n.bg-curtain-right {\r\n  right: 0;\r\n  scale: -1 1;\r\n}\r\n\r\n.bg-curtain:nth-of-type(1) {\r\n  left: var(--separation-1);\r\n}\r\n.bg-curtain:nth-of-type(2) {\r\n  left: var(--separation-2);\r\n  height: calc(100% + 10px);\r\n}\r\n.bg-curtain:nth-of-type(3) {\r\n  left: var(--separation-3);\r\n  height: calc(100% + 18px);\r\n}\r\n.bg-curtain:nth-of-type(4) {\r\n  left: var(--separation-4);\r\n  height: calc(100% + 24px);\r\n}\r\n.bg-curtain:nth-of-type(5) {\r\n  left: var(--separation-5);\r\n  height: calc(100% + 29px);\r\n}\r\n.bg-curtain:nth-of-type(6) {\r\n  right: var(--separation-1);\r\n}\r\n.bg-curtain:nth-of-type(7) {\r\n  right: var(--separation-2);\r\n  height: calc(100% + 10px);\r\n}\r\n.bg-curtain:nth-of-type(8) {\r\n  right: var(--separation-3);\r\n  height: calc(100% + 18px);\r\n}\r\n.bg-curtain:nth-of-type(9) {\r\n  right: var(--separation-4);\r\n  height: calc(100% + 24px);\r\n}\r\n.bg-curtain:nth-of-type(10) {\r\n  right: var(--separation-5);\r\n  height: calc(100% + 29px);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/background.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,mDAA8D;EAC9D,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA,yBAAyB;;AAEzB;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,0BAA0B;AAC5B;AACA;EACE,kCAAkC;AACpC;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,YAAY;EACZ,6DAAsE;EACtE,0BAA0B;EAC1B,2BAA2B;EAC3B,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;AACA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;AACA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;AACA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B","sourcesContent":[".background {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  overflow: hidden;\r\n  background-color: black;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bg-window {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/background/window-overlay.png);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n/* courtains properties */\r\n\r\n.bg-curtains {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, .75);\r\n  transition: 1s ease-in-out;\r\n}\r\n.background.ready .bg-curtains {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.bg-curtain {\r\n  --separation-1: 32%;\r\n  --separation-2: 28%;\r\n  --separation-3: 23%;\r\n  --separation-4: 15%;\r\n  --separation-5: 5%;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 20%;\r\n  height: 100%;\r\n  background: url(../media/images/background/curtain-fold.png) no-repeat;\r\n  background-size: 100% 100%;\r\n  transform: translateX(-50%);\r\n  transition: 1s ease-in-out;\r\n}\r\n.background.ready .bg-curtain {\r\n  --separation-1: 3%;\r\n  --separation-2: 2%;\r\n  --separation-3: 0%;\r\n  --separation-4: -2%;\r\n  --separation-5: -5%;\r\n}\r\n\r\n.bg-curtain-left {\r\n  left: 0;\r\n}\r\n\r\n.bg-curtain-right {\r\n  right: 0;\r\n  scale: -1 1;\r\n}\r\n\r\n.bg-curtain:nth-of-type(1) {\r\n  left: var(--separation-1);\r\n}\r\n.bg-curtain:nth-of-type(2) {\r\n  left: var(--separation-2);\r\n  height: calc(100% + 10px);\r\n}\r\n.bg-curtain:nth-of-type(3) {\r\n  left: var(--separation-3);\r\n  height: calc(100% + 18px);\r\n}\r\n.bg-curtain:nth-of-type(4) {\r\n  left: var(--separation-4);\r\n  height: calc(100% + 24px);\r\n}\r\n.bg-curtain:nth-of-type(5) {\r\n  left: var(--separation-5);\r\n  height: calc(100% + 29px);\r\n}\r\n.bg-curtain:nth-of-type(6) {\r\n  right: var(--separation-1);\r\n}\r\n.bg-curtain:nth-of-type(7) {\r\n  right: var(--separation-2);\r\n  height: calc(100% + 10px);\r\n}\r\n.bg-curtain:nth-of-type(8) {\r\n  right: var(--separation-3);\r\n  height: calc(100% + 18px);\r\n}\r\n.bg-curtain:nth-of-type(9) {\r\n  right: var(--separation-4);\r\n  height: calc(100% + 24px);\r\n}\r\n.bg-curtain:nth-of-type(10) {\r\n  right: var(--separation-5);\r\n  height: calc(100% + 29px);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/search.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/search.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/icons/search-magnifier.svg */ "./src/media/images/icons/search-magnifier.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --radious: 8px;\r\n  --flag-size: 2.25rem;\r\n  --max-flag-size: 2.75rem;\r\n}\r\n\r\n.city-search {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  z-index: 1;\r\n  left: 50%;\r\n  top: 30%;\r\n  transform: translate(-50%, 0%);\r\n  width: 450px;\r\n  border-radius: 1rem;\r\n  animation: search-reveal 1s cubic-bezier(.22,.61,.36,1);\r\n}\r\n\r\n@keyframes search-reveal {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate(-50%, 150%);\r\n  }\r\n}\r\n\r\n/* input */\r\n\r\n.search-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  align-items: center;\r\n}\r\n\r\n.search-input {\r\n  --magnifier-focus-size: 2.5rem;\r\n  box-sizing: border-box;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 2rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center right;\r\n  color: #444;\r\n  font-size: 1.6rem;\r\n  padding-top: .25rem;\r\n  padding-right: calc(var(--magnifier-focus-size) + 3px);\r\n  padding-bottom: calc(.25rem + var(--radious));\r\n  padding-left: .75rem;\r\n  border: none;\r\n  border-radius: 0 var(--radious) 0 var(--radious);\r\n  transition: background-size 300ms, background-position 300ms;\r\n}\r\n.search-input:focus {\r\n  outline: none;\r\n  background-size: 2.5rem;\r\n  background-position: top right;\r\n}\r\n.search-input.loading {\r\n  background-image: none;\r\n}\r\n\r\n/* locations list */\r\n\r\n.search-results {\r\n  position: absolute;\r\n  transform: translateY(calc(var(--radious) * -1));\r\n  width: 100%;\r\n  max-height: 550px;\r\n  overflow-y: auto;\r\n  font-size: 1.5rem;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.search-result,\r\n.search-result-empty {\r\n  display: grid;\r\n  background-color: white;\r\n  grid-template-columns: calc(var(--max-flag-size) * 1.25) 1fr;\r\n  /* height: 65px; */\r\n  min-height: calc(var(--max-flag-size) + 20px);\r\n  align-items: center;\r\n  color: #555;\r\n  user-select: none;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n.search-result {\r\n  cursor: pointer;\r\n}\r\n.search-result:hover,\r\n.search-result:focus {\r\n  color: black;\r\n  box-shadow: inset calc(var(--max-flag-size) * 1.25) 0 5px #eee;\r\n  outline: transparent;\r\n}\r\n.search-result:not(:last-child) {\r\n  border-bottom: 1px solid white;\r\n}\r\n.search-result:last-child,\r\n.search-result-empty {\r\n  border-radius: 0 0 0 var(--radious);\r\n}\r\n.search-result p:not(.country-flag) {\r\n  margin: 5px;\r\n  font-size: 1.25rem;\r\n  text-align: left;\r\n}\r\n\r\n.country-flag,\r\n.country-flag-none {\r\n  text-align: center;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n.country-flag {\r\n  font-size: var(--flag-size);\r\n}\r\n.search-result:hover .country-flag,\r\n.search-result:focus .country-flag {\r\n  font-size: var(--max-flag-size);\r\n}\r\n\r\n/* loading icon */\r\n\r\n.search-loading {\r\n  position: absolute;\r\n  z-index: 1;\r\n  box-sizing: border-box;\r\n  right: 2px;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.search-loading > div {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.search-loading > :nth-child(1) {\r\n  border: 4px solid #555;\r\n  border-top: 4px solid transparent;\r\n  animation: loading-icon 1s linear infinite;\r\n}\r\n.search-loading > :nth-child(2) {\r\n  border: 6px solid #777;\r\n  border-left: 6px solid transparent;\r\n  animation: loading-icon 1s ease-in reverse infinite;\r\n  scale: 83%;\r\n}\r\n.search-loading > :nth-child(3) {\r\n  border: 8px solid #999;\r\n  border-right: 8px solid transparent;\r\n  animation: loading-icon 1s ease-in-out infinite;\r\n  scale: 62%;\r\n}\r\n\r\n@keyframes loading-icon {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* main menu background element */\r\n\r\n.main-menu-background {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  z-index: 1;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  backdrop-filter: blur(15px);\r\n  transition: opacity 500ms linear;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/search.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,QAAQ;EACR,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,uDAAuD;AACzD;;AAEA;EACE;IACE,UAAU;IACV,gCAAgC;EAClC;AACF;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,yDAAiE;EACjE,qBAAqB;EACrB,4BAA4B;EAC5B,iCAAiC;EACjC,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,sDAAsD;EACtD,6CAA6C;EAC7C,oBAAoB;EACpB,YAAY;EACZ,gDAAgD;EAChD,4DAA4D;AAC9D;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;AAChC;AACA;EACE,sBAAsB;AACxB;;AAEA,mBAAmB;;AAEnB;EACE,kBAAkB;EAClB,gDAAgD;EAChD,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,4DAA4D;EAC5D,kBAAkB;EAClB,6CAA6C;EAC7C,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;;EAEE,YAAY;EACZ,8DAA8D;EAC9D,oBAAoB;AACtB;AACA;EACE,8BAA8B;AAChC;AACA;;EAEE,mCAAmC;AACrC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,2BAA2B;AAC7B;AACA;;EAEE,+BAA+B;AACjC;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;EAClB,UAAU;EACV,sBAAsB;EACtB,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,0CAA0C;AAC5C;AACA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,mDAAmD;EACnD,UAAU;AACZ;AACA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,+CAA+C;EAC/C,UAAU;AACZ;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA,iCAAiC;;AAEjC;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,gCAAgC;AAClC","sourcesContent":[":root {\r\n  --radious: 8px;\r\n  --flag-size: 2.25rem;\r\n  --max-flag-size: 2.75rem;\r\n}\r\n\r\n.city-search {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  z-index: 1;\r\n  left: 50%;\r\n  top: 30%;\r\n  transform: translate(-50%, 0%);\r\n  width: 450px;\r\n  border-radius: 1rem;\r\n  animation: search-reveal 1s cubic-bezier(.22,.61,.36,1);\r\n}\r\n\r\n@keyframes search-reveal {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate(-50%, 150%);\r\n  }\r\n}\r\n\r\n/* input */\r\n\r\n.search-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  align-items: center;\r\n}\r\n\r\n.search-input {\r\n  --magnifier-focus-size: 2.5rem;\r\n  box-sizing: border-box;\r\n  background-image: url(../media/images/icons/search-magnifier.svg);\r\n  background-size: 2rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center right;\r\n  color: #444;\r\n  font-size: 1.6rem;\r\n  padding-top: .25rem;\r\n  padding-right: calc(var(--magnifier-focus-size) + 3px);\r\n  padding-bottom: calc(.25rem + var(--radious));\r\n  padding-left: .75rem;\r\n  border: none;\r\n  border-radius: 0 var(--radious) 0 var(--radious);\r\n  transition: background-size 300ms, background-position 300ms;\r\n}\r\n.search-input:focus {\r\n  outline: none;\r\n  background-size: 2.5rem;\r\n  background-position: top right;\r\n}\r\n.search-input.loading {\r\n  background-image: none;\r\n}\r\n\r\n/* locations list */\r\n\r\n.search-results {\r\n  position: absolute;\r\n  transform: translateY(calc(var(--radious) * -1));\r\n  width: 100%;\r\n  max-height: 550px;\r\n  overflow-y: auto;\r\n  font-size: 1.5rem;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.search-result,\r\n.search-result-empty {\r\n  display: grid;\r\n  background-color: white;\r\n  grid-template-columns: calc(var(--max-flag-size) * 1.25) 1fr;\r\n  /* height: 65px; */\r\n  min-height: calc(var(--max-flag-size) + 20px);\r\n  align-items: center;\r\n  color: #555;\r\n  user-select: none;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n.search-result {\r\n  cursor: pointer;\r\n}\r\n.search-result:hover,\r\n.search-result:focus {\r\n  color: black;\r\n  box-shadow: inset calc(var(--max-flag-size) * 1.25) 0 5px #eee;\r\n  outline: transparent;\r\n}\r\n.search-result:not(:last-child) {\r\n  border-bottom: 1px solid white;\r\n}\r\n.search-result:last-child,\r\n.search-result-empty {\r\n  border-radius: 0 0 0 var(--radious);\r\n}\r\n.search-result p:not(.country-flag) {\r\n  margin: 5px;\r\n  font-size: 1.25rem;\r\n  text-align: left;\r\n}\r\n\r\n.country-flag,\r\n.country-flag-none {\r\n  text-align: center;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n.country-flag {\r\n  font-size: var(--flag-size);\r\n}\r\n.search-result:hover .country-flag,\r\n.search-result:focus .country-flag {\r\n  font-size: var(--max-flag-size);\r\n}\r\n\r\n/* loading icon */\r\n\r\n.search-loading {\r\n  position: absolute;\r\n  z-index: 1;\r\n  box-sizing: border-box;\r\n  right: 2px;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.search-loading > div {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.search-loading > :nth-child(1) {\r\n  border: 4px solid #555;\r\n  border-top: 4px solid transparent;\r\n  animation: loading-icon 1s linear infinite;\r\n}\r\n.search-loading > :nth-child(2) {\r\n  border: 6px solid #777;\r\n  border-left: 6px solid transparent;\r\n  animation: loading-icon 1s ease-in reverse infinite;\r\n  scale: 83%;\r\n}\r\n.search-loading > :nth-child(3) {\r\n  border: 8px solid #999;\r\n  border-right: 8px solid transparent;\r\n  animation: loading-icon 1s ease-in-out infinite;\r\n  scale: 62%;\r\n}\r\n\r\n@keyframes loading-icon {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* main menu background element */\r\n\r\n.main-menu-background {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  z-index: 1;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  backdrop-filter: blur(15px);\r\n  transition: opacity 500ms linear;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --txt-color-1: #000;\r\n  --txt-color-2: #222;\r\n  --txt-color-3: #333;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: darkslateblue;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* for general use */\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.invisible {\r\n  opacity: 0 !important;\r\n  pointer-events: none !important;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;;AAGA;EACE,+BAA+B;EAC/B,SAAS;EACT,UAAU;AACZ;;AAEA,oBAAoB;;AAEpB;EACE,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;AACjC","sourcesContent":[":root {\r\n  --txt-color-1: #000;\r\n  --txt-color-2: #222;\r\n  --txt-color-3: #333;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: darkslateblue;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* for general use */\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.invisible {\r\n  opacity: 0 !important;\r\n  pointer-events: none !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherCurrent.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/weatherCurrent.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/icons/search-magnifier.svg */ "./src/media/images/icons/search-magnifier.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/wind-compass.svg */ "./src/media/images/wind-compass.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --gauge-border-width: 7px;\r\n  --unit-underline-width: 3px;\r\n  --compass-color: rgba(50, 50, 255, .10);\r\n}\r\n\r\n.weather-current {\r\n  isolation: isolate;\r\n  box-sizing: border-box;\r\n  width: 430px;\r\n  height: 250px;\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, auto);\r\n  grid-template-columns: 1fr auto auto;\r\n  grid-template-areas:\r\n    \"city city city\"\r\n    \"icon temp temp\"\r\n    \"icon humi wind\"\r\n    \"code humi wind\";\r\n  gap: 5px;\r\n  background-color: rgba(255, 255, 255, .5);\r\n  backdrop-filter: blur(10px);\r\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, .25),\r\n    inset 3px 3px 6px rgba(255, 255, 255, .25);\r\n  border-radius: 10px;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-current p {\r\n  margin: 0;\r\n}\r\n\r\n/* city name */\r\n\r\n.city-div {\r\n  grid-area: city;\r\n  position: relative;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.city-para {\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-1);\r\n  font-weight: 800;\r\n  padding: 0 .25rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  text-align: left;\r\n}\r\n\r\n.city-para:hover {\r\n  text-decoration: underline blue;\r\n  text-decoration-thickness: 5px;\r\n}\r\n\r\n.city-current-search {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  translate: 0 -50%;\r\n  height: 100%;\r\n  aspect-ratio: 1/1;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat top right;\r\n  background-size: 50%;\r\n  opacity: 0;\r\n  transition: 250ms;\r\n}\r\n\r\n.city-div:hover .city-current-search {\r\n  background-size: 80%;\r\n  opacity: 100%;\r\n}\r\n\r\n/* icon */\r\n\r\n.weather-current-icon {\r\n  grid-area: icon;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, .25));\r\n}\r\n\r\n/* weathercode */\r\n\r\n.weathercode-div {\r\n  grid-area: code;\r\n  color: var(--txt-color-1);\r\n  text-align: center;\r\n}\r\n\r\n.weathercode-para {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* temperature */\r\n\r\n.temp-div {\r\n  grid-area: temp;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-rows: auto auto;\r\n  grid-template-areas:\r\n    \"curr unit\"\r\n    \"feel feel\";\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.temp-current {\r\n  grid-area: curr;\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n}\r\n\r\n/* humidity */\r\n\r\n.humidity-div {\r\n  grid-area: humi;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.humidity-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border: var(--gauge-border-width) solid rgba(50, 50, 255, .25);\r\n  border-radius: 50%;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.humidity-gauge-percent {\r\n  position: absolute;\r\n  border: var(--gauge-border-width) solid blue;\r\n  border-radius: 50%;\r\n  inset: calc(var(--gauge-border-width) * -1);\r\n}\r\n\r\n.humidity {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.humidity-title {\r\n  font-size: 1.15rem;\r\n  color: var(--txt-color-1);\r\n  height: 25px;\r\n}\r\n\r\n/* wind */\r\n\r\n.wind-div {\r\n  grid-area: wind;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.wind-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.wind-speed {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.wind-compass {\r\n  position: absolute;\r\n  inset: 0;\r\n  background:\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat,\r\n    radial-gradient(transparent 60%, var(--compass-color) 61%, var(--compass-color) 69%, transparent 70%);\r\n  background-size: 100%;\r\n\r\n}\r\n\r\n.wind-direction {\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  rotate: 0deg;\r\n  background: radial-gradient(transparent 60%, rgba(0, 0, 255, .5) 60%);\r\n  mask-image: conic-gradient(red 5%, transparent 5%, transparent 95%, red 95%);\r\n  transition: rotate ease-out 2s;\r\n}\r\n\r\n.wind-title-div {\r\n  width: 100%;\r\n  height: 25px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.wind-title {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* for units */\r\n\r\n.gauge-unit {\r\n  grid-area: unit;\r\n  position: relative;\r\n  align-self: baseline;\r\n  justify-self: left;\r\n  width: 3rem;\r\n  height: 2.5rem;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  appearance: none;\r\n}\r\n.gauge-unit:hover {\r\n  background: linear-gradient(to top, blue var(--unit-underline-width), transparent var(--unit-underline-width));\r\n}\r\n.gauge-unit::before,\r\n.gauge-unit::after {\r\n  position: absolute;\r\n  left: 0;\r\n  inset: 0;\r\n  transition: top 200ms ease-in-out;\r\n}\r\n.gauge-unit::before {\r\n  top: 100%;\r\n}\r\n.gauge-unit::after {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::before {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::after {\r\n  top: 100%\r\n}\r\n\r\n.temp-apparent-div {\r\n  grid-area: feel;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-2);\r\n  display: flex;\r\n}\r\n\r\n.temp-apparent {\r\n  padding-left: 5px;\r\n}\r\n\r\n.gauge-unit-apparent {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.25rem;\r\n  justify-self: left;\r\n}\r\n\r\n.gauge-unit.temperature-unit::before {\r\n  content: \"°F\";\r\n}\r\n.gauge-unit.temperature-unit::after {\r\n  content: \"°C\";\r\n}\r\n\r\n.wind-speed-unit{\r\n  width: 2.0rem;\r\n  height: 1.10rem;\r\n  font-size: .9rem;\r\n}\r\n.gauge-unit.wind-speed-unit::before {\r\n  content: \"mph\";\r\n}\r\n.gauge-unit.wind-speed-unit::after {\r\n  content: \"km/h\";\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/weatherCurrent.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --gauge-border-width: 7px;\r\n  --unit-underline-width: 3px;\r\n  --compass-color: rgba(50, 50, 255, .10);\r\n}\r\n\r\n.weather-current {\r\n  isolation: isolate;\r\n  box-sizing: border-box;\r\n  width: 430px;\r\n  height: 250px;\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, auto);\r\n  grid-template-columns: 1fr auto auto;\r\n  grid-template-areas:\r\n    \"city city city\"\r\n    \"icon temp temp\"\r\n    \"icon humi wind\"\r\n    \"code humi wind\";\r\n  gap: 5px;\r\n  background-color: rgba(255, 255, 255, .5);\r\n  backdrop-filter: blur(10px);\r\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, .25),\r\n    inset 3px 3px 6px rgba(255, 255, 255, .25);\r\n  border-radius: 10px;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-current p {\r\n  margin: 0;\r\n}\r\n\r\n/* city name */\r\n\r\n.city-div {\r\n  grid-area: city;\r\n  position: relative;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.city-para {\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-1);\r\n  font-weight: 800;\r\n  padding: 0 .25rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  text-align: left;\r\n}\r\n\r\n.city-para:hover {\r\n  text-decoration: underline blue;\r\n  text-decoration-thickness: 5px;\r\n}\r\n\r\n.city-current-search {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  translate: 0 -50%;\r\n  height: 100%;\r\n  aspect-ratio: 1/1;\r\n  background: url(../media/images/icons/search-magnifier.svg) no-repeat top right;\r\n  background-size: 50%;\r\n  opacity: 0;\r\n  transition: 250ms;\r\n}\r\n\r\n.city-div:hover .city-current-search {\r\n  background-size: 80%;\r\n  opacity: 100%;\r\n}\r\n\r\n/* icon */\r\n\r\n.weather-current-icon {\r\n  grid-area: icon;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, .25));\r\n}\r\n\r\n/* weathercode */\r\n\r\n.weathercode-div {\r\n  grid-area: code;\r\n  color: var(--txt-color-1);\r\n  text-align: center;\r\n}\r\n\r\n.weathercode-para {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* temperature */\r\n\r\n.temp-div {\r\n  grid-area: temp;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-rows: auto auto;\r\n  grid-template-areas:\r\n    \"curr unit\"\r\n    \"feel feel\";\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.temp-current {\r\n  grid-area: curr;\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n}\r\n\r\n/* humidity */\r\n\r\n.humidity-div {\r\n  grid-area: humi;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.humidity-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border: var(--gauge-border-width) solid rgba(50, 50, 255, .25);\r\n  border-radius: 50%;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.humidity-gauge-percent {\r\n  position: absolute;\r\n  border: var(--gauge-border-width) solid blue;\r\n  border-radius: 50%;\r\n  inset: calc(var(--gauge-border-width) * -1);\r\n}\r\n\r\n.humidity {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.humidity-title {\r\n  font-size: 1.15rem;\r\n  color: var(--txt-color-1);\r\n  height: 25px;\r\n}\r\n\r\n/* wind */\r\n\r\n.wind-div {\r\n  grid-area: wind;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.wind-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.wind-speed {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.wind-compass {\r\n  position: absolute;\r\n  inset: 0;\r\n  background:\r\n    url(../media/images/wind-compass.svg) no-repeat,\r\n    radial-gradient(transparent 60%, var(--compass-color) 61%, var(--compass-color) 69%, transparent 70%);\r\n  background-size: 100%;\r\n\r\n}\r\n\r\n.wind-direction {\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  rotate: 0deg;\r\n  background: radial-gradient(transparent 60%, rgba(0, 0, 255, .5) 60%);\r\n  mask-image: conic-gradient(red 5%, transparent 5%, transparent 95%, red 95%);\r\n  transition: rotate ease-out 2s;\r\n}\r\n\r\n.wind-title-div {\r\n  width: 100%;\r\n  height: 25px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.wind-title {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* for units */\r\n\r\n.gauge-unit {\r\n  grid-area: unit;\r\n  position: relative;\r\n  align-self: baseline;\r\n  justify-self: left;\r\n  width: 3rem;\r\n  height: 2.5rem;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  appearance: none;\r\n}\r\n.gauge-unit:hover {\r\n  background: linear-gradient(to top, blue var(--unit-underline-width), transparent var(--unit-underline-width));\r\n}\r\n.gauge-unit::before,\r\n.gauge-unit::after {\r\n  position: absolute;\r\n  left: 0;\r\n  inset: 0;\r\n  transition: top 200ms ease-in-out;\r\n}\r\n.gauge-unit::before {\r\n  top: 100%;\r\n}\r\n.gauge-unit::after {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::before {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::after {\r\n  top: 100%\r\n}\r\n\r\n.temp-apparent-div {\r\n  grid-area: feel;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-2);\r\n  display: flex;\r\n}\r\n\r\n.temp-apparent {\r\n  padding-left: 5px;\r\n}\r\n\r\n.gauge-unit-apparent {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.25rem;\r\n  justify-self: left;\r\n}\r\n\r\n.gauge-unit.temperature-unit::before {\r\n  content: \"°F\";\r\n}\r\n.gauge-unit.temperature-unit::after {\r\n  content: \"°C\";\r\n}\r\n\r\n.wind-speed-unit{\r\n  width: 2.0rem;\r\n  height: 1.10rem;\r\n  font-size: .9rem;\r\n}\r\n.gauge-unit.wind-speed-unit::before {\r\n  content: \"mph\";\r\n}\r\n.gauge-unit.wind-speed-unit::after {\r\n  content: \"km/h\";\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherDaily.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/weatherDaily.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/weather-daily/precipitations.png */ "./src/media/images/weather-daily/precipitations.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/weather-daily/wind.png */ "./src/media/images/weather-daily/wind.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/weather-daily/sunrise-sunset.png */ "./src/media/images/weather-daily/sunrise-sunset.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/weather-daily/uv-index.png */ "./src/media/images/weather-daily/uv-index.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  justify-items: center;\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  height: 130px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, .5);\r\n  backdrop-filter: blur(10px);\r\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, .25),\r\n    inset 2px 2px 4px rgba(255, 255, 255, .25);\r\n  transition: 100ms ease-out 100ms;\r\n}\r\n.weather-daily:hover .daily-card,\r\n.weather-daily:active .daily-card {\r\n  user-select: none;\r\n  height: 260px;\r\n}\r\n\r\n.daily-card.active {\r\n  background-color: rgba(255, 255, 255, .75);\r\n  backdrop-filter: blur(30px);\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherDaily.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,QAAQ;EACR,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,sCAAsC;EACtC,gCAAgC;EAChC;;;kCAGgC;EAChC,YAAY;EACZ,QAAQ;EACR,eAAe;EACf,yCAAyC;EACzC,2BAA2B;EAC3B;8CAC4C;EAC5C,gCAAgC;AAClC;AACA;;EAEE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,0CAA0C;EAC1C,2BAA2B;AAC7B;;AAEA,uCAAuC;;AAEvC;EACE,wBAAwB;EACxB,aAAa;EACb,gCAAgC;EAChC,mCAAmC;EACnC;;;;uCAIqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,QAAQ;EACR,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,uBAAuB;EACvB,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,QAAQ;EACR,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,uBAAuB;EACvB,wBAAwB;EACxB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA,mBAAmB;;AAEnB;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;EAClC;;mBAEiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,6DAA2E;EAC3E,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA,eAAe;;AAEf;EACE,qBAAqB;EACrB,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;EAClC;;gBAEc;EACd,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,6DAAiE;EACjE,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mCAAmC;EACnC,qCAAqC;EACrC,2BAA2B;AAC7B;;AAEA,uBAAuB;;AAEvB;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;EAClC;;iBAEe;EACf,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,6DAA2E;EAC3E,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA,aAAa;;AAEb;EACE,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;EAClC;;iBAEe;EACf,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,6DAAqE;EACrE,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB","sourcesContent":[".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  justify-items: center;\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  height: 130px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, .5);\r\n  backdrop-filter: blur(10px);\r\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, .25),\r\n    inset 2px 2px 4px rgba(255, 255, 255, .25);\r\n  transition: 100ms ease-out 100ms;\r\n}\r\n.weather-daily:hover .daily-card,\r\n.weather-daily:active .daily-card {\r\n  user-select: none;\r\n  height: 260px;\r\n}\r\n\r\n.daily-card.active {\r\n  background-color: rgba(255, 255, 255, .75);\r\n  backdrop-filter: blur(30px);\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/precipitations.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/wind.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/sunrise-sunset.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/uv-index.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherDailyHourly.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/weatherDailyHourly.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".weather-daily-hourly {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100vw;\r\n  max-width: 1230px;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherDailyHourly.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":[".weather-daily-hourly {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100vw;\r\n  max-width: 1230px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherHourly.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/weatherHourly.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/icons-chart/circle.svg */ "./src/media/images/icons-chart/circle.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/icons-chart/square.svg */ "./src/media/images/icons-chart/square.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/icons-chart/arrow.svg */ "./src/media/images/icons-chart/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/icons-chart/diamond.svg */ "./src/media/images/icons-chart/diamond.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --chart-transition: 200ms linear;\r\n  --weather-hourly-div-height: 200px;\r\n  --chart-text-color-fill: #ddd;\r\n  --chart-text-shadow: 1px 1px black;\r\n  --chart-color-temp: red;\r\n  --chart-color-apparent: coral;\r\n  --chart-color-wind: blue;\r\n  --chart-color-humidity: aquamarine;\r\n}\r\n\r\n/* chart divisions and hours */\r\n\r\n.weather-hourly {\r\n  position: relative;\r\n  height: var(--weather-hourly-div-height);\r\n  transition: opacity 2s,\r\n    background-color 100ms,\r\n    backdrop-filter 100ms,\r\n    box-shadow 200ms;\r\n}\r\n.weather-hourly:hover {\r\n  background-color: rgba(255, 255, 255, .1);\r\n  backdrop-filter: blur(15px);\r\n  box-shadow: inset 4px 4px 6px rgba(255, 255, 255, .25);\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n  mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);\r\n  filter: drop-shadow(1px 1px 2px black);\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hours-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp related */\r\n\r\n.temp-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-temp);\r\n  stroke-width: 3px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-vertex {\r\n  fill: var(--chart-color-temp);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp apparent related */\r\n\r\n.temp-apparent-chart-group {\r\n  opacity: .5;\r\n}\r\n\r\n.weather-hourly:hover .temp-apparent-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp-apparent {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-apparent);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-apparent-chart-vertex {\r\n  fill: var(--chart-color-apparent);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* wind related */\r\n\r\n.wind-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .wind-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-wind {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-wind);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.wind-chart-vertex {\r\n  fill: var(--chart-color-wind);\r\n  transition: var(--chart-transition);\r\n  /* allow rotation from the center of the image */\r\n  transform-box: fill-box;\r\n  transform-origin: center;\r\n}\r\n\r\n/* humidity related */\r\n\r\n.humidity-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .humidity-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-humidity {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-humidity);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.humidity-chart-vertex {\r\n  fill: var(--chart-color-humidity);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* hourly weather icon related */\r\n\r\n.chart-weather-icons-div {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: calc(var(--weather-hourly-div-height) - 23px);\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.chart-weather-icon {\r\n  height: 100%;\r\n  flex: 1 1 auto;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: bottom;\r\n}\r\n\r\n/* detail div related */\r\n\r\n.chart-details-div {\r\n  position: absolute;\r\n  background-color: rgba(255, 255, 255, .05);\r\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, .25),\r\n    inset 2px 2px 2px rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(5px);\r\n  padding: 10px 5px 10px 15px;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  pointer-events: none;\r\n  color: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n  width: 170px;\r\n  transition: border-radius 300ms ease-out 300ms;\r\n}\r\n.chart-details-div div {\r\n  display: grid;\r\n  grid-template-columns: 20px 1fr;\r\n  grid-template-areas: \"... text\";\r\n  align-items: center;\r\n}\r\n\r\n.chart-details-div p {\r\n  grid-area: text;\r\n  margin: 1px 0;\r\n}\r\n\r\n.chart-details-symbol {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-size: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .5));\r\n}\r\n\r\n.chart-details-symbol-temp {\r\n  /* background-color: var(--chart-color-temp); */\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.chart-details-symbol-apparent {\r\n  /* background-color: var(--chart-color-apparent); */\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.chart-details-symbol-wind {\r\n  /* background-color: var(--chart-color-wind); */\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.chart-details-symbol-humidity {\r\n  /* background-color: var(--chart-color-humidity); */\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherHourly.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,kCAAkC;EAClC,6BAA6B;EAC7B,kCAAkC;EAClC,uBAAuB;EACvB,6BAA6B;EAC7B,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA,8BAA8B;;AAE9B;EACE,kBAAkB;EAClB,wCAAwC;EACxC;;;oBAGkB;AACpB;AACA;EACE,yCAAyC;EACzC,2BAA2B;EAC3B,sDAAsD;AACxD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oFAAoF;EACpF,sCAAsC;AACxC;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,qCAAqC;AACvC;;AAEA,iBAAiB;;AAEjB;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,qCAAqC;AACvC;;AAEA,0BAA0B;;AAE1B;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,mCAAmC;AACrC;;AAEA,iBAAiB;;AAEjB;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;EACnC,gDAAgD;EAChD,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA,qBAAqB;;AAErB;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,mCAAmC;AACrC;;AAEA,gCAAgC;;AAEhC;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,qDAAqD;EACrD,iBAAiB;EACjB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA,uBAAuB;;AAEvB;EACE,kBAAkB;EAClB,0CAA0C;EAC1C;8CAC4C;EAC5C,0BAA0B;EAC1B,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,mCAAmC;EACnC,qCAAqC;EACrC,YAAY;EACZ,8CAA8C;AAChD;AACA;EACE,aAAa;EACb,+BAA+B;EAC/B,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,2BAA2B;EAC3B,4BAA4B;EAC5B,kDAAkD;AACpD;;AAEA;EACE,+CAA+C;EAC/C,yDAA6D;AAC/D;;AAEA;EACE,mDAAmD;EACnD,yDAA6D;AAC/D;;AAEA;EACE,+CAA+C;EAC/C,yDAA4D;AAC9D;;AAEA;EACE,mDAAmD;EACnD,yDAA8D;AAChE","sourcesContent":[":root {\r\n  --chart-transition: 200ms linear;\r\n  --weather-hourly-div-height: 200px;\r\n  --chart-text-color-fill: #ddd;\r\n  --chart-text-shadow: 1px 1px black;\r\n  --chart-color-temp: red;\r\n  --chart-color-apparent: coral;\r\n  --chart-color-wind: blue;\r\n  --chart-color-humidity: aquamarine;\r\n}\r\n\r\n/* chart divisions and hours */\r\n\r\n.weather-hourly {\r\n  position: relative;\r\n  height: var(--weather-hourly-div-height);\r\n  transition: opacity 2s,\r\n    background-color 100ms,\r\n    backdrop-filter 100ms,\r\n    box-shadow 200ms;\r\n}\r\n.weather-hourly:hover {\r\n  background-color: rgba(255, 255, 255, .1);\r\n  backdrop-filter: blur(15px);\r\n  box-shadow: inset 4px 4px 6px rgba(255, 255, 255, .25);\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n  mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);\r\n  filter: drop-shadow(1px 1px 2px black);\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hours-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp related */\r\n\r\n.temp-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-temp);\r\n  stroke-width: 3px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-vertex {\r\n  fill: var(--chart-color-temp);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp apparent related */\r\n\r\n.temp-apparent-chart-group {\r\n  opacity: .5;\r\n}\r\n\r\n.weather-hourly:hover .temp-apparent-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp-apparent {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-apparent);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-apparent-chart-vertex {\r\n  fill: var(--chart-color-apparent);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* wind related */\r\n\r\n.wind-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .wind-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-wind {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-wind);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.wind-chart-vertex {\r\n  fill: var(--chart-color-wind);\r\n  transition: var(--chart-transition);\r\n  /* allow rotation from the center of the image */\r\n  transform-box: fill-box;\r\n  transform-origin: center;\r\n}\r\n\r\n/* humidity related */\r\n\r\n.humidity-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .humidity-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-humidity {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-humidity);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.humidity-chart-vertex {\r\n  fill: var(--chart-color-humidity);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* hourly weather icon related */\r\n\r\n.chart-weather-icons-div {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: calc(var(--weather-hourly-div-height) - 23px);\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.chart-weather-icon {\r\n  height: 100%;\r\n  flex: 1 1 auto;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: bottom;\r\n}\r\n\r\n/* detail div related */\r\n\r\n.chart-details-div {\r\n  position: absolute;\r\n  background-color: rgba(255, 255, 255, .05);\r\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, .25),\r\n    inset 2px 2px 2px rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(5px);\r\n  padding: 10px 5px 10px 15px;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  pointer-events: none;\r\n  color: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n  width: 170px;\r\n  transition: border-radius 300ms ease-out 300ms;\r\n}\r\n.chart-details-div div {\r\n  display: grid;\r\n  grid-template-columns: 20px 1fr;\r\n  grid-template-areas: \"... text\";\r\n  align-items: center;\r\n}\r\n\r\n.chart-details-div p {\r\n  grid-area: text;\r\n  margin: 1px 0;\r\n}\r\n\r\n.chart-details-symbol {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-size: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, .5));\r\n}\r\n\r\n.chart-details-symbol-temp {\r\n  /* background-color: var(--chart-color-temp); */\r\n  background-image: url(../media/images/icons-chart/circle.svg);\r\n}\r\n\r\n.chart-details-symbol-apparent {\r\n  /* background-color: var(--chart-color-apparent); */\r\n  background-image: url(../media/images/icons-chart/square.svg);\r\n}\r\n\r\n.chart-details-symbol-wind {\r\n  /* background-color: var(--chart-color-wind); */\r\n  background-image: url(../media/images/icons-chart/arrow.svg);\r\n}\r\n\r\n.chart-details-symbol-humidity {\r\n  /* background-color: var(--chart-color-humidity); */\r\n  background-image: url(../media/images/icons-chart/diamond.svg);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDate/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getHours/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHours)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMinutes/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMinutes)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setHours/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setHours)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setMinutes/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setMinutes)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/background.css":
/*!***********************************!*\
  !*** ./src/styles/background.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./background.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/background.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/search.css":
/*!*******************************!*\
  !*** ./src/styles/search.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./search.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/search.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/weatherCurrent.css":
/*!***************************************!*\
  !*** ./src/styles/weatherCurrent.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weatherCurrent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./weatherCurrent.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherCurrent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weatherCurrent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weatherCurrent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weatherCurrent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weatherCurrent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/weatherDaily.css":
/*!*************************************!*\
  !*** ./src/styles/weatherDaily.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weatherDaily_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./weatherDaily.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherDaily.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weatherDaily_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weatherDaily_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weatherDaily_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weatherDaily_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/weatherDailyHourly.css":
/*!*******************************************!*\
  !*** ./src/styles/weatherDailyHourly.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weatherDailyHourly_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./weatherDailyHourly.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherDailyHourly.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weatherDailyHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weatherDailyHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weatherDailyHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weatherDailyHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/weatherHourly.css":
/*!**************************************!*\
  !*** ./src/styles/weatherHourly.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weatherHourly_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./weatherHourly.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/weatherHourly.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weatherHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weatherHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weatherHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weatherHourly_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_background_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/background.css */ "./src/styles/background.css");
/* harmony import */ var _styles_search_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/search.css */ "./src/styles/search.css");
/* harmony import */ var _styles_weatherCurrent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/weatherCurrent.css */ "./src/styles/weatherCurrent.css");
/* harmony import */ var _styles_weatherDailyHourly_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/weatherDailyHourly.css */ "./src/styles/weatherDailyHourly.css");
/* harmony import */ var _styles_weatherDaily_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/weatherDaily.css */ "./src/styles/weatherDaily.css");
/* harmony import */ var _styles_weatherHourly_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/weatherHourly.css */ "./src/styles/weatherHourly.css");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");









(0,_modules_ui__WEBPACK_IMPORTED_MODULE_7__["default"])();


/***/ }),

/***/ "./src/modules/background/background.js":
/*!**********************************************!*\
  !*** ./src/modules/background/background.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBackground)
/* harmony export */ });
function createBackground() {
  const section = document.createElement('section');
  const window = document.createElement('div');
  const curtains = document.createElement('div');
  const curtainFolds = 10;

  for (let i = 0; i < curtainFolds; i += 1) {
    const curtain = document.createElement('div');
    const className = i < curtainFolds / 2 ? 'bg-curtain-left' : 'bg-curtain-right';
    curtain.classList.add('bg-curtain', className);
    curtains.append(curtain);
  }

  section.classList.add('background');
  window.classList.add('bg-window');
  curtains.classList.add('bg-curtains');

  section.append(
    curtains,
    window,
  );

  return section;
}


/***/ }),

/***/ "./src/modules/background/backgroundUpdate.js":
/*!****************************************************!*\
  !*** ./src/modules/background/backgroundUpdate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backgroundUpdate)
/* harmony export */ });
function backgroundUpdate() {
  const background = document.querySelector('.background');
  background.classList.add('ready');
}


/***/ }),

/***/ "./src/modules/changeUnits.js":
/*!************************************!*\
  !*** ./src/modules/changeUnits.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeUnits)
/* harmony export */ });
/* harmony import */ var _valueAdjust__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valueAdjust */ "./src/modules/valueAdjust.js");


function changeUnits(e) {
  e.stopPropagation();
  const newValue = e.target.checked;
  const unitsClass = e.target.classList.contains('temperature-unit')
    ? '.temperature-unit' : '.wind-speed-unit';
  const valuesClass = unitsClass === '.temperature-unit'
    ? '.temperature-number' : '.speed-number';
  // change the rest of the units
  const units = document.querySelectorAll(unitsClass);
  units.forEach((unit) => {
    unit.checked = newValue;
  });
  // change the related values
  const values = document.querySelectorAll(valuesClass);
  values.forEach((number) => {
    if (valuesClass === '.temperature-number') {
      if (number.classList.contains('temp-current')
      || number.classList.contains('temp-apparent')) {
        (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_0__["default"])(
          number,
          newValue ? number.dataset.celsius : number.dataset.fahrenheit,
          newValue ? number.dataset.fahrenheit : number.dataset.celsius,
        );
      } else {
        number.textContent = newValue ? number.dataset.fahrenheit : number.dataset.celsius;
      }
    } else if (number.classList.contains('speed-number')
      && !number.classList.contains('daily-wind-speed')) {
      (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_0__["default"])(
        number,
        newValue ? number.dataset.kilometers : number.dataset.miles,
        newValue ? number.dataset.miles : number.dataset.kilometers,
      );
    } else {
      number.textContent = newValue ? number.dataset.miles : number.dataset.kilometers;
    }
  });
}


/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchGeocoding": () => (/* binding */ fetchGeocoding),
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather)
/* harmony export */ });
async function fetchWeather(latitude, longitude, timezone = 'auto') {
  let responseJson;
  try {
    const apiResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&timezone=${timezone}&current_weather=true`, {
      mode: 'cors',
    });
    responseJson = await apiResponse.json();
  } catch (err) {
    responseJson = `Something went wrong: \n${err}`;
  }
  return responseJson;
}

async function fetchGeocoding(location) {
  if (!location.length) return [];
  let responseJson;

  try {
    const locationsLimit = 100;
    const apiResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=${locationsLimit}`);
    responseJson = await apiResponse.json();
  } catch (err) {
    responseJson = `Something went wrong: \n${err}`;
  }
  return responseJson;
}


/***/ }),

/***/ "./src/modules/search/citiesList.js":
/*!******************************************!*\
  !*** ./src/modules/search/citiesList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domCitiesList)
/* harmony export */ });
/* harmony import */ var country_code_emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! country-code-emoji */ "./node_modules/country-code-emoji/lib/index.mjs");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch */ "./src/modules/fetch.js");



async function domCitiesList(search) {
  const list = document.createElement('div');
  const response = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchGeocoding)(search);
  const cities = response.results;

  if (!cities) {
    const noResults = document.createElement('div');
    const noFlagIcon = document.createElement('p');
    const para = document.createElement('p');
    noResults.classList.add('search-result-empty');
    noFlagIcon.classList.add('country-flag-none');
    noFlagIcon.innerText = '⚠️';
    para.innerText = `No locations found for "${search}".`;

    noResults.append(noFlagIcon, para);

    return noResults;
  }

  cities.forEach((city) => {
    const searchResult = document.createElement('button');
    const flag = document.createElement('p');
    const place = document.createElement('p');
    const location = `${
      city.name}${
      city.admin3 ? `, ${city.admin3}` : ''}${
      city.admin2 ? `, ${city.admin2}` : ''}${
      city.admin1 ? `, ${city.admin1}` : ''}${
      city.country ? `, ${city.country}` : ''}`;

    searchResult.classList.add('search-result');
    searchResult.dataset.latitude = city.latitude;
    searchResult.dataset.longitude = city.longitude;
    searchResult.dataset.location = location;
    flag.classList.add('country-flag');
    flag.innerText = (0,country_code_emoji__WEBPACK_IMPORTED_MODULE_0__.countryCodeEmoji)(city.country_code);
    place.innerText = location;

    searchResult.append(flag, place);
    list.append(searchResult);
  });

  return list;
}


/***/ }),

/***/ "./src/modules/search/mainMenuBackground.js":
/*!**************************************************!*\
  !*** ./src/modules/search/mainMenuBackground.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainMenuBackground)
/* harmony export */ });
function mainMenuBackground() {
  const section = document.createElement('section');

  section.classList.add('main-menu-background');

  return section;
}


/***/ }),

/***/ "./src/modules/search/search.js":
/*!**************************************!*\
  !*** ./src/modules/search/search.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _searchCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchCity */ "./src/modules/search/searchCity.js");


let focusIndex = -1;

function search() {
  let keydownTimeout;
  const timeoutDelay = 500;

  const searchSection = document.createElement('section');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const cityList = document.createElement('div');
  const loadingAnimDiv = document.createElement('div');
  const loadingAnim1 = document.createElement('div');
  const loadingAnim2 = document.createElement('div');
  const loadingAnim3 = document.createElement('div');

  searchSection.classList.add('city-search');
  form.classList.add('search-form');
  cityList.classList.add('search-results');
  loadingAnimDiv.classList.add('search-loading', 'hidden');
  input.classList.add('search-input');
  input.setAttribute('autofocus', true);
  input.type = 'search';
  input.placeholder = 'Write a location name';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  input.addEventListener('input', () => {
    input.classList.add('loading');
    loadingAnimDiv.classList.remove('hidden');
    clearTimeout(keydownTimeout);
    keydownTimeout = setTimeout(() => {
      (0,_searchCity__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
    }, timeoutDelay);
  });

  loadingAnimDiv.append(loadingAnim1, loadingAnim2, loadingAnim3);
  form.append(input, loadingAnimDiv);
  searchSection.append(form, cityList);

  searchSection.addEventListener('keydown', (e) => {
    const eventKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'];
    if (eventKeys.includes(e.key)) {
      e.preventDefault();
      if (e.key === 'ArrowDown') focusIndex += 1;
      if (e.key === 'ArrowUp') focusIndex -= 1;
      if (e.key === 'PageUp') focusIndex -= 8;
      if (e.key === 'PageDown') focusIndex += 8;

      const results = document.querySelectorAll('.search-result');
      if (results.length === 0) return;
      limitRange(results.length);
      results[focusIndex].focus();
    } else {
      if (e.key !== 'Enter') {
        const searchInput = document.querySelector('.search-input');
        searchInput.focus();
      }
      focusIndex = -1;
    }
  });

  return searchSection;
}

function limitRange(length) {
  if (focusIndex < 0) focusIndex = 0;
  if (focusIndex > length - 1) focusIndex = length - 1;
}


/***/ }),

/***/ "./src/modules/search/searchCity.js":
/*!******************************************!*\
  !*** ./src/modules/search/searchCity.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchCity)
/* harmony export */ });
/* harmony import */ var _citiesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citiesList */ "./src/modules/search/citiesList.js");
/* harmony import */ var _updateCompleteWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateCompleteWeather */ "./src/modules/search/updateCompleteWeather.js");



let previousSearch;

async function searchCity(search) {
  const searchInput = document.querySelector('.search-input');
  const cityList = document.querySelector('.search-results');
  const loadingIcon = document.querySelector('.search-loading');

  if (search === previousSearch) {
    searchInput.classList.remove('loading');
    loadingIcon.classList.add('hidden');
    return;
  }

  previousSearch = search;
  const list = await (0,_citiesList__WEBPACK_IMPORTED_MODULE_0__["default"])(search);
  searchInput.classList.remove('loading');
  loadingIcon.classList.add('hidden');
  cityList.replaceChildren();
  cityList.append(list);

  const domList = document.querySelectorAll('.search-result');
  domList.forEach((city) => {
    city.addEventListener('click', () => {
      cityList.replaceChildren();
      // disable and autocomplete input while fetching data
      searchInput.setAttribute('disabled', true);
      searchInput.value = city.dataset.location;
      searchInput.classList.add('loading');
      loadingIcon.classList.remove('hidden');

      (0,_updateCompleteWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(city);

      previousSearch = undefined;
    });
  });
}


/***/ }),

/***/ "./src/modules/search/updateCompleteWeather.js":
/*!*****************************************************!*\
  !*** ./src/modules/search/updateCompleteWeather.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCompleteWeather)
/* harmony export */ });
/* harmony import */ var _weatherCurrent_updateCurrentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherCurrent/updateCurrentWeather */ "./src/modules/weatherCurrent/updateCurrentWeather.js");
/* harmony import */ var _weatherDailyHourly_weatherDaily_updateDailyWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weatherDailyHourly/weatherDaily/updateDailyWeather */ "./src/modules/weatherDailyHourly/weatherDaily/updateDailyWeather.js");
/* harmony import */ var _weatherDailyHourly_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weatherDailyHourly/weatherHourly/updateHourlyWeather */ "./src/modules/weatherDailyHourly/weatherHourly/updateHourlyWeather.js");
/* harmony import */ var _background_backgroundUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../background/backgroundUpdate */ "./src/modules/background/backgroundUpdate.js");
/* harmony import */ var _citiesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./citiesList */ "./src/modules/search/citiesList.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch */ "./src/modules/fetch.js");
/* harmony import */ var _weathercode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../weathercode */ "./src/modules/weathercode.js");








async function updateCompleteWeather(chosenCity) {
  const { latitude } = chosenCity.dataset;
  const { longitude } = chosenCity.dataset;
  const weather = await (0,_fetch__WEBPACK_IMPORTED_MODULE_5__.fetchWeather)(latitude, longitude);
  const currentHour = new Date().getHours();
  const currentWeatherData = {
    city: chosenCity.dataset.location,
    weathercode: (0,_weathercode__WEBPACK_IMPORTED_MODULE_6__["default"])(weather.current_weather.weathercode),
    temp: weather.current_weather.temperature,
    tempApparent: weather.hourly.apparent_temperature[currentHour],
    humidity: weather.hourly.relativehumidity_2m[currentHour],
    windSpeed: weather.current_weather.windspeed,
    windDirection: weather.current_weather.winddirection,
    sunrise: weather.daily.sunrise,
    sunset: weather.daily.sunset,
    localHour: weather.current_weather.time,
  };
  const dailyWeatherData = {
    weathercodes: weather.daily.weathercode,
    tempsMax: weather.daily.temperature_2m_max,
    tempsMin: weather.daily.temperature_2m_min,
    precipitationQuantities: weather.daily.precipitation_sum,
    precipitationHours: weather.daily.precipitation_hours,
    windSpeeds: weather.daily.windspeed_10m_max,
    sunrises: weather.daily.sunrise,
    sunsets: weather.daily.sunset,
    uvIndexes: weather.daily.uv_index_max,
  };
  const hourlyWeatherData = {
    localHour: new Date(weather.current_weather.time).getHours(),
    hours: weather.hourly.time,
    temps: weather.hourly.temperature_2m,
    humidity: weather.hourly.relativehumidity_2m,
    apparent: weather.hourly.apparent_temperature,
    weathercode: weather.hourly.weathercode,
    windspeed: weather.hourly.windspeed_10m,
    windDirection: weather.hourly.winddirection_10m,
    sunrise: weather.daily.sunrise[0],
    sunset: weather.daily.sunset[0],
  };
  (0,_weatherCurrent_updateCurrentWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(currentWeatherData);
  (0,_weatherDailyHourly_weatherDaily_updateDailyWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(dailyWeatherData);
  (0,_weatherDailyHourly_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(hourlyWeatherData, hourlyWeatherData.localHour);
  // hide search, remove properties and values
  const domSearch = document.querySelector('.city-search');
  const searchInput = document.querySelector('.search-input');
  const searchLoading = document.querySelector('.search-loading');
  const mainMenuBackground = document.querySelector('.main-menu-background');
  const activeCard = document.querySelector('.daily-card.active');
  domSearch.classList.add('hidden');
  searchInput.removeAttribute('disabled');
  searchInput.classList.remove('loading');
  searchInput.value = '';
  searchLoading.classList.add('hidden');
  activeCard?.classList.remove('active');
  mainMenuBackground.classList.add('invisible');
  // clear results after hiding
  (0,_citiesList__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  // getting background ready
  (0,_background_backgroundUpdate__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadUi)
/* harmony export */ });
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/search */ "./src/modules/search/search.js");
/* harmony import */ var _search_mainMenuBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/mainMenuBackground */ "./src/modules/search/mainMenuBackground.js");
/* harmony import */ var _weatherCurrent_weatherCurrent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherCurrent/weatherCurrent */ "./src/modules/weatherCurrent/weatherCurrent.js");
/* harmony import */ var _weatherDailyHourly_weatherDailyHourly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherDailyHourly/weatherDailyHourly */ "./src/modules/weatherDailyHourly/weatherDailyHourly.js");
/* harmony import */ var _weatherDailyHourly_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weatherDailyHourly/weatherHourly/updateHourlyWeather */ "./src/modules/weatherDailyHourly/weatherHourly/updateHourlyWeather.js");
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background/background */ "./src/modules/background/background.js");







function loadUi() {
  const body = document.querySelector('body');
  body.append(
    (0,_background_background__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    (0,_search_mainMenuBackground__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    (0,_search_search__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    (0,_weatherCurrent_weatherCurrent__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    (0,_weatherDailyHourly_weatherDailyHourly__WEBPACK_IMPORTED_MODULE_3__["default"])(),
  );
}

// add listener to window resize to adjust graph
let windowResizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(windowResizeTimeout);
  windowResizeTimeout = setTimeout(() => {
    (0,_weatherDailyHourly_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }, 100);
});


/***/ }),

/***/ "./src/modules/unitConverter.js":
/*!**************************************!*\
  !*** ./src/modules/unitConverter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "celsiusToFahrenheit": () => (/* binding */ celsiusToFahrenheit),
/* harmony export */   "kilometersToMiles": () => (/* binding */ kilometersToMiles)
/* harmony export */ });
function celsiusToFahrenheit(number) {
  const fahrenheit = (number * 1.8) + 32;
  const fixedDecimals = parseFloat(parseFloat(fahrenheit).toFixed(1));
  return fixedDecimals;
}

function kilometersToMiles(number) {
  const miles = number / 1.609344;
  const fixedDecimals = parseFloat(parseFloat(miles).toFixed(1));
  return fixedDecimals;
}


/***/ }),

/***/ "./src/modules/valueAdjust.js":
/*!************************************!*\
  !*** ./src/modules/valueAdjust.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ valueAdjust)
/* harmony export */ });
function valueAdjust(domElement, fromValue, toValue, steps = 50) {
  const isFloat = domElement.classList.contains('temperature-number') ? 1 : 0;
  for (let i = 0; i < steps; i += 1) {
    setTimeout(() => {
      const currentValue = parseFloat(fromValue) + (((toValue - fromValue) / steps) * (i + 1));
      domElement.textContent = i === steps - 1 ? toValue : currentValue.toFixed(isFloat);
    }, 25 * (i + 1));
  }
}


/***/ }),

/***/ "./src/modules/weatherCurrent/barAdjust.js":
/*!*************************************************!*\
  !*** ./src/modules/weatherCurrent/barAdjust.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ barAdjust)
/* harmony export */ });
function barAdjust(domElement, fromValue, toValue) {
  const { percent } = domElement.dataset;
  const currentValue = parseInt(domElement.dataset.percent, 10);
  const timeout = 20;
  const step = fromValue < toValue ? 1 : -1;
  const mask = `conic-gradient(red ${percent}%, transparent ${percent}%)`;
  domElement.style.maskImage = mask;
  domElement.dataset.percent = currentValue + step;

  if ((step > 0 && percent < toValue)
    || (step < 0 && percent > toValue)) {
    setTimeout(() => {
      barAdjust(domElement, fromValue, toValue);
    }, timeout);
  }
}


/***/ }),

/***/ "./src/modules/weatherCurrent/openLocationSearch.js":
/*!**********************************************************!*\
  !*** ./src/modules/weatherCurrent/openLocationSearch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openLocationSearch)
/* harmony export */ });
function openLocationSearch() {
  const mainMenuBackground = document.querySelector('.main-menu-background');
  const citySearch = document.querySelector('.city-search');

  mainMenuBackground.classList.remove('invisible');
  citySearch.classList.remove('hidden');
}


/***/ }),

/***/ "./src/modules/weatherCurrent/updateCurrentWeather.js":
/*!************************************************************!*\
  !*** ./src/modules/weatherCurrent/updateCurrentWeather.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCurrentWeather)
/* harmony export */ });
/* harmony import */ var _weatherIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherIcon */ "./src/modules/weatherIcon.js");
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unitConverter */ "./src/modules/unitConverter.js");
/* harmony import */ var _valueAdjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../valueAdjust */ "./src/modules/valueAdjust.js");
/* harmony import */ var _barAdjust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barAdjust */ "./src/modules/weatherCurrent/barAdjust.js");





function updateCurrentWeather(data) {
  const element = document.querySelector('.weather-current ');
  const city = document.querySelector('.city-para');
  const icon = document.querySelector('.weather-current-icon');
  const weathercode = document.querySelector('.weathercode-para');
  const temp = document.querySelector('.temp-current');
  const tempApparent = document.querySelector('.temp-apparent');
  const humidity = document.querySelector('.humidity');
  const humidityGaugePercent = document.querySelector('.humidity-gauge-percent');
  const windSpeed = document.querySelector('.wind-speed');
  const windDirection = document.querySelector('.wind-direction');

  element.classList.remove('invisible');
  city.innerText = data.city;
  icon.style.backgroundImage = (0,_weatherIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(
    data.weathercode.icon,
    data.localHour,
    data.sunrise[0],
    data.sunset[0],
  );
  weathercode.innerText = `${data.weathercode.weather}${data.weathercode.intensity ? `, ${data.weathercode.intensity}` : ''}`;
  temp.dataset.celsius = data.temp;
  temp.dataset.fahrenheit = (0,_unitConverter__WEBPACK_IMPORTED_MODULE_1__.celsiusToFahrenheit)(data.temp);
  (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_2__["default"])(temp, temp.innerText, data.temp);
  tempApparent.dataset.celsius = data.tempApparent;
  tempApparent.dataset.fahrenheit = (0,_unitConverter__WEBPACK_IMPORTED_MODULE_1__.celsiusToFahrenheit)(data.tempApparent);
  (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_2__["default"])(tempApparent, tempApparent.innerText, data.tempApparent);
  (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_2__["default"])(humidity, humidity.innerText, data.humidity);
  (0,_barAdjust__WEBPACK_IMPORTED_MODULE_3__["default"])(humidityGaugePercent, humidityGaugePercent.dataset.percent, data.humidity);
  windSpeed.dataset.kilometers = parseInt(data.windSpeed, 10);
  windSpeed.dataset.miles = parseInt((0,_unitConverter__WEBPACK_IMPORTED_MODULE_1__.kilometersToMiles)(data.windSpeed), 10);
  (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_2__["default"])(windSpeed, windSpeed.innerText, parseInt(data.windSpeed, 10));
  windDirection.style.rotate = `${data.windDirection}deg`;
}


/***/ }),

/***/ "./src/modules/weatherCurrent/weatherCurrent.js":
/*!******************************************************!*\
  !*** ./src/modules/weatherCurrent/weatherCurrent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherCurrent)
/* harmony export */ });
/* harmony import */ var _openLocationSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openLocationSearch */ "./src/modules/weatherCurrent/openLocationSearch.js");
/* harmony import */ var _changeUnits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../changeUnits */ "./src/modules/changeUnits.js");



function weatherCurrent() {
  const section = document.createElement('section');

  // city
  const cityDiv = document.createElement('div');
  const cityPara = document.createElement('p');
  const citySearch = document.createElement('div');

  cityDiv.classList.add('city-div');
  cityPara.classList.add('city-para');
  citySearch.classList.add('city-current-search');

  cityPara.innerText = 'City Name, Country Name';

  cityPara.addEventListener('click', _openLocationSearch__WEBPACK_IMPORTED_MODULE_0__["default"]);

  cityDiv.append(cityPara, citySearch);

  // icon
  const icon = document.createElement('div');
  section.classList.add('weather-current', 'invisible');
  icon.classList.add('weather-current-icon');

  // weathercode div
  const weathercodeDiv = document.createElement('div');
  const weathercodePara = document.createElement('p');

  weathercodeDiv.classList.add('weathercode-div');
  weathercodePara.classList.add('weathercode-para');
  weathercodePara.innerText = 'Mainly clear';

  weathercodeDiv.append(weathercodePara);

  // temperatures div
  const tempDiv = document.createElement('div');
  const tempCurrent = document.createElement('p');
  const tempUnit = document.createElement('input');
  const apparentParaDiv = document.createElement('div');
  const apparentTempPara = document.createElement('p');
  const apparentTemp = document.createElement('p');
  const apparentUnit = document.createElement('input');

  tempDiv.classList.add('temp-div');
  tempCurrent.classList.add('temp-current', 'temperature-number');
  tempUnit.classList.add('gauge-unit', 'temperature-unit');
  tempUnit.type = 'checkbox';
  apparentUnit.type = 'checkbox';
  apparentParaDiv.classList.add('temp-apparent-div');
  apparentTemp.classList.add('temp-apparent', 'temperature-number');
  apparentUnit.classList.add('gauge-unit', 'temperature-unit', 'gauge-unit-apparent');

  const unitsElements = [tempUnit, apparentUnit];
  unitsElements.forEach((element) => element.addEventListener('change', _changeUnits__WEBPACK_IMPORTED_MODULE_1__["default"]));
  // tempUnit.addEventListener('change', changeUnits);

  tempCurrent.innerText = '000';
  apparentTempPara.innerText = 'Feels like: ';
  apparentTemp.innerText = '000';

  apparentParaDiv.append(apparentTempPara, apparentTemp, apparentUnit);
  tempDiv.append(tempCurrent, tempUnit, apparentParaDiv);

  // humidity div
  const humidityDiv = document.createElement('div');
  const humidityTitle = document.createElement('p');
  const humidityGauge = document.createElement('div');
  const humidityGaugePercent = document.createElement('div');
  const humidity = document.createElement('p');

  humidityDiv.classList.add('humidity-div');
  humidityTitle.classList.add('humidity-title');
  humidityGauge.classList.add('humidity-gauge');
  humidityGaugePercent.classList.add('humidity-gauge-percent');
  humidityGaugePercent.dataset.percent = 0;
  humidity.classList.add('humidity');

  humidityTitle.innerText = 'Humidity %';
  humidity.innerText = '000';

  humidityGauge.append(humidity, humidityGaugePercent);
  humidityDiv.append(humidityGauge, humidityTitle);

  // wind div
  const windDiv = document.createElement('div');
  const windTitleDiv = document.createElement('div');
  const windTitle = document.createElement('p');
  const windGauge = document.createElement('div');
  const windCompass = document.createElement('div');
  const windSpeed = document.createElement('p');
  const windSpeedUnit = document.createElement('input');
  const windSpeedDirection = document.createElement('div');

  windDiv.classList.add('wind-div');
  windTitleDiv.classList.add('wind-title-div');
  windTitle.classList.add('wind-title');
  windGauge.classList.add('wind-gauge');
  windCompass.classList.add('wind-compass');
  windSpeed.classList.add('wind-speed', 'speed-number');
  windSpeedUnit.classList.add('gauge-unit', 'wind-speed-unit');
  windSpeedUnit.type = 'checkbox';
  windSpeedDirection.classList.add('wind-direction');

  windTitle.innerText = 'Max wind';
  windSpeed.innerText = '00';

  windSpeedUnit.addEventListener('change', _changeUnits__WEBPACK_IMPORTED_MODULE_1__["default"]);

  windTitleDiv.append(windTitle, windSpeedUnit);
  windGauge.append(windSpeed, windCompass, windSpeedDirection);
  windDiv.append(windGauge, windTitleDiv);

  // append everything
  section.append(cityDiv, icon, weathercodeDiv, tempDiv, humidityDiv, windDiv);

  return section;
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherDailyHourly.js":
/*!**************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherDailyHourly.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherDailyHourly)
/* harmony export */ });
/* harmony import */ var _weatherDaily_dailyCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDaily/dailyCard */ "./src/modules/weatherDailyHourly/weatherDaily/dailyCard.js");
/* harmony import */ var _weatherHourly_weatherHourly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherHourly/weatherHourly */ "./src/modules/weatherDailyHourly/weatherHourly/weatherHourly.js");
/* harmony import */ var _weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherHourly/updateHourlyWeather */ "./src/modules/weatherDailyHourly/weatherHourly/updateHourlyWeather.js");




function weatherDailyHourly() {
  const section = document.createElement('section');
  const dailyDiv = document.createElement('div');

  section.classList.add('weather-daily-hourly');
  dailyDiv.classList.add('weather-daily', 'invisible');

  for (let i = 0; i < 7; i += 1) {
    dailyDiv.append((0,_weatherDaily_dailyCard__WEBPACK_IMPORTED_MODULE_0__["default"])());
  }

  section.append(
    (0,_weatherHourly_weatherHourly__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    dailyDiv,
  );

  // adding listeners to hourly cards
  const hourlyCards = section.querySelectorAll('.daily-card');
  hourlyCards.forEach((card, i) => {
    card.addEventListener('click', (e) => {
      const allCards = document.querySelectorAll('.daily-card');
      allCards.forEach((thisCard) => thisCard.classList.remove('active'));
      const thisCard = e.currentTarget;
      thisCard.classList.add('active');
      const startFromIndex = i * 24;
      (0,_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(null, startFromIndex);
    });
  });
  return section;
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherDaily/dailyCard.js":
/*!******************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherDaily/dailyCard.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dailyCard)
/* harmony export */ });
/* harmony import */ var _changeUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../changeUnits */ "./src/modules/changeUnits.js");


function dailyCard() {
  const card = document.createElement('div');
  card.classList.add('daily-card');

  card.append(
    weatherDiv(),
    precipitations(),
    wind(),
    sunriseSunset(),
    uvIndex(),
  );

  return card;
}

function weatherDiv() {
  const div = document.createElement('div');
  const day = document.createElement('p');
  const weatherIcon = document.createElement('div');
  const tempMaxDiv = document.createElement('div');
  const tempMax = document.createElement('p');
  const tempMaxUnit = document.createElement('input');
  const tempMinDiv = document.createElement('div');
  const tempMin = document.createElement('p');
  const tempMinUnit = document.createElement('input');
  const weatherDescription = document.createElement('p');

  div.classList.add('daily-weather');
  day.classList.add('daily-day');
  weatherIcon.classList.add('weather-current-icon', 'daily-weather-icon');
  tempMaxDiv.classList.add('daily-temp-max-div');
  tempMax.classList.add('daily-temp-max', 'temperature-number');
  tempMaxUnit.classList.add('daily-temp-max-unit', 'gauge-unit', 'temperature-unit');
  tempMaxUnit.type = 'checkbox';
  tempMinDiv.classList.add('daily-temp-min-div');
  tempMin.classList.add('daily-temp-min', 'temperature-number');
  tempMinUnit.classList.add('daily-temp-min-unit', 'gauge-unit', 'temperature-unit');
  tempMinUnit.type = 'checkbox';
  weatherDescription.classList.add('daily-weather-description');

  day.innerText = 'day placeholder';
  tempMax.innerText = '000.0';
  tempMin.innerText = '000.0';
  weatherDescription.innerText = 'weather description';

  [tempMaxUnit, tempMinUnit].forEach((element) => {
    element.addEventListener('click', _changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });

  tempMaxDiv.append(tempMax, tempMaxUnit);
  tempMinDiv.append(tempMin, tempMinUnit);
  div.append(
    day,
    weatherIcon,
    tempMaxDiv,
    tempMinDiv,
    weatherDescription,
  );

  return div;
}

function precipitations() {
  const div = document.createElement('div');
  const icon = document.createElement('div');
  const quantity = document.createElement('p');
  const hours = document.createElement('p');

  div.classList.add('daily-precipitations');
  icon.classList.add('daily-precipitations-icon');
  quantity.classList.add('daily-precipitation-quantity');
  hours.classList.add('daily-precipitations-hours');

  div.title = 'Quantity and total hours of precipitations';
  quantity.innerText = '000mm';
  hours.innerText = '0:00hs';

  div.append(icon, quantity, hours);

  return div;
}

function wind() {
  const div = document.createElement('div');
  const icon = document.createElement('div');
  const speed = document.createElement('p');
  const speedUnit = document.createElement('input');

  div.classList.add('daily-wind');
  icon.classList.add('daily-wind-icon');
  speed.classList.add('daily-wind-speed', 'speed-number');
  speedUnit.classList.add('daily-wind-speed-unit', 'gauge-unit', 'wind-speed-unit');
  speedUnit.type = 'checkbox';

  div.title = 'Max wind speed';
  speed.innerText = '00';

  speedUnit.addEventListener('change', _changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]);

  div.append(icon, speed, speedUnit);

  return div;
}

function sunriseSunset() {
  const div = document.createElement('div');
  const icon = document.createElement('div');
  const sunriseHour = document.createElement('p');
  const sunsetHour = document.createElement('p');

  div.classList.add('daily-sunrise-sunset');
  icon.classList.add('daily-sunrise-sunset-icon');
  sunriseHour.classList.add('daily-sunrise');
  sunsetHour.classList.add('daily-sunset');

  div.title = 'Sunrise and sunset';
  sunriseHour.innerText = '00:00hs';
  sunsetHour.innerText = '00:00hs';

  div.append(icon, sunriseHour, sunsetHour);

  return div;
}

function uvIndex() {
  const div = document.createElement('div');
  const icon = document.createElement('div');
  const index = document.createElement('p');
  const uvPara = document.createElement('p');

  div.classList.add('daily-uv');
  icon.classList.add('daily-uv-icon');
  index.classList.add('daily-uv-index');
  uvPara.classList.add('daily-uv-text');

  div.title = 'UV index';
  index.innerText = '00';
  uvPara.innerText = 'UV';

  div.append(icon, index, uvPara);

  return div;
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherDaily/updateDailyWeather.js":
/*!***************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherDaily/updateDailyWeather.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDailyWeather)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getHours/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getMinutes/index.js");
/* harmony import */ var _weathercode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../weathercode */ "./src/modules/weathercode.js");
/* harmony import */ var _weatherIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../weatherIcon */ "./src/modules/weatherIcon.js");
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../unitConverter */ "./src/modules/unitConverter.js");





const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateDailyWeather(data) {
  // icon and temps
  const section = document.querySelector('.weather-daily');
  const days = section.querySelectorAll('.daily-day');
  const icons = section.querySelectorAll('.daily-weather-icon');
  const tempsMax = section.querySelectorAll('.daily-temp-max');
  const tempsMin = section.querySelectorAll('.daily-temp-min');
  const descriptions = section.querySelectorAll('.daily-weather-description');
  // extra info
  const precipitationQuantities = section.querySelectorAll('.daily-precipitation-quantity');
  const precipitationHours = section.querySelectorAll('.daily-precipitations-hours');
  const windSpeeds = section.querySelectorAll('.daily-wind-speed');
  const sunrises = section.querySelectorAll('.daily-sunrise');
  const sunsets = section.querySelectorAll('.daily-sunset');
  const uvIndexes = section.querySelectorAll('.daily-uv-index');

  section.classList.remove('invisible');

  days.forEach((day, i) => {
    day.innerText = i === 0 ? 'Today' : `${dayNames[(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), i))]} ${(0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), i))}`;
  });
  icons.forEach((icon, i) => {
    const iconParts = (0,_weathercode__WEBPACK_IMPORTED_MODULE_0__["default"])(data.weathercodes[i]).icon;
    icon.style.backgroundImage = (0,_weatherIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(iconParts);
  });
  tempsMax.forEach((temp, i) => {
    const temperature = data.tempsMax[i];
    temp.innerText = temperature;
    temp.dataset.celsius = temperature;
    temp.dataset.fahrenheit = (0,_unitConverter__WEBPACK_IMPORTED_MODULE_2__.celsiusToFahrenheit)(temperature);
  });
  tempsMin.forEach((apparent, i) => {
    const temperature = data.tempsMin[i];
    apparent.innerText = temperature;
    apparent.dataset.celsius = temperature;
    apparent.dataset.fahrenheit = (0,_unitConverter__WEBPACK_IMPORTED_MODULE_2__.celsiusToFahrenheit)(temperature);
  });
  descriptions.forEach((description, i) => {
    const weather = (0,_weathercode__WEBPACK_IMPORTED_MODULE_0__["default"])(data.weathercodes[i]);
    const type = weather.weather;
    const hasIntensity = weather.intensity !== undefined;
    const intensity = `, ${weather.intensity}`;
    description.innerText = `${type}${hasIntensity ? intensity : ''}`;
  });
  precipitationQuantities.forEach((quantity, i) => {
    quantity.innerText = `${data.precipitationQuantities[i]}mm`;
  });
  precipitationHours.forEach((hours, i) => {
    hours.innerText = `${data.precipitationHours[i]}hs`;
  });
  windSpeeds.forEach((speed, i) => {
    const windSpeed = parseInt(data.windSpeeds[i], 10);
    speed.innerText = windSpeed;
    speed.dataset.kilometers = windSpeed;
    speed.dataset.miles = parseInt((0,_unitConverter__WEBPACK_IMPORTED_MODULE_2__.kilometersToMiles)(windSpeed), 10);
  });
  sunrises.forEach((sunrise, i) => {
    sunrise.innerText = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(data.sunrises[i]))}:${(0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(data.sunrises[i]))}hs`;
  });
  sunsets.forEach((sunset, i) => {
    sunset.innerText = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(data.sunsets[i]))}:${(0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(data.sunsets[i]))}hs`;
  });
  uvIndexes.forEach((uv, i) => {
    uv.innerText = data.uvIndexes[i] === null ? '-' : data.uvIndexes[i];
  });
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/createChartDetails.js":
/*!****************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/createChartDetails.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createChartDetails)
/* harmony export */ });
function createChartDetails() {
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('chart-details-div', 'hidden');

  const elements = [
    {
      class: 'temp',
      hasSymbol: true,
      text: 'Temperature: ',
      value: '0',
      unit: '°C',
    },
    {
      class: 'apparent',
      hasSymbol: true,
      text: 'Feels like: ',
      value: '0',
      unit: '°C',
    },
    {
      class: 'wind',
      hasSymbol: true,
      text: 'Wind: ',
      value: '0',
      unit: 'km/h',
    },
    {
      class: 'humidity',
      hasSymbol: true,
      text: 'Humidity: ',
      value: '0',
      unit: '%',
    },
    {
      class: 'weathercode',
      text: 'Weather: ',
      value: 'clear',
    },
  ];

  for (let i = 0; i < elements.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add(`chart-details-${elements[i].class}`);

    if (elements[i]?.hasSymbol) {
      const symbol = document.createElement('div');
      symbol.classList.add('chart-details-symbol', `chart-details-symbol-${elements[i].class}`);
      div.append(symbol);
    }

    const itemPara = document.createElement('p');
    itemPara.classList.add(`chart-details-para-${elements[i].class}`);

    const itemText = document.createElement('span');
    itemText.classList.add(`chart-details-text-${elements[i].class}`);
    itemText.innerText = elements[i].text;
    itemPara.append(itemText);

    const value = document.createElement('span');
    value.classList.add(`chart-details-value-${elements[i].class}`);
    value.innerText = elements[i].value;
    itemPara.append(value);

    if (elements[i]?.unit) {
      const unit = document.createElement('span');
      unit.classList.add(`chart-details-unit-${elements[i].class}`);
      unit.innerText = elements[i].unit;
      itemPara.append(unit);
    }

    div.append(itemPara);
    detailsDiv.append(div);
  }

  return detailsDiv;
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/createChartLineGroup.js":
/*!******************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/createChartLineGroup.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createChartLineGroup)
/* harmony export */ });
function createChartLineGroup(className, vertexImage, unitSymbol, unitType) {
  const svgNs = 'http://www.w3.org/2000/svg';
  const chartGroup = document.createElementNS(svgNs, 'g');
  const chart = document.createElementNS(svgNs, 'path');
  const chartNumbers = [];
  const chartVertices = [];

  if (unitSymbol !== undefined && unitType !== undefined) {
    for (let i = 0; i <= 24; i += 1) {
      const values = document.createElementNS(svgNs, 'text');
      const valuesNumber = document.createElementNS(svgNs, 'tspan');
      const valuesSymbol = document.createElementNS(svgNs, 'tspan');
      const numbersClasses = [`${className}-chart`, unitType];
      values.setAttribute('x', 0);
      values.setAttribute('y', 0);
      values.setAttribute('text-anchor', 'middle');
      values.classList.add(`${className}-chart-text`);
      valuesNumber.classList.add(...numbersClasses);
      valuesNumber.textContent = '0';
      valuesSymbol.textContent = `${unitSymbol}`;
      values.append(valuesNumber, valuesSymbol);
      chartNumbers.push(values);
    }
  }

  for (let i = 0; i <= 24; i += 1) {
    const vertex = document.createElementNS(svgNs, 'image');
    vertex.classList.add(`${className}-chart-vertex`);
    vertex.setAttribute('width', 20);
    vertex.setAttribute('href', vertexImage);
    vertex.setAttribute('height', 20);
    vertex.setAttribute('x', 500);
    vertex.setAttribute('y', 500);
    vertex.dataset.hidden = true;
    chartVertices.push(vertex);
  }

  chartGroup.classList.add('hourly-chart-group', `${className}-chart-group`);
  chart.classList.add(`hourly-chart-${className}`);

  chartGroup.append(chart, ...chartNumbers, ...chartVertices);

  return chartGroup;
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/createWeatherIcons.js":
/*!****************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/createWeatherIcons.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWeatherIcons)
/* harmony export */ });
/* harmony import */ var _hourlyDetailHover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hourlyDetailHover */ "./src/modules/weatherDailyHourly/weatherHourly/hourlyDetailHover.js");


function createWeatherIcons() {
  const div = document.createElement('div');
  const imagesAndHover = [];
  for (let i = 0; i < 23; i += 1) {
    const img = document.createElement('div');
    img.classList.add('chart-weather-icon');
    imagesAndHover.push(img);
    img.dataset.pointed = i + 1;
    img.addEventListener('mouseenter', _hourlyDetailHover__WEBPACK_IMPORTED_MODULE_0__.showHourlyDetail);
    img.addEventListener('mousemove', _hourlyDetailHover__WEBPACK_IMPORTED_MODULE_0__.positionHourlyDetail);
    img.addEventListener('mouseleave', _hourlyDetailHover__WEBPACK_IMPORTED_MODULE_0__.hideHourlyDetail);
  }

  div.classList.add('chart-weather-icons-div');

  div.append(...imagesAndHover);

  return div;
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/emptyChartPositions.js":
/*!*****************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/emptyChartPositions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyChart": () => (/* binding */ emptyChart),
/* harmony export */   "emptyChartVertices": () => (/* binding */ emptyChartVertices)
/* harmony export */ });
function emptyChart(domElement, positionsX, height) {
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos;
    drawTemp += ` ${lineCommand} ${posX} ${height}`;
  });
  domElement.setAttribute('d', drawTemp);
}

function emptyChartVertices(domElements, positionsX, height) {
  domElements.forEach((vertex, i) => {
    vertex.setAttribute('cx', `${positionsX[i]}`);
    vertex.setAttribute('cy', `${height}`);
  });
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/graphFunctions.js":
/*!************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/graphFunctions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNext25": () => (/* binding */ getNext25),
/* harmony export */   "hideBetween": () => (/* binding */ hideBetween),
/* harmony export */   "rangePercent": () => (/* binding */ rangePercent),
/* harmony export */   "rangePercentToPixels": () => (/* binding */ rangePercentToPixels)
/* harmony export */ });
function rangePercent(min, max, target) {
  const percentRange = ((target - min) / (max - min)) * 100;
  return parseFloat(parseFloat(percentRange).toFixed(1));
}
function rangePercentToPixels(percent, height) {
  const toPixels = ((percent * height) / 100);
  // invert default Y axis behavior, use base as zero, ascend going up
  return (toPixels * -1) + height;
}

function hideBetween(domElements, parentWidth) {
  let startFrom;
  let every;
  if (parentWidth < 190) {
    startFrom = 0;
    every = 0;
  } else if (parentWidth < 290) {
    startFrom = 2;
    every = 4;
  } else if (parentWidth < 400) {
    startFrom = 2;
    every = 3;
  } else if (parentWidth < 950) {
    startFrom = 1;
    every = 2;
  } else {
    startFrom = 1;
    every = -1;
  }
  domElements.forEach((element, i) => {
    if ((i + startFrom) % every !== 0) {
      element.classList.add('hidden');
      element.dataset.hidden = true;
    } else {
      element.classList.remove('hidden');
      element.dataset.hidden = false;
    }
  });
}

function getNext25(array, startFromIndex = 0) {
  const newArray = [];
  for (let i = 0; i < 25; i += 1) {
    newArray.push(array[i + startFromIndex]);
  }

  return newArray;
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/hourlyDetailHover.js":
/*!***************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/hourlyDetailHover.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideHourlyDetail": () => (/* binding */ hideHourlyDetail),
/* harmony export */   "positionHourlyDetail": () => (/* binding */ positionHourlyDetail),
/* harmony export */   "showHourlyDetail": () => (/* binding */ showHourlyDetail)
/* harmony export */ });
/* harmony import */ var _weathercode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../weathercode */ "./src/modules/weathercode.js");
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../unitConverter */ "./src/modules/unitConverter.js");



let tempVertices;
let windVertices;
let humidityVertices;
let tempApparentVertices;
let detailsCard;

function showHourlyDetail() {
  const pointed = parseInt(this.dataset.pointed, 10);
  detailsCard = document.querySelector('.chart-details-div');
  detailsCard.classList.remove('hidden');
  // unit checkboxes
  const tempUnits = document.querySelector('.temperature-unit');
  const speedUnits = document.querySelector('.wind-speed-unit');
  // each element on card
  const temp = document.querySelector('.chart-details-value-temp');
  const tempUnit = document.querySelector('.chart-details-unit-temp');
  const apparent = document.querySelector('.chart-details-value-apparent');
  const apparentUnit = document.querySelector('.chart-details-unit-apparent');
  const wind = document.querySelector('.chart-details-value-wind');
  const windUnit = document.querySelector('.chart-details-unit-wind');
  const humidity = document.querySelector('.chart-details-value-humidity');
  const weather = document.querySelector('.chart-details-value-weathercode');
  // wind icon, for rotation
  const windIcon = document.querySelector('.chart-details-symbol-wind');
  // vertices
  tempVertices = document.querySelectorAll('.temp-chart-vertex');
  windVertices = document.querySelectorAll('.wind-chart-vertex');
  humidityVertices = document.querySelectorAll('.humidity-chart-vertex');
  tempApparentVertices = document.querySelectorAll('.temp-apparent-chart-vertex');
  // weather description
  const weatherType = (0,_weathercode__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(this.dataset.weathercode, 10)).weather;
  const weatherIntensity = (0,_weathercode__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(this.dataset.weathercode, 10))?.intensity;

  temp.innerText = tempUnits.checked
    ? (0,_unitConverter__WEBPACK_IMPORTED_MODULE_1__.celsiusToFahrenheit)(this.dataset.temp) : this.dataset.temp;
  tempUnit.innerText = tempUnits.checked ? '°F' : '°C';
  apparent.innerText = tempUnits.checked
    ? (0,_unitConverter__WEBPACK_IMPORTED_MODULE_1__.celsiusToFahrenheit)(this.dataset.apparent) : this.dataset.apparent;
  apparentUnit.innerText = tempUnits.checked ? '°F' : '°C';
  wind.innerText = speedUnits.checked ? (0,_unitConverter__WEBPACK_IMPORTED_MODULE_1__.kilometersToMiles)(this.dataset.wind) : this.dataset.wind;
  windUnit.innerText = speedUnits.checked ? ' mph' : ' km/h';
  humidity.innerText = this.dataset.humidity;
  weather.innerText = `${weatherType}${weatherIntensity ? `, ${weatherIntensity}` : ''}`;

  windIcon.style.rotate = `${this.dataset.windDirection}deg`;

  const allVertices = [tempVertices, windVertices, humidityVertices, tempApparentVertices];
  allVertices.forEach((vertices) => {
    vertices.forEach((vertex, i) => {
      if (pointed === i) {
        vertex.classList.remove('hidden');
      } else {
        vertex.classList.add('hidden');
      }
    });
  });
}

function positionHourlyDetail(e) {
  detailsCard = document.querySelector('.chart-details-div');
  const hourlyParent = e.target.closest('.chart-weather-icons-div');
  const detailsCardWidth = detailsCard.clientWidth;
  const hourlyParentWidth = hourlyParent.clientWidth;
  const mouseX = e.layerX;
  const mouseY = e.layerY;
  const pixelsBeforeBorder = 20;
  const distanceFromCursor = 5;
  const borderRadius = 15;
  const isOverflowing = mouseX + (detailsCardWidth + pixelsBeforeBorder) > hourlyParentWidth;
  detailsCard.style.left = `${mouseX}px`;
  detailsCard.style.top = `${mouseY}px`;
  detailsCard.style.transform = isOverflowing
    ? `translate(calc(-100% - ${distanceFromCursor}px), calc(-100% - ${distanceFromCursor}px))`
    : `translate(${distanceFromCursor}px, calc(-100% - ${distanceFromCursor}px))`;
  detailsCard.style.borderRadius = isOverflowing
    ? `${borderRadius}px ${borderRadius}px 0px ${borderRadius}px`
    : `${borderRadius}px ${borderRadius}px ${borderRadius}px 0px`;
}

function hideHourlyDetail() {
  detailsCard.classList.add('hidden');
  const allVertices = [tempVertices, windVertices, humidityVertices, tempApparentVertices];
  allVertices.forEach((vertices) => {
    vertices.forEach((vertex) => {
      if (vertex.dataset.hidden === 'true') {
        vertex.classList.add('hidden');
      } else {
        vertex.classList.remove('hidden');
      }
    });
  });
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/positionLinesAndHours.js":
/*!*******************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/positionLinesAndHours.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ positionLinesAndHours)
/* harmony export */ });
/* harmony import */ var _graphFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphFunctions */ "./src/modules/weatherDailyHourly/weatherHourly/graphFunctions.js");


function positionLinesAndHours(hours, positionsX, textSpace, width, height) {
  // repeat first value for first hour on missing 8th day
  if (hours.at(-1) === undefined) {
    const firstHour = hours[0];
    hours[hours.length - 1] = firstHour;
  }
  const startsPastZero = new Date(hours[0]).getHours() !== 0;
  const hourLines = document.querySelectorAll('.chart-line-hour');
  const baseLine = document.querySelector('.chart-line-base');
  const hoursTexts = document.querySelectorAll('.hours-chart-text');
  const hoursNumbers = document.querySelectorAll('.hours-chart-numbers');
  // position lines
  baseLine.setAttribute('x1', `${0}`);
  baseLine.setAttribute('y1', `${height - (textSpace / 2)}`);
  baseLine.setAttribute('x2', `${width}`);
  baseLine.setAttribute('y2', `${height - (textSpace / 2)}`);

  hourLines.forEach((line, i) => {
    const positionX = positionsX[i];
    const localHour = new Date(hours[i]).getHours();
    const isZeroHour = startsPastZero && localHour % 24 === 0;
    let lineLength = 4;
    let startFrom;
    let every;
    if (width < 190) {
      startFrom = 0;
      every = 0;
    } else if (width < 290) {
      startFrom = 2;
      every = 4;
    } else if (width < 400) {
      startFrom = 2;
      every = 3;
    } else if (width < 950) {
      startFrom = 1;
      every = 2;
    } else {
      startFrom = 1;
      every = -1;
    }
    if ((i + startFrom) % every === 0) lineLength = 10;
    if (isZeroHour) lineLength = 30;
    line.setAttribute('x1', `${positionX}`);
    line.setAttribute('y1', `${height - (textSpace / 2) + (isZeroHour ? 10 : 0)}`);
    line.setAttribute('x2', `${positionX}`);
    line.setAttribute('y2', `${height - (textSpace / 2) - lineLength}`);
  });
  // position hour text
  hoursTexts.forEach((text, i) => {
    const textMargin = 1;
    text.setAttribute('x', `${positionsX[i]}`);
    text.setAttribute('y', `${height - textMargin}`);
  });
  (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.hideBetween)(hoursTexts, width);
  // add hour numbers
  hoursNumbers.forEach((hour, i) => {
    const thisHour = new Date(hours[i]).getHours();
    hour.textContent = thisHour;
  });
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/rotateChartVertices.js":
/*!*****************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/rotateChartVertices.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rotateChartVertices)
/* harmony export */ });
function rotateChartVertices(vertices, angles) {
  vertices.forEach((vertex, i) => {
    vertex.style.rotate = `${angles[i]}deg`;
  });
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/updateChartHoverDataset.js":
/*!*********************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/updateChartHoverDataset.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateChartHoverDataset)
/* harmony export */ });
function updateChartHoverDataset(
  temps,
  apparents,
  windSpeeds,
  windDirectons,
  humidity,
  weathercodes,
) {
  const chartHover = document.querySelectorAll('.chart-weather-icon');
  // removing unnecesary first and last elements
  [temps, apparents, windSpeeds, humidity, weathercodes]
    .forEach((data) => {
      data.shift();
      data.pop();
    });
  chartHover.forEach((item, i) => {
    // as the first div starts from the 2nd mark, the first element is discarded
    item.dataset.temp = temps[i];
    item.dataset.apparent = apparents[i];
    item.dataset.wind = windSpeeds[i];
    item.dataset.windDirection = windDirectons[i];
    item.dataset.humidity = humidity[i];
    item.dataset.weathercode = weathercodes[i];
  });
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/updateChartIcons.js":
/*!**************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/updateChartIcons.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateChartIcons)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/setHours/index.js");
/* harmony import */ var _weatherIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../weatherIcon */ "./src/modules/weatherIcon.js");
/* harmony import */ var _weathercode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../weathercode */ "./src/modules/weathercode.js");




function updateChartIcons(
  next25Weathercodes,
  sunrise,
  sunset,
  next25Hours,
  width,
) {
  const iconsDiv = document.querySelector('.chart-weather-icons-div');
  const icons = document.querySelectorAll('.chart-weather-icon');
  let previousWeathercode;

  iconsDiv.style.width = `${width}px`;

  icons.forEach((icon, i) => {
    const iconWidth = width / 23;
    const currentWeathercode = next25Weathercodes[i + 1];
    const iconParts = (0,_weathercode__WEBPACK_IMPORTED_MODULE_1__["default"])(currentWeathercode).icon;
    if (i === 0) icon.style.marginLeft = `${iconWidth / 2}px`;
    if (i === icons.length - 1) icon.style.marginRight = `${iconWidth / 2}px`;

    // use icon only if it's different from the previous one
    if (currentWeathercode !== previousWeathercode) {
      icon.style.backgroundImage = (0,_weatherIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(
        iconParts,
        new Date(next25Hours[i + 1]),
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(next25Hours[i + 1]), new Date(sunrise).getHours()),
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(next25Hours[i + 1]), new Date(sunset).getHours()),
      );
    } else {
      icon.style.backgroundImage = 'none';
    }

    previousWeathercode = currentWeathercode;
  });
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/updateChartLine.js":
/*!*************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/updateChartLine.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateChartLine)
/* harmony export */ });
/* harmony import */ var _graphFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphFunctions */ "./src/modules/weatherDailyHourly/weatherHourly/graphFunctions.js");
/* harmony import */ var _valueAdjust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueAdjust */ "./src/modules/valueAdjust.js");
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../unitConverter */ "./src/modules/unitConverter.js");




function updateChartLine(
  values,
  positionsX,
  chartsHeight,
  hours,
  textSpace,
  width,
  className,
  unitType,
  fixedMinValue,
  fixedMaxValue,
) {
  // repeat previos value for missing 8th day data at 0hs
  if (values.at(-1) === undefined) values[values.length - 1] = values.at(-2);
  const chart = document.querySelector(`.hourly-chart-${className}`);
  const chartVertices = document.querySelectorAll(`.${className}-chart-vertex`);
  const chartTexts = document.querySelectorAll(`.${className}-chart-text`);
  const chartNumbers = document.querySelectorAll(`.${className}-chart-text ${unitType}`);
  const positionsY = [];
  // set values for vertex vertical positions
  for (let i = 0; i <= hours; i += 1) {
    const currentValue = parseFloat(values[i]);
    positionsY.push(currentValue);
  }
  const minValue = typeof fixedMinValue === 'number' ? fixedMinValue : positionsY.reduce((min, current) => (min < current ? min : current));
  const maxValue = typeof fixedMaxValue === 'number' ? fixedMaxValue : positionsY.reduce((max, current) => (max > current ? max : current));
  // turn values to pixels
  const positionsToPixels = positionsY.map((value) => {
    const percent = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.rangePercent)(minValue, maxValue, value);
    return (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.rangePercentToPixels)(percent, chartsHeight);
  });
  // use values on draw
  let drawChart = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos;
    const posY = positionsToPixels[i];
    drawChart += ` ${lineCommand} ${posX} ${posY + (textSpace / 2)}`;
  });

  chart.setAttribute('d', drawChart);

  if (className === 'temp') {
  // position the numbers on each vertex
    chartTexts.forEach((text, i) => {
      text.setAttribute('x', positionsX[i]);
      text.setAttribute('y', positionsToPixels[i] + (textSpace / 4));
    });
    (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.hideBetween)(chartTexts, width);
    chartNumbers.forEach((number, i) => {
      (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_1__["default"])(number, number.textContent, values[i], 10);
      if (unitType === '.temperature-number') {
        number.dataset.celsius = values[i];
        number.dataset.fahrenheit = (0,_unitConverter__WEBPACK_IMPORTED_MODULE_2__.celsiusToFahrenheit)(values[i]);
      } else if (unitType === '.speed-number') {
        number.dataset.kilometers = values[i];
        number.dataset.miles = (0,_unitConverter__WEBPACK_IMPORTED_MODULE_2__.kilometersToMiles)(values[i]);
      }
    });
  }

  // position vertices
  chartVertices.forEach((vertex, i) => {
    const vertexWidth = vertex.getAttribute('width');
    const vertexHeight = vertex.getAttribute('height');
    const vertexX = positionsX[i] - (vertexWidth / 2);
    const vertexY = (positionsToPixels[i] + (textSpace / 2)) - (vertexHeight / 2);
    vertex.setAttribute('x', vertexX);
    vertex.setAttribute('y', vertexY);
  });
  if (className === 'temp') {
    (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.hideBetween)(chartVertices, width);
  } else {
    chartVertices.forEach((vertex) => vertex.classList.add('hidden'));
  }
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/updateHourlyWeather.js":
/*!*****************************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/updateHourlyWeather.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateHourlyWeather)
/* harmony export */ });
/* harmony import */ var _graphFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphFunctions */ "./src/modules/weatherDailyHourly/weatherHourly/graphFunctions.js");
/* harmony import */ var _positionLinesAndHours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positionLinesAndHours */ "./src/modules/weatherDailyHourly/weatherHourly/positionLinesAndHours.js");
/* harmony import */ var _emptyChartPositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emptyChartPositions */ "./src/modules/weatherDailyHourly/weatherHourly/emptyChartPositions.js");
/* harmony import */ var _updateChartLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateChartLine */ "./src/modules/weatherDailyHourly/weatherHourly/updateChartLine.js");
/* harmony import */ var _updateChartIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateChartIcons */ "./src/modules/weatherDailyHourly/weatherHourly/updateChartIcons.js");
/* harmony import */ var _updateChartHoverDataset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateChartHoverDataset */ "./src/modules/weatherDailyHourly/weatherHourly/updateChartHoverDataset.js");
/* harmony import */ var _rotateChartVertices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rotateChartVertices */ "./src/modules/weatherDailyHourly/weatherHourly/rotateChartVertices.js");








let storedData;
let storedStartingIndex;

function updateHourlyWeather(data, startFromIndex) {
  // prevent error on resizing without chart loaded
  if (data === undefined && storedData === undefined) return;
  // store arguments for later use without passing data
  if (!data) data = storedData;
  storedData = data;
  if (startFromIndex === undefined) startFromIndex = storedStartingIndex;
  storedStartingIndex = startFromIndex;

  const parent = document.querySelector('.weather-hourly');
  const chartTemp = document.querySelector('.hourly-chart-temp');
  const chartTempVertices = document.querySelectorAll('.temp-chart-vertex');
  const windChartVertices = document.querySelectorAll('.wind-chart-vertex');
  const hoursUsed = 24;
  // vertical space reserved on pixels for hours and temp values
  const textSpace = 45;
  const width = parseInt(parent.clientWidth, 10);
  const height = parseInt(parent.clientHeight, 10);
  const heightTempsWind = ((height * 80) / 100) - textSpace;
  const heightsHumidity = height - textSpace;
  const positionsX = [0];
  // get the necessary data for chart
  const hours = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.hours, startFromIndex);
  const temps = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.temps, startFromIndex);
  const apparents = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.apparent, startFromIndex);
  const minTempsApparents = temps.concat(apparents)
    .reduce((min, current) => (min < current ? min : current));
  const maxTempsApparents = temps.concat(apparents)
    .reduce((max, current) => (max > current ? max : current));
  const windSpeeds = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.windspeed, startFromIndex);
  const windDirection = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.windDirection, startFromIndex);
  const humidity = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.humidity, startFromIndex);
  const weathercodes = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.weathercode, startFromIndex);
  const { sunrise } = data;
  const { sunset } = data;

  parent.classList.remove('invisible');
  // set values for vertex horizontal positions
  for (let i = 0; i < hoursUsed; i += 1) {
    const currentValue = (width / (hoursUsed)) * (i + 1);
    positionsX.push(currentValue);
  }
  // if there's no temp chart drawn, an empty one (values at 0) will be placed
  if (!chartTemp.getAttribute('d')) {
    (0,_emptyChartPositions__WEBPACK_IMPORTED_MODULE_2__.emptyChart)(chartTemp, positionsX, heightTempsWind);
    (0,_emptyChartPositions__WEBPACK_IMPORTED_MODULE_2__.emptyChartVertices)(chartTempVertices, positionsX, heightTempsWind);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    (0,_positionLinesAndHours__WEBPACK_IMPORTED_MODULE_1__["default"])(hours, positionsX, textSpace, width, height);
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(temps, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'temp', '.temperature-number', minTempsApparents, maxTempsApparents);
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(apparents, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'temp-apparent', '.temperature-number', minTempsApparents, maxTempsApparents);
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(windSpeeds, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'wind', '.speed-number', 0);
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(humidity, positionsX, heightsHumidity, hoursUsed, textSpace, width, 'humidity', '.humidity-percent', 0, 100);
    (0,_rotateChartVertices__WEBPACK_IMPORTED_MODULE_6__["default"])(windChartVertices, windDirection);
    (0,_updateChartIcons__WEBPACK_IMPORTED_MODULE_4__["default"])(weathercodes, sunrise, sunset, hours, width);
    (0,_updateChartHoverDataset__WEBPACK_IMPORTED_MODULE_5__["default"])(temps, apparents, windSpeeds, windDirection, humidity, weathercodes);
  }, 50);
}


/***/ }),

/***/ "./src/modules/weatherDailyHourly/weatherHourly/weatherHourly.js":
/*!***********************************************************************!*\
  !*** ./src/modules/weatherDailyHourly/weatherHourly/weatherHourly.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherHourly)
/* harmony export */ });
/* harmony import */ var _createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createChartLineGroup */ "./src/modules/weatherDailyHourly/weatherHourly/createChartLineGroup.js");
/* harmony import */ var _createWeatherIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWeatherIcons */ "./src/modules/weatherDailyHourly/weatherHourly/createWeatherIcons.js");
/* harmony import */ var _createChartDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createChartDetails */ "./src/modules/weatherDailyHourly/weatherHourly/createChartDetails.js");
/* harmony import */ var _media_images_icons_chart_square_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../media/images/icons-chart/square.svg */ "./src/media/images/icons-chart/square.svg");
/* harmony import */ var _media_images_icons_chart_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../media/images/icons-chart/circle.svg */ "./src/media/images/icons-chart/circle.svg");
/* harmony import */ var _media_images_icons_chart_diamond_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../media/images/icons-chart/diamond.svg */ "./src/media/images/icons-chart/diamond.svg");
/* harmony import */ var _media_images_icons_chart_arrow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../media/images/icons-chart/arrow.svg */ "./src/media/images/icons-chart/arrow.svg");







// import vectorStar from '../../../media/images/icons-chart/star.svg';


const svgNs = 'http://www.w3.org/2000/svg';

function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS(svgNs, 'svg');
  div.classList.add('weather-hourly', 'invisible');
  svg.classList.add('hourly-chart');
  svg.append(
    createChartMarksAndHours(),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('humidity', _media_images_icons_chart_diamond_svg__WEBPACK_IMPORTED_MODULE_5__),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('temp-apparent', _media_images_icons_chart_square_svg__WEBPACK_IMPORTED_MODULE_3__),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('temp', _media_images_icons_chart_circle_svg__WEBPACK_IMPORTED_MODULE_4__, '°', 'temperature-number'),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('wind', _media_images_icons_chart_arrow_svg__WEBPACK_IMPORTED_MODULE_6__),
  );
  div.append(
    svg,
    (0,_createWeatherIcons__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    (0,_createChartDetails__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  );
  return div;
}

function createChartMarksAndHours() {
  const chartLinesGroup = document.createElementNS(svgNs, 'g');
  const horizontalLine = document.createElementNS(svgNs, 'line');
  const hoursTexts = [];

  for (let i = 0; i <= 24; i += 1) {
    const verticalLine = document.createElementNS(svgNs, 'line');
    verticalLine.classList.add('chart-line-hour');
    chartLinesGroup.append(verticalLine);
  }
  for (let i = 0; i <= 24; i += 1) {
    const hours = document.createElementNS(svgNs, 'text');
    const hoursNumber = document.createElementNS(svgNs, 'tspan');
    const hoursText = document.createElementNS(svgNs, 'tspan');
    hours.setAttribute('x', 0);
    hours.setAttribute('y', 0);
    hours.setAttribute('text-anchor', 'middle');
    hours.classList.add('hours-chart-text');
    hoursNumber.classList.add('hours-chart-numbers');
    hoursNumber.textContent = '0';
    hoursText.textContent = 'hs';
    hours.append(hoursNumber, hoursText);
    hoursTexts.push(hours);
  }
  chartLinesGroup.classList.add('chart-lines-group');
  horizontalLine.classList.add('chart-line-base');

  chartLinesGroup.append(horizontalLine, ...hoursTexts);

  return chartLinesGroup;
}


/***/ }),

/***/ "./src/modules/weatherIcon.js":
/*!************************************!*\
  !*** ./src/modules/weatherIcon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherIcon)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/setMinutes/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getMinutes/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _media_images_weather_icon_parts_clouds_high_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/weather-icon-parts/clouds-high.png */ "./src/media/images/weather-icon-parts/clouds-high.png");
/* harmony import */ var _media_images_weather_icon_parts_clouds_low_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/weather-icon-parts/clouds-low.png */ "./src/media/images/weather-icon-parts/clouds-low.png");
/* harmony import */ var _media_images_weather_icon_parts_clouds_middle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/weather-icon-parts/clouds-middle.png */ "./src/media/images/weather-icon-parts/clouds-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_drizzle_high_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/weather-icon-parts/drizzle-high.png */ "./src/media/images/weather-icon-parts/drizzle-high.png");
/* harmony import */ var _media_images_weather_icon_parts_drizzle_low_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/images/weather-icon-parts/drizzle-low.png */ "./src/media/images/weather-icon-parts/drizzle-low.png");
/* harmony import */ var _media_images_weather_icon_parts_drizzle_middle_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/images/weather-icon-parts/drizzle-middle.png */ "./src/media/images/weather-icon-parts/drizzle-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_fog_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/images/weather-icon-parts/fog.png */ "./src/media/images/weather-icon-parts/fog.png");
/* harmony import */ var _media_images_weather_icon_parts_hail_high_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media/images/weather-icon-parts/hail-high.png */ "./src/media/images/weather-icon-parts/hail-high.png");
/* harmony import */ var _media_images_weather_icon_parts_hail_low_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media/images/weather-icon-parts/hail-low.png */ "./src/media/images/weather-icon-parts/hail-low.png");
/* harmony import */ var _media_images_weather_icon_parts_ice_low_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../media/images/weather-icon-parts/ice-low.png */ "./src/media/images/weather-icon-parts/ice-low.png");
/* harmony import */ var _media_images_weather_icon_parts_ice_middle_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../media/images/weather-icon-parts/ice-middle.png */ "./src/media/images/weather-icon-parts/ice-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_ice_small_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../media/images/weather-icon-parts/ice-small.png */ "./src/media/images/weather-icon-parts/ice-small.png");
/* harmony import */ var _media_images_weather_icon_parts_moon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../media/images/weather-icon-parts/moon.png */ "./src/media/images/weather-icon-parts/moon.png");
/* harmony import */ var _media_images_weather_icon_parts_moon_clear_sky_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../media/images/weather-icon-parts/moon-clear-sky.png */ "./src/media/images/weather-icon-parts/moon-clear-sky.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_big_high_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../media/images/weather-icon-parts/rain-big-high.png */ "./src/media/images/weather-icon-parts/rain-big-high.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_big_low_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../media/images/weather-icon-parts/rain-big-low.png */ "./src/media/images/weather-icon-parts/rain-big-low.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_big_middle_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../media/images/weather-icon-parts/rain-big-middle.png */ "./src/media/images/weather-icon-parts/rain-big-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_high_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../media/images/weather-icon-parts/rain-high.png */ "./src/media/images/weather-icon-parts/rain-high.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_low_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../media/images/weather-icon-parts/rain-low.png */ "./src/media/images/weather-icon-parts/rain-low.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_middle_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../media/images/weather-icon-parts/rain-middle.png */ "./src/media/images/weather-icon-parts/rain-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_big_high_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../media/images/weather-icon-parts/snow-big-high.png */ "./src/media/images/weather-icon-parts/snow-big-high.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_big_low_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../media/images/weather-icon-parts/snow-big-low.png */ "./src/media/images/weather-icon-parts/snow-big-low.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_high_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../media/images/weather-icon-parts/snow-high.png */ "./src/media/images/weather-icon-parts/snow-high.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_low_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../media/images/weather-icon-parts/snow-low.png */ "./src/media/images/weather-icon-parts/snow-low.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_middle_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../media/images/weather-icon-parts/snow-middle.png */ "./src/media/images/weather-icon-parts/snow-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_sun_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../media/images/weather-icon-parts/sun.png */ "./src/media/images/weather-icon-parts/sun.png");
/* harmony import */ var _media_images_weather_icon_parts_sun_clear_sky_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../media/images/weather-icon-parts/sun-clear-sky.png */ "./src/media/images/weather-icon-parts/sun-clear-sky.png");
/* harmony import */ var _media_images_weather_icon_parts_thunder_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../media/images/weather-icon-parts/thunder.png */ "./src/media/images/weather-icon-parts/thunder.png");






























function weatherIcon(iconParts, localTime, sunrise, sunset) {
  // each image will be added here CSS format before returning it
  let images = '';
  // apply local minutes to city time as the API always returns 00
  let sunMoon;
  if (localTime !== undefined) {
    const cityTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_28__["default"])(new Date(localTime), (0,date_fns__WEBPACK_IMPORTED_MODULE_29__["default"])(new Date()));
    const isDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_30__["default"])(new Date(sunrise), new Date(cityTime))
    && (0,date_fns__WEBPACK_IMPORTED_MODULE_31__["default"])(new Date(sunset), new Date(cityTime));
    const isClearDay = iconParts.length === 1 && iconParts[0] === 'sunMoon';

    if (isDay) {
      sunMoon = isClearDay ? _media_images_weather_icon_parts_sun_clear_sky_png__WEBPACK_IMPORTED_MODULE_26__ : _media_images_weather_icon_parts_sun_png__WEBPACK_IMPORTED_MODULE_25__;
    } else {
      sunMoon = isClearDay ? _media_images_weather_icon_parts_moon_clear_sky_png__WEBPACK_IMPORTED_MODULE_13__ : _media_images_weather_icon_parts_moon_png__WEBPACK_IMPORTED_MODULE_12__;
    }
  } else {
    sunMoon = _media_images_weather_icon_parts_sun_png__WEBPACK_IMPORTED_MODULE_25__;
  }

  // list images so they can be called directly from a string
  const icons = {
    sunMoon,
    cloudsHigh: _media_images_weather_icon_parts_clouds_high_png__WEBPACK_IMPORTED_MODULE_0__,
    cloudsLow: _media_images_weather_icon_parts_clouds_low_png__WEBPACK_IMPORTED_MODULE_1__,
    cloudsMiddle: _media_images_weather_icon_parts_clouds_middle_png__WEBPACK_IMPORTED_MODULE_2__,
    drizzleHigh: _media_images_weather_icon_parts_drizzle_high_png__WEBPACK_IMPORTED_MODULE_3__,
    drizzleLow: _media_images_weather_icon_parts_drizzle_low_png__WEBPACK_IMPORTED_MODULE_4__,
    drizzleMiddle: _media_images_weather_icon_parts_drizzle_middle_png__WEBPACK_IMPORTED_MODULE_5__,
    fog: _media_images_weather_icon_parts_fog_png__WEBPACK_IMPORTED_MODULE_6__,
    hailHigh: _media_images_weather_icon_parts_hail_high_png__WEBPACK_IMPORTED_MODULE_7__,
    hailLow: _media_images_weather_icon_parts_hail_low_png__WEBPACK_IMPORTED_MODULE_8__,
    iceLow: _media_images_weather_icon_parts_ice_low_png__WEBPACK_IMPORTED_MODULE_9__,
    iceMiddle: _media_images_weather_icon_parts_ice_middle_png__WEBPACK_IMPORTED_MODULE_10__,
    iceSmall: _media_images_weather_icon_parts_ice_small_png__WEBPACK_IMPORTED_MODULE_11__,
    rainBigHigh: _media_images_weather_icon_parts_rain_big_high_png__WEBPACK_IMPORTED_MODULE_14__,
    rainBigLow: _media_images_weather_icon_parts_rain_big_low_png__WEBPACK_IMPORTED_MODULE_15__,
    rainBigMiddle: _media_images_weather_icon_parts_rain_big_middle_png__WEBPACK_IMPORTED_MODULE_16__,
    rainHigh: _media_images_weather_icon_parts_rain_high_png__WEBPACK_IMPORTED_MODULE_17__,
    rainLow: _media_images_weather_icon_parts_rain_low_png__WEBPACK_IMPORTED_MODULE_18__,
    rainMiddle: _media_images_weather_icon_parts_rain_middle_png__WEBPACK_IMPORTED_MODULE_19__,
    snowBigHigh: _media_images_weather_icon_parts_snow_big_high_png__WEBPACK_IMPORTED_MODULE_20__,
    snowBigLow: _media_images_weather_icon_parts_snow_big_low_png__WEBPACK_IMPORTED_MODULE_21__,
    snowHigh: _media_images_weather_icon_parts_snow_high_png__WEBPACK_IMPORTED_MODULE_22__,
    snowLow: _media_images_weather_icon_parts_snow_low_png__WEBPACK_IMPORTED_MODULE_23__,
    snowMiddle: _media_images_weather_icon_parts_snow_middle_png__WEBPACK_IMPORTED_MODULE_24__,
    thunder: _media_images_weather_icon_parts_thunder_png__WEBPACK_IMPORTED_MODULE_27__,
  };

  iconParts.forEach((part, i) => {
    const comma = `${i !== 0 ? ', ' : ''}`;
    images += `${comma}url(${icons[part]})`;
  });

  return images;
}


/***/ }),

/***/ "./src/modules/weathercode.js":
/*!************************************!*\
  !*** ./src/modules/weathercode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeathercode)
/* harmony export */ });
function getWeathercode(requestedCode) {
  /*
  * source: https://open-meteo.com/en/docs
  * WMO Weather interpretation codes (WW)
  * Code - Description
  * 0 ---------- Clear sky
  * 1, 2, 3 ---- Mainly clear, partly cloudy, and overcast
  * 45, 48 ----- Fog and depositing rime fog
  * 51, 53, 55 - Drizzle: Light, moderate, and dense intensity
  * 56, 57 ----- Freezing Drizzle: Light and dense intensity
  * 61, 63, 65 - Rain: Slight, moderate and heavy intensity
  * 66, 67 ----- Freezing Rain: Light and heavy intensity
  * 71, 73, 75 - Snow fall: Slight, moderate, and heavy intensity
  * 77 --------- Snow grains
  * 80, 81, 82 - Rain showers: Slight, moderate, and violent
  * 85, 86 ----- Snow showers slight and heavy
  * 95 * ------- Thunderstorm: Slight or moderate
  * 96, 99 * --- Thunderstorm with slight and heavy hail
  * (*) Thunderstorm forecast with hail is only available in Central Europe
  */

  const codes = [
    {
      code: 0,
      weather: 'clear sky',
      icon: ['sunMoon'],
    },
    {
      code: 1,
      weather: 'mainly clear',
      icon: ['cloudsLow', 'sunMoon'],
    },
    {
      code: 2,
      weather: 'partly cloudy',
      icon: ['cloudsMiddle', 'sunMoon'],
    },
    {
      code: 3,
      weather: 'overcast',
      icon: ['cloudsHigh'],
    },
    {
      code: 45,
      weather: 'fog',
      icon: ['fog', 'cloudsHigh'],
    },
    {
      code: 48,
      weather: 'depositing rime fog',
      icon: ['iceSmall', 'fog', 'cloudsHigh'],
    },
    {
      code: 51,
      weather: 'drizzle',
      intensity: 'light',
      icon: ['drizzleLow', 'cloudsHigh'],
    },
    {
      code: 53,
      weather: 'drizzle',
      intensity: 'moderate',
      icon: ['drizzleMiddle', 'cloudsHigh'],
    },
    {
      code: 55,
      weather: 'drizzle',
      intensity: 'dense',
      icon: ['drizzleHigh', 'cloudsHigh'],
    },
    {
      code: 56,
      weather: 'freezing drizzle',
      intensity: 'light',
      icon: ['rainDrizzleHigh', 'cloudsHigh'],
    },
    {
      code: 57,
      weather: 'freezing drizzle',
      intensity: 'dense',
      icon: ['iceMiddle', 'rainDrizzleHigh', 'cloudsHigh'],
    },
    {
      code: 61,
      weather: 'rain',
      intensity: 'slight',
      icon: ['rainLow', 'cloudsHigh'],
    },
    {
      code: 63,
      weather: 'rain',
      intensity: 'moderate',
      icon: ['rainMiddle', 'cloudsHigh'],
    },
    {
      code: 65,
      weather: 'rain',
      intensity: 'heavy',
      icon: ['rainHigh', 'cloudsHigh'],
    },
    {
      code: 66,
      weather: 'freezing rain',
      intensity: 'light',
      icon: ['iceMiddle', 'rainLow', 'cloudsHigh'],
    },
    {
      code: 67,
      weather: 'freezing rain',
      intensity: 'heavy',
      icon: ['iceMiddle', 'rainHigh', 'cloudsHigh'],
    },
    {
      code: 71,
      weather: 'snow fall',
      intensity: 'slight',
      icon: ['snowLow', 'cloudsHigh'],
    },
    {
      code: 73,
      weather: 'snow fall',
      intensity: 'moderate',
      icon: ['snowMiddle', 'cloudsHigh'],
    },
    {
      code: 75,
      weather: 'snow fall',
      intensity: 'heavy',
      icon: ['snowHigh', 'cloudsHigh'],
    },
    {
      code: 77,
      weather: 'snow grains',
      icon: ['iceLow', 'cloudsHigh'],
    },
    {
      code: 80,
      weather: 'rain showers',
      intensity: 'slight',
      icon: ['rainBigLow', 'cloudsHigh'],
    },
    {
      code: 81,
      weather: 'rain showers',
      intensity: 'moderate',
      icon: ['rainBigMiddle', 'cloudsHigh'],
    },
    {
      code: 82,
      weather: 'rain showers',
      intensity: 'violent',
      icon: ['rainBigHigh', 'cloudsHigh'],
    },
    {
      code: 85,
      weather: 'snow showers',
      intensity: 'slight',
      icon: ['snowBigLow', 'cloudsHigh'],
    },
    {
      code: 86,
      weather: 'snow showers',
      intensity: 'heavy',
      icon: ['snowBigHigh', 'cloudsHigh'],
    },
    {
      code: 95,
      weather: 'thunderstorm',
      intensity: 'slight to moderate',
      icon: ['thunder', 'rainHigh', 'cloudsHigh'],
    },
    {
      code: 96,
      weather: 'thunderstorm',
      intensity: 'slight hail',
      icon: ['hailLow', 'cloudsHigh'],
    },
    {
      code: 99,
      weather: 'thunderstorm',
      intensity: 'heavy hail',
      icon: ['hailHigh', 'cloudsHigh'],
    },
  ];

  const requested = codes.findIndex((item) => item.code === requestedCode);

  return codes[requested];
}


/***/ }),

/***/ "./src/media/images/background/curtain-fold.png":
/*!******************************************************!*\
  !*** ./src/media/images/background/curtain-fold.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e47447adc46b2fe54e9.png";

/***/ }),

/***/ "./src/media/images/background/window-overlay.png":
/*!********************************************************!*\
  !*** ./src/media/images/background/window-overlay.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f3062a78601538bfd0d.png";

/***/ }),

/***/ "./src/media/images/icons-chart/arrow.svg":
/*!************************************************!*\
  !*** ./src/media/images/icons-chart/arrow.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c15b10eb1021668b472.svg";

/***/ }),

/***/ "./src/media/images/icons-chart/circle.svg":
/*!*************************************************!*\
  !*** ./src/media/images/icons-chart/circle.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12996094d1c79e989918.svg";

/***/ }),

/***/ "./src/media/images/icons-chart/diamond.svg":
/*!**************************************************!*\
  !*** ./src/media/images/icons-chart/diamond.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "480dfcc17bc24658770e.svg";

/***/ }),

/***/ "./src/media/images/icons-chart/square.svg":
/*!*************************************************!*\
  !*** ./src/media/images/icons-chart/square.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6cbd453f18f2bf71709.svg";

/***/ }),

/***/ "./src/media/images/icons/search-magnifier.svg":
/*!*****************************************************!*\
  !*** ./src/media/images/icons/search-magnifier.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cef198a380c8e5858e6e.svg";

/***/ }),

/***/ "./src/media/images/weather-daily/precipitations.png":
/*!***********************************************************!*\
  !*** ./src/media/images/weather-daily/precipitations.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d0b7524016a82321ece.png";

/***/ }),

/***/ "./src/media/images/weather-daily/sunrise-sunset.png":
/*!***********************************************************!*\
  !*** ./src/media/images/weather-daily/sunrise-sunset.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ff97efe53e09e17e9a4.png";

/***/ }),

/***/ "./src/media/images/weather-daily/uv-index.png":
/*!*****************************************************!*\
  !*** ./src/media/images/weather-daily/uv-index.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a2deae16ceb72299c46.png";

/***/ }),

/***/ "./src/media/images/weather-daily/wind.png":
/*!*************************************************!*\
  !*** ./src/media/images/weather-daily/wind.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d4a8b6cef51617a4be8.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/clouds-high.png":
/*!*************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/clouds-high.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b65ef08db51bc06833f.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/clouds-low.png":
/*!************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/clouds-low.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "802e67e6e2caf9e73f20.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/clouds-middle.png":
/*!***************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/clouds-middle.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57321064ea2dfd06a495.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/drizzle-high.png":
/*!**************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/drizzle-high.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d9a6894227a6b9caf73.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/drizzle-low.png":
/*!*************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/drizzle-low.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb1b20b710aea80e515b.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/drizzle-middle.png":
/*!****************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/drizzle-middle.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bff95857bce8c9d9272.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/fog.png":
/*!*****************************************************!*\
  !*** ./src/media/images/weather-icon-parts/fog.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c0d464c46fefbf663e9.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/hail-high.png":
/*!***********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/hail-high.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df8fd109d323d829d35f.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/hail-low.png":
/*!**********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/hail-low.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d795891fbef3a03e3f67.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/ice-low.png":
/*!*********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/ice-low.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e690c62dc206fe1de7b2.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/ice-middle.png":
/*!************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/ice-middle.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0607aaf399b3e12facd5.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/ice-small.png":
/*!***********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/ice-small.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5168ee2bba7aa557e63.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/moon-clear-sky.png":
/*!****************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/moon-clear-sky.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f3ca07f4b2f0898338d.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/moon.png":
/*!******************************************************!*\
  !*** ./src/media/images/weather-icon-parts/moon.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69cabb7b5e4eb697a441.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/rain-big-high.png":
/*!***************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/rain-big-high.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39244ebc7f6dff0dd1c6.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/rain-big-low.png":
/*!**************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/rain-big-low.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8954283e8c331d0e470e.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/rain-big-middle.png":
/*!*****************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/rain-big-middle.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c134fdd0e00518b2e443.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/rain-high.png":
/*!***********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/rain-high.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7990e59324cb952f33de.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/rain-low.png":
/*!**********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/rain-low.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d9301bfbcf832e6231d.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/rain-middle.png":
/*!*************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/rain-middle.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21e3d57e506472ff63c3.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/snow-big-high.png":
/*!***************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/snow-big-high.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b757da79cc8490f51d2f.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/snow-big-low.png":
/*!**************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/snow-big-low.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b0b965490a4fad7f032.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/snow-high.png":
/*!***********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/snow-high.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbab85ebb229a0b3efdc.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/snow-low.png":
/*!**********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/snow-low.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fdf1e0877f7cbdc8bd4.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/snow-middle.png":
/*!*************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/snow-middle.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3db874b5492ecfe2eae.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/sun-clear-sky.png":
/*!***************************************************************!*\
  !*** ./src/media/images/weather-icon-parts/sun-clear-sky.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "447a20735dc71e6dda95.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/sun.png":
/*!*****************************************************!*\
  !*** ./src/media/images/weather-icon-parts/sun.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f7666ebeb400a3f0177.png";

/***/ }),

/***/ "./src/media/images/weather-icon-parts/thunder.png":
/*!*********************************************************!*\
  !*** ./src/media/images/weather-icon-parts/thunder.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ff81214d9e9d5ddd6b4.png";

/***/ }),

/***/ "./src/media/images/wind-compass.svg":
/*!*******************************************!*\
  !*** ./src/media/images/wind-compass.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b31b3ae19ba0aa50d21c.svg";

/***/ }),

/***/ "./node_modules/country-code-emoji/lib/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/country-code-emoji/lib/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countryCodeEmoji": () => (/* binding */ countryCodeEmoji),
/* harmony export */   "default": () => (/* binding */ src_default),
/* harmony export */   "emojiCountryCode": () => (/* binding */ emojiCountryCode)
/* harmony export */ });
const CC_REGEX = /^[a-z]{2}$/i;
const FLAG_LENGTH = 4;
const OFFSET = 127397;
function countryCodeEmoji(cc) {
  if (!CC_REGEX.test(cc)) {
    const type = typeof cc;
    throw new TypeError(`cc argument must be an ISO 3166-1 alpha-2 string, but got '${type === "string" ? cc : type}' instead.`);
  }
  const codePoints = [...cc.toUpperCase()].map((c) => c.codePointAt() + OFFSET);
  return String.fromCodePoint(...codePoints);
}
function emojiCountryCode(flag) {
  if (flag.length !== FLAG_LENGTH) {
    const type = typeof flag;
    throw new TypeError(`flag argument must be a flag emoji, but got '${type === "string" ? flag : type}' instead.`);
  }
  const codePoints = [...flag].map((c) => c.codePointAt() - OFFSET);
  return String.fromCodePoint(...codePoints);
}
var src_default = countryCodeEmoji;



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxPQUFPLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFh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QVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE9BQU8sYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtB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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsOEJBQThCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGdDQUFnQztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvYmFja2dyb3VuZC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3NlYXJjaC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckN1cnJlbnQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHkuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHlIb3VybHkuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVySG91cmx5LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0RGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0RGF5L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRIb3Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0TWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNBZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3NldEhvdXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zZXRNaW51dGVzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL2JhY2tncm91bmQuY3NzPzM2MTUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3NlYXJjaC5jc3M/MDM4MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJDdXJyZW50LmNzcz8wNzY3Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHkuY3NzPzUxNzQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseUhvdXJseS5jc3M/ZjE3OCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckhvdXJseS5jc3M/ODBmZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2JhY2tncm91bmQvYmFja2dyb3VuZFVwZGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NoYW5nZVVuaXRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2gvY2l0aWVzTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaC9tYWluTWVudUJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc2VhcmNoL3NlYXJjaENpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2gvdXBkYXRlQ29tcGxldGVXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91bml0Q29udmVydGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdmFsdWVBZGp1c3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQ3VycmVudC9iYXJBZGp1c3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQ3VycmVudC9vcGVuTG9jYXRpb25TZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQ3VycmVudC91cGRhdGVDdXJyZW50V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJDdXJyZW50L3dlYXRoZXJDdXJyZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJEYWlseUhvdXJseS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVyRGFpbHkvZGFpbHlDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJEYWlseS91cGRhdGVEYWlseVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS9jcmVhdGVDaGFydERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS9jcmVhdGVDaGFydExpbmVHcm91cC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L2NyZWF0ZVdlYXRoZXJJY29ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L2VtcHR5Q2hhcnRQb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS9ncmFwaEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L2hvdXJseURldGFpbEhvdmVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJIb3VybHkvcG9zaXRpb25MaW5lc0FuZEhvdXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJIb3VybHkvcm90YXRlQ2hhcnRWZXJ0aWNlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUNoYXJ0SG92ZXJEYXRhc2V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJIb3VybHkvdXBkYXRlQ2hhcnRJY29ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUNoYXJ0TGluZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUhvdXJseVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS93ZWF0aGVySG91cmx5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckljb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyY29kZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jb3VudHJ5LWNvZGUtZW1vamkvbGliL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL2JhY2tncm91bmQvd2luZG93LW92ZXJsYXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL2JhY2tncm91bmQvY3VydGFpbi1mb2xkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYmFja2dyb3VuZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXdpbmRvdyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGNvdXJ0YWlucyBwcm9wZXJ0aWVzICovXFxyXFxuXFxyXFxuLmJnLWN1cnRhaW5zIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjc1KTtcXHJcXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uYmFja2dyb3VuZC5yZWFkeSAuYmctY3VydGFpbnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWN1cnRhaW4ge1xcclxcbiAgLS1zZXBhcmF0aW9uLTE6IDMyJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi0yOiAyOCU7XFxyXFxuICAtLXNlcGFyYXRpb24tMzogMjMlO1xcclxcbiAgLS1zZXBhcmF0aW9uLTQ6IDE1JTtcXHJcXG4gIC0tc2VwYXJhdGlvbi01OiA1JTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5iYWNrZ3JvdW5kLnJlYWR5IC5iZy1jdXJ0YWluIHtcXHJcXG4gIC0tc2VwYXJhdGlvbi0xOiAzJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi0yOiAyJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi0zOiAwJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi00OiAtMiU7XFxyXFxuICAtLXNlcGFyYXRpb24tNTogLTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctY3VydGFpbi1sZWZ0IHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5iZy1jdXJ0YWluLXJpZ2h0IHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgc2NhbGU6IC0xIDE7XFxyXFxufVxcclxcblxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDEpIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNlcGFyYXRpb24tMSk7XFxyXFxufVxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNlcGFyYXRpb24tMik7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xcclxcbn1cXHJcXG4uYmctY3VydGFpbjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuICBsZWZ0OiB2YXIoLS1zZXBhcmF0aW9uLTMpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxOHB4KTtcXHJcXG59XFxyXFxuLmJnLWN1cnRhaW46bnRoLW9mLXR5cGUoNCkge1xcclxcbiAgbGVmdDogdmFyKC0tc2VwYXJhdGlvbi00KTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlICsgMjRweCk7XFxyXFxufVxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDUpIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNlcGFyYXRpb24tNSk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDI5cHgpO1xcclxcbn1cXHJcXG4uYmctY3VydGFpbjpudGgtb2YtdHlwZSg2KSB7XFxyXFxuICByaWdodDogdmFyKC0tc2VwYXJhdGlvbi0xKTtcXHJcXG59XFxyXFxuLmJnLWN1cnRhaW46bnRoLW9mLXR5cGUoNykge1xcclxcbiAgcmlnaHQ6IHZhcigtLXNlcGFyYXRpb24tMik7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xcclxcbn1cXHJcXG4uYmctY3VydGFpbjpudGgtb2YtdHlwZSg4KSB7XFxyXFxuICByaWdodDogdmFyKC0tc2VwYXJhdGlvbi0zKTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlICsgMThweCk7XFxyXFxufVxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDkpIHtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zZXBhcmF0aW9uLTQpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyNHB4KTtcXHJcXG59XFxyXFxuLmJnLWN1cnRhaW46bnRoLW9mLXR5cGUoMTApIHtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zZXBhcmF0aW9uLTUpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyOXB4KTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9iYWNrZ3JvdW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osbURBQThEO0VBQzlELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLDZEQUFzRTtFQUN0RSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmFja2dyb3VuZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXdpbmRvdyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL2JhY2tncm91bmQvd2luZG93LW92ZXJsYXkucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb3VydGFpbnMgcHJvcGVydGllcyAqL1xcclxcblxcclxcbi5iZy1jdXJ0YWlucyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43NSk7XFxyXFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmJhY2tncm91bmQucmVhZHkgLmJnLWN1cnRhaW5zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5iZy1jdXJ0YWluIHtcXHJcXG4gIC0tc2VwYXJhdGlvbi0xOiAzMiU7XFxyXFxuICAtLXNlcGFyYXRpb24tMjogMjglO1xcclxcbiAgLS1zZXBhcmF0aW9uLTM6IDIzJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi00OiAxNSU7XFxyXFxuICAtLXNlcGFyYXRpb24tNTogNSU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL21lZGlhL2ltYWdlcy9iYWNrZ3JvdW5kL2N1cnRhaW4tZm9sZC5wbmcpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5iYWNrZ3JvdW5kLnJlYWR5IC5iZy1jdXJ0YWluIHtcXHJcXG4gIC0tc2VwYXJhdGlvbi0xOiAzJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi0yOiAyJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi0zOiAwJTtcXHJcXG4gIC0tc2VwYXJhdGlvbi00OiAtMiU7XFxyXFxuICAtLXNlcGFyYXRpb24tNTogLTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctY3VydGFpbi1sZWZ0IHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5iZy1jdXJ0YWluLXJpZ2h0IHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgc2NhbGU6IC0xIDE7XFxyXFxufVxcclxcblxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDEpIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNlcGFyYXRpb24tMSk7XFxyXFxufVxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNlcGFyYXRpb24tMik7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xcclxcbn1cXHJcXG4uYmctY3VydGFpbjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuICBsZWZ0OiB2YXIoLS1zZXBhcmF0aW9uLTMpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxOHB4KTtcXHJcXG59XFxyXFxuLmJnLWN1cnRhaW46bnRoLW9mLXR5cGUoNCkge1xcclxcbiAgbGVmdDogdmFyKC0tc2VwYXJhdGlvbi00KTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlICsgMjRweCk7XFxyXFxufVxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDUpIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNlcGFyYXRpb24tNSk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDI5cHgpO1xcclxcbn1cXHJcXG4uYmctY3VydGFpbjpudGgtb2YtdHlwZSg2KSB7XFxyXFxuICByaWdodDogdmFyKC0tc2VwYXJhdGlvbi0xKTtcXHJcXG59XFxyXFxuLmJnLWN1cnRhaW46bnRoLW9mLXR5cGUoNykge1xcclxcbiAgcmlnaHQ6IHZhcigtLXNlcGFyYXRpb24tMik7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpO1xcclxcbn1cXHJcXG4uYmctY3VydGFpbjpudGgtb2YtdHlwZSg4KSB7XFxyXFxuICByaWdodDogdmFyKC0tc2VwYXJhdGlvbi0zKTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlICsgMThweCk7XFxyXFxufVxcclxcbi5iZy1jdXJ0YWluOm50aC1vZi10eXBlKDkpIHtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zZXBhcmF0aW9uLTQpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyNHB4KTtcXHJcXG59XFxyXFxuLmJnLWN1cnRhaW46bnRoLW9mLXR5cGUoMTApIHtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zZXBhcmF0aW9uLTUpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyOXB4KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvc2VhcmNoLW1hZ25pZmllci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXJhZGlvdXM6IDhweDtcXHJcXG4gIC0tZmxhZy1zaXplOiAyLjI1cmVtO1xcclxcbiAgLS1tYXgtZmxhZy1zaXplOiAyLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1zZWFyY2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogMzAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGFuaW1hdGlvbjogc2VhcmNoLXJldmVhbCAxcyBjdWJpYy1iZXppZXIoLjIyLC42MSwuMzYsMSk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2VhcmNoLXJldmVhbCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTUwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0ICovXFxyXFxuXFxyXFxuLnNlYXJjaC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICAtLW1hZ25pZmllci1mb2N1cy1zaXplOiAyLjVyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tbWFnbmlmaWVyLWZvY3VzLXNpemUpICsgM3B4KTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKC4yNXJlbSArIHZhcigtLXJhZGlvdXMpKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogLjc1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1yYWRpb3VzKSAwIHZhcigtLXJhZGlvdXMpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDMwMG1zLCBiYWNrZ3JvdW5kLXBvc2l0aW9uIDMwMG1zO1xcclxcbn1cXHJcXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXHJcXG59XFxyXFxuLnNlYXJjaC1pbnB1dC5sb2FkaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGxvY2F0aW9ucyBsaXN0ICovXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLXJhZGlvdXMpICogLTEpKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNTUwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LFxcclxcbi5zZWFyY2gtcmVzdWx0LWVtcHR5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSAqIDEuMjUpIDFmcjtcXHJcXG4gIC8qIGhlaWdodDogNjVweDsgKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tbWF4LWZsYWctc2l6ZSkgKyAyMHB4KTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIsXFxyXFxuLnNlYXJjaC1yZXN1bHQ6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSAqIDEuMjUpIDAgNXB4ICNlZWU7XFxyXFxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0Omxhc3QtY2hpbGQsXFxyXFxuLnNlYXJjaC1yZXN1bHQtZW1wdHkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgdmFyKC0tcmFkaW91cyk7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0IHA6bm90KC5jb3VudHJ5LWZsYWcpIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50cnktZmxhZyxcXHJcXG4uY291bnRyeS1mbGFnLW5vbmUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uY291bnRyeS1mbGFnIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZmxhZy1zaXplKTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIgLmNvdW50cnktZmxhZyxcXHJcXG4uc2VhcmNoLXJlc3VsdDpmb2N1cyAuY291bnRyeS1mbGFnIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWF4LWZsYWctc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIGxvYWRpbmcgaWNvbiAqL1xcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHJpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMSkge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzU1NTtcXHJcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgyKSB7XFxyXFxuICBib3JkZXI6IDZweCBzb2xpZCAjNzc3O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGVhc2UtaW4gcmV2ZXJzZSBpbmZpbml0ZTtcXHJcXG4gIHNjYWxlOiA4MyU7XFxyXFxufVxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMykge1xcclxcbiAgYm9yZGVyOiA4cHggc29saWQgIzk5OTtcXHJcXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxuICBzY2FsZTogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmctaWNvbiB7XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gbWVudSBiYWNrZ3JvdW5kIGVsZW1lbnQgKi9cXHJcXG5cXHJcXG4ubWFpbi1tZW51LWJhY2tncm91bmQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGxpbmVhcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zZWFyY2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGdDQUFnQztFQUNsQztBQUNGOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIseURBQWlFO0VBQ2pFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCw2Q0FBNkM7RUFDN0Msb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw0REFBNEQ7RUFDNUQsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLDhEQUE4RDtFQUM5RCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBOztFQUVFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLCtCQUErQjtBQUNqQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLDBDQUEwQztBQUM1QztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxtREFBbUQ7RUFDbkQsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLCtDQUErQztFQUMvQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLGlDQUFpQzs7QUFFakM7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1yYWRpb3VzOiA4cHg7XFxyXFxuICAtLWZsYWctc2l6ZTogMi4yNXJlbTtcXHJcXG4gIC0tbWF4LWZsYWctc2l6ZTogMi43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktc2VhcmNoIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBhbmltYXRpb246IHNlYXJjaC1yZXZlYWwgMXMgY3ViaWMtYmV6aWVyKC4yMiwuNjEsLjM2LDEpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNlYXJjaC1yZXZlYWwge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDE1MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBpbnB1dCAqL1xcclxcblxcclxcbi5zZWFyY2gtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgLS1tYWduaWZpZXItZm9jdXMtc2l6ZTogMi41cmVtO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9tZWRpYS9pbWFnZXMvaWNvbnMvc2VhcmNoLW1hZ25pZmllci5zdmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1tYWduaWZpZXItZm9jdXMtc2l6ZSkgKyAzcHgpO1xcclxcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoLjI1cmVtICsgdmFyKC0tcmFkaW91cykpO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIHZhcigtLXJhZGlvdXMpIDAgdmFyKC0tcmFkaW91cyk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMzAwbXMsIGJhY2tncm91bmQtcG9zaXRpb24gMzAwbXM7XFxyXFxufVxcclxcbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbn1cXHJcXG4uc2VhcmNoLWlucHV0LmxvYWRpbmcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbG9jYXRpb25zIGxpc3QgKi9cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGModmFyKC0tcmFkaW91cykgKiAtMSkpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQsXFxyXFxuLnNlYXJjaC1yZXN1bHQtZW1wdHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICogMS4yNSkgMWZyO1xcclxcbiAgLyogaGVpZ2h0OiA2NXB4OyAqL1xcclxcbiAgbWluLWhlaWdodDogY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSArIDIwcHgpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpob3ZlcixcXHJcXG4uc2VhcmNoLXJlc3VsdDpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICogMS4yNSkgMCA1cHggI2VlZTtcXHJcXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6bGFzdC1jaGlsZCxcXHJcXG4uc2VhcmNoLXJlc3VsdC1lbXB0eSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCB2YXIoLS1yYWRpb3VzKTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQgcDpub3QoLmNvdW50cnktZmxhZykge1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRyeS1mbGFnLFxcclxcbi5jb3VudHJ5LWZsYWctbm9uZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZsYWcge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mbGFnLXNpemUpO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpob3ZlciAuY291bnRyeS1mbGFnLFxcclxcbi5zZWFyY2gtcmVzdWx0OmZvY3VzIC5jb3VudHJ5LWZsYWcge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tYXgtZmxhZy1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbG9hZGluZyBpY29uICovXFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcmlnaHQ6IDJweDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiBkaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgxKSB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjNTU1O1xcclxcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGJvcmRlcjogNnB4IHNvbGlkICM3Nzc7XFxyXFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgZWFzZS1pbiByZXZlcnNlIGluZmluaXRlO1xcclxcbiAgc2NhbGU6IDgzJTtcXHJcXG59XFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgzKSB7XFxyXFxuICBib3JkZXI6IDhweCBzb2xpZCAjOTk5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IGxvYWRpbmctaWNvbiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG4gIHNjYWxlOiA2MiU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9hZGluZy1pY29uIHtcXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiBtZW51IGJhY2tncm91bmQgZWxlbWVudCAqL1xcclxcblxcclxcbi5tYWluLW1lbnUtYmFja2dyb3VuZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgbGluZWFyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXR4dC1jb2xvci0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sb3ItMjogIzIyMjtcXHJcXG4gIC0tdHh0LWNvbG9yLTM6ICMzMzM7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBnZW5lcmFsIHVzZSAqL1xcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS10eHQtY29sb3ItMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbG9yLTI6ICMyMjI7XFxyXFxuICAtLXR4dC1jb2xvci0zOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgZ2VuZXJhbCB1c2UgKi9cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9zZWFyY2gtbWFnbmlmaWVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93aW5kLWNvbXBhc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tZ2F1Z2UtYm9yZGVyLXdpZHRoOiA3cHg7XFxyXFxuICAtLXVuaXQtdW5kZXJsaW5lLXdpZHRoOiAzcHg7XFxyXFxuICAtLWNvbXBhc3MtY29sb3I6IHJnYmEoNTAsIDUwLCAyNTUsIC4xMCk7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQge1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiA0MzBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY2l0eSBjaXR5IGNpdHlcXFwiXFxyXFxuICAgIFxcXCJpY29uIHRlbXAgdGVtcFxcXCJcXHJcXG4gICAgXFxcImljb24gaHVtaSB3aW5kXFxcIlxcclxcbiAgICBcXFwiY29kZSBodW1pIHdpbmRcXFwiO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjI1KSxcXHJcXG4gICAgaW5zZXQgM3B4IDNweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGNpdHkgbmFtZSAqL1xcclxcblxcclxcbi5jaXR5LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGNpdHk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIHBhZGRpbmc6IDAgLjI1cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXBhcmE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktY3VycmVudC1zZWFyY2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHRyYW5zbGF0ZTogMCAtNTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCB0b3AgcmlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAyNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktZGl2OmhvdmVyIC5jaXR5LWN1cnJlbnQtc2VhcmNoIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xcclxcbiAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaWNvbiAqL1xcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIC4yNSkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3ZWF0aGVyY29kZSAqL1xcclxcblxcclxcbi53ZWF0aGVyY29kZS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBjb2RlO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJjb2RlLXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wZXJhdHVyZSAqL1xcclxcblxcclxcbi50ZW1wLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHRlbXA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImN1cnIgdW5pdFxcXCJcXHJcXG4gICAgXFxcImZlZWwgZmVlbFxcXCI7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jdXJyZW50IHtcXHJcXG4gIGdyaWQtYXJlYTogY3VycjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaHVtaWRpdHkgKi9cXHJcXG5cXHJcXG4uaHVtaWRpdHktZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogaHVtaTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpIHNvbGlkIHJnYmEoNTAsIDUwLCAyNTUsIC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2UtcGVyY2VudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXI6IHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgc29saWQgYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGluc2V0OiBjYWxjKHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgKiAtMSk7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCAqL1xcclxcblxcclxcbi53aW5kLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHdpbmQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWNvbXBhc3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOlxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDYwJSwgdmFyKC0tY29tcGFzcy1jb2xvcikgNjElLCB2YXIoLS1jb21wYXNzLWNvbG9yKSA2OSUsIHRyYW5zcGFyZW50IDcwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi53aW5kLWRpcmVjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHJvdGF0ZTogMGRlZztcXHJcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA2MCUsIHJnYmEoMCwgMCwgMjU1LCAuNSkgNjAlKTtcXHJcXG4gIG1hc2staW1hZ2U6IGNvbmljLWdyYWRpZW50KHJlZCA1JSwgdHJhbnNwYXJlbnQgNSUsIHRyYW5zcGFyZW50IDk1JSwgcmVkIDk1JSk7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgZWFzZS1vdXQgMnM7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlLWRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIHVuaXRzICovXFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQge1xcclxcbiAgZ3JpZC1hcmVhOiB1bml0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsdWUgdmFyKC0tdW5pdC11bmRlcmxpbmUtd2lkdGgpLCB0cmFuc3BhcmVudCB2YXIoLS11bml0LXVuZGVybGluZS13aWR0aCkpO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YmVmb3JlLFxcclxcbi5nYXVnZS11bml0OjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YWZ0ZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjphZnRlciB7XFxyXFxuICB0b3A6IDEwMCVcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogZmVlbDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdC1hcHBhcmVudCB7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZS11bml0LnRlbXBlcmF0dXJlLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQudGVtcGVyYXR1cmUtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkLXVuaXR7XFxyXFxuICB3aWR0aDogMi4wcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQud2luZC1zcGVlZC11bml0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIm1waFxcXCI7XFxyXFxufVxcclxcbi5nYXVnZS11bml0LndpbmQtc3BlZWQtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcImttL2hcXFwiO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXJDdXJyZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQzs7OztvQkFJa0I7RUFDbEIsUUFBUTtFQUNSLHlDQUF5QztFQUN6QywyQkFBMkI7RUFDM0I7OENBQzRDO0VBQzVDLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVFQUErRTtFQUMvRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixtREFBbUQ7QUFDckQ7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0I7O2VBRWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDhEQUE4RDtFQUM5RCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUjs7eUdBRXVHO0VBQ3ZHLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oscUVBQXFFO0VBQ3JFLDRFQUE0RTtFQUM1RSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhHQUE4RztBQUNoSDtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxNQUFNO0FBQ1I7QUFDQTtFQUNFLE1BQU07QUFDUjtBQUNBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1nYXVnZS1ib3JkZXItd2lkdGg6IDdweDtcXHJcXG4gIC0tdW5pdC11bmRlcmxpbmUtd2lkdGg6IDNweDtcXHJcXG4gIC0tY29tcGFzcy1jb2xvcjogcmdiYSg1MCwgNTAsIDI1NSwgLjEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDQzMHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjaXR5IGNpdHkgY2l0eVxcXCJcXHJcXG4gICAgXFxcImljb24gdGVtcCB0ZW1wXFxcIlxcclxcbiAgICBcXFwiaWNvbiBodW1pIHdpbmRcXFwiXFxyXFxuICAgIFxcXCJjb2RlIGh1bWkgd2luZFxcXCI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMjUpLFxcclxcbiAgICBpbnNldCAzcHggM3B4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudCBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2l0eSBuYW1lICovXFxyXFxuXFxyXFxuLmNpdHktZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogY2l0eTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktcGFyYSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgcGFkZGluZzogMCAuMjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktcGFyYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibHVlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1jdXJyZW50LXNlYXJjaCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNsYXRlOiAwIC01MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLi9tZWRpYS9pbWFnZXMvaWNvbnMvc2VhcmNoLW1hZ25pZmllci5zdmcpIG5vLXJlcGVhdCB0b3AgcmlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAyNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktZGl2OmhvdmVyIC5jaXR5LWN1cnJlbnQtc2VhcmNoIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xcclxcbiAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaWNvbiAqL1xcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIC4yNSkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3ZWF0aGVyY29kZSAqL1xcclxcblxcclxcbi53ZWF0aGVyY29kZS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBjb2RlO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJjb2RlLXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wZXJhdHVyZSAqL1xcclxcblxcclxcbi50ZW1wLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHRlbXA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImN1cnIgdW5pdFxcXCJcXHJcXG4gICAgXFxcImZlZWwgZmVlbFxcXCI7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jdXJyZW50IHtcXHJcXG4gIGdyaWQtYXJlYTogY3VycjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaHVtaWRpdHkgKi9cXHJcXG5cXHJcXG4uaHVtaWRpdHktZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogaHVtaTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpIHNvbGlkIHJnYmEoNTAsIDUwLCAyNTUsIC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2UtcGVyY2VudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXI6IHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgc29saWQgYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGluc2V0OiBjYWxjKHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgKiAtMSk7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCAqL1xcclxcblxcclxcbi53aW5kLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHdpbmQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWNvbXBhc3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOlxcclxcbiAgICB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dpbmQtY29tcGFzcy5zdmcpIG5vLXJlcGVhdCxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDYwJSwgdmFyKC0tY29tcGFzcy1jb2xvcikgNjElLCB2YXIoLS1jb21wYXNzLWNvbG9yKSA2OSUsIHRyYW5zcGFyZW50IDcwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi53aW5kLWRpcmVjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHJvdGF0ZTogMGRlZztcXHJcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA2MCUsIHJnYmEoMCwgMCwgMjU1LCAuNSkgNjAlKTtcXHJcXG4gIG1hc2staW1hZ2U6IGNvbmljLWdyYWRpZW50KHJlZCA1JSwgdHJhbnNwYXJlbnQgNSUsIHRyYW5zcGFyZW50IDk1JSwgcmVkIDk1JSk7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgZWFzZS1vdXQgMnM7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlLWRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIHVuaXRzICovXFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQge1xcclxcbiAgZ3JpZC1hcmVhOiB1bml0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsdWUgdmFyKC0tdW5pdC11bmRlcmxpbmUtd2lkdGgpLCB0cmFuc3BhcmVudCB2YXIoLS11bml0LXVuZGVybGluZS13aWR0aCkpO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YmVmb3JlLFxcclxcbi5nYXVnZS11bml0OjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YWZ0ZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjphZnRlciB7XFxyXFxuICB0b3A6IDEwMCVcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogZmVlbDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdC1hcHBhcmVudCB7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZS11bml0LnRlbXBlcmF0dXJlLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQudGVtcGVyYXR1cmUtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkLXVuaXR7XFxyXFxuICB3aWR0aDogMi4wcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQud2luZC1zcGVlZC11bml0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIm1waFxcXCI7XFxyXFxufVxcclxcbi5nYXVnZS11bml0LndpbmQtc3BlZWQtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcImttL2hcXFwiO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3ByZWNpcGl0YXRpb25zLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3dpbmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvc3VucmlzZS1zdW5zZXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvdXYtaW5kZXgucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndlYXRoZXItZGFpbHkge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1kYWlseSAqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWNhcmQge1xcclxcbiAgd2lkdGg6IDE2NXB4O1xcclxcbiAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NjZlYTg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJkYWlseS13ZWF0aGVyICBkYWlseS13ZWF0aGVyXFxcIlxcclxcbiAgICBcXFwicHJlY2lwaXRhdGlvbnMgd2luZC1zcGVlZCAgIFxcXCJcXHJcXG4gICAgXFxcInN1bnJpc2Utc3Vuc2V0IHV2LWluZGV4ICAgICBcXFwiO1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjI1KSxcXHJcXG4gICAgaW5zZXQgMnB4IDJweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xcclxcbiAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1vdXQgMTAwbXM7XFxyXFxufVxcclxcbi53ZWF0aGVyLWRhaWx5OmhvdmVyIC5kYWlseS1jYXJkLFxcclxcbi53ZWF0aGVyLWRhaWx5OmFjdGl2ZSAuZGFpbHktY2FyZCB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1jYXJkLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4sIHdlYXRoZXJjb2RlIGFuZCB0ZW1wZXJhdHVyZXMgKi9cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlciB7XFxyXFxuICBncmlkLWFyZWE6IGRhaWx5LXdlYXRoZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjdXJyZW50LWRheSAgICAgIGN1cnJlbnQtZGF5ICAgICBcXFwiXFxyXFxuICAgIFxcXCJkYXktd2VhdGhlci1pY29uIGRheS13ZWF0aGVyLWljb25cXFwiXFxyXFxuICAgIFxcXCJtYXgtdGVtcCAgICAgICAgIG1pbi10ZW1wICAgICAgICBcXFwiXFxyXFxuICAgIFxcXCJ3ZWF0aGVyLWRlc2NyICAgIHdlYXRoZXItZGVzY3IgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWRheSB7XFxyXFxuICBncmlkLWFyZWE6IGN1cnJlbnQtZGF5O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXItaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRheS13ZWF0aGVyLWljb247XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWF4IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxLjc1cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDNweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogd2VhdGhlci1kZXNjcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi8qIHByZWNpcGl0YXRpb25zICovXFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJlY2lwaXRhdGlvbnM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHF1YW50aXR5XFxcIlxcclxcbiAgICBcXFwiaWNvbiBob3VycyAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb24tcXVhbnRpdHkge1xcclxcbiAgZ3JpZC1hcmVhOiBxdWFudGl0eTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucy1ob3VycyB7XFxyXFxuICBncmlkLWFyZWE6IGhvdXJzO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCBzcGVlZCAqL1xcclxcblxcclxcbi5kYWlseS13aW5kIHtcXHJcXG4gIGdyaWQtYXJlYTogd2luZC1zcGVlZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gc3BlZWRcXFwiXFxyXFxuICAgIFxcXCJpY29uIHVuaXQgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDBweCAwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2luZC1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLXNwZWVkIHtcXHJcXG4gIGdyaWQtYXJlYTogc3BlZWQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2luZC1zcGVlZC11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogdW5pdDtcXHJcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAyLjUpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAxLjI1KTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3VucmlzZSBhbmQgc3Vuc2V0ICovXFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Utc3Vuc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogc3VucmlzZS1zdW5zZXQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHN1bnJpc2UgXFxcIlxcclxcbiAgICBcXFwiaWNvbiBzdW5zZXRcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1zdW5yaXNlLXN1bnNldC1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1zdW5yaXNlIHtcXHJcXG4gIGdyaWQtYXJlYTogc3VucmlzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnNldCB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnNldDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVVYgaW5kZXggKi9cXHJcXG5cXHJcXG4uZGFpbHktdXYge1xcclxcbiAgZ3JpZC1hcmVhOiB1di1pbmRleDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gaW5kZXggXFxcIlxcclxcbiAgICBcXFwiaWNvbiB1diAgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pbmRleCB7XFxyXFxuICBncmlkLWFyZWE6IGluZGV4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LXRleHQge1xcclxcbiAgZ3JpZC1hcmVhOiB1djtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxnQ0FBZ0M7RUFDaEM7OztrQ0FHZ0M7RUFDaEMsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLDJCQUEyQjtFQUMzQjs4Q0FDNEM7RUFDNUMsZ0NBQWdDO0FBQ2xDO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQywyQkFBMkI7QUFDN0I7O0FBRUEs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aGVyLWRhaWx5IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZGFpbHkgKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxNjVweDtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY2ZWE4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiZGFpbHktd2VhdGhlciAgZGFpbHktd2VhdGhlclxcXCJcXHJcXG4gICAgXFxcInByZWNpcGl0YXRpb25zIHdpbmQtc3BlZWQgICBcXFwiXFxyXFxuICAgIFxcXCJzdW5yaXNlLXN1bnNldCB1di1pbmRleCAgICAgXFxcIjtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yNSksXFxyXFxuICAgIGluc2V0IDJweCAycHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcXHJcXG4gIHRyYW5zaXRpb246IDEwMG1zIGVhc2Utb3V0IDEwMG1zO1xcclxcbn1cXHJcXG4ud2VhdGhlci1kYWlseTpob3ZlciAuZGFpbHktY2FyZCxcXHJcXG4ud2VhdGhlci1kYWlseTphY3RpdmUgLmRhaWx5LWNhcmQge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktY2FyZC5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluLCB3ZWF0aGVyY29kZSBhbmQgdGVtcGVyYXR1cmVzICovXFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBkYWlseS13ZWF0aGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY3VycmVudC1kYXkgICAgICBjdXJyZW50LWRheSAgICAgXFxcIlxcclxcbiAgICBcXFwiZGF5LXdlYXRoZXItaWNvbiBkYXktd2VhdGhlci1pY29uXFxcIlxcclxcbiAgICBcXFwibWF4LXRlbXAgICAgICAgICBtaW4tdGVtcCAgICAgICAgXFxcIlxcclxcbiAgICBcXFwid2VhdGhlci1kZXNjciAgICB3ZWF0aGVyLWRlc2NyICAgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1kYXkge1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LWRheTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkYXktd2VhdGhlci1pY29uO1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1tYXgtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogbWF4LXRlbXA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1tYXgtdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogMS43NXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogbWF4LXRlbXAtdW5pdDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4tZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogbWluLXRlbXA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWluIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4tdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogbWluLXRlbXAtdW5pdDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IHdlYXRoZXItZGVzY3I7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcmVjaXBpdGF0aW9ucyAqL1xcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucyB7XFxyXFxuICBncmlkLWFyZWE6IHByZWNpcGl0YXRpb25zO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBxdWFudGl0eVxcXCJcXHJcXG4gICAgXFxcImljb24gaG91cnMgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucy1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3ByZWNpcGl0YXRpb25zLnBuZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbi1xdWFudGl0eSB7XFxyXFxuICBncmlkLWFyZWE6IHF1YW50aXR5O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zLWhvdXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogaG91cnM7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aW5kIHNwZWVkICovXFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQge1xcclxcbiAgZ3JpZC1hcmVhOiB3aW5kLXNwZWVkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBzcGVlZFxcXCJcXHJcXG4gICAgXFxcImljb24gdW5pdCBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvd2luZC5wbmcpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtc3BlZWQge1xcclxcbiAgZ3JpZC1hcmVhOiBzcGVlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLXNwZWVkLXVuaXQge1xcclxcbiAgLS1mb250LXNpemU6IC45cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiB1bml0O1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDIuNSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDEuMjUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdW5yaXNlIGFuZCBzdW5zZXQgKi9cXHJcXG5cXHJcXG4uZGFpbHktc3VucmlzZS1zdW5zZXQge1xcclxcbiAgZ3JpZC1hcmVhOiBzdW5yaXNlLXN1bnNldDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gc3VucmlzZSBcXFwiXFxyXFxuICAgIFxcXCJpY29uIHN1bnNldFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Utc3Vuc2V0LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvc3VucmlzZS1zdW5zZXQucG5nKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1zdW5yaXNlIHtcXHJcXG4gIGdyaWQtYXJlYTogc3VucmlzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnNldCB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnNldDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVVYgaW5kZXggKi9cXHJcXG5cXHJcXG4uZGFpbHktdXYge1xcclxcbiAgZ3JpZC1hcmVhOiB1di1pbmRleDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gaW5kZXggXFxcIlxcclxcbiAgICBcXFwiaWNvbiB1diAgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3V2LWluZGV4LnBuZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdXYtaW5kZXgge1xcclxcbiAgZ3JpZC1hcmVhOiBpbmRleDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di10ZXh0IHtcXHJcXG4gIGdyaWQtYXJlYTogdXY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2VhdGhlci1kYWlseS1ob3VybHkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWF4LXdpZHRoOiAxMjMwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5SG91cmx5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53ZWF0aGVyLWRhaWx5LWhvdXJseSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtd2lkdGg6IDEyMzBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMtY2hhcnQvY2lyY2xlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy9pY29ucy1jaGFydC9zcXVhcmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zLWNoYXJ0L2Fycm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy9pY29ucy1jaGFydC9kaWFtb25kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tY2hhcnQtdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xcclxcbiAgLS13ZWF0aGVyLWhvdXJseS1kaXYtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIC0tY2hhcnQtdGV4dC1jb2xvci1maWxsOiAjZGRkO1xcclxcbiAgLS1jaGFydC10ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcXHJcXG4gIC0tY2hhcnQtY29sb3ItdGVtcDogcmVkO1xcclxcbiAgLS1jaGFydC1jb2xvci1hcHBhcmVudDogY29yYWw7XFxyXFxuICAtLWNoYXJ0LWNvbG9yLXdpbmQ6IGJsdWU7XFxyXFxuICAtLWNoYXJ0LWNvbG9yLWh1bWlkaXR5OiBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjaGFydCBkaXZpc2lvbnMgYW5kIGhvdXJzICovXFxyXFxuXFxyXFxuLndlYXRoZXItaG91cmx5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogdmFyKC0td2VhdGhlci1ob3VybHktZGl2LWhlaWdodCk7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzLFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zLFxcclxcbiAgICBiYWNrZHJvcC1maWx0ZXIgMTAwbXMsXFxyXFxuICAgIGJveC1zaGFkb3cgMjAwbXM7XFxyXFxufVxcclxcbi53ZWF0aGVyLWhvdXJseTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDRweCA0cHggNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsIGJsYWNrIDMlLCBibGFjayA5NyUsIHRyYW5zcGFyZW50KTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAycHggYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtbGluZS1ob3VyLFxcclxcbi5jaGFydC1saW5lLWJhc2Uge1xcclxcbiAgc3Ryb2tlOiBncmF5O1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ob3Vycy1jaGFydC10ZXh0IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LXRleHQtY29sb3ItZmlsbCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tY2hhcnQtdGV4dC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wIHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4udGVtcC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0LXRlbXAge1xcclxcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxuICBzdHJva2U6IHZhcigtLWNoYXJ0LWNvbG9yLXRlbXApO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAzcHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci10ZW1wKTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jaGFydC10ZXh0IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LXRleHQtY29sb3ItZmlsbCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tY2hhcnQtdGV4dC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wIGFwcGFyZW50IHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4udGVtcC1hcHBhcmVudC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaG91cmx5OmhvdmVyIC50ZW1wLWFwcGFyZW50LWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQtdGVtcC1hcHBhcmVudCB7XFxyXFxuICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG4gIHN0cm9rZTogdmFyKC0tY2hhcnQtY29sb3ItYXBwYXJlbnQpO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50LWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci1hcHBhcmVudCk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCByZWxhdGVkICovXFxyXFxuXFxyXFxuLndpbmQtY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogLjI1O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1ob3VybHk6aG92ZXIgLndpbmQtY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydC13aW5kIHtcXHJcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcclxcbiAgc3Ryb2tlOiB2YXIoLS1jaGFydC1jb2xvci13aW5kKTtcXHJcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcclxcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1jaGFydC12ZXJ0ZXgge1xcclxcbiAgZmlsbDogdmFyKC0tY2hhcnQtY29sb3Itd2luZCk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG4gIC8qIGFsbG93IHJvdGF0aW9uIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgaW1hZ2UgKi9cXHJcXG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBodW1pZGl0eSByZWxhdGVkICovXFxyXFxuXFxyXFxuLmh1bWlkaXR5LWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IC4yNTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaG91cmx5OmhvdmVyIC5odW1pZGl0eS1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0LWh1bWlkaXR5IHtcXHJcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcclxcbiAgc3Ryb2tlOiB2YXIoLS1jaGFydC1jb2xvci1odW1pZGl0eSk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci1odW1pZGl0eSk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG91cmx5IHdlYXRoZXIgaWNvbiByZWxhdGVkICovXFxyXFxuXFxyXFxuLmNoYXJ0LXdlYXRoZXItaWNvbnMtZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0td2VhdGhlci1ob3VybHktZGl2LWhlaWdodCkgLSAyM3B4KTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LXdlYXRoZXItaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi8qIGRldGFpbCBkaXYgcmVsYXRlZCAqL1xcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLWRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIC4yNSksXFxyXFxuICAgIGluc2V0IDJweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2hhcnQtdGV4dC1jb2xvci1maWxsKTtcXHJcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1jaGFydC10ZXh0LXNoYWRvdyk7XFxyXFxuICB3aWR0aDogMTcwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDMwMG1zIGVhc2Utb3V0IDMwMG1zO1xcclxcbn1cXHJcXG4uY2hhcnQtZGV0YWlscy1kaXYgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4uLiB0ZXh0XFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLWRpdiBwIHtcXHJcXG4gIGdyaWQtYXJlYTogdGV4dDtcXHJcXG4gIG1hcmdpbjogMXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLXN5bWJvbCB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgLjUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sLXRlbXAge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcnQtY29sb3ItdGVtcCk7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wtYXBwYXJlbnQge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcnQtY29sb3ItYXBwYXJlbnQpOyAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sLXdpbmQge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcnQtY29sb3Itd2luZCk7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wtaHVtaWRpdHkge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcnQtY29sb3ItaHVtaWRpdHkpOyAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93ZWF0aGVySG91cmx5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixrQ0FBa0M7QUFDcEM7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEM7OztvQkFHa0I7QUFDcEI7QUFDQTtFQUNFLHlDQUF5QztFQUN6QywyQkFBMkI7RUFDM0Isc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvRkFBb0Y7RUFDcEYsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0FBQ3ZDOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0FBQ3ZDOztBQUVBLDBCQUEwQjs7QUFFMUI7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxtQ0FBbUM7QUFDckM7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxnREFBZ0Q7RUFDaEQsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsbUNBQW1DO0FBQ3JDOztBQUVBLGdDQUFnQzs7QUFFaEM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxxREFBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDOzhDQUM0QztFQUM1QywwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWiw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyx5REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQseURBQTZEO0FBQy9EOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLHlEQUE0RDtBQUM5RDs7QUFFQTtFQUNFLG1EQUFtRDtFQUNuRCx5REFBOEQ7QUFDaEVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1jaGFydC10cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XFxyXFxuICAtLXdlYXRoZXItaG91cmx5LWRpdi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgLS1jaGFydC10ZXh0LWNvbG9yLWZpbGw6ICNkZGQ7XFxyXFxuICAtLWNoYXJ0LXRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcclxcbiAgLS1jaGFydC1jb2xvci10ZW1wOiByZWQ7XFxyXFxuICAtLWNoYXJ0LWNvbG9yLWFwcGFyZW50OiBjb3JhbDtcXHJcXG4gIC0tY2hhcnQtY29sb3Itd2luZDogYmx1ZTtcXHJcXG4gIC0tY2hhcnQtY29sb3ItaHVtaWRpdHk6IGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGNoYXJ0IGRpdmlzaW9ucyBhbmQgaG91cnMgKi9cXHJcXG5cXHJcXG4ud2VhdGhlci1ob3VybHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS13ZWF0aGVyLWhvdXJseS1kaXYtaGVpZ2h0KTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMsXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3IgMTAwbXMsXFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlciAxMDBtcyxcXHJcXG4gICAgYm94LXNoYWRvdyAyMDBtcztcXHJcXG59XFxyXFxuLndlYXRoZXItaG91cmx5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgYmxhY2sgMyUsIGJsYWNrIDk3JSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDJweCBibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1saW5lLWhvdXIsXFxyXFxuLmNoYXJ0LWxpbmUtYmFzZSB7XFxyXFxuICBzdHJva2U6IGdyYXk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzLWNoYXJ0LXRleHQge1xcclxcbiAgZmlsbDogdmFyKC0tY2hhcnQtdGV4dC1jb2xvci1maWxsKTtcXHJcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1jaGFydC10ZXh0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi8qIHRlbXAgcmVsYXRlZCAqL1xcclxcblxcclxcbi50ZW1wLWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQtdGVtcCB7XFxyXFxuICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG4gIHN0cm9rZTogdmFyKC0tY2hhcnQtY29sb3ItdGVtcCk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDNweDtcXHJcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtY2hhcnQtdmVydGV4IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LWNvbG9yLXRlbXApO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWNoYXJ0LXRleHQge1xcclxcbiAgZmlsbDogdmFyKC0tY2hhcnQtdGV4dC1jb2xvci1maWxsKTtcXHJcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1jaGFydC10ZXh0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi8qIHRlbXAgYXBwYXJlbnQgcmVsYXRlZCAqL1xcclxcblxcclxcbi50ZW1wLWFwcGFyZW50LWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IC41O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1ob3VybHk6aG92ZXIgLnRlbXAtYXBwYXJlbnQtY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydC10ZW1wLWFwcGFyZW50IHtcXHJcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcclxcbiAgc3Ryb2tlOiB2YXIoLS1jaGFydC1jb2xvci1hcHBhcmVudCk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQtY2hhcnQtdmVydGV4IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LWNvbG9yLWFwcGFyZW50KTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aW5kIHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4ud2luZC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAuMjU7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWhvdXJseTpob3ZlciAud2luZC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0LXdpbmQge1xcclxcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxuICBzdHJva2U6IHZhcigtLWNoYXJ0LWNvbG9yLXdpbmQpO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci13aW5kKTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbiAgLyogYWxsb3cgcm90YXRpb24gZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBpbWFnZSAqL1xcclxcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGh1bWlkaXR5IHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4uaHVtaWRpdHktY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogLjI1O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1ob3VybHk6aG92ZXIgLmh1bWlkaXR5LWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQtaHVtaWRpdHkge1xcclxcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxuICBzdHJva2U6IHZhcigtLWNoYXJ0LWNvbG9yLWh1bWlkaXR5KTtcXHJcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcclxcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktY2hhcnQtdmVydGV4IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LWNvbG9yLWh1bWlkaXR5KTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBob3VybHkgd2VhdGhlciBpY29uIHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4uY2hhcnQtd2VhdGhlci1pY29ucy1kaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogY2FsYyh2YXIoLS13ZWF0aGVyLWhvdXJseS1kaXYtaGVpZ2h0KSAtIDIzcHgpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtd2VhdGhlci1pY29uIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGV0YWlsIGRpdiByZWxhdGVkICovXFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgLjI1KSxcXHJcXG4gICAgaW5zZXQgMnB4IDJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jaGFydC10ZXh0LWNvbG9yLWZpbGwpO1xcclxcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWNoYXJ0LXRleHQtc2hhZG93KTtcXHJcXG4gIHdpZHRoOiAxNzBweDtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMzAwbXMgZWFzZS1vdXQgMzAwbXM7XFxyXFxufVxcclxcbi5jaGFydC1kZXRhaWxzLWRpdiBkaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLi4uIHRleHRcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtZGl2IHAge1xcclxcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcclxcbiAgbWFyZ2luOiAxcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAuNSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wtdGVtcCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFydC1jb2xvci10ZW1wKTsgKi9cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9tZWRpYS9pbWFnZXMvaWNvbnMtY2hhcnQvY2lyY2xlLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLXN5bWJvbC1hcHBhcmVudCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFydC1jb2xvci1hcHBhcmVudCk7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL2ljb25zLWNoYXJ0L3NxdWFyZS5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wtd2luZCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFydC1jb2xvci13aW5kKTsgKi9cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9tZWRpYS9pbWFnZXMvaWNvbnMtY2hhcnQvYXJyb3cuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sLWh1bWlkaXR5IHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJ0LWNvbG9yLWh1bWlkaXR5KTsgKi9cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9tZWRpYS9pbWFnZXMvaWNvbnMtY2hhcnQvZGlhbW9uZC5zdmcpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXRlXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBkYXkgb2YgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIG1vbnRoIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXRlKG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gMjlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRlKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcbiAgcmV0dXJuIGRheU9mTW9udGg7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRIb3Vyc1xuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBob3VycyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgaG91cnMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgaG91cnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIGhvdXJzIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBnZXRIb3VycyhuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1KSlcbiAqIC8vPT4gMTFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb3VycyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgcmV0dXJuIGhvdXJzO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0TWludXRlc1xuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG1pbnV0ZXMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG1pbnV0ZXMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbWludXRlc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgbWludXRlcyBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZ2V0TWludXRlcyhuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1LCA1KSlcbiAqIC8vPT4gNDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNaW51dGVzKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgcmV0dXJuIG1pbnV0ZXM7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc2V0SG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgaG91cnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIGhvdXJzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gaG91cnMgLSB0aGUgaG91cnMgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGhvdXJzIHNldFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgNCBob3VycyB0byAxIFNlcHRlbWJlciAyMDE0IDExOjMwOjAwOlxuICogY29uc3QgcmVzdWx0ID0gc2V0SG91cnMobmV3IERhdGUoMjAxNCwgOCwgMSwgMTEsIDMwKSwgNClcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDA0OjMwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0SG91cnMoZGlydHlEYXRlLCBkaXJ0eUhvdXJzKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgaG91cnMgPSB0b0ludGVnZXIoZGlydHlIb3Vycyk7XG4gIGRhdGUuc2V0SG91cnMoaG91cnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzZXRNaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbnV0ZXMgLSB0aGUgbWludXRlcyBvZiB0aGUgbmV3IGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWludXRlcyBzZXRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IDQ1IG1pbnV0ZXMgdG8gMSBTZXB0ZW1iZXIgMjAxNCAxMTozMDo0MDpcbiAqIGNvbnN0IHJlc3VsdCA9IHNldE1pbnV0ZXMobmV3IERhdGUoMjAxNCwgOCwgMSwgMTEsIDMwLCA0MCksIDQ1KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMTE6NDU6NDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRNaW51dGVzKGRpcnR5RGF0ZSwgZGlydHlNaW51dGVzKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbWludXRlcyA9IHRvSW50ZWdlcihkaXJ0eU1pbnV0ZXMpO1xuICBkYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFja2dyb3VuZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhY2tncm91bmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckN1cnJlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyQ3VycmVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckRhaWx5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckRhaWx5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXJIb3VybHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVySG91cmx5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvYmFja2dyb3VuZC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3NlYXJjaC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3dlYXRoZXJDdXJyZW50LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvd2VhdGhlckRhaWx5SG91cmx5LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvd2VhdGhlckRhaWx5LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvd2VhdGhlckhvdXJseS5jc3MnO1xyXG5pbXBvcnQgbG9hZFVpIGZyb20gJy4vbW9kdWxlcy91aSc7XHJcblxyXG5sb2FkVWkoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnRhaW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VydGFpbkZvbGRzID0gMTA7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VydGFpbkZvbGRzOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGN1cnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGkgPCBjdXJ0YWluRm9sZHMgLyAyID8gJ2JnLWN1cnRhaW4tbGVmdCcgOiAnYmctY3VydGFpbi1yaWdodCc7XHJcbiAgICBjdXJ0YWluLmNsYXNzTGlzdC5hZGQoJ2JnLWN1cnRhaW4nLCBjbGFzc05hbWUpO1xyXG4gICAgY3VydGFpbnMuYXBwZW5kKGN1cnRhaW4pO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XHJcbiAgd2luZG93LmNsYXNzTGlzdC5hZGQoJ2JnLXdpbmRvdycpO1xyXG4gIGN1cnRhaW5zLmNsYXNzTGlzdC5hZGQoJ2JnLWN1cnRhaW5zJyk7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKFxyXG4gICAgY3VydGFpbnMsXHJcbiAgICB3aW5kb3csXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFja2dyb3VuZFVwZGF0ZSgpIHtcclxuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKTtcclxuICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3JlYWR5Jyk7XHJcbn1cclxuIiwiaW1wb3J0IHZhbHVlQWRqdXN0IGZyb20gJy4vdmFsdWVBZGp1c3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlVW5pdHMoZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gIGNvbnN0IHVuaXRzQ2xhc3MgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXBlcmF0dXJlLXVuaXQnKVxyXG4gICAgPyAnLnRlbXBlcmF0dXJlLXVuaXQnIDogJy53aW5kLXNwZWVkLXVuaXQnO1xyXG4gIGNvbnN0IHZhbHVlc0NsYXNzID0gdW5pdHNDbGFzcyA9PT0gJy50ZW1wZXJhdHVyZS11bml0J1xyXG4gICAgPyAnLnRlbXBlcmF0dXJlLW51bWJlcicgOiAnLnNwZWVkLW51bWJlcic7XHJcbiAgLy8gY2hhbmdlIHRoZSByZXN0IG9mIHRoZSB1bml0c1xyXG4gIGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh1bml0c0NsYXNzKTtcclxuICB1bml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XHJcbiAgICB1bml0LmNoZWNrZWQgPSBuZXdWYWx1ZTtcclxuICB9KTtcclxuICAvLyBjaGFuZ2UgdGhlIHJlbGF0ZWQgdmFsdWVzXHJcbiAgY29uc3QgdmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWx1ZXNDbGFzcyk7XHJcbiAgdmFsdWVzLmZvckVhY2goKG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHZhbHVlc0NsYXNzID09PSAnLnRlbXBlcmF0dXJlLW51bWJlcicpIHtcclxuICAgICAgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXAtY3VycmVudCcpXHJcbiAgICAgIHx8IG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXAtYXBwYXJlbnQnKSkge1xyXG4gICAgICAgIHZhbHVlQWRqdXN0KFxyXG4gICAgICAgICAgbnVtYmVyLFxyXG4gICAgICAgICAgbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5jZWxzaXVzIDogbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCxcclxuICAgICAgICAgIG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCA6IG51bWJlci5kYXRhc2V0LmNlbHNpdXMsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBuZXdWYWx1ZSA/IG51bWJlci5kYXRhc2V0LmZhaHJlbmhlaXQgOiBudW1iZXIuZGF0YXNldC5jZWxzaXVzO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoJ3NwZWVkLW51bWJlcicpXHJcbiAgICAgICYmICFudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYWlseS13aW5kLXNwZWVkJykpIHtcclxuICAgICAgdmFsdWVBZGp1c3QoXHJcbiAgICAgICAgbnVtYmVyLFxyXG4gICAgICAgIG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQua2lsb21ldGVycyA6IG51bWJlci5kYXRhc2V0Lm1pbGVzLFxyXG4gICAgICAgIG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQubWlsZXMgOiBudW1iZXIuZGF0YXNldC5raWxvbWV0ZXJzLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5taWxlcyA6IG51bWJlci5kYXRhc2V0LmtpbG9tZXRlcnM7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlLCB0aW1lem9uZSA9ICdhdXRvJykge1xyXG4gIGxldCByZXNwb25zZUpzb247XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0P2xhdGl0dWRlPSR7bGF0aXR1ZGV9JmxvbmdpdHVkZT0ke2xvbmdpdHVkZX0maG91cmx5PXRlbXBlcmF0dXJlXzJtLHJlbGF0aXZlaHVtaWRpdHlfMm0sYXBwYXJlbnRfdGVtcGVyYXR1cmUscHJlY2lwaXRhdGlvbix3ZWF0aGVyY29kZSxjbG91ZGNvdmVyLHZpc2liaWxpdHksd2luZHNwZWVkXzEwbSx3aW5kZGlyZWN0aW9uXzEwbSZkYWlseT13ZWF0aGVyY29kZSx0ZW1wZXJhdHVyZV8ybV9tYXgsdGVtcGVyYXR1cmVfMm1fbWluLHN1bnJpc2Usc3Vuc2V0LHV2X2luZGV4X21heCxwcmVjaXBpdGF0aW9uX3N1bSxwcmVjaXBpdGF0aW9uX2hvdXJzLHdpbmRzcGVlZF8xMG1fbWF4LHdpbmRkaXJlY3Rpb25fMTBtX2RvbWluYW50JnRpbWV6b25lPSR7dGltZXpvbmV9JmN1cnJlbnRfd2VhdGhlcj10cnVlYCwge1xyXG4gICAgICBtb2RlOiAnY29ycycsXHJcbiAgICB9KTtcclxuICAgIHJlc3BvbnNlSnNvbiA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlc3BvbnNlSnNvbiA9IGBTb21ldGhpbmcgd2VudCB3cm9uZzogXFxuJHtlcnJ9YDtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoR2VvY29kaW5nKGxvY2F0aW9uKSB7XHJcbiAgaWYgKCFsb2NhdGlvbi5sZW5ndGgpIHJldHVybiBbXTtcclxuICBsZXQgcmVzcG9uc2VKc29uO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgbG9jYXRpb25zTGltaXQgPSAxMDA7XHJcbiAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2dlb2NvZGluZy1hcGkub3Blbi1tZXRlby5jb20vdjEvc2VhcmNoP25hbWU9JHtsb2NhdGlvbn0mY291bnQ9JHtsb2NhdGlvbnNMaW1pdH1gKTtcclxuICAgIHJlc3BvbnNlSnNvbiA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlc3BvbnNlSnNvbiA9IGBTb21ldGhpbmcgd2VudCB3cm9uZzogXFxuJHtlcnJ9YDtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjb3VudHJ5Q29kZUVtb2ppIH0gZnJvbSAnY291bnRyeS1jb2RlLWVtb2ppJztcclxuaW1wb3J0IHsgZmV0Y2hHZW9jb2RpbmcgfSBmcm9tICcuLi9mZXRjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkb21DaXRpZXNMaXN0KHNlYXJjaCkge1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoR2VvY29kaW5nKHNlYXJjaCk7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVzcG9uc2UucmVzdWx0cztcclxuXHJcbiAgaWYgKCFjaXRpZXMpIHtcclxuICAgIGNvbnN0IG5vUmVzdWx0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgbm9GbGFnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBub1Jlc3VsdHMuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdC1lbXB0eScpO1xyXG4gICAgbm9GbGFnSWNvbi5jbGFzc0xpc3QuYWRkKCdjb3VudHJ5LWZsYWctbm9uZScpO1xyXG4gICAgbm9GbGFnSWNvbi5pbm5lclRleHQgPSAn4pqg77iPJztcclxuICAgIHBhcmEuaW5uZXJUZXh0ID0gYE5vIGxvY2F0aW9ucyBmb3VuZCBmb3IgXCIke3NlYXJjaH1cIi5gO1xyXG5cclxuICAgIG5vUmVzdWx0cy5hcHBlbmQobm9GbGFnSWNvbiwgcGFyYSk7XHJcblxyXG4gICAgcmV0dXJuIG5vUmVzdWx0cztcclxuICB9XHJcblxyXG4gIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gYCR7XHJcbiAgICAgIGNpdHkubmFtZX0ke1xyXG4gICAgICBjaXR5LmFkbWluMyA/IGAsICR7Y2l0eS5hZG1pbjN9YCA6ICcnfSR7XHJcbiAgICAgIGNpdHkuYWRtaW4yID8gYCwgJHtjaXR5LmFkbWluMn1gIDogJyd9JHtcclxuICAgICAgY2l0eS5hZG1pbjEgPyBgLCAke2NpdHkuYWRtaW4xfWAgOiAnJ30ke1xyXG4gICAgICBjaXR5LmNvdW50cnkgPyBgLCAke2NpdHkuY291bnRyeX1gIDogJyd9YDtcclxuXHJcbiAgICBzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdCcpO1xyXG4gICAgc2VhcmNoUmVzdWx0LmRhdGFzZXQubGF0aXR1ZGUgPSBjaXR5LmxhdGl0dWRlO1xyXG4gICAgc2VhcmNoUmVzdWx0LmRhdGFzZXQubG9uZ2l0dWRlID0gY2l0eS5sb25naXR1ZGU7XHJcbiAgICBzZWFyY2hSZXN1bHQuZGF0YXNldC5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgZmxhZy5jbGFzc0xpc3QuYWRkKCdjb3VudHJ5LWZsYWcnKTtcclxuICAgIGZsYWcuaW5uZXJUZXh0ID0gY291bnRyeUNvZGVFbW9qaShjaXR5LmNvdW50cnlfY29kZSk7XHJcbiAgICBwbGFjZS5pbm5lclRleHQgPSBsb2NhdGlvbjtcclxuXHJcbiAgICBzZWFyY2hSZXN1bHQuYXBwZW5kKGZsYWcsIHBsYWNlKTtcclxuICAgIGxpc3QuYXBwZW5kKHNlYXJjaFJlc3VsdCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5NZW51QmFja2dyb3VuZCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCBzZWFyY2hDaXR5IGZyb20gJy4vc2VhcmNoQ2l0eSc7XHJcblxyXG5sZXQgZm9jdXNJbmRleCA9IC0xO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoKCkge1xyXG4gIGxldCBrZXlkb3duVGltZW91dDtcclxuICBjb25zdCB0aW1lb3V0RGVsYXkgPSA1MDA7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb2FkaW5nQW5pbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvYWRpbmdBbmltMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvYWRpbmdBbmltMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvYWRpbmdBbmltMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBzZWFyY2hTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NpdHktc2VhcmNoJyk7XHJcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtZm9ybScpO1xyXG4gIGNpdHlMaXN0LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1yZXN1bHRzJyk7XHJcbiAgbG9hZGluZ0FuaW1EaXYuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWxvYWRpbmcnLCAnaGlkZGVuJyk7XHJcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCB0cnVlKTtcclxuICBpbnB1dC50eXBlID0gJ3NlYXJjaCc7XHJcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAnV3JpdGUgYSBsb2NhdGlvbiBuYW1lJztcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xyXG4gICAgbG9hZGluZ0FuaW1EaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBjbGVhclRpbWVvdXQoa2V5ZG93blRpbWVvdXQpO1xyXG4gICAga2V5ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2VhcmNoQ2l0eShpbnB1dC52YWx1ZSk7XHJcbiAgICB9LCB0aW1lb3V0RGVsYXkpO1xyXG4gIH0pO1xyXG5cclxuICBsb2FkaW5nQW5pbURpdi5hcHBlbmQobG9hZGluZ0FuaW0xLCBsb2FkaW5nQW5pbTIsIGxvYWRpbmdBbmltMyk7XHJcbiAgZm9ybS5hcHBlbmQoaW5wdXQsIGxvYWRpbmdBbmltRGl2KTtcclxuICBzZWFyY2hTZWN0aW9uLmFwcGVuZChmb3JtLCBjaXR5TGlzdCk7XHJcblxyXG4gIHNlYXJjaFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBjb25zdCBldmVudEtleXMgPSBbJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ1BhZ2VVcCcsICdQYWdlRG93biddO1xyXG4gICAgaWYgKGV2ZW50S2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSBmb2N1c0luZGV4ICs9IDE7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSBmb2N1c0luZGV4IC09IDE7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ1BhZ2VVcCcpIGZvY3VzSW5kZXggLT0gODtcclxuICAgICAgaWYgKGUua2V5ID09PSAnUGFnZURvd24nKSBmb2N1c0luZGV4ICs9IDg7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGxpbWl0UmFuZ2UocmVzdWx0cy5sZW5ndGgpO1xyXG4gICAgICByZXN1bHRzW2ZvY3VzSW5kZXhdLmZvY3VzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcclxuICAgICAgICBzZWFyY2hJbnB1dC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvY3VzSW5kZXggPSAtMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNlYXJjaFNlY3Rpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpbWl0UmFuZ2UobGVuZ3RoKSB7XHJcbiAgaWYgKGZvY3VzSW5kZXggPCAwKSBmb2N1c0luZGV4ID0gMDtcclxuICBpZiAoZm9jdXNJbmRleCA+IGxlbmd0aCAtIDEpIGZvY3VzSW5kZXggPSBsZW5ndGggLSAxO1xyXG59XHJcbiIsImltcG9ydCBkb21DaXRpZXNMaXN0IGZyb20gJy4vY2l0aWVzTGlzdCc7XHJcbmltcG9ydCB1cGRhdGVDb21wbGV0ZVdlYXRoZXIgZnJvbSAnLi91cGRhdGVDb21wbGV0ZVdlYXRoZXInO1xyXG5cclxubGV0IHByZXZpb3VzU2VhcmNoO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ2l0eShzZWFyY2gpIHtcclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcclxuICBjb25zdCBjaXR5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0cycpO1xyXG4gIGNvbnN0IGxvYWRpbmdJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2FkaW5nJyk7XHJcblxyXG4gIGlmIChzZWFyY2ggPT09IHByZXZpb3VzU2VhcmNoKSB7XHJcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XHJcbiAgICBsb2FkaW5nSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHByZXZpb3VzU2VhcmNoID0gc2VhcmNoO1xyXG4gIGNvbnN0IGxpc3QgPSBhd2FpdCBkb21DaXRpZXNMaXN0KHNlYXJjaCk7XHJcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xyXG4gIGxvYWRpbmdJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNpdHlMaXN0LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIGNpdHlMaXN0LmFwcGVuZChsaXN0KTtcclxuXHJcbiAgY29uc3QgZG9tTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcbiAgZG9tTGlzdC5mb3JFYWNoKChjaXR5KSA9PiB7XHJcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjaXR5TGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgICAgLy8gZGlzYWJsZSBhbmQgYXV0b2NvbXBsZXRlIGlucHV0IHdoaWxlIGZldGNoaW5nIGRhdGFcclxuICAgICAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGNpdHkuZGF0YXNldC5sb2NhdGlvbjtcclxuICAgICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xyXG4gICAgICBsb2FkaW5nSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIHVwZGF0ZUNvbXBsZXRlV2VhdGhlcihjaXR5KTtcclxuXHJcbiAgICAgIHByZXZpb3VzU2VhcmNoID0gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHVwZGF0ZUN1cnJlbnRXZWF0aGVyIGZyb20gJy4uL3dlYXRoZXJDdXJyZW50L3VwZGF0ZUN1cnJlbnRXZWF0aGVyJztcclxuaW1wb3J0IHVwZGF0ZURhaWx5V2VhdGhlciBmcm9tICcuLi93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckRhaWx5L3VwZGF0ZURhaWx5V2VhdGhlcic7XHJcbmltcG9ydCB1cGRhdGVIb3VybHlXZWF0aGVyIGZyb20gJy4uL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUhvdXJseVdlYXRoZXInO1xyXG5pbXBvcnQgYmFja2dyb3VuZFVwZGF0ZSBmcm9tICcuLi9iYWNrZ3JvdW5kL2JhY2tncm91bmRVcGRhdGUnO1xyXG5pbXBvcnQgZG9tQ2l0aWVzTGlzdCBmcm9tICcuL2NpdGllc0xpc3QnO1xyXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tICcuLi9mZXRjaCc7XHJcbmltcG9ydCBnZXRXZWF0aGVyY29kZSBmcm9tICcuLi93ZWF0aGVyY29kZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZVdlYXRoZXIoY2hvc2VuQ2l0eSkge1xyXG4gIGNvbnN0IHsgbGF0aXR1ZGUgfSA9IGNob3NlbkNpdHkuZGF0YXNldDtcclxuICBjb25zdCB7IGxvbmdpdHVkZSB9ID0gY2hvc2VuQ2l0eS5kYXRhc2V0O1xyXG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XHJcbiAgY29uc3QgY3VycmVudEhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0ge1xyXG4gICAgY2l0eTogY2hvc2VuQ2l0eS5kYXRhc2V0LmxvY2F0aW9uLFxyXG4gICAgd2VhdGhlcmNvZGU6IGdldFdlYXRoZXJjb2RlKHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndlYXRoZXJjb2RlKSxcclxuICAgIHRlbXA6IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLnRlbXBlcmF0dXJlLFxyXG4gICAgdGVtcEFwcGFyZW50OiB3ZWF0aGVyLmhvdXJseS5hcHBhcmVudF90ZW1wZXJhdHVyZVtjdXJyZW50SG91cl0sXHJcbiAgICBodW1pZGl0eTogd2VhdGhlci5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybVtjdXJyZW50SG91cl0sXHJcbiAgICB3aW5kU3BlZWQ6IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndpbmRzcGVlZCxcclxuICAgIHdpbmREaXJlY3Rpb246IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndpbmRkaXJlY3Rpb24sXHJcbiAgICBzdW5yaXNlOiB3ZWF0aGVyLmRhaWx5LnN1bnJpc2UsXHJcbiAgICBzdW5zZXQ6IHdlYXRoZXIuZGFpbHkuc3Vuc2V0LFxyXG4gICAgbG9jYWxIb3VyOiB3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci50aW1lLFxyXG4gIH07XHJcbiAgY29uc3QgZGFpbHlXZWF0aGVyRGF0YSA9IHtcclxuICAgIHdlYXRoZXJjb2Rlczogd2VhdGhlci5kYWlseS53ZWF0aGVyY29kZSxcclxuICAgIHRlbXBzTWF4OiB3ZWF0aGVyLmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heCxcclxuICAgIHRlbXBzTWluOiB3ZWF0aGVyLmRhaWx5LnRlbXBlcmF0dXJlXzJtX21pbixcclxuICAgIHByZWNpcGl0YXRpb25RdWFudGl0aWVzOiB3ZWF0aGVyLmRhaWx5LnByZWNpcGl0YXRpb25fc3VtLFxyXG4gICAgcHJlY2lwaXRhdGlvbkhvdXJzOiB3ZWF0aGVyLmRhaWx5LnByZWNpcGl0YXRpb25faG91cnMsXHJcbiAgICB3aW5kU3BlZWRzOiB3ZWF0aGVyLmRhaWx5LndpbmRzcGVlZF8xMG1fbWF4LFxyXG4gICAgc3VucmlzZXM6IHdlYXRoZXIuZGFpbHkuc3VucmlzZSxcclxuICAgIHN1bnNldHM6IHdlYXRoZXIuZGFpbHkuc3Vuc2V0LFxyXG4gICAgdXZJbmRleGVzOiB3ZWF0aGVyLmRhaWx5LnV2X2luZGV4X21heCxcclxuICB9O1xyXG4gIGNvbnN0IGhvdXJseVdlYXRoZXJEYXRhID0ge1xyXG4gICAgbG9jYWxIb3VyOiBuZXcgRGF0ZSh3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci50aW1lKS5nZXRIb3VycygpLFxyXG4gICAgaG91cnM6IHdlYXRoZXIuaG91cmx5LnRpbWUsXHJcbiAgICB0ZW1wczogd2VhdGhlci5ob3VybHkudGVtcGVyYXR1cmVfMm0sXHJcbiAgICBodW1pZGl0eTogd2VhdGhlci5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybSxcclxuICAgIGFwcGFyZW50OiB3ZWF0aGVyLmhvdXJseS5hcHBhcmVudF90ZW1wZXJhdHVyZSxcclxuICAgIHdlYXRoZXJjb2RlOiB3ZWF0aGVyLmhvdXJseS53ZWF0aGVyY29kZSxcclxuICAgIHdpbmRzcGVlZDogd2VhdGhlci5ob3VybHkud2luZHNwZWVkXzEwbSxcclxuICAgIHdpbmREaXJlY3Rpb246IHdlYXRoZXIuaG91cmx5LndpbmRkaXJlY3Rpb25fMTBtLFxyXG4gICAgc3VucmlzZTogd2VhdGhlci5kYWlseS5zdW5yaXNlWzBdLFxyXG4gICAgc3Vuc2V0OiB3ZWF0aGVyLmRhaWx5LnN1bnNldFswXSxcclxuICB9O1xyXG4gIHVwZGF0ZUN1cnJlbnRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcbiAgdXBkYXRlRGFpbHlXZWF0aGVyKGRhaWx5V2VhdGhlckRhdGEpO1xyXG4gIHVwZGF0ZUhvdXJseVdlYXRoZXIoaG91cmx5V2VhdGhlckRhdGEsIGhvdXJseVdlYXRoZXJEYXRhLmxvY2FsSG91cik7XHJcbiAgLy8gaGlkZSBzZWFyY2gsIHJlbW92ZSBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcclxuICBjb25zdCBkb21TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1zZWFyY2gnKTtcclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcclxuICBjb25zdCBzZWFyY2hMb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2FkaW5nJyk7XHJcbiAgY29uc3QgbWFpbk1lbnVCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudS1iYWNrZ3JvdW5kJyk7XHJcbiAgY29uc3QgYWN0aXZlQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1jYXJkLmFjdGl2ZScpO1xyXG4gIGRvbVNlYXJjaC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBzZWFyY2hJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xyXG4gIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgc2VhcmNoTG9hZGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBhY3RpdmVDYXJkPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBtYWluTWVudUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XHJcbiAgLy8gY2xlYXIgcmVzdWx0cyBhZnRlciBoaWRpbmdcclxuICBkb21DaXRpZXNMaXN0KCcnKTtcclxuICAvLyBnZXR0aW5nIGJhY2tncm91bmQgcmVhZHlcclxuICBiYWNrZ3JvdW5kVXBkYXRlKCk7XHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaC9zZWFyY2gnO1xyXG5pbXBvcnQgbWFpbk1lbnVCYWNrZ3JvdW5kIGZyb20gJy4vc2VhcmNoL21haW5NZW51QmFja2dyb3VuZCc7XHJcbmltcG9ydCB3ZWF0aGVyQ3VycmVudCBmcm9tICcuL3dlYXRoZXJDdXJyZW50L3dlYXRoZXJDdXJyZW50JztcclxuaW1wb3J0IHdlYXRoZXJEYWlseUhvdXJseSBmcm9tICcuL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVyRGFpbHlIb3VybHknO1xyXG5pbXBvcnQgdXBkYXRlSG91cmx5V2VhdGhlciBmcm9tICcuL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUhvdXJseVdlYXRoZXInO1xyXG5pbXBvcnQgY3JlYXRlQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQvYmFja2dyb3VuZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVWkoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBib2R5LmFwcGVuZChcclxuICAgIGNyZWF0ZUJhY2tncm91bmQoKSxcclxuICAgIG1haW5NZW51QmFja2dyb3VuZCgpLFxyXG4gICAgc2VhcmNoKCksXHJcbiAgICB3ZWF0aGVyQ3VycmVudCgpLFxyXG4gICAgd2VhdGhlckRhaWx5SG91cmx5KCksXHJcbiAgKTtcclxufVxyXG5cclxuLy8gYWRkIGxpc3RlbmVyIHRvIHdpbmRvdyByZXNpemUgdG8gYWRqdXN0IGdyYXBoXHJcbmxldCB3aW5kb3dSZXNpemVUaW1lb3V0O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICBjbGVhclRpbWVvdXQod2luZG93UmVzaXplVGltZW91dCk7XHJcbiAgd2luZG93UmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgdXBkYXRlSG91cmx5V2VhdGhlcigpO1xyXG4gIH0sIDEwMCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY2Vsc2l1c1RvRmFocmVuaGVpdChudW1iZXIpIHtcclxuICBjb25zdCBmYWhyZW5oZWl0ID0gKG51bWJlciAqIDEuOCkgKyAzMjtcclxuICBjb25zdCBmaXhlZERlY2ltYWxzID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGZhaHJlbmhlaXQpLnRvRml4ZWQoMSkpO1xyXG4gIHJldHVybiBmaXhlZERlY2ltYWxzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2lsb21ldGVyc1RvTWlsZXMobnVtYmVyKSB7XHJcbiAgY29uc3QgbWlsZXMgPSBudW1iZXIgLyAxLjYwOTM0NDtcclxuICBjb25zdCBmaXhlZERlY2ltYWxzID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KG1pbGVzKS50b0ZpeGVkKDEpKTtcclxuICByZXR1cm4gZml4ZWREZWNpbWFscztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWx1ZUFkanVzdChkb21FbGVtZW50LCBmcm9tVmFsdWUsIHRvVmFsdWUsIHN0ZXBzID0gNTApIHtcclxuICBjb25zdCBpc0Zsb2F0ID0gZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXBlcmF0dXJlLW51bWJlcicpID8gMSA6IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSArPSAxKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChmcm9tVmFsdWUpICsgKCgodG9WYWx1ZSAtIGZyb21WYWx1ZSkgLyBzdGVwcykgKiAoaSArIDEpKTtcclxuICAgICAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGkgPT09IHN0ZXBzIC0gMSA/IHRvVmFsdWUgOiBjdXJyZW50VmFsdWUudG9GaXhlZChpc0Zsb2F0KTtcclxuICAgIH0sIDI1ICogKGkgKyAxKSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhckFkanVzdChkb21FbGVtZW50LCBmcm9tVmFsdWUsIHRvVmFsdWUpIHtcclxuICBjb25zdCB7IHBlcmNlbnQgfSA9IGRvbUVsZW1lbnQuZGF0YXNldDtcclxuICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUludChkb21FbGVtZW50LmRhdGFzZXQucGVyY2VudCwgMTApO1xyXG4gIGNvbnN0IHRpbWVvdXQgPSAyMDtcclxuICBjb25zdCBzdGVwID0gZnJvbVZhbHVlIDwgdG9WYWx1ZSA/IDEgOiAtMTtcclxuICBjb25zdCBtYXNrID0gYGNvbmljLWdyYWRpZW50KHJlZCAke3BlcmNlbnR9JSwgdHJhbnNwYXJlbnQgJHtwZXJjZW50fSUpYDtcclxuICBkb21FbGVtZW50LnN0eWxlLm1hc2tJbWFnZSA9IG1hc2s7XHJcbiAgZG9tRWxlbWVudC5kYXRhc2V0LnBlcmNlbnQgPSBjdXJyZW50VmFsdWUgKyBzdGVwO1xyXG5cclxuICBpZiAoKHN0ZXAgPiAwICYmIHBlcmNlbnQgPCB0b1ZhbHVlKVxyXG4gICAgfHwgKHN0ZXAgPCAwICYmIHBlcmNlbnQgPiB0b1ZhbHVlKSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGJhckFkanVzdChkb21FbGVtZW50LCBmcm9tVmFsdWUsIHRvVmFsdWUpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5Mb2NhdGlvblNlYXJjaCgpIHtcclxuICBjb25zdCBtYWluTWVudUJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWJhY2tncm91bmQnKTtcclxuICBjb25zdCBjaXR5U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc2VhcmNoJyk7XHJcblxyXG4gIG1haW5NZW51QmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICBjaXR5U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG59XHJcbiIsImltcG9ydCB3ZWF0aGVySWNvbiBmcm9tICcuLi93ZWF0aGVySWNvbic7XHJcbmltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQsIGtpbG9tZXRlcnNUb01pbGVzIH0gZnJvbSAnLi4vdW5pdENvbnZlcnRlcic7XHJcbmltcG9ydCB2YWx1ZUFkanVzdCBmcm9tICcuLi92YWx1ZUFkanVzdCc7XHJcbmltcG9ydCBiYXJBZGp1c3QgZnJvbSAnLi9iYXJBZGp1c3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ3VycmVudFdlYXRoZXIoZGF0YSkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jdXJyZW50ICcpO1xyXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1wYXJhJyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWN1cnJlbnQtaWNvbicpO1xyXG4gIGNvbnN0IHdlYXRoZXJjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJjb2RlLXBhcmEnKTtcclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtY3VycmVudCcpO1xyXG4gIGNvbnN0IHRlbXBBcHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWFwcGFyZW50Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcclxuICBjb25zdCBodW1pZGl0eUdhdWdlUGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS1nYXVnZS1wZXJjZW50Jyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWQnKTtcclxuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtZGlyZWN0aW9uJyk7XHJcblxyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgY2l0eS5pbm5lclRleHQgPSBkYXRhLmNpdHk7XHJcbiAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB3ZWF0aGVySWNvbihcclxuICAgIGRhdGEud2VhdGhlcmNvZGUuaWNvbixcclxuICAgIGRhdGEubG9jYWxIb3VyLFxyXG4gICAgZGF0YS5zdW5yaXNlWzBdLFxyXG4gICAgZGF0YS5zdW5zZXRbMF0sXHJcbiAgKTtcclxuICB3ZWF0aGVyY29kZS5pbm5lclRleHQgPSBgJHtkYXRhLndlYXRoZXJjb2RlLndlYXRoZXJ9JHtkYXRhLndlYXRoZXJjb2RlLmludGVuc2l0eSA/IGAsICR7ZGF0YS53ZWF0aGVyY29kZS5pbnRlbnNpdHl9YCA6ICcnfWA7XHJcbiAgdGVtcC5kYXRhc2V0LmNlbHNpdXMgPSBkYXRhLnRlbXA7XHJcbiAgdGVtcC5kYXRhc2V0LmZhaHJlbmhlaXQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KGRhdGEudGVtcCk7XHJcbiAgdmFsdWVBZGp1c3QodGVtcCwgdGVtcC5pbm5lclRleHQsIGRhdGEudGVtcCk7XHJcbiAgdGVtcEFwcGFyZW50LmRhdGFzZXQuY2Vsc2l1cyA9IGRhdGEudGVtcEFwcGFyZW50O1xyXG4gIHRlbXBBcHBhcmVudC5kYXRhc2V0LmZhaHJlbmhlaXQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KGRhdGEudGVtcEFwcGFyZW50KTtcclxuICB2YWx1ZUFkanVzdCh0ZW1wQXBwYXJlbnQsIHRlbXBBcHBhcmVudC5pbm5lclRleHQsIGRhdGEudGVtcEFwcGFyZW50KTtcclxuICB2YWx1ZUFkanVzdChodW1pZGl0eSwgaHVtaWRpdHkuaW5uZXJUZXh0LCBkYXRhLmh1bWlkaXR5KTtcclxuICBiYXJBZGp1c3QoaHVtaWRpdHlHYXVnZVBlcmNlbnQsIGh1bWlkaXR5R2F1Z2VQZXJjZW50LmRhdGFzZXQucGVyY2VudCwgZGF0YS5odW1pZGl0eSk7XHJcbiAgd2luZFNwZWVkLmRhdGFzZXQua2lsb21ldGVycyA9IHBhcnNlSW50KGRhdGEud2luZFNwZWVkLCAxMCk7XHJcbiAgd2luZFNwZWVkLmRhdGFzZXQubWlsZXMgPSBwYXJzZUludChraWxvbWV0ZXJzVG9NaWxlcyhkYXRhLndpbmRTcGVlZCksIDEwKTtcclxuICB2YWx1ZUFkanVzdCh3aW5kU3BlZWQsIHdpbmRTcGVlZC5pbm5lclRleHQsIHBhcnNlSW50KGRhdGEud2luZFNwZWVkLCAxMCkpO1xyXG4gIHdpbmREaXJlY3Rpb24uc3R5bGUucm90YXRlID0gYCR7ZGF0YS53aW5kRGlyZWN0aW9ufWRlZ2A7XHJcbn1cclxuIiwiaW1wb3J0IG9wZW5Mb2NhdGlvblNlYXJjaCBmcm9tICcuL29wZW5Mb2NhdGlvblNlYXJjaCc7XHJcbmltcG9ydCBjaGFuZ2VVbml0cyBmcm9tICcuLi9jaGFuZ2VVbml0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyQ3VycmVudCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICAvLyBjaXR5XHJcbiAgY29uc3QgY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNpdHlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGNpdHlTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY2l0eURpdi5jbGFzc0xpc3QuYWRkKCdjaXR5LWRpdicpO1xyXG4gIGNpdHlQYXJhLmNsYXNzTGlzdC5hZGQoJ2NpdHktcGFyYScpO1xyXG4gIGNpdHlTZWFyY2guY2xhc3NMaXN0LmFkZCgnY2l0eS1jdXJyZW50LXNlYXJjaCcpO1xyXG5cclxuICBjaXR5UGFyYS5pbm5lclRleHQgPSAnQ2l0eSBOYW1lLCBDb3VudHJ5IE5hbWUnO1xyXG5cclxuICBjaXR5UGFyYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Mb2NhdGlvblNlYXJjaCk7XHJcblxyXG4gIGNpdHlEaXYuYXBwZW5kKGNpdHlQYXJhLCBjaXR5U2VhcmNoKTtcclxuXHJcbiAgLy8gaWNvblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudCcsICdpbnZpc2libGUnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudC1pY29uJyk7XHJcblxyXG4gIC8vIHdlYXRoZXJjb2RlIGRpdlxyXG4gIGNvbnN0IHdlYXRoZXJjb2RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2VhdGhlcmNvZGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICB3ZWF0aGVyY29kZURpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyY29kZS1kaXYnKTtcclxuICB3ZWF0aGVyY29kZVBhcmEuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcmNvZGUtcGFyYScpO1xyXG4gIHdlYXRoZXJjb2RlUGFyYS5pbm5lclRleHQgPSAnTWFpbmx5IGNsZWFyJztcclxuXHJcbiAgd2VhdGhlcmNvZGVEaXYuYXBwZW5kKHdlYXRoZXJjb2RlUGFyYSk7XHJcblxyXG4gIC8vIHRlbXBlcmF0dXJlcyBkaXZcclxuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGVtcEN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGVtcFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGFwcGFyZW50UGFyYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGFwcGFyZW50VGVtcFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgYXBwYXJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGFwcGFyZW50VW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gIHRlbXBEaXYuY2xhc3NMaXN0LmFkZCgndGVtcC1kaXYnKTtcclxuICB0ZW1wQ3VycmVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLWN1cnJlbnQnLCAndGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgdGVtcFVuaXQuY2xhc3NMaXN0LmFkZCgnZ2F1Z2UtdW5pdCcsICd0ZW1wZXJhdHVyZS11bml0Jyk7XHJcbiAgdGVtcFVuaXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgYXBwYXJlbnRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGFwcGFyZW50UGFyYURpdi5jbGFzc0xpc3QuYWRkKCd0ZW1wLWFwcGFyZW50LWRpdicpO1xyXG4gIGFwcGFyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wLWFwcGFyZW50JywgJ3RlbXBlcmF0dXJlLW51bWJlcicpO1xyXG4gIGFwcGFyZW50VW5pdC5jbGFzc0xpc3QuYWRkKCdnYXVnZS11bml0JywgJ3RlbXBlcmF0dXJlLXVuaXQnLCAnZ2F1Z2UtdW5pdC1hcHBhcmVudCcpO1xyXG5cclxuICBjb25zdCB1bml0c0VsZW1lbnRzID0gW3RlbXBVbml0LCBhcHBhcmVudFVuaXRdO1xyXG4gIHVuaXRzRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cykpO1xyXG4gIC8vIHRlbXBVbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVVuaXRzKTtcclxuXHJcbiAgdGVtcEN1cnJlbnQuaW5uZXJUZXh0ID0gJzAwMCc7XHJcbiAgYXBwYXJlbnRUZW1wUGFyYS5pbm5lclRleHQgPSAnRmVlbHMgbGlrZTogJztcclxuICBhcHBhcmVudFRlbXAuaW5uZXJUZXh0ID0gJzAwMCc7XHJcblxyXG4gIGFwcGFyZW50UGFyYURpdi5hcHBlbmQoYXBwYXJlbnRUZW1wUGFyYSwgYXBwYXJlbnRUZW1wLCBhcHBhcmVudFVuaXQpO1xyXG4gIHRlbXBEaXYuYXBwZW5kKHRlbXBDdXJyZW50LCB0ZW1wVW5pdCwgYXBwYXJlbnRQYXJhRGl2KTtcclxuXHJcbiAgLy8gaHVtaWRpdHkgZGl2XHJcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGh1bWlkaXR5R2F1Z2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUdhdWdlUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eS1kaXYnKTtcclxuICBodW1pZGl0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LXRpdGxlJyk7XHJcbiAgaHVtaWRpdHlHYXVnZS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eS1nYXVnZScpO1xyXG4gIGh1bWlkaXR5R2F1Z2VQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LWdhdWdlLXBlcmNlbnQnKTtcclxuICBodW1pZGl0eUdhdWdlUGVyY2VudC5kYXRhc2V0LnBlcmNlbnQgPSAwO1xyXG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XHJcblxyXG4gIGh1bWlkaXR5VGl0bGUuaW5uZXJUZXh0ID0gJ0h1bWlkaXR5ICUnO1xyXG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9ICcwMDAnO1xyXG5cclxuICBodW1pZGl0eUdhdWdlLmFwcGVuZChodW1pZGl0eSwgaHVtaWRpdHlHYXVnZVBlcmNlbnQpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZChodW1pZGl0eUdhdWdlLCBodW1pZGl0eVRpdGxlKTtcclxuXHJcbiAgLy8gd2luZCBkaXZcclxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdpbmRHYXVnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRDb21wYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQtZGl2Jyk7XHJcbiAgd2luZFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQtdGl0bGUtZGl2Jyk7XHJcbiAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3dpbmQtdGl0bGUnKTtcclxuICB3aW5kR2F1Z2UuY2xhc3NMaXN0LmFkZCgnd2luZC1nYXVnZScpO1xyXG4gIHdpbmRDb21wYXNzLmNsYXNzTGlzdC5hZGQoJ3dpbmQtY29tcGFzcycpO1xyXG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkJywgJ3NwZWVkLW51bWJlcicpO1xyXG4gIHdpbmRTcGVlZFVuaXQuY2xhc3NMaXN0LmFkZCgnZ2F1Z2UtdW5pdCcsICd3aW5kLXNwZWVkLXVuaXQnKTtcclxuICB3aW5kU3BlZWRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHdpbmRTcGVlZERpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKCd3aW5kLWRpcmVjdGlvbicpO1xyXG5cclxuICB3aW5kVGl0bGUuaW5uZXJUZXh0ID0gJ01heCB3aW5kJztcclxuICB3aW5kU3BlZWQuaW5uZXJUZXh0ID0gJzAwJztcclxuXHJcbiAgd2luZFNwZWVkVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cyk7XHJcblxyXG4gIHdpbmRUaXRsZURpdi5hcHBlbmQod2luZFRpdGxlLCB3aW5kU3BlZWRVbml0KTtcclxuICB3aW5kR2F1Z2UuYXBwZW5kKHdpbmRTcGVlZCwgd2luZENvbXBhc3MsIHdpbmRTcGVlZERpcmVjdGlvbik7XHJcbiAgd2luZERpdi5hcHBlbmQod2luZEdhdWdlLCB3aW5kVGl0bGVEaXYpO1xyXG5cclxuICAvLyBhcHBlbmQgZXZlcnl0aGluZ1xyXG4gIHNlY3Rpb24uYXBwZW5kKGNpdHlEaXYsIGljb24sIHdlYXRoZXJjb2RlRGl2LCB0ZW1wRGl2LCBodW1pZGl0eURpdiwgd2luZERpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCBkYWlseUNhcmQgZnJvbSAnLi93ZWF0aGVyRGFpbHkvZGFpbHlDYXJkJztcclxuaW1wb3J0IHdlYXRoZXJIb3VybHkgZnJvbSAnLi93ZWF0aGVySG91cmx5L3dlYXRoZXJIb3VybHknO1xyXG5pbXBvcnQgdXBkYXRlSG91cmx5V2VhdGhlciBmcm9tICcuL3dlYXRoZXJIb3VybHkvdXBkYXRlSG91cmx5V2VhdGhlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyRGFpbHlIb3VybHkoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBjb25zdCBkYWlseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZGFpbHktaG91cmx5Jyk7XHJcbiAgZGFpbHlEaXYuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kYWlseScsICdpbnZpc2libGUnKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcclxuICAgIGRhaWx5RGl2LmFwcGVuZChkYWlseUNhcmQoKSk7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uLmFwcGVuZChcclxuICAgIHdlYXRoZXJIb3VybHkoKSxcclxuICAgIGRhaWx5RGl2LFxyXG4gICk7XHJcblxyXG4gIC8vIGFkZGluZyBsaXN0ZW5lcnMgdG8gaG91cmx5IGNhcmRzXHJcbiAgY29uc3QgaG91cmx5Q2FyZHMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1jYXJkJyk7XHJcbiAgaG91cmx5Q2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWNhcmQnKTtcclxuICAgICAgYWxsQ2FyZHMuZm9yRWFjaCgodGhpc0NhcmQpID0+IHRoaXNDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgY29uc3QgdGhpc0NhcmQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIHRoaXNDYXJkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBjb25zdCBzdGFydEZyb21JbmRleCA9IGkgKiAyNDtcclxuICAgICAgdXBkYXRlSG91cmx5V2VhdGhlcihudWxsLCBzdGFydEZyb21JbmRleCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgY2hhbmdlVW5pdHMgZnJvbSAnLi4vLi4vY2hhbmdlVW5pdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGFpbHlDYXJkKCkge1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWNhcmQnKTtcclxuXHJcbiAgY2FyZC5hcHBlbmQoXHJcbiAgICB3ZWF0aGVyRGl2KCksXHJcbiAgICBwcmVjaXBpdGF0aW9ucygpLFxyXG4gICAgd2luZCgpLFxyXG4gICAgc3VucmlzZVN1bnNldCgpLFxyXG4gICAgdXZJbmRleCgpLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWF0aGVyRGl2KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRlbXBNYXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHRlbXBNYXhVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCB0ZW1wTWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB0ZW1wTWluVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2VhdGhlcicpO1xyXG4gIGRheS5jbGFzc0xpc3QuYWRkKCdkYWlseS1kYXknKTtcclxuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWN1cnJlbnQtaWNvbicsICdkYWlseS13ZWF0aGVyLWljb24nKTtcclxuICB0ZW1wTWF4RGl2LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXRlbXAtbWF4LWRpdicpO1xyXG4gIHRlbXBNYXguY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1tYXgnLCAndGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgdGVtcE1heFVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1tYXgtdW5pdCcsICdnYXVnZS11bml0JywgJ3RlbXBlcmF0dXJlLXVuaXQnKTtcclxuICB0ZW1wTWF4VW5pdC50eXBlID0gJ2NoZWNrYm94JztcclxuICB0ZW1wTWluRGl2LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXRlbXAtbWluLWRpdicpO1xyXG4gIHRlbXBNaW4uY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1taW4nLCAndGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgdGVtcE1pblVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1taW4tdW5pdCcsICdnYXVnZS11bml0JywgJ3RlbXBlcmF0dXJlLXVuaXQnKTtcclxuICB0ZW1wTWluVW5pdC50eXBlID0gJ2NoZWNrYm94JztcclxuICB3ZWF0aGVyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktd2VhdGhlci1kZXNjcmlwdGlvbicpO1xyXG5cclxuICBkYXkuaW5uZXJUZXh0ID0gJ2RheSBwbGFjZWhvbGRlcic7XHJcbiAgdGVtcE1heC5pbm5lclRleHQgPSAnMDAwLjAnO1xyXG4gIHRlbXBNaW4uaW5uZXJUZXh0ID0gJzAwMC4wJztcclxuICB3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ3dlYXRoZXIgZGVzY3JpcHRpb24nO1xyXG5cclxuICBbdGVtcE1heFVuaXQsIHRlbXBNaW5Vbml0XS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVW5pdHMpO1xyXG4gIH0pO1xyXG5cclxuICB0ZW1wTWF4RGl2LmFwcGVuZCh0ZW1wTWF4LCB0ZW1wTWF4VW5pdCk7XHJcbiAgdGVtcE1pbkRpdi5hcHBlbmQodGVtcE1pbiwgdGVtcE1pblVuaXQpO1xyXG4gIGRpdi5hcHBlbmQoXHJcbiAgICBkYXksXHJcbiAgICB3ZWF0aGVySWNvbixcclxuICAgIHRlbXBNYXhEaXYsXHJcbiAgICB0ZW1wTWluRGl2LFxyXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWNpcGl0YXRpb25zKCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBxdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXByZWNpcGl0YXRpb25zJyk7XHJcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdkYWlseS1wcmVjaXBpdGF0aW9ucy1pY29uJyk7XHJcbiAgcXVhbnRpdHkuY2xhc3NMaXN0LmFkZCgnZGFpbHktcHJlY2lwaXRhdGlvbi1xdWFudGl0eScpO1xyXG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXByZWNpcGl0YXRpb25zLWhvdXJzJyk7XHJcblxyXG4gIGRpdi50aXRsZSA9ICdRdWFudGl0eSBhbmQgdG90YWwgaG91cnMgb2YgcHJlY2lwaXRhdGlvbnMnO1xyXG4gIHF1YW50aXR5LmlubmVyVGV4dCA9ICcwMDBtbSc7XHJcbiAgaG91cnMuaW5uZXJUZXh0ID0gJzA6MDBocyc7XHJcblxyXG4gIGRpdi5hcHBlbmQoaWNvbiwgcXVhbnRpdHksIGhvdXJzKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luZCgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3Qgc3BlZWRVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdpbmQnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdpbmQtaWNvbicpO1xyXG4gIHNwZWVkLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdpbmQtc3BlZWQnLCAnc3BlZWQtbnVtYmVyJyk7XHJcbiAgc3BlZWRVbml0LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdpbmQtc3BlZWQtdW5pdCcsICdnYXVnZS11bml0JywgJ3dpbmQtc3BlZWQtdW5pdCcpO1xyXG4gIHNwZWVkVW5pdC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgZGl2LnRpdGxlID0gJ01heCB3aW5kIHNwZWVkJztcclxuICBzcGVlZC5pbm5lclRleHQgPSAnMDAnO1xyXG5cclxuICBzcGVlZFVuaXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlVW5pdHMpO1xyXG5cclxuICBkaXYuYXBwZW5kKGljb24sIHNwZWVkLCBzcGVlZFVuaXQpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdW5yaXNlU3Vuc2V0KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzdW5yaXNlSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBzdW5zZXRIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktc3VucmlzZS1zdW5zZXQnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXN1bnJpc2Utc3Vuc2V0LWljb24nKTtcclxuICBzdW5yaXNlSG91ci5jbGFzc0xpc3QuYWRkKCdkYWlseS1zdW5yaXNlJyk7XHJcbiAgc3Vuc2V0SG91ci5jbGFzc0xpc3QuYWRkKCdkYWlseS1zdW5zZXQnKTtcclxuXHJcbiAgZGl2LnRpdGxlID0gJ1N1bnJpc2UgYW5kIHN1bnNldCc7XHJcbiAgc3VucmlzZUhvdXIuaW5uZXJUZXh0ID0gJzAwOjAwaHMnO1xyXG4gIHN1bnNldEhvdXIuaW5uZXJUZXh0ID0gJzAwOjAwaHMnO1xyXG5cclxuICBkaXYuYXBwZW5kKGljb24sIHN1bnJpc2VIb3VyLCBzdW5zZXRIb3VyKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gdXZJbmRleCgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdXZQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktdXYnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXV2LWljb24nKTtcclxuICBpbmRleC5jbGFzc0xpc3QuYWRkKCdkYWlseS11di1pbmRleCcpO1xyXG4gIHV2UGFyYS5jbGFzc0xpc3QuYWRkKCdkYWlseS11di10ZXh0Jyk7XHJcblxyXG4gIGRpdi50aXRsZSA9ICdVViBpbmRleCc7XHJcbiAgaW5kZXguaW5uZXJUZXh0ID0gJzAwJztcclxuICB1dlBhcmEuaW5uZXJUZXh0ID0gJ1VWJztcclxuXHJcbiAgZGl2LmFwcGVuZChpY29uLCBpbmRleCwgdXZQYXJhKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGdldEhvdXJzLFxyXG4gIGdldE1pbnV0ZXMsXHJcbiAgYWRkRGF5cyxcclxuICBnZXREYXksXHJcbiAgZ2V0RGF0ZSxcclxufSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBnZXRXZWF0aGVyY29kZSBmcm9tICcuLi8uLi93ZWF0aGVyY29kZSc7XHJcbmltcG9ydCB3ZWF0aGVySWNvbiBmcm9tICcuLi8uLi93ZWF0aGVySWNvbic7XHJcbmltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQsIGtpbG9tZXRlcnNUb01pbGVzIH0gZnJvbSAnLi4vLi4vdW5pdENvbnZlcnRlcic7XHJcblxyXG5jb25zdCBkYXlOYW1lcyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURhaWx5V2VhdGhlcihkYXRhKSB7XHJcbiAgLy8gaWNvbiBhbmQgdGVtcHNcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGFpbHknKTtcclxuICBjb25zdCBkYXlzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktZGF5Jyk7XHJcbiAgY29uc3QgaWNvbnMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS13ZWF0aGVyLWljb24nKTtcclxuICBjb25zdCB0ZW1wc01heCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXRlbXAtbWF4Jyk7XHJcbiAgY29uc3QgdGVtcHNNaW4gPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS10ZW1wLW1pbicpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9ucyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXdlYXRoZXItZGVzY3JpcHRpb24nKTtcclxuICAvLyBleHRyYSBpbmZvXHJcbiAgY29uc3QgcHJlY2lwaXRhdGlvblF1YW50aXRpZXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5Jyk7XHJcbiAgY29uc3QgcHJlY2lwaXRhdGlvbkhvdXJzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMnKTtcclxuICBjb25zdCB3aW5kU3BlZWRzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktd2luZC1zcGVlZCcpO1xyXG4gIGNvbnN0IHN1bnJpc2VzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktc3VucmlzZScpO1xyXG4gIGNvbnN0IHN1bnNldHMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1zdW5zZXQnKTtcclxuICBjb25zdCB1dkluZGV4ZXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS11di1pbmRleCcpO1xyXG5cclxuICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG5cclxuICBkYXlzLmZvckVhY2goKGRheSwgaSkgPT4ge1xyXG4gICAgZGF5LmlubmVyVGV4dCA9IGkgPT09IDAgPyAnVG9kYXknIDogYCR7ZGF5TmFtZXNbZ2V0RGF5KGFkZERheXMobmV3IERhdGUoKSwgaSkpXX0gJHtnZXREYXRlKGFkZERheXMobmV3IERhdGUoKSwgaSkpfWA7XHJcbiAgfSk7XHJcbiAgaWNvbnMuZm9yRWFjaCgoaWNvbiwgaSkgPT4ge1xyXG4gICAgY29uc3QgaWNvblBhcnRzID0gZ2V0V2VhdGhlcmNvZGUoZGF0YS53ZWF0aGVyY29kZXNbaV0pLmljb247XHJcbiAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHdlYXRoZXJJY29uKGljb25QYXJ0cyk7XHJcbiAgfSk7XHJcbiAgdGVtcHNNYXguZm9yRWFjaCgodGVtcCwgaSkgPT4ge1xyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLnRlbXBzTWF4W2ldO1xyXG4gICAgdGVtcC5pbm5lclRleHQgPSB0ZW1wZXJhdHVyZTtcclxuICAgIHRlbXAuZGF0YXNldC5jZWxzaXVzID0gdGVtcGVyYXR1cmU7XHJcbiAgICB0ZW1wLmRhdGFzZXQuZmFocmVuaGVpdCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQodGVtcGVyYXR1cmUpO1xyXG4gIH0pO1xyXG4gIHRlbXBzTWluLmZvckVhY2goKGFwcGFyZW50LCBpKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRhdGEudGVtcHNNaW5baV07XHJcbiAgICBhcHBhcmVudC5pbm5lclRleHQgPSB0ZW1wZXJhdHVyZTtcclxuICAgIGFwcGFyZW50LmRhdGFzZXQuY2Vsc2l1cyA9IHRlbXBlcmF0dXJlO1xyXG4gICAgYXBwYXJlbnQuZGF0YXNldC5mYWhyZW5oZWl0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh0ZW1wZXJhdHVyZSk7XHJcbiAgfSk7XHJcbiAgZGVzY3JpcHRpb25zLmZvckVhY2goKGRlc2NyaXB0aW9uLCBpKSA9PiB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZ2V0V2VhdGhlcmNvZGUoZGF0YS53ZWF0aGVyY29kZXNbaV0pO1xyXG4gICAgY29uc3QgdHlwZSA9IHdlYXRoZXIud2VhdGhlcjtcclxuICAgIGNvbnN0IGhhc0ludGVuc2l0eSA9IHdlYXRoZXIuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpbnRlbnNpdHkgPSBgLCAke3dlYXRoZXIuaW50ZW5zaXR5fWA7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHt0eXBlfSR7aGFzSW50ZW5zaXR5ID8gaW50ZW5zaXR5IDogJyd9YDtcclxuICB9KTtcclxuICBwcmVjaXBpdGF0aW9uUXVhbnRpdGllcy5mb3JFYWNoKChxdWFudGl0eSwgaSkgPT4ge1xyXG4gICAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gYCR7ZGF0YS5wcmVjaXBpdGF0aW9uUXVhbnRpdGllc1tpXX1tbWA7XHJcbiAgfSk7XHJcbiAgcHJlY2lwaXRhdGlvbkhvdXJzLmZvckVhY2goKGhvdXJzLCBpKSA9PiB7XHJcbiAgICBob3Vycy5pbm5lclRleHQgPSBgJHtkYXRhLnByZWNpcGl0YXRpb25Ib3Vyc1tpXX1oc2A7XHJcbiAgfSk7XHJcbiAgd2luZFNwZWVkcy5mb3JFYWNoKChzcGVlZCwgaSkgPT4ge1xyXG4gICAgY29uc3Qgd2luZFNwZWVkID0gcGFyc2VJbnQoZGF0YS53aW5kU3BlZWRzW2ldLCAxMCk7XHJcbiAgICBzcGVlZC5pbm5lclRleHQgPSB3aW5kU3BlZWQ7XHJcbiAgICBzcGVlZC5kYXRhc2V0LmtpbG9tZXRlcnMgPSB3aW5kU3BlZWQ7XHJcbiAgICBzcGVlZC5kYXRhc2V0Lm1pbGVzID0gcGFyc2VJbnQoa2lsb21ldGVyc1RvTWlsZXMod2luZFNwZWVkKSwgMTApO1xyXG4gIH0pO1xyXG4gIHN1bnJpc2VzLmZvckVhY2goKHN1bnJpc2UsIGkpID0+IHtcclxuICAgIHN1bnJpc2UuaW5uZXJUZXh0ID0gYCR7Z2V0SG91cnMobmV3IERhdGUoZGF0YS5zdW5yaXNlc1tpXSkpfToke2dldE1pbnV0ZXMobmV3IERhdGUoZGF0YS5zdW5yaXNlc1tpXSkpfWhzYDtcclxuICB9KTtcclxuICBzdW5zZXRzLmZvckVhY2goKHN1bnNldCwgaSkgPT4ge1xyXG4gICAgc3Vuc2V0LmlubmVyVGV4dCA9IGAke2dldEhvdXJzKG5ldyBEYXRlKGRhdGEuc3Vuc2V0c1tpXSkpfToke2dldE1pbnV0ZXMobmV3IERhdGUoZGF0YS5zdW5zZXRzW2ldKSl9aHNgO1xyXG4gIH0pO1xyXG4gIHV2SW5kZXhlcy5mb3JFYWNoKCh1diwgaSkgPT4ge1xyXG4gICAgdXYuaW5uZXJUZXh0ID0gZGF0YS51dkluZGV4ZXNbaV0gPT09IG51bGwgPyAnLScgOiBkYXRhLnV2SW5kZXhlc1tpXTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDaGFydERldGFpbHMoKSB7XHJcbiAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnY2hhcnQtZGV0YWlscy1kaXYnLCAnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRzID0gW1xyXG4gICAge1xyXG4gICAgICBjbGFzczogJ3RlbXAnLFxyXG4gICAgICBoYXNTeW1ib2w6IHRydWUsXHJcbiAgICAgIHRleHQ6ICdUZW1wZXJhdHVyZTogJyxcclxuICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgdW5pdDogJ8KwQycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzczogJ2FwcGFyZW50JyxcclxuICAgICAgaGFzU3ltYm9sOiB0cnVlLFxyXG4gICAgICB0ZXh0OiAnRmVlbHMgbGlrZTogJyxcclxuICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgdW5pdDogJ8KwQycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzczogJ3dpbmQnLFxyXG4gICAgICBoYXNTeW1ib2w6IHRydWUsXHJcbiAgICAgIHRleHQ6ICdXaW5kOiAnLFxyXG4gICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICB1bml0OiAna20vaCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjbGFzczogJ2h1bWlkaXR5JyxcclxuICAgICAgaGFzU3ltYm9sOiB0cnVlLFxyXG4gICAgICB0ZXh0OiAnSHVtaWRpdHk6ICcsXHJcbiAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgIHVuaXQ6ICclJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzOiAnd2VhdGhlcmNvZGUnLFxyXG4gICAgICB0ZXh0OiAnV2VhdGhlcjogJyxcclxuICAgICAgdmFsdWU6ICdjbGVhcicsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYGNoYXJ0LWRldGFpbHMtJHtlbGVtZW50c1tpXS5jbGFzc31gKTtcclxuXHJcbiAgICBpZiAoZWxlbWVudHNbaV0/Lmhhc1N5bWJvbCkge1xyXG4gICAgICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LWRldGFpbHMtc3ltYm9sJywgYGNoYXJ0LWRldGFpbHMtc3ltYm9sLSR7ZWxlbWVudHNbaV0uY2xhc3N9YCk7XHJcbiAgICAgIGRpdi5hcHBlbmQoc3ltYm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1QYXJhLmNsYXNzTGlzdC5hZGQoYGNoYXJ0LWRldGFpbHMtcGFyYS0ke2VsZW1lbnRzW2ldLmNsYXNzfWApO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgaXRlbVRleHQuY2xhc3NMaXN0LmFkZChgY2hhcnQtZGV0YWlscy10ZXh0LSR7ZWxlbWVudHNbaV0uY2xhc3N9YCk7XHJcbiAgICBpdGVtVGV4dC5pbm5lclRleHQgPSBlbGVtZW50c1tpXS50ZXh0O1xyXG4gICAgaXRlbVBhcmEuYXBwZW5kKGl0ZW1UZXh0KTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoYGNoYXJ0LWRldGFpbHMtdmFsdWUtJHtlbGVtZW50c1tpXS5jbGFzc31gKTtcclxuICAgIHZhbHVlLmlubmVyVGV4dCA9IGVsZW1lbnRzW2ldLnZhbHVlO1xyXG4gICAgaXRlbVBhcmEuYXBwZW5kKHZhbHVlKTtcclxuXHJcbiAgICBpZiAoZWxlbWVudHNbaV0/LnVuaXQpIHtcclxuICAgICAgY29uc3QgdW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdW5pdC5jbGFzc0xpc3QuYWRkKGBjaGFydC1kZXRhaWxzLXVuaXQtJHtlbGVtZW50c1tpXS5jbGFzc31gKTtcclxuICAgICAgdW5pdC5pbm5lclRleHQgPSBlbGVtZW50c1tpXS51bml0O1xyXG4gICAgICBpdGVtUGFyYS5hcHBlbmQodW5pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmFwcGVuZChpdGVtUGFyYSk7XHJcbiAgICBkZXRhaWxzRGl2LmFwcGVuZChkaXYpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldGFpbHNEaXY7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2hhcnRMaW5lR3JvdXAoY2xhc3NOYW1lLCB2ZXJ0ZXhJbWFnZSwgdW5pdFN5bWJvbCwgdW5pdFR5cGUpIHtcclxuICBjb25zdCBzdmdOcyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XHJcbiAgY29uc3QgY2hhcnRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgJ2cnKTtcclxuICBjb25zdCBjaGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgJ3BhdGgnKTtcclxuICBjb25zdCBjaGFydE51bWJlcnMgPSBbXTtcclxuICBjb25zdCBjaGFydFZlcnRpY2VzID0gW107XHJcblxyXG4gIGlmICh1bml0U3ltYm9sICE9PSB1bmRlZmluZWQgJiYgdW5pdFR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjQ7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICd0ZXh0Jyk7XHJcbiAgICAgIGNvbnN0IHZhbHVlc051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgJ3RzcGFuJyk7XHJcbiAgICAgIGNvbnN0IHZhbHVlc1N5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgJ3RzcGFuJyk7XHJcbiAgICAgIGNvbnN0IG51bWJlcnNDbGFzc2VzID0gW2Ake2NsYXNzTmFtZX0tY2hhcnRgLCB1bml0VHlwZV07XHJcbiAgICAgIHZhbHVlcy5zZXRBdHRyaWJ1dGUoJ3gnLCAwKTtcclxuICAgICAgdmFsdWVzLnNldEF0dHJpYnV0ZSgneScsIDApO1xyXG4gICAgICB2YWx1ZXMuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcclxuICAgICAgdmFsdWVzLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS1jaGFydC10ZXh0YCk7XHJcbiAgICAgIHZhbHVlc051bWJlci5jbGFzc0xpc3QuYWRkKC4uLm51bWJlcnNDbGFzc2VzKTtcclxuICAgICAgdmFsdWVzTnVtYmVyLnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgICB2YWx1ZXNTeW1ib2wudGV4dENvbnRlbnQgPSBgJHt1bml0U3ltYm9sfWA7XHJcbiAgICAgIHZhbHVlcy5hcHBlbmQodmFsdWVzTnVtYmVyLCB2YWx1ZXNTeW1ib2wpO1xyXG4gICAgICBjaGFydE51bWJlcnMucHVzaCh2YWx1ZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjQ7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdmVydGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAnaW1hZ2UnKTtcclxuICAgIHZlcnRleC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX0tY2hhcnQtdmVydGV4YCk7XHJcbiAgICB2ZXJ0ZXguc2V0QXR0cmlidXRlKCd3aWR0aCcsIDIwKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB2ZXJ0ZXhJbWFnZSk7XHJcbiAgICB2ZXJ0ZXguc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAyMCk7XHJcbiAgICB2ZXJ0ZXguc2V0QXR0cmlidXRlKCd4JywgNTAwKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ3knLCA1MDApO1xyXG4gICAgdmVydGV4LmRhdGFzZXQuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGNoYXJ0VmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xyXG4gIH1cclxuXHJcbiAgY2hhcnRHcm91cC5jbGFzc0xpc3QuYWRkKCdob3VybHktY2hhcnQtZ3JvdXAnLCBgJHtjbGFzc05hbWV9LWNoYXJ0LWdyb3VwYCk7XHJcbiAgY2hhcnQuY2xhc3NMaXN0LmFkZChgaG91cmx5LWNoYXJ0LSR7Y2xhc3NOYW1lfWApO1xyXG5cclxuICBjaGFydEdyb3VwLmFwcGVuZChjaGFydCwgLi4uY2hhcnROdW1iZXJzLCAuLi5jaGFydFZlcnRpY2VzKTtcclxuXHJcbiAgcmV0dXJuIGNoYXJ0R3JvdXA7XHJcbn1cclxuIiwiaW1wb3J0IHsgc2hvd0hvdXJseURldGFpbCwgcG9zaXRpb25Ib3VybHlEZXRhaWwsIGhpZGVIb3VybHlEZXRhaWwgfSBmcm9tICcuL2hvdXJseURldGFpbEhvdmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJJY29ucygpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbWFnZXNBbmRIb3ZlciA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnY2hhcnQtd2VhdGhlci1pY29uJyk7XHJcbiAgICBpbWFnZXNBbmRIb3Zlci5wdXNoKGltZyk7XHJcbiAgICBpbWcuZGF0YXNldC5wb2ludGVkID0gaSArIDE7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHNob3dIb3VybHlEZXRhaWwpO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHBvc2l0aW9uSG91cmx5RGV0YWlsKTtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlkZUhvdXJseURldGFpbCk7XHJcbiAgfVxyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnY2hhcnQtd2VhdGhlci1pY29ucy1kaXYnKTtcclxuXHJcbiAgZGl2LmFwcGVuZCguLi5pbWFnZXNBbmRIb3Zlcik7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Q2hhcnQoZG9tRWxlbWVudCwgcG9zaXRpb25zWCwgaGVpZ2h0KSB7XHJcbiAgbGV0IGRyYXdUZW1wID0gJyc7XHJcbiAgcG9zaXRpb25zWC5mb3JFYWNoKChwb3MsIGkpID0+IHtcclxuICAgIGNvbnN0IGxpbmVDb21tYW5kID0gaSA9PT0gMCA/ICdNJyA6ICdMJztcclxuICAgIGNvbnN0IHBvc1ggPSBwb3M7XHJcbiAgICBkcmF3VGVtcCArPSBgICR7bGluZUNvbW1hbmR9ICR7cG9zWH0gJHtoZWlnaHR9YDtcclxuICB9KTtcclxuICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnZCcsIGRyYXdUZW1wKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Q2hhcnRWZXJ0aWNlcyhkb21FbGVtZW50cywgcG9zaXRpb25zWCwgaGVpZ2h0KSB7XHJcbiAgZG9tRWxlbWVudHMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiB7XHJcbiAgICB2ZXJ0ZXguc2V0QXR0cmlidXRlKCdjeCcsIGAke3Bvc2l0aW9uc1hbaV19YCk7XHJcbiAgICB2ZXJ0ZXguc2V0QXR0cmlidXRlKCdjeScsIGAke2hlaWdodH1gKTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZ2VQZXJjZW50KG1pbiwgbWF4LCB0YXJnZXQpIHtcclxuICBjb25zdCBwZXJjZW50UmFuZ2UgPSAoKHRhcmdldCAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDA7XHJcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGFyc2VGbG9hdChwZXJjZW50UmFuZ2UpLnRvRml4ZWQoMSkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZVBlcmNlbnRUb1BpeGVscyhwZXJjZW50LCBoZWlnaHQpIHtcclxuICBjb25zdCB0b1BpeGVscyA9ICgocGVyY2VudCAqIGhlaWdodCkgLyAxMDApO1xyXG4gIC8vIGludmVydCBkZWZhdWx0IFkgYXhpcyBiZWhhdmlvciwgdXNlIGJhc2UgYXMgemVybywgYXNjZW5kIGdvaW5nIHVwXHJcbiAgcmV0dXJuICh0b1BpeGVscyAqIC0xKSArIGhlaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCZXR3ZWVuKGRvbUVsZW1lbnRzLCBwYXJlbnRXaWR0aCkge1xyXG4gIGxldCBzdGFydEZyb207XHJcbiAgbGV0IGV2ZXJ5O1xyXG4gIGlmIChwYXJlbnRXaWR0aCA8IDE5MCkge1xyXG4gICAgc3RhcnRGcm9tID0gMDtcclxuICAgIGV2ZXJ5ID0gMDtcclxuICB9IGVsc2UgaWYgKHBhcmVudFdpZHRoIDwgMjkwKSB7XHJcbiAgICBzdGFydEZyb20gPSAyO1xyXG4gICAgZXZlcnkgPSA0O1xyXG4gIH0gZWxzZSBpZiAocGFyZW50V2lkdGggPCA0MDApIHtcclxuICAgIHN0YXJ0RnJvbSA9IDI7XHJcbiAgICBldmVyeSA9IDM7XHJcbiAgfSBlbHNlIGlmIChwYXJlbnRXaWR0aCA8IDk1MCkge1xyXG4gICAgc3RhcnRGcm9tID0gMTtcclxuICAgIGV2ZXJ5ID0gMjtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhcnRGcm9tID0gMTtcclxuICAgIGV2ZXJ5ID0gLTE7XHJcbiAgfVxyXG4gIGRvbUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgIGlmICgoaSArIHN0YXJ0RnJvbSkgJSBldmVyeSAhPT0gMCkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICBlbGVtZW50LmRhdGFzZXQuaGlkZGVuID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHQyNShhcnJheSwgc3RhcnRGcm9tSW5kZXggPSAwKSB7XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI1OyBpICs9IDEpIHtcclxuICAgIG5ld0FycmF5LnB1c2goYXJyYXlbaSArIHN0YXJ0RnJvbUluZGV4XSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3QXJyYXk7XHJcbn1cclxuIiwiaW1wb3J0IGdldFdlYXRoZXJjb2RlIGZyb20gJy4uLy4uL3dlYXRoZXJjb2RlJztcclxuaW1wb3J0IHsgY2Vsc2l1c1RvRmFocmVuaGVpdCwga2lsb21ldGVyc1RvTWlsZXMgfSBmcm9tICcuLi8uLi91bml0Q29udmVydGVyJztcclxuXHJcbmxldCB0ZW1wVmVydGljZXM7XHJcbmxldCB3aW5kVmVydGljZXM7XHJcbmxldCBodW1pZGl0eVZlcnRpY2VzO1xyXG5sZXQgdGVtcEFwcGFyZW50VmVydGljZXM7XHJcbmxldCBkZXRhaWxzQ2FyZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93SG91cmx5RGV0YWlsKCkge1xyXG4gIGNvbnN0IHBvaW50ZWQgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQucG9pbnRlZCwgMTApO1xyXG4gIGRldGFpbHNDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXJ0LWRldGFpbHMtZGl2Jyk7XHJcbiAgZGV0YWlsc0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgLy8gdW5pdCBjaGVja2JveGVzXHJcbiAgY29uc3QgdGVtcFVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXVuaXQnKTtcclxuICBjb25zdCBzcGVlZFVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWQtdW5pdCcpO1xyXG4gIC8vIGVhY2ggZWxlbWVudCBvbiBjYXJkXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLXZhbHVlLXRlbXAnKTtcclxuICBjb25zdCB0ZW1wVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLXVuaXQtdGVtcCcpO1xyXG4gIGNvbnN0IGFwcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXJ0LWRldGFpbHMtdmFsdWUtYXBwYXJlbnQnKTtcclxuICBjb25zdCBhcHBhcmVudFVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtZGV0YWlscy11bml0LWFwcGFyZW50Jyk7XHJcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLXZhbHVlLXdpbmQnKTtcclxuICBjb25zdCB3aW5kVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLXVuaXQtd2luZCcpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXJ0LWRldGFpbHMtdmFsdWUtaHVtaWRpdHknKTtcclxuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXJ0LWRldGFpbHMtdmFsdWUtd2VhdGhlcmNvZGUnKTtcclxuICAvLyB3aW5kIGljb24sIGZvciByb3RhdGlvblxyXG4gIGNvbnN0IHdpbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXJ0LWRldGFpbHMtc3ltYm9sLXdpbmQnKTtcclxuICAvLyB2ZXJ0aWNlc1xyXG4gIHRlbXBWZXJ0aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLWNoYXJ0LXZlcnRleCcpO1xyXG4gIHdpbmRWZXJ0aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aW5kLWNoYXJ0LXZlcnRleCcpO1xyXG4gIGh1bWlkaXR5VmVydGljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaHVtaWRpdHktY2hhcnQtdmVydGV4Jyk7XHJcbiAgdGVtcEFwcGFyZW50VmVydGljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcC1hcHBhcmVudC1jaGFydC12ZXJ0ZXgnKTtcclxuICAvLyB3ZWF0aGVyIGRlc2NyaXB0aW9uXHJcbiAgY29uc3Qgd2VhdGhlclR5cGUgPSBnZXRXZWF0aGVyY29kZShwYXJzZUludCh0aGlzLmRhdGFzZXQud2VhdGhlcmNvZGUsIDEwKSkud2VhdGhlcjtcclxuICBjb25zdCB3ZWF0aGVySW50ZW5zaXR5ID0gZ2V0V2VhdGhlcmNvZGUocGFyc2VJbnQodGhpcy5kYXRhc2V0LndlYXRoZXJjb2RlLCAxMCkpPy5pbnRlbnNpdHk7XHJcblxyXG4gIHRlbXAuaW5uZXJUZXh0ID0gdGVtcFVuaXRzLmNoZWNrZWRcclxuICAgID8gY2Vsc2l1c1RvRmFocmVuaGVpdCh0aGlzLmRhdGFzZXQudGVtcCkgOiB0aGlzLmRhdGFzZXQudGVtcDtcclxuICB0ZW1wVW5pdC5pbm5lclRleHQgPSB0ZW1wVW5pdHMuY2hlY2tlZCA/ICfCsEYnIDogJ8KwQyc7XHJcbiAgYXBwYXJlbnQuaW5uZXJUZXh0ID0gdGVtcFVuaXRzLmNoZWNrZWRcclxuICAgID8gY2Vsc2l1c1RvRmFocmVuaGVpdCh0aGlzLmRhdGFzZXQuYXBwYXJlbnQpIDogdGhpcy5kYXRhc2V0LmFwcGFyZW50O1xyXG4gIGFwcGFyZW50VW5pdC5pbm5lclRleHQgPSB0ZW1wVW5pdHMuY2hlY2tlZCA/ICfCsEYnIDogJ8KwQyc7XHJcbiAgd2luZC5pbm5lclRleHQgPSBzcGVlZFVuaXRzLmNoZWNrZWQgPyBraWxvbWV0ZXJzVG9NaWxlcyh0aGlzLmRhdGFzZXQud2luZCkgOiB0aGlzLmRhdGFzZXQud2luZDtcclxuICB3aW5kVW5pdC5pbm5lclRleHQgPSBzcGVlZFVuaXRzLmNoZWNrZWQgPyAnIG1waCcgOiAnIGttL2gnO1xyXG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9IHRoaXMuZGF0YXNldC5odW1pZGl0eTtcclxuICB3ZWF0aGVyLmlubmVyVGV4dCA9IGAke3dlYXRoZXJUeXBlfSR7d2VhdGhlckludGVuc2l0eSA/IGAsICR7d2VhdGhlckludGVuc2l0eX1gIDogJyd9YDtcclxuXHJcbiAgd2luZEljb24uc3R5bGUucm90YXRlID0gYCR7dGhpcy5kYXRhc2V0LndpbmREaXJlY3Rpb259ZGVnYDtcclxuXHJcbiAgY29uc3QgYWxsVmVydGljZXMgPSBbdGVtcFZlcnRpY2VzLCB3aW5kVmVydGljZXMsIGh1bWlkaXR5VmVydGljZXMsIHRlbXBBcHBhcmVudFZlcnRpY2VzXTtcclxuICBhbGxWZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0aWNlcykgPT4ge1xyXG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiB7XHJcbiAgICAgIGlmIChwb2ludGVkID09PSBpKSB7XHJcbiAgICAgICAgdmVydGV4LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZlcnRleC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkhvdXJseURldGFpbChlKSB7XHJcbiAgZGV0YWlsc0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtZGV0YWlscy1kaXYnKTtcclxuICBjb25zdCBob3VybHlQYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hhcnQtd2VhdGhlci1pY29ucy1kaXYnKTtcclxuICBjb25zdCBkZXRhaWxzQ2FyZFdpZHRoID0gZGV0YWlsc0NhcmQuY2xpZW50V2lkdGg7XHJcbiAgY29uc3QgaG91cmx5UGFyZW50V2lkdGggPSBob3VybHlQYXJlbnQuY2xpZW50V2lkdGg7XHJcbiAgY29uc3QgbW91c2VYID0gZS5sYXllclg7XHJcbiAgY29uc3QgbW91c2VZID0gZS5sYXllclk7XHJcbiAgY29uc3QgcGl4ZWxzQmVmb3JlQm9yZGVyID0gMjA7XHJcbiAgY29uc3QgZGlzdGFuY2VGcm9tQ3Vyc29yID0gNTtcclxuICBjb25zdCBib3JkZXJSYWRpdXMgPSAxNTtcclxuICBjb25zdCBpc092ZXJmbG93aW5nID0gbW91c2VYICsgKGRldGFpbHNDYXJkV2lkdGggKyBwaXhlbHNCZWZvcmVCb3JkZXIpID4gaG91cmx5UGFyZW50V2lkdGg7XHJcbiAgZGV0YWlsc0NhcmQuc3R5bGUubGVmdCA9IGAke21vdXNlWH1weGA7XHJcbiAgZGV0YWlsc0NhcmQuc3R5bGUudG9wID0gYCR7bW91c2VZfXB4YDtcclxuICBkZXRhaWxzQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBpc092ZXJmbG93aW5nXHJcbiAgICA/IGB0cmFuc2xhdGUoY2FsYygtMTAwJSAtICR7ZGlzdGFuY2VGcm9tQ3Vyc29yfXB4KSwgY2FsYygtMTAwJSAtICR7ZGlzdGFuY2VGcm9tQ3Vyc29yfXB4KSlgXHJcbiAgICA6IGB0cmFuc2xhdGUoJHtkaXN0YW5jZUZyb21DdXJzb3J9cHgsIGNhbGMoLTEwMCUgLSAke2Rpc3RhbmNlRnJvbUN1cnNvcn1weCkpYDtcclxuICBkZXRhaWxzQ2FyZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBpc092ZXJmbG93aW5nXHJcbiAgICA/IGAke2JvcmRlclJhZGl1c31weCAke2JvcmRlclJhZGl1c31weCAwcHggJHtib3JkZXJSYWRpdXN9cHhgXHJcbiAgICA6IGAke2JvcmRlclJhZGl1c31weCAke2JvcmRlclJhZGl1c31weCAke2JvcmRlclJhZGl1c31weCAwcHhgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUhvdXJseURldGFpbCgpIHtcclxuICBkZXRhaWxzQ2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBhbGxWZXJ0aWNlcyA9IFt0ZW1wVmVydGljZXMsIHdpbmRWZXJ0aWNlcywgaHVtaWRpdHlWZXJ0aWNlcywgdGVtcEFwcGFyZW50VmVydGljZXNdO1xyXG4gIGFsbFZlcnRpY2VzLmZvckVhY2goKHZlcnRpY2VzKSA9PiB7XHJcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcclxuICAgICAgaWYgKHZlcnRleC5kYXRhc2V0LmhpZGRlbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgdmVydGV4LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZlcnRleC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGlkZUJldHdlZW4gfSBmcm9tICcuL2dyYXBoRnVuY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvc2l0aW9uTGluZXNBbmRIb3Vycyhob3VycywgcG9zaXRpb25zWCwgdGV4dFNwYWNlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgLy8gcmVwZWF0IGZpcnN0IHZhbHVlIGZvciBmaXJzdCBob3VyIG9uIG1pc3NpbmcgOHRoIGRheVxyXG4gIGlmIChob3Vycy5hdCgtMSkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgZmlyc3RIb3VyID0gaG91cnNbMF07XHJcbiAgICBob3Vyc1tob3Vycy5sZW5ndGggLSAxXSA9IGZpcnN0SG91cjtcclxuICB9XHJcbiAgY29uc3Qgc3RhcnRzUGFzdFplcm8gPSBuZXcgRGF0ZShob3Vyc1swXSkuZ2V0SG91cnMoKSAhPT0gMDtcclxuICBjb25zdCBob3VyTGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcnQtbGluZS1ob3VyJyk7XHJcbiAgY29uc3QgYmFzZUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtbGluZS1iYXNlJyk7XHJcbiAgY29uc3QgaG91cnNUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Vycy1jaGFydC10ZXh0Jyk7XHJcbiAgY29uc3QgaG91cnNOdW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJzLWNoYXJ0LW51bWJlcnMnKTtcclxuICAvLyBwb3NpdGlvbiBsaW5lc1xyXG4gIGJhc2VMaW5lLnNldEF0dHJpYnV0ZSgneDEnLCBgJHswfWApO1xyXG4gIGJhc2VMaW5lLnNldEF0dHJpYnV0ZSgneTEnLCBgJHtoZWlnaHQgLSAodGV4dFNwYWNlIC8gMil9YCk7XHJcbiAgYmFzZUxpbmUuc2V0QXR0cmlidXRlKCd4MicsIGAke3dpZHRofWApO1xyXG4gIGJhc2VMaW5lLnNldEF0dHJpYnV0ZSgneTInLCBgJHtoZWlnaHQgLSAodGV4dFNwYWNlIC8gMil9YCk7XHJcblxyXG4gIGhvdXJMaW5lcy5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XHJcbiAgICBjb25zdCBwb3NpdGlvblggPSBwb3NpdGlvbnNYW2ldO1xyXG4gICAgY29uc3QgbG9jYWxIb3VyID0gbmV3IERhdGUoaG91cnNbaV0pLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBpc1plcm9Ib3VyID0gc3RhcnRzUGFzdFplcm8gJiYgbG9jYWxIb3VyICUgMjQgPT09IDA7XHJcbiAgICBsZXQgbGluZUxlbmd0aCA9IDQ7XHJcbiAgICBsZXQgc3RhcnRGcm9tO1xyXG4gICAgbGV0IGV2ZXJ5O1xyXG4gICAgaWYgKHdpZHRoIDwgMTkwKSB7XHJcbiAgICAgIHN0YXJ0RnJvbSA9IDA7XHJcbiAgICAgIGV2ZXJ5ID0gMDtcclxuICAgIH0gZWxzZSBpZiAod2lkdGggPCAyOTApIHtcclxuICAgICAgc3RhcnRGcm9tID0gMjtcclxuICAgICAgZXZlcnkgPSA0O1xyXG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDQwMCkge1xyXG4gICAgICBzdGFydEZyb20gPSAyO1xyXG4gICAgICBldmVyeSA9IDM7XHJcbiAgICB9IGVsc2UgaWYgKHdpZHRoIDwgOTUwKSB7XHJcbiAgICAgIHN0YXJ0RnJvbSA9IDE7XHJcbiAgICAgIGV2ZXJ5ID0gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXJ0RnJvbSA9IDE7XHJcbiAgICAgIGV2ZXJ5ID0gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAoKGkgKyBzdGFydEZyb20pICUgZXZlcnkgPT09IDApIGxpbmVMZW5ndGggPSAxMDtcclxuICAgIGlmIChpc1plcm9Ib3VyKSBsaW5lTGVuZ3RoID0gMzA7XHJcbiAgICBsaW5lLnNldEF0dHJpYnV0ZSgneDEnLCBgJHtwb3NpdGlvblh9YCk7XHJcbiAgICBsaW5lLnNldEF0dHJpYnV0ZSgneTEnLCBgJHtoZWlnaHQgLSAodGV4dFNwYWNlIC8gMikgKyAoaXNaZXJvSG91ciA/IDEwIDogMCl9YCk7XHJcbiAgICBsaW5lLnNldEF0dHJpYnV0ZSgneDInLCBgJHtwb3NpdGlvblh9YCk7XHJcbiAgICBsaW5lLnNldEF0dHJpYnV0ZSgneTInLCBgJHtoZWlnaHQgLSAodGV4dFNwYWNlIC8gMikgLSBsaW5lTGVuZ3RofWApO1xyXG4gIH0pO1xyXG4gIC8vIHBvc2l0aW9uIGhvdXIgdGV4dFxyXG4gIGhvdXJzVGV4dHMuZm9yRWFjaCgodGV4dCwgaSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dE1hcmdpbiA9IDE7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneCcsIGAke3Bvc2l0aW9uc1hbaV19YCk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneScsIGAke2hlaWdodCAtIHRleHRNYXJnaW59YCk7XHJcbiAgfSk7XHJcbiAgaGlkZUJldHdlZW4oaG91cnNUZXh0cywgd2lkdGgpO1xyXG4gIC8vIGFkZCBob3VyIG51bWJlcnNcclxuICBob3Vyc051bWJlcnMuZm9yRWFjaCgoaG91ciwgaSkgPT4ge1xyXG4gICAgY29uc3QgdGhpc0hvdXIgPSBuZXcgRGF0ZShob3Vyc1tpXSkuZ2V0SG91cnMoKTtcclxuICAgIGhvdXIudGV4dENvbnRlbnQgPSB0aGlzSG91cjtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3RhdGVDaGFydFZlcnRpY2VzKHZlcnRpY2VzLCBhbmdsZXMpIHtcclxuICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IHtcclxuICAgIHZlcnRleC5zdHlsZS5yb3RhdGUgPSBgJHthbmdsZXNbaV19ZGVnYDtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDaGFydEhvdmVyRGF0YXNldChcclxuICB0ZW1wcyxcclxuICBhcHBhcmVudHMsXHJcbiAgd2luZFNwZWVkcyxcclxuICB3aW5kRGlyZWN0b25zLFxyXG4gIGh1bWlkaXR5LFxyXG4gIHdlYXRoZXJjb2RlcyxcclxuKSB7XHJcbiAgY29uc3QgY2hhcnRIb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFydC13ZWF0aGVyLWljb24nKTtcclxuICAvLyByZW1vdmluZyB1bm5lY2VzYXJ5IGZpcnN0IGFuZCBsYXN0IGVsZW1lbnRzXHJcbiAgW3RlbXBzLCBhcHBhcmVudHMsIHdpbmRTcGVlZHMsIGh1bWlkaXR5LCB3ZWF0aGVyY29kZXNdXHJcbiAgICAuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNoaWZ0KCk7XHJcbiAgICAgIGRhdGEucG9wKCk7XHJcbiAgICB9KTtcclxuICBjaGFydEhvdmVyLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgIC8vIGFzIHRoZSBmaXJzdCBkaXYgc3RhcnRzIGZyb20gdGhlIDJuZCBtYXJrLCB0aGUgZmlyc3QgZWxlbWVudCBpcyBkaXNjYXJkZWRcclxuICAgIGl0ZW0uZGF0YXNldC50ZW1wID0gdGVtcHNbaV07XHJcbiAgICBpdGVtLmRhdGFzZXQuYXBwYXJlbnQgPSBhcHBhcmVudHNbaV07XHJcbiAgICBpdGVtLmRhdGFzZXQud2luZCA9IHdpbmRTcGVlZHNbaV07XHJcbiAgICBpdGVtLmRhdGFzZXQud2luZERpcmVjdGlvbiA9IHdpbmREaXJlY3RvbnNbaV07XHJcbiAgICBpdGVtLmRhdGFzZXQuaHVtaWRpdHkgPSBodW1pZGl0eVtpXTtcclxuICAgIGl0ZW0uZGF0YXNldC53ZWF0aGVyY29kZSA9IHdlYXRoZXJjb2Rlc1tpXTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBzZXRIb3VycyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4uLy4uL3dlYXRoZXJJY29uJztcclxuaW1wb3J0IGdldFdlYXRoZXJjb2RlIGZyb20gJy4uLy4uL3dlYXRoZXJjb2RlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0SWNvbnMoXHJcbiAgbmV4dDI1V2VhdGhlcmNvZGVzLFxyXG4gIHN1bnJpc2UsXHJcbiAgc3Vuc2V0LFxyXG4gIG5leHQyNUhvdXJzLFxyXG4gIHdpZHRoLFxyXG4pIHtcclxuICBjb25zdCBpY29uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC13ZWF0aGVyLWljb25zLWRpdicpO1xyXG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJ0LXdlYXRoZXItaWNvbicpO1xyXG4gIGxldCBwcmV2aW91c1dlYXRoZXJjb2RlO1xyXG5cclxuICBpY29uc0Rpdi5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuXHJcbiAgaWNvbnMuZm9yRWFjaCgoaWNvbiwgaSkgPT4ge1xyXG4gICAgY29uc3QgaWNvbldpZHRoID0gd2lkdGggLyAyMztcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyY29kZSA9IG5leHQyNVdlYXRoZXJjb2Rlc1tpICsgMV07XHJcbiAgICBjb25zdCBpY29uUGFydHMgPSBnZXRXZWF0aGVyY29kZShjdXJyZW50V2VhdGhlcmNvZGUpLmljb247XHJcbiAgICBpZiAoaSA9PT0gMCkgaWNvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7aWNvbldpZHRoIC8gMn1weGA7XHJcbiAgICBpZiAoaSA9PT0gaWNvbnMubGVuZ3RoIC0gMSkgaWNvbi5zdHlsZS5tYXJnaW5SaWdodCA9IGAke2ljb25XaWR0aCAvIDJ9cHhgO1xyXG5cclxuICAgIC8vIHVzZSBpY29uIG9ubHkgaWYgaXQncyBkaWZmZXJlbnQgZnJvbSB0aGUgcHJldmlvdXMgb25lXHJcbiAgICBpZiAoY3VycmVudFdlYXRoZXJjb2RlICE9PSBwcmV2aW91c1dlYXRoZXJjb2RlKSB7XHJcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gd2VhdGhlckljb24oXHJcbiAgICAgICAgaWNvblBhcnRzLFxyXG4gICAgICAgIG5ldyBEYXRlKG5leHQyNUhvdXJzW2kgKyAxXSksXHJcbiAgICAgICAgc2V0SG91cnMobmV3IERhdGUobmV4dDI1SG91cnNbaSArIDFdKSwgbmV3IERhdGUoc3VucmlzZSkuZ2V0SG91cnMoKSksXHJcbiAgICAgICAgc2V0SG91cnMobmV3IERhdGUobmV4dDI1SG91cnNbaSArIDFdKSwgbmV3IERhdGUoc3Vuc2V0KS5nZXRIb3VycygpKSxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzV2VhdGhlcmNvZGUgPSBjdXJyZW50V2VhdGhlcmNvZGU7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmFuZ2VQZXJjZW50LCByYW5nZVBlcmNlbnRUb1BpeGVscywgaGlkZUJldHdlZW4gfSBmcm9tICcuL2dyYXBoRnVuY3Rpb25zJztcclxuaW1wb3J0IHZhbHVlQWRqdXN0IGZyb20gJy4uLy4uL3ZhbHVlQWRqdXN0JztcclxuaW1wb3J0IHsgY2Vsc2l1c1RvRmFocmVuaGVpdCwga2lsb21ldGVyc1RvTWlsZXMgfSBmcm9tICcuLi8uLi91bml0Q29udmVydGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0TGluZShcclxuICB2YWx1ZXMsXHJcbiAgcG9zaXRpb25zWCxcclxuICBjaGFydHNIZWlnaHQsXHJcbiAgaG91cnMsXHJcbiAgdGV4dFNwYWNlLFxyXG4gIHdpZHRoLFxyXG4gIGNsYXNzTmFtZSxcclxuICB1bml0VHlwZSxcclxuICBmaXhlZE1pblZhbHVlLFxyXG4gIGZpeGVkTWF4VmFsdWUsXHJcbikge1xyXG4gIC8vIHJlcGVhdCBwcmV2aW9zIHZhbHVlIGZvciBtaXNzaW5nIDh0aCBkYXkgZGF0YSBhdCAwaHNcclxuICBpZiAodmFsdWVzLmF0KC0xKSA9PT0gdW5kZWZpbmVkKSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdID0gdmFsdWVzLmF0KC0yKTtcclxuICBjb25zdCBjaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob3VybHktY2hhcnQtJHtjbGFzc05hbWV9YCk7XHJcbiAgY29uc3QgY2hhcnRWZXJ0aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX0tY2hhcnQtdmVydGV4YCk7XHJcbiAgY29uc3QgY2hhcnRUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX0tY2hhcnQtdGV4dGApO1xyXG4gIGNvbnN0IGNoYXJ0TnVtYmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX0tY2hhcnQtdGV4dCAke3VuaXRUeXBlfWApO1xyXG4gIGNvbnN0IHBvc2l0aW9uc1kgPSBbXTtcclxuICAvLyBzZXQgdmFsdWVzIGZvciB2ZXJ0ZXggdmVydGljYWwgcG9zaXRpb25zXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaG91cnM7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZXNbaV0pO1xyXG4gICAgcG9zaXRpb25zWS5wdXNoKGN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IG1pblZhbHVlID0gdHlwZW9mIGZpeGVkTWluVmFsdWUgPT09ICdudW1iZXInID8gZml4ZWRNaW5WYWx1ZSA6IHBvc2l0aW9uc1kucmVkdWNlKChtaW4sIGN1cnJlbnQpID0+IChtaW4gPCBjdXJyZW50ID8gbWluIDogY3VycmVudCkpO1xyXG4gIGNvbnN0IG1heFZhbHVlID0gdHlwZW9mIGZpeGVkTWF4VmFsdWUgPT09ICdudW1iZXInID8gZml4ZWRNYXhWYWx1ZSA6IHBvc2l0aW9uc1kucmVkdWNlKChtYXgsIGN1cnJlbnQpID0+IChtYXggPiBjdXJyZW50ID8gbWF4IDogY3VycmVudCkpO1xyXG4gIC8vIHR1cm4gdmFsdWVzIHRvIHBpeGVsc1xyXG4gIGNvbnN0IHBvc2l0aW9uc1RvUGl4ZWxzID0gcG9zaXRpb25zWS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBwZXJjZW50ID0gcmFuZ2VQZXJjZW50KG1pblZhbHVlLCBtYXhWYWx1ZSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHJhbmdlUGVyY2VudFRvUGl4ZWxzKHBlcmNlbnQsIGNoYXJ0c0hlaWdodCk7XHJcbiAgfSk7XHJcbiAgLy8gdXNlIHZhbHVlcyBvbiBkcmF3XHJcbiAgbGV0IGRyYXdDaGFydCA9ICcnO1xyXG4gIHBvc2l0aW9uc1guZm9yRWFjaCgocG9zLCBpKSA9PiB7XHJcbiAgICBjb25zdCBsaW5lQ29tbWFuZCA9IGkgPT09IDAgPyAnTScgOiAnTCc7XHJcbiAgICBjb25zdCBwb3NYID0gcG9zO1xyXG4gICAgY29uc3QgcG9zWSA9IHBvc2l0aW9uc1RvUGl4ZWxzW2ldO1xyXG4gICAgZHJhd0NoYXJ0ICs9IGAgJHtsaW5lQ29tbWFuZH0gJHtwb3NYfSAke3Bvc1kgKyAodGV4dFNwYWNlIC8gMil9YDtcclxuICB9KTtcclxuXHJcbiAgY2hhcnQuc2V0QXR0cmlidXRlKCdkJywgZHJhd0NoYXJ0KTtcclxuXHJcbiAgaWYgKGNsYXNzTmFtZSA9PT0gJ3RlbXAnKSB7XHJcbiAgLy8gcG9zaXRpb24gdGhlIG51bWJlcnMgb24gZWFjaCB2ZXJ0ZXhcclxuICAgIGNoYXJ0VGV4dHMuZm9yRWFjaCgodGV4dCwgaSkgPT4ge1xyXG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneCcsIHBvc2l0aW9uc1hbaV0pO1xyXG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneScsIHBvc2l0aW9uc1RvUGl4ZWxzW2ldICsgKHRleHRTcGFjZSAvIDQpKTtcclxuICAgIH0pO1xyXG4gICAgaGlkZUJldHdlZW4oY2hhcnRUZXh0cywgd2lkdGgpO1xyXG4gICAgY2hhcnROdW1iZXJzLmZvckVhY2goKG51bWJlciwgaSkgPT4ge1xyXG4gICAgICB2YWx1ZUFkanVzdChudW1iZXIsIG51bWJlci50ZXh0Q29udGVudCwgdmFsdWVzW2ldLCAxMCk7XHJcbiAgICAgIGlmICh1bml0VHlwZSA9PT0gJy50ZW1wZXJhdHVyZS1udW1iZXInKSB7XHJcbiAgICAgICAgbnVtYmVyLmRhdGFzZXQuY2Vsc2l1cyA9IHZhbHVlc1tpXTtcclxuICAgICAgICBudW1iZXIuZGF0YXNldC5mYWhyZW5oZWl0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh2YWx1ZXNbaV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHVuaXRUeXBlID09PSAnLnNwZWVkLW51bWJlcicpIHtcclxuICAgICAgICBudW1iZXIuZGF0YXNldC5raWxvbWV0ZXJzID0gdmFsdWVzW2ldO1xyXG4gICAgICAgIG51bWJlci5kYXRhc2V0Lm1pbGVzID0ga2lsb21ldGVyc1RvTWlsZXModmFsdWVzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBwb3NpdGlvbiB2ZXJ0aWNlc1xyXG4gIGNoYXJ0VmVydGljZXMuZm9yRWFjaCgodmVydGV4LCBpKSA9PiB7XHJcbiAgICBjb25zdCB2ZXJ0ZXhXaWR0aCA9IHZlcnRleC5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XHJcbiAgICBjb25zdCB2ZXJ0ZXhIZWlnaHQgPSB2ZXJ0ZXguZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcclxuICAgIGNvbnN0IHZlcnRleFggPSBwb3NpdGlvbnNYW2ldIC0gKHZlcnRleFdpZHRoIC8gMik7XHJcbiAgICBjb25zdCB2ZXJ0ZXhZID0gKHBvc2l0aW9uc1RvUGl4ZWxzW2ldICsgKHRleHRTcGFjZSAvIDIpKSAtICh2ZXJ0ZXhIZWlnaHQgLyAyKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ3gnLCB2ZXJ0ZXhYKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ3knLCB2ZXJ0ZXhZKTtcclxuICB9KTtcclxuICBpZiAoY2xhc3NOYW1lID09PSAndGVtcCcpIHtcclxuICAgIGhpZGVCZXR3ZWVuKGNoYXJ0VmVydGljZXMsIHdpZHRoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hhcnRWZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldE5leHQyNSB9IGZyb20gJy4vZ3JhcGhGdW5jdGlvbnMnO1xyXG5pbXBvcnQgcG9zaXRpb25MaW5lc0FuZEhvdXJzIGZyb20gJy4vcG9zaXRpb25MaW5lc0FuZEhvdXJzJztcclxuaW1wb3J0IHsgZW1wdHlDaGFydCwgZW1wdHlDaGFydFZlcnRpY2VzIH0gZnJvbSAnLi9lbXB0eUNoYXJ0UG9zaXRpb25zJztcclxuaW1wb3J0IHVwZGF0ZUNoYXJ0TGluZSBmcm9tICcuL3VwZGF0ZUNoYXJ0TGluZSc7XHJcbmltcG9ydCB1cGRhdGVDaGFydEljb25zIGZyb20gJy4vdXBkYXRlQ2hhcnRJY29ucyc7XHJcbmltcG9ydCB1cGRhdGVDaGFydEhvdmVyRGF0YXNldCBmcm9tICcuL3VwZGF0ZUNoYXJ0SG92ZXJEYXRhc2V0JztcclxuaW1wb3J0IHJvdGF0ZUNoYXJ0VmVydGljZXMgZnJvbSAnLi9yb3RhdGVDaGFydFZlcnRpY2VzJztcclxuXHJcbmxldCBzdG9yZWREYXRhO1xyXG5sZXQgc3RvcmVkU3RhcnRpbmdJbmRleDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUhvdXJseVdlYXRoZXIoZGF0YSwgc3RhcnRGcm9tSW5kZXgpIHtcclxuICAvLyBwcmV2ZW50IGVycm9yIG9uIHJlc2l6aW5nIHdpdGhvdXQgY2hhcnQgbG9hZGVkXHJcbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCAmJiBzdG9yZWREYXRhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAvLyBzdG9yZSBhcmd1bWVudHMgZm9yIGxhdGVyIHVzZSB3aXRob3V0IHBhc3NpbmcgZGF0YVxyXG4gIGlmICghZGF0YSkgZGF0YSA9IHN0b3JlZERhdGE7XHJcbiAgc3RvcmVkRGF0YSA9IGRhdGE7XHJcbiAgaWYgKHN0YXJ0RnJvbUluZGV4ID09PSB1bmRlZmluZWQpIHN0YXJ0RnJvbUluZGV4ID0gc3RvcmVkU3RhcnRpbmdJbmRleDtcclxuICBzdG9yZWRTdGFydGluZ0luZGV4ID0gc3RhcnRGcm9tSW5kZXg7XHJcblxyXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWhvdXJseScpO1xyXG4gIGNvbnN0IGNoYXJ0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktY2hhcnQtdGVtcCcpO1xyXG4gIGNvbnN0IGNoYXJ0VGVtcFZlcnRpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAtY2hhcnQtdmVydGV4Jyk7XHJcbiAgY29uc3Qgd2luZENoYXJ0VmVydGljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2luZC1jaGFydC12ZXJ0ZXgnKTtcclxuICBjb25zdCBob3Vyc1VzZWQgPSAyNDtcclxuICAvLyB2ZXJ0aWNhbCBzcGFjZSByZXNlcnZlZCBvbiBwaXhlbHMgZm9yIGhvdXJzIGFuZCB0ZW1wIHZhbHVlc1xyXG4gIGNvbnN0IHRleHRTcGFjZSA9IDQ1O1xyXG4gIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQocGFyZW50LmNsaWVudFdpZHRoLCAxMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQocGFyZW50LmNsaWVudEhlaWdodCwgMTApO1xyXG4gIGNvbnN0IGhlaWdodFRlbXBzV2luZCA9ICgoaGVpZ2h0ICogODApIC8gMTAwKSAtIHRleHRTcGFjZTtcclxuICBjb25zdCBoZWlnaHRzSHVtaWRpdHkgPSBoZWlnaHQgLSB0ZXh0U3BhY2U7XHJcbiAgY29uc3QgcG9zaXRpb25zWCA9IFswXTtcclxuICAvLyBnZXQgdGhlIG5lY2Vzc2FyeSBkYXRhIGZvciBjaGFydFxyXG4gIGNvbnN0IGhvdXJzID0gZ2V0TmV4dDI1KGRhdGEuaG91cnMsIHN0YXJ0RnJvbUluZGV4KTtcclxuICBjb25zdCB0ZW1wcyA9IGdldE5leHQyNShkYXRhLnRlbXBzLCBzdGFydEZyb21JbmRleCk7XHJcbiAgY29uc3QgYXBwYXJlbnRzID0gZ2V0TmV4dDI1KGRhdGEuYXBwYXJlbnQsIHN0YXJ0RnJvbUluZGV4KTtcclxuICBjb25zdCBtaW5UZW1wc0FwcGFyZW50cyA9IHRlbXBzLmNvbmNhdChhcHBhcmVudHMpXHJcbiAgICAucmVkdWNlKChtaW4sIGN1cnJlbnQpID0+IChtaW4gPCBjdXJyZW50ID8gbWluIDogY3VycmVudCkpO1xyXG4gIGNvbnN0IG1heFRlbXBzQXBwYXJlbnRzID0gdGVtcHMuY29uY2F0KGFwcGFyZW50cylcclxuICAgIC5yZWR1Y2UoKG1heCwgY3VycmVudCkgPT4gKG1heCA+IGN1cnJlbnQgPyBtYXggOiBjdXJyZW50KSk7XHJcbiAgY29uc3Qgd2luZFNwZWVkcyA9IGdldE5leHQyNShkYXRhLndpbmRzcGVlZCwgc3RhcnRGcm9tSW5kZXgpO1xyXG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBnZXROZXh0MjUoZGF0YS53aW5kRGlyZWN0aW9uLCBzdGFydEZyb21JbmRleCk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBnZXROZXh0MjUoZGF0YS5odW1pZGl0eSwgc3RhcnRGcm9tSW5kZXgpO1xyXG4gIGNvbnN0IHdlYXRoZXJjb2RlcyA9IGdldE5leHQyNShkYXRhLndlYXRoZXJjb2RlLCBzdGFydEZyb21JbmRleCk7XHJcbiAgY29uc3QgeyBzdW5yaXNlIH0gPSBkYXRhO1xyXG4gIGNvbnN0IHsgc3Vuc2V0IH0gPSBkYXRhO1xyXG5cclxuICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgLy8gc2V0IHZhbHVlcyBmb3IgdmVydGV4IGhvcml6b250YWwgcG9zaXRpb25zXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3Vyc1VzZWQ7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gKHdpZHRoIC8gKGhvdXJzVXNlZCkpICogKGkgKyAxKTtcclxuICAgIHBvc2l0aW9uc1gucHVzaChjdXJyZW50VmFsdWUpO1xyXG4gIH1cclxuICAvLyBpZiB0aGVyZSdzIG5vIHRlbXAgY2hhcnQgZHJhd24sIGFuIGVtcHR5IG9uZSAodmFsdWVzIGF0IDApIHdpbGwgYmUgcGxhY2VkXHJcbiAgaWYgKCFjaGFydFRlbXAuZ2V0QXR0cmlidXRlKCdkJykpIHtcclxuICAgIGVtcHR5Q2hhcnQoY2hhcnRUZW1wLCBwb3NpdGlvbnNYLCBoZWlnaHRUZW1wc1dpbmQpO1xyXG4gICAgZW1wdHlDaGFydFZlcnRpY2VzKGNoYXJ0VGVtcFZlcnRpY2VzLCBwb3NpdGlvbnNYLCBoZWlnaHRUZW1wc1dpbmQpO1xyXG4gIH1cclxuICAvLyBzbWFsbCB0aW1lb3V0IHRvIGFsbG93IGFuaW1hdGlvbiBiZXR3ZWVuIHRoZSBlbXB0eSBjaGFydCBhbmQgdGhlIHVwZGF0ZWQgb25lXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwb3NpdGlvbkxpbmVzQW5kSG91cnMoaG91cnMsIHBvc2l0aW9uc1gsIHRleHRTcGFjZSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB1cGRhdGVDaGFydExpbmUodGVtcHMsIHBvc2l0aW9uc1gsIGhlaWdodFRlbXBzV2luZCwgaG91cnNVc2VkLCB0ZXh0U3BhY2UsIHdpZHRoLCAndGVtcCcsICcudGVtcGVyYXR1cmUtbnVtYmVyJywgbWluVGVtcHNBcHBhcmVudHMsIG1heFRlbXBzQXBwYXJlbnRzKTtcclxuICAgIHVwZGF0ZUNoYXJ0TGluZShhcHBhcmVudHMsIHBvc2l0aW9uc1gsIGhlaWdodFRlbXBzV2luZCwgaG91cnNVc2VkLCB0ZXh0U3BhY2UsIHdpZHRoLCAndGVtcC1hcHBhcmVudCcsICcudGVtcGVyYXR1cmUtbnVtYmVyJywgbWluVGVtcHNBcHBhcmVudHMsIG1heFRlbXBzQXBwYXJlbnRzKTtcclxuICAgIHVwZGF0ZUNoYXJ0TGluZSh3aW5kU3BlZWRzLCBwb3NpdGlvbnNYLCBoZWlnaHRUZW1wc1dpbmQsIGhvdXJzVXNlZCwgdGV4dFNwYWNlLCB3aWR0aCwgJ3dpbmQnLCAnLnNwZWVkLW51bWJlcicsIDApO1xyXG4gICAgdXBkYXRlQ2hhcnRMaW5lKGh1bWlkaXR5LCBwb3NpdGlvbnNYLCBoZWlnaHRzSHVtaWRpdHksIGhvdXJzVXNlZCwgdGV4dFNwYWNlLCB3aWR0aCwgJ2h1bWlkaXR5JywgJy5odW1pZGl0eS1wZXJjZW50JywgMCwgMTAwKTtcclxuICAgIHJvdGF0ZUNoYXJ0VmVydGljZXMod2luZENoYXJ0VmVydGljZXMsIHdpbmREaXJlY3Rpb24pO1xyXG4gICAgdXBkYXRlQ2hhcnRJY29ucyh3ZWF0aGVyY29kZXMsIHN1bnJpc2UsIHN1bnNldCwgaG91cnMsIHdpZHRoKTtcclxuICAgIHVwZGF0ZUNoYXJ0SG92ZXJEYXRhc2V0KHRlbXBzLCBhcHBhcmVudHMsIHdpbmRTcGVlZHMsIHdpbmREaXJlY3Rpb24sIGh1bWlkaXR5LCB3ZWF0aGVyY29kZXMpO1xyXG4gIH0sIDUwKTtcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlQ2hhcnRMaW5lR3JvdXAgZnJvbSAnLi9jcmVhdGVDaGFydExpbmVHcm91cCc7XHJcbmltcG9ydCBjcmVhdGVXZWF0aGVySWNvbnMgZnJvbSAnLi9jcmVhdGVXZWF0aGVySWNvbnMnO1xyXG5pbXBvcnQgY3JlYXRlQ2hhcnREZXRhaWxzIGZyb20gJy4vY3JlYXRlQ2hhcnREZXRhaWxzJztcclxuXHJcbmltcG9ydCB2ZWN0b3JTcXVhcmUgZnJvbSAnLi4vLi4vLi4vbWVkaWEvaW1hZ2VzL2ljb25zLWNoYXJ0L3NxdWFyZS5zdmcnO1xyXG5pbXBvcnQgdmVjdG9yQ2lyY2xlIGZyb20gJy4uLy4uLy4uL21lZGlhL2ltYWdlcy9pY29ucy1jaGFydC9jaXJjbGUuc3ZnJztcclxuaW1wb3J0IHZlY3RvckRpYW1vbmQgZnJvbSAnLi4vLi4vLi4vbWVkaWEvaW1hZ2VzL2ljb25zLWNoYXJ0L2RpYW1vbmQuc3ZnJztcclxuLy8gaW1wb3J0IHZlY3RvclN0YXIgZnJvbSAnLi4vLi4vLi4vbWVkaWEvaW1hZ2VzL2ljb25zLWNoYXJ0L3N0YXIuc3ZnJztcclxuaW1wb3J0IHZlY3RvckFycm93IGZyb20gJy4uLy4uLy4uL21lZGlhL2ltYWdlcy9pY29ucy1jaGFydC9hcnJvdy5zdmcnO1xyXG5cclxuY29uc3Qgc3ZnTnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VhdGhlckhvdXJseSgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICdzdmcnKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1ob3VybHknLCAnaW52aXNpYmxlJyk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1jaGFydCcpO1xyXG4gIHN2Zy5hcHBlbmQoXHJcbiAgICBjcmVhdGVDaGFydE1hcmtzQW5kSG91cnMoKSxcclxuICAgIGNyZWF0ZUNoYXJ0TGluZUdyb3VwKCdodW1pZGl0eScsIHZlY3RvckRpYW1vbmQpLFxyXG4gICAgY3JlYXRlQ2hhcnRMaW5lR3JvdXAoJ3RlbXAtYXBwYXJlbnQnLCB2ZWN0b3JTcXVhcmUpLFxyXG4gICAgY3JlYXRlQ2hhcnRMaW5lR3JvdXAoJ3RlbXAnLCB2ZWN0b3JDaXJjbGUsICfCsCcsICd0ZW1wZXJhdHVyZS1udW1iZXInKSxcclxuICAgIGNyZWF0ZUNoYXJ0TGluZUdyb3VwKCd3aW5kJywgdmVjdG9yQXJyb3cpLFxyXG4gICk7XHJcbiAgZGl2LmFwcGVuZChcclxuICAgIHN2ZyxcclxuICAgIGNyZWF0ZVdlYXRoZXJJY29ucygpLFxyXG4gICAgY3JlYXRlQ2hhcnREZXRhaWxzKCksXHJcbiAgKTtcclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGFydE1hcmtzQW5kSG91cnMoKSB7XHJcbiAgY29uc3QgY2hhcnRMaW5lc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAnZycpO1xyXG4gIGNvbnN0IGhvcml6b250YWxMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAnbGluZScpO1xyXG4gIGNvbnN0IGhvdXJzVGV4dHMgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjQ7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdmVydGljYWxMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAnbGluZScpO1xyXG4gICAgdmVydGljYWxMaW5lLmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LWxpbmUtaG91cicpO1xyXG4gICAgY2hhcnRMaW5lc0dyb3VwLmFwcGVuZCh2ZXJ0aWNhbExpbmUpO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSAyNDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgJ3RleHQnKTtcclxuICAgIGNvbnN0IGhvdXJzTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAndHNwYW4nKTtcclxuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgJ3RzcGFuJyk7XHJcbiAgICBob3Vycy5zZXRBdHRyaWJ1dGUoJ3gnLCAwKTtcclxuICAgIGhvdXJzLnNldEF0dHJpYnV0ZSgneScsIDApO1xyXG4gICAgaG91cnMuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcclxuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWNoYXJ0LXRleHQnKTtcclxuICAgIGhvdXJzTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWNoYXJ0LW51bWJlcnMnKTtcclxuICAgIGhvdXJzTnVtYmVyLnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgaG91cnNUZXh0LnRleHRDb250ZW50ID0gJ2hzJztcclxuICAgIGhvdXJzLmFwcGVuZChob3Vyc051bWJlciwgaG91cnNUZXh0KTtcclxuICAgIGhvdXJzVGV4dHMucHVzaChob3Vycyk7XHJcbiAgfVxyXG4gIGNoYXJ0TGluZXNHcm91cC5jbGFzc0xpc3QuYWRkKCdjaGFydC1saW5lcy1ncm91cCcpO1xyXG4gIGhvcml6b250YWxMaW5lLmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LWxpbmUtYmFzZScpO1xyXG5cclxuICBjaGFydExpbmVzR3JvdXAuYXBwZW5kKGhvcml6b250YWxMaW5lLCAuLi5ob3Vyc1RleHRzKTtcclxuXHJcbiAgcmV0dXJuIGNoYXJ0TGluZXNHcm91cDtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIHNldE1pbnV0ZXMsXHJcbiAgZ2V0TWludXRlcyxcclxuICBpc0JlZm9yZSxcclxuICBpc0FmdGVyLFxyXG59IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IGNsb3Vkc0hpZ2ggZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9jbG91ZHMtaGlnaC5wbmcnO1xyXG5pbXBvcnQgY2xvdWRzTG93IGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvY2xvdWRzLWxvdy5wbmcnO1xyXG5pbXBvcnQgY2xvdWRzTWlkZGxlIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvY2xvdWRzLW1pZGRsZS5wbmcnO1xyXG5pbXBvcnQgZHJpenpsZUhpZ2ggZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9kcml6emxlLWhpZ2gucG5nJztcclxuaW1wb3J0IGRyaXp6bGVMb3cgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9kcml6emxlLWxvdy5wbmcnO1xyXG5pbXBvcnQgZHJpenpsZU1pZGRsZSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2RyaXp6bGUtbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBmb2cgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9mb2cucG5nJztcclxuaW1wb3J0IGhhaWxIaWdoIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaGFpbC1oaWdoLnBuZyc7XHJcbmltcG9ydCBoYWlsTG93IGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaGFpbC1sb3cucG5nJztcclxuaW1wb3J0IGljZUxvdyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2ljZS1sb3cucG5nJztcclxuaW1wb3J0IGljZU1pZGRsZSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2ljZS1taWRkbGUucG5nJztcclxuaW1wb3J0IGljZVNtYWxsIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaWNlLXNtYWxsLnBuZyc7XHJcbmltcG9ydCBtb29uIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvbW9vbi5wbmcnO1xyXG5pbXBvcnQgbW9vbkNsZWFyU2t5IGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvbW9vbi1jbGVhci1za3kucG5nJztcclxuaW1wb3J0IHJhaW5CaWdIaWdoIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1iaWctaGlnaC5wbmcnO1xyXG5pbXBvcnQgcmFpbkJpZ0xvdyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4tYmlnLWxvdy5wbmcnO1xyXG5pbXBvcnQgcmFpbkJpZ01pZGRsZSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4tYmlnLW1pZGRsZS5wbmcnO1xyXG5pbXBvcnQgcmFpbkhpZ2ggZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9yYWluLWhpZ2gucG5nJztcclxuaW1wb3J0IHJhaW5Mb3cgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9yYWluLWxvdy5wbmcnO1xyXG5pbXBvcnQgcmFpbk1pZGRsZSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4tbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBzbm93QmlnSGlnaCBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3Nub3ctYmlnLWhpZ2gucG5nJztcclxuaW1wb3J0IHNub3dCaWdMb3cgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LWJpZy1sb3cucG5nJztcclxuaW1wb3J0IHNub3dIaWdoIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc25vdy1oaWdoLnBuZyc7XHJcbmltcG9ydCBzbm93TG93IGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc25vdy1sb3cucG5nJztcclxuaW1wb3J0IHNub3dNaWRkbGUgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LW1pZGRsZS5wbmcnO1xyXG5pbXBvcnQgc3VuIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc3VuLnBuZyc7XHJcbmltcG9ydCBzdW5DbGVhclNreSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3N1bi1jbGVhci1za3kucG5nJztcclxuaW1wb3J0IHRodW5kZXIgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy90aHVuZGVyLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVySWNvbihpY29uUGFydHMsIGxvY2FsVGltZSwgc3VucmlzZSwgc3Vuc2V0KSB7XHJcbiAgLy8gZWFjaCBpbWFnZSB3aWxsIGJlIGFkZGVkIGhlcmUgQ1NTIGZvcm1hdCBiZWZvcmUgcmV0dXJuaW5nIGl0XHJcbiAgbGV0IGltYWdlcyA9ICcnO1xyXG4gIC8vIGFwcGx5IGxvY2FsIG1pbnV0ZXMgdG8gY2l0eSB0aW1lIGFzIHRoZSBBUEkgYWx3YXlzIHJldHVybnMgMDBcclxuICBsZXQgc3VuTW9vbjtcclxuICBpZiAobG9jYWxUaW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IGNpdHlUaW1lID0gc2V0TWludXRlcyhuZXcgRGF0ZShsb2NhbFRpbWUpLCBnZXRNaW51dGVzKG5ldyBEYXRlKCkpKTtcclxuICAgIGNvbnN0IGlzRGF5ID0gaXNCZWZvcmUobmV3IERhdGUoc3VucmlzZSksIG5ldyBEYXRlKGNpdHlUaW1lKSlcclxuICAgICYmIGlzQWZ0ZXIobmV3IERhdGUoc3Vuc2V0KSwgbmV3IERhdGUoY2l0eVRpbWUpKTtcclxuICAgIGNvbnN0IGlzQ2xlYXJEYXkgPSBpY29uUGFydHMubGVuZ3RoID09PSAxICYmIGljb25QYXJ0c1swXSA9PT0gJ3N1bk1vb24nO1xyXG5cclxuICAgIGlmIChpc0RheSkge1xyXG4gICAgICBzdW5Nb29uID0gaXNDbGVhckRheSA/IHN1bkNsZWFyU2t5IDogc3VuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VuTW9vbiA9IGlzQ2xlYXJEYXkgPyBtb29uQ2xlYXJTa3kgOiBtb29uO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdW5Nb29uID0gc3VuO1xyXG4gIH1cclxuXHJcbiAgLy8gbGlzdCBpbWFnZXMgc28gdGhleSBjYW4gYmUgY2FsbGVkIGRpcmVjdGx5IGZyb20gYSBzdHJpbmdcclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgIHN1bk1vb24sXHJcbiAgICBjbG91ZHNIaWdoLFxyXG4gICAgY2xvdWRzTG93LFxyXG4gICAgY2xvdWRzTWlkZGxlLFxyXG4gICAgZHJpenpsZUhpZ2gsXHJcbiAgICBkcml6emxlTG93LFxyXG4gICAgZHJpenpsZU1pZGRsZSxcclxuICAgIGZvZyxcclxuICAgIGhhaWxIaWdoLFxyXG4gICAgaGFpbExvdyxcclxuICAgIGljZUxvdyxcclxuICAgIGljZU1pZGRsZSxcclxuICAgIGljZVNtYWxsLFxyXG4gICAgcmFpbkJpZ0hpZ2gsXHJcbiAgICByYWluQmlnTG93LFxyXG4gICAgcmFpbkJpZ01pZGRsZSxcclxuICAgIHJhaW5IaWdoLFxyXG4gICAgcmFpbkxvdyxcclxuICAgIHJhaW5NaWRkbGUsXHJcbiAgICBzbm93QmlnSGlnaCxcclxuICAgIHNub3dCaWdMb3csXHJcbiAgICBzbm93SGlnaCxcclxuICAgIHNub3dMb3csXHJcbiAgICBzbm93TWlkZGxlLFxyXG4gICAgdGh1bmRlcixcclxuICB9O1xyXG5cclxuICBpY29uUGFydHMuZm9yRWFjaCgocGFydCwgaSkgPT4ge1xyXG4gICAgY29uc3QgY29tbWEgPSBgJHtpICE9PSAwID8gJywgJyA6ICcnfWA7XHJcbiAgICBpbWFnZXMgKz0gYCR7Y29tbWF9dXJsKCR7aWNvbnNbcGFydF19KWA7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2VhdGhlcmNvZGUocmVxdWVzdGVkQ29kZSkge1xyXG4gIC8qXHJcbiAgKiBzb3VyY2U6IGh0dHBzOi8vb3Blbi1tZXRlby5jb20vZW4vZG9jc1xyXG4gICogV01PIFdlYXRoZXIgaW50ZXJwcmV0YXRpb24gY29kZXMgKFdXKVxyXG4gICogQ29kZSAtIERlc2NyaXB0aW9uXHJcbiAgKiAwIC0tLS0tLS0tLS0gQ2xlYXIgc2t5XHJcbiAgKiAxLCAyLCAzIC0tLS0gTWFpbmx5IGNsZWFyLCBwYXJ0bHkgY2xvdWR5LCBhbmQgb3ZlcmNhc3RcclxuICAqIDQ1LCA0OCAtLS0tLSBGb2cgYW5kIGRlcG9zaXRpbmcgcmltZSBmb2dcclxuICAqIDUxLCA1MywgNTUgLSBEcml6emxlOiBMaWdodCwgbW9kZXJhdGUsIGFuZCBkZW5zZSBpbnRlbnNpdHlcclxuICAqIDU2LCA1NyAtLS0tLSBGcmVlemluZyBEcml6emxlOiBMaWdodCBhbmQgZGVuc2UgaW50ZW5zaXR5XHJcbiAgKiA2MSwgNjMsIDY1IC0gUmFpbjogU2xpZ2h0LCBtb2RlcmF0ZSBhbmQgaGVhdnkgaW50ZW5zaXR5XHJcbiAgKiA2NiwgNjcgLS0tLS0gRnJlZXppbmcgUmFpbjogTGlnaHQgYW5kIGhlYXZ5IGludGVuc2l0eVxyXG4gICogNzEsIDczLCA3NSAtIFNub3cgZmFsbDogU2xpZ2h0LCBtb2RlcmF0ZSwgYW5kIGhlYXZ5IGludGVuc2l0eVxyXG4gICogNzcgLS0tLS0tLS0tIFNub3cgZ3JhaW5zXHJcbiAgKiA4MCwgODEsIDgyIC0gUmFpbiBzaG93ZXJzOiBTbGlnaHQsIG1vZGVyYXRlLCBhbmQgdmlvbGVudFxyXG4gICogODUsIDg2IC0tLS0tIFNub3cgc2hvd2VycyBzbGlnaHQgYW5kIGhlYXZ5XHJcbiAgKiA5NSAqIC0tLS0tLS0gVGh1bmRlcnN0b3JtOiBTbGlnaHQgb3IgbW9kZXJhdGVcclxuICAqIDk2LCA5OSAqIC0tLSBUaHVuZGVyc3Rvcm0gd2l0aCBzbGlnaHQgYW5kIGhlYXZ5IGhhaWxcclxuICAqICgqKSBUaHVuZGVyc3Rvcm0gZm9yZWNhc3Qgd2l0aCBoYWlsIGlzIG9ubHkgYXZhaWxhYmxlIGluIENlbnRyYWwgRXVyb3BlXHJcbiAgKi9cclxuXHJcbiAgY29uc3QgY29kZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDAsXHJcbiAgICAgIHdlYXRoZXI6ICdjbGVhciBza3knLFxyXG4gICAgICBpY29uOiBbJ3N1bk1vb24nXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDEsXHJcbiAgICAgIHdlYXRoZXI6ICdtYWlubHkgY2xlYXInLFxyXG4gICAgICBpY29uOiBbJ2Nsb3Vkc0xvdycsICdzdW5Nb29uJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiAyLFxyXG4gICAgICB3ZWF0aGVyOiAncGFydGx5IGNsb3VkeScsXHJcbiAgICAgIGljb246IFsnY2xvdWRzTWlkZGxlJywgJ3N1bk1vb24nXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDMsXHJcbiAgICAgIHdlYXRoZXI6ICdvdmVyY2FzdCcsXHJcbiAgICAgIGljb246IFsnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNDUsXHJcbiAgICAgIHdlYXRoZXI6ICdmb2cnLFxyXG4gICAgICBpY29uOiBbJ2ZvZycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA0OCxcclxuICAgICAgd2VhdGhlcjogJ2RlcG9zaXRpbmcgcmltZSBmb2cnLFxyXG4gICAgICBpY29uOiBbJ2ljZVNtYWxsJywgJ2ZvZycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA1MSxcclxuICAgICAgd2VhdGhlcjogJ2RyaXp6bGUnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdsaWdodCcsXHJcbiAgICAgIGljb246IFsnZHJpenpsZUxvdycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA1MyxcclxuICAgICAgd2VhdGhlcjogJ2RyaXp6bGUnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsnZHJpenpsZU1pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA1NSxcclxuICAgICAgd2VhdGhlcjogJ2RyaXp6bGUnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdkZW5zZScsXHJcbiAgICAgIGljb246IFsnZHJpenpsZUhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNTYsXHJcbiAgICAgIHdlYXRoZXI6ICdmcmVlemluZyBkcml6emxlJyxcclxuICAgICAgaW50ZW5zaXR5OiAnbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5Ecml6emxlSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA1NyxcclxuICAgICAgd2VhdGhlcjogJ2ZyZWV6aW5nIGRyaXp6bGUnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdkZW5zZScsXHJcbiAgICAgIGljb246IFsnaWNlTWlkZGxlJywgJ3JhaW5Ecml6emxlSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2MSxcclxuICAgICAgd2VhdGhlcjogJ3JhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdzbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5Mb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNjMsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluJyxcclxuICAgICAgaW50ZW5zaXR5OiAnbW9kZXJhdGUnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5NaWRkbGUnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNjUsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluJyxcclxuICAgICAgaW50ZW5zaXR5OiAnaGVhdnknLFxyXG4gICAgICBpY29uOiBbJ3JhaW5IaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDY2LFxyXG4gICAgICB3ZWF0aGVyOiAnZnJlZXppbmcgcmFpbicsXHJcbiAgICAgIGludGVuc2l0eTogJ2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydpY2VNaWRkbGUnLCAncmFpbkxvdycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2NyxcclxuICAgICAgd2VhdGhlcjogJ2ZyZWV6aW5nIHJhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eScsXHJcbiAgICAgIGljb246IFsnaWNlTWlkZGxlJywgJ3JhaW5IaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDcxLFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBmYWxsJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydzbm93TG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDczLFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBmYWxsJyxcclxuICAgICAgaW50ZW5zaXR5OiAnbW9kZXJhdGUnLFxyXG4gICAgICBpY29uOiBbJ3Nub3dNaWRkbGUnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzUsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGZhbGwnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eScsXHJcbiAgICAgIGljb246IFsnc25vd0hpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzcsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGdyYWlucycsXHJcbiAgICAgIGljb246IFsnaWNlTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDgwLFxyXG4gICAgICB3ZWF0aGVyOiAncmFpbiBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydyYWluQmlnTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDgxLFxyXG4gICAgICB3ZWF0aGVyOiAncmFpbiBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnbW9kZXJhdGUnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5CaWdNaWRkbGUnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogODIsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluIHNob3dlcnMnLFxyXG4gICAgICBpbnRlbnNpdHk6ICd2aW9sZW50JyxcclxuICAgICAgaWNvbjogWydyYWluQmlnSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA4NSxcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgc2hvd2VycycsXHJcbiAgICAgIGludGVuc2l0eTogJ3NsaWdodCcsXHJcbiAgICAgIGljb246IFsnc25vd0JpZ0xvdycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA4NixcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgc2hvd2VycycsXHJcbiAgICAgIGludGVuc2l0eTogJ2hlYXZ5JyxcclxuICAgICAgaWNvbjogWydzbm93QmlnSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA5NSxcclxuICAgICAgd2VhdGhlcjogJ3RodW5kZXJzdG9ybScsXHJcbiAgICAgIGludGVuc2l0eTogJ3NsaWdodCB0byBtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsndGh1bmRlcicsICdyYWluSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA5NixcclxuICAgICAgd2VhdGhlcjogJ3RodW5kZXJzdG9ybScsXHJcbiAgICAgIGludGVuc2l0eTogJ3NsaWdodCBoYWlsJyxcclxuICAgICAgaWNvbjogWydoYWlsTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDk5LFxyXG4gICAgICB3ZWF0aGVyOiAndGh1bmRlcnN0b3JtJyxcclxuICAgICAgaW50ZW5zaXR5OiAnaGVhdnkgaGFpbCcsXHJcbiAgICAgIGljb246IFsnaGFpbEhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCByZXF1ZXN0ZWQgPSBjb2Rlcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gcmVxdWVzdGVkQ29kZSk7XHJcblxyXG4gIHJldHVybiBjb2Rlc1tyZXF1ZXN0ZWRdO1xyXG59XHJcbiIsImNvbnN0IENDX1JFR0VYID0gL15bYS16XXsyfSQvaTtcbmNvbnN0IEZMQUdfTEVOR1RIID0gNDtcbmNvbnN0IE9GRlNFVCA9IDEyNzM5NztcbmZ1bmN0aW9uIGNvdW50cnlDb2RlRW1vamkoY2MpIHtcbiAgaWYgKCFDQ19SRUdFWC50ZXN0KGNjKSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2M7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY2MgYXJndW1lbnQgbXVzdCBiZSBhbiBJU08gMzE2Ni0xIGFscGhhLTIgc3RyaW5nLCBidXQgZ290ICcke3R5cGUgPT09IFwic3RyaW5nXCIgPyBjYyA6IHR5cGV9JyBpbnN0ZWFkLmApO1xuICB9XG4gIGNvbnN0IGNvZGVQb2ludHMgPSBbLi4uY2MudG9VcHBlckNhc2UoKV0ubWFwKChjKSA9PiBjLmNvZGVQb2ludEF0KCkgKyBPRkZTRVQpO1xuICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cyk7XG59XG5mdW5jdGlvbiBlbW9qaUNvdW50cnlDb2RlKGZsYWcpIHtcbiAgaWYgKGZsYWcubGVuZ3RoICE9PSBGTEFHX0xFTkdUSCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgZmxhZztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBmbGFnIGFyZ3VtZW50IG11c3QgYmUgYSBmbGFnIGVtb2ppLCBidXQgZ290ICcke3R5cGUgPT09IFwic3RyaW5nXCIgPyBmbGFnIDogdHlwZX0nIGluc3RlYWQuYCk7XG4gIH1cbiAgY29uc3QgY29kZVBvaW50cyA9IFsuLi5mbGFnXS5tYXAoKGMpID0+IGMuY29kZVBvaW50QXQoKSAtIE9GRlNFVCk7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKTtcbn1cbnZhciBzcmNfZGVmYXVsdCA9IGNvdW50cnlDb2RlRW1vamk7XG5leHBvcnQge1xuICBjb3VudHJ5Q29kZUVtb2ppLFxuICBzcmNfZGVmYXVsdCBhcyBkZWZhdWx0LFxuICBlbW9qaUNvdW50cnlDb2RlXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9