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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --txt-color-1: #000;\r\n  --txt-color-2: #222;\r\n  --txt-color-3: #333;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: darkslateblue;\r\n}\r\n\r\n/* for general use */\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.invisible {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;;AAGA;EACE,+BAA+B;AACjC;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB","sourcesContent":[":root {\r\n  --txt-color-1: #000;\r\n  --txt-color-2: #222;\r\n  --txt-color-3: #333;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: darkslateblue;\r\n}\r\n\r\n/* for general use */\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.invisible {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherDaily.css"],"names":[],"mappings":"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","sourcesContent":[".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/precipitations.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/wind.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/sunrise-sunset.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/uv-index.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".weather-daily-hourly {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherDailyHourly.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,OAAO;EACP,SAAS;EACT,YAAY;AACd","sourcesContent":[".weather-daily-hourly {\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".weather-hourly {\r\n  height: 150px;\r\n  overflow: hidden;\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hourly-chart-temperature {\r\n  fill: transparent;\r\n  stroke: red;\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: 200ms linear;\r\n}\r\n\r\n.temp-chart-vector {\r\n  fill: green;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherHourly.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb","sourcesContent":[".weather-hourly {\r\n  height: 150px;\r\n  overflow: hidden;\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hourly-chart-temperature {\r\n  fill: transparent;\r\n  stroke: red;\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  transition: 200ms linear;\r\n}\r\n\r\n.temp-chart-vector {\r\n  fill: green;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/dom/citiesList.js":
/*!***************************************!*\
  !*** ./src/modules/dom/citiesList.js ***!
  \***************************************/
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
    para.innerText = 'No location found.';

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

/***/ "./src/modules/dom/dailyCard.js":
/*!**************************************!*\
  !*** ./src/modules/dom/dailyCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dailyCard)
/* harmony export */ });
/* harmony import */ var _functions_changeUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/changeUnits */ "./src/modules/functions/changeUnits.js");


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
    element.addEventListener('change', _functions_changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

  speedUnit.addEventListener('change', _functions_changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/modules/dom/search.js":
/*!***********************************!*\
  !*** ./src/modules/dom/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _functions_searchCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/searchCity */ "./src/modules/functions/searchCity.js");


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
      (0,_functions_searchCity__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
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

/***/ "./src/modules/dom/weatherCurrent.js":
/*!*******************************************!*\
  !*** ./src/modules/dom/weatherCurrent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherCurrent)
/* harmony export */ });
/* harmony import */ var _functions_changeUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/changeUnits */ "./src/modules/functions/changeUnits.js");


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
  unitsElements.forEach((element) => element.addEventListener('change', _functions_changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]));
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

  windSpeedUnit.addEventListener('change', _functions_changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]);

  windTitleDiv.append(windTitle, windSpeedUnit);
  windGauge.append(windSpeed, windCompass, windSpeedDirection);
  windDiv.append(windGauge, windTitleDiv);

  // append everything
  section.append(cityDiv, icon, weathercodeDiv, tempDiv, humidityDiv, windDiv);

  return section;
}


/***/ }),

/***/ "./src/modules/dom/weatherDailyHourly.js":
/*!***********************************************!*\
  !*** ./src/modules/dom/weatherDailyHourly.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherDailyHourly)
/* harmony export */ });
/* harmony import */ var _dailyCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyCard */ "./src/modules/dom/dailyCard.js");
/* harmony import */ var _weatherHourly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherHourly */ "./src/modules/dom/weatherHourly.js");



function weatherDailyHourly() {
  const section = document.createElement('section');
  const dailyDiv = document.createElement('div');
  // const hourlyDiv = document.createElement('div');

  section.classList.add('weather-daily-hourly');
  dailyDiv.classList.add('weather-daily', 'invisible');

  for (let i = 0; i < 7; i += 1) {
    dailyDiv.append((0,_dailyCard__WEBPACK_IMPORTED_MODULE_0__["default"])());
  }

  section.append(
    (0,_weatherHourly__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    dailyDiv,
  );

  return section;
}


/***/ }),

/***/ "./src/modules/dom/weatherHourly.js":
/*!******************************************!*\
  !*** ./src/modules/dom/weatherHourly.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherHourly)
/* harmony export */ });
function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  div.classList.add('weather-hourly');
  svg.classList.add('hourly-chart');
  svg.append(
    createChartLines(),
    createTempGroup(),
  );
  div.append(svg);
  return div;
}

function createChartLines() {
  const chartLinesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  const hoursTexts = [];

  for (let i = 0; i < 24; i += 1) {
    const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    verticalLine.classList.add('chart-line-hour');
    chartLinesGroup.append(verticalLine);
  }
  for (let i = 0; i < 24; i += 1) {
    const hours = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const hoursNumber = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    const hoursText = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    hours.setAttribute('x', 0);
    hours.setAttribute('y', 0);
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

function createTempGroup() {
  const tempGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const tempChart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const tempChartNumbers = [];
  const tempChartVectors = [];

  for (let i = 0; i < 24; i += 1) {
    const degrees = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const degreesNumber = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    const degreesSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    degrees.setAttribute('x', 0);
    degrees.setAttribute('y', 0);
    degrees.classList.add('temp-chart-text');
    degreesNumber.classList.add('temp-chart', 'temperature-number');
    degreesNumber.textContent = '0';
    degreesSymbol.textContent = '°';
    degrees.append(degreesNumber, degreesSymbol);
    tempChartNumbers.push(degrees);
  }
  for (let i = 0; i < 24; i += 1) {
    const vector = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    vector.classList.add('temp-chart-vector');
    vector.setAttribute('r', 4);
    tempChartVectors.push(vector);
  }

  tempGroup.classList.add('hourly-chart-group');
  tempChart.classList.add('hourly-chart-temperature');

  tempGroup.append(tempChart, ...tempChartNumbers, ...tempChartVectors);

  return tempGroup;
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
    const apiResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&timezone=${timezone}&current_weather=true`);
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

/***/ "./src/modules/functions/barAdjust.js":
/*!********************************************!*\
  !*** ./src/modules/functions/barAdjust.js ***!
  \********************************************/
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

/***/ "./src/modules/functions/changeUnits.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/changeUnits.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeUnits)
/* harmony export */ });
/* harmony import */ var _valueAdjust__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valueAdjust */ "./src/modules/functions/valueAdjust.js");


function changeUnits(e) {
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

/***/ "./src/modules/functions/searchCity.js":
/*!*********************************************!*\
  !*** ./src/modules/functions/searchCity.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchCity)
/* harmony export */ });
/* harmony import */ var _dom_citiesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/citiesList */ "./src/modules/dom/citiesList.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch */ "./src/modules/fetch.js");
/* harmony import */ var _updateCurrentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateCurrentWeather */ "./src/modules/functions/updateCurrentWeather.js");
/* harmony import */ var _updateDailyWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateDailyWeather */ "./src/modules/functions/updateDailyWeather.js");
/* harmony import */ var _updateHourlyWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateHourlyWeather */ "./src/modules/functions/updateHourlyWeather.js");
/* harmony import */ var _weathercode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weathercode */ "./src/modules/functions/weathercode.js");







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
  const list = await (0,_dom_citiesList__WEBPACK_IMPORTED_MODULE_0__["default"])(search);
  searchInput.classList.remove('loading');
  loadingIcon.classList.add('hidden');
  cityList.replaceChildren();
  cityList.append(list);

  const domList = document.querySelectorAll('.search-result');
  domList.forEach((city) => {
    city.addEventListener('click', async () => {
      // disable and autocomplete input while fetching data
      searchInput.setAttribute('disabled', true);
      searchInput.value = city.dataset.location;
      searchInput.classList.add('loading');
      loadingIcon.classList.remove('hidden');

      cityList.replaceChildren();
      const { latitude } = city.dataset;
      const { longitude } = city.dataset;
      const weather = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(latitude, longitude);
      const currentHour = new Date().getHours();
      // data for current weather, then update
      const currentWeatherData = {
        city: city.dataset.location,
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
      (0,_updateCurrentWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(currentWeatherData);
      // data for daily weather, then update
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
      // data for daily weather for 24 hours of current day, then update
      (0,_updateDailyWeather__WEBPACK_IMPORTED_MODULE_3__["default"])(dailyWeatherData);
      const hourlyWeatherData = {
        hours: get24(weather.hourly.time),
        temps: get24(weather.hourly.temperature_2m),
        humidity: get24(weather.hourly.relativehumidity_2m),
        apparent: get24(weather.hourly.apparent_temperature),
        weathercode: get24(weather.hourly.weathercode),
        windspeed: get24(weather.hourly.windspeed_10m),
      };
      (0,_updateHourlyWeather__WEBPACK_IMPORTED_MODULE_4__["default"])(hourlyWeatherData);
      hideSearch();
    });
  });
}

function hideSearch() {
  const search = document.querySelector('.city-search');
  search.classList.add('hidden');
  // clear results after hiding
  (0,_dom_citiesList__WEBPACK_IMPORTED_MODULE_0__["default"])('');
}

function get24(array) {
  const newArray = [];
  for (let i = 0; i < 24; i += 1) {
    newArray.push(array[i]);
  }

  return newArray;
}


/***/ }),

/***/ "./src/modules/functions/unitConverter.js":
/*!************************************************!*\
  !*** ./src/modules/functions/unitConverter.js ***!
  \************************************************/
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

/***/ "./src/modules/functions/updateCurrentWeather.js":
/*!*******************************************************!*\
  !*** ./src/modules/functions/updateCurrentWeather.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCurrentWeather)
/* harmony export */ });
/* harmony import */ var _weatherIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherIcon */ "./src/modules/functions/weatherIcon.js");
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unitConverter */ "./src/modules/functions/unitConverter.js");
/* harmony import */ var _valueAdjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valueAdjust */ "./src/modules/functions/valueAdjust.js");
/* harmony import */ var _barAdjust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barAdjust */ "./src/modules/functions/barAdjust.js");





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

/***/ "./src/modules/functions/updateDailyWeather.js":
/*!*****************************************************!*\
  !*** ./src/modules/functions/updateDailyWeather.js ***!
  \*****************************************************/
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
/* harmony import */ var _weathercode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weathercode */ "./src/modules/functions/weathercode.js");
/* harmony import */ var _weatherIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherIcon */ "./src/modules/functions/weatherIcon.js");
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unitConverter */ "./src/modules/functions/unitConverter.js");





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
    const intensity = `,\n${weather.intensity}`;
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

/***/ "./src/modules/functions/updateHourlyWeather.js":
/*!******************************************************!*\
  !*** ./src/modules/functions/updateHourlyWeather.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateHourlyWeather)
/* harmony export */ });
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitConverter */ "./src/modules/functions/unitConverter.js");
/* harmony import */ var _valueAdjust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valueAdjust */ "./src/modules/functions/valueAdjust.js");



function updateHourlyWeather(data) {
  const parent = document.querySelector('.weather-hourly');
  const hours = 24;
  const marginX = 20;
  // vertical space reserved on pixels for hours and temp values
  const textSpace = 45;
  const width = parseInt(parent.clientWidth, 10) - marginX;
  const height = parseInt(parent.clientHeight, 10);
  const chartsHeightTemps = ((height * 80) / 100) - textSpace;
  // const chartsHeightWindHumidity = height - textSpace;
  const positionsX = [0];
  // set values for vector horizontal positions
  for (let i = 0; i < hours - 1; i += 1) {
    const currentValue = parseFloat(parseFloat(((width) / (hours - 1)) * (i + 1)).toFixed(1));
    positionsX.push(currentValue);
  }

  // position hour lines and base line for the chart
  positionChartLines(data.hours, marginX, positionsX, textSpace, width, height);
  // update current temperature line chart
  const chartTemp = document.querySelector('.hourly-chart-temperature');
  // detect empty draw on first load, place draw with values at 0
  if (!chartTemp.getAttribute('d')) {
    emptyChart(chartTemp, marginX, positionsX, chartsHeightTemps);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    updateTemperature(data.temps, marginX, positionsX, chartsHeightTemps, hours, textSpace);
  }, 50);
}

function rangePercent(min, max, target) {
  const percentRange = ((target - min) / (max - min)) * 100;
  return parseFloat(parseFloat(percentRange).toFixed(1));
}
function rangePercentToPixels(percent, height) {
  const toPixels = ((percent * height) / 100);
  // as the Y axis ascend going down, the graphic will be inverted
  // using the bottom of it's height as base for min temp
  return (toPixels * -1) + height;
}

function hideBetween(domElements) {
  domElements.forEach((element, i) => {
    if ((i + 2) % 3 !== 0) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });
}

function positionChartLines(hours, marginX, positionsX, textSpace, width, height) {
  const hourLines = document.querySelectorAll('.chart-line-hour');
  const baseLine = document.querySelector('.chart-line-base');
  const hoursTexts = document.querySelectorAll('.hours-chart-text');
  const hoursNumbers = document.querySelectorAll('.hours-chart-numbers');
  // position lines
  baseLine.setAttribute('x1', `${marginX / 2}`);
  baseLine.setAttribute('y1', `${height - (textSpace / 2)}`);
  baseLine.setAttribute('x2', `${width + (marginX / 2)}`);
  baseLine.setAttribute('y2', `${height - (textSpace / 2)}`);

  hourLines.forEach((line, i) => {
    const positionX = positionsX[i] + (marginX / 2);
    let lineLength = 4;
    if ((i + 2) % 3 === 0) lineLength = 10;
    line.setAttribute('x1', `${positionX}`);
    line.setAttribute('y1', `${height - (textSpace / 2)}`);
    line.setAttribute('x2', `${positionX}`);
    line.setAttribute('y2', `${height - (textSpace / 2) - lineLength}`);
  });
  // position hour text
  hoursTexts.forEach((text, i) => {
    const textMargin = 1;
    text.setAttribute('x', `${positionsX[i] + (marginX / 4)}`);
    text.setAttribute('y', `${height - textMargin}`);
  });
  hideBetween(hoursTexts);
  // add hour numbers
  hoursNumbers.forEach((hour, i) => {
    const thisour = new Date(hours[i]).getHours();
    hour.textContent = thisour;
  });
}

function updateTemperature(temps, marginX, positionsX, chartsHeightTemps, hours, textSpace) {
  const tempChart = document.querySelector('.hourly-chart-temperature');
  const tempChartVectors = document.querySelectorAll('.temp-chart-vector');
  const tempChartTexts = document.querySelectorAll('.temp-chart-text');
  const tempChartNumbers = document.querySelectorAll('.temp-chart-text .temperature-number');
  const positionsY = [];
  // set values for vector vertical positions
  for (let i = 0; i < hours; i += 1) {
    const currentValue = parseFloat(temps[i]);
    positionsY.push(currentValue);
  }
  const minValue = positionsY.reduce((min, current) => (min < current ? min : current));
  const maxValue = positionsY.reduce((max, current) => (max > current ? max : current));
  // turn values to pixels
  const positionsToPixels = positionsY.map((value) => {
    const percent = rangePercent(minValue, maxValue, value);
    return rangePercentToPixels(percent, chartsHeightTemps);
  });
  // use values on draw
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos + marginX / 2;
    const posY = positionsToPixels[i];
    drawTemp += ` ${lineCommand} ${posX} ${posY + (textSpace / 2)}`;
  });

  tempChart.setAttribute('d', drawTemp);

  // position the numbers on each vector
  tempChartTexts.forEach((text, i) => {
    text.setAttribute('x', positionsX[i]);
    text.setAttribute('y', positionsToPixels[i] + (textSpace / 4));
  });
  hideBetween(tempChartTexts);
  tempChartNumbers.forEach((number, i) => {
    (0,_valueAdjust__WEBPACK_IMPORTED_MODULE_1__["default"])(number, number.textContent, temps[i]);
    number.dataset.celsius = temps[i];
    number.dataset.fahrenheit = (0,_unitConverter__WEBPACK_IMPORTED_MODULE_0__.celsiusToFahrenheit)(temps[i]);
  });

  // position circle vectors
  tempChartVectors.forEach((vector, i) => {
    vector.setAttribute('cx', `${positionsX[i] + (marginX / 2)}`);
    vector.setAttribute('cy', `${positionsToPixels[i] + (textSpace / 2)}`);
  });
  hideBetween(tempChartVectors);
}

function emptyChart(domElement, marginX, positionsX, height) {
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos + marginX / 2;
    drawTemp += ` ${lineCommand} ${posX} ${height}`;
  });
  domElement.setAttribute('d', drawTemp);
}


/***/ }),

/***/ "./src/modules/functions/valueAdjust.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/valueAdjust.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ valueAdjust)
/* harmony export */ });
function valueAdjust(domElement, fromValue, toValue) {
  const quantity = 50;
  const isFloat = domElement.classList.contains('temperature-number') ? 1 : 0;
  for (let i = 0; i < 50; i += 1) {
    setTimeout(() => {
      const currentValue = parseFloat(fromValue) + (((toValue - fromValue) / quantity) * (i + 1));
      domElement.textContent = i === quantity - 1 ? toValue : currentValue.toFixed(isFloat);
    }, 25 * (i + 1));
  }
}


/***/ }),

/***/ "./src/modules/functions/weatherIcon.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/weatherIcon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherIcon)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/setMinutes/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getMinutes/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _media_images_weather_icon_parts_clouds_high_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/clouds-high.png */ "./src/media/images/weather-icon-parts/clouds-high.png");
/* harmony import */ var _media_images_weather_icon_parts_clouds_low_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/clouds-low.png */ "./src/media/images/weather-icon-parts/clouds-low.png");
/* harmony import */ var _media_images_weather_icon_parts_clouds_middle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/clouds-middle.png */ "./src/media/images/weather-icon-parts/clouds-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_drizzle_high_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/drizzle-high.png */ "./src/media/images/weather-icon-parts/drizzle-high.png");
/* harmony import */ var _media_images_weather_icon_parts_drizzle_low_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/drizzle-low.png */ "./src/media/images/weather-icon-parts/drizzle-low.png");
/* harmony import */ var _media_images_weather_icon_parts_drizzle_middle_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/drizzle-middle.png */ "./src/media/images/weather-icon-parts/drizzle-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_fog_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/fog.png */ "./src/media/images/weather-icon-parts/fog.png");
/* harmony import */ var _media_images_weather_icon_parts_hail_high_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/hail-high.png */ "./src/media/images/weather-icon-parts/hail-high.png");
/* harmony import */ var _media_images_weather_icon_parts_hail_low_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/hail-low.png */ "./src/media/images/weather-icon-parts/hail-low.png");
/* harmony import */ var _media_images_weather_icon_parts_ice_low_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/ice-low.png */ "./src/media/images/weather-icon-parts/ice-low.png");
/* harmony import */ var _media_images_weather_icon_parts_ice_middle_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/ice-middle.png */ "./src/media/images/weather-icon-parts/ice-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_ice_small_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/ice-small.png */ "./src/media/images/weather-icon-parts/ice-small.png");
/* harmony import */ var _media_images_weather_icon_parts_moon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/moon.png */ "./src/media/images/weather-icon-parts/moon.png");
/* harmony import */ var _media_images_weather_icon_parts_moon_clear_sky_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/moon-clear-sky.png */ "./src/media/images/weather-icon-parts/moon-clear-sky.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_big_high_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/rain-big-high.png */ "./src/media/images/weather-icon-parts/rain-big-high.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_big_low_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/rain-big-low.png */ "./src/media/images/weather-icon-parts/rain-big-low.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_big_middle_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/rain-big-middle.png */ "./src/media/images/weather-icon-parts/rain-big-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_high_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/rain-high.png */ "./src/media/images/weather-icon-parts/rain-high.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_low_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/rain-low.png */ "./src/media/images/weather-icon-parts/rain-low.png");
/* harmony import */ var _media_images_weather_icon_parts_rain_middle_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/rain-middle.png */ "./src/media/images/weather-icon-parts/rain-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_big_high_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/snow-big-high.png */ "./src/media/images/weather-icon-parts/snow-big-high.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_big_low_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/snow-big-low.png */ "./src/media/images/weather-icon-parts/snow-big-low.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_high_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/snow-high.png */ "./src/media/images/weather-icon-parts/snow-high.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_low_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/snow-low.png */ "./src/media/images/weather-icon-parts/snow-low.png");
/* harmony import */ var _media_images_weather_icon_parts_snow_middle_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/snow-middle.png */ "./src/media/images/weather-icon-parts/snow-middle.png");
/* harmony import */ var _media_images_weather_icon_parts_sun_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/sun.png */ "./src/media/images/weather-icon-parts/sun.png");
/* harmony import */ var _media_images_weather_icon_parts_sun_clear_sky_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/sun-clear-sky.png */ "./src/media/images/weather-icon-parts/sun-clear-sky.png");
/* harmony import */ var _media_images_weather_icon_parts_thunder_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../media/images/weather-icon-parts/thunder.png */ "./src/media/images/weather-icon-parts/thunder.png");






























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

/***/ "./src/modules/functions/weathercode.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/weathercode.js ***!
  \**********************************************/
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

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadUi)
/* harmony export */ });
/* harmony import */ var _dom_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/search */ "./src/modules/dom/search.js");
/* harmony import */ var _dom_weatherCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/weatherCurrent */ "./src/modules/dom/weatherCurrent.js");
/* harmony import */ var _dom_weatherDailyHourly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/weatherDailyHourly */ "./src/modules/dom/weatherDailyHourly.js");




function loadUi() {
  const body = document.querySelector('body');
  body.append(
    (0,_dom_search__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    (0,_dom_weatherCurrent__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    (0,_dom_weatherDailyHourly__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOERBQVc7QUFDbEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDhEQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFVO0FBQ2hCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxrQztBQUNnQjtBQUNRO0FBQzFEO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsSUFBSSx1REFBTTtBQUNWLElBQUksK0RBQWM7QUFDbEIsSUFBSSxtRUFBa0I7QUFDdEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiw4QkFBOEI7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsZ0NBQWdDO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zZWFyY2guY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJDdXJyZW50LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5SG91cmx5LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckhvdXJseS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0SG91cnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldE1pbnV0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zZXRNaW51dGVzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3NlYXJjaC5jc3M/MDM4MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJDdXJyZW50LmNzcz8wNzY3Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHkuY3NzPzUxNzQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseUhvdXJseS5jc3M/ZjE3OCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckhvdXJseS5jc3M/ODBmZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS9jaXRpZXNMaXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tL2RhaWx5Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20vd2VhdGhlckN1cnJlbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20vd2VhdGhlckRhaWx5SG91cmx5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tL3dlYXRoZXJIb3VybHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy9iYXJBZGp1c3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMvY2hhbmdlVW5pdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMvc2VhcmNoQ2l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy91bml0Q29udmVydGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL3VwZGF0ZUN1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL3VwZGF0ZURhaWx5V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy91cGRhdGVIb3VybHlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL3ZhbHVlQWRqdXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL3dlYXRoZXJJY29uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL3dlYXRoZXJjb2RlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY291bnRyeS1jb2RlLWVtb2ppL2xpYi9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9zZWFyY2gtbWFnbmlmaWVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tcmFkaW91czogOHB4O1xcclxcbiAgLS1mbGFnLXNpemU6IDIuMjVyZW07XFxyXFxuICAtLW1heC1mbGFnLXNpemU6IDIuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXNlYXJjaCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XFxyXFxuICB3aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYW5pbWF0aW9uOiBzZWFyY2gtcmV2ZWFsIDFzIGN1YmljLWJlemllciguMjIsLjYxLC4zNiwxKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzZWFyY2gtcmV2ZWFsIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxNTAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogaW5wdXQgKi9cXHJcXG5cXHJcXG4uc2VhcmNoLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0IHtcXHJcXG4gIC0tbWFnbmlmaWVyLWZvY3VzLXNpemU6IDIuNXJlbTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1tYWduaWZpZXItZm9jdXMtc2l6ZSkgKyAzcHgpO1xcclxcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoLjI1cmVtICsgdmFyKC0tcmFkaW91cykpO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAuNzVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIHZhcigtLXJhZGlvdXMpIDAgdmFyKC0tcmFkaW91cyk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMzAwbXMsIGJhY2tncm91bmQtcG9zaXRpb24gMzAwbXM7XFxyXFxufVxcclxcbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbn1cXHJcXG4uc2VhcmNoLWlucHV0LmxvYWRpbmcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbG9jYXRpb25zIGxpc3QgKi9cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGModmFyKC0tcmFkaW91cykgKiAtMSkpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQsXFxyXFxuLnNlYXJjaC1yZXN1bHQtZW1wdHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICogMS4yNSkgMWZyO1xcclxcbiAgLyogaGVpZ2h0OiA2NXB4OyAqL1xcclxcbiAgbWluLWhlaWdodDogY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSArIDIwcHgpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpob3ZlcixcXHJcXG4uc2VhcmNoLXJlc3VsdDpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICogMS4yNSkgMCA1cHggI2VlZTtcXHJcXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6bGFzdC1jaGlsZCxcXHJcXG4uc2VhcmNoLXJlc3VsdC1lbXB0eSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCB2YXIoLS1yYWRpb3VzKTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQgcDpub3QoLmNvdW50cnktZmxhZykge1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRyeS1mbGFnLFxcclxcbi5jb3VudHJ5LWZsYWctbm9uZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZsYWcge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mbGFnLXNpemUpO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpob3ZlciAuY291bnRyeS1mbGFnLFxcclxcbi5zZWFyY2gtcmVzdWx0OmZvY3VzIC5jb3VudHJ5LWZsYWcge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tYXgtZmxhZy1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbG9hZGluZyBpY29uICovXFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcmlnaHQ6IDJweDtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiBkaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgxKSB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjNTU1O1xcclxcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGJvcmRlcjogNnB4IHNvbGlkICM3Nzc7XFxyXFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgZWFzZS1pbiByZXZlcnNlIGluZmluaXRlO1xcclxcbiAgc2NhbGU6IDgzJTtcXHJcXG59XFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgzKSB7XFxyXFxuICBib3JkZXI6IDhweCBzb2xpZCAjOTk5O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IGxvYWRpbmctaWNvbiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG4gIHNjYWxlOiA2MiU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9hZGluZy1pY29uIHtcXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zZWFyY2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGdDQUFnQztFQUNsQztBQUNGOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIseURBQWlFO0VBQ2pFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCw2Q0FBNkM7RUFDN0Msb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw0REFBNEQ7RUFDNUQsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLDhEQUE4RDtFQUM5RCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBOztFQUVFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLCtCQUErQjtBQUNqQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLDBDQUEwQztBQUM1QztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxtREFBbUQ7RUFDbkQsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLCtDQUErQztFQUMvQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tcmFkaW91czogOHB4O1xcclxcbiAgLS1mbGFnLXNpemU6IDIuMjVyZW07XFxyXFxuICAtLW1heC1mbGFnLXNpemU6IDIuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXNlYXJjaCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XFxyXFxuICB3aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYW5pbWF0aW9uOiBzZWFyY2gtcmV2ZWFsIDFzIGN1YmljLWJlemllciguMjIsLjYxLC4zNiwxKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzZWFyY2gtcmV2ZWFsIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxNTAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogaW5wdXQgKi9cXHJcXG5cXHJcXG4uc2VhcmNoLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0IHtcXHJcXG4gIC0tbWFnbmlmaWVyLWZvY3VzLXNpemU6IDIuNXJlbTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3NlYXJjaC1tYWduaWZpZXIuc3ZnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tbWFnbmlmaWVyLWZvY3VzLXNpemUpICsgM3B4KTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKC4yNXJlbSArIHZhcigtLXJhZGlvdXMpKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogLjc1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1yYWRpb3VzKSAwIHZhcigtLXJhZGlvdXMpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDMwMG1zLCBiYWNrZ3JvdW5kLXBvc2l0aW9uIDMwMG1zO1xcclxcbn1cXHJcXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXHJcXG59XFxyXFxuLnNlYXJjaC1pbnB1dC5sb2FkaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGxvY2F0aW9ucyBsaXN0ICovXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLXJhZGlvdXMpICogLTEpKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNTUwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LFxcclxcbi5zZWFyY2gtcmVzdWx0LWVtcHR5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSAqIDEuMjUpIDFmcjtcXHJcXG4gIC8qIGhlaWdodDogNjVweDsgKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tbWF4LWZsYWctc2l6ZSkgKyAyMHB4KTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIsXFxyXFxuLnNlYXJjaC1yZXN1bHQ6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSAqIDEuMjUpIDAgNXB4ICNlZWU7XFxyXFxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0Omxhc3QtY2hpbGQsXFxyXFxuLnNlYXJjaC1yZXN1bHQtZW1wdHkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgdmFyKC0tcmFkaW91cyk7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0IHA6bm90KC5jb3VudHJ5LWZsYWcpIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50cnktZmxhZyxcXHJcXG4uY291bnRyeS1mbGFnLW5vbmUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uY291bnRyeS1mbGFnIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZmxhZy1zaXplKTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIgLmNvdW50cnktZmxhZyxcXHJcXG4uc2VhcmNoLXJlc3VsdDpmb2N1cyAuY291bnRyeS1mbGFnIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWF4LWZsYWctc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIGxvYWRpbmcgaWNvbiAqL1xcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHJpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMSkge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzU1NTtcXHJcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgyKSB7XFxyXFxuICBib3JkZXI6IDZweCBzb2xpZCAjNzc3O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGVhc2UtaW4gcmV2ZXJzZSBpbmZpbml0ZTtcXHJcXG4gIHNjYWxlOiA4MyU7XFxyXFxufVxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMykge1xcclxcbiAgYm9yZGVyOiA4cHggc29saWQgIzk5OTtcXHJcXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxuICBzY2FsZTogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmctaWNvbiB7XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tdHh0LWNvbG9yLTE6ICMwMDA7XFxyXFxuICAtLXR4dC1jb2xvci0yOiAjMjIyO1xcclxcbiAgLS10eHQtY29sb3ItMzogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgZ2VuZXJhbCB1c2UgKi9cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnZpc2libGUge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXR4dC1jb2xvci0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sb3ItMjogIzIyMjtcXHJcXG4gIC0tdHh0LWNvbG9yLTM6ICMzMzM7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGdlbmVyYWwgdXNlICovXFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvd2luZC1jb21wYXNzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tZ2F1Z2UtYm9yZGVyLXdpZHRoOiA3cHg7XFxyXFxuICAtLXVuaXQtdW5kZXJsaW5lLXdpZHRoOiAzcHg7XFxyXFxuICAtLWNvbXBhc3MtY29sb3I6IHJnYmEoNTAsIDUwLCAyNTUsIC4xMCk7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQge1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiA0MzBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY2l0eSBjaXR5IGNpdHlcXFwiXFxyXFxuICAgIFxcXCJpY29uIHRlbXAgdGVtcFxcXCJcXHJcXG4gICAgXFxcImljb24gaHVtaSB3aW5kXFxcIlxcclxcbiAgICBcXFwiY29kZSBodW1pIHdpbmRcXFwiO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudCBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2l0eSBuYW1lICovXFxyXFxuXFxyXFxuLmNpdHktZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogY2l0eTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktcGFyYSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgcGFkZGluZzogMCAuMjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpY29uICovXFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudC1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgLjI1KSk7XFxyXFxufVxcclxcblxcclxcbi8qIHdlYXRoZXJjb2RlICovXFxyXFxuXFxyXFxuLndlYXRoZXJjb2RlLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGNvZGU7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlcmNvZGUtcGFyYSB7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHRlbXBlcmF0dXJlICovXFxyXFxuXFxyXFxuLnRlbXAtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY3VyciB1bml0XFxcIlxcclxcbiAgICBcXFwiZmVlbCBmZWVsXFxcIjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWN1cnJlbnQge1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBodW1pZGl0eSAqL1xcclxcblxcclxcbi5odW1pZGl0eS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBodW1pO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS1nYXVnZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgc29saWQgcmdiYSg1MCwgNTAsIDI1NSwgLjI1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS1nYXVnZS1wZXJjZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ2F1Z2UtYm9yZGVyLXdpZHRoKSBzb2xpZCBibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaW5zZXQ6IGNhbGModmFyKC0tZ2F1Z2UtYm9yZGVyLXdpZHRoKSAqIC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5IHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aW5kICovXFxyXFxuXFxyXFxuLndpbmQtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogd2luZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1nYXVnZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtc3BlZWQge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtY29tcGFzcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQ6XFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0LFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgNjAlLCB2YXIoLS1jb21wYXNzLWNvbG9yKSA2MSUsIHZhcigtLWNvbXBhc3MtY29sb3IpIDY5JSwgdHJhbnNwYXJlbnQgNzAlKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtZGlyZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcm90YXRlOiAwZGVnO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDYwJSwgcmdiYSgwLCAwLCAyNTUsIC41KSA2MCUpO1xcclxcbiAgbWFzay1pbWFnZTogY29uaWMtZ3JhZGllbnQocmVkIDUlLCB0cmFuc3BhcmVudCA1JSwgdHJhbnNwYXJlbnQgOTUlLCByZWQgOTUlKTtcXHJcXG4gIHRyYW5zaXRpb246IHJvdGF0ZSBlYXNlLW91dCAycztcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtdGl0bGUtZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgdW5pdHMgKi9cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdCB7XFxyXFxuICBncmlkLWFyZWE6IHVuaXQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmx1ZSB2YXIoLS11bml0LXVuZGVybGluZS13aWR0aCksIHRyYW5zcGFyZW50IHZhcigtLXVuaXQtdW5kZXJsaW5lLXdpZHRoKSk7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjpiZWZvcmUsXFxyXFxuLmdhdWdlLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIHRyYW5zaXRpb246IHRvcCAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjphZnRlciB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIHRvcDogMTAwJVxcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1hcHBhcmVudC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBmZWVsO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZS11bml0LWFwcGFyZW50IHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQudGVtcGVyYXR1cmUtdW5pdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdC50ZW1wZXJhdHVyZS11bml0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtc3BlZWQtdW5pdHtcXHJcXG4gIHdpZHRoOiAyLjByZW07XFxyXFxuICBoZWlnaHQ6IDEuMTByZW07XFxyXFxuICBmb250LXNpemU6IC45cmVtO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdC53aW5kLXNwZWVkLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwibXBoXFxcIjtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQud2luZC1zcGVlZC11bml0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwia20vaFxcXCI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlckN1cnJlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDOzs7O29CQUlrQjtFQUNsQixRQUFRO0VBQ1IsMENBQTBDO0VBQzFDLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsbURBQW1EO0FBQ3JEOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCOztlQUVhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw4REFBOEQ7RUFDOUQsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1I7O3lHQUV1RztFQUN2RyxxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHFFQUFxRTtFQUNyRSw0RUFBNEU7RUFDNUUsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw4R0FBOEc7QUFDaEg7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsTUFBTTtBQUNSO0FBQ0E7RUFDRSxNQUFNO0FBQ1I7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tZ2F1Z2UtYm9yZGVyLXdpZHRoOiA3cHg7XFxyXFxuICAtLXVuaXQtdW5kZXJsaW5lLXdpZHRoOiAzcHg7XFxyXFxuICAtLWNvbXBhc3MtY29sb3I6IHJnYmEoNTAsIDUwLCAyNTUsIC4xMCk7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQge1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiA0MzBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY2l0eSBjaXR5IGNpdHlcXFwiXFxyXFxuICAgIFxcXCJpY29uIHRlbXAgdGVtcFxcXCJcXHJcXG4gICAgXFxcImljb24gaHVtaSB3aW5kXFxcIlxcclxcbiAgICBcXFwiY29kZSBodW1pIHdpbmRcXFwiO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudCBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2l0eSBuYW1lICovXFxyXFxuXFxyXFxuLmNpdHktZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogY2l0eTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktcGFyYSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgcGFkZGluZzogMCAuMjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpY29uICovXFxyXFxuXFxyXFxuLndlYXRoZXItY3VycmVudC1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgLjI1KSk7XFxyXFxufVxcclxcblxcclxcbi8qIHdlYXRoZXJjb2RlICovXFxyXFxuXFxyXFxuLndlYXRoZXJjb2RlLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGNvZGU7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlcmNvZGUtcGFyYSB7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHRlbXBlcmF0dXJlICovXFxyXFxuXFxyXFxuLnRlbXAtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY3VyciB1bml0XFxcIlxcclxcbiAgICBcXFwiZmVlbCBmZWVsXFxcIjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWN1cnJlbnQge1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBodW1pZGl0eSAqL1xcclxcblxcclxcbi5odW1pZGl0eS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBodW1pO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS1nYXVnZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgc29saWQgcmdiYSg1MCwgNTAsIDI1NSwgLjI1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS1nYXVnZS1wZXJjZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ2F1Z2UtYm9yZGVyLXdpZHRoKSBzb2xpZCBibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaW5zZXQ6IGNhbGModmFyKC0tZ2F1Z2UtYm9yZGVyLXdpZHRoKSAqIC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5IHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aW5kICovXFxyXFxuXFxyXFxuLndpbmQtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogd2luZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZC1nYXVnZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtc3BlZWQge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtY29tcGFzcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQ6XFxyXFxuICAgIHVybCguLi9tZWRpYS9pbWFnZXMvd2luZC1jb21wYXNzLnN2Zykgbm8tcmVwZWF0LFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgNjAlLCB2YXIoLS1jb21wYXNzLWNvbG9yKSA2MSUsIHZhcigtLWNvbXBhc3MtY29sb3IpIDY5JSwgdHJhbnNwYXJlbnQgNzAlKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtZGlyZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcm90YXRlOiAwZGVnO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDYwJSwgcmdiYSgwLCAwLCAyNTUsIC41KSA2MCUpO1xcclxcbiAgbWFzay1pbWFnZTogY29uaWMtZ3JhZGllbnQocmVkIDUlLCB0cmFuc3BhcmVudCA1JSwgdHJhbnNwYXJlbnQgOTUlLCByZWQgOTUlKTtcXHJcXG4gIHRyYW5zaXRpb246IHJvdGF0ZSBlYXNlLW91dCAycztcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtdGl0bGUtZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgdW5pdHMgKi9cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdCB7XFxyXFxuICBncmlkLWFyZWE6IHVuaXQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmx1ZSB2YXIoLS11bml0LXVuZGVybGluZS13aWR0aCksIHRyYW5zcGFyZW50IHZhcigtLXVuaXQtdW5kZXJsaW5lLXdpZHRoKSk7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjpiZWZvcmUsXFxyXFxuLmdhdWdlLXVuaXQ6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIHRyYW5zaXRpb246IHRvcCAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjphZnRlciB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIHRvcDogMTAwJVxcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1hcHBhcmVudC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBmZWVsO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZS11bml0LWFwcGFyZW50IHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQudGVtcGVyYXR1cmUtdW5pdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdC50ZW1wZXJhdHVyZS11bml0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtc3BlZWQtdW5pdHtcXHJcXG4gIHdpZHRoOiAyLjByZW07XFxyXFxuICBoZWlnaHQ6IDEuMTByZW07XFxyXFxuICBmb250LXNpemU6IC45cmVtO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdC53aW5kLXNwZWVkLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwibXBoXFxcIjtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQud2luZC1zcGVlZC11bml0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwia20vaFxcXCI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvcHJlY2lwaXRhdGlvbnMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvd2luZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS9zdW5yaXNlLXN1bnNldC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS91di1pbmRleC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2VhdGhlci1kYWlseSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWRhaWx5ICoge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktY2FyZCB7XFxyXFxuICB3aWR0aDogMTY1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY2ZWE4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiZGFpbHktd2VhdGhlciAgZGFpbHktd2VhdGhlclxcXCJcXHJcXG4gICAgXFxcInByZWNpcGl0YXRpb25zIHdpbmQtc3BlZWQgICBcXFwiXFxyXFxuICAgIFxcXCJzdW5yaXNlLXN1bnNldCB1di1pbmRleCAgICAgXFxcIjtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluLCB3ZWF0aGVyY29kZSBhbmQgdGVtcGVyYXR1cmVzICovXFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBkYWlseS13ZWF0aGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY3VycmVudC1kYXkgICAgICBjdXJyZW50LWRheSAgICAgXFxcIlxcclxcbiAgICBcXFwiZGF5LXdlYXRoZXItaWNvbiBkYXktd2VhdGhlci1pY29uXFxcIlxcclxcbiAgICBcXFwibWF4LXRlbXAgICAgICAgICBtaW4tdGVtcCAgICAgICAgXFxcIlxcclxcbiAgICBcXFwid2VhdGhlci1kZXNjciAgICB3ZWF0aGVyLWRlc2NyICAgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1kYXkge1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LWRheTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkYXktd2VhdGhlci1pY29uO1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1tYXgtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogbWF4LXRlbXA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1tYXgtdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogMS43NXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogbWF4LXRlbXAtdW5pdDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4tZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogbWluLXRlbXA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWluIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4tdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogbWluLXRlbXAtdW5pdDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IHdlYXRoZXItZGVzY3I7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcmVjaXBpdGF0aW9ucyAqL1xcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucyB7XFxyXFxuICBncmlkLWFyZWE6IHByZWNpcGl0YXRpb25zO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBxdWFudGl0eVxcXCJcXHJcXG4gICAgXFxcImljb24gaG91cnMgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucy1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5IHtcXHJcXG4gIGdyaWQtYXJlYTogcXVhbnRpdHk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMge1xcclxcbiAgZ3JpZC1hcmVhOiBob3VycztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHdpbmQgc3BlZWQgKi9cXHJcXG5cXHJcXG4uZGFpbHktd2luZCB7XFxyXFxuICBncmlkLWFyZWE6IHdpbmQtc3BlZWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHNwZWVkXFxcIlxcclxcbiAgICBcXFwiaWNvbiB1bml0IFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2luZC1zcGVlZCB7XFxyXFxuICBncmlkLWFyZWE6IHNwZWVkO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtc3BlZWQtdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICBncmlkLWFyZWE6IHVuaXQ7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMi41KTtcXHJcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMS4yNSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIHN1bnJpc2UgYW5kIHN1bnNldCAqL1xcclxcblxcclxcbi5kYWlseS1zdW5yaXNlLXN1bnNldCB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnJpc2Utc3Vuc2V0O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBzdW5yaXNlIFxcXCJcXHJcXG4gICAgXFxcImljb24gc3Vuc2V0XFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDBweCAwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktc3VucmlzZS1zdW5zZXQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktc3VucmlzZSB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnJpc2U7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1zdW5zZXQge1xcclxcbiAgZ3JpZC1hcmVhOiBzdW5zZXQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFVWIGluZGV4ICovXFxyXFxuXFxyXFxuLmRhaWx5LXV2IHtcXHJcXG4gIGdyaWQtYXJlYTogdXYtaW5kZXg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIGluZGV4IFxcXCJcXHJcXG4gICAgXFxcImljb24gdXYgICAgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDBweCAwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdXYtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdXYtaW5kZXgge1xcclxcbiAgZ3JpZC1hcmVhOiBpbmRleDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di10ZXh0IHtcXHJcXG4gIGdyaWQtYXJlYTogdXY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsZ0NBQWdDO0VBQ2hDOzs7a0NBR2dDO0VBQ2hD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XCJzb3VyY2VzQ29udGVudFwiOltcIi53ZWF0aGVyLWRhaWx5IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZGFpbHkgKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxNjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NjZlYTg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJkYWlseS13ZWF0aGVyICBkYWlseS13ZWF0aGVyXFxcIlxcclxcbiAgICBcXFwicHJlY2lwaXRhdGlvbnMgd2luZC1zcGVlZCAgIFxcXCJcXHJcXG4gICAgXFxcInN1bnJpc2Utc3Vuc2V0IHV2LWluZGV4ICAgICBcXFwiO1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4sIHdlYXRoZXJjb2RlIGFuZCB0ZW1wZXJhdHVyZXMgKi9cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlciB7XFxyXFxuICBncmlkLWFyZWE6IGRhaWx5LXdlYXRoZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjdXJyZW50LWRheSAgICAgIGN1cnJlbnQtZGF5ICAgICBcXFwiXFxyXFxuICAgIFxcXCJkYXktd2VhdGhlci1pY29uIGRheS13ZWF0aGVyLWljb25cXFwiXFxyXFxuICAgIFxcXCJtYXgtdGVtcCAgICAgICAgIG1pbi10ZW1wICAgICAgICBcXFwiXFxyXFxuICAgIFxcXCJ3ZWF0aGVyLWRlc2NyICAgIHdlYXRoZXItZGVzY3IgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWRheSB7XFxyXFxuICBncmlkLWFyZWE6IGN1cnJlbnQtZGF5O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXItaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRheS13ZWF0aGVyLWljb247XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWF4IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heC11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxLjc1cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtYXgtdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDNweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbi11bml0IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZ3JpZC1hcmVhOiBtaW4tdGVtcC11bml0O1xcclxcbiAgd2lkdGg6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogd2VhdGhlci1kZXNjcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi8qIHByZWNpcGl0YXRpb25zICovXFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zIHtcXHJcXG4gIGdyaWQtYXJlYTogcHJlY2lwaXRhdGlvbnM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHF1YW50aXR5XFxcIlxcclxcbiAgICBcXFwiaWNvbiBob3VycyAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvcHJlY2lwaXRhdGlvbnMucG5nKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5IHtcXHJcXG4gIGdyaWQtYXJlYTogcXVhbnRpdHk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMge1xcclxcbiAgZ3JpZC1hcmVhOiBob3VycztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHdpbmQgc3BlZWQgKi9cXHJcXG5cXHJcXG4uZGFpbHktd2luZCB7XFxyXFxuICBncmlkLWFyZWE6IHdpbmQtc3BlZWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJpY29uIHNwZWVkXFxcIlxcclxcbiAgICBcXFwiaWNvbiB1bml0IFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS93aW5kLnBuZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2luZC1zcGVlZCB7XFxyXFxuICBncmlkLWFyZWE6IHNwZWVkO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtc3BlZWQtdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICBncmlkLWFyZWE6IHVuaXQ7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMi41KTtcXHJcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb250LXNpemUpICogMS4yNSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIHN1bnJpc2UgYW5kIHN1bnNldCAqL1xcclxcblxcclxcbi5kYWlseS1zdW5yaXNlLXN1bnNldCB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnJpc2Utc3Vuc2V0O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBzdW5yaXNlIFxcXCJcXHJcXG4gICAgXFxcImljb24gc3Vuc2V0XFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDBweCAwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktc3VucmlzZS1zdW5zZXQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1kYWlseS9zdW5yaXNlLXN1bnNldC5wbmcpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Uge1xcclxcbiAgZ3JpZC1hcmVhOiBzdW5yaXNlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktc3Vuc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogc3Vuc2V0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVViBpbmRleCAqL1xcclxcblxcclxcbi5kYWlseS11diB7XFxyXFxuICBncmlkLWFyZWE6IHV2LWluZGV4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBpbmRleCBcXFwiXFxyXFxuICAgIFxcXCJpY29uIHV2ICAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvdXYtaW5kZXgucG5nKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pbmRleCB7XFxyXFxuICBncmlkLWFyZWE6IGluZGV4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LXRleHQge1xcclxcbiAgZ3JpZC1hcmVhOiB1djtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53ZWF0aGVyLWRhaWx5LWhvdXJseSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlci1kYWlseS1ob3VybHkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53ZWF0aGVyLWhvdXJseSB7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJ0LWxpbmUtaG91cixcXHJcXG4uY2hhcnQtbGluZS1iYXNlIHtcXHJcXG4gIHN0cm9rZTogZ3JheTtcXHJcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0LXRlbXBlcmF0dXJlIHtcXHJcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcclxcbiAgc3Ryb2tlOiByZWQ7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXHJcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWNoYXJ0LXZlY3RvciB7XFxyXFxuICBmaWxsOiBncmVlbjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93ZWF0aGVySG91cmx5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlci1ob3VybHkge1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1saW5lLWhvdXIsXFxyXFxuLmNoYXJ0LWxpbmUtYmFzZSB7XFxyXFxuICBzdHJva2U6IGdyYXk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydC10ZW1wZXJhdHVyZSB7XFxyXFxuICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG4gIHN0cm9rZTogcmVkO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jaGFydC12ZWN0b3Ige1xcclxcbiAgZmlsbDogZ3JlZW47XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERhdGVcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgbW9udGggaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERhdGUobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAyOVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERhdGUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICByZXR1cm4gZGF5T2ZNb250aDtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHswfDF8MnwzfDR8NXw2fSB0aGUgZGF5IG9mIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHdlZWsgaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgcmV0dXJuIGRheTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldEhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGhvdXJzIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBob3VycyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBob3Vyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgaG91cnMgb2YgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGdldEhvdXJzKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUpKVxuICogLy89PiAxMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhvdXJzKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICByZXR1cm4gaG91cnM7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRNaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbWludXRlcyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbWludXRlcyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBtaW51dGVzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSBtaW51dGVzIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBnZXRNaW51dGVzKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUsIDUpKVxuICogLy89PiA0NVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1pbnV0ZXMoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICByZXR1cm4gbWludXRlcztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FmdGVyKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQmVmb3JlKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzZXRNaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbnV0ZXMgLSB0aGUgbWludXRlcyBvZiB0aGUgbmV3IGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWludXRlcyBzZXRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU2V0IDQ1IG1pbnV0ZXMgdG8gMSBTZXB0ZW1iZXIgMjAxNCAxMTozMDo0MDpcbiAqIGNvbnN0IHJlc3VsdCA9IHNldE1pbnV0ZXMobmV3IERhdGUoMjAxNCwgOCwgMSwgMTEsIDMwLCA0MCksIDQ1KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMTE6NDU6NDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRNaW51dGVzKGRpcnR5RGF0ZSwgZGlydHlNaW51dGVzKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbWludXRlcyA9IHRvSW50ZWdlcihkaXJ0eU1pbnV0ZXMpO1xuICBkYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyQ3VycmVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXJDdXJyZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXJEYWlseUhvdXJseS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXJEYWlseUhvdXJseS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckhvdXJseS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXJIb3VybHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9zZWFyY2guY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWF0aGVyQ3VycmVudC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3dlYXRoZXJEYWlseUhvdXJseS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3dlYXRoZXJEYWlseS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3dlYXRoZXJIb3VybHkuY3NzJztcclxuaW1wb3J0IGxvYWRVaSBmcm9tICcuL21vZHVsZXMvdWknO1xyXG5cclxubG9hZFVpKCk7XHJcbiIsImltcG9ydCB7IGNvdW50cnlDb2RlRW1vamkgfSBmcm9tICdjb3VudHJ5LWNvZGUtZW1vamknO1xyXG5pbXBvcnQgeyBmZXRjaEdlb2NvZGluZyB9IGZyb20gJy4uL2ZldGNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRvbUNpdGllc0xpc3Qoc2VhcmNoKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hHZW9jb2Rpbmcoc2VhcmNoKTtcclxuICBjb25zdCBjaXRpZXMgPSByZXNwb25zZS5yZXN1bHRzO1xyXG5cclxuICBpZiAoIWNpdGllcykge1xyXG4gICAgY29uc3Qgbm9SZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBub0ZsYWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG5vUmVzdWx0cy5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0LWVtcHR5Jyk7XHJcbiAgICBub0ZsYWdJY29uLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktZmxhZy1ub25lJyk7XHJcbiAgICBub0ZsYWdJY29uLmlubmVyVGV4dCA9ICfimqDvuI8nO1xyXG4gICAgcGFyYS5pbm5lclRleHQgPSAnTm8gbG9jYXRpb24gZm91bmQuJztcclxuXHJcbiAgICBub1Jlc3VsdHMuYXBwZW5kKG5vRmxhZ0ljb24sIHBhcmEpO1xyXG5cclxuICAgIHJldHVybiBub1Jlc3VsdHM7XHJcbiAgfVxyXG5cclxuICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBmbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGAke2NpdHkubmFtZX0sICR7Y2l0eS5hZG1pbjMgPyBgJHtjaXR5LmFkbWluM30sIGAgOiAnJ30ke2NpdHkuYWRtaW4yID8gYCR7Y2l0eS5hZG1pbjJ9LCBgIDogJyd9JHtjaXR5LmFkbWluMSA/IGAke2NpdHkuYWRtaW4xfSwgYCA6ICcnfSR7Y2l0eS5jb3VudHJ5fWA7XHJcblxyXG4gICAgc2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1yZXN1bHQnKTtcclxuICAgIHNlYXJjaFJlc3VsdC5kYXRhc2V0LmxhdGl0dWRlID0gY2l0eS5sYXRpdHVkZTtcclxuICAgIHNlYXJjaFJlc3VsdC5kYXRhc2V0LmxvbmdpdHVkZSA9IGNpdHkubG9uZ2l0dWRlO1xyXG4gICAgc2VhcmNoUmVzdWx0LmRhdGFzZXQubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIGZsYWcuY2xhc3NMaXN0LmFkZCgnY291bnRyeS1mbGFnJyk7XHJcbiAgICBmbGFnLmlubmVyVGV4dCA9IGNvdW50cnlDb2RlRW1vamkoY2l0eS5jb3VudHJ5X2NvZGUpO1xyXG4gICAgcGxhY2UuaW5uZXJUZXh0ID0gbG9jYXRpb247XHJcblxyXG4gICAgc2VhcmNoUmVzdWx0LmFwcGVuZChmbGFnLCBwbGFjZSk7XHJcbiAgICBsaXN0LmFwcGVuZChzZWFyY2hSZXN1bHQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbGlzdDtcclxufVxyXG4iLCJpbXBvcnQgY2hhbmdlVW5pdHMgZnJvbSAnLi4vZnVuY3Rpb25zL2NoYW5nZVVuaXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhaWx5Q2FyZCgpIHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdkYWlseS1jYXJkJyk7XHJcblxyXG4gIGNhcmQuYXBwZW5kKFxyXG4gICAgd2VhdGhlckRpdigpLFxyXG4gICAgcHJlY2lwaXRhdGlvbnMoKSxcclxuICAgIHdpbmQoKSxcclxuICAgIHN1bnJpc2VTdW5zZXQoKSxcclxuICAgIHV2SW5kZXgoKSxcclxuICApO1xyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gd2VhdGhlckRpdigpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0ZW1wTWF4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB0ZW1wTWF4VW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgdGVtcE1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRlbXBNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGVtcE1pblVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdlYXRoZXInKTtcclxuICBkYXkuY2xhc3NMaXN0LmFkZCgnZGFpbHktZGF5Jyk7XHJcbiAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jdXJyZW50LWljb24nLCAnZGFpbHktd2VhdGhlci1pY29uJyk7XHJcbiAgdGVtcE1heERpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1heC1kaXYnKTtcclxuICB0ZW1wTWF4LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXRlbXAtbWF4JywgJ3RlbXBlcmF0dXJlLW51bWJlcicpO1xyXG4gIHRlbXBNYXhVbml0LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXRlbXAtbWF4LXVuaXQnLCAnZ2F1Z2UtdW5pdCcsICd0ZW1wZXJhdHVyZS11bml0Jyk7XHJcbiAgdGVtcE1heFVuaXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgdGVtcE1pbkRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1pbi1kaXYnKTtcclxuICB0ZW1wTWluLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXRlbXAtbWluJywgJ3RlbXBlcmF0dXJlLW51bWJlcicpO1xyXG4gIHRlbXBNaW5Vbml0LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXRlbXAtbWluLXVuaXQnLCAnZ2F1Z2UtdW5pdCcsICd0ZW1wZXJhdHVyZS11bml0Jyk7XHJcbiAgdGVtcE1pblVuaXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgd2VhdGhlckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdlYXRoZXItZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgZGF5LmlubmVyVGV4dCA9ICdkYXkgcGxhY2Vob2xkZXInO1xyXG4gIHRlbXBNYXguaW5uZXJUZXh0ID0gJzAwMC4wJztcclxuICB0ZW1wTWluLmlubmVyVGV4dCA9ICcwMDAuMCc7XHJcbiAgd2VhdGhlckRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICd3ZWF0aGVyIGRlc2NyaXB0aW9uJztcclxuXHJcbiAgW3RlbXBNYXhVbml0LCB0ZW1wTWluVW5pdF0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cyk7XHJcbiAgfSk7XHJcblxyXG4gIHRlbXBNYXhEaXYuYXBwZW5kKHRlbXBNYXgsIHRlbXBNYXhVbml0KTtcclxuICB0ZW1wTWluRGl2LmFwcGVuZCh0ZW1wTWluLCB0ZW1wTWluVW5pdCk7XHJcbiAgZGl2LmFwcGVuZChcclxuICAgIGRheSxcclxuICAgIHdlYXRoZXJJY29uLFxyXG4gICAgdGVtcE1heERpdixcclxuICAgIHRlbXBNaW5EaXYsXHJcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlY2lwaXRhdGlvbnMoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktcHJlY2lwaXRhdGlvbnMnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXByZWNpcGl0YXRpb25zLWljb24nKTtcclxuICBxdWFudGl0eS5jbGFzc0xpc3QuYWRkKCdkYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5Jyk7XHJcbiAgaG91cnMuY2xhc3NMaXN0LmFkZCgnZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMnKTtcclxuXHJcbiAgZGl2LnRpdGxlID0gJ1F1YW50aXR5IGFuZCB0b3RhbCBob3VycyBvZiBwcmVjaXBpdGF0aW9ucyc7XHJcbiAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gJzAwMG1tJztcclxuICBob3Vycy5pbm5lclRleHQgPSAnMDowMGhzJztcclxuXHJcbiAgZGl2LmFwcGVuZChpY29uLCBxdWFudGl0eSwgaG91cnMpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kKCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBzcGVlZFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZCcpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1pY29uJyk7XHJcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1zcGVlZCcsICdzcGVlZC1udW1iZXInKTtcclxuICBzcGVlZFVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1zcGVlZC11bml0JywgJ2dhdWdlLXVuaXQnLCAnd2luZC1zcGVlZC11bml0Jyk7XHJcbiAgc3BlZWRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICBkaXYudGl0bGUgPSAnTWF4IHdpbmQgc3BlZWQnO1xyXG4gIHNwZWVkLmlubmVyVGV4dCA9ICcwMCc7XHJcblxyXG4gIHNwZWVkVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cyk7XHJcblxyXG4gIGRpdi5hcHBlbmQoaWNvbiwgc3BlZWQsIHNwZWVkVW5pdCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bnJpc2VTdW5zZXQoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHN1bnJpc2VIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHN1bnNldEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS1zdW5yaXNlLXN1bnNldCcpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktc3VucmlzZS1zdW5zZXQtaWNvbicpO1xyXG4gIHN1bnJpc2VIb3VyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXN1bnJpc2UnKTtcclxuICBzdW5zZXRIb3VyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXN1bnNldCcpO1xyXG5cclxuICBkaXYudGl0bGUgPSAnU3VucmlzZSBhbmQgc3Vuc2V0JztcclxuICBzdW5yaXNlSG91ci5pbm5lclRleHQgPSAnMDA6MDBocyc7XHJcbiAgc3Vuc2V0SG91ci5pbm5lclRleHQgPSAnMDA6MDBocyc7XHJcblxyXG4gIGRpdi5hcHBlbmQoaWNvbiwgc3VucmlzZUhvdXIsIHN1bnNldEhvdXIpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1dkluZGV4KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB1dlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS11dicpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktdXYtaWNvbicpO1xyXG4gIGluZGV4LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXV2LWluZGV4Jyk7XHJcbiAgdXZQYXJhLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXV2LXRleHQnKTtcclxuXHJcbiAgZGl2LnRpdGxlID0gJ1VWIGluZGV4JztcclxuICBpbmRleC5pbm5lclRleHQgPSAnMDAnO1xyXG4gIHV2UGFyYS5pbm5lclRleHQgPSAnVVYnO1xyXG5cclxuICBkaXYuYXBwZW5kKGljb24sIGluZGV4LCB1dlBhcmEpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcbiIsImltcG9ydCBzZWFyY2hDaXR5IGZyb20gJy4uL2Z1bmN0aW9ucy9zZWFyY2hDaXR5JztcclxuXHJcbmxldCBmb2N1c0luZGV4ID0gLTE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2goKSB7XHJcbiAgbGV0IGtleWRvd25UaW1lb3V0O1xyXG4gIGNvbnN0IHRpbWVvdXREZWxheSA9IDUwMDtcclxuXHJcbiAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBjaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvYWRpbmdBbmltRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHNlYXJjaFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY2l0eS1zZWFyY2gnKTtcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1mb3JtJyk7XHJcbiAgY2l0eUxpc3QuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdHMnKTtcclxuICBsb2FkaW5nQW5pbURpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtbG9hZGluZycsICdoaWRkZW4nKTtcclxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaW5wdXQnKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsIHRydWUpO1xyXG4gIGlucHV0LnR5cGUgPSAnc2VhcmNoJztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdXcml0ZSBhIGxvY2F0aW9uIG5hbWUnO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XHJcbiAgICBsb2FkaW5nQW5pbURpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNsZWFyVGltZW91dChrZXlkb3duVGltZW91dCk7XHJcbiAgICBrZXlkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZWFyY2hDaXR5KGlucHV0LnZhbHVlKTtcclxuICAgIH0sIHRpbWVvdXREZWxheSk7XHJcbiAgfSk7XHJcblxyXG4gIGxvYWRpbmdBbmltRGl2LmFwcGVuZChsb2FkaW5nQW5pbTEsIGxvYWRpbmdBbmltMiwgbG9hZGluZ0FuaW0zKTtcclxuICBmb3JtLmFwcGVuZChpbnB1dCwgbG9hZGluZ0FuaW1EaXYpO1xyXG4gIHNlYXJjaFNlY3Rpb24uYXBwZW5kKGZvcm0sIGNpdHlMaXN0KTtcclxuXHJcbiAgc2VhcmNoU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50S2V5cyA9IFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnUGFnZVVwJywgJ1BhZ2VEb3duJ107XHJcbiAgICBpZiAoZXZlbnRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIGZvY3VzSW5kZXggKz0gMTtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIGZvY3VzSW5kZXggLT0gMTtcclxuICAgICAgaWYgKGUua2V5ID09PSAnUGFnZVVwJykgZm9jdXNJbmRleCAtPSA4O1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdQYWdlRG93bicpIGZvY3VzSW5kZXggKz0gODtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLXJlc3VsdCcpO1xyXG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgbGltaXRSYW5nZShyZXN1bHRzLmxlbmd0aCk7XHJcbiAgICAgIHJlc3VsdHNbZm9jdXNJbmRleF0uZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gICAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9jdXNJbmRleCA9IC0xO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc2VhcmNoU2VjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gbGltaXRSYW5nZShsZW5ndGgpIHtcclxuICBpZiAoZm9jdXNJbmRleCA8IDApIGZvY3VzSW5kZXggPSAwO1xyXG4gIGlmIChmb2N1c0luZGV4ID4gbGVuZ3RoIC0gMSkgZm9jdXNJbmRleCA9IGxlbmd0aCAtIDE7XHJcbn1cclxuIiwiaW1wb3J0IGNoYW5nZVVuaXRzIGZyb20gJy4uL2Z1bmN0aW9ucy9jaGFuZ2VVbml0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyQ3VycmVudCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICAvLyBjaXR5XHJcbiAgY29uc3QgY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNpdHlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBjaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2NpdHktZGl2Jyk7XHJcbiAgY2l0eVBhcmEuY2xhc3NMaXN0LmFkZCgnY2l0eS1wYXJhJyk7XHJcblxyXG4gIGNpdHlQYXJhLmlubmVyVGV4dCA9ICdDaXR5IE5hbWUsIENvdW50cnkgTmFtZSc7XHJcblxyXG4gIGNpdHlEaXYuYXBwZW5kKGNpdHlQYXJhKTtcclxuXHJcbiAgLy8gaWNvblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudCcsICdpbnZpc2libGUnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudC1pY29uJyk7XHJcblxyXG4gIC8vIHdlYXRoZXJjb2RlIGRpdlxyXG4gIGNvbnN0IHdlYXRoZXJjb2RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2VhdGhlcmNvZGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICB3ZWF0aGVyY29kZURpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyY29kZS1kaXYnKTtcclxuICB3ZWF0aGVyY29kZVBhcmEuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcmNvZGUtcGFyYScpO1xyXG4gIHdlYXRoZXJjb2RlUGFyYS5pbm5lclRleHQgPSAnTWFpbmx5IGNsZWFyJztcclxuXHJcbiAgd2VhdGhlcmNvZGVEaXYuYXBwZW5kKHdlYXRoZXJjb2RlUGFyYSk7XHJcblxyXG4gIC8vIHRlbXBlcmF0dXJlcyBkaXZcclxuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGVtcEN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGVtcFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGFwcGFyZW50UGFyYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGFwcGFyZW50VGVtcFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgYXBwYXJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGFwcGFyZW50VW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gIHRlbXBEaXYuY2xhc3NMaXN0LmFkZCgndGVtcC1kaXYnKTtcclxuICB0ZW1wQ3VycmVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLWN1cnJlbnQnLCAndGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgdGVtcFVuaXQuY2xhc3NMaXN0LmFkZCgnZ2F1Z2UtdW5pdCcsICd0ZW1wZXJhdHVyZS11bml0Jyk7XHJcbiAgdGVtcFVuaXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgYXBwYXJlbnRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGFwcGFyZW50UGFyYURpdi5jbGFzc0xpc3QuYWRkKCd0ZW1wLWFwcGFyZW50LWRpdicpO1xyXG4gIGFwcGFyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wLWFwcGFyZW50JywgJ3RlbXBlcmF0dXJlLW51bWJlcicpO1xyXG4gIGFwcGFyZW50VW5pdC5jbGFzc0xpc3QuYWRkKCdnYXVnZS11bml0JywgJ3RlbXBlcmF0dXJlLXVuaXQnLCAnZ2F1Z2UtdW5pdC1hcHBhcmVudCcpO1xyXG5cclxuICBjb25zdCB1bml0c0VsZW1lbnRzID0gW3RlbXBVbml0LCBhcHBhcmVudFVuaXRdO1xyXG4gIHVuaXRzRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cykpO1xyXG4gIC8vIHRlbXBVbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVVuaXRzKTtcclxuXHJcbiAgdGVtcEN1cnJlbnQuaW5uZXJUZXh0ID0gJzAwMCc7XHJcbiAgYXBwYXJlbnRUZW1wUGFyYS5pbm5lclRleHQgPSAnRmVlbHMgbGlrZTogJztcclxuICBhcHBhcmVudFRlbXAuaW5uZXJUZXh0ID0gJzAwMCc7XHJcblxyXG4gIGFwcGFyZW50UGFyYURpdi5hcHBlbmQoYXBwYXJlbnRUZW1wUGFyYSwgYXBwYXJlbnRUZW1wLCBhcHBhcmVudFVuaXQpO1xyXG4gIHRlbXBEaXYuYXBwZW5kKHRlbXBDdXJyZW50LCB0ZW1wVW5pdCwgYXBwYXJlbnRQYXJhRGl2KTtcclxuXHJcbiAgLy8gaHVtaWRpdHkgZGl2XHJcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGh1bWlkaXR5R2F1Z2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUdhdWdlUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eS1kaXYnKTtcclxuICBodW1pZGl0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LXRpdGxlJyk7XHJcbiAgaHVtaWRpdHlHYXVnZS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eS1nYXVnZScpO1xyXG4gIGh1bWlkaXR5R2F1Z2VQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LWdhdWdlLXBlcmNlbnQnKTtcclxuICBodW1pZGl0eUdhdWdlUGVyY2VudC5kYXRhc2V0LnBlcmNlbnQgPSAwO1xyXG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XHJcblxyXG4gIGh1bWlkaXR5VGl0bGUuaW5uZXJUZXh0ID0gJ0h1bWlkaXR5ICUnO1xyXG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9ICcwMDAnO1xyXG5cclxuICBodW1pZGl0eUdhdWdlLmFwcGVuZChodW1pZGl0eSwgaHVtaWRpdHlHYXVnZVBlcmNlbnQpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZChodW1pZGl0eUdhdWdlLCBodW1pZGl0eVRpdGxlKTtcclxuXHJcbiAgLy8gd2luZCBkaXZcclxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdpbmRHYXVnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRDb21wYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQtZGl2Jyk7XHJcbiAgd2luZFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQtdGl0bGUtZGl2Jyk7XHJcbiAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3dpbmQtdGl0bGUnKTtcclxuICB3aW5kR2F1Z2UuY2xhc3NMaXN0LmFkZCgnd2luZC1nYXVnZScpO1xyXG4gIHdpbmRDb21wYXNzLmNsYXNzTGlzdC5hZGQoJ3dpbmQtY29tcGFzcycpO1xyXG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkJywgJ3NwZWVkLW51bWJlcicpO1xyXG4gIHdpbmRTcGVlZFVuaXQuY2xhc3NMaXN0LmFkZCgnZ2F1Z2UtdW5pdCcsICd3aW5kLXNwZWVkLXVuaXQnKTtcclxuICB3aW5kU3BlZWRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHdpbmRTcGVlZERpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKCd3aW5kLWRpcmVjdGlvbicpO1xyXG5cclxuICB3aW5kVGl0bGUuaW5uZXJUZXh0ID0gJ01heCB3aW5kJztcclxuICB3aW5kU3BlZWQuaW5uZXJUZXh0ID0gJzAwJztcclxuXHJcbiAgd2luZFNwZWVkVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cyk7XHJcblxyXG4gIHdpbmRUaXRsZURpdi5hcHBlbmQod2luZFRpdGxlLCB3aW5kU3BlZWRVbml0KTtcclxuICB3aW5kR2F1Z2UuYXBwZW5kKHdpbmRTcGVlZCwgd2luZENvbXBhc3MsIHdpbmRTcGVlZERpcmVjdGlvbik7XHJcbiAgd2luZERpdi5hcHBlbmQod2luZEdhdWdlLCB3aW5kVGl0bGVEaXYpO1xyXG5cclxuICAvLyBhcHBlbmQgZXZlcnl0aGluZ1xyXG4gIHNlY3Rpb24uYXBwZW5kKGNpdHlEaXYsIGljb24sIHdlYXRoZXJjb2RlRGl2LCB0ZW1wRGl2LCBodW1pZGl0eURpdiwgd2luZERpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCBkYWlseUNhcmQgZnJvbSAnLi9kYWlseUNhcmQnO1xyXG5pbXBvcnQgd2VhdGhlckhvdXJseSBmcm9tICcuL3dlYXRoZXJIb3VybHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VhdGhlckRhaWx5SG91cmx5KCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgY29uc3QgZGFpbHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAvLyBjb25zdCBob3VybHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRhaWx5LWhvdXJseScpO1xyXG4gIGRhaWx5RGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZGFpbHknLCAnaW52aXNpYmxlJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcbiAgICBkYWlseURpdi5hcHBlbmQoZGFpbHlDYXJkKCkpO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbi5hcHBlbmQoXHJcbiAgICB3ZWF0aGVySG91cmx5KCksXHJcbiAgICBkYWlseURpdixcclxuICApO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVySG91cmx5KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItaG91cmx5Jyk7XHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1jaGFydCcpO1xyXG4gIHN2Zy5hcHBlbmQoXHJcbiAgICBjcmVhdGVDaGFydExpbmVzKCksXHJcbiAgICBjcmVhdGVUZW1wR3JvdXAoKSxcclxuICApO1xyXG4gIGRpdi5hcHBlbmQoc3ZnKTtcclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGFydExpbmVzKCkge1xyXG4gIGNvbnN0IGNoYXJ0TGluZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG4gIGNvbnN0IGhvcml6b250YWxMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XHJcbiAgY29uc3QgaG91cnNUZXh0cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnbGluZScpO1xyXG4gICAgdmVydGljYWxMaW5lLmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LWxpbmUtaG91cicpO1xyXG4gICAgY2hhcnRMaW5lc0dyb3VwLmFwcGVuZCh2ZXJ0aWNhbExpbmUpO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0ZXh0Jyk7XHJcbiAgICBjb25zdCBob3Vyc051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndHNwYW4nKTtcclxuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndHNwYW4nKTtcclxuICAgIGhvdXJzLnNldEF0dHJpYnV0ZSgneCcsIDApO1xyXG4gICAgaG91cnMuc2V0QXR0cmlidXRlKCd5JywgMCk7XHJcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3Vycy1jaGFydC10ZXh0Jyk7XHJcbiAgICBob3Vyc051bWJlci5jbGFzc0xpc3QuYWRkKCdob3Vycy1jaGFydC1udW1iZXJzJyk7XHJcbiAgICBob3Vyc051bWJlci50ZXh0Q29udGVudCA9ICcwJztcclxuICAgIGhvdXJzVGV4dC50ZXh0Q29udGVudCA9ICdocyc7XHJcbiAgICBob3Vycy5hcHBlbmQoaG91cnNOdW1iZXIsIGhvdXJzVGV4dCk7XHJcbiAgICBob3Vyc1RleHRzLnB1c2goaG91cnMpO1xyXG4gIH1cclxuICBjaGFydExpbmVzR3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hhcnQtbGluZXMtZ3JvdXAnKTtcclxuICBob3Jpem9udGFsTGluZS5jbGFzc0xpc3QuYWRkKCdjaGFydC1saW5lLWJhc2UnKTtcclxuXHJcbiAgY2hhcnRMaW5lc0dyb3VwLmFwcGVuZChob3Jpem9udGFsTGluZSwgLi4uaG91cnNUZXh0cyk7XHJcblxyXG4gIHJldHVybiBjaGFydExpbmVzR3JvdXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRlbXBHcm91cCgpIHtcclxuICBjb25zdCB0ZW1wR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuICBjb25zdCB0ZW1wQ2hhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuICBjb25zdCB0ZW1wQ2hhcnROdW1iZXJzID0gW107XHJcbiAgY29uc3QgdGVtcENoYXJ0VmVjdG9ycyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RleHQnKTtcclxuICAgIGNvbnN0IGRlZ3JlZXNOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RzcGFuJyk7XHJcbiAgICBjb25zdCBkZWdyZWVzU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0c3BhbicpO1xyXG4gICAgZGVncmVlcy5zZXRBdHRyaWJ1dGUoJ3gnLCAwKTtcclxuICAgIGRlZ3JlZXMuc2V0QXR0cmlidXRlKCd5JywgMCk7XHJcbiAgICBkZWdyZWVzLmNsYXNzTGlzdC5hZGQoJ3RlbXAtY2hhcnQtdGV4dCcpO1xyXG4gICAgZGVncmVlc051bWJlci5jbGFzc0xpc3QuYWRkKCd0ZW1wLWNoYXJ0JywgJ3RlbXBlcmF0dXJlLW51bWJlcicpO1xyXG4gICAgZGVncmVlc051bWJlci50ZXh0Q29udGVudCA9ICcwJztcclxuICAgIGRlZ3JlZXNTeW1ib2wudGV4dENvbnRlbnQgPSAnwrAnO1xyXG4gICAgZGVncmVlcy5hcHBlbmQoZGVncmVlc051bWJlciwgZGVncmVlc1N5bWJvbCk7XHJcbiAgICB0ZW1wQ2hhcnROdW1iZXJzLnB1c2goZGVncmVlcyk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdmVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdjaXJjbGUnKTtcclxuICAgIHZlY3Rvci5jbGFzc0xpc3QuYWRkKCd0ZW1wLWNoYXJ0LXZlY3RvcicpO1xyXG4gICAgdmVjdG9yLnNldEF0dHJpYnV0ZSgncicsIDQpO1xyXG4gICAgdGVtcENoYXJ0VmVjdG9ycy5wdXNoKHZlY3Rvcik7XHJcbiAgfVxyXG5cclxuICB0ZW1wR3JvdXAuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWNoYXJ0LWdyb3VwJyk7XHJcbiAgdGVtcENoYXJ0LmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1jaGFydC10ZW1wZXJhdHVyZScpO1xyXG5cclxuICB0ZW1wR3JvdXAuYXBwZW5kKHRlbXBDaGFydCwgLi4udGVtcENoYXJ0TnVtYmVycywgLi4udGVtcENoYXJ0VmVjdG9ycyk7XHJcblxyXG4gIHJldHVybiB0ZW1wR3JvdXA7XHJcbn1cclxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlLCB0aW1lem9uZSA9ICdhdXRvJykge1xyXG4gIGxldCByZXNwb25zZUpzb247XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0P2xhdGl0dWRlPSR7bGF0aXR1ZGV9JmxvbmdpdHVkZT0ke2xvbmdpdHVkZX0maG91cmx5PXRlbXBlcmF0dXJlXzJtLHJlbGF0aXZlaHVtaWRpdHlfMm0sYXBwYXJlbnRfdGVtcGVyYXR1cmUscHJlY2lwaXRhdGlvbix3ZWF0aGVyY29kZSxjbG91ZGNvdmVyLHZpc2liaWxpdHksd2luZHNwZWVkXzEwbSx3aW5kZGlyZWN0aW9uXzEwbSZkYWlseT13ZWF0aGVyY29kZSx0ZW1wZXJhdHVyZV8ybV9tYXgsdGVtcGVyYXR1cmVfMm1fbWluLHN1bnJpc2Usc3Vuc2V0LHV2X2luZGV4X21heCxwcmVjaXBpdGF0aW9uX3N1bSxwcmVjaXBpdGF0aW9uX2hvdXJzLHdpbmRzcGVlZF8xMG1fbWF4LHdpbmRkaXJlY3Rpb25fMTBtX2RvbWluYW50JnRpbWV6b25lPSR7dGltZXpvbmV9JmN1cnJlbnRfd2VhdGhlcj10cnVlYCk7XHJcbiAgICByZXNwb25zZUpzb24gPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXNwb25zZUpzb24gPSBgU29tZXRoaW5nIHdlbnQgd3Jvbmc6IFxcbiR7ZXJyfWA7XHJcbiAgfVxyXG4gIHJldHVybiByZXNwb25zZUpzb247XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEdlb2NvZGluZyhsb2NhdGlvbikge1xyXG4gIGlmICghbG9jYXRpb24ubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgbGV0IHJlc3BvbnNlSnNvbjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2F0aW9uc0xpbWl0ID0gMTAwO1xyXG4gICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9nZW9jb2RpbmctYXBpLm9wZW4tbWV0ZW8uY29tL3YxL3NlYXJjaD9uYW1lPSR7bG9jYXRpb259JmNvdW50PSR7bG9jYXRpb25zTGltaXR9YCk7XHJcbiAgICByZXNwb25zZUpzb24gPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXNwb25zZUpzb24gPSBgU29tZXRoaW5nIHdlbnQgd3Jvbmc6IFxcbiR7ZXJyfWA7XHJcbiAgfVxyXG4gIHJldHVybiByZXNwb25zZUpzb247XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFyQWRqdXN0KGRvbUVsZW1lbnQsIGZyb21WYWx1ZSwgdG9WYWx1ZSkge1xyXG4gIGNvbnN0IHsgcGVyY2VudCB9ID0gZG9tRWxlbWVudC5kYXRhc2V0O1xyXG4gIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGRvbUVsZW1lbnQuZGF0YXNldC5wZXJjZW50LCAxMCk7XHJcbiAgY29uc3QgdGltZW91dCA9IDIwO1xyXG4gIGNvbnN0IHN0ZXAgPSBmcm9tVmFsdWUgPCB0b1ZhbHVlID8gMSA6IC0xO1xyXG4gIGNvbnN0IG1hc2sgPSBgY29uaWMtZ3JhZGllbnQocmVkICR7cGVyY2VudH0lLCB0cmFuc3BhcmVudCAke3BlcmNlbnR9JSlgO1xyXG4gIGRvbUVsZW1lbnQuc3R5bGUubWFza0ltYWdlID0gbWFzaztcclxuICBkb21FbGVtZW50LmRhdGFzZXQucGVyY2VudCA9IGN1cnJlbnRWYWx1ZSArIHN0ZXA7XHJcblxyXG4gIGlmICgoc3RlcCA+IDAgJiYgcGVyY2VudCA8IHRvVmFsdWUpXHJcbiAgICB8fCAoc3RlcCA8IDAgJiYgcGVyY2VudCA+IHRvVmFsdWUpKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYmFyQWRqdXN0KGRvbUVsZW1lbnQsIGZyb21WYWx1ZSwgdG9WYWx1ZSk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHZhbHVlQWRqdXN0IGZyb20gJy4vdmFsdWVBZGp1c3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlVW5pdHMoZSkge1xyXG4gIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICBjb25zdCB1bml0c0NsYXNzID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZW1wZXJhdHVyZS11bml0JylcclxuICAgID8gJy50ZW1wZXJhdHVyZS11bml0JyA6ICcud2luZC1zcGVlZC11bml0JztcclxuICBjb25zdCB2YWx1ZXNDbGFzcyA9IHVuaXRzQ2xhc3MgPT09ICcudGVtcGVyYXR1cmUtdW5pdCdcclxuICAgID8gJy50ZW1wZXJhdHVyZS1udW1iZXInIDogJy5zcGVlZC1udW1iZXInO1xyXG4gIC8vIGNoYW5nZSB0aGUgcmVzdCBvZiB0aGUgdW5pdHNcclxuICBjb25zdCB1bml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodW5pdHNDbGFzcyk7XHJcbiAgdW5pdHMuZm9yRWFjaCgodW5pdCkgPT4ge1xyXG4gICAgdW5pdC5jaGVja2VkID0gbmV3VmFsdWU7XHJcbiAgfSk7XHJcbiAgLy8gY2hhbmdlIHRoZSByZWxhdGVkIHZhbHVlc1xyXG4gIGNvbnN0IHZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWVzQ2xhc3MpO1xyXG4gIHZhbHVlcy5mb3JFYWNoKChudW1iZXIpID0+IHtcclxuICAgIGlmICh2YWx1ZXNDbGFzcyA9PT0gJy50ZW1wZXJhdHVyZS1udW1iZXInKSB7XHJcbiAgICAgIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZW1wLWN1cnJlbnQnKVxyXG4gICAgICB8fCBudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZW1wLWFwcGFyZW50JykpIHtcclxuICAgICAgICB2YWx1ZUFkanVzdChcclxuICAgICAgICAgIG51bWJlcixcclxuICAgICAgICAgIG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQuY2Vsc2l1cyA6IG51bWJlci5kYXRhc2V0LmZhaHJlbmhlaXQsXHJcbiAgICAgICAgICBuZXdWYWx1ZSA/IG51bWJlci5kYXRhc2V0LmZhaHJlbmhlaXQgOiBudW1iZXIuZGF0YXNldC5jZWxzaXVzLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5mYWhyZW5oZWl0IDogbnVtYmVyLmRhdGFzZXQuY2Vsc2l1cztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGVlZC1udW1iZXInKVxyXG4gICAgICAmJiAhbnVtYmVyLmNsYXNzTGlzdC5jb250YWlucygnZGFpbHktd2luZC1zcGVlZCcpKSB7XHJcbiAgICAgIHZhbHVlQWRqdXN0KFxyXG4gICAgICAgIG51bWJlcixcclxuICAgICAgICBuZXdWYWx1ZSA/IG51bWJlci5kYXRhc2V0LmtpbG9tZXRlcnMgOiBudW1iZXIuZGF0YXNldC5taWxlcyxcclxuICAgICAgICBuZXdWYWx1ZSA/IG51bWJlci5kYXRhc2V0Lm1pbGVzIDogbnVtYmVyLmRhdGFzZXQua2lsb21ldGVycyxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQubWlsZXMgOiBudW1iZXIuZGF0YXNldC5raWxvbWV0ZXJzO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBkb21DaXRpZXNMaXN0IGZyb20gJy4uL2RvbS9jaXRpZXNMaXN0JztcclxuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyIH0gZnJvbSAnLi4vZmV0Y2gnO1xyXG5pbXBvcnQgdXBkYXRlQ3VycmVudFdlYXRoZXIgZnJvbSAnLi91cGRhdGVDdXJyZW50V2VhdGhlcic7XHJcbmltcG9ydCB1cGRhdGVEYWlseVdlYXRoZXIgZnJvbSAnLi91cGRhdGVEYWlseVdlYXRoZXInO1xyXG5pbXBvcnQgdXBkYXRlSG91cmx5V2VhdGhlciBmcm9tICcuL3VwZGF0ZUhvdXJseVdlYXRoZXInO1xyXG5pbXBvcnQgZ2V0V2VhdGhlcmNvZGUgZnJvbSAnLi93ZWF0aGVyY29kZSc7XHJcblxyXG5sZXQgcHJldmlvdXNTZWFyY2g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hDaXR5KHNlYXJjaCkge1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gIGNvbnN0IGNpdHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZXN1bHRzJyk7XHJcbiAgY29uc3QgbG9hZGluZ0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKTtcclxuXHJcbiAgaWYgKHNlYXJjaCA9PT0gcHJldmlvdXNTZWFyY2gpIHtcclxuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcclxuICAgIGxvYWRpbmdJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNTZWFyY2ggPSBzZWFyY2g7XHJcbiAgY29uc3QgbGlzdCA9IGF3YWl0IGRvbUNpdGllc0xpc3Qoc2VhcmNoKTtcclxuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XHJcbiAgbG9hZGluZ0ljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY2l0eUxpc3QucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY2l0eUxpc3QuYXBwZW5kKGxpc3QpO1xyXG5cclxuICBjb25zdCBkb21MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuICBkb21MaXN0LmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgIGNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIGRpc2FibGUgYW5kIGF1dG9jb21wbGV0ZSBpbnB1dCB3aGlsZSBmZXRjaGluZyBkYXRhXHJcbiAgICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBjaXR5LmRhdGFzZXQubG9jYXRpb247XHJcbiAgICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcclxuICAgICAgbG9hZGluZ0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBjaXR5TGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgICAgY29uc3QgeyBsYXRpdHVkZSB9ID0gY2l0eS5kYXRhc2V0O1xyXG4gICAgICBjb25zdCB7IGxvbmdpdHVkZSB9ID0gY2l0eS5kYXRhc2V0O1xyXG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xyXG4gICAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgICAgLy8gZGF0YSBmb3IgY3VycmVudCB3ZWF0aGVyLCB0aGVuIHVwZGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB7XHJcbiAgICAgICAgY2l0eTogY2l0eS5kYXRhc2V0LmxvY2F0aW9uLFxyXG4gICAgICAgIHdlYXRoZXJjb2RlOiBnZXRXZWF0aGVyY29kZSh3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci53ZWF0aGVyY29kZSksXHJcbiAgICAgICAgdGVtcDogd2VhdGhlci5jdXJyZW50X3dlYXRoZXIudGVtcGVyYXR1cmUsXHJcbiAgICAgICAgdGVtcEFwcGFyZW50OiB3ZWF0aGVyLmhvdXJseS5hcHBhcmVudF90ZW1wZXJhdHVyZVtjdXJyZW50SG91cl0sXHJcbiAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXIuaG91cmx5LnJlbGF0aXZlaHVtaWRpdHlfMm1bY3VycmVudEhvdXJdLFxyXG4gICAgICAgIHdpbmRTcGVlZDogd2VhdGhlci5jdXJyZW50X3dlYXRoZXIud2luZHNwZWVkLFxyXG4gICAgICAgIHdpbmREaXJlY3Rpb246IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndpbmRkaXJlY3Rpb24sXHJcbiAgICAgICAgc3VucmlzZTogd2VhdGhlci5kYWlseS5zdW5yaXNlLFxyXG4gICAgICAgIHN1bnNldDogd2VhdGhlci5kYWlseS5zdW5zZXQsXHJcbiAgICAgICAgbG9jYWxIb3VyOiB3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci50aW1lLFxyXG4gICAgICB9O1xyXG4gICAgICB1cGRhdGVDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlckRhdGEpO1xyXG4gICAgICAvLyBkYXRhIGZvciBkYWlseSB3ZWF0aGVyLCB0aGVuIHVwZGF0ZVxyXG4gICAgICBjb25zdCBkYWlseVdlYXRoZXJEYXRhID0ge1xyXG4gICAgICAgIHdlYXRoZXJjb2Rlczogd2VhdGhlci5kYWlseS53ZWF0aGVyY29kZSxcclxuICAgICAgICB0ZW1wc01heDogd2VhdGhlci5kYWlseS50ZW1wZXJhdHVyZV8ybV9tYXgsXHJcbiAgICAgICAgdGVtcHNNaW46IHdlYXRoZXIuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluLFxyXG4gICAgICAgIHByZWNpcGl0YXRpb25RdWFudGl0aWVzOiB3ZWF0aGVyLmRhaWx5LnByZWNpcGl0YXRpb25fc3VtLFxyXG4gICAgICAgIHByZWNpcGl0YXRpb25Ib3Vyczogd2VhdGhlci5kYWlseS5wcmVjaXBpdGF0aW9uX2hvdXJzLFxyXG4gICAgICAgIHdpbmRTcGVlZHM6IHdlYXRoZXIuZGFpbHkud2luZHNwZWVkXzEwbV9tYXgsXHJcbiAgICAgICAgc3VucmlzZXM6IHdlYXRoZXIuZGFpbHkuc3VucmlzZSxcclxuICAgICAgICBzdW5zZXRzOiB3ZWF0aGVyLmRhaWx5LnN1bnNldCxcclxuICAgICAgICB1dkluZGV4ZXM6IHdlYXRoZXIuZGFpbHkudXZfaW5kZXhfbWF4LFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBkYXRhIGZvciBkYWlseSB3ZWF0aGVyIGZvciAyNCBob3VycyBvZiBjdXJyZW50IGRheSwgdGhlbiB1cGRhdGVcclxuICAgICAgdXBkYXRlRGFpbHlXZWF0aGVyKGRhaWx5V2VhdGhlckRhdGEpO1xyXG4gICAgICBjb25zdCBob3VybHlXZWF0aGVyRGF0YSA9IHtcclxuICAgICAgICBob3VyczogZ2V0MjQod2VhdGhlci5ob3VybHkudGltZSksXHJcbiAgICAgICAgdGVtcHM6IGdldDI0KHdlYXRoZXIuaG91cmx5LnRlbXBlcmF0dXJlXzJtKSxcclxuICAgICAgICBodW1pZGl0eTogZ2V0MjQod2VhdGhlci5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybSksXHJcbiAgICAgICAgYXBwYXJlbnQ6IGdldDI0KHdlYXRoZXIuaG91cmx5LmFwcGFyZW50X3RlbXBlcmF0dXJlKSxcclxuICAgICAgICB3ZWF0aGVyY29kZTogZ2V0MjQod2VhdGhlci5ob3VybHkud2VhdGhlcmNvZGUpLFxyXG4gICAgICAgIHdpbmRzcGVlZDogZ2V0MjQod2VhdGhlci5ob3VybHkud2luZHNwZWVkXzEwbSksXHJcbiAgICAgIH07XHJcbiAgICAgIHVwZGF0ZUhvdXJseVdlYXRoZXIoaG91cmx5V2VhdGhlckRhdGEpO1xyXG4gICAgICBoaWRlU2VhcmNoKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVNlYXJjaCgpIHtcclxuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1zZWFyY2gnKTtcclxuICBzZWFyY2guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgLy8gY2xlYXIgcmVzdWx0cyBhZnRlciBoaWRpbmdcclxuICBkb21DaXRpZXNMaXN0KCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0MjQoYXJyYXkpIHtcclxuICBjb25zdCBuZXdBcnJheSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xyXG4gICAgbmV3QXJyYXkucHVzaChhcnJheVtpXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3QXJyYXk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNlbHNpdXNUb0ZhaHJlbmhlaXQobnVtYmVyKSB7XHJcbiAgY29uc3QgZmFocmVuaGVpdCA9IChudW1iZXIgKiAxLjgpICsgMzI7XHJcbiAgY29uc3QgZml4ZWREZWNpbWFscyA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChmYWhyZW5oZWl0KS50b0ZpeGVkKDEpKTtcclxuICByZXR1cm4gZml4ZWREZWNpbWFscztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtpbG9tZXRlcnNUb01pbGVzKG51bWJlcikge1xyXG4gIGNvbnN0IG1pbGVzID0gbnVtYmVyIC8gMS42MDkzNDQ7XHJcbiAgY29uc3QgZml4ZWREZWNpbWFscyA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChtaWxlcykudG9GaXhlZCgxKSk7XHJcbiAgcmV0dXJuIGZpeGVkRGVjaW1hbHM7XHJcbn1cclxuIiwiaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4vd2VhdGhlckljb24nO1xyXG5pbXBvcnQgeyBjZWxzaXVzVG9GYWhyZW5oZWl0LCBraWxvbWV0ZXJzVG9NaWxlcyB9IGZyb20gJy4vdW5pdENvbnZlcnRlcic7XHJcbmltcG9ydCB2YWx1ZUFkanVzdCBmcm9tICcuL3ZhbHVlQWRqdXN0JztcclxuaW1wb3J0IGJhckFkanVzdCBmcm9tICcuL2JhckFkanVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50V2VhdGhlcihkYXRhKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWN1cnJlbnQgJyk7XHJcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXBhcmEnKTtcclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY3VycmVudC1pY29uJyk7XHJcbiAgY29uc3Qgd2VhdGhlcmNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcmNvZGUtcGFyYScpO1xyXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1jdXJyZW50Jyk7XHJcbiAgY29uc3QgdGVtcEFwcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtYXBwYXJlbnQnKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xyXG4gIGNvbnN0IGh1bWlkaXR5R2F1Z2VQZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LWdhdWdlLXBlcmNlbnQnKTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZCcpO1xyXG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1kaXJlY3Rpb24nKTtcclxuXHJcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICBjaXR5LmlubmVyVGV4dCA9IGRhdGEuY2l0eTtcclxuICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHdlYXRoZXJJY29uKFxyXG4gICAgZGF0YS53ZWF0aGVyY29kZS5pY29uLFxyXG4gICAgZGF0YS5sb2NhbEhvdXIsXHJcbiAgICBkYXRhLnN1bnJpc2VbMF0sXHJcbiAgICBkYXRhLnN1bnNldFswXSxcclxuICApO1xyXG4gIHdlYXRoZXJjb2RlLmlubmVyVGV4dCA9IGAke2RhdGEud2VhdGhlcmNvZGUud2VhdGhlcn0ke2RhdGEud2VhdGhlcmNvZGUuaW50ZW5zaXR5ID8gYCwgJHtkYXRhLndlYXRoZXJjb2RlLmludGVuc2l0eX1gIDogJyd9YDtcclxuICB0ZW1wLmRhdGFzZXQuY2Vsc2l1cyA9IGRhdGEudGVtcDtcclxuICB0ZW1wLmRhdGFzZXQuZmFocmVuaGVpdCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQoZGF0YS50ZW1wKTtcclxuICB2YWx1ZUFkanVzdCh0ZW1wLCB0ZW1wLmlubmVyVGV4dCwgZGF0YS50ZW1wKTtcclxuICB0ZW1wQXBwYXJlbnQuZGF0YXNldC5jZWxzaXVzID0gZGF0YS50ZW1wQXBwYXJlbnQ7XHJcbiAgdGVtcEFwcGFyZW50LmRhdGFzZXQuZmFocmVuaGVpdCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQoZGF0YS50ZW1wQXBwYXJlbnQpO1xyXG4gIHZhbHVlQWRqdXN0KHRlbXBBcHBhcmVudCwgdGVtcEFwcGFyZW50LmlubmVyVGV4dCwgZGF0YS50ZW1wQXBwYXJlbnQpO1xyXG4gIHZhbHVlQWRqdXN0KGh1bWlkaXR5LCBodW1pZGl0eS5pbm5lclRleHQsIGRhdGEuaHVtaWRpdHkpO1xyXG4gIGJhckFkanVzdChodW1pZGl0eUdhdWdlUGVyY2VudCwgaHVtaWRpdHlHYXVnZVBlcmNlbnQuZGF0YXNldC5wZXJjZW50LCBkYXRhLmh1bWlkaXR5KTtcclxuICB3aW5kU3BlZWQuZGF0YXNldC5raWxvbWV0ZXJzID0gcGFyc2VJbnQoZGF0YS53aW5kU3BlZWQsIDEwKTtcclxuICB3aW5kU3BlZWQuZGF0YXNldC5taWxlcyA9IHBhcnNlSW50KGtpbG9tZXRlcnNUb01pbGVzKGRhdGEud2luZFNwZWVkKSwgMTApO1xyXG4gIHZhbHVlQWRqdXN0KHdpbmRTcGVlZCwgd2luZFNwZWVkLmlubmVyVGV4dCwgcGFyc2VJbnQoZGF0YS53aW5kU3BlZWQsIDEwKSk7XHJcbiAgd2luZERpcmVjdGlvbi5zdHlsZS5yb3RhdGUgPSBgJHtkYXRhLndpbmREaXJlY3Rpb259ZGVnYDtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGdldEhvdXJzLFxyXG4gIGdldE1pbnV0ZXMsXHJcbiAgYWRkRGF5cyxcclxuICBnZXREYXksXHJcbiAgZ2V0RGF0ZSxcclxufSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBnZXRXZWF0aGVyY29kZSBmcm9tICcuL3dlYXRoZXJjb2RlJztcclxuaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4vd2VhdGhlckljb24nO1xyXG5pbXBvcnQgeyBjZWxzaXVzVG9GYWhyZW5oZWl0LCBraWxvbWV0ZXJzVG9NaWxlcyB9IGZyb20gJy4vdW5pdENvbnZlcnRlcic7XHJcblxyXG5jb25zdCBkYXlOYW1lcyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURhaWx5V2VhdGhlcihkYXRhKSB7XHJcbiAgLy8gaWNvbiBhbmQgdGVtcHNcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGFpbHknKTtcclxuICBjb25zdCBkYXlzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktZGF5Jyk7XHJcbiAgY29uc3QgaWNvbnMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS13ZWF0aGVyLWljb24nKTtcclxuICBjb25zdCB0ZW1wc01heCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXRlbXAtbWF4Jyk7XHJcbiAgY29uc3QgdGVtcHNNaW4gPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS10ZW1wLW1pbicpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9ucyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXdlYXRoZXItZGVzY3JpcHRpb24nKTtcclxuICAvLyBleHRyYSBpbmZvXHJcbiAgY29uc3QgcHJlY2lwaXRhdGlvblF1YW50aXRpZXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5Jyk7XHJcbiAgY29uc3QgcHJlY2lwaXRhdGlvbkhvdXJzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMnKTtcclxuICBjb25zdCB3aW5kU3BlZWRzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktd2luZC1zcGVlZCcpO1xyXG4gIGNvbnN0IHN1bnJpc2VzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktc3VucmlzZScpO1xyXG4gIGNvbnN0IHN1bnNldHMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1zdW5zZXQnKTtcclxuICBjb25zdCB1dkluZGV4ZXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS11di1pbmRleCcpO1xyXG5cclxuICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG5cclxuICBkYXlzLmZvckVhY2goKGRheSwgaSkgPT4ge1xyXG4gICAgZGF5LmlubmVyVGV4dCA9IGkgPT09IDAgPyAnVG9kYXknIDogYCR7ZGF5TmFtZXNbZ2V0RGF5KGFkZERheXMobmV3IERhdGUoKSwgaSkpXX0gJHtnZXREYXRlKGFkZERheXMobmV3IERhdGUoKSwgaSkpfWA7XHJcbiAgfSk7XHJcbiAgaWNvbnMuZm9yRWFjaCgoaWNvbiwgaSkgPT4ge1xyXG4gICAgY29uc3QgaWNvblBhcnRzID0gZ2V0V2VhdGhlcmNvZGUoZGF0YS53ZWF0aGVyY29kZXNbaV0pLmljb247XHJcbiAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHdlYXRoZXJJY29uKGljb25QYXJ0cyk7XHJcbiAgfSk7XHJcbiAgdGVtcHNNYXguZm9yRWFjaCgodGVtcCwgaSkgPT4ge1xyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLnRlbXBzTWF4W2ldO1xyXG4gICAgdGVtcC5pbm5lclRleHQgPSB0ZW1wZXJhdHVyZTtcclxuICAgIHRlbXAuZGF0YXNldC5jZWxzaXVzID0gdGVtcGVyYXR1cmU7XHJcbiAgICB0ZW1wLmRhdGFzZXQuZmFocmVuaGVpdCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQodGVtcGVyYXR1cmUpO1xyXG4gIH0pO1xyXG4gIHRlbXBzTWluLmZvckVhY2goKGFwcGFyZW50LCBpKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRhdGEudGVtcHNNaW5baV07XHJcbiAgICBhcHBhcmVudC5pbm5lclRleHQgPSB0ZW1wZXJhdHVyZTtcclxuICAgIGFwcGFyZW50LmRhdGFzZXQuY2Vsc2l1cyA9IHRlbXBlcmF0dXJlO1xyXG4gICAgYXBwYXJlbnQuZGF0YXNldC5mYWhyZW5oZWl0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh0ZW1wZXJhdHVyZSk7XHJcbiAgfSk7XHJcbiAgZGVzY3JpcHRpb25zLmZvckVhY2goKGRlc2NyaXB0aW9uLCBpKSA9PiB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZ2V0V2VhdGhlcmNvZGUoZGF0YS53ZWF0aGVyY29kZXNbaV0pO1xyXG4gICAgY29uc3QgdHlwZSA9IHdlYXRoZXIud2VhdGhlcjtcclxuICAgIGNvbnN0IGhhc0ludGVuc2l0eSA9IHdlYXRoZXIuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpbnRlbnNpdHkgPSBgLFxcbiR7d2VhdGhlci5pbnRlbnNpdHl9YDtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGAke3R5cGV9JHtoYXNJbnRlbnNpdHkgPyBpbnRlbnNpdHkgOiAnJ31gO1xyXG4gIH0pO1xyXG4gIHByZWNpcGl0YXRpb25RdWFudGl0aWVzLmZvckVhY2goKHF1YW50aXR5LCBpKSA9PiB7XHJcbiAgICBxdWFudGl0eS5pbm5lclRleHQgPSBgJHtkYXRhLnByZWNpcGl0YXRpb25RdWFudGl0aWVzW2ldfW1tYDtcclxuICB9KTtcclxuICBwcmVjaXBpdGF0aW9uSG91cnMuZm9yRWFjaCgoaG91cnMsIGkpID0+IHtcclxuICAgIGhvdXJzLmlubmVyVGV4dCA9IGAke2RhdGEucHJlY2lwaXRhdGlvbkhvdXJzW2ldfWhzYDtcclxuICB9KTtcclxuICB3aW5kU3BlZWRzLmZvckVhY2goKHNwZWVkLCBpKSA9PiB7XHJcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBwYXJzZUludChkYXRhLndpbmRTcGVlZHNbaV0sIDEwKTtcclxuICAgIHNwZWVkLmlubmVyVGV4dCA9IHdpbmRTcGVlZDtcclxuICAgIHNwZWVkLmRhdGFzZXQua2lsb21ldGVycyA9IHdpbmRTcGVlZDtcclxuICAgIHNwZWVkLmRhdGFzZXQubWlsZXMgPSBwYXJzZUludChraWxvbWV0ZXJzVG9NaWxlcyh3aW5kU3BlZWQpLCAxMCk7XHJcbiAgfSk7XHJcbiAgc3VucmlzZXMuZm9yRWFjaCgoc3VucmlzZSwgaSkgPT4ge1xyXG4gICAgc3VucmlzZS5pbm5lclRleHQgPSBgJHtnZXRIb3VycyhuZXcgRGF0ZShkYXRhLnN1bnJpc2VzW2ldKSl9OiR7Z2V0TWludXRlcyhuZXcgRGF0ZShkYXRhLnN1bnJpc2VzW2ldKSl9aHNgO1xyXG4gIH0pO1xyXG4gIHN1bnNldHMuZm9yRWFjaCgoc3Vuc2V0LCBpKSA9PiB7XHJcbiAgICBzdW5zZXQuaW5uZXJUZXh0ID0gYCR7Z2V0SG91cnMobmV3IERhdGUoZGF0YS5zdW5zZXRzW2ldKSl9OiR7Z2V0TWludXRlcyhuZXcgRGF0ZShkYXRhLnN1bnNldHNbaV0pKX1oc2A7XHJcbiAgfSk7XHJcbiAgdXZJbmRleGVzLmZvckVhY2goKHV2LCBpKSA9PiB7XHJcbiAgICB1di5pbm5lclRleHQgPSBkYXRhLnV2SW5kZXhlc1tpXSA9PT0gbnVsbCA/ICctJyA6IGRhdGEudXZJbmRleGVzW2ldO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQgfSBmcm9tICcuL3VuaXRDb252ZXJ0ZXInO1xyXG5pbXBvcnQgdmFsdWVBZGp1c3QgZnJvbSAnLi92YWx1ZUFkanVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVIb3VybHlXZWF0aGVyKGRhdGEpIHtcclxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1ob3VybHknKTtcclxuICBjb25zdCBob3VycyA9IDI0O1xyXG4gIGNvbnN0IG1hcmdpblggPSAyMDtcclxuICAvLyB2ZXJ0aWNhbCBzcGFjZSByZXNlcnZlZCBvbiBwaXhlbHMgZm9yIGhvdXJzIGFuZCB0ZW1wIHZhbHVlc1xyXG4gIGNvbnN0IHRleHRTcGFjZSA9IDQ1O1xyXG4gIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQocGFyZW50LmNsaWVudFdpZHRoLCAxMCkgLSBtYXJnaW5YO1xyXG4gIGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KHBhcmVudC5jbGllbnRIZWlnaHQsIDEwKTtcclxuICBjb25zdCBjaGFydHNIZWlnaHRUZW1wcyA9ICgoaGVpZ2h0ICogODApIC8gMTAwKSAtIHRleHRTcGFjZTtcclxuICAvLyBjb25zdCBjaGFydHNIZWlnaHRXaW5kSHVtaWRpdHkgPSBoZWlnaHQgLSB0ZXh0U3BhY2U7XHJcbiAgY29uc3QgcG9zaXRpb25zWCA9IFswXTtcclxuICAvLyBzZXQgdmFsdWVzIGZvciB2ZWN0b3IgaG9yaXpvbnRhbCBwb3NpdGlvbnNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzIC0gMTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQoKCh3aWR0aCkgLyAoaG91cnMgLSAxKSkgKiAoaSArIDEpKS50b0ZpeGVkKDEpKTtcclxuICAgIHBvc2l0aW9uc1gucHVzaChjdXJyZW50VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gcG9zaXRpb24gaG91ciBsaW5lcyBhbmQgYmFzZSBsaW5lIGZvciB0aGUgY2hhcnRcclxuICBwb3NpdGlvbkNoYXJ0TGluZXMoZGF0YS5ob3VycywgbWFyZ2luWCwgcG9zaXRpb25zWCwgdGV4dFNwYWNlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAvLyB1cGRhdGUgY3VycmVudCB0ZW1wZXJhdHVyZSBsaW5lIGNoYXJ0XHJcbiAgY29uc3QgY2hhcnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1jaGFydC10ZW1wZXJhdHVyZScpO1xyXG4gIC8vIGRldGVjdCBlbXB0eSBkcmF3IG9uIGZpcnN0IGxvYWQsIHBsYWNlIGRyYXcgd2l0aCB2YWx1ZXMgYXQgMFxyXG4gIGlmICghY2hhcnRUZW1wLmdldEF0dHJpYnV0ZSgnZCcpKSB7XHJcbiAgICBlbXB0eUNoYXJ0KGNoYXJ0VGVtcCwgbWFyZ2luWCwgcG9zaXRpb25zWCwgY2hhcnRzSGVpZ2h0VGVtcHMpO1xyXG4gIH1cclxuICAvLyBzbWFsbCB0aW1lb3V0IHRvIGFsbG93IGFuaW1hdGlvbiBiZXR3ZWVuIHRoZSBlbXB0eSBjaGFydCBhbmQgdGhlIHVwZGF0ZWQgb25lXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB1cGRhdGVUZW1wZXJhdHVyZShkYXRhLnRlbXBzLCBtYXJnaW5YLCBwb3NpdGlvbnNYLCBjaGFydHNIZWlnaHRUZW1wcywgaG91cnMsIHRleHRTcGFjZSk7XHJcbiAgfSwgNTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5nZVBlcmNlbnQobWluLCBtYXgsIHRhcmdldCkge1xyXG4gIGNvbnN0IHBlcmNlbnRSYW5nZSA9ICgodGFyZ2V0IC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMDtcclxuICByZXR1cm4gcGFyc2VGbG9hdChwYXJzZUZsb2F0KHBlcmNlbnRSYW5nZSkudG9GaXhlZCgxKSk7XHJcbn1cclxuZnVuY3Rpb24gcmFuZ2VQZXJjZW50VG9QaXhlbHMocGVyY2VudCwgaGVpZ2h0KSB7XHJcbiAgY29uc3QgdG9QaXhlbHMgPSAoKHBlcmNlbnQgKiBoZWlnaHQpIC8gMTAwKTtcclxuICAvLyBhcyB0aGUgWSBheGlzIGFzY2VuZCBnb2luZyBkb3duLCB0aGUgZ3JhcGhpYyB3aWxsIGJlIGludmVydGVkXHJcbiAgLy8gdXNpbmcgdGhlIGJvdHRvbSBvZiBpdCdzIGhlaWdodCBhcyBiYXNlIGZvciBtaW4gdGVtcFxyXG4gIHJldHVybiAodG9QaXhlbHMgKiAtMSkgKyBoZWlnaHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVCZXR3ZWVuKGRvbUVsZW1lbnRzKSB7XHJcbiAgZG9tRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgaWYgKChpICsgMikgJSAzICE9PSAwKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3NpdGlvbkNoYXJ0TGluZXMoaG91cnMsIG1hcmdpblgsIHBvc2l0aW9uc1gsIHRleHRTcGFjZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIGNvbnN0IGhvdXJMaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFydC1saW5lLWhvdXInKTtcclxuICBjb25zdCBiYXNlTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1saW5lLWJhc2UnKTtcclxuICBjb25zdCBob3Vyc1RleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJzLWNoYXJ0LXRleHQnKTtcclxuICBjb25zdCBob3Vyc051bWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cnMtY2hhcnQtbnVtYmVycycpO1xyXG4gIC8vIHBvc2l0aW9uIGxpbmVzXHJcbiAgYmFzZUxpbmUuc2V0QXR0cmlidXRlKCd4MScsIGAke21hcmdpblggLyAyfWApO1xyXG4gIGJhc2VMaW5lLnNldEF0dHJpYnV0ZSgneTEnLCBgJHtoZWlnaHQgLSAodGV4dFNwYWNlIC8gMil9YCk7XHJcbiAgYmFzZUxpbmUuc2V0QXR0cmlidXRlKCd4MicsIGAke3dpZHRoICsgKG1hcmdpblggLyAyKX1gKTtcclxuICBiYXNlTGluZS5zZXRBdHRyaWJ1dGUoJ3kyJywgYCR7aGVpZ2h0IC0gKHRleHRTcGFjZSAvIDIpfWApO1xyXG5cclxuICBob3VyTGluZXMuZm9yRWFjaCgobGluZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgcG9zaXRpb25YID0gcG9zaXRpb25zWFtpXSArIChtYXJnaW5YIC8gMik7XHJcbiAgICBsZXQgbGluZUxlbmd0aCA9IDQ7XHJcbiAgICBpZiAoKGkgKyAyKSAlIDMgPT09IDApIGxpbmVMZW5ndGggPSAxMDtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd4MScsIGAke3Bvc2l0aW9uWH1gKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd5MScsIGAke2hlaWdodCAtICh0ZXh0U3BhY2UgLyAyKX1gKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd4MicsIGAke3Bvc2l0aW9uWH1gKTtcclxuICAgIGxpbmUuc2V0QXR0cmlidXRlKCd5MicsIGAke2hlaWdodCAtICh0ZXh0U3BhY2UgLyAyKSAtIGxpbmVMZW5ndGh9YCk7XHJcbiAgfSk7XHJcbiAgLy8gcG9zaXRpb24gaG91ciB0ZXh0XHJcbiAgaG91cnNUZXh0cy5mb3JFYWNoKCh0ZXh0LCBpKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0TWFyZ2luID0gMTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd4JywgYCR7cG9zaXRpb25zWFtpXSArIChtYXJnaW5YIC8gNCl9YCk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneScsIGAke2hlaWdodCAtIHRleHRNYXJnaW59YCk7XHJcbiAgfSk7XHJcbiAgaGlkZUJldHdlZW4oaG91cnNUZXh0cyk7XHJcbiAgLy8gYWRkIGhvdXIgbnVtYmVyc1xyXG4gIGhvdXJzTnVtYmVycy5mb3JFYWNoKChob3VyLCBpKSA9PiB7XHJcbiAgICBjb25zdCB0aGlzb3VyID0gbmV3IERhdGUoaG91cnNbaV0pLmdldEhvdXJzKCk7XHJcbiAgICBob3VyLnRleHRDb250ZW50ID0gdGhpc291cjtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmUodGVtcHMsIG1hcmdpblgsIHBvc2l0aW9uc1gsIGNoYXJ0c0hlaWdodFRlbXBzLCBob3VycywgdGV4dFNwYWNlKSB7XHJcbiAgY29uc3QgdGVtcENoYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1jaGFydC10ZW1wZXJhdHVyZScpO1xyXG4gIGNvbnN0IHRlbXBDaGFydFZlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcC1jaGFydC12ZWN0b3InKTtcclxuICBjb25zdCB0ZW1wQ2hhcnRUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLWNoYXJ0LXRleHQnKTtcclxuICBjb25zdCB0ZW1wQ2hhcnROdW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAtY2hhcnQtdGV4dCAudGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgY29uc3QgcG9zaXRpb25zWSA9IFtdO1xyXG4gIC8vIHNldCB2YWx1ZXMgZm9yIHZlY3RvciB2ZXJ0aWNhbCBwb3NpdGlvbnNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQodGVtcHNbaV0pO1xyXG4gICAgcG9zaXRpb25zWS5wdXNoKGN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IG1pblZhbHVlID0gcG9zaXRpb25zWS5yZWR1Y2UoKG1pbiwgY3VycmVudCkgPT4gKG1pbiA8IGN1cnJlbnQgPyBtaW4gOiBjdXJyZW50KSk7XHJcbiAgY29uc3QgbWF4VmFsdWUgPSBwb3NpdGlvbnNZLnJlZHVjZSgobWF4LCBjdXJyZW50KSA9PiAobWF4ID4gY3VycmVudCA/IG1heCA6IGN1cnJlbnQpKTtcclxuICAvLyB0dXJuIHZhbHVlcyB0byBwaXhlbHNcclxuICBjb25zdCBwb3NpdGlvbnNUb1BpeGVscyA9IHBvc2l0aW9uc1kubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcGVyY2VudCA9IHJhbmdlUGVyY2VudChtaW5WYWx1ZSwgbWF4VmFsdWUsIHZhbHVlKTtcclxuICAgIHJldHVybiByYW5nZVBlcmNlbnRUb1BpeGVscyhwZXJjZW50LCBjaGFydHNIZWlnaHRUZW1wcyk7XHJcbiAgfSk7XHJcbiAgLy8gdXNlIHZhbHVlcyBvbiBkcmF3XHJcbiAgbGV0IGRyYXdUZW1wID0gJyc7XHJcbiAgcG9zaXRpb25zWC5mb3JFYWNoKChwb3MsIGkpID0+IHtcclxuICAgIGNvbnN0IGxpbmVDb21tYW5kID0gaSA9PT0gMCA/ICdNJyA6ICdMJztcclxuICAgIGNvbnN0IHBvc1ggPSBwb3MgKyBtYXJnaW5YIC8gMjtcclxuICAgIGNvbnN0IHBvc1kgPSBwb3NpdGlvbnNUb1BpeGVsc1tpXTtcclxuICAgIGRyYXdUZW1wICs9IGAgJHtsaW5lQ29tbWFuZH0gJHtwb3NYfSAke3Bvc1kgKyAodGV4dFNwYWNlIC8gMil9YDtcclxuICB9KTtcclxuXHJcbiAgdGVtcENoYXJ0LnNldEF0dHJpYnV0ZSgnZCcsIGRyYXdUZW1wKTtcclxuXHJcbiAgLy8gcG9zaXRpb24gdGhlIG51bWJlcnMgb24gZWFjaCB2ZWN0b3JcclxuICB0ZW1wQ2hhcnRUZXh0cy5mb3JFYWNoKCh0ZXh0LCBpKSA9PiB7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneCcsIHBvc2l0aW9uc1hbaV0pO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3knLCBwb3NpdGlvbnNUb1BpeGVsc1tpXSArICh0ZXh0U3BhY2UgLyA0KSk7XHJcbiAgfSk7XHJcbiAgaGlkZUJldHdlZW4odGVtcENoYXJ0VGV4dHMpO1xyXG4gIHRlbXBDaGFydE51bWJlcnMuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiB7XHJcbiAgICB2YWx1ZUFkanVzdChudW1iZXIsIG51bWJlci50ZXh0Q29udGVudCwgdGVtcHNbaV0pO1xyXG4gICAgbnVtYmVyLmRhdGFzZXQuY2Vsc2l1cyA9IHRlbXBzW2ldO1xyXG4gICAgbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQodGVtcHNbaV0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBwb3NpdGlvbiBjaXJjbGUgdmVjdG9yc1xyXG4gIHRlbXBDaGFydFZlY3RvcnMuZm9yRWFjaCgodmVjdG9yLCBpKSA9PiB7XHJcbiAgICB2ZWN0b3Iuc2V0QXR0cmlidXRlKCdjeCcsIGAke3Bvc2l0aW9uc1hbaV0gKyAobWFyZ2luWCAvIDIpfWApO1xyXG4gICAgdmVjdG9yLnNldEF0dHJpYnV0ZSgnY3knLCBgJHtwb3NpdGlvbnNUb1BpeGVsc1tpXSArICh0ZXh0U3BhY2UgLyAyKX1gKTtcclxuICB9KTtcclxuICBoaWRlQmV0d2Vlbih0ZW1wQ2hhcnRWZWN0b3JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW1wdHlDaGFydChkb21FbGVtZW50LCBtYXJnaW5YLCBwb3NpdGlvbnNYLCBoZWlnaHQpIHtcclxuICBsZXQgZHJhd1RlbXAgPSAnJztcclxuICBwb3NpdGlvbnNYLmZvckVhY2goKHBvcywgaSkgPT4ge1xyXG4gICAgY29uc3QgbGluZUNvbW1hbmQgPSBpID09PSAwID8gJ00nIDogJ0wnO1xyXG4gICAgY29uc3QgcG9zWCA9IHBvcyArIG1hcmdpblggLyAyO1xyXG4gICAgZHJhd1RlbXAgKz0gYCAke2xpbmVDb21tYW5kfSAke3Bvc1h9ICR7aGVpZ2h0fWA7XHJcbiAgfSk7XHJcbiAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2QnLCBkcmF3VGVtcCk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWVBZGp1c3QoZG9tRWxlbWVudCwgZnJvbVZhbHVlLCB0b1ZhbHVlKSB7XHJcbiAgY29uc3QgcXVhbnRpdHkgPSA1MDtcclxuICBjb25zdCBpc0Zsb2F0ID0gZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXBlcmF0dXJlLW51bWJlcicpID8gMSA6IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSArPSAxKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChmcm9tVmFsdWUpICsgKCgodG9WYWx1ZSAtIGZyb21WYWx1ZSkgLyBxdWFudGl0eSkgKiAoaSArIDEpKTtcclxuICAgICAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGkgPT09IHF1YW50aXR5IC0gMSA/IHRvVmFsdWUgOiBjdXJyZW50VmFsdWUudG9GaXhlZChpc0Zsb2F0KTtcclxuICAgIH0sIDI1ICogKGkgKyAxKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgc2V0TWludXRlcyxcclxuICBnZXRNaW51dGVzLFxyXG4gIGlzQmVmb3JlLFxyXG4gIGlzQWZ0ZXIsXHJcbn0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgY2xvdWRzSGlnaCBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2Nsb3Vkcy1oaWdoLnBuZyc7XHJcbmltcG9ydCBjbG91ZHNMb3cgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9jbG91ZHMtbG93LnBuZyc7XHJcbmltcG9ydCBjbG91ZHNNaWRkbGUgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9jbG91ZHMtbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBkcml6emxlSGlnaCBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2RyaXp6bGUtaGlnaC5wbmcnO1xyXG5pbXBvcnQgZHJpenpsZUxvdyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2RyaXp6bGUtbG93LnBuZyc7XHJcbmltcG9ydCBkcml6emxlTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvZHJpenpsZS1taWRkbGUucG5nJztcclxuaW1wb3J0IGZvZyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2ZvZy5wbmcnO1xyXG5pbXBvcnQgaGFpbEhpZ2ggZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9oYWlsLWhpZ2gucG5nJztcclxuaW1wb3J0IGhhaWxMb3cgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9oYWlsLWxvdy5wbmcnO1xyXG5pbXBvcnQgaWNlTG93IGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaWNlLWxvdy5wbmcnO1xyXG5pbXBvcnQgaWNlTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaWNlLW1pZGRsZS5wbmcnO1xyXG5pbXBvcnQgaWNlU21hbGwgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9pY2Utc21hbGwucG5nJztcclxuaW1wb3J0IG1vb24gZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9tb29uLnBuZyc7XHJcbmltcG9ydCBtb29uQ2xlYXJTa3kgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9tb29uLWNsZWFyLXNreS5wbmcnO1xyXG5pbXBvcnQgcmFpbkJpZ0hpZ2ggZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9yYWluLWJpZy1oaWdoLnBuZyc7XHJcbmltcG9ydCByYWluQmlnTG93IGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1iaWctbG93LnBuZyc7XHJcbmltcG9ydCByYWluQmlnTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1iaWctbWlkZGxlLnBuZyc7XHJcbmltcG9ydCByYWluSGlnaCBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4taGlnaC5wbmcnO1xyXG5pbXBvcnQgcmFpbkxvdyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4tbG93LnBuZyc7XHJcbmltcG9ydCByYWluTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1taWRkbGUucG5nJztcclxuaW1wb3J0IHNub3dCaWdIaWdoIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc25vdy1iaWctaGlnaC5wbmcnO1xyXG5pbXBvcnQgc25vd0JpZ0xvdyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3Nub3ctYmlnLWxvdy5wbmcnO1xyXG5pbXBvcnQgc25vd0hpZ2ggZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LWhpZ2gucG5nJztcclxuaW1wb3J0IHNub3dMb3cgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LWxvdy5wbmcnO1xyXG5pbXBvcnQgc25vd01pZGRsZSBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3Nub3ctbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBzdW4gZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zdW4ucG5nJztcclxuaW1wb3J0IHN1bkNsZWFyU2t5IGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc3VuLWNsZWFyLXNreS5wbmcnO1xyXG5pbXBvcnQgdGh1bmRlciBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3RodW5kZXIucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJJY29uKGljb25QYXJ0cywgbG9jYWxUaW1lLCBzdW5yaXNlLCBzdW5zZXQpIHtcclxuICAvLyBlYWNoIGltYWdlIHdpbGwgYmUgYWRkZWQgaGVyZSBDU1MgZm9ybWF0IGJlZm9yZSByZXR1cm5pbmcgaXRcclxuICBsZXQgaW1hZ2VzID0gJyc7XHJcbiAgLy8gYXBwbHkgbG9jYWwgbWludXRlcyB0byBjaXR5IHRpbWUgYXMgdGhlIEFQSSBhbHdheXMgcmV0dXJucyAwMFxyXG4gIGxldCBzdW5Nb29uO1xyXG4gIGlmIChsb2NhbFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY2l0eVRpbWUgPSBzZXRNaW51dGVzKG5ldyBEYXRlKGxvY2FsVGltZSksIGdldE1pbnV0ZXMobmV3IERhdGUoKSkpO1xyXG4gICAgY29uc3QgaXNEYXkgPSBpc0JlZm9yZShuZXcgRGF0ZShzdW5yaXNlKSwgbmV3IERhdGUoY2l0eVRpbWUpKVxyXG4gICAgJiYgaXNBZnRlcihuZXcgRGF0ZShzdW5zZXQpLCBuZXcgRGF0ZShjaXR5VGltZSkpO1xyXG4gICAgY29uc3QgaXNDbGVhckRheSA9IGljb25QYXJ0cy5sZW5ndGggPT09IDEgJiYgaWNvblBhcnRzWzBdID09PSAnc3VuTW9vbic7XHJcblxyXG4gICAgaWYgKGlzRGF5KSB7XHJcbiAgICAgIHN1bk1vb24gPSBpc0NsZWFyRGF5ID8gc3VuQ2xlYXJTa3kgOiBzdW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdW5Nb29uID0gaXNDbGVhckRheSA/IG1vb25DbGVhclNreSA6IG1vb247XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHN1bk1vb24gPSBzdW47XHJcbiAgfVxyXG5cclxuICAvLyBsaXN0IGltYWdlcyBzbyB0aGV5IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgZnJvbSBhIHN0cmluZ1xyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgc3VuTW9vbixcclxuICAgIGNsb3Vkc0hpZ2gsXHJcbiAgICBjbG91ZHNMb3csXHJcbiAgICBjbG91ZHNNaWRkbGUsXHJcbiAgICBkcml6emxlSGlnaCxcclxuICAgIGRyaXp6bGVMb3csXHJcbiAgICBkcml6emxlTWlkZGxlLFxyXG4gICAgZm9nLFxyXG4gICAgaGFpbEhpZ2gsXHJcbiAgICBoYWlsTG93LFxyXG4gICAgaWNlTG93LFxyXG4gICAgaWNlTWlkZGxlLFxyXG4gICAgaWNlU21hbGwsXHJcbiAgICByYWluQmlnSGlnaCxcclxuICAgIHJhaW5CaWdMb3csXHJcbiAgICByYWluQmlnTWlkZGxlLFxyXG4gICAgcmFpbkhpZ2gsXHJcbiAgICByYWluTG93LFxyXG4gICAgcmFpbk1pZGRsZSxcclxuICAgIHNub3dCaWdIaWdoLFxyXG4gICAgc25vd0JpZ0xvdyxcclxuICAgIHNub3dIaWdoLFxyXG4gICAgc25vd0xvdyxcclxuICAgIHNub3dNaWRkbGUsXHJcbiAgICB0aHVuZGVyLFxyXG4gIH07XHJcblxyXG4gIGljb25QYXJ0cy5mb3JFYWNoKChwYXJ0LCBpKSA9PiB7XHJcbiAgICBjb25zdCBjb21tYSA9IGAke2kgIT09IDAgPyAnLCAnIDogJyd9YDtcclxuICAgIGltYWdlcyArPSBgJHtjb21tYX11cmwoJHtpY29uc1twYXJ0XX0pYDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGltYWdlcztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWF0aGVyY29kZShyZXF1ZXN0ZWRDb2RlKSB7XHJcbiAgLypcclxuICAqIHNvdXJjZTogaHR0cHM6Ly9vcGVuLW1ldGVvLmNvbS9lbi9kb2NzXHJcbiAgKiBXTU8gV2VhdGhlciBpbnRlcnByZXRhdGlvbiBjb2RlcyAoV1cpXHJcbiAgKiBDb2RlIC0gRGVzY3JpcHRpb25cclxuICAqIDAgLS0tLS0tLS0tLSBDbGVhciBza3lcclxuICAqIDEsIDIsIDMgLS0tLSBNYWlubHkgY2xlYXIsIHBhcnRseSBjbG91ZHksIGFuZCBvdmVyY2FzdFxyXG4gICogNDUsIDQ4IC0tLS0tIEZvZyBhbmQgZGVwb3NpdGluZyByaW1lIGZvZ1xyXG4gICogNTEsIDUzLCA1NSAtIERyaXp6bGU6IExpZ2h0LCBtb2RlcmF0ZSwgYW5kIGRlbnNlIGludGVuc2l0eVxyXG4gICogNTYsIDU3IC0tLS0tIEZyZWV6aW5nIERyaXp6bGU6IExpZ2h0IGFuZCBkZW5zZSBpbnRlbnNpdHlcclxuICAqIDYxLCA2MywgNjUgLSBSYWluOiBTbGlnaHQsIG1vZGVyYXRlIGFuZCBoZWF2eSBpbnRlbnNpdHlcclxuICAqIDY2LCA2NyAtLS0tLSBGcmVlemluZyBSYWluOiBMaWdodCBhbmQgaGVhdnkgaW50ZW5zaXR5XHJcbiAgKiA3MSwgNzMsIDc1IC0gU25vdyBmYWxsOiBTbGlnaHQsIG1vZGVyYXRlLCBhbmQgaGVhdnkgaW50ZW5zaXR5XHJcbiAgKiA3NyAtLS0tLS0tLS0gU25vdyBncmFpbnNcclxuICAqIDgwLCA4MSwgODIgLSBSYWluIHNob3dlcnM6IFNsaWdodCwgbW9kZXJhdGUsIGFuZCB2aW9sZW50XHJcbiAgKiA4NSwgODYgLS0tLS0gU25vdyBzaG93ZXJzIHNsaWdodCBhbmQgaGVhdnlcclxuICAqIDk1ICogLS0tLS0tLSBUaHVuZGVyc3Rvcm06IFNsaWdodCBvciBtb2RlcmF0ZVxyXG4gICogOTYsIDk5ICogLS0tIFRodW5kZXJzdG9ybSB3aXRoIHNsaWdodCBhbmQgaGVhdnkgaGFpbFxyXG4gICogKCopIFRodW5kZXJzdG9ybSBmb3JlY2FzdCB3aXRoIGhhaWwgaXMgb25seSBhdmFpbGFibGUgaW4gQ2VudHJhbCBFdXJvcGVcclxuICAqL1xyXG5cclxuICBjb25zdCBjb2RlcyA9IFtcclxuICAgIHtcclxuICAgICAgY29kZTogMCxcclxuICAgICAgd2VhdGhlcjogJ2NsZWFyIHNreScsXHJcbiAgICAgIGljb246IFsnc3VuTW9vbiddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogMSxcclxuICAgICAgd2VhdGhlcjogJ21haW5seSBjbGVhcicsXHJcbiAgICAgIGljb246IFsnY2xvdWRzTG93JywgJ3N1bk1vb24nXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDIsXHJcbiAgICAgIHdlYXRoZXI6ICdwYXJ0bHkgY2xvdWR5JyxcclxuICAgICAgaWNvbjogWydjbG91ZHNNaWRkbGUnLCAnc3VuTW9vbiddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogMyxcclxuICAgICAgd2VhdGhlcjogJ292ZXJjYXN0JyxcclxuICAgICAgaWNvbjogWydjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA0NSxcclxuICAgICAgd2VhdGhlcjogJ2ZvZycsXHJcbiAgICAgIGljb246IFsnZm9nJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDQ4LFxyXG4gICAgICB3ZWF0aGVyOiAnZGVwb3NpdGluZyByaW1lIGZvZycsXHJcbiAgICAgIGljb246IFsnaWNlU21hbGwnLCAnZm9nJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDUxLFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydkcml6emxlTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDUzLFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ21vZGVyYXRlJyxcclxuICAgICAgaWNvbjogWydkcml6emxlTWlkZGxlJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDU1LFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2RlbnNlJyxcclxuICAgICAgaWNvbjogWydkcml6emxlSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA1NixcclxuICAgICAgd2VhdGhlcjogJ2ZyZWV6aW5nIGRyaXp6bGUnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdsaWdodCcsXHJcbiAgICAgIGljb246IFsncmFpbkRyaXp6bGVIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDU3LFxyXG4gICAgICB3ZWF0aGVyOiAnZnJlZXppbmcgZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2RlbnNlJyxcclxuICAgICAgaWNvbjogWydpY2VNaWRkbGUnLCAncmFpbkRyaXp6bGVIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDYxLFxyXG4gICAgICB3ZWF0aGVyOiAncmFpbicsXHJcbiAgICAgIGludGVuc2l0eTogJ3NsaWdodCcsXHJcbiAgICAgIGljb246IFsncmFpbkxvdycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2MyxcclxuICAgICAgd2VhdGhlcjogJ3JhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsncmFpbk1pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2NSxcclxuICAgICAgd2VhdGhlcjogJ3JhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eScsXHJcbiAgICAgIGljb246IFsncmFpbkhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNjYsXHJcbiAgICAgIHdlYXRoZXI6ICdmcmVlemluZyByYWluJyxcclxuICAgICAgaW50ZW5zaXR5OiAnbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ2ljZU1pZGRsZScsICdyYWluTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDY3LFxyXG4gICAgICB3ZWF0aGVyOiAnZnJlZXppbmcgcmFpbicsXHJcbiAgICAgIGludGVuc2l0eTogJ2hlYXZ5JyxcclxuICAgICAgaWNvbjogWydpY2VNaWRkbGUnLCAncmFpbkhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzEsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGZhbGwnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdzbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3Nub3dMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzMsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGZhbGwnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsnc25vd01pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA3NSxcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgZmFsbCcsXHJcbiAgICAgIGludGVuc2l0eTogJ2hlYXZ5JyxcclxuICAgICAgaWNvbjogWydzbm93SGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA3NyxcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgZ3JhaW5zJyxcclxuICAgICAgaWNvbjogWydpY2VMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogODAsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluIHNob3dlcnMnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdzbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5CaWdMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogODEsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluIHNob3dlcnMnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsncmFpbkJpZ01pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA4MixcclxuICAgICAgd2VhdGhlcjogJ3JhaW4gc2hvd2VycycsXHJcbiAgICAgIGludGVuc2l0eTogJ3Zpb2xlbnQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5CaWdIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDg1LFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydzbm93QmlnTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDg2LFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnaGVhdnknLFxyXG4gICAgICBpY29uOiBbJ3Nub3dCaWdIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDk1LFxyXG4gICAgICB3ZWF0aGVyOiAndGh1bmRlcnN0b3JtJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0IHRvIG1vZGVyYXRlJyxcclxuICAgICAgaWNvbjogWyd0aHVuZGVyJywgJ3JhaW5IaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDk2LFxyXG4gICAgICB3ZWF0aGVyOiAndGh1bmRlcnN0b3JtJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0IGhhaWwnLFxyXG4gICAgICBpY29uOiBbJ2hhaWxMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogOTksXHJcbiAgICAgIHdlYXRoZXI6ICd0aHVuZGVyc3Rvcm0nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eSBoYWlsJyxcclxuICAgICAgaWNvbjogWydoYWlsSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RlZCA9IGNvZGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSByZXF1ZXN0ZWRDb2RlKTtcclxuXHJcbiAgcmV0dXJuIGNvZGVzW3JlcXVlc3RlZF07XHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuL2RvbS9zZWFyY2gnO1xyXG5pbXBvcnQgd2VhdGhlckN1cnJlbnQgZnJvbSAnLi9kb20vd2VhdGhlckN1cnJlbnQnO1xyXG5pbXBvcnQgd2VhdGhlckRhaWx5SG91cmx5IGZyb20gJy4vZG9tL3dlYXRoZXJEYWlseUhvdXJseSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVWkoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBib2R5LmFwcGVuZChcclxuICAgIHNlYXJjaCgpLFxyXG4gICAgd2VhdGhlckN1cnJlbnQoKSxcclxuICAgIHdlYXRoZXJEYWlseUhvdXJseSgpLFxyXG4gICk7XHJcbn1cclxuIiwiY29uc3QgQ0NfUkVHRVggPSAvXlthLXpdezJ9JC9pO1xuY29uc3QgRkxBR19MRU5HVEggPSA0O1xuY29uc3QgT0ZGU0VUID0gMTI3Mzk3O1xuZnVuY3Rpb24gY291bnRyeUNvZGVFbW9qaShjYykge1xuICBpZiAoIUNDX1JFR0VYLnRlc3QoY2MpKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjYyBhcmd1bWVudCBtdXN0IGJlIGFuIElTTyAzMTY2LTEgYWxwaGEtMiBzdHJpbmcsIGJ1dCBnb3QgJyR7dHlwZSA9PT0gXCJzdHJpbmdcIiA/IGNjIDogdHlwZX0nIGluc3RlYWQuYCk7XG4gIH1cbiAgY29uc3QgY29kZVBvaW50cyA9IFsuLi5jYy50b1VwcGVyQ2FzZSgpXS5tYXAoKGMpID0+IGMuY29kZVBvaW50QXQoKSArIE9GRlNFVCk7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKTtcbn1cbmZ1bmN0aW9uIGVtb2ppQ291bnRyeUNvZGUoZmxhZykge1xuICBpZiAoZmxhZy5sZW5ndGggIT09IEZMQUdfTEVOR1RIKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBmbGFnO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGZsYWcgYXJndW1lbnQgbXVzdCBiZSBhIGZsYWcgZW1vamksIGJ1dCBnb3QgJyR7dHlwZSA9PT0gXCJzdHJpbmdcIiA/IGZsYWcgOiB0eXBlfScgaW5zdGVhZC5gKTtcbiAgfVxuICBjb25zdCBjb2RlUG9pbnRzID0gWy4uLmZsYWddLm1hcCgoYykgPT4gYy5jb2RlUG9pbnRBdCgpIC0gT0ZGU0VUKTtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpO1xufVxudmFyIHNyY19kZWZhdWx0ID0gY291bnRyeUNvZGVFbW9qaTtcbmV4cG9ydCB7XG4gIGNvdW50cnlDb2RlRW1vamksXG4gIHNyY19kZWZhdWx0IGFzIGRlZmF1bHQsXG4gIGVtb2ppQ291bnRyeUNvZGVcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=