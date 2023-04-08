"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --radious: 8px;\r\n  --flag-size: 2.25rem;\r\n  --max-flag-size: 2.75rem;\r\n}\r\n\r\n.city-search {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  z-index: 1;\r\n  left: 50%;\r\n  top: 30%;\r\n  transform: translate(-50%, 0%);\r\n  width: 450px;\r\n  border-radius: 1rem;\r\n  animation: search-reveal 1s cubic-bezier(.22,.61,.36,1);\r\n}\r\n\r\n@keyframes search-reveal {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate(-50%, 150%);\r\n  }\r\n}\r\n\r\n/* input */\r\n\r\n.search-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  align-items: center;\r\n}\r\n\r\n.search-input {\r\n  --magnifier-focus-size: 2.5rem;\r\n  box-sizing: border-box;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 2rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center right;\r\n  color: #444;\r\n  font-size: 1.6rem;\r\n  padding-top: .25rem;\r\n  padding-right: calc(var(--magnifier-focus-size) + 3px);\r\n  padding-bottom: calc(.25rem + var(--radious));\r\n  padding-left: .75rem;\r\n  border: none;\r\n  border-radius: 0 var(--radious) 0 var(--radious);\r\n  transition: background-size 300ms, background-position 300ms;\r\n}\r\n.search-input:focus {\r\n  outline: none;\r\n  background-size: 2.5rem;\r\n  background-position: top right;\r\n}\r\n.search-input.loading {\r\n  background-image: none;\r\n}\r\n\r\n/* locations list */\r\n\r\n.search-results {\r\n  position: absolute;\r\n  transform: translateY(calc(var(--radious) * -1));\r\n  width: 100%;\r\n  max-height: 550px;\r\n  overflow-y: auto;\r\n  font-size: 1.5rem;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.search-result,\r\n.search-result-empty {\r\n  display: grid;\r\n  background-color: white;\r\n  grid-template-columns: calc(var(--max-flag-size) * 1.25) 1fr;\r\n  /* height: 65px; */\r\n  min-height: calc(var(--max-flag-size) + 20px);\r\n  align-items: center;\r\n  color: #555;\r\n  user-select: none;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n.search-result {\r\n  cursor: pointer;\r\n}\r\n.search-result:hover,\r\n.search-result:focus {\r\n  color: black;\r\n  box-shadow: inset calc(var(--max-flag-size) * 1.25) 0 5px #eee;\r\n  outline: transparent;\r\n}\r\n.search-result:not(:last-child) {\r\n  border-bottom: 1px solid white;\r\n}\r\n.search-result:last-child,\r\n.search-result-empty {\r\n  border-radius: 0 0 0 var(--radious);\r\n}\r\n.search-result p:not(.country-flag) {\r\n  margin: 5px;\r\n  font-size: 1.25rem;\r\n  text-align: left;\r\n}\r\n\r\n.country-flag,\r\n.country-flag-none {\r\n  text-align: center;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n.country-flag {\r\n  font-size: var(--flag-size);\r\n}\r\n.search-result:hover .country-flag,\r\n.search-result:focus .country-flag {\r\n  font-size: var(--max-flag-size);\r\n}\r\n\r\n/* loading icon */\r\n\r\n.search-loading {\r\n  position: absolute;\r\n  z-index: 1;\r\n  box-sizing: border-box;\r\n  right: 2px;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.search-loading > div {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.search-loading > :nth-child(1) {\r\n  border: 4px solid #555;\r\n  border-top: 4px solid transparent;\r\n  animation: loading-icon 1s linear infinite;\r\n}\r\n.search-loading > :nth-child(2) {\r\n  border: 6px solid #777;\r\n  border-left: 6px solid transparent;\r\n  animation: loading-icon 1s ease-in reverse infinite;\r\n  scale: 83%;\r\n}\r\n.search-loading > :nth-child(3) {\r\n  border: 8px solid #999;\r\n  border-right: 8px solid transparent;\r\n  animation: loading-icon 1s ease-in-out infinite;\r\n  scale: 62%;\r\n}\r\n\r\n@keyframes loading-icon {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/search.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,QAAQ;EACR,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,uDAAuD;AACzD;;AAEA;EACE;IACE,UAAU;IACV,gCAAgC;EAClC;AACF;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,yDAAiE;EACjE,qBAAqB;EACrB,4BAA4B;EAC5B,iCAAiC;EACjC,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,sDAAsD;EACtD,6CAA6C;EAC7C,oBAAoB;EACpB,YAAY;EACZ,gDAAgD;EAChD,4DAA4D;AAC9D;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;AAChC;AACA;EACE,sBAAsB;AACxB;;AAEA,mBAAmB;;AAEnB;EACE,kBAAkB;EAClB,gDAAgD;EAChD,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,4DAA4D;EAC5D,kBAAkB;EAClB,6CAA6C;EAC7C,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;;EAEE,YAAY;EACZ,8DAA8D;EAC9D,oBAAoB;AACtB;AACA;EACE,8BAA8B;AAChC;AACA;;EAEE,mCAAmC;AACrC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,2BAA2B;AAC7B;AACA;;EAEE,+BAA+B;AACjC;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;EAClB,UAAU;EACV,sBAAsB;EACtB,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,0CAA0C;AAC5C;AACA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,mDAAmD;EACnD,UAAU;AACZ;AACA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,+CAA+C;EAC/C,UAAU;AACZ;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\r\n  --radious: 8px;\r\n  --flag-size: 2.25rem;\r\n  --max-flag-size: 2.75rem;\r\n}\r\n\r\n.city-search {\r\n  position: absolute;\r\n  isolation: isolate;\r\n  z-index: 1;\r\n  left: 50%;\r\n  top: 30%;\r\n  transform: translate(-50%, 0%);\r\n  width: 450px;\r\n  border-radius: 1rem;\r\n  animation: search-reveal 1s cubic-bezier(.22,.61,.36,1);\r\n}\r\n\r\n@keyframes search-reveal {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate(-50%, 150%);\r\n  }\r\n}\r\n\r\n/* input */\r\n\r\n.search-form {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  align-items: center;\r\n}\r\n\r\n.search-input {\r\n  --magnifier-focus-size: 2.5rem;\r\n  box-sizing: border-box;\r\n  background-image: url(../media/images/icons/search-magnifier.svg);\r\n  background-size: 2rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center right;\r\n  color: #444;\r\n  font-size: 1.6rem;\r\n  padding-top: .25rem;\r\n  padding-right: calc(var(--magnifier-focus-size) + 3px);\r\n  padding-bottom: calc(.25rem + var(--radious));\r\n  padding-left: .75rem;\r\n  border: none;\r\n  border-radius: 0 var(--radious) 0 var(--radious);\r\n  transition: background-size 300ms, background-position 300ms;\r\n}\r\n.search-input:focus {\r\n  outline: none;\r\n  background-size: 2.5rem;\r\n  background-position: top right;\r\n}\r\n.search-input.loading {\r\n  background-image: none;\r\n}\r\n\r\n/* locations list */\r\n\r\n.search-results {\r\n  position: absolute;\r\n  transform: translateY(calc(var(--radious) * -1));\r\n  width: 100%;\r\n  max-height: 550px;\r\n  overflow-y: auto;\r\n  font-size: 1.5rem;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.search-result,\r\n.search-result-empty {\r\n  display: grid;\r\n  background-color: white;\r\n  grid-template-columns: calc(var(--max-flag-size) * 1.25) 1fr;\r\n  /* height: 65px; */\r\n  min-height: calc(var(--max-flag-size) + 20px);\r\n  align-items: center;\r\n  color: #555;\r\n  user-select: none;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n.search-result {\r\n  cursor: pointer;\r\n}\r\n.search-result:hover,\r\n.search-result:focus {\r\n  color: black;\r\n  box-shadow: inset calc(var(--max-flag-size) * 1.25) 0 5px #eee;\r\n  outline: transparent;\r\n}\r\n.search-result:not(:last-child) {\r\n  border-bottom: 1px solid white;\r\n}\r\n.search-result:last-child,\r\n.search-result-empty {\r\n  border-radius: 0 0 0 var(--radious);\r\n}\r\n.search-result p:not(.country-flag) {\r\n  margin: 5px;\r\n  font-size: 1.25rem;\r\n  text-align: left;\r\n}\r\n\r\n.country-flag,\r\n.country-flag-none {\r\n  text-align: center;\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n.country-flag {\r\n  font-size: var(--flag-size);\r\n}\r\n.search-result:hover .country-flag,\r\n.search-result:focus .country-flag {\r\n  font-size: var(--max-flag-size);\r\n}\r\n\r\n/* loading icon */\r\n\r\n.search-loading {\r\n  position: absolute;\r\n  z-index: 1;\r\n  box-sizing: border-box;\r\n  right: 2px;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.search-loading > div {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.search-loading > :nth-child(1) {\r\n  border: 4px solid #555;\r\n  border-top: 4px solid transparent;\r\n  animation: loading-icon 1s linear infinite;\r\n}\r\n.search-loading > :nth-child(2) {\r\n  border: 6px solid #777;\r\n  border-left: 6px solid transparent;\r\n  animation: loading-icon 1s ease-in reverse infinite;\r\n  scale: 83%;\r\n}\r\n.search-loading > :nth-child(3) {\r\n  border: 8px solid #999;\r\n  border-right: 8px solid transparent;\r\n  animation: loading-icon 1s ease-in-out infinite;\r\n  scale: 62%;\r\n}\r\n\r\n@keyframes loading-icon {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --txt-color-1: #000;\r\n  --txt-color-2: #222;\r\n  --txt-color-3: #333;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: darkslateblue;\r\n}\r\n\r\n/* for general use */\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.invisible {\r\n  opacity: 0 !important;\r\n  pointer-events: none !important;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;;AAGA;EACE,+BAA+B;AACjC;;AAEA,oBAAoB;;AAEpB;EACE,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;AACjC","sourcesContent":[":root {\r\n  --txt-color-1: #000;\r\n  --txt-color-2: #222;\r\n  --txt-color-3: #333;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: darkslateblue;\r\n}\r\n\r\n/* for general use */\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.invisible {\r\n  opacity: 0 !important;\r\n  pointer-events: none !important;\r\n}"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/images/wind-compass.svg */ "./src/media/images/wind-compass.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --gauge-border-width: 7px;\r\n  --unit-underline-width: 3px;\r\n  --compass-color: rgba(50, 50, 255, .10);\r\n}\r\n\r\n.weather-current {\r\n  isolation: isolate;\r\n  box-sizing: border-box;\r\n  width: 430px;\r\n  height: 250px;\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, auto);\r\n  grid-template-columns: 1fr auto auto;\r\n  grid-template-areas:\r\n    \"city city city\"\r\n    \"icon temp temp\"\r\n    \"icon humi wind\"\r\n    \"code humi wind\";\r\n  gap: 5px;\r\n  background-color: rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 10px;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-current p {\r\n  margin: 0;\r\n}\r\n\r\n/* city name */\r\n\r\n.city-div {\r\n  grid-area: city;\r\n  text-align: center;\r\n}\r\n\r\n.city-para {\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-1);\r\n  font-weight: 800;\r\n  padding: 0 .25rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/* icon */\r\n\r\n.weather-current-icon {\r\n  grid-area: icon;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, .25));\r\n}\r\n\r\n/* weathercode */\r\n\r\n.weathercode-div {\r\n  grid-area: code;\r\n  color: var(--txt-color-1);\r\n  text-align: center;\r\n}\r\n\r\n.weathercode-para {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* temperature */\r\n\r\n.temp-div {\r\n  grid-area: temp;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-rows: auto auto;\r\n  grid-template-areas:\r\n    \"curr unit\"\r\n    \"feel feel\";\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.temp-current {\r\n  grid-area: curr;\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n}\r\n\r\n/* humidity */\r\n\r\n.humidity-div {\r\n  grid-area: humi;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.humidity-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border: var(--gauge-border-width) solid rgba(50, 50, 255, .25);\r\n  border-radius: 50%;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.humidity-gauge-percent {\r\n  position: absolute;\r\n  border: var(--gauge-border-width) solid blue;\r\n  border-radius: 50%;\r\n  inset: calc(var(--gauge-border-width) * -1);\r\n}\r\n\r\n.humidity {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.humidity-title {\r\n  font-size: 1.15rem;\r\n  color: var(--txt-color-1);\r\n  height: 25px;\r\n}\r\n\r\n/* wind */\r\n\r\n.wind-div {\r\n  grid-area: wind;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.wind-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.wind-speed {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.wind-compass {\r\n  position: absolute;\r\n  inset: 0;\r\n  background:\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat,\r\n    radial-gradient(transparent 60%, var(--compass-color) 61%, var(--compass-color) 69%, transparent 70%);\r\n  background-size: 100%;\r\n\r\n}\r\n\r\n.wind-direction {\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  rotate: 0deg;\r\n  background: radial-gradient(transparent 60%, rgba(0, 0, 255, .5) 60%);\r\n  mask-image: conic-gradient(red 5%, transparent 5%, transparent 95%, red 95%);\r\n  transition: rotate ease-out 2s;\r\n}\r\n\r\n.wind-title-div {\r\n  width: 100%;\r\n  height: 25px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.wind-title {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* for units */\r\n\r\n.gauge-unit {\r\n  grid-area: unit;\r\n  position: relative;\r\n  align-self: baseline;\r\n  justify-self: left;\r\n  width: 3rem;\r\n  height: 2.5rem;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  appearance: none;\r\n}\r\n.gauge-unit:hover {\r\n  background: linear-gradient(to top, blue var(--unit-underline-width), transparent var(--unit-underline-width));\r\n}\r\n.gauge-unit::before,\r\n.gauge-unit::after {\r\n  position: absolute;\r\n  left: 0;\r\n  inset: 0;\r\n  transition: top 200ms ease-in-out;\r\n}\r\n.gauge-unit::before {\r\n  top: 100%;\r\n}\r\n.gauge-unit::after {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::before {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::after {\r\n  top: 100%\r\n}\r\n\r\n.temp-apparent-div {\r\n  grid-area: feel;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-2);\r\n  display: flex;\r\n}\r\n\r\n.temp-apparent {\r\n  padding-left: 5px;\r\n}\r\n\r\n.gauge-unit-apparent {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.25rem;\r\n  justify-self: left;\r\n}\r\n\r\n.gauge-unit.temperature-unit::before {\r\n  content: \"°F\";\r\n}\r\n.gauge-unit.temperature-unit::after {\r\n  content: \"°C\";\r\n}\r\n\r\n.wind-speed-unit{\r\n  width: 2.0rem;\r\n  height: 1.10rem;\r\n  font-size: .9rem;\r\n}\r\n.gauge-unit.wind-speed-unit::before {\r\n  content: \"mph\";\r\n}\r\n.gauge-unit.wind-speed-unit::after {\r\n  content: \"km/h\";\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/weatherCurrent.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --gauge-border-width: 7px;\r\n  --unit-underline-width: 3px;\r\n  --compass-color: rgba(50, 50, 255, .10);\r\n}\r\n\r\n.weather-current {\r\n  isolation: isolate;\r\n  box-sizing: border-box;\r\n  width: 430px;\r\n  height: 250px;\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, auto);\r\n  grid-template-columns: 1fr auto auto;\r\n  grid-template-areas:\r\n    \"city city city\"\r\n    \"icon temp temp\"\r\n    \"icon humi wind\"\r\n    \"code humi wind\";\r\n  gap: 5px;\r\n  background-color: rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 10px;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-current p {\r\n  margin: 0;\r\n}\r\n\r\n/* city name */\r\n\r\n.city-div {\r\n  grid-area: city;\r\n  text-align: center;\r\n}\r\n\r\n.city-para {\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-1);\r\n  font-weight: 800;\r\n  padding: 0 .25rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/* icon */\r\n\r\n.weather-current-icon {\r\n  grid-area: icon;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, .25));\r\n}\r\n\r\n/* weathercode */\r\n\r\n.weathercode-div {\r\n  grid-area: code;\r\n  color: var(--txt-color-1);\r\n  text-align: center;\r\n}\r\n\r\n.weathercode-para {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* temperature */\r\n\r\n.temp-div {\r\n  grid-area: temp;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-rows: auto auto;\r\n  grid-template-areas:\r\n    \"curr unit\"\r\n    \"feel feel\";\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.temp-current {\r\n  grid-area: curr;\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n}\r\n\r\n/* humidity */\r\n\r\n.humidity-div {\r\n  grid-area: humi;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.humidity-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border: var(--gauge-border-width) solid rgba(50, 50, 255, .25);\r\n  border-radius: 50%;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.humidity-gauge-percent {\r\n  position: absolute;\r\n  border: var(--gauge-border-width) solid blue;\r\n  border-radius: 50%;\r\n  inset: calc(var(--gauge-border-width) * -1);\r\n}\r\n\r\n.humidity {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.humidity-title {\r\n  font-size: 1.15rem;\r\n  color: var(--txt-color-1);\r\n  height: 25px;\r\n}\r\n\r\n/* wind */\r\n\r\n.wind-div {\r\n  grid-area: wind;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.wind-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.wind-speed {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.wind-compass {\r\n  position: absolute;\r\n  inset: 0;\r\n  background:\r\n    url(../media/images/wind-compass.svg) no-repeat,\r\n    radial-gradient(transparent 60%, var(--compass-color) 61%, var(--compass-color) 69%, transparent 70%);\r\n  background-size: 100%;\r\n\r\n}\r\n\r\n.wind-direction {\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  rotate: 0deg;\r\n  background: radial-gradient(transparent 60%, rgba(0, 0, 255, .5) 60%);\r\n  mask-image: conic-gradient(red 5%, transparent 5%, transparent 95%, red 95%);\r\n  transition: rotate ease-out 2s;\r\n}\r\n\r\n.wind-title-div {\r\n  width: 100%;\r\n  height: 25px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.wind-title {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* for units */\r\n\r\n.gauge-unit {\r\n  grid-area: unit;\r\n  position: relative;\r\n  align-self: baseline;\r\n  justify-self: left;\r\n  width: 3rem;\r\n  height: 2.5rem;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  appearance: none;\r\n}\r\n.gauge-unit:hover {\r\n  background: linear-gradient(to top, blue var(--unit-underline-width), transparent var(--unit-underline-width));\r\n}\r\n.gauge-unit::before,\r\n.gauge-unit::after {\r\n  position: absolute;\r\n  left: 0;\r\n  inset: 0;\r\n  transition: top 200ms ease-in-out;\r\n}\r\n.gauge-unit::before {\r\n  top: 100%;\r\n}\r\n.gauge-unit::after {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::before {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::after {\r\n  top: 100%\r\n}\r\n\r\n.temp-apparent-div {\r\n  grid-area: feel;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-2);\r\n  display: flex;\r\n}\r\n\r\n.temp-apparent {\r\n  padding-left: 5px;\r\n}\r\n\r\n.gauge-unit-apparent {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.25rem;\r\n  justify-self: left;\r\n}\r\n\r\n.gauge-unit.temperature-unit::before {\r\n  content: \"°F\";\r\n}\r\n.gauge-unit.temperature-unit::after {\r\n  content: \"°C\";\r\n}\r\n\r\n.wind-speed-unit{\r\n  width: 2.0rem;\r\n  height: 1.10rem;\r\n  font-size: .9rem;\r\n}\r\n.gauge-unit.wind-speed-unit::before {\r\n  content: \"mph\";\r\n}\r\n.gauge-unit.wind-speed-unit::after {\r\n  content: \"km/h\";\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  justify-items: center;\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  height: 130px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n  cursor: pointer;\r\n  transition: 100ms ease-out 100ms;\r\n}\r\n.weather-daily:hover .daily-card,\r\n.weather-daily:active .daily-card {\r\n  user-select: none;\r\n  height: 260px;\r\n}\r\n\r\n.daily-card.active {\r\n  z-index: 1;\r\n  box-shadow: 0 0 0 3px blue;\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherDaily.css"],"names":[],"mappings":"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","sourcesContent":[".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  justify-items: center;\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  height: 130px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n  cursor: pointer;\r\n  transition: 100ms ease-out 100ms;\r\n}\r\n.weather-daily:hover .daily-card,\r\n.weather-daily:active .daily-card {\r\n  user-select: none;\r\n  height: 260px;\r\n}\r\n\r\n.daily-card.active {\r\n  z-index: 1;\r\n  box-shadow: 0 0 0 3px blue;\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/precipitations.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/wind.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/sunrise-sunset.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/uv-index.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --chart-transition: 200ms linear;\r\n  --weather-hourly-div-height: 200px;\r\n  --chart-text-color-fill: #ddd;\r\n  --chart-text-shadow: 1px 1px black;\r\n  --chart-color-temp: red;\r\n  --chart-color-apparent: coral;\r\n  --chart-color-wind: blue;\r\n  --chart-color-humidity: aquamarine;\r\n}\r\n\r\n/* chart divisions and hours */\r\n\r\n.weather-hourly {\r\n  position: relative;\r\n  height: var(--weather-hourly-div-height);\r\n  transition: opacity 2s;\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n  mask-image: linear-gradient(to right, transparent, black 3%);\r\n  filter: drop-shadow(1px 1px 2px black);\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hours-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp related */\r\n\r\n.temp-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-temp);\r\n  stroke-width: 3px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-vertex {\r\n  fill: var(--chart-color-temp);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp apparent related */\r\n\r\n.temp-apparent-chart-group {\r\n  opacity: .5;\r\n}\r\n\r\n.weather-hourly:hover .temp-apparent-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp-apparent {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-apparent);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-apparent-chart-vertex {\r\n  fill: var(--chart-color-apparent);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* wind related */\r\n\r\n.wind-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .wind-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-wind {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-wind);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.wind-chart-vertex {\r\n  fill: var(--chart-color-wind);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* humidity related */\r\n\r\n.humidity-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .humidity-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-humidity {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-humidity);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.humidity-chart-vertex {\r\n  fill: var(--chart-color-humidity);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* hourly weather icon related */\r\n\r\n.chart-weather-icons-div {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: calc(var(--weather-hourly-div-height) - 23px);\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.chart-weather-icon {\r\n  height: 100%;\r\n  flex: 1 1 auto;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: bottom;\r\n}\r\n\r\n/* detail div related */\r\n\r\n.chart-details-div {\r\n  position: absolute;\r\n  background-color: rgba(255, 255, 255, .05);\r\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, .25),\r\n    inset 2px 2px 2px rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(5px);\r\n  padding: 10px 5px 10px 15px;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  pointer-events: none;\r\n  color: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n  width: 170px;\r\n  transition: border-radius 300ms ease-out 300ms;\r\n}\r\n.chart-details-div div {\r\n  display: grid;\r\n  grid-template-columns: 20px 1fr;\r\n  grid-template-areas: \"... text\";\r\n}\r\n\r\n.chart-details-div p {\r\n  grid-area: text;\r\n  margin: 0;\r\n}\r\n\r\n.chart-details-symbol {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.chart-details-symbol-temp {\r\n  background-color: var(--chart-color-temp);\r\n}\r\n\r\n.chart-details-symbol-apparent {\r\n  background-color: var(--chart-color-apparent);\r\n}\r\n\r\n.chart-details-symbol-wind {\r\n  background-color: var(--chart-color-wind);\r\n}\r\n\r\n.chart-details-symbol-humidity {\r\n  background-color: var(--chart-color-humidity);\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherHourly.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,kCAAkC;EAClC,6BAA6B;EAC7B,kCAAkC;EAClC,uBAAuB;EACvB,6BAA6B;EAC7B,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA,8BAA8B;;AAE9B;EACE,kBAAkB;EAClB,wCAAwC;EACxC,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4DAA4D;EAC5D,sCAAsC;AACxC;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,qCAAqC;AACvC;;AAEA,iBAAiB;;AAEjB;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,qCAAqC;AACvC;;AAEA,0BAA0B;;AAE1B;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,mCAAmC;AACrC;;AAEA,iBAAiB;;AAEjB;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;AACrC;;AAEA,qBAAqB;;AAErB;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,mCAAmC;AACrC;;AAEA,gCAAgC;;AAEhC;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,qDAAqD;EACrD,iBAAiB;EACjB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA,uBAAuB;;AAEvB;EACE,kBAAkB;EAClB,0CAA0C;EAC1C;8CAC4C;EAC5C,0BAA0B;EAC1B,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,mCAAmC;EACnC,qCAAqC;EACrC,YAAY;EACZ,8CAA8C;AAChD;AACA;EACE,aAAa;EACb,+BAA+B;EAC/B,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,6CAA6C;AAC/C","sourcesContent":[":root {\r\n  --chart-transition: 200ms linear;\r\n  --weather-hourly-div-height: 200px;\r\n  --chart-text-color-fill: #ddd;\r\n  --chart-text-shadow: 1px 1px black;\r\n  --chart-color-temp: red;\r\n  --chart-color-apparent: coral;\r\n  --chart-color-wind: blue;\r\n  --chart-color-humidity: aquamarine;\r\n}\r\n\r\n/* chart divisions and hours */\r\n\r\n.weather-hourly {\r\n  position: relative;\r\n  height: var(--weather-hourly-div-height);\r\n  transition: opacity 2s;\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n  mask-image: linear-gradient(to right, transparent, black 3%);\r\n  filter: drop-shadow(1px 1px 2px black);\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hours-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp related */\r\n\r\n.temp-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-temp);\r\n  stroke-width: 3px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-vertex {\r\n  fill: var(--chart-color-temp);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-chart-text {\r\n  fill: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n}\r\n\r\n/* temp apparent related */\r\n\r\n.temp-apparent-chart-group {\r\n  opacity: .5;\r\n}\r\n\r\n.weather-hourly:hover .temp-apparent-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-temp-apparent {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-apparent);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.temp-apparent-chart-vertex {\r\n  fill: var(--chart-color-apparent);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* wind related */\r\n\r\n.wind-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .wind-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-wind {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-wind);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.wind-chart-vertex {\r\n  fill: var(--chart-color-wind);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* humidity related */\r\n\r\n.humidity-chart-group {\r\n  opacity: .25;\r\n}\r\n\r\n.weather-hourly:hover .humidity-chart-group {\r\n  opacity: 1;\r\n}\r\n\r\n.hourly-chart-humidity {\r\n  fill: transparent;\r\n  stroke: var(--chart-color-humidity);\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n.humidity-chart-vertex {\r\n  fill: var(--chart-color-humidity);\r\n  transition: var(--chart-transition);\r\n}\r\n\r\n/* hourly weather icon related */\r\n\r\n.chart-weather-icons-div {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: calc(var(--weather-hourly-div-height) - 23px);\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.chart-weather-icon {\r\n  height: 100%;\r\n  flex: 1 1 auto;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: bottom;\r\n}\r\n\r\n/* detail div related */\r\n\r\n.chart-details-div {\r\n  position: absolute;\r\n  background-color: rgba(255, 255, 255, .05);\r\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, .25),\r\n    inset 2px 2px 2px rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(5px);\r\n  padding: 10px 5px 10px 15px;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  pointer-events: none;\r\n  color: var(--chart-text-color-fill);\r\n  text-shadow: var(--chart-text-shadow);\r\n  width: 170px;\r\n  transition: border-radius 300ms ease-out 300ms;\r\n}\r\n.chart-details-div div {\r\n  display: grid;\r\n  grid-template-columns: 20px 1fr;\r\n  grid-template-areas: \"... text\";\r\n}\r\n\r\n.chart-details-div p {\r\n  grid-area: text;\r\n  margin: 0;\r\n}\r\n\r\n.chart-details-symbol {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.chart-details-symbol-temp {\r\n  background-color: var(--chart-color-temp);\r\n}\r\n\r\n.chart-details-symbol-apparent {\r\n  background-color: var(--chart-color-apparent);\r\n}\r\n\r\n.chart-details-symbol-wind {\r\n  background-color: var(--chart-color-wind);\r\n}\r\n\r\n.chart-details-symbol-humidity {\r\n  background-color: var(--chart-color-humidity);\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _styles_search_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/search.css */ "./src/styles/search.css");
/* harmony import */ var _styles_weatherCurrent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/weatherCurrent.css */ "./src/styles/weatherCurrent.css");
/* harmony import */ var _styles_weatherDailyHourly_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/weatherDailyHourly.css */ "./src/styles/weatherDailyHourly.css");
/* harmony import */ var _styles_weatherDaily_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/weatherDaily.css */ "./src/styles/weatherDaily.css");
/* harmony import */ var _styles_weatherHourly_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/weatherHourly.css */ "./src/styles/weatherHourly.css");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");








(0,_modules_ui__WEBPACK_IMPORTED_MODULE_6__["default"])();


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
    const location = `${city.name}, ${city.admin3 ? `${city.admin3}, ` : ''}${city.admin2 ? `${city.admin2}, ` : ''}${city.admin1 ? `${city.admin1}, ` : ''}${city.country}`;

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
/* harmony import */ var _citiesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./citiesList */ "./src/modules/search/citiesList.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch */ "./src/modules/fetch.js");
/* harmony import */ var _weathercode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weathercode */ "./src/modules/weathercode.js");







async function updateCompleteWeather(chosenCity) {
  const { latitude } = chosenCity.dataset;
  const { longitude } = chosenCity.dataset;
  const weather = await (0,_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchWeather)(latitude, longitude);
  const currentHour = new Date().getHours();
  const currentWeatherData = {
    city: chosenCity.dataset.location,
    weathercode: (0,_weathercode__WEBPACK_IMPORTED_MODULE_5__["default"])(weather.current_weather.weathercode),
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
    sunrise: weather.daily.sunrise[0],
    sunset: weather.daily.sunset[0],
  };
  (0,_weatherCurrent_updateCurrentWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(currentWeatherData);
  (0,_weatherDailyHourly_weatherDaily_updateDailyWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(dailyWeatherData);
  (0,_weatherDailyHourly_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(hourlyWeatherData, hourlyWeatherData.localHour);
  // hide search
  const domSearch = document.querySelector('.city-search');
  domSearch.classList.add('hidden');
  // clear results after hiding
  (0,_citiesList__WEBPACK_IMPORTED_MODULE_3__["default"])('');
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
/* harmony import */ var _weatherCurrent_weatherCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherCurrent/weatherCurrent */ "./src/modules/weatherCurrent/weatherCurrent.js");
/* harmony import */ var _weatherDailyHourly_weatherDailyHourly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherDailyHourly/weatherDailyHourly */ "./src/modules/weatherDailyHourly/weatherDailyHourly.js");
/* harmony import */ var _weatherDailyHourly_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherDailyHourly/weatherHourly/updateHourlyWeather */ "./src/modules/weatherDailyHourly/weatherHourly/updateHourlyWeather.js");





function loadUi() {
  const body = document.querySelector('body');
  body.append(
    (0,_search_search__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    (0,_weatherCurrent_weatherCurrent__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    (0,_weatherDailyHourly_weatherDailyHourly__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  );
}

// add listener to window resize to adjust graph
let windowResizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(windowResizeTimeout);
  windowResizeTimeout = setTimeout(() => {
    (0,_weatherDailyHourly_weatherHourly_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
/* harmony import */ var _changeUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../changeUnits */ "./src/modules/changeUnits.js");


function weatherCurrent() {
  const section = document.createElement('section');

  // city
  const cityDiv = document.createElement('div');
  const cityPara = document.createElement('p');

  cityDiv.classList.add('city-div');
  cityPara.classList.add('city-para');

  cityPara.innerText = 'City Name, Country Name';

  cityDiv.append(cityPara);

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
  unitsElements.forEach((element) => element.addEventListener('change', _changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]));
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

  windSpeedUnit.addEventListener('change', _changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
      text: 'Wind speed: ',
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
function createChartLineGroup(className, unitSymbol, unitType) {
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
    const vertex = document.createElementNS(svgNs, 'circle');
    vertex.classList.add(`${className}-chart-vertex`);
    vertex.setAttribute('r', 4);
    vertex.setAttribute('cx', 500);
    vertex.setAttribute('cy', 500);
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

  const allVertices = [tempVertices, windVertices, humidityVertices, tempApparentVertices];
  allVertices.forEach((vertices) => {
    vertices.forEach((vertex, i) => {
      if (pointed === i) {
        vertex.classList.remove('hidden');
        vertex.setAttribute('r', 7);
      } else {
        vertex.classList.add('hidden');
        vertex.setAttribute('r', 4);
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
      vertex.setAttribute('r', 4);
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
  const minValue = className === 'humidity' ? 0 : positionsY.reduce((min, current) => (min < current ? min : current));
  const maxValue = className === 'humidity' ? 100 : positionsY.reduce((max, current) => (max > current ? max : current));
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

  // position circle vertices
  chartVertices.forEach((vertex, i) => {
    vertex.setAttribute('cx', `${positionsX[i]}`);
    vertex.setAttribute('cy', `${positionsToPixels[i] + (textSpace / 2)}`);
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
  const windSpeeds = (0,_graphFunctions__WEBPACK_IMPORTED_MODULE_0__.getNext25)(data.windspeed, startFromIndex);
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
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(temps, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'temp', '.temperature-number');
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(apparents, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'temp-apparent', '.temperature-number');
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(windSpeeds, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'wind', '.speed-number');
    (0,_updateChartLine__WEBPACK_IMPORTED_MODULE_3__["default"])(humidity, positionsX, heightsHumidity, hoursUsed, textSpace, width, 'humidity', '.humidity-percent');
    (0,_updateChartIcons__WEBPACK_IMPORTED_MODULE_4__["default"])(weathercodes, sunrise, sunset, hours, width);
    (0,_updateChartHoverDataset__WEBPACK_IMPORTED_MODULE_5__["default"])(temps, apparents, windSpeeds, humidity, weathercodes);
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




const svgNs = 'http://www.w3.org/2000/svg';

function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS(svgNs, 'svg');
  div.classList.add('weather-hourly', 'invisible');
  svg.classList.add('hourly-chart');
  svg.append(
    createChartMarksAndHours(),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('wind'),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('humidity'),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('temp-apparent'),
    (0,_createChartLineGroup__WEBPACK_IMPORTED_MODULE_0__["default"])('temp', '°', 'temperature-number'),
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

/***/ "./src/media/images/icons/search-magnifier.svg":
/*!*****************************************************!*\
  !*** ./src/media/images/icons/search-magnifier.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3d34bee89cf0c960460.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFNBQVMsT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FB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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsOEJBQThCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGdDQUFnQztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc2VhcmNoLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyQ3VycmVudC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseUhvdXJseS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJIb3VybHkuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldEhvdXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRNaW51dGVzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0FmdGVyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc2V0SG91cnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3NldE1pbnV0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc2VhcmNoLmNzcz8wMzgzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckN1cnJlbnQuY3NzPzA3NjciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseS5jc3M/NTE3NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5SG91cmx5LmNzcz9mMTc4Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVySG91cmx5LmNzcz84MGZlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY2hhbmdlVW5pdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaC9jaXRpZXNMaXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc2VhcmNoL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaC9zZWFyY2hDaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc2VhcmNoL3VwZGF0ZUNvbXBsZXRlV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdW5pdENvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZhbHVlQWRqdXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckN1cnJlbnQvYmFyQWRqdXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckN1cnJlbnQvdXBkYXRlQ3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQ3VycmVudC93ZWF0aGVyQ3VycmVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVyRGFpbHlIb3VybHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckRhaWx5L2RhaWx5Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVyRGFpbHkvdXBkYXRlRGFpbHlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJIb3VybHkvY3JlYXRlQ2hhcnREZXRhaWxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJIb3VybHkvY3JlYXRlQ2hhcnRMaW5lR3JvdXAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS9jcmVhdGVXZWF0aGVySWNvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS9lbXB0eUNoYXJ0UG9zaXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJIb3VybHkvZ3JhcGhGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS9ob3VybHlEZXRhaWxIb3Zlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3Bvc2l0aW9uTGluZXNBbmRIb3Vycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUNoYXJ0SG92ZXJEYXRhc2V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhaWx5SG91cmx5L3dlYXRoZXJIb3VybHkvdXBkYXRlQ2hhcnRJY29ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUNoYXJ0TGluZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUhvdXJseVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS93ZWF0aGVySG91cmx5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckljb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyY29kZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jb3VudHJ5LWNvZGUtZW1vamkvbGliL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3NlYXJjaC1tYWduaWZpZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1yYWRpb3VzOiA4cHg7XFxyXFxuICAtLWZsYWctc2l6ZTogMi4yNXJlbTtcXHJcXG4gIC0tbWF4LWZsYWctc2l6ZTogMi43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktc2VhcmNoIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBhbmltYXRpb246IHNlYXJjaC1yZXZlYWwgMXMgY3ViaWMtYmV6aWVyKC4yMiwuNjEsLjM2LDEpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNlYXJjaC1yZXZlYWwge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDE1MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBpbnB1dCAqL1xcclxcblxcclxcbi5zZWFyY2gtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgLS1tYWduaWZpZXItZm9jdXMtc2l6ZTogMi41cmVtO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLW1hZ25pZmllci1mb2N1cy1zaXplKSArIDNweCk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyguMjVyZW0gKyB2YXIoLS1yYWRpb3VzKSk7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IC43NXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tcmFkaW91cykgMCB2YXIoLS1yYWRpb3VzKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAzMDBtcywgYmFja2dyb3VuZC1wb3NpdGlvbiAzMDBtcztcXHJcXG59XFxyXFxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxufVxcclxcbi5zZWFyY2gtaW5wdXQubG9hZGluZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBsb2NhdGlvbnMgbGlzdCAqL1xcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1yYWRpb3VzKSAqIC0xKSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCxcXHJcXG4uc2VhcmNoLXJlc3VsdC1lbXB0eSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tbWF4LWZsYWctc2l6ZSkgKiAxLjI1KSAxZnI7XFxyXFxuICAvKiBoZWlnaHQ6IDY1cHg7ICovXFxyXFxuICBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICsgMjBweCk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0OmhvdmVyLFxcclxcbi5zZWFyY2gtcmVzdWx0OmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IGNhbGModmFyKC0tbWF4LWZsYWctc2l6ZSkgKiAxLjI1KSAwIDVweCAjZWVlO1xcclxcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0Om5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpsYXN0LWNoaWxkLFxcclxcbi5zZWFyY2gtcmVzdWx0LWVtcHR5IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIHZhcigtLXJhZGlvdXMpO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdCBwOm5vdCguY291bnRyeS1mbGFnKSB7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jb3VudHJ5LWZsYWcsXFxyXFxuLmNvdW50cnktZmxhZy1ub25lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmNvdW50cnktZmxhZyB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZsYWctc2l6ZSk7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0OmhvdmVyIC5jb3VudHJ5LWZsYWcsXFxyXFxuLnNlYXJjaC1yZXN1bHQ6Zm9jdXMgLmNvdW50cnktZmxhZyB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1heC1mbGFnLXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBsb2FkaW5nIGljb24gKi9cXHJcXG5cXHJcXG4uc2VhcmNoLWxvYWRpbmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICByaWdodDogMnB4O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyA+IGRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IGxvYWRpbmctaWNvbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMikge1xcclxcbiAgYm9yZGVyOiA2cHggc29saWQgIzc3NztcXHJcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IGxvYWRpbmctaWNvbiAxcyBlYXNlLWluIHJldmVyc2UgaW5maW5pdGU7XFxyXFxuICBzY2FsZTogODMlO1xcclxcbn1cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGJvcmRlcjogOHB4IHNvbGlkICM5OTk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbiAgc2NhbGU6IDYyJTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2FkaW5nLWljb24ge1xcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NlYXJjaC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qix5REFBaUU7RUFDakUscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0RBQXNEO0VBQ3RELDZDQUE2QztFQUM3QyxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCw0REFBNEQ7QUFDOUQ7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDREQUE0RDtFQUM1RCxrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osOERBQThEO0VBQzlELG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUUsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLG1EQUFtRDtFQUNuRCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsK0NBQStDO0VBQy9DLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1yYWRpb3VzOiA4cHg7XFxyXFxuICAtLWZsYWctc2l6ZTogMi4yNXJlbTtcXHJcXG4gIC0tbWF4LWZsYWctc2l6ZTogMi43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktc2VhcmNoIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBhbmltYXRpb246IHNlYXJjaC1yZXZlYWwgMXMgY3ViaWMtYmV6aWVyKC4yMiwuNjEsLjM2LDEpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNlYXJjaC1yZXZlYWwge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDE1MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBpbnB1dCAqL1xcclxcblxcclxcbi5zZWFyY2gtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgLS1tYWduaWZpZXItZm9jdXMtc2l6ZTogMi41cmVtO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9tZWRpYS9pbWFnZXMvaWNvbnMvc2VhcmNoLW1hZ25pZmllci5zdmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1tYWduaWZpZXItZm9jdXMtc2l6ZSkgKyAzcHgpO1xcclxcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoLjI1cmVtICsgdmFyKC0tcmFkaW91cykpO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIHZhcigtLXJhZGlvdXMpIDAgdmFyKC0tcmFkaW91cyk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMzAwbXMsIGJhY2tncm91bmQtcG9zaXRpb24gMzAwbXM7XFxyXFxufVxcclxcbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbn1cXHJcXG4uc2VhcmNoLWlucHV0LmxvYWRpbmcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbG9jYXRpb25zIGxpc3QgKi9cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGModmFyKC0tcmFkaW91cykgKiAtMSkpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQsXFxyXFxuLnNlYXJjaC1yZXN1bHQtZW1wdHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICogMS4yNSkgMWZyO1xcclxcbiAgLyogaGVpZ2h0OiA2NXB4OyAqL1xcclxcbiAgbWluLWhlaWdodDogY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSArIDIwcHgpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpob3ZlcixcXHJcXG4uc2VhcmNoLXJlc3VsdDpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICogMS4yNSkgMCA1cHggI2VlZTtcXHJcXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6bGFzdC1jaGlsZCxcXHJcXG4uc2VhcmNoLXJlc3VsdC1lbXB0eSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCB2YXIoLS1yYWRpb3VzKTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQgcDpub3QoLmNvdW50cnktZmxhZykge1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRyeS1mbGFnLFxcclxcbi5jb3VudHJ5LWZsYWctbm9uZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZsYWcge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mbGFnLXNpemUpO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpob3ZlciAuY291bnRyeS1mbGFnLFxcclxcbi5zZWFyY2gtcmVzdWx0OmZvY3VzIC5jb3VudHJ5LWZsYWcge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tYXgtZmxhZy1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbG9hZGluZyBpY29uICovXFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcmlnaHQ6IDJweDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiBkaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgxKSB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjNTU1O1xcclxcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGJvcmRlcjogNnB4IHNvbGlkICM3Nzc7XFxyXFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgZWFzZS1pbiByZXZlcnNlIGluZmluaXRlO1xcclxcbiAgc2NhbGU6IDgzJTtcXHJcXG59XFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgzKSB7XFxyXFxuICBib3JkZXI6IDhweCBzb2xpZCAjOTk5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IGxvYWRpbmctaWNvbiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG4gIHNjYWxlOiA2MiU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9hZGluZy1pY29uIHtcXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS10eHQtY29sb3ItMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbG9yLTI6ICMyMjI7XFxyXFxuICAtLXR4dC1jb2xvci0zOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBnZW5lcmFsIHVzZSAqL1xcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tdHh0LWNvbG9yLTE6ICMwMDA7XFxyXFxuICAtLXR4dC1jb2xvci0yOiAjMjIyO1xcclxcbiAgLS10eHQtY29sb3ItMzogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgZ2VuZXJhbCB1c2UgKi9cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93aW5kLWNvbXBhc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1nYXVnZS1ib3JkZXItd2lkdGg6IDdweDtcXHJcXG4gIC0tdW5pdC11bmRlcmxpbmUtd2lkdGg6IDNweDtcXHJcXG4gIC0tY29tcGFzcy1jb2xvcjogcmdiYSg1MCwgNTAsIDI1NSwgLjEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDQzMHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjaXR5IGNpdHkgY2l0eVxcXCJcXHJcXG4gICAgXFxcImljb24gdGVtcCB0ZW1wXFxcIlxcclxcbiAgICBcXFwiaWNvbiBodW1pIHdpbmRcXFwiXFxyXFxuICAgIFxcXCJjb2RlIGh1bWkgd2luZFxcXCI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jdXJyZW50IHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjaXR5IG5hbWUgKi9cXHJcXG5cXHJcXG4uY2l0eS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBjaXR5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBwYWRkaW5nOiAwIC4yNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi8qIGljb24gKi9cXHJcXG5cXHJcXG4ud2VhdGhlci1jdXJyZW50LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAuMjUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2VhdGhlcmNvZGUgKi9cXHJcXG5cXHJcXG4ud2VhdGhlcmNvZGUtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogY29kZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyY29kZS1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGVtcGVyYXR1cmUgKi9cXHJcXG5cXHJcXG4udGVtcC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjdXJyIHVuaXRcXFwiXFxyXFxuICAgIFxcXCJmZWVsIGZlZWxcXFwiO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtY3VycmVudCB7XFxyXFxuICBncmlkLWFyZWE6IGN1cnI7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi8qIGh1bWlkaXR5ICovXFxyXFxuXFxyXFxuLmh1bWlkaXR5LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGh1bWk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LWdhdWdlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ2F1Z2UtYm9yZGVyLXdpZHRoKSBzb2xpZCByZ2JhKDUwLCA1MCwgMjU1LCAuMjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LWdhdWdlLXBlcmNlbnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpIHNvbGlkIGJsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBpbnNldDogY2FsYyh2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpICogLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHkge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHdpbmQgKi9cXHJcXG5cXHJcXG4ud2luZC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiB3aW5kO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWdhdWdlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1zcGVlZCB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1jb21wYXNzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQsXFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA2MCUsIHZhcigtLWNvbXBhc3MtY29sb3IpIDYxJSwgdmFyKC0tY29tcGFzcy1jb2xvcikgNjklLCB0cmFuc3BhcmVudCA3MCUpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1kaXJlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICByb3RhdGU6IDBkZWc7XFxyXFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgNjAlLCByZ2JhKDAsIDAsIDI1NSwgLjUpIDYwJSk7XFxyXFxuICBtYXNrLWltYWdlOiBjb25pYy1ncmFkaWVudChyZWQgNSUsIHRyYW5zcGFyZW50IDUlLCB0cmFuc3BhcmVudCA5NSUsIHJlZCA5NSUpO1xcclxcbiAgdHJhbnNpdGlvbjogcm90YXRlIGVhc2Utb3V0IDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC10aXRsZS1kaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGZvciB1bml0cyAqL1xcclxcblxcclxcbi5nYXVnZS11bml0IHtcXHJcXG4gIGdyaWQtYXJlYTogdW5pdDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibHVlIHZhcigtLXVuaXQtdW5kZXJsaW5lLXdpZHRoKSwgdHJhbnNwYXJlbnQgdmFyKC0tdW5pdC11bmRlcmxpbmUtd2lkdGgpKTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6OmJlZm9yZSxcXHJcXG4uZ2F1Z2UtdW5pdDo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgdG9wOiAxMDAlXFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGZlZWw7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1hcHBhcmVudCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQtYXBwYXJlbnQge1xcclxcbiAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdC50ZW1wZXJhdHVyZS11bml0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxyXFxufVxcclxcbi5nYXVnZS11bml0LnRlbXBlcmF0dXJlLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1zcGVlZC11bml0e1xcclxcbiAgd2lkdGg6IDIuMHJlbTtcXHJcXG4gIGhlaWdodDogMS4xMHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxufVxcclxcbi5nYXVnZS11bml0LndpbmQtc3BlZWQtdW5pdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJtcGhcXFwiO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdC53aW5kLXNwZWVkLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJrbS9oXFxcIjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93ZWF0aGVyQ3VycmVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEM7Ozs7b0JBSWtCO0VBQ2xCLFFBQVE7RUFDUiwwQ0FBMEM7RUFDMUMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FB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QUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1nYXVnZS1ib3JkZXItd2lkdGg6IDdweDtcXHJcXG4gIC0tdW5pdC11bmRlcmxpbmUtd2lkdGg6IDNweDtcXHJcXG4gIC0tY29tcGFzcy1jb2xvcjogcmdiYSg1MCwgNTAsIDI1NSwgLjEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDQzMHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjaXR5IGNpdHkgY2l0eVxcXCJcXHJcXG4gICAgXFxcImljb24gdGVtcCB0ZW1wXFxcIlxcclxcbiAgICBcXFwiaWNvbiBodW1pIHdpbmRcXFwiXFxyXFxuICAgIFxcXCJjb2RlIGh1bWkgd2luZFxcXCI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jdXJyZW50IHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjaXR5IG5hbWUgKi9cXHJcXG5cXHJcXG4uY2l0eS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBjaXR5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBwYWRkaW5nOiAwIC4yNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi8qIGljb24gKi9cXHJcXG5cXHJcXG4ud2VhdGhlci1jdXJyZW50LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAuMjUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2VhdGhlcmNvZGUgKi9cXHJcXG5cXHJcXG4ud2VhdGhlcmNvZGUtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogY29kZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyY29kZS1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGVtcGVyYXR1cmUgKi9cXHJcXG5cXHJcXG4udGVtcC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjdXJyIHVuaXRcXFwiXFxyXFxuICAgIFxcXCJmZWVsIGZlZWxcXFwiO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtY3VycmVudCB7XFxyXFxuICBncmlkLWFyZWE6IGN1cnI7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi8qIGh1bWlkaXR5ICovXFxyXFxuXFxyXFxuLmh1bWlkaXR5LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGh1bWk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LWdhdWdlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ2F1Z2UtYm9yZGVyLXdpZHRoKSBzb2xpZCByZ2JhKDUwLCA1MCwgMjU1LCAuMjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LWdhdWdlLXBlcmNlbnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpIHNvbGlkIGJsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBpbnNldDogY2FsYyh2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpICogLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHkge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHdpbmQgKi9cXHJcXG5cXHJcXG4ud2luZC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiB3aW5kO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWdhdWdlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1zcGVlZCB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1jb21wYXNzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZDpcXHJcXG4gICAgdXJsKC4uL21lZGlhL2ltYWdlcy93aW5kLWNvbXBhc3Muc3ZnKSBuby1yZXBlYXQsXFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA2MCUsIHZhcigtLWNvbXBhc3MtY29sb3IpIDYxJSwgdmFyKC0tY29tcGFzcy1jb2xvcikgNjklLCB0cmFuc3BhcmVudCA3MCUpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1kaXJlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICByb3RhdGU6IDBkZWc7XFxyXFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgNjAlLCByZ2JhKDAsIDAsIDI1NSwgLjUpIDYwJSk7XFxyXFxuICBtYXNrLWltYWdlOiBjb25pYy1ncmFkaWVudChyZWQgNSUsIHRyYW5zcGFyZW50IDUlLCB0cmFuc3BhcmVudCA5NSUsIHJlZCA5NSUpO1xcclxcbiAgdHJhbnNpdGlvbjogcm90YXRlIGVhc2Utb3V0IDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC10aXRsZS1kaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGZvciB1bml0cyAqL1xcclxcblxcclxcbi5nYXVnZS11bml0IHtcXHJcXG4gIGdyaWQtYXJlYTogdW5pdDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibHVlIHZhcigtLXVuaXQtdW5kZXJsaW5lLXdpZHRoKSwgdHJhbnNwYXJlbnQgdmFyKC0tdW5pdC11bmRlcmxpbmUtd2lkdGgpKTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6OmJlZm9yZSxcXHJcXG4uZ2F1Z2UtdW5pdDo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgdG9wOiAxMDAlXFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGZlZWw7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1hcHBhcmVudCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQtYXBwYXJlbnQge1xcclxcbiAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdC50ZW1wZXJhdHVyZS11bml0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxyXFxufVxcclxcbi5nYXVnZS11bml0LnRlbXBlcmF0dXJlLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1zcGVlZC11bml0e1xcclxcbiAgd2lkdGg6IDIuMHJlbTtcXHJcXG4gIGhlaWdodDogMS4xMHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxufVxcclxcbi5nYXVnZS11bml0LndpbmQtc3BlZWQtdW5pdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJtcGhcXFwiO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdC53aW5kLXNwZWVkLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJrbS9oXFxcIjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS9wcmVjaXBpdGF0aW9ucy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS93aW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3N1bnJpc2Utc3Vuc2V0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3V2LWluZGV4LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53ZWF0aGVyLWRhaWx5IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZGFpbHkgKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxNjVweDtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY2ZWE4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiZGFpbHktd2VhdGhlciAgZGFpbHktd2VhdGhlclxcXCJcXHJcXG4gICAgXFxcInByZWNpcGl0YXRpb25zIHdpbmQtc3BlZWQgICBcXFwiXFxyXFxuICAgIFxcXCJzdW5yaXNlLXN1bnNldCB1di1pbmRleCAgICAgXFxcIjtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1vdXQgMTAwbXM7XFxyXFxufVxcclxcbi53ZWF0aGVyLWRhaWx5OmhvdmVyIC5kYWlseS1jYXJkLFxcclxcbi53ZWF0aGVyLWRhaWx5OmFjdGl2ZSAuZGFpbHktY2FyZCB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1jYXJkLmFjdGl2ZSB7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4sIHdlYXRoZXJjb2RlIGFuZCB0ZW1wZXJhdHVyZXMgKi9cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlciB7XFxyXFxuICBncmlkLWFyZWE6IGRhaWx5LXdlYXRoZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjdXJyZW50LWRheSAgICAgIGN1cnJlbnQtZGF5ICAgICBcXFwiXFxyXFxuICAgIFxcXCJkYXktd2VhdGhlci1pY29uIGRheS13ZWF0aGVyLWljb25cXFwiXFxyXFxuICAgIFxcXCJtYXgtdGVtcCAgICAgICAgIG1pbi10ZW1wICAgICAgICBcXFwiXFxyXFxuICAgIFxcXCJ3ZWF0aGVyLWRlc2NyICAgIHdlYXRoZXItZGVzY3IgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWRheSB7XFxyXFxuICBncmlkLWFyZWE6IGN1cnJlbnQtZGF5O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXItaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRheS13ZWF0aGVyLWljb247XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWF4IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxLjc1cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDNweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogd2VhdGhlci1kZXNjcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi8qIHByZWNpcGl0YXRpb25zICovXFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJlY2lwaXRhdGlvbnM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHF1YW50aXR5XFxcIlxcclxcbiAgICBcXFwiaWNvbiBob3VycyAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb24tcXVhbnRpdHkge1xcclxcbiAgZ3JpZC1hcmVhOiBxdWFudGl0eTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucy1ob3VycyB7XFxyXFxuICBncmlkLWFyZWE6IGhvdXJzO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCBzcGVlZCAqL1xcclxcblxcclxcbi5kYWlseS13aW5kIHtcXHJcXG4gIGdyaWQtYXJlYTogd2luZC1zcGVlZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gc3BlZWRcXFwiXFxyXFxuICAgIFxcXCJpY29uIHVuaXQgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDBweCAwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2luZC1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLXNwZWVkIHtcXHJcXG4gIGdyaWQtYXJlYTogc3BlZWQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2luZC1zcGVlZC11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogdW5pdDtcXHJcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAyLjUpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvbnQtc2l6ZSkgKiAxLjI1KTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3VucmlzZSBhbmQgc3Vuc2V0ICovXFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Utc3Vuc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogc3VucmlzZS1zdW5zZXQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHN1bnJpc2UgXFxcIlxcclxcbiAgICBcXFwiaWNvbiBzdW5zZXRcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1zdW5yaXNlLXN1bnNldC1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1zdW5yaXNlIHtcXHJcXG4gIGdyaWQtYXJlYTogc3VucmlzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnNldCB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnNldDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVVYgaW5kZXggKi9cXHJcXG5cXHJcXG4uZGFpbHktdXYge1xcclxcbiAgZ3JpZC1hcmVhOiB1di1pbmRleDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gaW5kZXggXFxcIlxcclxcbiAgICBcXFwiaWNvbiB1diAgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pbmRleCB7XFxyXFxuICBncmlkLWFyZWE6IGluZGV4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LXRleHQge1xcclxcbiAgZ3JpZC1hcmVhOiB1djtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNDQUFz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O0VBQ3JFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53ZWF0aGVyLWRhaWx5IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZGFpbHkgKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxNjVweDtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY2ZWE4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiZGFpbHktd2VhdGhlciAgZGFpbHktd2VhdGhlclxcXCJcXHJcXG4gICAgXFxcInByZWNpcGl0YXRpb25zIHdpbmQtc3BlZWQgICBcXFwiXFxyXFxuICAgIFxcXCJzdW5yaXNlLXN1bnNldCB1di1pbmRleCAgICAgXFxcIjtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1vdXQgMTAwbXM7XFxyXFxufVxcclxcbi53ZWF0aGVyLWRhaWx5OmhvdmVyIC5kYWlseS1jYXJkLFxcclxcbi53ZWF0aGVyLWRhaWx5OmFjdGl2ZSAuZGFpbHktY2FyZCB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1jYXJkLmFjdGl2ZSB7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4sIHdlYXRoZXJjb2RlIGFuZCB0ZW1wZXJhdHVyZXMgKi9cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlciB7XFxyXFxuICBncmlkLWFyZWE6IGRhaWx5LXdlYXRoZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjdXJyZW50LWRheSAgICAgIGN1cnJlbnQtZGF5ICAgICBcXFwiXFxyXFxuICAgIFxcXCJkYXktd2VhdGhlci1pY29uIGRheS13ZWF0aGVyLWljb25cXFwiXFxyXFxuICAgIFxcXCJtYXgtdGVtcCAgICAgICAgIG1pbi10ZW1wICAgICAgICBcXFwiXFxyXFxuICAgIFxcXCJ3ZWF0aGVyLWRlc2NyICAgIHdlYXRoZXItZGVzY3IgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWRheSB7XFxyXFxuICBncmlkLWFyZWE6IGN1cnJlbnQtZGF5O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXItaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRheS13ZWF0aGVyLWljb247XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWF4IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxLjc1cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDNweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogd2VhdGhlci1kZXNjcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi8qIHByZWNpcGl0YXRpb25zICovXFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJlY2lwaXRhdGlvbnM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHF1YW50aXR5XFxcIlxcclxcbiAgICBcXFwiaWNvbiBob3VycyAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvcHJlY2lwaXRhdGlvbnMucG5nKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5IHtcXHJcXG4gIGdyaWQtYXJlYTogcXVhbnRpdHk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMge1xcclxcbiAgZ3JpZC1hcmVhOiBob3VycztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHdpbmQgc3BlZWQgKi9cXHJcXG5cXHJcXG4uZGFpbHktd2luZCB7XFxyXFxuICBncmlkLWFyZWE6IHdpbmQtc3BlZWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHNwZWVkXFxcIlxcclxcbiAgICBcXFwiaWNvbiB1bml0IFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS93aW5kLnBuZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2luZC1zcGVlZCB7XFxyXFxuICBncmlkLWFyZWE6IHNwZWVkO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtc3BlZWQtdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICBncmlkLWFyZWE6IHVuaXQ7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMi41KTtcXHJcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMS4yNSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIHN1bnJpc2UgYW5kIHN1bnNldCAqL1xcclxcblxcclxcbi5kYWlseS1zdW5yaXNlLXN1bnNldCB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnJpc2Utc3Vuc2V0O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBzdW5yaXNlIFxcXCJcXHJcXG4gICAgXFxcImljb24gc3Vuc2V0XFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDBweCAwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktc3VucmlzZS1zdW5zZXQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS9zdW5yaXNlLXN1bnNldC5wbmcpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Uge1xcclxcbiAgZ3JpZC1hcmVhOiBzdW5yaXNlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktc3Vuc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogc3Vuc2V0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVViBpbmRleCAqL1xcclxcblxcclxcbi5kYWlseS11diB7XFxyXFxuICBncmlkLWFyZWE6IHV2LWluZGV4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBpbmRleCBcXFwiXFxyXFxuICAgIFxcXCJpY29uIHV2ICAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvdXYtaW5kZXgucG5nKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pbmRleCB7XFxyXFxuICBncmlkLWFyZWE6IGluZGV4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LXRleHQge1xcclxcbiAgZ3JpZC1hcmVhOiB1djtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53ZWF0aGVyLWRhaWx5LWhvdXJseSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtd2lkdGg6IDEyMzBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXItZGFpbHktaG91cmx5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC13aWR0aDogMTIzMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWNoYXJ0LXRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjtcXHJcXG4gIC0td2VhdGhlci1ob3VybHktZGl2LWhlaWdodDogMjAwcHg7XFxyXFxuICAtLWNoYXJ0LXRleHQtY29sb3ItZmlsbDogI2RkZDtcXHJcXG4gIC0tY2hhcnQtdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxyXFxuICAtLWNoYXJ0LWNvbG9yLXRlbXA6IHJlZDtcXHJcXG4gIC0tY2hhcnQtY29sb3ItYXBwYXJlbnQ6IGNvcmFsO1xcclxcbiAgLS1jaGFydC1jb2xvci13aW5kOiBibHVlO1xcclxcbiAgLS1jaGFydC1jb2xvci1odW1pZGl0eTogYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2hhcnQgZGl2aXNpb25zIGFuZCBob3VycyAqL1xcclxcblxcclxcbi53ZWF0aGVyLWhvdXJseSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXdlYXRoZXItaG91cmx5LWRpdi1oZWlnaHQpO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsIGJsYWNrIDMlKTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAycHggYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtbGluZS1ob3VyLFxcclxcbi5jaGFydC1saW5lLWJhc2Uge1xcclxcbiAgc3Ryb2tlOiBncmF5O1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ob3Vycy1jaGFydC10ZXh0IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LXRleHQtY29sb3ItZmlsbCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tY2hhcnQtdGV4dC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wIHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4udGVtcC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0LXRlbXAge1xcclxcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxuICBzdHJva2U6IHZhcigtLWNoYXJ0LWNvbG9yLXRlbXApO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAzcHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci10ZW1wKTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jaGFydC10ZXh0IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LXRleHQtY29sb3ItZmlsbCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tY2hhcnQtdGV4dC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wIGFwcGFyZW50IHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4udGVtcC1hcHBhcmVudC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaG91cmx5OmhvdmVyIC50ZW1wLWFwcGFyZW50LWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQtdGVtcC1hcHBhcmVudCB7XFxyXFxuICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG4gIHN0cm9rZTogdmFyKC0tY2hhcnQtY29sb3ItYXBwYXJlbnQpO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50LWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci1hcHBhcmVudCk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCByZWxhdGVkICovXFxyXFxuXFxyXFxuLndpbmQtY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogLjI1O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1ob3VybHk6aG92ZXIgLndpbmQtY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydC13aW5kIHtcXHJcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcclxcbiAgc3Ryb2tlOiB2YXIoLS1jaGFydC1jb2xvci13aW5kKTtcXHJcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcclxcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1jaGFydC12ZXJ0ZXgge1xcclxcbiAgZmlsbDogdmFyKC0tY2hhcnQtY29sb3Itd2luZCk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaHVtaWRpdHkgcmVsYXRlZCAqL1xcclxcblxcclxcbi5odW1pZGl0eS1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAuMjU7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWhvdXJseTpob3ZlciAuaHVtaWRpdHktY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydC1odW1pZGl0eSB7XFxyXFxuICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG4gIHN0cm9rZTogdmFyKC0tY2hhcnQtY29sb3ItaHVtaWRpdHkpO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS1jaGFydC12ZXJ0ZXgge1xcclxcbiAgZmlsbDogdmFyKC0tY2hhcnQtY29sb3ItaHVtaWRpdHkpO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi8qIGhvdXJseSB3ZWF0aGVyIGljb24gcmVsYXRlZCAqL1xcclxcblxcclxcbi5jaGFydC13ZWF0aGVyLWljb25zLWRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXdlYXRoZXItaG91cmx5LWRpdi1oZWlnaHQpIC0gMjNweCk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC13ZWF0aGVyLWljb24ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMSAxIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkZXRhaWwgZGl2IHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1kaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAuMjUpLFxcclxcbiAgICBpbnNldCAycHggMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWNoYXJ0LXRleHQtY29sb3ItZmlsbCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tY2hhcnQtdGV4dC1zaGFkb3cpO1xcclxcbiAgd2lkdGg6IDE3MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyAzMDBtcyBlYXNlLW91dCAzMDBtcztcXHJcXG59XFxyXFxuLmNoYXJ0LWRldGFpbHMtZGl2IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuLi4gdGV4dFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLWRpdiBwIHtcXHJcXG4gIGdyaWQtYXJlYTogdGV4dDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wtdGVtcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFydC1jb2xvci10ZW1wKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sLWFwcGFyZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJ0LWNvbG9yLWFwcGFyZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sLXdpbmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcnQtY29sb3Itd2luZCk7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLXN5bWJvbC1odW1pZGl0eSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFydC1jb2xvci1odW1pZGl0eSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlckhvdXJseS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsa0NBQWtDO0FBQ3BDOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNERBQTREO0VBQzVELHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHFDQUFxQztBQUN2Qzs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHFDQUFxQztBQUN2Qzs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsbUNBQW1DO0FBQ3JDOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQ0FBbUM7QUFDckM7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1DQUFtQztBQUNyQzs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQzs4Q0FDNEM7RUFDNUMsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tY2hhcnQtdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xcclxcbiAgLS13ZWF0aGVyLWhvdXJseS1kaXYtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIC0tY2hhcnQtdGV4dC1jb2xvci1maWxsOiAjZGRkO1xcclxcbiAgLS1jaGFydC10ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcXHJcXG4gIC0tY2hhcnQtY29sb3ItdGVtcDogcmVkO1xcclxcbiAgLS1jaGFydC1jb2xvci1hcHBhcmVudDogY29yYWw7XFxyXFxuICAtLWNoYXJ0LWNvbG9yLXdpbmQ6IGJsdWU7XFxyXFxuICAtLWNoYXJ0LWNvbG9yLWh1bWlkaXR5OiBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjaGFydCBkaXZpc2lvbnMgYW5kIGhvdXJzICovXFxyXFxuXFxyXFxuLndlYXRoZXItaG91cmx5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogdmFyKC0td2VhdGhlci1ob3VybHktZGl2LWhlaWdodCk7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgYmxhY2sgMyUpO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDJweCBibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1saW5lLWhvdXIsXFxyXFxuLmNoYXJ0LWxpbmUtYmFzZSB7XFxyXFxuICBzdHJva2U6IGdyYXk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzLWNoYXJ0LXRleHQge1xcclxcbiAgZmlsbDogdmFyKC0tY2hhcnQtdGV4dC1jb2xvci1maWxsKTtcXHJcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1jaGFydC10ZXh0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi8qIHRlbXAgcmVsYXRlZCAqL1xcclxcblxcclxcbi50ZW1wLWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQtdGVtcCB7XFxyXFxuICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG4gIHN0cm9rZTogdmFyKC0tY2hhcnQtY29sb3ItdGVtcCk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDNweDtcXHJcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtY2hhcnQtdmVydGV4IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LWNvbG9yLXRlbXApO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWNoYXJ0LXRleHQge1xcclxcbiAgZmlsbDogdmFyKC0tY2hhcnQtdGV4dC1jb2xvci1maWxsKTtcXHJcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1jaGFydC10ZXh0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi8qIHRlbXAgYXBwYXJlbnQgcmVsYXRlZCAqL1xcclxcblxcclxcbi50ZW1wLWFwcGFyZW50LWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IC41O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1ob3VybHk6aG92ZXIgLnRlbXAtYXBwYXJlbnQtY2hhcnQtZ3JvdXAge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydC10ZW1wLWFwcGFyZW50IHtcXHJcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcclxcbiAgc3Ryb2tlOiB2YXIoLS1jaGFydC1jb2xvci1hcHBhcmVudCk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQtY2hhcnQtdmVydGV4IHtcXHJcXG4gIGZpbGw6IHZhcigtLWNoYXJ0LWNvbG9yLWFwcGFyZW50KTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aW5kIHJlbGF0ZWQgKi9cXHJcXG5cXHJcXG4ud2luZC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAuMjU7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWhvdXJseTpob3ZlciAud2luZC1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0LXdpbmQge1xcclxcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxuICBzdHJva2U6IHZhcigtLWNoYXJ0LWNvbG9yLXdpbmQpO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2hhcnQtdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci13aW5kKTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNoYXJ0LXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBodW1pZGl0eSByZWxhdGVkICovXFxyXFxuXFxyXFxuLmh1bWlkaXR5LWNoYXJ0LWdyb3VwIHtcXHJcXG4gIG9wYWNpdHk6IC4yNTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaG91cmx5OmhvdmVyIC5odW1pZGl0eS1jaGFydC1ncm91cCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0LWh1bWlkaXR5IHtcXHJcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcclxcbiAgc3Ryb2tlOiB2YXIoLS1jaGFydC1jb2xvci1odW1pZGl0eSk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LWNoYXJ0LXZlcnRleCB7XFxyXFxuICBmaWxsOiB2YXIoLS1jaGFydC1jb2xvci1odW1pZGl0eSk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1jaGFydC10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG91cmx5IHdlYXRoZXIgaWNvbiByZWxhdGVkICovXFxyXFxuXFxyXFxuLmNoYXJ0LXdlYXRoZXItaWNvbnMtZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0td2VhdGhlci1ob3VybHktZGl2LWhlaWdodCkgLSAyM3B4KTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LXdlYXRoZXItaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi8qIGRldGFpbCBkaXYgcmVsYXRlZCAqL1xcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLWRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIC4yNSksXFxyXFxuICAgIGluc2V0IDJweCAycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2hhcnQtdGV4dC1jb2xvci1maWxsKTtcXHJcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1jaGFydC10ZXh0LXNoYWRvdyk7XFxyXFxuICB3aWR0aDogMTcwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDMwMG1zIGVhc2Utb3V0IDMwMG1zO1xcclxcbn1cXHJcXG4uY2hhcnQtZGV0YWlscy1kaXYgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4uLiB0ZXh0XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtZGl2IHAge1xcclxcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1kZXRhaWxzLXN5bWJvbC10ZW1wIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJ0LWNvbG9yLXRlbXApO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wtYXBwYXJlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcnQtY29sb3ItYXBwYXJlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtZGV0YWlscy1zeW1ib2wtd2luZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFydC1jb2xvci13aW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWRldGFpbHMtc3ltYm9sLWh1bWlkaXR5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJ0LWNvbG9yLWh1bWlkaXR5KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF0ZVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgZGF5IG9mIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSBtb250aCBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF0ZShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDI5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF0ZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7XG4gIHJldHVybiBkYXlPZk1vbnRoO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMgezB8MXwyfDN8NHw1fDZ9IHRoZSBkYXkgb2Ygd2VlaywgMCByZXByZXNlbnRzIFN1bmRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0SG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgaG91cnMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGhvdXJzIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGhvdXJzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSBob3VycyBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZ2V0SG91cnMobmV3IERhdGUoMjAxMiwgMSwgMjksIDExLCA0NSkpXG4gKiAvLz0+IDExXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SG91cnMoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gIHJldHVybiBob3Vycztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldE1pbnV0ZXNcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBtaW51dGVzIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBtaW51dGVzIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG1pbnV0ZXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIG1pbnV0ZXMgb2YgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIGNvbnN0IHJlc3VsdCA9IGdldE1pbnV0ZXMobmV3IERhdGUoMjAxMiwgMSwgMjksIDExLCA0NSwgNSkpXG4gKiAvLz0+IDQ1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWludXRlcyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIHJldHVybiBtaW51dGVzO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHNldEhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGhvdXJzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGhvdXJzIC0gdGhlIGhvdXJzIG9mIHRoZSBuZXcgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBob3VycyBzZXRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IDQgaG91cnMgdG8gMSBTZXB0ZW1iZXIgMjAxNCAxMTozMDowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHNldEhvdXJzKG5ldyBEYXRlKDIwMTQsIDgsIDEsIDExLCAzMCksIDQpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwNDozMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEhvdXJzKGRpcnR5RGF0ZSwgZGlydHlIb3Vycykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGhvdXJzID0gdG9JbnRlZ2VyKGRpcnR5SG91cnMpO1xuICBkYXRlLnNldEhvdXJzKGhvdXJzKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc2V0TWludXRlc1xuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW51dGVzIC0gdGhlIG1pbnV0ZXMgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbnV0ZXMgc2V0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCA0NSBtaW51dGVzIHRvIDEgU2VwdGVtYmVyIDIwMTQgMTE6MzA6NDA6XG4gKiBjb25zdCByZXN1bHQgPSBzZXRNaW51dGVzKG5ldyBEYXRlKDIwMTQsIDgsIDEsIDExLCAzMCwgNDApLCA0NSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDExOjQ1OjQwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TWludXRlcyhkaXJ0eURhdGUsIGRpcnR5TWludXRlcykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1pbnV0ZXMgPSB0b0ludGVnZXIoZGlydHlNaW51dGVzKTtcbiAgZGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckN1cnJlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyQ3VycmVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckRhaWx5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckRhaWx5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXJIb3VybHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVySG91cmx5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc2VhcmNoLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvd2VhdGhlckN1cnJlbnQuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWF0aGVyRGFpbHlIb3VybHkuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWF0aGVyRGFpbHkuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWF0aGVySG91cmx5LmNzcyc7XHJcbmltcG9ydCBsb2FkVWkgZnJvbSAnLi9tb2R1bGVzL3VpJztcclxuXHJcbmxvYWRVaSgpO1xyXG4iLCJpbXBvcnQgdmFsdWVBZGp1c3QgZnJvbSAnLi92YWx1ZUFkanVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VVbml0cyhlKSB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgY29uc3QgdW5pdHNDbGFzcyA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGVtcGVyYXR1cmUtdW5pdCcpXHJcbiAgICA/ICcudGVtcGVyYXR1cmUtdW5pdCcgOiAnLndpbmQtc3BlZWQtdW5pdCc7XHJcbiAgY29uc3QgdmFsdWVzQ2xhc3MgPSB1bml0c0NsYXNzID09PSAnLnRlbXBlcmF0dXJlLXVuaXQnXHJcbiAgICA/ICcudGVtcGVyYXR1cmUtbnVtYmVyJyA6ICcuc3BlZWQtbnVtYmVyJztcclxuICAvLyBjaGFuZ2UgdGhlIHJlc3Qgb2YgdGhlIHVuaXRzXHJcbiAgY29uc3QgdW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHVuaXRzQ2xhc3MpO1xyXG4gIHVuaXRzLmZvckVhY2goKHVuaXQpID0+IHtcclxuICAgIHVuaXQuY2hlY2tlZCA9IG5ld1ZhbHVlO1xyXG4gIH0pO1xyXG4gIC8vIGNoYW5nZSB0aGUgcmVsYXRlZCB2YWx1ZXNcclxuICBjb25zdCB2YWx1ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlc0NsYXNzKTtcclxuICB2YWx1ZXMuZm9yRWFjaCgobnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodmFsdWVzQ2xhc3MgPT09ICcudGVtcGVyYXR1cmUtbnVtYmVyJykge1xyXG4gICAgICBpZiAobnVtYmVyLmNsYXNzTGlzdC5jb250YWlucygndGVtcC1jdXJyZW50JylcclxuICAgICAgfHwgbnVtYmVyLmNsYXNzTGlzdC5jb250YWlucygndGVtcC1hcHBhcmVudCcpKSB7XHJcbiAgICAgICAgdmFsdWVBZGp1c3QoXHJcbiAgICAgICAgICBudW1iZXIsXHJcbiAgICAgICAgICBuZXdWYWx1ZSA/IG51bWJlci5kYXRhc2V0LmNlbHNpdXMgOiBudW1iZXIuZGF0YXNldC5mYWhyZW5oZWl0LFxyXG4gICAgICAgICAgbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5mYWhyZW5oZWl0IDogbnVtYmVyLmRhdGFzZXQuY2Vsc2l1cyxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCA6IG51bWJlci5kYXRhc2V0LmNlbHNpdXM7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobnVtYmVyLmNsYXNzTGlzdC5jb250YWlucygnc3BlZWQtbnVtYmVyJylcclxuICAgICAgJiYgIW51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoJ2RhaWx5LXdpbmQtc3BlZWQnKSkge1xyXG4gICAgICB2YWx1ZUFkanVzdChcclxuICAgICAgICBudW1iZXIsXHJcbiAgICAgICAgbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5raWxvbWV0ZXJzIDogbnVtYmVyLmRhdGFzZXQubWlsZXMsXHJcbiAgICAgICAgbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5taWxlcyA6IG51bWJlci5kYXRhc2V0LmtpbG9tZXRlcnMsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBuZXdWYWx1ZSA/IG51bWJlci5kYXRhc2V0Lm1pbGVzIDogbnVtYmVyLmRhdGFzZXQua2lsb21ldGVycztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUsIHRpbWV6b25lID0gJ2F1dG8nKSB7XHJcbiAgbGV0IHJlc3BvbnNlSnNvbjtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9JHtsYXRpdHVkZX0mbG9uZ2l0dWRlPSR7bG9uZ2l0dWRlfSZob3VybHk9dGVtcGVyYXR1cmVfMm0scmVsYXRpdmVodW1pZGl0eV8ybSxhcHBhcmVudF90ZW1wZXJhdHVyZSxwcmVjaXBpdGF0aW9uLHdlYXRoZXJjb2RlLGNsb3VkY292ZXIsdmlzaWJpbGl0eSx3aW5kc3BlZWRfMTBtLHdpbmRkaXJlY3Rpb25fMTBtJmRhaWx5PXdlYXRoZXJjb2RlLHRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sc3VucmlzZSxzdW5zZXQsdXZfaW5kZXhfbWF4LHByZWNpcGl0YXRpb25fc3VtLHByZWNpcGl0YXRpb25faG91cnMsd2luZHNwZWVkXzEwbV9tYXgsd2luZGRpcmVjdGlvbl8xMG1fZG9taW5hbnQmdGltZXpvbmU9JHt0aW1lem9uZX0mY3VycmVudF93ZWF0aGVyPXRydWVgLCB7XHJcbiAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIH0pO1xyXG4gICAgcmVzcG9uc2VKc29uID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzcG9uc2VKc29uID0gYFNvbWV0aGluZyB3ZW50IHdyb25nOiBcXG4ke2Vycn1gO1xyXG4gIH1cclxuICByZXR1cm4gcmVzcG9uc2VKc29uO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hHZW9jb2RpbmcobG9jYXRpb24pIHtcclxuICBpZiAoIWxvY2F0aW9uLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gIGxldCByZXNwb25zZUpzb247XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbnNMaW1pdCA9IDEwMDtcclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZ2VvY29kaW5nLWFwaS5vcGVuLW1ldGVvLmNvbS92MS9zZWFyY2g/bmFtZT0ke2xvY2F0aW9ufSZjb3VudD0ke2xvY2F0aW9uc0xpbWl0fWApO1xyXG4gICAgcmVzcG9uc2VKc29uID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzcG9uc2VKc29uID0gYFNvbWV0aGluZyB3ZW50IHdyb25nOiBcXG4ke2Vycn1gO1xyXG4gIH1cclxuICByZXR1cm4gcmVzcG9uc2VKc29uO1xyXG59XHJcbiIsImltcG9ydCB7IGNvdW50cnlDb2RlRW1vamkgfSBmcm9tICdjb3VudHJ5LWNvZGUtZW1vamknO1xyXG5pbXBvcnQgeyBmZXRjaEdlb2NvZGluZyB9IGZyb20gJy4uL2ZldGNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRvbUNpdGllc0xpc3Qoc2VhcmNoKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hHZW9jb2Rpbmcoc2VhcmNoKTtcclxuICBjb25zdCBjaXRpZXMgPSByZXNwb25zZS5yZXN1bHRzO1xyXG5cclxuICBpZiAoIWNpdGllcykge1xyXG4gICAgY29uc3Qgbm9SZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBub0ZsYWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG5vUmVzdWx0cy5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0LWVtcHR5Jyk7XHJcbiAgICBub0ZsYWdJY29uLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktZmxhZy1ub25lJyk7XHJcbiAgICBub0ZsYWdJY29uLmlubmVyVGV4dCA9ICfimqDvuI8nO1xyXG4gICAgcGFyYS5pbm5lclRleHQgPSBgTm8gbG9jYXRpb25zIGZvdW5kIGZvciBcIiR7c2VhcmNofVwiLmA7XHJcblxyXG4gICAgbm9SZXN1bHRzLmFwcGVuZChub0ZsYWdJY29uLCBwYXJhKTtcclxuXHJcbiAgICByZXR1cm4gbm9SZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBgJHtjaXR5Lm5hbWV9LCAke2NpdHkuYWRtaW4zID8gYCR7Y2l0eS5hZG1pbjN9LCBgIDogJyd9JHtjaXR5LmFkbWluMiA/IGAke2NpdHkuYWRtaW4yfSwgYCA6ICcnfSR7Y2l0eS5hZG1pbjEgPyBgJHtjaXR5LmFkbWluMX0sIGAgOiAnJ30ke2NpdHkuY291bnRyeX1gO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0Jyk7XHJcbiAgICBzZWFyY2hSZXN1bHQuZGF0YXNldC5sYXRpdHVkZSA9IGNpdHkubGF0aXR1ZGU7XHJcbiAgICBzZWFyY2hSZXN1bHQuZGF0YXNldC5sb25naXR1ZGUgPSBjaXR5LmxvbmdpdHVkZTtcclxuICAgIHNlYXJjaFJlc3VsdC5kYXRhc2V0LmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICBmbGFnLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktZmxhZycpO1xyXG4gICAgZmxhZy5pbm5lclRleHQgPSBjb3VudHJ5Q29kZUVtb2ppKGNpdHkuY291bnRyeV9jb2RlKTtcclxuICAgIHBsYWNlLmlubmVyVGV4dCA9IGxvY2F0aW9uO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdC5hcHBlbmQoZmxhZywgcGxhY2UpO1xyXG4gICAgbGlzdC5hcHBlbmQoc2VhcmNoUmVzdWx0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaENpdHkgZnJvbSAnLi9zZWFyY2hDaXR5JztcclxuXHJcbmxldCBmb2N1c0luZGV4ID0gLTE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2goKSB7XHJcbiAgbGV0IGtleWRvd25UaW1lb3V0O1xyXG4gIGNvbnN0IHRpbWVvdXREZWxheSA9IDUwMDtcclxuXHJcbiAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBjaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvYWRpbmdBbmltRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHNlYXJjaFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY2l0eS1zZWFyY2gnKTtcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1mb3JtJyk7XHJcbiAgY2l0eUxpc3QuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdHMnKTtcclxuICBsb2FkaW5nQW5pbURpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtbG9hZGluZycsICdoaWRkZW4nKTtcclxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaW5wdXQnKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsIHRydWUpO1xyXG4gIGlucHV0LnR5cGUgPSAnc2VhcmNoJztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdXcml0ZSBhIGxvY2F0aW9uIG5hbWUnO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XHJcbiAgICBsb2FkaW5nQW5pbURpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNsZWFyVGltZW91dChrZXlkb3duVGltZW91dCk7XHJcbiAgICBrZXlkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZWFyY2hDaXR5KGlucHV0LnZhbHVlKTtcclxuICAgIH0sIHRpbWVvdXREZWxheSk7XHJcbiAgfSk7XHJcblxyXG4gIGxvYWRpbmdBbmltRGl2LmFwcGVuZChsb2FkaW5nQW5pbTEsIGxvYWRpbmdBbmltMiwgbG9hZGluZ0FuaW0zKTtcclxuICBmb3JtLmFwcGVuZChpbnB1dCwgbG9hZGluZ0FuaW1EaXYpO1xyXG4gIHNlYXJjaFNlY3Rpb24uYXBwZW5kKGZvcm0sIGNpdHlMaXN0KTtcclxuXHJcbiAgc2VhcmNoU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50S2V5cyA9IFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnUGFnZVVwJywgJ1BhZ2VEb3duJ107XHJcbiAgICBpZiAoZXZlbnRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIGZvY3VzSW5kZXggKz0gMTtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIGZvY3VzSW5kZXggLT0gMTtcclxuICAgICAgaWYgKGUua2V5ID09PSAnUGFnZVVwJykgZm9jdXNJbmRleCAtPSA4O1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdQYWdlRG93bicpIGZvY3VzSW5kZXggKz0gODtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLXJlc3VsdCcpO1xyXG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgbGltaXRSYW5nZShyZXN1bHRzLmxlbmd0aCk7XHJcbiAgICAgIHJlc3VsdHNbZm9jdXNJbmRleF0uZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gICAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9jdXNJbmRleCA9IC0xO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc2VhcmNoU2VjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gbGltaXRSYW5nZShsZW5ndGgpIHtcclxuICBpZiAoZm9jdXNJbmRleCA8IDApIGZvY3VzSW5kZXggPSAwO1xyXG4gIGlmIChmb2N1c0luZGV4ID4gbGVuZ3RoIC0gMSkgZm9jdXNJbmRleCA9IGxlbmd0aCAtIDE7XHJcbn1cclxuIiwiaW1wb3J0IGRvbUNpdGllc0xpc3QgZnJvbSAnLi9jaXRpZXNMaXN0JztcclxuaW1wb3J0IHVwZGF0ZUNvbXBsZXRlV2VhdGhlciBmcm9tICcuL3VwZGF0ZUNvbXBsZXRlV2VhdGhlcic7XHJcblxyXG5sZXQgcHJldmlvdXNTZWFyY2g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hDaXR5KHNlYXJjaCkge1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gIGNvbnN0IGNpdHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZXN1bHRzJyk7XHJcbiAgY29uc3QgbG9hZGluZ0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKTtcclxuXHJcbiAgaWYgKHNlYXJjaCA9PT0gcHJldmlvdXNTZWFyY2gpIHtcclxuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcclxuICAgIGxvYWRpbmdJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNTZWFyY2ggPSBzZWFyY2g7XHJcbiAgY29uc3QgbGlzdCA9IGF3YWl0IGRvbUNpdGllc0xpc3Qoc2VhcmNoKTtcclxuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XHJcbiAgbG9hZGluZ0ljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY2l0eUxpc3QucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY2l0eUxpc3QuYXBwZW5kKGxpc3QpO1xyXG5cclxuICBjb25zdCBkb21MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuICBkb21MaXN0LmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgIGNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNpdHlMaXN0LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgICAvLyBkaXNhYmxlIGFuZCBhdXRvY29tcGxldGUgaW5wdXQgd2hpbGUgZmV0Y2hpbmcgZGF0YVxyXG4gICAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gY2l0eS5kYXRhc2V0LmxvY2F0aW9uO1xyXG4gICAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XHJcbiAgICAgIGxvYWRpbmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgdXBkYXRlQ29tcGxldGVXZWF0aGVyKGNpdHkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHVwZGF0ZUN1cnJlbnRXZWF0aGVyIGZyb20gJy4uL3dlYXRoZXJDdXJyZW50L3VwZGF0ZUN1cnJlbnRXZWF0aGVyJztcclxuaW1wb3J0IHVwZGF0ZURhaWx5V2VhdGhlciBmcm9tICcuLi93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckRhaWx5L3VwZGF0ZURhaWx5V2VhdGhlcic7XHJcbmltcG9ydCB1cGRhdGVIb3VybHlXZWF0aGVyIGZyb20gJy4uL3dlYXRoZXJEYWlseUhvdXJseS93ZWF0aGVySG91cmx5L3VwZGF0ZUhvdXJseVdlYXRoZXInO1xyXG5pbXBvcnQgZG9tQ2l0aWVzTGlzdCBmcm9tICcuL2NpdGllc0xpc3QnO1xyXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tICcuLi9mZXRjaCc7XHJcbmltcG9ydCBnZXRXZWF0aGVyY29kZSBmcm9tICcuLi93ZWF0aGVyY29kZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZVdlYXRoZXIoY2hvc2VuQ2l0eSkge1xyXG4gIGNvbnN0IHsgbGF0aXR1ZGUgfSA9IGNob3NlbkNpdHkuZGF0YXNldDtcclxuICBjb25zdCB7IGxvbmdpdHVkZSB9ID0gY2hvc2VuQ2l0eS5kYXRhc2V0O1xyXG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBmZXRjaFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XHJcbiAgY29uc3QgY3VycmVudEhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0ge1xyXG4gICAgY2l0eTogY2hvc2VuQ2l0eS5kYXRhc2V0LmxvY2F0aW9uLFxyXG4gICAgd2VhdGhlcmNvZGU6IGdldFdlYXRoZXJjb2RlKHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndlYXRoZXJjb2RlKSxcclxuICAgIHRlbXA6IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLnRlbXBlcmF0dXJlLFxyXG4gICAgdGVtcEFwcGFyZW50OiB3ZWF0aGVyLmhvdXJseS5hcHBhcmVudF90ZW1wZXJhdHVyZVtjdXJyZW50SG91cl0sXHJcbiAgICBodW1pZGl0eTogd2VhdGhlci5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybVtjdXJyZW50SG91cl0sXHJcbiAgICB3aW5kU3BlZWQ6IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndpbmRzcGVlZCxcclxuICAgIHdpbmREaXJlY3Rpb246IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndpbmRkaXJlY3Rpb24sXHJcbiAgICBzdW5yaXNlOiB3ZWF0aGVyLmRhaWx5LnN1bnJpc2UsXHJcbiAgICBzdW5zZXQ6IHdlYXRoZXIuZGFpbHkuc3Vuc2V0LFxyXG4gICAgbG9jYWxIb3VyOiB3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci50aW1lLFxyXG4gIH07XHJcbiAgY29uc3QgZGFpbHlXZWF0aGVyRGF0YSA9IHtcclxuICAgIHdlYXRoZXJjb2Rlczogd2VhdGhlci5kYWlseS53ZWF0aGVyY29kZSxcclxuICAgIHRlbXBzTWF4OiB3ZWF0aGVyLmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heCxcclxuICAgIHRlbXBzTWluOiB3ZWF0aGVyLmRhaWx5LnRlbXBlcmF0dXJlXzJtX21pbixcclxuICAgIHByZWNpcGl0YXRpb25RdWFudGl0aWVzOiB3ZWF0aGVyLmRhaWx5LnByZWNpcGl0YXRpb25fc3VtLFxyXG4gICAgcHJlY2lwaXRhdGlvbkhvdXJzOiB3ZWF0aGVyLmRhaWx5LnByZWNpcGl0YXRpb25faG91cnMsXHJcbiAgICB3aW5kU3BlZWRzOiB3ZWF0aGVyLmRhaWx5LndpbmRzcGVlZF8xMG1fbWF4LFxyXG4gICAgc3VucmlzZXM6IHdlYXRoZXIuZGFpbHkuc3VucmlzZSxcclxuICAgIHN1bnNldHM6IHdlYXRoZXIuZGFpbHkuc3Vuc2V0LFxyXG4gICAgdXZJbmRleGVzOiB3ZWF0aGVyLmRhaWx5LnV2X2luZGV4X21heCxcclxuICB9O1xyXG4gIGNvbnN0IGhvdXJseVdlYXRoZXJEYXRhID0ge1xyXG4gICAgbG9jYWxIb3VyOiBuZXcgRGF0ZSh3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci50aW1lKS5nZXRIb3VycygpLFxyXG4gICAgaG91cnM6IHdlYXRoZXIuaG91cmx5LnRpbWUsXHJcbiAgICB0ZW1wczogd2VhdGhlci5ob3VybHkudGVtcGVyYXR1cmVfMm0sXHJcbiAgICBodW1pZGl0eTogd2VhdGhlci5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybSxcclxuICAgIGFwcGFyZW50OiB3ZWF0aGVyLmhvdXJseS5hcHBhcmVudF90ZW1wZXJhdHVyZSxcclxuICAgIHdlYXRoZXJjb2RlOiB3ZWF0aGVyLmhvdXJseS53ZWF0aGVyY29kZSxcclxuICAgIHdpbmRzcGVlZDogd2VhdGhlci5ob3VybHkud2luZHNwZWVkXzEwbSxcclxuICAgIHN1bnJpc2U6IHdlYXRoZXIuZGFpbHkuc3VucmlzZVswXSxcclxuICAgIHN1bnNldDogd2VhdGhlci5kYWlseS5zdW5zZXRbMF0sXHJcbiAgfTtcclxuICB1cGRhdGVDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlckRhdGEpO1xyXG4gIHVwZGF0ZURhaWx5V2VhdGhlcihkYWlseVdlYXRoZXJEYXRhKTtcclxuICB1cGRhdGVIb3VybHlXZWF0aGVyKGhvdXJseVdlYXRoZXJEYXRhLCBob3VybHlXZWF0aGVyRGF0YS5sb2NhbEhvdXIpO1xyXG4gIC8vIGhpZGUgc2VhcmNoXHJcbiAgY29uc3QgZG9tU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc2VhcmNoJyk7XHJcbiAgZG9tU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIC8vIGNsZWFyIHJlc3VsdHMgYWZ0ZXIgaGlkaW5nXHJcbiAgZG9tQ2l0aWVzTGlzdCgnJyk7XHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaC9zZWFyY2gnO1xyXG5pbXBvcnQgd2VhdGhlckN1cnJlbnQgZnJvbSAnLi93ZWF0aGVyQ3VycmVudC93ZWF0aGVyQ3VycmVudCc7XHJcbmltcG9ydCB3ZWF0aGVyRGFpbHlIb3VybHkgZnJvbSAnLi93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckRhaWx5SG91cmx5JztcclxuaW1wb3J0IHVwZGF0ZUhvdXJseVdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyRGFpbHlIb3VybHkvd2VhdGhlckhvdXJseS91cGRhdGVIb3VybHlXZWF0aGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRVaSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGJvZHkuYXBwZW5kKFxyXG4gICAgc2VhcmNoKCksXHJcbiAgICB3ZWF0aGVyQ3VycmVudCgpLFxyXG4gICAgd2VhdGhlckRhaWx5SG91cmx5KCksXHJcbiAgKTtcclxufVxyXG5cclxuLy8gYWRkIGxpc3RlbmVyIHRvIHdpbmRvdyByZXNpemUgdG8gYWRqdXN0IGdyYXBoXHJcbmxldCB3aW5kb3dSZXNpemVUaW1lb3V0O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICBjbGVhclRpbWVvdXQod2luZG93UmVzaXplVGltZW91dCk7XHJcbiAgd2luZG93UmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgdXBkYXRlSG91cmx5V2VhdGhlcigpO1xyXG4gIH0sIDEwMCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY2Vsc2l1c1RvRmFocmVuaGVpdChudW1iZXIpIHtcclxuICBjb25zdCBmYWhyZW5oZWl0ID0gKG51bWJlciAqIDEuOCkgKyAzMjtcclxuICBjb25zdCBmaXhlZERlY2ltYWxzID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGZhaHJlbmhlaXQpLnRvRml4ZWQoMSkpO1xyXG4gIHJldHVybiBmaXhlZERlY2ltYWxzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2lsb21ldGVyc1RvTWlsZXMobnVtYmVyKSB7XHJcbiAgY29uc3QgbWlsZXMgPSBudW1iZXIgLyAxLjYwOTM0NDtcclxuICBjb25zdCBmaXhlZERlY2ltYWxzID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KG1pbGVzKS50b0ZpeGVkKDEpKTtcclxuICByZXR1cm4gZml4ZWREZWNpbWFscztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWx1ZUFkanVzdChkb21FbGVtZW50LCBmcm9tVmFsdWUsIHRvVmFsdWUsIHN0ZXBzID0gNTApIHtcclxuICBjb25zdCBpc0Zsb2F0ID0gZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXBlcmF0dXJlLW51bWJlcicpID8gMSA6IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSArPSAxKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChmcm9tVmFsdWUpICsgKCgodG9WYWx1ZSAtIGZyb21WYWx1ZSkgLyBzdGVwcykgKiAoaSArIDEpKTtcclxuICAgICAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGkgPT09IHN0ZXBzIC0gMSA/IHRvVmFsdWUgOiBjdXJyZW50VmFsdWUudG9GaXhlZChpc0Zsb2F0KTtcclxuICAgIH0sIDI1ICogKGkgKyAxKSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhckFkanVzdChkb21FbGVtZW50LCBmcm9tVmFsdWUsIHRvVmFsdWUpIHtcclxuICBjb25zdCB7IHBlcmNlbnQgfSA9IGRvbUVsZW1lbnQuZGF0YXNldDtcclxuICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUludChkb21FbGVtZW50LmRhdGFzZXQucGVyY2VudCwgMTApO1xyXG4gIGNvbnN0IHRpbWVvdXQgPSAyMDtcclxuICBjb25zdCBzdGVwID0gZnJvbVZhbHVlIDwgdG9WYWx1ZSA/IDEgOiAtMTtcclxuICBjb25zdCBtYXNrID0gYGNvbmljLWdyYWRpZW50KHJlZCAke3BlcmNlbnR9JSwgdHJhbnNwYXJlbnQgJHtwZXJjZW50fSUpYDtcclxuICBkb21FbGVtZW50LnN0eWxlLm1hc2tJbWFnZSA9IG1hc2s7XHJcbiAgZG9tRWxlbWVudC5kYXRhc2V0LnBlcmNlbnQgPSBjdXJyZW50VmFsdWUgKyBzdGVwO1xyXG5cclxuICBpZiAoKHN0ZXAgPiAwICYmIHBlcmNlbnQgPCB0b1ZhbHVlKVxyXG4gICAgfHwgKHN0ZXAgPCAwICYmIHBlcmNlbnQgPiB0b1ZhbHVlKSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGJhckFkanVzdChkb21FbGVtZW50LCBmcm9tVmFsdWUsIHRvVmFsdWUpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB3ZWF0aGVySWNvbiBmcm9tICcuLi93ZWF0aGVySWNvbic7XHJcbmltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQsIGtpbG9tZXRlcnNUb01pbGVzIH0gZnJvbSAnLi4vdW5pdENvbnZlcnRlcic7XHJcbmltcG9ydCB2YWx1ZUFkanVzdCBmcm9tICcuLi92YWx1ZUFkanVzdCc7XHJcbmltcG9ydCBiYXJBZGp1c3QgZnJvbSAnLi9iYXJBZGp1c3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ3VycmVudFdlYXRoZXIoZGF0YSkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jdXJyZW50ICcpO1xyXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1wYXJhJyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWN1cnJlbnQtaWNvbicpO1xyXG4gIGNvbnN0IHdlYXRoZXJjb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJjb2RlLXBhcmEnKTtcclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtY3VycmVudCcpO1xyXG4gIGNvbnN0IHRlbXBBcHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWFwcGFyZW50Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcclxuICBjb25zdCBodW1pZGl0eUdhdWdlUGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS1nYXVnZS1wZXJjZW50Jyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWQnKTtcclxuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtZGlyZWN0aW9uJyk7XHJcblxyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgY2l0eS5pbm5lclRleHQgPSBkYXRhLmNpdHk7XHJcbiAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB3ZWF0aGVySWNvbihcclxuICAgIGRhdGEud2VhdGhlcmNvZGUuaWNvbixcclxuICAgIGRhdGEubG9jYWxIb3VyLFxyXG4gICAgZGF0YS5zdW5yaXNlWzBdLFxyXG4gICAgZGF0YS5zdW5zZXRbMF0sXHJcbiAgKTtcclxuICB3ZWF0aGVyY29kZS5pbm5lclRleHQgPSBgJHtkYXRhLndlYXRoZXJjb2RlLndlYXRoZXJ9JHtkYXRhLndlYXRoZXJjb2RlLmludGVuc2l0eSA/IGAsICR7ZGF0YS53ZWF0aGVyY29kZS5pbnRlbnNpdHl9YCA6ICcnfWA7XHJcbiAgdGVtcC5kYXRhc2V0LmNlbHNpdXMgPSBkYXRhLnRlbXA7XHJcbiAgdGVtcC5kYXRhc2V0LmZhaHJlbmhlaXQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KGRhdGEudGVtcCk7XHJcbiAgdmFsdWVBZGp1c3QodGVtcCwgdGVtcC5pbm5lclRleHQsIGRhdGEudGVtcCk7XHJcbiAgdGVtcEFwcGFyZW50LmRhdGFzZXQuY2Vsc2l1cyA9IGRhdGEudGVtcEFwcGFyZW50O1xyXG4gIHRlbXBBcHBhcmVudC5kYXRhc2V0LmZhaHJlbmhlaXQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KGRhdGEudGVtcEFwcGFyZW50KTtcclxuICB2YWx1ZUFkanVzdCh0ZW1wQXBwYXJlbnQsIHRlbXBBcHBhcmVudC5pbm5lclRleHQsIGRhdGEudGVtcEFwcGFyZW50KTtcclxuICB2YWx1ZUFkanVzdChodW1pZGl0eSwgaHVtaWRpdHkuaW5uZXJUZXh0LCBkYXRhLmh1bWlkaXR5KTtcclxuICBiYXJBZGp1c3QoaHVtaWRpdHlHYXVnZVBlcmNlbnQsIGh1bWlkaXR5R2F1Z2VQZXJjZW50LmRhdGFzZXQucGVyY2VudCwgZGF0YS5odW1pZGl0eSk7XHJcbiAgd2luZFNwZWVkLmRhdGFzZXQua2lsb21ldGVycyA9IHBhcnNlSW50KGRhdGEud2luZFNwZWVkLCAxMCk7XHJcbiAgd2luZFNwZWVkLmRhdGFzZXQubWlsZXMgPSBwYXJzZUludChraWxvbWV0ZXJzVG9NaWxlcyhkYXRhLndpbmRTcGVlZCksIDEwKTtcclxuICB2YWx1ZUFkanVzdCh3aW5kU3BlZWQsIHdpbmRTcGVlZC5pbm5lclRleHQsIHBhcnNlSW50KGRhdGEud2luZFNwZWVkLCAxMCkpO1xyXG4gIHdpbmREaXJlY3Rpb24uc3R5bGUucm90YXRlID0gYCR7ZGF0YS53aW5kRGlyZWN0aW9ufWRlZ2A7XHJcbn1cclxuIiwiaW1wb3J0IGNoYW5nZVVuaXRzIGZyb20gJy4uL2NoYW5nZVVuaXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJDdXJyZW50KCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG4gIC8vIGNpdHlcclxuICBjb25zdCBjaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY2l0eVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGNpdHlEaXYuY2xhc3NMaXN0LmFkZCgnY2l0eS1kaXYnKTtcclxuICBjaXR5UGFyYS5jbGFzc0xpc3QuYWRkKCdjaXR5LXBhcmEnKTtcclxuXHJcbiAgY2l0eVBhcmEuaW5uZXJUZXh0ID0gJ0NpdHkgTmFtZSwgQ291bnRyeSBOYW1lJztcclxuXHJcbiAgY2l0eURpdi5hcHBlbmQoY2l0eVBhcmEpO1xyXG5cclxuICAvLyBpY29uXHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jdXJyZW50JywgJ2ludmlzaWJsZScpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jdXJyZW50LWljb24nKTtcclxuXHJcbiAgLy8gd2VhdGhlcmNvZGUgZGl2XHJcbiAgY29uc3Qgd2VhdGhlcmNvZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3ZWF0aGVyY29kZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIHdlYXRoZXJjb2RlRGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJjb2RlLWRpdicpO1xyXG4gIHdlYXRoZXJjb2RlUGFyYS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyY29kZS1wYXJhJyk7XHJcbiAgd2VhdGhlcmNvZGVQYXJhLmlubmVyVGV4dCA9ICdNYWlubHkgY2xlYXInO1xyXG5cclxuICB3ZWF0aGVyY29kZURpdi5hcHBlbmQod2VhdGhlcmNvZGVQYXJhKTtcclxuXHJcbiAgLy8gdGVtcGVyYXR1cmVzIGRpdlxyXG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0ZW1wQ3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB0ZW1wVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgYXBwYXJlbnRQYXJhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgYXBwYXJlbnRUZW1wUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBhcHBhcmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgYXBwYXJlbnRVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgdGVtcERpdi5jbGFzc0xpc3QuYWRkKCd0ZW1wLWRpdicpO1xyXG4gIHRlbXBDdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3RlbXAtY3VycmVudCcsICd0ZW1wZXJhdHVyZS1udW1iZXInKTtcclxuICB0ZW1wVW5pdC5jbGFzc0xpc3QuYWRkKCdnYXVnZS11bml0JywgJ3RlbXBlcmF0dXJlLXVuaXQnKTtcclxuICB0ZW1wVW5pdC50eXBlID0gJ2NoZWNrYm94JztcclxuICBhcHBhcmVudFVuaXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgYXBwYXJlbnRQYXJhRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXAtYXBwYXJlbnQtZGl2Jyk7XHJcbiAgYXBwYXJlbnRUZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAtYXBwYXJlbnQnLCAndGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgYXBwYXJlbnRVbml0LmNsYXNzTGlzdC5hZGQoJ2dhdWdlLXVuaXQnLCAndGVtcGVyYXR1cmUtdW5pdCcsICdnYXVnZS11bml0LWFwcGFyZW50Jyk7XHJcblxyXG4gIGNvbnN0IHVuaXRzRWxlbWVudHMgPSBbdGVtcFVuaXQsIGFwcGFyZW50VW5pdF07XHJcbiAgdW5pdHNFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVVuaXRzKSk7XHJcbiAgLy8gdGVtcFVuaXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlVW5pdHMpO1xyXG5cclxuICB0ZW1wQ3VycmVudC5pbm5lclRleHQgPSAnMDAwJztcclxuICBhcHBhcmVudFRlbXBQYXJhLmlubmVyVGV4dCA9ICdGZWVscyBsaWtlOiAnO1xyXG4gIGFwcGFyZW50VGVtcC5pbm5lclRleHQgPSAnMDAwJztcclxuXHJcbiAgYXBwYXJlbnRQYXJhRGl2LmFwcGVuZChhcHBhcmVudFRlbXBQYXJhLCBhcHBhcmVudFRlbXAsIGFwcGFyZW50VW5pdCk7XHJcbiAgdGVtcERpdi5hcHBlbmQodGVtcEN1cnJlbnQsIHRlbXBVbml0LCBhcHBhcmVudFBhcmFEaXYpO1xyXG5cclxuICAvLyBodW1pZGl0eSBkaXZcclxuICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgaHVtaWRpdHlHYXVnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5R2F1Z2VQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LWRpdicpO1xyXG4gIGh1bWlkaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHktdGl0bGUnKTtcclxuICBodW1pZGl0eUdhdWdlLmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LWdhdWdlJyk7XHJcbiAgaHVtaWRpdHlHYXVnZVBlcmNlbnQuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHktZ2F1Z2UtcGVyY2VudCcpO1xyXG4gIGh1bWlkaXR5R2F1Z2VQZXJjZW50LmRhdGFzZXQucGVyY2VudCA9IDA7XHJcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcclxuXHJcbiAgaHVtaWRpdHlUaXRsZS5pbm5lclRleHQgPSAnSHVtaWRpdHkgJSc7XHJcbiAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gJzAwMCc7XHJcblxyXG4gIGh1bWlkaXR5R2F1Z2UuYXBwZW5kKGh1bWlkaXR5LCBodW1pZGl0eUdhdWdlUGVyY2VudCk7XHJcbiAgaHVtaWRpdHlEaXYuYXBwZW5kKGh1bWlkaXR5R2F1Z2UsIGh1bWlkaXR5VGl0bGUpO1xyXG5cclxuICAvLyB3aW5kIGRpdlxyXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3Qgd2luZEdhdWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZENvbXBhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZCgnd2luZC1kaXYnKTtcclxuICB3aW5kVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnd2luZC10aXRsZS1kaXYnKTtcclxuICB3aW5kVGl0bGUuY2xhc3NMaXN0LmFkZCgnd2luZC10aXRsZScpO1xyXG4gIHdpbmRHYXVnZS5jbGFzc0xpc3QuYWRkKCd3aW5kLWdhdWdlJyk7XHJcbiAgd2luZENvbXBhc3MuY2xhc3NMaXN0LmFkZCgnd2luZC1jb21wYXNzJyk7XHJcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmQtc3BlZWQnLCAnc3BlZWQtbnVtYmVyJyk7XHJcbiAgd2luZFNwZWVkVW5pdC5jbGFzc0xpc3QuYWRkKCdnYXVnZS11bml0JywgJ3dpbmQtc3BlZWQtdW5pdCcpO1xyXG4gIHdpbmRTcGVlZFVuaXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgd2luZFNwZWVkRGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dpbmQtZGlyZWN0aW9uJyk7XHJcblxyXG4gIHdpbmRUaXRsZS5pbm5lclRleHQgPSAnTWF4IHdpbmQnO1xyXG4gIHdpbmRTcGVlZC5pbm5lclRleHQgPSAnMDAnO1xyXG5cclxuICB3aW5kU3BlZWRVbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVVuaXRzKTtcclxuXHJcbiAgd2luZFRpdGxlRGl2LmFwcGVuZCh3aW5kVGl0bGUsIHdpbmRTcGVlZFVuaXQpO1xyXG4gIHdpbmRHYXVnZS5hcHBlbmQod2luZFNwZWVkLCB3aW5kQ29tcGFzcywgd2luZFNwZWVkRGlyZWN0aW9uKTtcclxuICB3aW5kRGl2LmFwcGVuZCh3aW5kR2F1Z2UsIHdpbmRUaXRsZURpdik7XHJcblxyXG4gIC8vIGFwcGVuZCBldmVyeXRoaW5nXHJcbiAgc2VjdGlvbi5hcHBlbmQoY2l0eURpdiwgaWNvbiwgd2VhdGhlcmNvZGVEaXYsIHRlbXBEaXYsIGh1bWlkaXR5RGl2LCB3aW5kRGl2KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IGRhaWx5Q2FyZCBmcm9tICcuL3dlYXRoZXJEYWlseS9kYWlseUNhcmQnO1xyXG5pbXBvcnQgd2VhdGhlckhvdXJseSBmcm9tICcuL3dlYXRoZXJIb3VybHkvd2VhdGhlckhvdXJseSc7XHJcbmltcG9ydCB1cGRhdGVIb3VybHlXZWF0aGVyIGZyb20gJy4vd2VhdGhlckhvdXJseS91cGRhdGVIb3VybHlXZWF0aGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJEYWlseUhvdXJseSgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIGNvbnN0IGRhaWx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kYWlseS1ob3VybHknKTtcclxuICBkYWlseURpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRhaWx5JywgJ2ludmlzaWJsZScpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xyXG4gICAgZGFpbHlEaXYuYXBwZW5kKGRhaWx5Q2FyZCgpKTtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKFxyXG4gICAgd2VhdGhlckhvdXJseSgpLFxyXG4gICAgZGFpbHlEaXYsXHJcbiAgKTtcclxuXHJcbiAgLy8gYWRkaW5nIGxpc3RlbmVycyB0byBob3VybHkgY2FyZHNcclxuICBjb25zdCBob3VybHlDYXJkcyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWNhcmQnKTtcclxuICBob3VybHlDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgYWxsQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktY2FyZCcpO1xyXG4gICAgICBhbGxDYXJkcy5mb3JFYWNoKCh0aGlzQ2FyZCkgPT4gdGhpc0NhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgdGhpc0NhcmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGNvbnN0IHN0YXJ0RnJvbUluZGV4ID0gaSAqIDI0O1xyXG4gICAgICB1cGRhdGVIb3VybHlXZWF0aGVyKG51bGwsIHN0YXJ0RnJvbUluZGV4KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCBjaGFuZ2VVbml0cyBmcm9tICcuLi8uLi9jaGFuZ2VVbml0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYWlseUNhcmQoKSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnZGFpbHktY2FyZCcpO1xyXG5cclxuICBjYXJkLmFwcGVuZChcclxuICAgIHdlYXRoZXJEaXYoKSxcclxuICAgIHByZWNpcGl0YXRpb25zKCksXHJcbiAgICB3aW5kKCksXHJcbiAgICBzdW5yaXNlU3Vuc2V0KCksXHJcbiAgICB1dkluZGV4KCksXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlYXRoZXJEaXYoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGVtcE1heERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGVtcE1heFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHRlbXBNaW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0ZW1wTWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHRlbXBNaW5Vbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS13ZWF0aGVyJyk7XHJcbiAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWRheScpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudC1pY29uJywgJ2RhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gIHRlbXBNYXhEaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1tYXgtZGl2Jyk7XHJcbiAgdGVtcE1heC5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1heCcsICd0ZW1wZXJhdHVyZS1udW1iZXInKTtcclxuICB0ZW1wTWF4VW5pdC5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1heC11bml0JywgJ2dhdWdlLXVuaXQnLCAndGVtcGVyYXR1cmUtdW5pdCcpO1xyXG4gIHRlbXBNYXhVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHRlbXBNaW5EaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1taW4tZGl2Jyk7XHJcbiAgdGVtcE1pbi5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1pbicsICd0ZW1wZXJhdHVyZS1udW1iZXInKTtcclxuICB0ZW1wTWluVW5pdC5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1pbi11bml0JywgJ2dhdWdlLXVuaXQnLCAndGVtcGVyYXR1cmUtdW5pdCcpO1xyXG4gIHRlbXBNaW5Vbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHdlYXRoZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkYWlseS13ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XHJcblxyXG4gIGRheS5pbm5lclRleHQgPSAnZGF5IHBsYWNlaG9sZGVyJztcclxuICB0ZW1wTWF4LmlubmVyVGV4dCA9ICcwMDAuMCc7XHJcbiAgdGVtcE1pbi5pbm5lclRleHQgPSAnMDAwLjAnO1xyXG4gIHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnd2VhdGhlciBkZXNjcmlwdGlvbic7XHJcblxyXG4gIFt0ZW1wTWF4VW5pdCwgdGVtcE1pblVuaXRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VVbml0cyk7XHJcbiAgfSk7XHJcblxyXG4gIHRlbXBNYXhEaXYuYXBwZW5kKHRlbXBNYXgsIHRlbXBNYXhVbml0KTtcclxuICB0ZW1wTWluRGl2LmFwcGVuZCh0ZW1wTWluLCB0ZW1wTWluVW5pdCk7XHJcbiAgZGl2LmFwcGVuZChcclxuICAgIGRheSxcclxuICAgIHdlYXRoZXJJY29uLFxyXG4gICAgdGVtcE1heERpdixcclxuICAgIHRlbXBNaW5EaXYsXHJcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlY2lwaXRhdGlvbnMoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktcHJlY2lwaXRhdGlvbnMnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXByZWNpcGl0YXRpb25zLWljb24nKTtcclxuICBxdWFudGl0eS5jbGFzc0xpc3QuYWRkKCdkYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5Jyk7XHJcbiAgaG91cnMuY2xhc3NMaXN0LmFkZCgnZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMnKTtcclxuXHJcbiAgZGl2LnRpdGxlID0gJ1F1YW50aXR5IGFuZCB0b3RhbCBob3VycyBvZiBwcmVjaXBpdGF0aW9ucyc7XHJcbiAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gJzAwMG1tJztcclxuICBob3Vycy5pbm5lclRleHQgPSAnMDowMGhzJztcclxuXHJcbiAgZGl2LmFwcGVuZChpY29uLCBxdWFudGl0eSwgaG91cnMpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kKCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBzcGVlZFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZCcpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1pY29uJyk7XHJcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1zcGVlZCcsICdzcGVlZC1udW1iZXInKTtcclxuICBzcGVlZFVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1zcGVlZC11bml0JywgJ2dhdWdlLXVuaXQnLCAnd2luZC1zcGVlZC11bml0Jyk7XHJcbiAgc3BlZWRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICBkaXYudGl0bGUgPSAnTWF4IHdpbmQgc3BlZWQnO1xyXG4gIHNwZWVkLmlubmVyVGV4dCA9ICcwMCc7XHJcblxyXG4gIHNwZWVkVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cyk7XHJcblxyXG4gIGRpdi5hcHBlbmQoaWNvbiwgc3BlZWQsIHNwZWVkVW5pdCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bnJpc2VTdW5zZXQoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHN1bnJpc2VIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHN1bnNldEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS1zdW5yaXNlLXN1bnNldCcpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktc3VucmlzZS1zdW5zZXQtaWNvbicpO1xyXG4gIHN1bnJpc2VIb3VyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXN1bnJpc2UnKTtcclxuICBzdW5zZXRIb3VyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXN1bnNldCcpO1xyXG5cclxuICBkaXYudGl0bGUgPSAnU3VucmlzZSBhbmQgc3Vuc2V0JztcclxuICBzdW5yaXNlSG91ci5pbm5lclRleHQgPSAnMDA6MDBocyc7XHJcbiAgc3Vuc2V0SG91ci5pbm5lclRleHQgPSAnMDA6MDBocyc7XHJcblxyXG4gIGRpdi5hcHBlbmQoaWNvbiwgc3VucmlzZUhvdXIsIHN1bnNldEhvdXIpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1dkluZGV4KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB1dlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS11dicpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktdXYtaWNvbicpO1xyXG4gIGluZGV4LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXV2LWluZGV4Jyk7XHJcbiAgdXZQYXJhLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXV2LXRleHQnKTtcclxuXHJcbiAgZGl2LnRpdGxlID0gJ1VWIGluZGV4JztcclxuICBpbmRleC5pbm5lclRleHQgPSAnMDAnO1xyXG4gIHV2UGFyYS5pbm5lclRleHQgPSAnVVYnO1xyXG5cclxuICBkaXYuYXBwZW5kKGljb24sIGluZGV4LCB1dlBhcmEpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgZ2V0SG91cnMsXHJcbiAgZ2V0TWludXRlcyxcclxuICBhZGREYXlzLFxyXG4gIGdldERheSxcclxuICBnZXREYXRlLFxyXG59IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IGdldFdlYXRoZXJjb2RlIGZyb20gJy4uLy4uL3dlYXRoZXJjb2RlJztcclxuaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4uLy4uL3dlYXRoZXJJY29uJztcclxuaW1wb3J0IHsgY2Vsc2l1c1RvRmFocmVuaGVpdCwga2lsb21ldGVyc1RvTWlsZXMgfSBmcm9tICcuLi8uLi91bml0Q29udmVydGVyJztcclxuXHJcbmNvbnN0IGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGFpbHlXZWF0aGVyKGRhdGEpIHtcclxuICAvLyBpY29uIGFuZCB0ZW1wc1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kYWlseScpO1xyXG4gIGNvbnN0IGRheXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1kYXknKTtcclxuICBjb25zdCBpY29ucyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gIGNvbnN0IHRlbXBzTWF4ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktdGVtcC1tYXgnKTtcclxuICBjb25zdCB0ZW1wc01pbiA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXRlbXAtbWluJyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25zID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktd2VhdGhlci1kZXNjcmlwdGlvbicpO1xyXG4gIC8vIGV4dHJhIGluZm9cclxuICBjb25zdCBwcmVjaXBpdGF0aW9uUXVhbnRpdGllcyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXByZWNpcGl0YXRpb24tcXVhbnRpdHknKTtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uSG91cnMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1wcmVjaXBpdGF0aW9ucy1ob3VycycpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZHMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS13aW5kLXNwZWVkJyk7XHJcbiAgY29uc3Qgc3VucmlzZXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1zdW5yaXNlJyk7XHJcbiAgY29uc3Qgc3Vuc2V0cyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXN1bnNldCcpO1xyXG4gIGNvbnN0IHV2SW5kZXhlcyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXV2LWluZGV4Jyk7XHJcblxyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcblxyXG4gIGRheXMuZm9yRWFjaCgoZGF5LCBpKSA9PiB7XHJcbiAgICBkYXkuaW5uZXJUZXh0ID0gaSA9PT0gMCA/ICdUb2RheScgOiBgJHtkYXlOYW1lc1tnZXREYXkoYWRkRGF5cyhuZXcgRGF0ZSgpLCBpKSldfSAke2dldERhdGUoYWRkRGF5cyhuZXcgRGF0ZSgpLCBpKSl9YDtcclxuICB9KTtcclxuICBpY29ucy5mb3JFYWNoKChpY29uLCBpKSA9PiB7XHJcbiAgICBjb25zdCBpY29uUGFydHMgPSBnZXRXZWF0aGVyY29kZShkYXRhLndlYXRoZXJjb2Rlc1tpXSkuaWNvbjtcclxuICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gd2VhdGhlckljb24oaWNvblBhcnRzKTtcclxuICB9KTtcclxuICB0ZW1wc01heC5mb3JFYWNoKCh0ZW1wLCBpKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRhdGEudGVtcHNNYXhbaV07XHJcbiAgICB0ZW1wLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlO1xyXG4gICAgdGVtcC5kYXRhc2V0LmNlbHNpdXMgPSB0ZW1wZXJhdHVyZTtcclxuICAgIHRlbXAuZGF0YXNldC5mYWhyZW5oZWl0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh0ZW1wZXJhdHVyZSk7XHJcbiAgfSk7XHJcbiAgdGVtcHNNaW4uZm9yRWFjaCgoYXBwYXJlbnQsIGkpID0+IHtcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZGF0YS50ZW1wc01pbltpXTtcclxuICAgIGFwcGFyZW50LmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlO1xyXG4gICAgYXBwYXJlbnQuZGF0YXNldC5jZWxzaXVzID0gdGVtcGVyYXR1cmU7XHJcbiAgICBhcHBhcmVudC5kYXRhc2V0LmZhaHJlbmhlaXQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KHRlbXBlcmF0dXJlKTtcclxuICB9KTtcclxuICBkZXNjcmlwdGlvbnMuZm9yRWFjaCgoZGVzY3JpcHRpb24sIGkpID0+IHtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBnZXRXZWF0aGVyY29kZShkYXRhLndlYXRoZXJjb2Rlc1tpXSk7XHJcbiAgICBjb25zdCB0eXBlID0gd2VhdGhlci53ZWF0aGVyO1xyXG4gICAgY29uc3QgaGFzSW50ZW5zaXR5ID0gd2VhdGhlci5pbnRlbnNpdHkgIT09IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGludGVuc2l0eSA9IGAsICR7d2VhdGhlci5pbnRlbnNpdHl9YDtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGAke3R5cGV9JHtoYXNJbnRlbnNpdHkgPyBpbnRlbnNpdHkgOiAnJ31gO1xyXG4gIH0pO1xyXG4gIHByZWNpcGl0YXRpb25RdWFudGl0aWVzLmZvckVhY2goKHF1YW50aXR5LCBpKSA9PiB7XHJcbiAgICBxdWFudGl0eS5pbm5lclRleHQgPSBgJHtkYXRhLnByZWNpcGl0YXRpb25RdWFudGl0aWVzW2ldfW1tYDtcclxuICB9KTtcclxuICBwcmVjaXBpdGF0aW9uSG91cnMuZm9yRWFjaCgoaG91cnMsIGkpID0+IHtcclxuICAgIGhvdXJzLmlubmVyVGV4dCA9IGAke2RhdGEucHJlY2lwaXRhdGlvbkhvdXJzW2ldfWhzYDtcclxuICB9KTtcclxuICB3aW5kU3BlZWRzLmZvckVhY2goKHNwZWVkLCBpKSA9PiB7XHJcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBwYXJzZUludChkYXRhLndpbmRTcGVlZHNbaV0sIDEwKTtcclxuICAgIHNwZWVkLmlubmVyVGV4dCA9IHdpbmRTcGVlZDtcclxuICAgIHNwZWVkLmRhdGFzZXQua2lsb21ldGVycyA9IHdpbmRTcGVlZDtcclxuICAgIHNwZWVkLmRhdGFzZXQubWlsZXMgPSBwYXJzZUludChraWxvbWV0ZXJzVG9NaWxlcyh3aW5kU3BlZWQpLCAxMCk7XHJcbiAgfSk7XHJcbiAgc3VucmlzZXMuZm9yRWFjaCgoc3VucmlzZSwgaSkgPT4ge1xyXG4gICAgc3VucmlzZS5pbm5lclRleHQgPSBgJHtnZXRIb3VycyhuZXcgRGF0ZShkYXRhLnN1bnJpc2VzW2ldKSl9OiR7Z2V0TWludXRlcyhuZXcgRGF0ZShkYXRhLnN1bnJpc2VzW2ldKSl9aHNgO1xyXG4gIH0pO1xyXG4gIHN1bnNldHMuZm9yRWFjaCgoc3Vuc2V0LCBpKSA9PiB7XHJcbiAgICBzdW5zZXQuaW5uZXJUZXh0ID0gYCR7Z2V0SG91cnMobmV3IERhdGUoZGF0YS5zdW5zZXRzW2ldKSl9OiR7Z2V0TWludXRlcyhuZXcgRGF0ZShkYXRhLnN1bnNldHNbaV0pKX1oc2A7XHJcbiAgfSk7XHJcbiAgdXZJbmRleGVzLmZvckVhY2goKHV2LCBpKSA9PiB7XHJcbiAgICB1di5pbm5lclRleHQgPSBkYXRhLnV2SW5kZXhlc1tpXSA9PT0gbnVsbCA/ICctJyA6IGRhdGEudXZJbmRleGVzW2ldO1xyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0RGV0YWlscygpIHtcclxuICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdjaGFydC1kZXRhaWxzLWRpdicsICdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3QgZWxlbWVudHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzOiAndGVtcCcsXHJcbiAgICAgIGhhc1N5bWJvbDogdHJ1ZSxcclxuICAgICAgdGV4dDogJ1RlbXBlcmF0dXJlOiAnLFxyXG4gICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICB1bml0OiAnwrBDJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzOiAnYXBwYXJlbnQnLFxyXG4gICAgICBoYXNTeW1ib2w6IHRydWUsXHJcbiAgICAgIHRleHQ6ICdGZWVscyBsaWtlOiAnLFxyXG4gICAgICB2YWx1ZTogJzAnLFxyXG4gICAgICB1bml0OiAnwrBDJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzOiAnd2luZCcsXHJcbiAgICAgIGhhc1N5bWJvbDogdHJ1ZSxcclxuICAgICAgdGV4dDogJ1dpbmQgc3BlZWQ6ICcsXHJcbiAgICAgIHZhbHVlOiAnMCcsXHJcbiAgICAgIHVuaXQ6ICdrbS9oJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzOiAnaHVtaWRpdHknLFxyXG4gICAgICBoYXNTeW1ib2w6IHRydWUsXHJcbiAgICAgIHRleHQ6ICdIdW1pZGl0eTogJyxcclxuICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgdW5pdDogJyUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY2xhc3M6ICd3ZWF0aGVyY29kZScsXHJcbiAgICAgIHRleHQ6ICdXZWF0aGVyOiAnLFxyXG4gICAgICB2YWx1ZTogJ2NsZWFyJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChgY2hhcnQtZGV0YWlscy0ke2VsZW1lbnRzW2ldLmNsYXNzfWApO1xyXG5cclxuICAgIGlmIChlbGVtZW50c1tpXT8uaGFzU3ltYm9sKSB7XHJcbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZCgnY2hhcnQtZGV0YWlscy1zeW1ib2wnLCBgY2hhcnQtZGV0YWlscy1zeW1ib2wtJHtlbGVtZW50c1tpXS5jbGFzc31gKTtcclxuICAgICAgZGl2LmFwcGVuZChzeW1ib2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW1QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVBhcmEuY2xhc3NMaXN0LmFkZChgY2hhcnQtZGV0YWlscy1wYXJhLSR7ZWxlbWVudHNbaV0uY2xhc3N9YCk7XHJcblxyXG4gICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBpdGVtVGV4dC5jbGFzc0xpc3QuYWRkKGBjaGFydC1kZXRhaWxzLXRleHQtJHtlbGVtZW50c1tpXS5jbGFzc31gKTtcclxuICAgIGl0ZW1UZXh0LmlubmVyVGV4dCA9IGVsZW1lbnRzW2ldLnRleHQ7XHJcbiAgICBpdGVtUGFyYS5hcHBlbmQoaXRlbVRleHQpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdmFsdWUuY2xhc3NMaXN0LmFkZChgY2hhcnQtZGV0YWlscy12YWx1ZS0ke2VsZW1lbnRzW2ldLmNsYXNzfWApO1xyXG4gICAgdmFsdWUuaW5uZXJUZXh0ID0gZWxlbWVudHNbaV0udmFsdWU7XHJcbiAgICBpdGVtUGFyYS5hcHBlbmQodmFsdWUpO1xyXG5cclxuICAgIGlmIChlbGVtZW50c1tpXT8udW5pdCkge1xyXG4gICAgICBjb25zdCB1bml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB1bml0LmNsYXNzTGlzdC5hZGQoYGNoYXJ0LWRldGFpbHMtdW5pdC0ke2VsZW1lbnRzW2ldLmNsYXNzfWApO1xyXG4gICAgICB1bml0LmlubmVyVGV4dCA9IGVsZW1lbnRzW2ldLnVuaXQ7XHJcbiAgICAgIGl0ZW1QYXJhLmFwcGVuZCh1bml0KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuYXBwZW5kKGl0ZW1QYXJhKTtcclxuICAgIGRldGFpbHNEaXYuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGV0YWlsc0RpdjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDaGFydExpbmVHcm91cChjbGFzc05hbWUsIHVuaXRTeW1ib2wsIHVuaXRUeXBlKSB7XHJcbiAgY29uc3Qgc3ZnTnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG4gIGNvbnN0IGNoYXJ0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICdnJyk7XHJcbiAgY29uc3QgY2hhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICdwYXRoJyk7XHJcbiAgY29uc3QgY2hhcnROdW1iZXJzID0gW107XHJcbiAgY29uc3QgY2hhcnRWZXJ0aWNlcyA9IFtdO1xyXG5cclxuICBpZiAodW5pdFN5bWJvbCAhPT0gdW5kZWZpbmVkICYmIHVuaXRUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI0OyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAndGV4dCcpO1xyXG4gICAgICBjb25zdCB2YWx1ZXNOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICd0c3BhbicpO1xyXG4gICAgICBjb25zdCB2YWx1ZXNTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICd0c3BhbicpO1xyXG4gICAgICBjb25zdCBudW1iZXJzQ2xhc3NlcyA9IFtgJHtjbGFzc05hbWV9LWNoYXJ0YCwgdW5pdFR5cGVdO1xyXG4gICAgICB2YWx1ZXMuc2V0QXR0cmlidXRlKCd4JywgMCk7XHJcbiAgICAgIHZhbHVlcy5zZXRBdHRyaWJ1dGUoJ3knLCAwKTtcclxuICAgICAgdmFsdWVzLnNldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XHJcbiAgICAgIHZhbHVlcy5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX0tY2hhcnQtdGV4dGApO1xyXG4gICAgICB2YWx1ZXNOdW1iZXIuY2xhc3NMaXN0LmFkZCguLi5udW1iZXJzQ2xhc3Nlcyk7XHJcbiAgICAgIHZhbHVlc051bWJlci50ZXh0Q29udGVudCA9ICcwJztcclxuICAgICAgdmFsdWVzU3ltYm9sLnRleHRDb250ZW50ID0gYCR7dW5pdFN5bWJvbH1gO1xyXG4gICAgICB2YWx1ZXMuYXBwZW5kKHZhbHVlc051bWJlciwgdmFsdWVzU3ltYm9sKTtcclxuICAgICAgY2hhcnROdW1iZXJzLnB1c2godmFsdWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDI0OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHZlcnRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOcywgJ2NpcmNsZScpO1xyXG4gICAgdmVydGV4LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS1jaGFydC12ZXJ0ZXhgKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ3InLCA0KTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ2N4JywgNTAwKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ2N5JywgNTAwKTtcclxuICAgIHZlcnRleC5kYXRhc2V0LmhpZGRlbiA9IHRydWU7XHJcbiAgICBjaGFydFZlcnRpY2VzLnB1c2godmVydGV4KTtcclxuICB9XHJcblxyXG4gIGNoYXJ0R3JvdXAuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWNoYXJ0LWdyb3VwJywgYCR7Y2xhc3NOYW1lfS1jaGFydC1ncm91cGApO1xyXG4gIGNoYXJ0LmNsYXNzTGlzdC5hZGQoYGhvdXJseS1jaGFydC0ke2NsYXNzTmFtZX1gKTtcclxuXHJcbiAgY2hhcnRHcm91cC5hcHBlbmQoY2hhcnQsIC4uLmNoYXJ0TnVtYmVycywgLi4uY2hhcnRWZXJ0aWNlcyk7XHJcblxyXG4gIHJldHVybiBjaGFydEdyb3VwO1xyXG59XHJcbiIsImltcG9ydCB7IHNob3dIb3VybHlEZXRhaWwsIHBvc2l0aW9uSG91cmx5RGV0YWlsLCBoaWRlSG91cmx5RGV0YWlsIH0gZnJvbSAnLi9ob3VybHlEZXRhaWxIb3Zlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXZWF0aGVySWNvbnMoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaW1hZ2VzQW5kSG92ZXIgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LXdlYXRoZXItaWNvbicpO1xyXG4gICAgaW1hZ2VzQW5kSG92ZXIucHVzaChpbWcpO1xyXG4gICAgaW1nLmRhdGFzZXQucG9pbnRlZCA9IGkgKyAxO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBzaG93SG91cmx5RGV0YWlsKTtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwb3NpdGlvbkhvdXJseURldGFpbCk7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGVIb3VybHlEZXRhaWwpO1xyXG4gIH1cclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LXdlYXRoZXItaWNvbnMtZGl2Jyk7XHJcblxyXG4gIGRpdi5hcHBlbmQoLi4uaW1hZ2VzQW5kSG92ZXIpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBlbXB0eUNoYXJ0KGRvbUVsZW1lbnQsIHBvc2l0aW9uc1gsIGhlaWdodCkge1xyXG4gIGxldCBkcmF3VGVtcCA9ICcnO1xyXG4gIHBvc2l0aW9uc1guZm9yRWFjaCgocG9zLCBpKSA9PiB7XHJcbiAgICBjb25zdCBsaW5lQ29tbWFuZCA9IGkgPT09IDAgPyAnTScgOiAnTCc7XHJcbiAgICBjb25zdCBwb3NYID0gcG9zO1xyXG4gICAgZHJhd1RlbXAgKz0gYCAke2xpbmVDb21tYW5kfSAke3Bvc1h9ICR7aGVpZ2h0fWA7XHJcbiAgfSk7XHJcbiAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2QnLCBkcmF3VGVtcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eUNoYXJ0VmVydGljZXMoZG9tRWxlbWVudHMsIHBvc2l0aW9uc1gsIGhlaWdodCkge1xyXG4gIGRvbUVsZW1lbnRzLmZvckVhY2goKHZlcnRleCwgaSkgPT4ge1xyXG4gICAgdmVydGV4LnNldEF0dHJpYnV0ZSgnY3gnLCBgJHtwb3NpdGlvbnNYW2ldfWApO1xyXG4gICAgdmVydGV4LnNldEF0dHJpYnV0ZSgnY3knLCBgJHtoZWlnaHR9YCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmdlUGVyY2VudChtaW4sIG1heCwgdGFyZ2V0KSB7XHJcbiAgY29uc3QgcGVyY2VudFJhbmdlID0gKCh0YXJnZXQgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwO1xyXG4gIHJldHVybiBwYXJzZUZsb2F0KHBhcnNlRmxvYXQocGVyY2VudFJhbmdlKS50b0ZpeGVkKDEpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VQZXJjZW50VG9QaXhlbHMocGVyY2VudCwgaGVpZ2h0KSB7XHJcbiAgY29uc3QgdG9QaXhlbHMgPSAoKHBlcmNlbnQgKiBoZWlnaHQpIC8gMTAwKTtcclxuICAvLyBpbnZlcnQgZGVmYXVsdCBZIGF4aXMgYmVoYXZpb3IsIHVzZSBiYXNlIGFzIHplcm8sIGFzY2VuZCBnb2luZyB1cFxyXG4gIHJldHVybiAodG9QaXhlbHMgKiAtMSkgKyBoZWlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQmV0d2Vlbihkb21FbGVtZW50cywgcGFyZW50V2lkdGgpIHtcclxuICBsZXQgc3RhcnRGcm9tO1xyXG4gIGxldCBldmVyeTtcclxuICBpZiAocGFyZW50V2lkdGggPCAxOTApIHtcclxuICAgIHN0YXJ0RnJvbSA9IDA7XHJcbiAgICBldmVyeSA9IDA7XHJcbiAgfSBlbHNlIGlmIChwYXJlbnRXaWR0aCA8IDI5MCkge1xyXG4gICAgc3RhcnRGcm9tID0gMjtcclxuICAgIGV2ZXJ5ID0gNDtcclxuICB9IGVsc2UgaWYgKHBhcmVudFdpZHRoIDwgNDAwKSB7XHJcbiAgICBzdGFydEZyb20gPSAyO1xyXG4gICAgZXZlcnkgPSAzO1xyXG4gIH0gZWxzZSBpZiAocGFyZW50V2lkdGggPCA5NTApIHtcclxuICAgIHN0YXJ0RnJvbSA9IDE7XHJcbiAgICBldmVyeSA9IDI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXJ0RnJvbSA9IDE7XHJcbiAgICBldmVyeSA9IC0xO1xyXG4gIH1cclxuICBkb21FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICBpZiAoKGkgKyBzdGFydEZyb20pICUgZXZlcnkgIT09IDApIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgZWxlbWVudC5kYXRhc2V0LmhpZGRlbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICBlbGVtZW50LmRhdGFzZXQuaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0MjUoYXJyYXksIHN0YXJ0RnJvbUluZGV4ID0gMCkge1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSArPSAxKSB7XHJcbiAgICBuZXdBcnJheS5wdXNoKGFycmF5W2kgKyBzdGFydEZyb21JbmRleF0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld0FycmF5O1xyXG59XHJcbiIsImltcG9ydCBnZXRXZWF0aGVyY29kZSBmcm9tICcuLi8uLi93ZWF0aGVyY29kZSc7XHJcbmltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQsIGtpbG9tZXRlcnNUb01pbGVzIH0gZnJvbSAnLi4vLi4vdW5pdENvbnZlcnRlcic7XHJcblxyXG5sZXQgdGVtcFZlcnRpY2VzO1xyXG5sZXQgd2luZFZlcnRpY2VzO1xyXG5sZXQgaHVtaWRpdHlWZXJ0aWNlcztcclxubGV0IHRlbXBBcHBhcmVudFZlcnRpY2VzO1xyXG5sZXQgZGV0YWlsc0NhcmQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0hvdXJseURldGFpbCgpIHtcclxuICBjb25zdCBwb2ludGVkID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnBvaW50ZWQsIDEwKTtcclxuICBkZXRhaWxzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLWRpdicpO1xyXG4gIGRldGFpbHNDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIC8vIHVuaXQgY2hlY2tib3hlc1xyXG4gIGNvbnN0IHRlbXBVbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS11bml0Jyk7XHJcbiAgY29uc3Qgc3BlZWRVbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkLXVuaXQnKTtcclxuICAvLyBlYWNoIGVsZW1lbnQgb24gY2FyZFxyXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtZGV0YWlscy12YWx1ZS10ZW1wJyk7XHJcbiAgY29uc3QgdGVtcFVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtZGV0YWlscy11bml0LXRlbXAnKTtcclxuICBjb25zdCBhcHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLXZhbHVlLWFwcGFyZW50Jyk7XHJcbiAgY29uc3QgYXBwYXJlbnRVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXJ0LWRldGFpbHMtdW5pdC1hcHBhcmVudCcpO1xyXG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtZGV0YWlscy12YWx1ZS13aW5kJyk7XHJcbiAgY29uc3Qgd2luZFVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtZGV0YWlscy11bml0LXdpbmQnKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLXZhbHVlLWh1bWlkaXR5Jyk7XHJcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1kZXRhaWxzLXZhbHVlLXdlYXRoZXJjb2RlJyk7XHJcbiAgLy8gdmVydGljZXNcclxuICB0ZW1wVmVydGljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcC1jaGFydC12ZXJ0ZXgnKTtcclxuICB3aW5kVmVydGljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2luZC1jaGFydC12ZXJ0ZXgnKTtcclxuICBodW1pZGl0eVZlcnRpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmh1bWlkaXR5LWNoYXJ0LXZlcnRleCcpO1xyXG4gIHRlbXBBcHBhcmVudFZlcnRpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAtYXBwYXJlbnQtY2hhcnQtdmVydGV4Jyk7XHJcbiAgLy8gd2VhdGhlciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZ2V0V2VhdGhlcmNvZGUocGFyc2VJbnQodGhpcy5kYXRhc2V0LndlYXRoZXJjb2RlLCAxMCkpLndlYXRoZXI7XHJcbiAgY29uc3Qgd2VhdGhlckludGVuc2l0eSA9IGdldFdlYXRoZXJjb2RlKHBhcnNlSW50KHRoaXMuZGF0YXNldC53ZWF0aGVyY29kZSwgMTApKT8uaW50ZW5zaXR5O1xyXG5cclxuICB0ZW1wLmlubmVyVGV4dCA9IHRlbXBVbml0cy5jaGVja2VkXHJcbiAgICA/IGNlbHNpdXNUb0ZhaHJlbmhlaXQodGhpcy5kYXRhc2V0LnRlbXApIDogdGhpcy5kYXRhc2V0LnRlbXA7XHJcbiAgdGVtcFVuaXQuaW5uZXJUZXh0ID0gdGVtcFVuaXRzLmNoZWNrZWQgPyAnwrBGJyA6ICfCsEMnO1xyXG4gIGFwcGFyZW50LmlubmVyVGV4dCA9IHRlbXBVbml0cy5jaGVja2VkXHJcbiAgICA/IGNlbHNpdXNUb0ZhaHJlbmhlaXQodGhpcy5kYXRhc2V0LmFwcGFyZW50KSA6IHRoaXMuZGF0YXNldC5hcHBhcmVudDtcclxuICBhcHBhcmVudFVuaXQuaW5uZXJUZXh0ID0gdGVtcFVuaXRzLmNoZWNrZWQgPyAnwrBGJyA6ICfCsEMnO1xyXG4gIHdpbmQuaW5uZXJUZXh0ID0gc3BlZWRVbml0cy5jaGVja2VkID8ga2lsb21ldGVyc1RvTWlsZXModGhpcy5kYXRhc2V0LndpbmQpIDogdGhpcy5kYXRhc2V0LndpbmQ7XHJcbiAgd2luZFVuaXQuaW5uZXJUZXh0ID0gc3BlZWRVbml0cy5jaGVja2VkID8gJyBtcGgnIDogJyBrbS9oJztcclxuICBodW1pZGl0eS5pbm5lclRleHQgPSB0aGlzLmRhdGFzZXQuaHVtaWRpdHk7XHJcbiAgd2VhdGhlci5pbm5lclRleHQgPSBgJHt3ZWF0aGVyVHlwZX0ke3dlYXRoZXJJbnRlbnNpdHkgPyBgLCAke3dlYXRoZXJJbnRlbnNpdHl9YCA6ICcnfWA7XHJcblxyXG4gIGNvbnN0IGFsbFZlcnRpY2VzID0gW3RlbXBWZXJ0aWNlcywgd2luZFZlcnRpY2VzLCBodW1pZGl0eVZlcnRpY2VzLCB0ZW1wQXBwYXJlbnRWZXJ0aWNlc107XHJcbiAgYWxsVmVydGljZXMuZm9yRWFjaCgodmVydGljZXMpID0+IHtcclxuICAgIHZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaSkgPT4ge1xyXG4gICAgICBpZiAocG9pbnRlZCA9PT0gaSkge1xyXG4gICAgICAgIHZlcnRleC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB2ZXJ0ZXguc2V0QXR0cmlidXRlKCdyJywgNyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmVydGV4LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ3InLCA0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkhvdXJseURldGFpbChlKSB7XHJcbiAgZGV0YWlsc0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtZGV0YWlscy1kaXYnKTtcclxuICBjb25zdCBob3VybHlQYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hhcnQtd2VhdGhlci1pY29ucy1kaXYnKTtcclxuICBjb25zdCBkZXRhaWxzQ2FyZFdpZHRoID0gZGV0YWlsc0NhcmQuY2xpZW50V2lkdGg7XHJcbiAgY29uc3QgaG91cmx5UGFyZW50V2lkdGggPSBob3VybHlQYXJlbnQuY2xpZW50V2lkdGg7XHJcbiAgY29uc3QgbW91c2VYID0gZS5sYXllclg7XHJcbiAgY29uc3QgbW91c2VZID0gZS5sYXllclk7XHJcbiAgY29uc3QgcGl4ZWxzQmVmb3JlQm9yZGVyID0gMjA7XHJcbiAgY29uc3QgZGlzdGFuY2VGcm9tQ3Vyc29yID0gNTtcclxuICBjb25zdCBib3JkZXJSYWRpdXMgPSAxNTtcclxuICBjb25zdCBpc092ZXJmbG93aW5nID0gbW91c2VYICsgKGRldGFpbHNDYXJkV2lkdGggKyBwaXhlbHNCZWZvcmVCb3JkZXIpID4gaG91cmx5UGFyZW50V2lkdGg7XHJcbiAgZGV0YWlsc0NhcmQuc3R5bGUubGVmdCA9IGAke21vdXNlWH1weGA7XHJcbiAgZGV0YWlsc0NhcmQuc3R5bGUudG9wID0gYCR7bW91c2VZfXB4YDtcclxuICBkZXRhaWxzQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBpc092ZXJmbG93aW5nXHJcbiAgICA/IGB0cmFuc2xhdGUoY2FsYygtMTAwJSAtICR7ZGlzdGFuY2VGcm9tQ3Vyc29yfXB4KSwgY2FsYygtMTAwJSAtICR7ZGlzdGFuY2VGcm9tQ3Vyc29yfXB4KSlgXHJcbiAgICA6IGB0cmFuc2xhdGUoJHtkaXN0YW5jZUZyb21DdXJzb3J9cHgsIGNhbGMoLTEwMCUgLSAke2Rpc3RhbmNlRnJvbUN1cnNvcn1weCkpYDtcclxuICBkZXRhaWxzQ2FyZC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBpc092ZXJmbG93aW5nXHJcbiAgICA/IGAke2JvcmRlclJhZGl1c31weCAke2JvcmRlclJhZGl1c31weCAwcHggJHtib3JkZXJSYWRpdXN9cHhgXHJcbiAgICA6IGAke2JvcmRlclJhZGl1c31weCAke2JvcmRlclJhZGl1c31weCAke2JvcmRlclJhZGl1c31weCAwcHhgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUhvdXJseURldGFpbCgpIHtcclxuICBkZXRhaWxzQ2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBhbGxWZXJ0aWNlcyA9IFt0ZW1wVmVydGljZXMsIHdpbmRWZXJ0aWNlcywgaHVtaWRpdHlWZXJ0aWNlcywgdGVtcEFwcGFyZW50VmVydGljZXNdO1xyXG4gIGFsbFZlcnRpY2VzLmZvckVhY2goKHZlcnRpY2VzKSA9PiB7XHJcbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcclxuICAgICAgaWYgKHZlcnRleC5kYXRhc2V0LmhpZGRlbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgdmVydGV4LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZlcnRleC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgICB2ZXJ0ZXguc2V0QXR0cmlidXRlKCdyJywgNCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBoaWRlQmV0d2VlbiB9IGZyb20gJy4vZ3JhcGhGdW5jdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9zaXRpb25MaW5lc0FuZEhvdXJzKGhvdXJzLCBwb3NpdGlvbnNYLCB0ZXh0U3BhY2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAvLyByZXBlYXQgZmlyc3QgdmFsdWUgZm9yIGZpcnN0IGhvdXIgb24gbWlzc2luZyA4dGggZGF5XHJcbiAgaWYgKGhvdXJzLmF0KC0xKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBmaXJzdEhvdXIgPSBob3Vyc1swXTtcclxuICAgIGhvdXJzW2hvdXJzLmxlbmd0aCAtIDFdID0gZmlyc3RIb3VyO1xyXG4gIH1cclxuICBjb25zdCBzdGFydHNQYXN0WmVybyA9IG5ldyBEYXRlKGhvdXJzWzBdKS5nZXRIb3VycygpICE9PSAwO1xyXG4gIGNvbnN0IGhvdXJMaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFydC1saW5lLWhvdXInKTtcclxuICBjb25zdCBiYXNlTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1saW5lLWJhc2UnKTtcclxuICBjb25zdCBob3Vyc1RleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJzLWNoYXJ0LXRleHQnKTtcclxuICBjb25zdCBob3Vyc051bWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cnMtY2hhcnQtbnVtYmVycycpO1xyXG4gIC8vIHBvc2l0aW9uIGxpbmVzXHJcbiAgYmFzZUxpbmUuc2V0QXR0cmlidXRlKCd4MScsIGAkezB9YCk7XHJcbiAgYmFzZUxpbmUuc2V0QXR0cmlidXRlKCd5MScsIGAke2hlaWdodCAtICh0ZXh0U3BhY2UgLyAyKX1gKTtcclxuICBiYXNlTGluZS5zZXRBdHRyaWJ1dGUoJ3gyJywgYCR7d2lkdGh9YCk7XHJcbiAgYmFzZUxpbmUuc2V0QXR0cmlidXRlKCd5MicsIGAke2hlaWdodCAtICh0ZXh0U3BhY2UgLyAyKX1gKTtcclxuXHJcbiAgaG91ckxpbmVzLmZvckVhY2goKGxpbmUsIGkpID0+IHtcclxuICAgIGNvbnN0IHBvc2l0aW9uWCA9IHBvc2l0aW9uc1hbaV07XHJcbiAgICBjb25zdCBsb2NhbEhvdXIgPSBuZXcgRGF0ZShob3Vyc1tpXSkuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IGlzWmVyb0hvdXIgPSBzdGFydHNQYXN0WmVybyAmJiBsb2NhbEhvdXIgJSAyNCA9PT0gMDtcclxuICAgIGxldCBsaW5lTGVuZ3RoID0gNDtcclxuICAgIGxldCBzdGFydEZyb207XHJcbiAgICBsZXQgZXZlcnk7XHJcbiAgICBpZiAod2lkdGggPCAxOTApIHtcclxuICAgICAgc3RhcnRGcm9tID0gMDtcclxuICAgICAgZXZlcnkgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDI5MCkge1xyXG4gICAgICBzdGFydEZyb20gPSAyO1xyXG4gICAgICBldmVyeSA9IDQ7XHJcbiAgICB9IGVsc2UgaWYgKHdpZHRoIDwgNDAwKSB7XHJcbiAgICAgIHN0YXJ0RnJvbSA9IDI7XHJcbiAgICAgIGV2ZXJ5ID0gMztcclxuICAgIH0gZWxzZSBpZiAod2lkdGggPCA5NTApIHtcclxuICAgICAgc3RhcnRGcm9tID0gMTtcclxuICAgICAgZXZlcnkgPSAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhcnRGcm9tID0gMTtcclxuICAgICAgZXZlcnkgPSAtMTtcclxuICAgIH1cclxuICAgIGlmICgoaSArIHN0YXJ0RnJvbSkgJSBldmVyeSA9PT0gMCkgbGluZUxlbmd0aCA9IDEwO1xyXG4gICAgaWYgKGlzWmVyb0hvdXIpIGxpbmVMZW5ndGggPSAzMDtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd4MScsIGAke3Bvc2l0aW9uWH1gKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd5MScsIGAke2hlaWdodCAtICh0ZXh0U3BhY2UgLyAyKSArIChpc1plcm9Ib3VyID8gMTAgOiAwKX1gKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd4MicsIGAke3Bvc2l0aW9uWH1gKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd5MicsIGAke2hlaWdodCAtICh0ZXh0U3BhY2UgLyAyKSAtIGxpbmVMZW5ndGh9YCk7XHJcbiAgfSk7XHJcbiAgLy8gcG9zaXRpb24gaG91ciB0ZXh0XHJcbiAgaG91cnNUZXh0cy5mb3JFYWNoKCh0ZXh0LCBpKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0TWFyZ2luID0gMTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd4JywgYCR7cG9zaXRpb25zWFtpXX1gKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd5JywgYCR7aGVpZ2h0IC0gdGV4dE1hcmdpbn1gKTtcclxuICB9KTtcclxuICBoaWRlQmV0d2Vlbihob3Vyc1RleHRzLCB3aWR0aCk7XHJcbiAgLy8gYWRkIGhvdXIgbnVtYmVyc1xyXG4gIGhvdXJzTnVtYmVycy5mb3JFYWNoKChob3VyLCBpKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzSG91ciA9IG5ldyBEYXRlKGhvdXJzW2ldKS5nZXRIb3VycygpO1xyXG4gICAgaG91ci50ZXh0Q29udGVudCA9IHRoaXNIb3VyO1xyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0SG92ZXJEYXRhc2V0KFxyXG4gIHRlbXBzLFxyXG4gIGFwcGFyZW50cyxcclxuICB3aW5kU3BlZWRzLFxyXG4gIGh1bWlkaXR5LFxyXG4gIHdlYXRoZXJjb2RlcyxcclxuKSB7XHJcbiAgY29uc3QgY2hhcnRIb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFydC13ZWF0aGVyLWljb24nKTtcclxuICAvLyByZW1vdmluZyB1bm5lY2VzYXJ5IGZpcnN0IGFuZCBsYXN0IGVsZW1lbnRzXHJcbiAgW3RlbXBzLCBhcHBhcmVudHMsIHdpbmRTcGVlZHMsIGh1bWlkaXR5LCB3ZWF0aGVyY29kZXNdXHJcbiAgICAuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNoaWZ0KCk7XHJcbiAgICAgIGRhdGEucG9wKCk7XHJcbiAgICB9KTtcclxuICBjaGFydEhvdmVyLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgIC8vIGFzIHRoZSBmaXJzdCBkaXYgc3RhcnRzIGZyb20gdGhlIDJuZCBtYXJrLCB0aGUgZmlyc3QgZWxlbWVudCBpcyBkaXNjYXJkZWRcclxuICAgIGl0ZW0uZGF0YXNldC50ZW1wID0gdGVtcHNbaV07XHJcbiAgICBpdGVtLmRhdGFzZXQuYXBwYXJlbnQgPSBhcHBhcmVudHNbaV07XHJcbiAgICBpdGVtLmRhdGFzZXQud2luZCA9IHdpbmRTcGVlZHNbaV07XHJcbiAgICBpdGVtLmRhdGFzZXQuaHVtaWRpdHkgPSBodW1pZGl0eVtpXTtcclxuICAgIGl0ZW0uZGF0YXNldC53ZWF0aGVyY29kZSA9IHdlYXRoZXJjb2Rlc1tpXTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBzZXRIb3VycyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4uLy4uL3dlYXRoZXJJY29uJztcclxuaW1wb3J0IGdldFdlYXRoZXJjb2RlIGZyb20gJy4uLy4uL3dlYXRoZXJjb2RlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0SWNvbnMoXHJcbiAgbmV4dDI1V2VhdGhlcmNvZGVzLFxyXG4gIHN1bnJpc2UsXHJcbiAgc3Vuc2V0LFxyXG4gIG5leHQyNUhvdXJzLFxyXG4gIHdpZHRoLFxyXG4pIHtcclxuICBjb25zdCBpY29uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC13ZWF0aGVyLWljb25zLWRpdicpO1xyXG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJ0LXdlYXRoZXItaWNvbicpO1xyXG4gIGxldCBwcmV2aW91c1dlYXRoZXJjb2RlO1xyXG5cclxuICBpY29uc0Rpdi5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuXHJcbiAgaWNvbnMuZm9yRWFjaCgoaWNvbiwgaSkgPT4ge1xyXG4gICAgY29uc3QgaWNvbldpZHRoID0gd2lkdGggLyAyMztcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyY29kZSA9IG5leHQyNVdlYXRoZXJjb2Rlc1tpICsgMV07XHJcbiAgICBjb25zdCBpY29uUGFydHMgPSBnZXRXZWF0aGVyY29kZShjdXJyZW50V2VhdGhlcmNvZGUpLmljb247XHJcbiAgICBpZiAoaSA9PT0gMCkgaWNvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7aWNvbldpZHRoIC8gMn1weGA7XHJcbiAgICBpZiAoaSA9PT0gaWNvbnMubGVuZ3RoIC0gMSkgaWNvbi5zdHlsZS5tYXJnaW5SaWdodCA9IGAke2ljb25XaWR0aCAvIDJ9cHhgO1xyXG5cclxuICAgIC8vIHVzZSBpY29uIG9ubHkgaWYgaXQncyBkaWZmZXJlbnQgZnJvbSB0aGUgcHJldmlvdXMgb25lXHJcbiAgICBpZiAoY3VycmVudFdlYXRoZXJjb2RlICE9PSBwcmV2aW91c1dlYXRoZXJjb2RlKSB7XHJcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gd2VhdGhlckljb24oXHJcbiAgICAgICAgaWNvblBhcnRzLFxyXG4gICAgICAgIG5ldyBEYXRlKG5leHQyNUhvdXJzW2kgKyAxXSksXHJcbiAgICAgICAgc2V0SG91cnMobmV3IERhdGUobmV4dDI1SG91cnNbaSArIDFdKSwgbmV3IERhdGUoc3VucmlzZSkuZ2V0SG91cnMoKSksXHJcbiAgICAgICAgc2V0SG91cnMobmV3IERhdGUobmV4dDI1SG91cnNbaSArIDFdKSwgbmV3IERhdGUoc3Vuc2V0KS5nZXRIb3VycygpKSxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzV2VhdGhlcmNvZGUgPSBjdXJyZW50V2VhdGhlcmNvZGU7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmFuZ2VQZXJjZW50LCByYW5nZVBlcmNlbnRUb1BpeGVscywgaGlkZUJldHdlZW4gfSBmcm9tICcuL2dyYXBoRnVuY3Rpb25zJztcclxuaW1wb3J0IHZhbHVlQWRqdXN0IGZyb20gJy4uLy4uL3ZhbHVlQWRqdXN0JztcclxuaW1wb3J0IHsgY2Vsc2l1c1RvRmFocmVuaGVpdCwga2lsb21ldGVyc1RvTWlsZXMgfSBmcm9tICcuLi8uLi91bml0Q29udmVydGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0TGluZShcclxuICB2YWx1ZXMsXHJcbiAgcG9zaXRpb25zWCxcclxuICBjaGFydHNIZWlnaHQsXHJcbiAgaG91cnMsXHJcbiAgdGV4dFNwYWNlLFxyXG4gIHdpZHRoLFxyXG4gIGNsYXNzTmFtZSxcclxuICB1bml0VHlwZSxcclxuKSB7XHJcbiAgLy8gcmVwZWF0IHByZXZpb3MgdmFsdWUgZm9yIG1pc3NpbmcgOHRoIGRheSBkYXRhIGF0IDBoc1xyXG4gIGlmICh2YWx1ZXMuYXQoLTEpID09PSB1bmRlZmluZWQpIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPSB2YWx1ZXMuYXQoLTIpO1xyXG4gIGNvbnN0IGNoYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvdXJseS1jaGFydC0ke2NsYXNzTmFtZX1gKTtcclxuICBjb25zdCBjaGFydFZlcnRpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfS1jaGFydC12ZXJ0ZXhgKTtcclxuICBjb25zdCBjaGFydFRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfS1jaGFydC10ZXh0YCk7XHJcbiAgY29uc3QgY2hhcnROdW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfS1jaGFydC10ZXh0ICR7dW5pdFR5cGV9YCk7XHJcbiAgY29uc3QgcG9zaXRpb25zWSA9IFtdO1xyXG4gIC8vIHNldCB2YWx1ZXMgZm9yIHZlcnRleCB2ZXJ0aWNhbCBwb3NpdGlvbnNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBob3VyczsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlc1tpXSk7XHJcbiAgICBwb3NpdGlvbnNZLnB1c2goY3VycmVudFZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgbWluVmFsdWUgPSBjbGFzc05hbWUgPT09ICdodW1pZGl0eScgPyAwIDogcG9zaXRpb25zWS5yZWR1Y2UoKG1pbiwgY3VycmVudCkgPT4gKG1pbiA8IGN1cnJlbnQgPyBtaW4gOiBjdXJyZW50KSk7XHJcbiAgY29uc3QgbWF4VmFsdWUgPSBjbGFzc05hbWUgPT09ICdodW1pZGl0eScgPyAxMDAgOiBwb3NpdGlvbnNZLnJlZHVjZSgobWF4LCBjdXJyZW50KSA9PiAobWF4ID4gY3VycmVudCA/IG1heCA6IGN1cnJlbnQpKTtcclxuICAvLyB0dXJuIHZhbHVlcyB0byBwaXhlbHNcclxuICBjb25zdCBwb3NpdGlvbnNUb1BpeGVscyA9IHBvc2l0aW9uc1kubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcGVyY2VudCA9IHJhbmdlUGVyY2VudChtaW5WYWx1ZSwgbWF4VmFsdWUsIHZhbHVlKTtcclxuICAgIHJldHVybiByYW5nZVBlcmNlbnRUb1BpeGVscyhwZXJjZW50LCBjaGFydHNIZWlnaHQpO1xyXG4gIH0pO1xyXG4gIC8vIHVzZSB2YWx1ZXMgb24gZHJhd1xyXG4gIGxldCBkcmF3Q2hhcnQgPSAnJztcclxuICBwb3NpdGlvbnNYLmZvckVhY2goKHBvcywgaSkgPT4ge1xyXG4gICAgY29uc3QgbGluZUNvbW1hbmQgPSBpID09PSAwID8gJ00nIDogJ0wnO1xyXG4gICAgY29uc3QgcG9zWCA9IHBvcztcclxuICAgIGNvbnN0IHBvc1kgPSBwb3NpdGlvbnNUb1BpeGVsc1tpXTtcclxuICAgIGRyYXdDaGFydCArPSBgICR7bGluZUNvbW1hbmR9ICR7cG9zWH0gJHtwb3NZICsgKHRleHRTcGFjZSAvIDIpfWA7XHJcbiAgfSk7XHJcblxyXG4gIGNoYXJ0LnNldEF0dHJpYnV0ZSgnZCcsIGRyYXdDaGFydCk7XHJcblxyXG4gIGlmIChjbGFzc05hbWUgPT09ICd0ZW1wJykge1xyXG4gIC8vIHBvc2l0aW9uIHRoZSBudW1iZXJzIG9uIGVhY2ggdmVydGV4XHJcbiAgICBjaGFydFRleHRzLmZvckVhY2goKHRleHQsIGkpID0+IHtcclxuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3gnLCBwb3NpdGlvbnNYW2ldKTtcclxuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3knLCBwb3NpdGlvbnNUb1BpeGVsc1tpXSArICh0ZXh0U3BhY2UgLyA0KSk7XHJcbiAgICB9KTtcclxuICAgIGhpZGVCZXR3ZWVuKGNoYXJ0VGV4dHMsIHdpZHRoKTtcclxuICAgIGNoYXJ0TnVtYmVycy5mb3JFYWNoKChudW1iZXIsIGkpID0+IHtcclxuICAgICAgdmFsdWVBZGp1c3QobnVtYmVyLCBudW1iZXIudGV4dENvbnRlbnQsIHZhbHVlc1tpXSwgMTApO1xyXG4gICAgICBpZiAodW5pdFR5cGUgPT09ICcudGVtcGVyYXR1cmUtbnVtYmVyJykge1xyXG4gICAgICAgIG51bWJlci5kYXRhc2V0LmNlbHNpdXMgPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQodmFsdWVzW2ldKTtcclxuICAgICAgfSBlbHNlIGlmICh1bml0VHlwZSA9PT0gJy5zcGVlZC1udW1iZXInKSB7XHJcbiAgICAgICAgbnVtYmVyLmRhdGFzZXQua2lsb21ldGVycyA9IHZhbHVlc1tpXTtcclxuICAgICAgICBudW1iZXIuZGF0YXNldC5taWxlcyA9IGtpbG9tZXRlcnNUb01pbGVzKHZhbHVlc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gcG9zaXRpb24gY2lyY2xlIHZlcnRpY2VzXHJcbiAgY2hhcnRWZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IHtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ2N4JywgYCR7cG9zaXRpb25zWFtpXX1gKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ2N5JywgYCR7cG9zaXRpb25zVG9QaXhlbHNbaV0gKyAodGV4dFNwYWNlIC8gMil9YCk7XHJcbiAgfSk7XHJcbiAgaWYgKGNsYXNzTmFtZSA9PT0gJ3RlbXAnKSB7XHJcbiAgICBoaWRlQmV0d2VlbihjaGFydFZlcnRpY2VzLCB3aWR0aCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNoYXJ0VmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXROZXh0MjUgfSBmcm9tICcuL2dyYXBoRnVuY3Rpb25zJztcclxuaW1wb3J0IHBvc2l0aW9uTGluZXNBbmRIb3VycyBmcm9tICcuL3Bvc2l0aW9uTGluZXNBbmRIb3Vycyc7XHJcbmltcG9ydCB7IGVtcHR5Q2hhcnQsIGVtcHR5Q2hhcnRWZXJ0aWNlcyB9IGZyb20gJy4vZW1wdHlDaGFydFBvc2l0aW9ucyc7XHJcbmltcG9ydCB1cGRhdGVDaGFydExpbmUgZnJvbSAnLi91cGRhdGVDaGFydExpbmUnO1xyXG5pbXBvcnQgdXBkYXRlQ2hhcnRJY29ucyBmcm9tICcuL3VwZGF0ZUNoYXJ0SWNvbnMnO1xyXG5pbXBvcnQgdXBkYXRlQ2hhcnRIb3ZlckRhdGFzZXQgZnJvbSAnLi91cGRhdGVDaGFydEhvdmVyRGF0YXNldCc7XHJcblxyXG5sZXQgc3RvcmVkRGF0YTtcclxubGV0IHN0b3JlZFN0YXJ0aW5nSW5kZXg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVIb3VybHlXZWF0aGVyKGRhdGEsIHN0YXJ0RnJvbUluZGV4KSB7XHJcbiAgLy8gcHJldmVudCBlcnJvciBvbiByZXNpemluZyB3aXRob3V0IGNoYXJ0IGxvYWRlZFxyXG4gIGlmIChkYXRhID09PSB1bmRlZmluZWQgJiYgc3RvcmVkRGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgLy8gc3RvcmUgYXJndW1lbnRzIGZvciBsYXRlciB1c2Ugd2l0aG91dCBwYXNzaW5nIGRhdGFcclxuICBpZiAoIWRhdGEpIGRhdGEgPSBzdG9yZWREYXRhO1xyXG4gIHN0b3JlZERhdGEgPSBkYXRhO1xyXG4gIGlmIChzdGFydEZyb21JbmRleCA9PT0gdW5kZWZpbmVkKSBzdGFydEZyb21JbmRleCA9IHN0b3JlZFN0YXJ0aW5nSW5kZXg7XHJcbiAgc3RvcmVkU3RhcnRpbmdJbmRleCA9IHN0YXJ0RnJvbUluZGV4O1xyXG5cclxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1ob3VybHknKTtcclxuICBjb25zdCBjaGFydFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWNoYXJ0LXRlbXAnKTtcclxuICBjb25zdCBjaGFydFRlbXBWZXJ0aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLWNoYXJ0LXZlcnRleCcpO1xyXG4gIGNvbnN0IGhvdXJzVXNlZCA9IDI0O1xyXG4gIC8vIHZlcnRpY2FsIHNwYWNlIHJlc2VydmVkIG9uIHBpeGVscyBmb3IgaG91cnMgYW5kIHRlbXAgdmFsdWVzXHJcbiAgY29uc3QgdGV4dFNwYWNlID0gNDU7XHJcbiAgY29uc3Qgd2lkdGggPSBwYXJzZUludChwYXJlbnQuY2xpZW50V2lkdGgsIDEwKTtcclxuICBjb25zdCBoZWlnaHQgPSBwYXJzZUludChwYXJlbnQuY2xpZW50SGVpZ2h0LCAxMCk7XHJcbiAgY29uc3QgaGVpZ2h0VGVtcHNXaW5kID0gKChoZWlnaHQgKiA4MCkgLyAxMDApIC0gdGV4dFNwYWNlO1xyXG4gIGNvbnN0IGhlaWdodHNIdW1pZGl0eSA9IGhlaWdodCAtIHRleHRTcGFjZTtcclxuICBjb25zdCBwb3NpdGlvbnNYID0gWzBdO1xyXG4gIC8vIGdldCB0aGUgbmVjZXNzYXJ5IGRhdGEgZm9yIGNoYXJ0XHJcbiAgY29uc3QgaG91cnMgPSBnZXROZXh0MjUoZGF0YS5ob3Vycywgc3RhcnRGcm9tSW5kZXgpO1xyXG4gIGNvbnN0IHRlbXBzID0gZ2V0TmV4dDI1KGRhdGEudGVtcHMsIHN0YXJ0RnJvbUluZGV4KTtcclxuICBjb25zdCBhcHBhcmVudHMgPSBnZXROZXh0MjUoZGF0YS5hcHBhcmVudCwgc3RhcnRGcm9tSW5kZXgpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZHMgPSBnZXROZXh0MjUoZGF0YS53aW5kc3BlZWQsIHN0YXJ0RnJvbUluZGV4KTtcclxuICBjb25zdCBodW1pZGl0eSA9IGdldE5leHQyNShkYXRhLmh1bWlkaXR5LCBzdGFydEZyb21JbmRleCk7XHJcbiAgY29uc3Qgd2VhdGhlcmNvZGVzID0gZ2V0TmV4dDI1KGRhdGEud2VhdGhlcmNvZGUsIHN0YXJ0RnJvbUluZGV4KTtcclxuICBjb25zdCB7IHN1bnJpc2UgfSA9IGRhdGE7XHJcbiAgY29uc3QgeyBzdW5zZXQgfSA9IGRhdGE7XHJcblxyXG4gIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAvLyBzZXQgdmFsdWVzIGZvciB2ZXJ0ZXggaG9yaXpvbnRhbCBwb3NpdGlvbnNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzVXNlZDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSAod2lkdGggLyAoaG91cnNVc2VkKSkgKiAoaSArIDEpO1xyXG4gICAgcG9zaXRpb25zWC5wdXNoKGN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG4gIC8vIGlmIHRoZXJlJ3Mgbm8gdGVtcCBjaGFydCBkcmF3biwgYW4gZW1wdHkgb25lICh2YWx1ZXMgYXQgMCkgd2lsbCBiZSBwbGFjZWRcclxuICBpZiAoIWNoYXJ0VGVtcC5nZXRBdHRyaWJ1dGUoJ2QnKSkge1xyXG4gICAgZW1wdHlDaGFydChjaGFydFRlbXAsIHBvc2l0aW9uc1gsIGhlaWdodFRlbXBzV2luZCk7XHJcbiAgICBlbXB0eUNoYXJ0VmVydGljZXMoY2hhcnRUZW1wVmVydGljZXMsIHBvc2l0aW9uc1gsIGhlaWdodFRlbXBzV2luZCk7XHJcbiAgfVxyXG4gIC8vIHNtYWxsIHRpbWVvdXQgdG8gYWxsb3cgYW5pbWF0aW9uIGJldHdlZW4gdGhlIGVtcHR5IGNoYXJ0IGFuZCB0aGUgdXBkYXRlZCBvbmVcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHBvc2l0aW9uTGluZXNBbmRIb3Vycyhob3VycywgcG9zaXRpb25zWCwgdGV4dFNwYWNlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHVwZGF0ZUNoYXJ0TGluZSh0ZW1wcywgcG9zaXRpb25zWCwgaGVpZ2h0VGVtcHNXaW5kLCBob3Vyc1VzZWQsIHRleHRTcGFjZSwgd2lkdGgsICd0ZW1wJywgJy50ZW1wZXJhdHVyZS1udW1iZXInKTtcclxuICAgIHVwZGF0ZUNoYXJ0TGluZShhcHBhcmVudHMsIHBvc2l0aW9uc1gsIGhlaWdodFRlbXBzV2luZCwgaG91cnNVc2VkLCB0ZXh0U3BhY2UsIHdpZHRoLCAndGVtcC1hcHBhcmVudCcsICcudGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgICB1cGRhdGVDaGFydExpbmUod2luZFNwZWVkcywgcG9zaXRpb25zWCwgaGVpZ2h0VGVtcHNXaW5kLCBob3Vyc1VzZWQsIHRleHRTcGFjZSwgd2lkdGgsICd3aW5kJywgJy5zcGVlZC1udW1iZXInKTtcclxuICAgIHVwZGF0ZUNoYXJ0TGluZShodW1pZGl0eSwgcG9zaXRpb25zWCwgaGVpZ2h0c0h1bWlkaXR5LCBob3Vyc1VzZWQsIHRleHRTcGFjZSwgd2lkdGgsICdodW1pZGl0eScsICcuaHVtaWRpdHktcGVyY2VudCcpO1xyXG4gICAgdXBkYXRlQ2hhcnRJY29ucyh3ZWF0aGVyY29kZXMsIHN1bnJpc2UsIHN1bnNldCwgaG91cnMsIHdpZHRoKTtcclxuICAgIHVwZGF0ZUNoYXJ0SG92ZXJEYXRhc2V0KHRlbXBzLCBhcHBhcmVudHMsIHdpbmRTcGVlZHMsIGh1bWlkaXR5LCB3ZWF0aGVyY29kZXMpO1xyXG4gIH0sIDUwKTtcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlQ2hhcnRMaW5lR3JvdXAgZnJvbSAnLi9jcmVhdGVDaGFydExpbmVHcm91cCc7XHJcbmltcG9ydCBjcmVhdGVXZWF0aGVySWNvbnMgZnJvbSAnLi9jcmVhdGVXZWF0aGVySWNvbnMnO1xyXG5pbXBvcnQgY3JlYXRlQ2hhcnREZXRhaWxzIGZyb20gJy4vY3JlYXRlQ2hhcnREZXRhaWxzJztcclxuXHJcbmNvbnN0IHN2Z05zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJIb3VybHkoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAnc3ZnJyk7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItaG91cmx5JywgJ2ludmlzaWJsZScpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKCdob3VybHktY2hhcnQnKTtcclxuICBzdmcuYXBwZW5kKFxyXG4gICAgY3JlYXRlQ2hhcnRNYXJrc0FuZEhvdXJzKCksXHJcbiAgICBjcmVhdGVDaGFydExpbmVHcm91cCgnd2luZCcpLFxyXG4gICAgY3JlYXRlQ2hhcnRMaW5lR3JvdXAoJ2h1bWlkaXR5JyksXHJcbiAgICBjcmVhdGVDaGFydExpbmVHcm91cCgndGVtcC1hcHBhcmVudCcpLFxyXG4gICAgY3JlYXRlQ2hhcnRMaW5lR3JvdXAoJ3RlbXAnLCAnwrAnLCAndGVtcGVyYXR1cmUtbnVtYmVyJyksXHJcbiAgKTtcclxuICBkaXYuYXBwZW5kKFxyXG4gICAgc3ZnLFxyXG4gICAgY3JlYXRlV2VhdGhlckljb25zKCksXHJcbiAgICBjcmVhdGVDaGFydERldGFpbHMoKSxcclxuICApO1xyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoYXJ0TWFya3NBbmRIb3VycygpIHtcclxuICBjb25zdCBjaGFydExpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICdnJyk7XHJcbiAgY29uc3QgaG9yaXpvbnRhbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICdsaW5lJyk7XHJcbiAgY29uc3QgaG91cnNUZXh0cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSAyNDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICdsaW5lJyk7XHJcbiAgICB2ZXJ0aWNhbExpbmUuY2xhc3NMaXN0LmFkZCgnY2hhcnQtbGluZS1ob3VyJyk7XHJcbiAgICBjaGFydExpbmVzR3JvdXAuYXBwZW5kKHZlcnRpY2FsTGluZSk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDI0OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAndGV4dCcpO1xyXG4gICAgY29uc3QgaG91cnNOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTnMsICd0c3BhbicpO1xyXG4gICAgY29uc3QgaG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05zLCAndHNwYW4nKTtcclxuICAgIGhvdXJzLnNldEF0dHJpYnV0ZSgneCcsIDApO1xyXG4gICAgaG91cnMuc2V0QXR0cmlidXRlKCd5JywgMCk7XHJcbiAgICBob3Vycy5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xyXG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMtY2hhcnQtdGV4dCcpO1xyXG4gICAgaG91cnNOdW1iZXIuY2xhc3NMaXN0LmFkZCgnaG91cnMtY2hhcnQtbnVtYmVycycpO1xyXG4gICAgaG91cnNOdW1iZXIudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICBob3Vyc1RleHQudGV4dENvbnRlbnQgPSAnaHMnO1xyXG4gICAgaG91cnMuYXBwZW5kKGhvdXJzTnVtYmVyLCBob3Vyc1RleHQpO1xyXG4gICAgaG91cnNUZXh0cy5wdXNoKGhvdXJzKTtcclxuICB9XHJcbiAgY2hhcnRMaW5lc0dyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LWxpbmVzLWdyb3VwJyk7XHJcbiAgaG9yaXpvbnRhbExpbmUuY2xhc3NMaXN0LmFkZCgnY2hhcnQtbGluZS1iYXNlJyk7XHJcblxyXG4gIGNoYXJ0TGluZXNHcm91cC5hcHBlbmQoaG9yaXpvbnRhbExpbmUsIC4uLmhvdXJzVGV4dHMpO1xyXG5cclxuICByZXR1cm4gY2hhcnRMaW5lc0dyb3VwO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgc2V0TWludXRlcyxcclxuICBnZXRNaW51dGVzLFxyXG4gIGlzQmVmb3JlLFxyXG4gIGlzQWZ0ZXIsXHJcbn0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgY2xvdWRzSGlnaCBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2Nsb3Vkcy1oaWdoLnBuZyc7XHJcbmltcG9ydCBjbG91ZHNMb3cgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9jbG91ZHMtbG93LnBuZyc7XHJcbmltcG9ydCBjbG91ZHNNaWRkbGUgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9jbG91ZHMtbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBkcml6emxlSGlnaCBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2RyaXp6bGUtaGlnaC5wbmcnO1xyXG5pbXBvcnQgZHJpenpsZUxvdyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2RyaXp6bGUtbG93LnBuZyc7XHJcbmltcG9ydCBkcml6emxlTWlkZGxlIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvZHJpenpsZS1taWRkbGUucG5nJztcclxuaW1wb3J0IGZvZyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2ZvZy5wbmcnO1xyXG5pbXBvcnQgaGFpbEhpZ2ggZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9oYWlsLWhpZ2gucG5nJztcclxuaW1wb3J0IGhhaWxMb3cgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9oYWlsLWxvdy5wbmcnO1xyXG5pbXBvcnQgaWNlTG93IGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaWNlLWxvdy5wbmcnO1xyXG5pbXBvcnQgaWNlTWlkZGxlIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaWNlLW1pZGRsZS5wbmcnO1xyXG5pbXBvcnQgaWNlU21hbGwgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9pY2Utc21hbGwucG5nJztcclxuaW1wb3J0IG1vb24gZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9tb29uLnBuZyc7XHJcbmltcG9ydCBtb29uQ2xlYXJTa3kgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9tb29uLWNsZWFyLXNreS5wbmcnO1xyXG5pbXBvcnQgcmFpbkJpZ0hpZ2ggZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9yYWluLWJpZy1oaWdoLnBuZyc7XHJcbmltcG9ydCByYWluQmlnTG93IGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1iaWctbG93LnBuZyc7XHJcbmltcG9ydCByYWluQmlnTWlkZGxlIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1iaWctbWlkZGxlLnBuZyc7XHJcbmltcG9ydCByYWluSGlnaCBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4taGlnaC5wbmcnO1xyXG5pbXBvcnQgcmFpbkxvdyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4tbG93LnBuZyc7XHJcbmltcG9ydCByYWluTWlkZGxlIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1taWRkbGUucG5nJztcclxuaW1wb3J0IHNub3dCaWdIaWdoIGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc25vdy1iaWctaGlnaC5wbmcnO1xyXG5pbXBvcnQgc25vd0JpZ0xvdyBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3Nub3ctYmlnLWxvdy5wbmcnO1xyXG5pbXBvcnQgc25vd0hpZ2ggZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LWhpZ2gucG5nJztcclxuaW1wb3J0IHNub3dMb3cgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LWxvdy5wbmcnO1xyXG5pbXBvcnQgc25vd01pZGRsZSBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3Nub3ctbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBzdW4gZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zdW4ucG5nJztcclxuaW1wb3J0IHN1bkNsZWFyU2t5IGZyb20gJy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc3VuLWNsZWFyLXNreS5wbmcnO1xyXG5pbXBvcnQgdGh1bmRlciBmcm9tICcuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3RodW5kZXIucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJJY29uKGljb25QYXJ0cywgbG9jYWxUaW1lLCBzdW5yaXNlLCBzdW5zZXQpIHtcclxuICAvLyBlYWNoIGltYWdlIHdpbGwgYmUgYWRkZWQgaGVyZSBDU1MgZm9ybWF0IGJlZm9yZSByZXR1cm5pbmcgaXRcclxuICBsZXQgaW1hZ2VzID0gJyc7XHJcbiAgLy8gYXBwbHkgbG9jYWwgbWludXRlcyB0byBjaXR5IHRpbWUgYXMgdGhlIEFQSSBhbHdheXMgcmV0dXJucyAwMFxyXG4gIGxldCBzdW5Nb29uO1xyXG4gIGlmIChsb2NhbFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY2l0eVRpbWUgPSBzZXRNaW51dGVzKG5ldyBEYXRlKGxvY2FsVGltZSksIGdldE1pbnV0ZXMobmV3IERhdGUoKSkpO1xyXG4gICAgY29uc3QgaXNEYXkgPSBpc0JlZm9yZShuZXcgRGF0ZShzdW5yaXNlKSwgbmV3IERhdGUoY2l0eVRpbWUpKVxyXG4gICAgJiYgaXNBZnRlcihuZXcgRGF0ZShzdW5zZXQpLCBuZXcgRGF0ZShjaXR5VGltZSkpO1xyXG4gICAgY29uc3QgaXNDbGVhckRheSA9IGljb25QYXJ0cy5sZW5ndGggPT09IDEgJiYgaWNvblBhcnRzWzBdID09PSAnc3VuTW9vbic7XHJcblxyXG4gICAgaWYgKGlzRGF5KSB7XHJcbiAgICAgIHN1bk1vb24gPSBpc0NsZWFyRGF5ID8gc3VuQ2xlYXJTa3kgOiBzdW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdW5Nb29uID0gaXNDbGVhckRheSA/IG1vb25DbGVhclNreSA6IG1vb247XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHN1bk1vb24gPSBzdW47XHJcbiAgfVxyXG5cclxuICAvLyBsaXN0IGltYWdlcyBzbyB0aGV5IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgZnJvbSBhIHN0cmluZ1xyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgc3VuTW9vbixcclxuICAgIGNsb3Vkc0hpZ2gsXHJcbiAgICBjbG91ZHNMb3csXHJcbiAgICBjbG91ZHNNaWRkbGUsXHJcbiAgICBkcml6emxlSGlnaCxcclxuICAgIGRyaXp6bGVMb3csXHJcbiAgICBkcml6emxlTWlkZGxlLFxyXG4gICAgZm9nLFxyXG4gICAgaGFpbEhpZ2gsXHJcbiAgICBoYWlsTG93LFxyXG4gICAgaWNlTG93LFxyXG4gICAgaWNlTWlkZGxlLFxyXG4gICAgaWNlU21hbGwsXHJcbiAgICByYWluQmlnSGlnaCxcclxuICAgIHJhaW5CaWdMb3csXHJcbiAgICByYWluQmlnTWlkZGxlLFxyXG4gICAgcmFpbkhpZ2gsXHJcbiAgICByYWluTG93LFxyXG4gICAgcmFpbk1pZGRsZSxcclxuICAgIHNub3dCaWdIaWdoLFxyXG4gICAgc25vd0JpZ0xvdyxcclxuICAgIHNub3dIaWdoLFxyXG4gICAgc25vd0xvdyxcclxuICAgIHNub3dNaWRkbGUsXHJcbiAgICB0aHVuZGVyLFxyXG4gIH07XHJcblxyXG4gIGljb25QYXJ0cy5mb3JFYWNoKChwYXJ0LCBpKSA9PiB7XHJcbiAgICBjb25zdCBjb21tYSA9IGAke2kgIT09IDAgPyAnLCAnIDogJyd9YDtcclxuICAgIGltYWdlcyArPSBgJHtjb21tYX11cmwoJHtpY29uc1twYXJ0XX0pYDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGltYWdlcztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWF0aGVyY29kZShyZXF1ZXN0ZWRDb2RlKSB7XHJcbiAgLypcclxuICAqIHNvdXJjZTogaHR0cHM6Ly9vcGVuLW1ldGVvLmNvbS9lbi9kb2NzXHJcbiAgKiBXTU8gV2VhdGhlciBpbnRlcnByZXRhdGlvbiBjb2RlcyAoV1cpXHJcbiAgKiBDb2RlIC0gRGVzY3JpcHRpb25cclxuICAqIDAgLS0tLS0tLS0tLSBDbGVhciBza3lcclxuICAqIDEsIDIsIDMgLS0tLSBNYWlubHkgY2xlYXIsIHBhcnRseSBjbG91ZHksIGFuZCBvdmVyY2FzdFxyXG4gICogNDUsIDQ4IC0tLS0tIEZvZyBhbmQgZGVwb3NpdGluZyByaW1lIGZvZ1xyXG4gICogNTEsIDUzLCA1NSAtIERyaXp6bGU6IExpZ2h0LCBtb2RlcmF0ZSwgYW5kIGRlbnNlIGludGVuc2l0eVxyXG4gICogNTYsIDU3IC0tLS0tIEZyZWV6aW5nIERyaXp6bGU6IExpZ2h0IGFuZCBkZW5zZSBpbnRlbnNpdHlcclxuICAqIDYxLCA2MywgNjUgLSBSYWluOiBTbGlnaHQsIG1vZGVyYXRlIGFuZCBoZWF2eSBpbnRlbnNpdHlcclxuICAqIDY2LCA2NyAtLS0tLSBGcmVlemluZyBSYWluOiBMaWdodCBhbmQgaGVhdnkgaW50ZW5zaXR5XHJcbiAgKiA3MSwgNzMsIDc1IC0gU25vdyBmYWxsOiBTbGlnaHQsIG1vZGVyYXRlLCBhbmQgaGVhdnkgaW50ZW5zaXR5XHJcbiAgKiA3NyAtLS0tLS0tLS0gU25vdyBncmFpbnNcclxuICAqIDgwLCA4MSwgODIgLSBSYWluIHNob3dlcnM6IFNsaWdodCwgbW9kZXJhdGUsIGFuZCB2aW9sZW50XHJcbiAgKiA4NSwgODYgLS0tLS0gU25vdyBzaG93ZXJzIHNsaWdodCBhbmQgaGVhdnlcclxuICAqIDk1ICogLS0tLS0tLSBUaHVuZGVyc3Rvcm06IFNsaWdodCBvciBtb2RlcmF0ZVxyXG4gICogOTYsIDk5ICogLS0tIFRodW5kZXJzdG9ybSB3aXRoIHNsaWdodCBhbmQgaGVhdnkgaGFpbFxyXG4gICogKCopIFRodW5kZXJzdG9ybSBmb3JlY2FzdCB3aXRoIGhhaWwgaXMgb25seSBhdmFpbGFibGUgaW4gQ2VudHJhbCBFdXJvcGVcclxuICAqL1xyXG5cclxuICBjb25zdCBjb2RlcyA9IFtcclxuICAgIHtcclxuICAgICAgY29kZTogMCxcclxuICAgICAgd2VhdGhlcjogJ2NsZWFyIHNreScsXHJcbiAgICAgIGljb246IFsnc3VuTW9vbiddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogMSxcclxuICAgICAgd2VhdGhlcjogJ21haW5seSBjbGVhcicsXHJcbiAgICAgIGljb246IFsnY2xvdWRzTG93JywgJ3N1bk1vb24nXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDIsXHJcbiAgICAgIHdlYXRoZXI6ICdwYXJ0bHkgY2xvdWR5JyxcclxuICAgICAgaWNvbjogWydjbG91ZHNNaWRkbGUnLCAnc3VuTW9vbiddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogMyxcclxuICAgICAgd2VhdGhlcjogJ292ZXJjYXN0JyxcclxuICAgICAgaWNvbjogWydjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA0NSxcclxuICAgICAgd2VhdGhlcjogJ2ZvZycsXHJcbiAgICAgIGljb246IFsnZm9nJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDQ4LFxyXG4gICAgICB3ZWF0aGVyOiAnZGVwb3NpdGluZyByaW1lIGZvZycsXHJcbiAgICAgIGljb246IFsnaWNlU21hbGwnLCAnZm9nJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDUxLFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydkcml6emxlTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDUzLFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ21vZGVyYXRlJyxcclxuICAgICAgaWNvbjogWydkcml6emxlTWlkZGxlJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDU1LFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2RlbnNlJyxcclxuICAgICAgaWNvbjogWydkcml6emxlSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA1NixcclxuICAgICAgd2VhdGhlcjogJ2ZyZWV6aW5nIGRyaXp6bGUnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdsaWdodCcsXHJcbiAgICAgIGljb246IFsncmFpbkRyaXp6bGVIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDU3LFxyXG4gICAgICB3ZWF0aGVyOiAnZnJlZXppbmcgZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2RlbnNlJyxcclxuICAgICAgaWNvbjogWydpY2VNaWRkbGUnLCAncmFpbkRyaXp6bGVIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDYxLFxyXG4gICAgICB3ZWF0aGVyOiAncmFpbicsXHJcbiAgICAgIGludGVuc2l0eTogJ3NsaWdodCcsXHJcbiAgICAgIGljb246IFsncmFpbkxvdycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2MyxcclxuICAgICAgd2VhdGhlcjogJ3JhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsncmFpbk1pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2NSxcclxuICAgICAgd2VhdGhlcjogJ3JhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eScsXHJcbiAgICAgIGljb246IFsncmFpbkhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNjYsXHJcbiAgICAgIHdlYXRoZXI6ICdmcmVlemluZyByYWluJyxcclxuICAgICAgaW50ZW5zaXR5OiAnbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ2ljZU1pZGRsZScsICdyYWluTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDY3LFxyXG4gICAgICB3ZWF0aGVyOiAnZnJlZXppbmcgcmFpbicsXHJcbiAgICAgIGludGVuc2l0eTogJ2hlYXZ5JyxcclxuICAgICAgaWNvbjogWydpY2VNaWRkbGUnLCAncmFpbkhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzEsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGZhbGwnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdzbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3Nub3dMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzMsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGZhbGwnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsnc25vd01pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA3NSxcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgZmFsbCcsXHJcbiAgICAgIGludGVuc2l0eTogJ2hlYXZ5JyxcclxuICAgICAgaWNvbjogWydzbm93SGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA3NyxcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgZ3JhaW5zJyxcclxuICAgICAgaWNvbjogWydpY2VMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogODAsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluIHNob3dlcnMnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdzbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5CaWdMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogODEsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluIHNob3dlcnMnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsncmFpbkJpZ01pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA4MixcclxuICAgICAgd2VhdGhlcjogJ3JhaW4gc2hvd2VycycsXHJcbiAgICAgIGludGVuc2l0eTogJ3Zpb2xlbnQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5CaWdIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDg1LFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydzbm93QmlnTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDg2LFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnaGVhdnknLFxyXG4gICAgICBpY29uOiBbJ3Nub3dCaWdIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDk1LFxyXG4gICAgICB3ZWF0aGVyOiAndGh1bmRlcnN0b3JtJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0IHRvIG1vZGVyYXRlJyxcclxuICAgICAgaWNvbjogWyd0aHVuZGVyJywgJ3JhaW5IaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDk2LFxyXG4gICAgICB3ZWF0aGVyOiAndGh1bmRlcnN0b3JtJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0IGhhaWwnLFxyXG4gICAgICBpY29uOiBbJ2hhaWxMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogOTksXHJcbiAgICAgIHdlYXRoZXI6ICd0aHVuZGVyc3Rvcm0nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eSBoYWlsJyxcclxuICAgICAgaWNvbjogWydoYWlsSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RlZCA9IGNvZGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSByZXF1ZXN0ZWRDb2RlKTtcclxuXHJcbiAgcmV0dXJuIGNvZGVzW3JlcXVlc3RlZF07XHJcbn1cclxuIiwiY29uc3QgQ0NfUkVHRVggPSAvXlthLXpdezJ9JC9pO1xuY29uc3QgRkxBR19MRU5HVEggPSA0O1xuY29uc3QgT0ZGU0VUID0gMTI3Mzk3O1xuZnVuY3Rpb24gY291bnRyeUNvZGVFbW9qaShjYykge1xuICBpZiAoIUNDX1JFR0VYLnRlc3QoY2MpKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjYyBhcmd1bWVudCBtdXN0IGJlIGFuIElTTyAzMTY2LTEgYWxwaGEtMiBzdHJpbmcsIGJ1dCBnb3QgJyR7dHlwZSA9PT0gXCJzdHJpbmdcIiA/IGNjIDogdHlwZX0nIGluc3RlYWQuYCk7XG4gIH1cbiAgY29uc3QgY29kZVBvaW50cyA9IFsuLi5jYy50b1VwcGVyQ2FzZSgpXS5tYXAoKGMpID0+IGMuY29kZVBvaW50QXQoKSArIE9GRlNFVCk7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKTtcbn1cbmZ1bmN0aW9uIGVtb2ppQ291bnRyeUNvZGUoZmxhZykge1xuICBpZiAoZmxhZy5sZW5ndGggIT09IEZMQUdfTEVOR1RIKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBmbGFnO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGZsYWcgYXJndW1lbnQgbXVzdCBiZSBhIGZsYWcgZW1vamksIGJ1dCBnb3QgJyR7dHlwZSA9PT0gXCJzdHJpbmdcIiA/IGZsYWcgOiB0eXBlfScgaW5zdGVhZC5gKTtcbiAgfVxuICBjb25zdCBjb2RlUG9pbnRzID0gWy4uLmZsYWddLm1hcCgoYykgPT4gYy5jb2RlUG9pbnRBdCgpIC0gT0ZGU0VUKTtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpO1xufVxudmFyIHNyY19kZWZhdWx0ID0gY291bnRyeUNvZGVFbW9qaTtcbmV4cG9ydCB7XG4gIGNvdW50cnlDb2RlRW1vamksXG4gIHNyY19kZWZhdWx0IGFzIGRlZmF1bHQsXG4gIGVtb2ppQ291bnRyeUNvZGVcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=