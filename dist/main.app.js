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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --gauge-border-width: 7px;\r\n  --unit-underline-width: 3px;\r\n  --compass-color: rgba(50, 50, 255, .10);\r\n}\r\n\r\n.weather-current {\r\n  isolation: isolate;\r\n  box-sizing: border-box;\r\n  width: 430px;\r\n  height: 250px;\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, auto);\r\n  grid-template-columns: 1fr auto auto;\r\n  grid-template-areas:\r\n    \"city city city\"\r\n    \"icon temp temp\"\r\n    \"icon humi wind\"\r\n    \"code humi wind\";\r\n  gap: 5px;\r\n  background-color: rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 10px;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-current p {\r\n  margin: 0;\r\n}\r\n\r\n/* city name */\r\n\r\n.city-div {\r\n  grid-area: city;\r\n  text-align: center;\r\n}\r\n\r\n.city-para {\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-1);\r\n  font-weight: 800;\r\n  padding: 0 .25rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/* icon */\r\n\r\n.weather-current-icon {\r\n  grid-area: icon;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, .25));\r\n}\r\n\r\n/* weathercode */\r\n\r\n.weathercode-div {\r\n  grid-area: code;\r\n  color: var(--txt-color-1);\r\n  text-align: center;\r\n}\r\n\r\n.weathercode-para {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* temperature */\r\n\r\n.temp-div {\r\n  grid-area: temp;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-rows: auto auto;\r\n  grid-template-areas:\r\n    \"curr unit\"\r\n    \"feel feel\";\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.temp-current {\r\n  grid-area: curr;\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n}\r\n\r\n/* humidity */\r\n\r\n.humidity-div {\r\n  grid-area: humi;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.humidity-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border: var(--gauge-border-width) solid rgba(50, 50, 255, .25);\r\n  border-radius: 50%;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.humidity-gauge-percent {\r\n  position: absolute;\r\n  border: var(--gauge-border-width) solid blue;\r\n  border-radius: 50%;\r\n  inset: calc(var(--gauge-border-width) * -1);\r\n}\r\n\r\n.humidity {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.humidity-title {\r\n  font-size: 1.15rem;\r\n  color: var(--txt-color-1);\r\n  height: 25px;\r\n}\r\n\r\n/* wind */\r\n\r\n.wind-div {\r\n  grid-area: wind;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.wind-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.wind-speed {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.wind-compass {\r\n  position: absolute;\r\n  inset: 0;\r\n  background:\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat,\r\n    radial-gradient(transparent 60%, var(--compass-color) 61%, var(--compass-color) 69%, transparent 70%);\r\n  background-size: 100%;\r\n\r\n}\r\n\r\n.wind-direction {\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  rotate: 0deg;\r\n  background: radial-gradient(transparent 60%, rgba(0, 0, 255, .5) 60%);\r\n  mask-image: conic-gradient(red 5%, transparent 5%, transparent 95%, red 95%);\r\n  transition: rotate ease-out 2s;\r\n}\r\n\r\n.wind-title-div {\r\n  width: 100%;\r\n  height: 25px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.wind-title {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* for units */\r\n\r\n.gauge-unit {\r\n  grid-area: unit;\r\n  position: relative;\r\n  align-self: baseline;\r\n  justify-self: left;\r\n  width: 3rem;\r\n  height: 2.5rem;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  appearance: none;\r\n}\r\n.gauge-unit:hover {\r\n  background: linear-gradient(to top, blue var(--unit-underline-width), transparent var(--unit-underline-width));\r\n}\r\n.gauge-unit::before,\r\n.gauge-unit::after {\r\n  position: absolute;\r\n  left: 0;\r\n  inset: 0;\r\n  transition: top 200ms ease-in-out;\r\n}\r\n.gauge-unit::before {\r\n  top: 100%;\r\n}\r\n.gauge-unit::after {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::before {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::after {\r\n  top: 100%\r\n}\r\n\r\n.temp-apparent-div {\r\n  grid-area: feel;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-2);\r\n  display: flex;\r\n}\r\n\r\n.temp-apparent {\r\n  padding-left: 5px;\r\n}\r\n\r\n.gauge-unit-apparent {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.25rem;\r\n  justify-self: left;\r\n}\r\n\r\n.gauge-unit.temperature-unit::before {\r\n  content: \"°F\";\r\n}\r\n.gauge-unit.temperature-unit::after {\r\n  content: \"°C\";\r\n}\r\n\r\n.wind-speed-unit{\r\n  width: 2.0rem;\r\n  height: 1.10rem;\r\n  font-size: .9rem;\r\n}\r\n.gauge-unit.wind-speed-unit::before {\r\n  content: \"mph\";\r\n}\r\n.gauge-unit.wind-speed-unit::after {\r\n  content: \"km/h\";\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/weatherCurrent.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC,oCAAoC;EACpC;;;;oBAIkB;EAClB,QAAQ;EACR,0CAA0C;EAC1C,2BAA2B;EAC3B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA,cAAc;;AAEd;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,SAAS;;AAET;EACE,eAAe;EACf,4BAA4B;EAC5B,wBAAwB;EACxB,2BAA2B;EAC3B,mDAAmD;AACrD;;AAEA,gBAAgB;;AAEhB;EACE,eAAe;EACf,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,gBAAgB;;AAEhB;EACE,eAAe;EACf,aAAa;EACb,+BAA+B;EAC/B,6BAA6B;EAC7B;;eAEa;EACb,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,aAAa;;AAEb;EACE,eAAe;EACf,aAAa;EACb,4BAA4B;EAC5B,0BAA0B;EAC1B,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,8DAA8D;EAC9D,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;AACd;;AAEA,SAAS;;AAET;EACE,eAAe;EACf,aAAa;EACb,4BAA4B;EAC5B,0BAA0B;EAC1B,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR;;yGAEuG;EACvG,qBAAqB;;AAEvB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,qEAAqE;EACrE,4EAA4E;EAC5E,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA,cAAc;;AAEd;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,8GAA8G;AAChH;AACA;;EAEE,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,iCAAiC;AACnC;AACA;EACE,SAAS;AACX;AACA;EACE,MAAM;AACR;AACA;EACE,MAAM;AACR;AACA;EACE;AACF;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,eAAe;AACjB","sourcesContent":[":root {\r\n  --gauge-border-width: 7px;\r\n  --unit-underline-width: 3px;\r\n  --compass-color: rgba(50, 50, 255, .10);\r\n}\r\n\r\n.weather-current {\r\n  isolation: isolate;\r\n  box-sizing: border-box;\r\n  width: 430px;\r\n  height: 250px;\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, auto);\r\n  grid-template-columns: 1fr auto auto;\r\n  grid-template-areas:\r\n    \"city city city\"\r\n    \"icon temp temp\"\r\n    \"icon humi wind\"\r\n    \"code humi wind\";\r\n  gap: 5px;\r\n  background-color: rgba(255, 255, 255, .25);\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 10px;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-current p {\r\n  margin: 0;\r\n}\r\n\r\n/* city name */\r\n\r\n.city-div {\r\n  grid-area: city;\r\n  text-align: center;\r\n}\r\n\r\n.city-para {\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-1);\r\n  font-weight: 800;\r\n  padding: 0 .25rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/* icon */\r\n\r\n.weather-current-icon {\r\n  grid-area: icon;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, .25));\r\n}\r\n\r\n/* weathercode */\r\n\r\n.weathercode-div {\r\n  grid-area: code;\r\n  color: var(--txt-color-1);\r\n  text-align: center;\r\n}\r\n\r\n.weathercode-para {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* temperature */\r\n\r\n.temp-div {\r\n  grid-area: temp;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-rows: auto auto;\r\n  grid-template-areas:\r\n    \"curr unit\"\r\n    \"feel feel\";\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.temp-current {\r\n  grid-area: curr;\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n}\r\n\r\n/* humidity */\r\n\r\n.humidity-div {\r\n  grid-area: humi;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.humidity-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border: var(--gauge-border-width) solid rgba(50, 50, 255, .25);\r\n  border-radius: 50%;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.humidity-gauge-percent {\r\n  position: absolute;\r\n  border: var(--gauge-border-width) solid blue;\r\n  border-radius: 50%;\r\n  inset: calc(var(--gauge-border-width) * -1);\r\n}\r\n\r\n.humidity {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.humidity-title {\r\n  font-size: 1.15rem;\r\n  color: var(--txt-color-1);\r\n  height: 25px;\r\n}\r\n\r\n/* wind */\r\n\r\n.wind-div {\r\n  grid-area: wind;\r\n  display: grid;\r\n  grid-template-rows: 1fr auto;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.wind-gauge {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  isolation: isolate;\r\n  aspect-ratio: 1/1;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.wind-speed {\r\n  font-size: 3rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.wind-compass {\r\n  position: absolute;\r\n  inset: 0;\r\n  background:\r\n    url(../media/images/wind-compass.svg) no-repeat,\r\n    radial-gradient(transparent 60%, var(--compass-color) 61%, var(--compass-color) 69%, transparent 70%);\r\n  background-size: 100%;\r\n\r\n}\r\n\r\n.wind-direction {\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  rotate: 0deg;\r\n  background: radial-gradient(transparent 60%, rgba(0, 0, 255, .5) 60%);\r\n  mask-image: conic-gradient(red 5%, transparent 5%, transparent 95%, red 95%);\r\n  transition: rotate ease-out 2s;\r\n}\r\n\r\n.wind-title-div {\r\n  width: 100%;\r\n  height: 25px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.wind-title {\r\n  font-size: 1.15rem;\r\n}\r\n\r\n/* for units */\r\n\r\n.gauge-unit {\r\n  grid-area: unit;\r\n  position: relative;\r\n  align-self: baseline;\r\n  justify-self: left;\r\n  width: 3rem;\r\n  height: 2.5rem;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  appearance: none;\r\n}\r\n.gauge-unit:hover {\r\n  background: linear-gradient(to top, blue var(--unit-underline-width), transparent var(--unit-underline-width));\r\n}\r\n.gauge-unit::before,\r\n.gauge-unit::after {\r\n  position: absolute;\r\n  left: 0;\r\n  inset: 0;\r\n  transition: top 200ms ease-in-out;\r\n}\r\n.gauge-unit::before {\r\n  top: 100%;\r\n}\r\n.gauge-unit::after {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::before {\r\n  top: 0;\r\n}\r\n.gauge-unit:checked::after {\r\n  top: 100%\r\n}\r\n\r\n.temp-apparent-div {\r\n  grid-area: feel;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-color-2);\r\n  display: flex;\r\n}\r\n\r\n.temp-apparent {\r\n  padding-left: 5px;\r\n}\r\n\r\n.gauge-unit-apparent {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  font-size: 1.25rem;\r\n  justify-self: left;\r\n}\r\n\r\n.gauge-unit.temperature-unit::before {\r\n  content: \"°F\";\r\n}\r\n.gauge-unit.temperature-unit::after {\r\n  content: \"°C\";\r\n}\r\n\r\n.wind-speed-unit{\r\n  width: 2.0rem;\r\n  height: 1.10rem;\r\n  font-size: .9rem;\r\n}\r\n.gauge-unit.wind-speed-unit::before {\r\n  content: \"mph\";\r\n}\r\n.gauge-unit.wind-speed-unit::after {\r\n  content: \"km/h\";\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.daily-card.active {\r\n  z-index: 1;\r\n  box-shadow: 0 0 0 3px blue;\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherDaily.css"],"names":[],"mappings":"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","sourcesContent":[".weather-daily {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: repeat(7, 1fr);\r\n  gap: 5px;\r\n  overflow-x: auto;\r\n  transition: opacity 2s;\r\n}\r\n\r\n.weather-daily * {\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.daily-card {\r\n  width: 165px;\r\n  background-color: #766ea8;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  grid-template-rows: auto 1fr 1fr;\r\n  grid-template-areas:\r\n    \"daily-weather  daily-weather\"\r\n    \"precipitations wind-speed   \"\r\n    \"sunrise-sunset uv-index     \";\r\n  padding: 2px;\r\n  gap: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.daily-card.active {\r\n  z-index: 1;\r\n  box-shadow: 0 0 0 3px blue;\r\n}\r\n\r\n/* main, weathercode and temperatures */\r\n\r\n.daily-weather {\r\n  grid-area: daily-weather;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \"current-day      current-day     \"\r\n    \"day-weather-icon day-weather-icon\"\r\n    \"max-temp         min-temp        \"\r\n    \"weather-descr    weather-descr   \";\r\n  align-items: end;\r\n}\r\n\r\n.daily-day {\r\n  grid-area: current-day;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-1);\r\n}\r\n\r\n.daily-weather-icon {\r\n  grid-area: day-weather-icon;\r\n  height: 75px;\r\n}\r\n\r\n.daily-temp-max-div {\r\n  grid-area: max-temp;\r\n  display: flex;\r\n  gap: 5px;\r\n  color: var(--txt-color-1);\r\n  justify-self: center;\r\n}\r\n\r\n.daily-temp-max {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.daily-temp-max-unit {\r\n  --font-size: 1.75rem;\r\n  grid-area: max-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.daily-temp-min-div {\r\n  grid-area: min-temp;\r\n  display: flex;\r\n  gap: 3px;\r\n  color: var(--txt-color-2);\r\n  justify-self: right;\r\n}\r\n\r\n.daily-temp-min {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.daily-temp-min-unit {\r\n  --font-size: 1rem;\r\n  grid-area: min-temp-unit;\r\n  width: var(--font-size);\r\n  height: var(--font-size);\r\n  font-size: var(--font-size);\r\n  margin-top: 5px;\r\n}\r\n\r\n.daily-weather-description {\r\n  grid-area: weather-descr;\r\n  font-size: 1.25rem;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n/* precipitations */\r\n\r\n.daily-precipitations {\r\n  grid-area: precipitations;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon quantity\"\r\n    \"icon hours   \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-precipitations-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/precipitations.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-precipitation-quantity {\r\n  grid-area: quantity;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-precipitations-hours {\r\n  grid-area: hours;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n/* wind speed */\r\n\r\n.daily-wind {\r\n  grid-area: wind-speed;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon speed\"\r\n    \"icon unit \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-wind-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/wind.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-wind-speed {\r\n  grid-area: speed;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-wind-speed-unit {\r\n  --font-size: .9rem;\r\n  grid-area: unit;\r\n  width: calc(var(--font-size) * 2.5);\r\n  height: calc(var(--font-size) * 1.25);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n/* sunrise and sunset */\r\n\r\n.daily-sunrise-sunset {\r\n  grid-area: sunrise-sunset;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon sunrise \"\r\n    \"icon sunset\";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-sunrise-sunset-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/sunrise-sunset.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-sunrise {\r\n  grid-area: sunrise;\r\n  font-size: 1rem;\r\n}\r\n\r\n.daily-sunset {\r\n  grid-area: sunset;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* UV index */\r\n\r\n.daily-uv {\r\n  grid-area: uv-index;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-areas:\r\n    \"icon index \"\r\n    \"icon uv    \";\r\n  align-items: center;\r\n  gap: 0px 0px;\r\n  color: var(--txt-color-2);\r\n}\r\n\r\n.daily-uv-icon {\r\n  grid-area: icon;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(../media/images/weather-daily/uv-index.png) no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.daily-uv-index {\r\n  grid-area: index;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}\r\n\r\n.daily-uv-text {\r\n  grid-area: uv;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".weather-hourly {\r\n  height: 150px;\r\n  overflow: hidden;\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hourly-chart-temperature {\r\n  fill: transparent;\r\n  stroke: red;\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  /* transition: 200ms linear; */\r\n}\r\n\r\n.temp-chart-vertex {\r\n  fill: green;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/weatherHourly.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb","sourcesContent":[".weather-hourly {\r\n  height: 150px;\r\n  overflow: hidden;\r\n}\r\n\r\n.hourly-chart {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.chart-line-hour,\r\n.chart-line-base {\r\n  stroke: gray;\r\n  stroke-width: 2px;\r\n}\r\n\r\n.hourly-chart-temperature {\r\n  fill: transparent;\r\n  stroke: red;\r\n  stroke-width: 2px;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  /* transition: 200ms linear; */\r\n}\r\n\r\n.temp-chart-vertex {\r\n  fill: green;\r\n}"],"sourceRoot":""}]);
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
    element.addEventListener('click', _functions_changeUnits__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
/* harmony import */ var _functions_moveViewBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/moveViewBox */ "./src/modules/functions/moveViewBox.js");




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
  // adding listeners to hourly cards
  const hourlyCards = section.querySelectorAll('.daily-card');
  hourlyCards.forEach((card, i) => {
    card.addEventListener('click', (e) => {
      const allCards = document.querySelectorAll('.daily-card');
      allCards.forEach((thisCard) => thisCard.classList.remove('active'));
      const thisCard = e.currentTarget;
      thisCard.classList.add('active');
      const parent = document.querySelector('.weather-hourly');
      const svg = document.querySelector('.hourly-chart');
      (0,_functions_moveViewBox__WEBPACK_IMPORTED_MODULE_2__["default"])(parent, svg, 0, i);
    });
  });
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

  for (let i = 0; i < 168; i += 1) {
    const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    verticalLine.classList.add('chart-line-hour');
    chartLinesGroup.append(verticalLine);
  }
  for (let i = 0; i < 168; i += 1) {
    const hours = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const hoursNumber = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    const hoursText = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
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

function createTempGroup() {
  const tempGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const tempChart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const tempChartNumbers = [];
  const tempChartVertices = [];

  for (let i = 0; i < 168; i += 1) {
    const degrees = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const degreesNumber = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    const degreesSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    degrees.setAttribute('x', 0);
    degrees.setAttribute('y', 0);
    degrees.setAttribute('text-anchor', 'middle');
    degrees.classList.add('temp-chart-text');
    degreesNumber.classList.add('temp-chart', 'temperature-number');
    degreesNumber.textContent = '0';
    degreesSymbol.textContent = '°';
    degrees.append(degreesNumber, degreesSymbol);
    tempChartNumbers.push(degrees);
  }
  for (let i = 0; i < 168; i += 1) {
    const vertex = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    vertex.classList.add('temp-chart-vertex');
    vertex.setAttribute('r', 4);
    tempChartVertices.push(vertex);
  }

  tempGroup.classList.add('hourly-chart-group');
  tempChart.classList.add('hourly-chart-temperature');

  tempGroup.append(tempChart, ...tempChartNumbers, ...tempChartVertices);

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

/***/ "./src/modules/functions/moveViewBox.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/moveViewBox.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ moveViewBox)
/* harmony export */ });
function moveViewBox(domParent, svg, startFromHour = 0, startFromDay = 0) {
  const width = parseInt(domParent.clientWidth, 10);
  const height = parseInt(domParent.clientHeight, 10);
  const viewboxStart = ((width / 24) * startFromHour) + (width * startFromDay);
  svg.setAttribute('viewBox', `${viewboxStart} ${0} ${width} ${height}`);
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
      (0,_updateDailyWeather__WEBPACK_IMPORTED_MODULE_3__["default"])(dailyWeatherData);
      // data for hourly weather for 24 hours of current day, then update
      const localHour = new Date(weather.current_weather.time).getHours();
      const hourlyWeatherData = {
        localHour,
        hours: weather.hourly.time,
        temps: weather.hourly.temperature_2m,
        humidity: weather.hourly.relativehumidity_2m,
        apparent: weather.hourly.apparent_temperature,
        weathercode: weather.hourly.weathercode,
        windspeed: weather.hourly.windspeed_10m,
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

// function getNext24(array, localHour) {
//   const newArray = [];
//   for (let i = 0; i < 24; i += 1) {
//     newArray.push(array[i + localHour]);
//   }

//   return newArray;
// }


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
/* harmony import */ var _moveViewBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveViewBox */ "./src/modules/functions/moveViewBox.js");




function updateHourlyWeather(data) {
  const parent = document.querySelector('.weather-hourly');
  const svg = document.querySelector('.hourly-chart');
  const hours = 168;
  // vertical space reserved on pixels for hours and temp values
  const textSpace = 45;
  const width = parseInt(parent.clientWidth, 10);
  const height = parseInt(parent.clientHeight, 10);
  const chartsHeightTemps = ((height * 80) / 100) - textSpace;
  // const chartsHeightWindHumidity = height - textSpace;
  const positionsX = [0];
  // set values for vertex horizontal positions
  for (let i = 0; i < hours; i += 1) {
    const currentValue = ((width * 7) / (hours)) * (i + 1);
    positionsX.push(currentValue);
  }

  // position hour lines and base line for the chart
  positionLinesAndHours(data.hours, positionsX, textSpace, width, height);
  // update current temperature line chart
  const chartTemp = document.querySelector('.hourly-chart-temperature');
  // detect empty draw on first load, place draw with values at 0
  if (!chartTemp.getAttribute('d')) {
    emptyChart(chartTemp, positionsX, chartsHeightTemps);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    updateTemperature(data.temps, positionsX, chartsHeightTemps, hours, textSpace);
  }, 50);

  // move viewbox to only show 24 hours
  (0,_moveViewBox__WEBPACK_IMPORTED_MODULE_2__["default"])(parent, svg, data.localHour, 0);
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
    // if ((i + 2) % 3 !== 0) {
    if (i % 4 !== 0) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });
}

function positionLinesAndHours(hours, positionsX, textSpace, width, height) {
  const hourLines = document.querySelectorAll('.chart-line-hour');
  const baseLine = document.querySelector('.chart-line-base');
  const hoursTexts = document.querySelectorAll('.hours-chart-text');
  const hoursNumbers = document.querySelectorAll('.hours-chart-numbers');
  // position lines
  baseLine.setAttribute('x1', `${0}`);
  baseLine.setAttribute('y1', `${height - (textSpace / 2)}`);
  baseLine.setAttribute('x2', `${width * 7}`);
  baseLine.setAttribute('y2', `${height - (textSpace / 2)}`);

  hourLines.forEach((line, i) => {
    const positionX = positionsX[i];
    let lineLength = 4;
    if (i % 4 === 0) lineLength = 10;
    if (i % 24 === 0) lineLength = 30;
    line.setAttribute('x1', `${positionX}`);
    line.setAttribute('y1', `${height - (textSpace / 2)}`);
    line.setAttribute('x2', `${positionX}`);
    line.setAttribute('y2', `${height - (textSpace / 2) - lineLength}`);
  });
  // position hour text
  hoursTexts.forEach((text, i) => {
    const textMargin = 1;
    text.setAttribute('x', `${positionsX[i]}`);
    text.setAttribute('y', `${height - textMargin}`);
  });
  hideBetween(hoursTexts);
  // add hour numbers
  hoursNumbers.forEach((hour, i) => {
    const thisour = new Date(hours[i]).getHours();
    hour.textContent = thisour;
  });
}

function updateTemperature(temps, positionsX, chartsHeightTemps, hours, textSpace) {
  const tempChart = document.querySelector('.hourly-chart-temperature');
  const tempChartVertices = document.querySelectorAll('.temp-chart-vertex');
  const tempChartTexts = document.querySelectorAll('.temp-chart-text');
  const tempChartNumbers = document.querySelectorAll('.temp-chart-text .temperature-number');
  const positionsY = [];
  // set values for vertex vertical positions
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
    const posX = pos;
    const posY = positionsToPixels[i];
    drawTemp += ` ${lineCommand} ${posX} ${posY + (textSpace / 2)}`;
  });

  tempChart.setAttribute('d', drawTemp);

  // position the numbers on each vertex
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

  // position circle vertices
  tempChartVertices.forEach((vertex, i) => {
    vertex.setAttribute('cx', `${positionsX[i]}`);
    vertex.setAttribute('cy', `${positionsToPixels[i] + (textSpace / 2)}`);
  });
  hideBetween(tempChartVertices);
}

function emptyChart(domElement, positionsX, height) {
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos;
    drawTemp += ` ${lineCommand} ${posX} ${height}`;
  });
  domElement.setAttribute('d', drawTemp);
}

// TODO: window listener resize, add dataset for starting hour and day


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsWUFBWSxhQUFhLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsU0FBUyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhEQUFXO0FBQ2pELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4REFBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSmlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVMa0M7QUFDZ0I7QUFDUTtBQUMxRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBLElBQUksdURBQU07QUFDVixJQUFJLCtEQUFjO0FBQ2xCLElBQUksbUVBQWtCO0FBQ3RCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsOEJBQThCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGdDQUFnQztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc2VhcmNoLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyQ3VycmVudC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJEYWlseUhvdXJseS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJIb3VybHkuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldEhvdXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRNaW51dGVzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0FmdGVyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc2V0TWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zZWFyY2guY3NzPzAzODMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyQ3VycmVudC5jc3M/MDc2NyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5LmNzcz81MTc0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHlIb3VybHkuY3NzP2YxNzgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXJIb3VybHkuY3NzPzgwZmUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20vY2l0aWVzTGlzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS9kYWlseUNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20vc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tL3dlYXRoZXJDdXJyZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tL3dlYXRoZXJEYWlseUhvdXJseS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS93ZWF0aGVySG91cmx5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMvYmFyQWRqdXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL2NoYW5nZVVuaXRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL21vdmVWaWV3Qm94LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zL3NlYXJjaENpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMvdW5pdENvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy91cGRhdGVDdXJyZW50V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy91cGRhdGVEYWlseVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMvdXBkYXRlSG91cmx5V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy92YWx1ZUFkanVzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy93ZWF0aGVySWNvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy93ZWF0aGVyY29kZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2NvdW50cnktY29kZS1lbW9qaS9saWIvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvc2VhcmNoLW1hZ25pZmllci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXJhZGlvdXM6IDhweDtcXHJcXG4gIC0tZmxhZy1zaXplOiAyLjI1cmVtO1xcclxcbiAgLS1tYXgtZmxhZy1zaXplOiAyLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1zZWFyY2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogMzAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGFuaW1hdGlvbjogc2VhcmNoLXJldmVhbCAxcyBjdWJpYy1iZXppZXIoLjIyLC42MSwuMzYsMSk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2VhcmNoLXJldmVhbCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTUwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0ICovXFxyXFxuXFxyXFxuLnNlYXJjaC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICAtLW1hZ25pZmllci1mb2N1cy1zaXplOiAyLjVyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tbWFnbmlmaWVyLWZvY3VzLXNpemUpICsgM3B4KTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKC4yNXJlbSArIHZhcigtLXJhZGlvdXMpKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogLjc1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1yYWRpb3VzKSAwIHZhcigtLXJhZGlvdXMpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDMwMG1zLCBiYWNrZ3JvdW5kLXBvc2l0aW9uIDMwMG1zO1xcclxcbn1cXHJcXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXHJcXG59XFxyXFxuLnNlYXJjaC1pbnB1dC5sb2FkaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGxvY2F0aW9ucyBsaXN0ICovXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLXJhZGlvdXMpICogLTEpKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNTUwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LFxcclxcbi5zZWFyY2gtcmVzdWx0LWVtcHR5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSAqIDEuMjUpIDFmcjtcXHJcXG4gIC8qIGhlaWdodDogNjVweDsgKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tbWF4LWZsYWctc2l6ZSkgKyAyMHB4KTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIsXFxyXFxuLnNlYXJjaC1yZXN1bHQ6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgY2FsYyh2YXIoLS1tYXgtZmxhZy1zaXplKSAqIDEuMjUpIDAgNXB4ICNlZWU7XFxyXFxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0Omxhc3QtY2hpbGQsXFxyXFxuLnNlYXJjaC1yZXN1bHQtZW1wdHkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgdmFyKC0tcmFkaW91cyk7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0IHA6bm90KC5jb3VudHJ5LWZsYWcpIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50cnktZmxhZyxcXHJcXG4uY291bnRyeS1mbGFnLW5vbmUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uY291bnRyeS1mbGFnIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZmxhZy1zaXplKTtcXHJcXG59XFxyXFxuLnNlYXJjaC1yZXN1bHQ6aG92ZXIgLmNvdW50cnktZmxhZyxcXHJcXG4uc2VhcmNoLXJlc3VsdDpmb2N1cyAuY291bnRyeS1mbGFnIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWF4LWZsYWctc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIGxvYWRpbmcgaWNvbiAqL1xcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHJpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMSkge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzU1NTtcXHJcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1sb2FkaW5nID4gOm50aC1jaGlsZCgyKSB7XFxyXFxuICBib3JkZXI6IDZweCBzb2xpZCAjNzc3O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGVhc2UtaW4gcmV2ZXJzZSBpbmZpbml0ZTtcXHJcXG4gIHNjYWxlOiA4MyU7XFxyXFxufVxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMykge1xcclxcbiAgYm9yZGVyOiA4cHggc29saWQgIzk5OTtcXHJcXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWljb24gMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxuICBzY2FsZTogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmctaWNvbiB7XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2VhcmNoLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLHlEQUFpRTtFQUNqRSxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzREFBc0Q7RUFDdEQsNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0RBQWdEO0VBQ2hELDREQUE0RDtBQUM5RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsNERBQTREO0VBQzVELGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFlBQVk7RUFDWiw4REFBOEQ7RUFDOUQsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTs7RUFFRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTs7RUFFRSwrQkFBK0I7QUFDakM7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQywwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsbURBQW1EO0VBQ25ELFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQywrQ0FBK0M7RUFDL0MsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXJhZGlvdXM6IDhweDtcXHJcXG4gIC0tZmxhZy1zaXplOiAyLjI1cmVtO1xcclxcbiAgLS1tYXgtZmxhZy1zaXplOiAyLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1zZWFyY2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogMzAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGFuaW1hdGlvbjogc2VhcmNoLXJldmVhbCAxcyBjdWJpYy1iZXppZXIoLjIyLC42MSwuMzYsMSk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2VhcmNoLXJldmVhbCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTUwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0ICovXFxyXFxuXFxyXFxuLnNlYXJjaC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICAtLW1hZ25pZmllci1mb2N1cy1zaXplOiAyLjVyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL21lZGlhL2ltYWdlcy9pY29ucy9zZWFyY2gtbWFnbmlmaWVyLnN2Zyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLW1hZ25pZmllci1mb2N1cy1zaXplKSArIDNweCk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyguMjVyZW0gKyB2YXIoLS1yYWRpb3VzKSk7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IC43NXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tcmFkaW91cykgMCB2YXIoLS1yYWRpb3VzKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAzMDBtcywgYmFja2dyb3VuZC1wb3NpdGlvbiAzMDBtcztcXHJcXG59XFxyXFxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxufVxcclxcbi5zZWFyY2gtaW5wdXQubG9hZGluZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBsb2NhdGlvbnMgbGlzdCAqL1xcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1yYWRpb3VzKSAqIC0xKSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCxcXHJcXG4uc2VhcmNoLXJlc3VsdC1lbXB0eSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGModmFyKC0tbWF4LWZsYWctc2l6ZSkgKiAxLjI1KSAxZnI7XFxyXFxuICAvKiBoZWlnaHQ6IDY1cHg7ICovXFxyXFxuICBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLW1heC1mbGFnLXNpemUpICsgMjBweCk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0OmhvdmVyLFxcclxcbi5zZWFyY2gtcmVzdWx0OmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IGNhbGModmFyKC0tbWF4LWZsYWctc2l6ZSkgKiAxLjI1KSAwIDVweCAjZWVlO1xcclxcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0Om5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdDpsYXN0LWNoaWxkLFxcclxcbi5zZWFyY2gtcmVzdWx0LWVtcHR5IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIHZhcigtLXJhZGlvdXMpO1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdCBwOm5vdCguY291bnRyeS1mbGFnKSB7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jb3VudHJ5LWZsYWcsXFxyXFxuLmNvdW50cnktZmxhZy1ub25lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmNvdW50cnktZmxhZyB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZsYWctc2l6ZSk7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0OmhvdmVyIC5jb3VudHJ5LWZsYWcsXFxyXFxuLnNlYXJjaC1yZXN1bHQ6Zm9jdXMgLmNvdW50cnktZmxhZyB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1heC1mbGFnLXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBsb2FkaW5nIGljb24gKi9cXHJcXG5cXHJcXG4uc2VhcmNoLWxvYWRpbmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICByaWdodDogMnB4O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbG9hZGluZyA+IGRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IGxvYWRpbmctaWNvbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbi5zZWFyY2gtbG9hZGluZyA+IDpudGgtY2hpbGQoMikge1xcclxcbiAgYm9yZGVyOiA2cHggc29saWQgIzc3NztcXHJcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBhbmltYXRpb246IGxvYWRpbmctaWNvbiAxcyBlYXNlLWluIHJldmVyc2UgaW5maW5pdGU7XFxyXFxuICBzY2FsZTogODMlO1xcclxcbn1cXHJcXG4uc2VhcmNoLWxvYWRpbmcgPiA6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGJvcmRlcjogOHB4IHNvbGlkICM5OTk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1pY29uIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbiAgc2NhbGU6IDYyJTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2FkaW5nLWljb24ge1xcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXR4dC1jb2xvci0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sb3ItMjogIzIyMjtcXHJcXG4gIC0tdHh0LWNvbG9yLTM6ICMzMzM7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGdlbmVyYWwgdXNlICovXFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS10eHQtY29sb3ItMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbG9yLTI6ICMyMjI7XFxyXFxuICAtLXR4dC1jb2xvci0zOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBnZW5lcmFsIHVzZSAqL1xcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL3dpbmQtY29tcGFzcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWdhdWdlLWJvcmRlci13aWR0aDogN3B4O1xcclxcbiAgLS11bml0LXVuZGVybGluZS13aWR0aDogM3B4O1xcclxcbiAgLS1jb21wYXNzLWNvbG9yOiByZ2JhKDUwLCA1MCwgMjU1LCAuMTApO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jdXJyZW50IHtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogNDMwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImNpdHkgY2l0eSBjaXR5XFxcIlxcclxcbiAgICBcXFwiaWNvbiB0ZW1wIHRlbXBcXFwiXFxyXFxuICAgIFxcXCJpY29uIGh1bWkgd2luZFxcXCJcXHJcXG4gICAgXFxcImNvZGUgaHVtaSB3aW5kXFxcIjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGNpdHkgbmFtZSAqL1xcclxcblxcclxcbi5jaXR5LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGNpdHk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIHBhZGRpbmc6IDAgLjI1cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLyogaWNvbiAqL1xcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIC4yNSkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3ZWF0aGVyY29kZSAqL1xcclxcblxcclxcbi53ZWF0aGVyY29kZS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBjb2RlO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJjb2RlLXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wZXJhdHVyZSAqL1xcclxcblxcclxcbi50ZW1wLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHRlbXA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImN1cnIgdW5pdFxcXCJcXHJcXG4gICAgXFxcImZlZWwgZmVlbFxcXCI7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jdXJyZW50IHtcXHJcXG4gIGdyaWQtYXJlYTogY3VycjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaHVtaWRpdHkgKi9cXHJcXG5cXHJcXG4uaHVtaWRpdHktZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogaHVtaTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpIHNvbGlkIHJnYmEoNTAsIDUwLCAyNTUsIC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2UtcGVyY2VudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXI6IHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgc29saWQgYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGluc2V0OiBjYWxjKHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgKiAtMSk7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCAqL1xcclxcblxcclxcbi53aW5kLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHdpbmQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWNvbXBhc3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOlxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDYwJSwgdmFyKC0tY29tcGFzcy1jb2xvcikgNjElLCB2YXIoLS1jb21wYXNzLWNvbG9yKSA2OSUsIHRyYW5zcGFyZW50IDcwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi53aW5kLWRpcmVjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHJvdGF0ZTogMGRlZztcXHJcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA2MCUsIHJnYmEoMCwgMCwgMjU1LCAuNSkgNjAlKTtcXHJcXG4gIG1hc2staW1hZ2U6IGNvbmljLWdyYWRpZW50KHJlZCA1JSwgdHJhbnNwYXJlbnQgNSUsIHRyYW5zcGFyZW50IDk1JSwgcmVkIDk1JSk7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgZWFzZS1vdXQgMnM7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlLWRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIHVuaXRzICovXFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQge1xcclxcbiAgZ3JpZC1hcmVhOiB1bml0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsdWUgdmFyKC0tdW5pdC11bmRlcmxpbmUtd2lkdGgpLCB0cmFuc3BhcmVudCB2YXIoLS11bml0LXVuZGVybGluZS13aWR0aCkpO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YmVmb3JlLFxcclxcbi5nYXVnZS11bml0OjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YWZ0ZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjphZnRlciB7XFxyXFxuICB0b3A6IDEwMCVcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogZmVlbDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdC1hcHBhcmVudCB7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZS11bml0LnRlbXBlcmF0dXJlLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQudGVtcGVyYXR1cmUtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkLXVuaXR7XFxyXFxuICB3aWR0aDogMi4wcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQud2luZC1zcGVlZC11bml0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIm1waFxcXCI7XFxyXFxufVxcclxcbi5nYXVnZS11bml0LndpbmQtc3BlZWQtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcImttL2hcXFwiO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXJDdXJyZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQzs7OztvQkFJa0I7RUFDbEIsUUFBUTtFQUNSLDBDQUEwQztFQUMxQywyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixn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QUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWdhdWdlLWJvcmRlci13aWR0aDogN3B4O1xcclxcbiAgLS11bml0LXVuZGVybGluZS13aWR0aDogM3B4O1xcclxcbiAgLS1jb21wYXNzLWNvbG9yOiByZ2JhKDUwLCA1MCwgMjU1LCAuMTApO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jdXJyZW50IHtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogNDMwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImNpdHkgY2l0eSBjaXR5XFxcIlxcclxcbiAgICBcXFwiaWNvbiB0ZW1wIHRlbXBcXFwiXFxyXFxuICAgIFxcXCJpY29uIGh1bWkgd2luZFxcXCJcXHJcXG4gICAgXFxcImNvZGUgaHVtaSB3aW5kXFxcIjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGNpdHkgbmFtZSAqL1xcclxcblxcclxcbi5jaXR5LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IGNpdHk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIHBhZGRpbmc6IDAgLjI1cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLyogaWNvbiAqL1xcclxcblxcclxcbi53ZWF0aGVyLWN1cnJlbnQtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIC4yNSkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3ZWF0aGVyY29kZSAqL1xcclxcblxcclxcbi53ZWF0aGVyY29kZS1kaXYge1xcclxcbiAgZ3JpZC1hcmVhOiBjb2RlO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJjb2RlLXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZW1wZXJhdHVyZSAqL1xcclxcblxcclxcbi50ZW1wLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHRlbXA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImN1cnIgdW5pdFxcXCJcXHJcXG4gICAgXFxcImZlZWwgZmVlbFxcXCI7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jdXJyZW50IHtcXHJcXG4gIGdyaWQtYXJlYTogY3VycjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaHVtaWRpdHkgKi9cXHJcXG5cXHJcXG4uaHVtaWRpdHktZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogaHVtaTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nYXVnZS1ib3JkZXItd2lkdGgpIHNvbGlkIHJnYmEoNTAsIDUwLCAyNTUsIC4yNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktZ2F1Z2UtcGVyY2VudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXI6IHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgc29saWQgYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGluc2V0OiBjYWxjKHZhcigtLWdhdWdlLWJvcmRlci13aWR0aCkgKiAtMSk7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogd2luZCAqL1xcclxcblxcclxcbi53aW5kLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IHdpbmQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtZ2F1Z2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi53aW5kLWNvbXBhc3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOlxcclxcbiAgICB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dpbmQtY29tcGFzcy5zdmcpIG5vLXJlcGVhdCxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDYwJSwgdmFyKC0tY29tcGFzcy1jb2xvcikgNjElLCB2YXIoLS1jb21wYXNzLWNvbG9yKSA2OSUsIHRyYW5zcGFyZW50IDcwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi53aW5kLWRpcmVjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHJvdGF0ZTogMGRlZztcXHJcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCA2MCUsIHJnYmEoMCwgMCwgMjU1LCAuNSkgNjAlKTtcXHJcXG4gIG1hc2staW1hZ2U6IGNvbmljLWdyYWRpZW50KHJlZCA1JSwgdHJhbnNwYXJlbnQgNSUsIHRyYW5zcGFyZW50IDk1JSwgcmVkIDk1JSk7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgZWFzZS1vdXQgMnM7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlLWRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIHVuaXRzICovXFxyXFxuXFxyXFxuLmdhdWdlLXVuaXQge1xcclxcbiAgZ3JpZC1hcmVhOiB1bml0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsdWUgdmFyKC0tdW5pdC11bmRlcmxpbmUtd2lkdGgpLCB0cmFuc3BhcmVudCB2YXIoLS11bml0LXVuZGVybGluZS13aWR0aCkpO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YmVmb3JlLFxcclxcbi5nYXVnZS11bml0OjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5nYXVnZS11bml0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDo6YWZ0ZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4uZ2F1Z2UtdW5pdDpjaGVja2VkOjphZnRlciB7XFxyXFxuICB0b3A6IDEwMCVcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtYXBwYXJlbnQtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogZmVlbDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLWFwcGFyZW50IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2UtdW5pdC1hcHBhcmVudCB7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZS11bml0LnRlbXBlcmF0dXJlLXVuaXQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQudGVtcGVyYXR1cmUtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi53aW5kLXNwZWVkLXVuaXR7XFxyXFxuICB3aWR0aDogMi4wcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG59XFxyXFxuLmdhdWdlLXVuaXQud2luZC1zcGVlZC11bml0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIm1waFxcXCI7XFxyXFxufVxcclxcbi5nYXVnZS11bml0LndpbmQtc3BlZWQtdW5pdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcImttL2hcXFwiO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3ByZWNpcGl0YXRpb25zLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3dpbmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvc3VucmlzZS1zdW5zZXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvdXYtaW5kZXgucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndlYXRoZXItZGFpbHkge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1kYWlseSAqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWNhcmQge1xcclxcbiAgd2lkdGg6IDE2NXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2NmVhODtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImRhaWx5LXdlYXRoZXIgIGRhaWx5LXdlYXRoZXJcXFwiXFxyXFxuICAgIFxcXCJwcmVjaXBpdGF0aW9ucyB3aW5kLXNwZWVkICAgXFxcIlxcclxcbiAgICBcXFwic3VucmlzZS1zdW5zZXQgdXYtaW5kZXggICAgIFxcXCI7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBnYXA6IDJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWNhcmQuYWN0aXZlIHtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiwgd2VhdGhlcmNvZGUgYW5kIHRlbXBlcmF0dXJlcyAqL1xcclxcblxcclxcbi5kYWlseS13ZWF0aGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogZGFpbHktd2VhdGhlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImN1cnJlbnQtZGF5ICAgICAgY3VycmVudC1kYXkgICAgIFxcXCJcXHJcXG4gICAgXFxcImRheS13ZWF0aGVyLWljb24gZGF5LXdlYXRoZXItaWNvblxcXCJcXHJcXG4gICAgXFxcIm1heC10ZW1wICAgICAgICAgbWluLXRlbXAgICAgICAgIFxcXCJcXHJcXG4gICAgXFxcIndlYXRoZXItZGVzY3IgICAgd2VhdGhlci1kZXNjciAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZGF5IHtcXHJcXG4gIGdyaWQtYXJlYTogY3VycmVudC1kYXk7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlci1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGF5LXdlYXRoZXItaWNvbjtcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWF4LWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IG1heC10ZW1wO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0xKTtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1tYXgge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWF4LXVuaXQge1xcclxcbiAgLS1mb250LXNpemU6IDEuNzVyZW07XFxyXFxuICBncmlkLWFyZWE6IG1heC10ZW1wLXVuaXQ7XFxyXFxuICB3aWR0aDogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWluLWRpdiB7XFxyXFxuICBncmlkLWFyZWE6IG1pbi10ZW1wO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogM3B4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1pbiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWluLXVuaXQge1xcclxcbiAgLS1mb250LXNpemU6IDFyZW07XFxyXFxuICBncmlkLWFyZWE6IG1pbi10ZW1wLXVuaXQ7XFxyXFxuICB3aWR0aDogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXItZGVzY3JpcHRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyLWRlc2NyO1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHJlY2lwaXRhdGlvbnMgKi9cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbnMge1xcclxcbiAgZ3JpZC1hcmVhOiBwcmVjaXBpdGF0aW9ucztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gcXVhbnRpdHlcXFwiXFxyXFxuICAgIFxcXCJpY29uIGhvdXJzICAgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDBweCAwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbnMtaWNvbiB7XFxyXFxuICBncmlkLWFyZWE6IGljb247XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbi1xdWFudGl0eSB7XFxyXFxuICBncmlkLWFyZWE6IHF1YW50aXR5O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zLWhvdXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogaG91cnM7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aW5kIHNwZWVkICovXFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQge1xcclxcbiAgZ3JpZC1hcmVhOiB3aW5kLXNwZWVkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBzcGVlZFxcXCJcXHJcXG4gICAgXFxcImljb24gdW5pdCBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtc3BlZWQge1xcclxcbiAgZ3JpZC1hcmVhOiBzcGVlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLXNwZWVkLXVuaXQge1xcclxcbiAgLS1mb250LXNpemU6IC45cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiB1bml0O1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDIuNSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDEuMjUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdW5yaXNlIGFuZCBzdW5zZXQgKi9cXHJcXG5cXHJcXG4uZGFpbHktc3VucmlzZS1zdW5zZXQge1xcclxcbiAgZ3JpZC1hcmVhOiBzdW5yaXNlLXN1bnNldDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gc3VucmlzZSBcXFwiXFxyXFxuICAgIFxcXCJpY29uIHN1bnNldFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Utc3Vuc2V0LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Uge1xcclxcbiAgZ3JpZC1hcmVhOiBzdW5yaXNlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktc3Vuc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogc3Vuc2V0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVViBpbmRleCAqL1xcclxcblxcclxcbi5kYWlseS11diB7XFxyXFxuICBncmlkLWFyZWE6IHV2LWluZGV4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBpbmRleCBcXFwiXFxyXFxuICAgIFxcXCJpY29uIHV2ICAgIFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXV2LWluZGV4IHtcXHJcXG4gIGdyaWQtYXJlYTogaW5kZXg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdXYtdGV4dCB7XFxyXFxuICBncmlkLWFyZWE6IHV2O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93ZWF0aGVyRGFpbHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGdDQUFnQztFQUNoQzs7O2tDQUdnQztFQUNoQyxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBLHVDQUF1Qzs7QUFFdkM7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkM7Ozs7dUNBSXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDOzttQkFFaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiw2REFBMkU7RUFDM0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQzs7Z0JBRWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZEQUFpRTtFQUNqRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxxQ0FBcUM7RUFDckMsMkJBQTJCO0FBQzdCOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEM7O2lCQUVlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiw2REFBMkU7RUFDM0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQzs7aUJBRWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZEQUFxRTtFQUNyRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlci1kYWlseSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWRhaWx5ICoge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktY2FyZCB7XFxyXFxuICB3aWR0aDogMTY1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY2ZWE4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiZGFpbHktd2VhdGhlciAgZGFpbHktd2VhdGhlclxcXCJcXHJcXG4gICAgXFxcInByZWNpcGl0YXRpb25zIHdpbmQtc3BlZWQgICBcXFwiXFxyXFxuICAgIFxcXCJzdW5yaXNlLXN1bnNldCB1di1pbmRleCAgICAgXFxcIjtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktY2FyZC5hY3RpdmUge1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluLCB3ZWF0aGVyY29kZSBhbmQgdGVtcGVyYXR1cmVzICovXFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBkYWlseS13ZWF0aGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY3VycmVudC1kYXkgICAgICBjdXJyZW50LWRheSAgICAgXFxcIlxcclxcbiAgICBcXFwiZGF5LXdlYXRoZXItaWNvbiBkYXktd2VhdGhlci1pY29uXFxcIlxcclxcbiAgICBcXFwibWF4LXRlbXAgICAgICAgICBtaW4tdGVtcCAgICAgICAgXFxcIlxcclxcbiAgICBcXFwid2VhdGhlci1kZXNjciAgICB3ZWF0aGVyLWRlc2NyICAgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1kYXkge1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LWRheTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkYXktd2VhdGhlci1pY29uO1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1tYXgtZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogbWF4LXRlbXA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTEpO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10ZW1wLW1heCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1tYXgtdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogMS43NXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogbWF4LXRlbXAtdW5pdDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4tZGl2IHtcXHJcXG4gIGdyaWQtYXJlYTogbWluLXRlbXA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRlbXAtbWluIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGVtcC1taW4tdW5pdCB7XFxyXFxuICAtLWZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGdyaWQtYXJlYTogbWluLXRlbXAtdW5pdDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IHdlYXRoZXItZGVzY3I7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcmVjaXBpdGF0aW9ucyAqL1xcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucyB7XFxyXFxuICBncmlkLWFyZWE6IHByZWNpcGl0YXRpb25zO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBxdWFudGl0eVxcXCJcXHJcXG4gICAgXFxcImljb24gaG91cnMgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1wcmVjaXBpdGF0aW9ucy1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3ByZWNpcGl0YXRpb25zLnBuZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktcHJlY2lwaXRhdGlvbi1xdWFudGl0eSB7XFxyXFxuICBncmlkLWFyZWE6IHF1YW50aXR5O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXByZWNpcGl0YXRpb25zLWhvdXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogaG91cnM7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3aW5kIHNwZWVkICovXFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQge1xcclxcbiAgZ3JpZC1hcmVhOiB3aW5kLXNwZWVkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaWNvbiBzcGVlZFxcXCJcXHJcXG4gICAgXFxcImljb24gdW5pdCBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvd2luZC5wbmcpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdpbmQtc3BlZWQge1xcclxcbiAgZ3JpZC1hcmVhOiBzcGVlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13aW5kLXNwZWVkLXVuaXQge1xcclxcbiAgLS1mb250LXNpemU6IC45cmVtO1xcclxcbiAgZ3JpZC1hcmVhOiB1bml0O1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDIuNSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9udC1zaXplKSAqIDEuMjUpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdW5yaXNlIGFuZCBzdW5zZXQgKi9cXHJcXG5cXHJcXG4uZGFpbHktc3VucmlzZS1zdW5zZXQge1xcclxcbiAgZ3JpZC1hcmVhOiBzdW5yaXNlLXN1bnNldDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gc3VucmlzZSBcXFwiXFxyXFxuICAgIFxcXCJpY29uIHN1bnNldFxcXCI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwcHggMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnJpc2Utc3Vuc2V0LWljb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItZGFpbHkvc3VucmlzZS1zdW5zZXQucG5nKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1zdW5yaXNlIHtcXHJcXG4gIGdyaWQtYXJlYTogc3VucmlzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXN1bnNldCB7XFxyXFxuICBncmlkLWFyZWE6IHN1bnNldDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVVYgaW5kZXggKi9cXHJcXG5cXHJcXG4uZGFpbHktdXYge1xcclxcbiAgZ3JpZC1hcmVhOiB1di1pbmRleDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImljb24gaW5kZXggXFxcIlxcclxcbiAgICBcXFwiaWNvbiB1diAgICBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMHB4IDBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di1pY29uIHtcXHJcXG4gIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWRhaWx5L3V2LWluZGV4LnBuZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdXYtaW5kZXgge1xcclxcbiAgZ3JpZC1hcmVhOiBpbmRleDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS11di10ZXh0IHtcXHJcXG4gIGdyaWQtYXJlYTogdXY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2VhdGhlci1kYWlseS1ob3VybHkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlckRhaWx5SG91cmx5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXItZGFpbHktaG91cmx5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2VhdGhlci1ob3VybHkge1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jaGFydC1saW5lLWhvdXIsXFxyXFxuLmNoYXJ0LWxpbmUtYmFzZSB7XFxyXFxuICBzdHJva2U6IGdyYXk7XFxyXFxuICBzdHJva2Utd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jaGFydC10ZW1wZXJhdHVyZSB7XFxyXFxuICBmaWxsOiB0cmFuc3BhcmVudDtcXHJcXG4gIHN0cm9rZTogcmVkO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxyXFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgLyogdHJhbnNpdGlvbjogMjAwbXMgbGluZWFyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1jaGFydC12ZXJ0ZXgge1xcclxcbiAgZmlsbDogZ3JlZW47XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlckhvdXJseS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXItaG91cmx5IHtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNoYXJ0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcnQtbGluZS1ob3VyLFxcclxcbi5jaGFydC1saW5lLWJhc2Uge1xcclxcbiAgc3Ryb2tlOiBncmF5O1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2hhcnQtdGVtcGVyYXR1cmUge1xcclxcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxuICBzdHJva2U6IHJlZDtcXHJcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcclxcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXHJcXG4gIC8qIHRyYW5zaXRpb246IDIwMG1zIGxpbmVhcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtY2hhcnQtdmVydGV4IHtcXHJcXG4gIGZpbGw6IGdyZWVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXRlXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBkYXkgb2YgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIG1vbnRoIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXRlKG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gMjlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRlKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcbiAgcmV0dXJuIGRheU9mTW9udGg7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRIb3Vyc1xuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBob3VycyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgaG91cnMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgaG91cnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIGhvdXJzIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBnZXRIb3VycyhuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1KSlcbiAqIC8vPT4gMTFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb3VycyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgcmV0dXJuIGhvdXJzO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0TWludXRlc1xuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG1pbnV0ZXMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG1pbnV0ZXMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbWludXRlc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgbWludXRlcyBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZ2V0TWludXRlcyhuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1LCA1KSlcbiAqIC8vPT4gNDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNaW51dGVzKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgcmV0dXJuIG1pbnV0ZXM7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc2V0TWludXRlc1xuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW51dGVzIC0gdGhlIG1pbnV0ZXMgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbnV0ZXMgc2V0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCA0NSBtaW51dGVzIHRvIDEgU2VwdGVtYmVyIDIwMTQgMTE6MzA6NDA6XG4gKiBjb25zdCByZXN1bHQgPSBzZXRNaW51dGVzKG5ldyBEYXRlKDIwMTQsIDgsIDEsIDExLCAzMCwgNDApLCA0NSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDExOjQ1OjQwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TWludXRlcyhkaXJ0eURhdGUsIGRpcnR5TWludXRlcykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1pbnV0ZXMgPSB0b0ludGVnZXIoZGlydHlNaW51dGVzKTtcbiAgZGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckN1cnJlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyQ3VycmVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckRhaWx5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlckRhaWx5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyRGFpbHlIb3VybHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXJIb3VybHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVySG91cmx5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc2VhcmNoLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvd2VhdGhlckN1cnJlbnQuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWF0aGVyRGFpbHlIb3VybHkuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWF0aGVyRGFpbHkuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWF0aGVySG91cmx5LmNzcyc7XHJcbmltcG9ydCBsb2FkVWkgZnJvbSAnLi9tb2R1bGVzL3VpJztcclxuXHJcbmxvYWRVaSgpO1xyXG4iLCJpbXBvcnQgeyBjb3VudHJ5Q29kZUVtb2ppIH0gZnJvbSAnY291bnRyeS1jb2RlLWVtb2ppJztcclxuaW1wb3J0IHsgZmV0Y2hHZW9jb2RpbmcgfSBmcm9tICcuLi9mZXRjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkb21DaXRpZXNMaXN0KHNlYXJjaCkge1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoR2VvY29kaW5nKHNlYXJjaCk7XHJcbiAgY29uc3QgY2l0aWVzID0gcmVzcG9uc2UucmVzdWx0cztcclxuXHJcbiAgaWYgKCFjaXRpZXMpIHtcclxuICAgIGNvbnN0IG5vUmVzdWx0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgbm9GbGFnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBub1Jlc3VsdHMuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdC1lbXB0eScpO1xyXG4gICAgbm9GbGFnSWNvbi5jbGFzc0xpc3QuYWRkKCdjb3VudHJ5LWZsYWctbm9uZScpO1xyXG4gICAgbm9GbGFnSWNvbi5pbm5lclRleHQgPSAn4pqg77iPJztcclxuICAgIHBhcmEuaW5uZXJUZXh0ID0gJ05vIGxvY2F0aW9uIGZvdW5kLic7XHJcblxyXG4gICAgbm9SZXN1bHRzLmFwcGVuZChub0ZsYWdJY29uLCBwYXJhKTtcclxuXHJcbiAgICByZXR1cm4gbm9SZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBgJHtjaXR5Lm5hbWV9LCAke2NpdHkuYWRtaW4zID8gYCR7Y2l0eS5hZG1pbjN9LCBgIDogJyd9JHtjaXR5LmFkbWluMiA/IGAke2NpdHkuYWRtaW4yfSwgYCA6ICcnfSR7Y2l0eS5hZG1pbjEgPyBgJHtjaXR5LmFkbWluMX0sIGAgOiAnJ30ke2NpdHkuY291bnRyeX1gO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0Jyk7XHJcbiAgICBzZWFyY2hSZXN1bHQuZGF0YXNldC5sYXRpdHVkZSA9IGNpdHkubGF0aXR1ZGU7XHJcbiAgICBzZWFyY2hSZXN1bHQuZGF0YXNldC5sb25naXR1ZGUgPSBjaXR5LmxvbmdpdHVkZTtcclxuICAgIHNlYXJjaFJlc3VsdC5kYXRhc2V0LmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICBmbGFnLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktZmxhZycpO1xyXG4gICAgZmxhZy5pbm5lclRleHQgPSBjb3VudHJ5Q29kZUVtb2ppKGNpdHkuY291bnRyeV9jb2RlKTtcclxuICAgIHBsYWNlLmlubmVyVGV4dCA9IGxvY2F0aW9uO1xyXG5cclxuICAgIHNlYXJjaFJlc3VsdC5hcHBlbmQoZmxhZywgcGxhY2UpO1xyXG4gICAgbGlzdC5hcHBlbmQoc2VhcmNoUmVzdWx0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuIiwiaW1wb3J0IGNoYW5nZVVuaXRzIGZyb20gJy4uL2Z1bmN0aW9ucy9jaGFuZ2VVbml0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYWlseUNhcmQoKSB7XHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnZGFpbHktY2FyZCcpO1xyXG5cclxuICBjYXJkLmFwcGVuZChcclxuICAgIHdlYXRoZXJEaXYoKSxcclxuICAgIHByZWNpcGl0YXRpb25zKCksXHJcbiAgICB3aW5kKCksXHJcbiAgICBzdW5yaXNlU3Vuc2V0KCksXHJcbiAgICB1dkluZGV4KCksXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlYXRoZXJEaXYoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGVtcE1heERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGVtcE1heFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHRlbXBNaW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0ZW1wTWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHRlbXBNaW5Vbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS13ZWF0aGVyJyk7XHJcbiAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWRheScpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudC1pY29uJywgJ2RhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gIHRlbXBNYXhEaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1tYXgtZGl2Jyk7XHJcbiAgdGVtcE1heC5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1heCcsICd0ZW1wZXJhdHVyZS1udW1iZXInKTtcclxuICB0ZW1wTWF4VW5pdC5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1heC11bml0JywgJ2dhdWdlLXVuaXQnLCAndGVtcGVyYXR1cmUtdW5pdCcpO1xyXG4gIHRlbXBNYXhVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHRlbXBNaW5EaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcC1taW4tZGl2Jyk7XHJcbiAgdGVtcE1pbi5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1pbicsICd0ZW1wZXJhdHVyZS1udW1iZXInKTtcclxuICB0ZW1wTWluVW5pdC5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLW1pbi11bml0JywgJ2dhdWdlLXVuaXQnLCAndGVtcGVyYXR1cmUtdW5pdCcpO1xyXG4gIHRlbXBNaW5Vbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHdlYXRoZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkYWlseS13ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XHJcblxyXG4gIGRheS5pbm5lclRleHQgPSAnZGF5IHBsYWNlaG9sZGVyJztcclxuICB0ZW1wTWF4LmlubmVyVGV4dCA9ICcwMDAuMCc7XHJcbiAgdGVtcE1pbi5pbm5lclRleHQgPSAnMDAwLjAnO1xyXG4gIHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnd2VhdGhlciBkZXNjcmlwdGlvbic7XHJcblxyXG4gIFt0ZW1wTWF4VW5pdCwgdGVtcE1pblVuaXRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VVbml0cyk7XHJcbiAgfSk7XHJcblxyXG4gIHRlbXBNYXhEaXYuYXBwZW5kKHRlbXBNYXgsIHRlbXBNYXhVbml0KTtcclxuICB0ZW1wTWluRGl2LmFwcGVuZCh0ZW1wTWluLCB0ZW1wTWluVW5pdCk7XHJcbiAgZGl2LmFwcGVuZChcclxuICAgIGRheSxcclxuICAgIHdlYXRoZXJJY29uLFxyXG4gICAgdGVtcE1heERpdixcclxuICAgIHRlbXBNaW5EaXYsXHJcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlY2lwaXRhdGlvbnMoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktcHJlY2lwaXRhdGlvbnMnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXByZWNpcGl0YXRpb25zLWljb24nKTtcclxuICBxdWFudGl0eS5jbGFzc0xpc3QuYWRkKCdkYWlseS1wcmVjaXBpdGF0aW9uLXF1YW50aXR5Jyk7XHJcbiAgaG91cnMuY2xhc3NMaXN0LmFkZCgnZGFpbHktcHJlY2lwaXRhdGlvbnMtaG91cnMnKTtcclxuXHJcbiAgZGl2LnRpdGxlID0gJ1F1YW50aXR5IGFuZCB0b3RhbCBob3VycyBvZiBwcmVjaXBpdGF0aW9ucyc7XHJcbiAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gJzAwMG1tJztcclxuICBob3Vycy5pbm5lclRleHQgPSAnMDowMGhzJztcclxuXHJcbiAgZGl2LmFwcGVuZChpY29uLCBxdWFudGl0eSwgaG91cnMpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kKCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBzcGVlZFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZCcpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1pY29uJyk7XHJcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1zcGVlZCcsICdzcGVlZC1udW1iZXInKTtcclxuICBzcGVlZFVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktd2luZC1zcGVlZC11bml0JywgJ2dhdWdlLXVuaXQnLCAnd2luZC1zcGVlZC11bml0Jyk7XHJcbiAgc3BlZWRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICBkaXYudGl0bGUgPSAnTWF4IHdpbmQgc3BlZWQnO1xyXG4gIHNwZWVkLmlubmVyVGV4dCA9ICcwMCc7XHJcblxyXG4gIHNwZWVkVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cyk7XHJcblxyXG4gIGRpdi5hcHBlbmQoaWNvbiwgc3BlZWQsIHNwZWVkVW5pdCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bnJpc2VTdW5zZXQoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHN1bnJpc2VIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHN1bnNldEhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS1zdW5yaXNlLXN1bnNldCcpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktc3VucmlzZS1zdW5zZXQtaWNvbicpO1xyXG4gIHN1bnJpc2VIb3VyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXN1bnJpc2UnKTtcclxuICBzdW5zZXRIb3VyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXN1bnNldCcpO1xyXG5cclxuICBkaXYudGl0bGUgPSAnU3VucmlzZSBhbmQgc3Vuc2V0JztcclxuICBzdW5yaXNlSG91ci5pbm5lclRleHQgPSAnMDA6MDBocyc7XHJcbiAgc3Vuc2V0SG91ci5pbm5lclRleHQgPSAnMDA6MDBocyc7XHJcblxyXG4gIGRpdi5hcHBlbmQoaWNvbiwgc3VucmlzZUhvdXIsIHN1bnNldEhvdXIpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1dkluZGV4KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB1dlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseS11dicpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktdXYtaWNvbicpO1xyXG4gIGluZGV4LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXV2LWluZGV4Jyk7XHJcbiAgdXZQYXJhLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXV2LXRleHQnKTtcclxuXHJcbiAgZGl2LnRpdGxlID0gJ1VWIGluZGV4JztcclxuICBpbmRleC5pbm5lclRleHQgPSAnMDAnO1xyXG4gIHV2UGFyYS5pbm5lclRleHQgPSAnVVYnO1xyXG5cclxuICBkaXYuYXBwZW5kKGljb24sIGluZGV4LCB1dlBhcmEpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcbiIsImltcG9ydCBzZWFyY2hDaXR5IGZyb20gJy4uL2Z1bmN0aW9ucy9zZWFyY2hDaXR5JztcclxuXHJcbmxldCBmb2N1c0luZGV4ID0gLTE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2goKSB7XHJcbiAgbGV0IGtleWRvd25UaW1lb3V0O1xyXG4gIGNvbnN0IHRpbWVvdXREZWxheSA9IDUwMDtcclxuXHJcbiAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBjaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvYWRpbmdBbmltRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9hZGluZ0FuaW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHNlYXJjaFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY2l0eS1zZWFyY2gnKTtcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1mb3JtJyk7XHJcbiAgY2l0eUxpc3QuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdHMnKTtcclxuICBsb2FkaW5nQW5pbURpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtbG9hZGluZycsICdoaWRkZW4nKTtcclxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaW5wdXQnKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsIHRydWUpO1xyXG4gIGlucHV0LnR5cGUgPSAnc2VhcmNoJztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdXcml0ZSBhIGxvY2F0aW9uIG5hbWUnO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XHJcbiAgICBsb2FkaW5nQW5pbURpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNsZWFyVGltZW91dChrZXlkb3duVGltZW91dCk7XHJcbiAgICBrZXlkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZWFyY2hDaXR5KGlucHV0LnZhbHVlKTtcclxuICAgIH0sIHRpbWVvdXREZWxheSk7XHJcbiAgfSk7XHJcblxyXG4gIGxvYWRpbmdBbmltRGl2LmFwcGVuZChsb2FkaW5nQW5pbTEsIGxvYWRpbmdBbmltMiwgbG9hZGluZ0FuaW0zKTtcclxuICBmb3JtLmFwcGVuZChpbnB1dCwgbG9hZGluZ0FuaW1EaXYpO1xyXG4gIHNlYXJjaFNlY3Rpb24uYXBwZW5kKGZvcm0sIGNpdHlMaXN0KTtcclxuXHJcbiAgc2VhcmNoU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50S2V5cyA9IFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnUGFnZVVwJywgJ1BhZ2VEb3duJ107XHJcbiAgICBpZiAoZXZlbnRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIGZvY3VzSW5kZXggKz0gMTtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIGZvY3VzSW5kZXggLT0gMTtcclxuICAgICAgaWYgKGUua2V5ID09PSAnUGFnZVVwJykgZm9jdXNJbmRleCAtPSA4O1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdQYWdlRG93bicpIGZvY3VzSW5kZXggKz0gODtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLXJlc3VsdCcpO1xyXG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgbGltaXRSYW5nZShyZXN1bHRzLmxlbmd0aCk7XHJcbiAgICAgIHJlc3VsdHNbZm9jdXNJbmRleF0uZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gICAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9jdXNJbmRleCA9IC0xO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc2VhcmNoU2VjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gbGltaXRSYW5nZShsZW5ndGgpIHtcclxuICBpZiAoZm9jdXNJbmRleCA8IDApIGZvY3VzSW5kZXggPSAwO1xyXG4gIGlmIChmb2N1c0luZGV4ID4gbGVuZ3RoIC0gMSkgZm9jdXNJbmRleCA9IGxlbmd0aCAtIDE7XHJcbn1cclxuIiwiaW1wb3J0IGNoYW5nZVVuaXRzIGZyb20gJy4uL2Z1bmN0aW9ucy9jaGFuZ2VVbml0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyQ3VycmVudCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICAvLyBjaXR5XHJcbiAgY29uc3QgY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNpdHlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBjaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2NpdHktZGl2Jyk7XHJcbiAgY2l0eVBhcmEuY2xhc3NMaXN0LmFkZCgnY2l0eS1wYXJhJyk7XHJcblxyXG4gIGNpdHlQYXJhLmlubmVyVGV4dCA9ICdDaXR5IE5hbWUsIENvdW50cnkgTmFtZSc7XHJcblxyXG4gIGNpdHlEaXYuYXBwZW5kKGNpdHlQYXJhKTtcclxuXHJcbiAgLy8gaWNvblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudCcsICdpbnZpc2libGUnKTtcclxuICBpY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY3VycmVudC1pY29uJyk7XHJcblxyXG4gIC8vIHdlYXRoZXJjb2RlIGRpdlxyXG4gIGNvbnN0IHdlYXRoZXJjb2RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2VhdGhlcmNvZGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICB3ZWF0aGVyY29kZURpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyY29kZS1kaXYnKTtcclxuICB3ZWF0aGVyY29kZVBhcmEuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcmNvZGUtcGFyYScpO1xyXG4gIHdlYXRoZXJjb2RlUGFyYS5pbm5lclRleHQgPSAnTWFpbmx5IGNsZWFyJztcclxuXHJcbiAgd2VhdGhlcmNvZGVEaXYuYXBwZW5kKHdlYXRoZXJjb2RlUGFyYSk7XHJcblxyXG4gIC8vIHRlbXBlcmF0dXJlcyBkaXZcclxuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGVtcEN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgdGVtcFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGFwcGFyZW50UGFyYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGFwcGFyZW50VGVtcFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgYXBwYXJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGFwcGFyZW50VW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gIHRlbXBEaXYuY2xhc3NMaXN0LmFkZCgndGVtcC1kaXYnKTtcclxuICB0ZW1wQ3VycmVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLWN1cnJlbnQnLCAndGVtcGVyYXR1cmUtbnVtYmVyJyk7XHJcbiAgdGVtcFVuaXQuY2xhc3NMaXN0LmFkZCgnZ2F1Z2UtdW5pdCcsICd0ZW1wZXJhdHVyZS11bml0Jyk7XHJcbiAgdGVtcFVuaXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgYXBwYXJlbnRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGFwcGFyZW50UGFyYURpdi5jbGFzc0xpc3QuYWRkKCd0ZW1wLWFwcGFyZW50LWRpdicpO1xyXG4gIGFwcGFyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wLWFwcGFyZW50JywgJ3RlbXBlcmF0dXJlLW51bWJlcicpO1xyXG4gIGFwcGFyZW50VW5pdC5jbGFzc0xpc3QuYWRkKCdnYXVnZS11bml0JywgJ3RlbXBlcmF0dXJlLXVuaXQnLCAnZ2F1Z2UtdW5pdC1hcHBhcmVudCcpO1xyXG5cclxuICBjb25zdCB1bml0c0VsZW1lbnRzID0gW3RlbXBVbml0LCBhcHBhcmVudFVuaXRdO1xyXG4gIHVuaXRzRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cykpO1xyXG4gIC8vIHRlbXBVbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVVuaXRzKTtcclxuXHJcbiAgdGVtcEN1cnJlbnQuaW5uZXJUZXh0ID0gJzAwMCc7XHJcbiAgYXBwYXJlbnRUZW1wUGFyYS5pbm5lclRleHQgPSAnRmVlbHMgbGlrZTogJztcclxuICBhcHBhcmVudFRlbXAuaW5uZXJUZXh0ID0gJzAwMCc7XHJcblxyXG4gIGFwcGFyZW50UGFyYURpdi5hcHBlbmQoYXBwYXJlbnRUZW1wUGFyYSwgYXBwYXJlbnRUZW1wLCBhcHBhcmVudFVuaXQpO1xyXG4gIHRlbXBEaXYuYXBwZW5kKHRlbXBDdXJyZW50LCB0ZW1wVW5pdCwgYXBwYXJlbnRQYXJhRGl2KTtcclxuXHJcbiAgLy8gaHVtaWRpdHkgZGl2XHJcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGh1bWlkaXR5R2F1Z2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUdhdWdlUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eS1kaXYnKTtcclxuICBodW1pZGl0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LXRpdGxlJyk7XHJcbiAgaHVtaWRpdHlHYXVnZS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eS1nYXVnZScpO1xyXG4gIGh1bWlkaXR5R2F1Z2VQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5LWdhdWdlLXBlcmNlbnQnKTtcclxuICBodW1pZGl0eUdhdWdlUGVyY2VudC5kYXRhc2V0LnBlcmNlbnQgPSAwO1xyXG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XHJcblxyXG4gIGh1bWlkaXR5VGl0bGUuaW5uZXJUZXh0ID0gJ0h1bWlkaXR5ICUnO1xyXG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9ICcwMDAnO1xyXG5cclxuICBodW1pZGl0eUdhdWdlLmFwcGVuZChodW1pZGl0eSwgaHVtaWRpdHlHYXVnZVBlcmNlbnQpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZChodW1pZGl0eUdhdWdlLCBodW1pZGl0eVRpdGxlKTtcclxuXHJcbiAgLy8gd2luZCBkaXZcclxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdpbmRHYXVnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRDb21wYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQtZGl2Jyk7XHJcbiAgd2luZFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQtdGl0bGUtZGl2Jyk7XHJcbiAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3dpbmQtdGl0bGUnKTtcclxuICB3aW5kR2F1Z2UuY2xhc3NMaXN0LmFkZCgnd2luZC1nYXVnZScpO1xyXG4gIHdpbmRDb21wYXNzLmNsYXNzTGlzdC5hZGQoJ3dpbmQtY29tcGFzcycpO1xyXG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkJywgJ3NwZWVkLW51bWJlcicpO1xyXG4gIHdpbmRTcGVlZFVuaXQuY2xhc3NMaXN0LmFkZCgnZ2F1Z2UtdW5pdCcsICd3aW5kLXNwZWVkLXVuaXQnKTtcclxuICB3aW5kU3BlZWRVbml0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHdpbmRTcGVlZERpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKCd3aW5kLWRpcmVjdGlvbicpO1xyXG5cclxuICB3aW5kVGl0bGUuaW5uZXJUZXh0ID0gJ01heCB3aW5kJztcclxuICB3aW5kU3BlZWQuaW5uZXJUZXh0ID0gJzAwJztcclxuXHJcbiAgd2luZFNwZWVkVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VVbml0cyk7XHJcblxyXG4gIHdpbmRUaXRsZURpdi5hcHBlbmQod2luZFRpdGxlLCB3aW5kU3BlZWRVbml0KTtcclxuICB3aW5kR2F1Z2UuYXBwZW5kKHdpbmRTcGVlZCwgd2luZENvbXBhc3MsIHdpbmRTcGVlZERpcmVjdGlvbik7XHJcbiAgd2luZERpdi5hcHBlbmQod2luZEdhdWdlLCB3aW5kVGl0bGVEaXYpO1xyXG5cclxuICAvLyBhcHBlbmQgZXZlcnl0aGluZ1xyXG4gIHNlY3Rpb24uYXBwZW5kKGNpdHlEaXYsIGljb24sIHdlYXRoZXJjb2RlRGl2LCB0ZW1wRGl2LCBodW1pZGl0eURpdiwgd2luZERpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCBkYWlseUNhcmQgZnJvbSAnLi9kYWlseUNhcmQnO1xyXG5pbXBvcnQgd2VhdGhlckhvdXJseSBmcm9tICcuL3dlYXRoZXJIb3VybHknO1xyXG5pbXBvcnQgbW92ZVZpZXdCb3ggZnJvbSAnLi4vZnVuY3Rpb25zL21vdmVWaWV3Qm94JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJEYWlseUhvdXJseSgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIGNvbnN0IGRhaWx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgLy8gY29uc3QgaG91cmx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kYWlseS1ob3VybHknKTtcclxuICBkYWlseURpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRhaWx5JywgJ2ludmlzaWJsZScpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xyXG4gICAgZGFpbHlEaXYuYXBwZW5kKGRhaWx5Q2FyZCgpKTtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKFxyXG4gICAgd2VhdGhlckhvdXJseSgpLFxyXG4gICAgZGFpbHlEaXYsXHJcbiAgKTtcclxuICAvLyBhZGRpbmcgbGlzdGVuZXJzIHRvIGhvdXJseSBjYXJkc1xyXG4gIGNvbnN0IGhvdXJseUNhcmRzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktY2FyZCcpO1xyXG4gIGhvdXJseUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1jYXJkJyk7XHJcbiAgICAgIGFsbENhcmRzLmZvckVhY2goKHRoaXNDYXJkKSA9PiB0aGlzQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICB0aGlzQ2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaG91cmx5Jyk7XHJcbiAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktY2hhcnQnKTtcclxuICAgICAgbW92ZVZpZXdCb3gocGFyZW50LCBzdmcsIDAsIGkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VhdGhlckhvdXJseSgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWhvdXJseScpO1xyXG4gIHN2Zy5jbGFzc0xpc3QuYWRkKCdob3VybHktY2hhcnQnKTtcclxuICBzdmcuYXBwZW5kKFxyXG4gICAgY3JlYXRlQ2hhcnRMaW5lcygpLFxyXG4gICAgY3JlYXRlVGVtcEdyb3VwKCksXHJcbiAgKTtcclxuICBkaXYuYXBwZW5kKHN2Zyk7XHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hhcnRMaW5lcygpIHtcclxuICBjb25zdCBjaGFydExpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuICBjb25zdCBob3Jpem9udGFsTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnbGluZScpO1xyXG4gIGNvbnN0IGhvdXJzVGV4dHMgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdmVydGljYWxMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XHJcbiAgICB2ZXJ0aWNhbExpbmUuY2xhc3NMaXN0LmFkZCgnY2hhcnQtbGluZS1ob3VyJyk7XHJcbiAgICBjaGFydExpbmVzR3JvdXAuYXBwZW5kKHZlcnRpY2FsTGluZSk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY4OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0ZXh0Jyk7XHJcbiAgICBjb25zdCBob3Vyc051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndHNwYW4nKTtcclxuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndHNwYW4nKTtcclxuICAgIGhvdXJzLnNldEF0dHJpYnV0ZSgneCcsIDApO1xyXG4gICAgaG91cnMuc2V0QXR0cmlidXRlKCd5JywgMCk7XHJcbiAgICBob3Vycy5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xyXG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMtY2hhcnQtdGV4dCcpO1xyXG4gICAgaG91cnNOdW1iZXIuY2xhc3NMaXN0LmFkZCgnaG91cnMtY2hhcnQtbnVtYmVycycpO1xyXG4gICAgaG91cnNOdW1iZXIudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICBob3Vyc1RleHQudGV4dENvbnRlbnQgPSAnaHMnO1xyXG4gICAgaG91cnMuYXBwZW5kKGhvdXJzTnVtYmVyLCBob3Vyc1RleHQpO1xyXG4gICAgaG91cnNUZXh0cy5wdXNoKGhvdXJzKTtcclxuICB9XHJcbiAgY2hhcnRMaW5lc0dyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoYXJ0LWxpbmVzLWdyb3VwJyk7XHJcbiAgaG9yaXpvbnRhbExpbmUuY2xhc3NMaXN0LmFkZCgnY2hhcnQtbGluZS1iYXNlJyk7XHJcblxyXG4gIGNoYXJ0TGluZXNHcm91cC5hcHBlbmQoaG9yaXpvbnRhbExpbmUsIC4uLmhvdXJzVGV4dHMpO1xyXG5cclxuICByZXR1cm4gY2hhcnRMaW5lc0dyb3VwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZW1wR3JvdXAoKSB7XHJcbiAgY29uc3QgdGVtcEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcbiAgY29uc3QgdGVtcENoYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgY29uc3QgdGVtcENoYXJ0TnVtYmVycyA9IFtdO1xyXG4gIGNvbnN0IHRlbXBDaGFydFZlcnRpY2VzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY4OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRlZ3JlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RleHQnKTtcclxuICAgIGNvbnN0IGRlZ3JlZXNOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RzcGFuJyk7XHJcbiAgICBjb25zdCBkZWdyZWVzU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0c3BhbicpO1xyXG4gICAgZGVncmVlcy5zZXRBdHRyaWJ1dGUoJ3gnLCAwKTtcclxuICAgIGRlZ3JlZXMuc2V0QXR0cmlidXRlKCd5JywgMCk7XHJcbiAgICBkZWdyZWVzLnNldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XHJcbiAgICBkZWdyZWVzLmNsYXNzTGlzdC5hZGQoJ3RlbXAtY2hhcnQtdGV4dCcpO1xyXG4gICAgZGVncmVlc051bWJlci5jbGFzc0xpc3QuYWRkKCd0ZW1wLWNoYXJ0JywgJ3RlbXBlcmF0dXJlLW51bWJlcicpO1xyXG4gICAgZGVncmVlc051bWJlci50ZXh0Q29udGVudCA9ICcwJztcclxuICAgIGRlZ3JlZXNTeW1ib2wudGV4dENvbnRlbnQgPSAnwrAnO1xyXG4gICAgZGVncmVlcy5hcHBlbmQoZGVncmVlc051bWJlciwgZGVncmVlc1N5bWJvbCk7XHJcbiAgICB0ZW1wQ2hhcnROdW1iZXJzLnB1c2goZGVncmVlcyk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY4OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHZlcnRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XHJcbiAgICB2ZXJ0ZXguY2xhc3NMaXN0LmFkZCgndGVtcC1jaGFydC12ZXJ0ZXgnKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ3InLCA0KTtcclxuICAgIHRlbXBDaGFydFZlcnRpY2VzLnB1c2godmVydGV4KTtcclxuICB9XHJcblxyXG4gIHRlbXBHcm91cC5jbGFzc0xpc3QuYWRkKCdob3VybHktY2hhcnQtZ3JvdXAnKTtcclxuICB0ZW1wQ2hhcnQuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWNoYXJ0LXRlbXBlcmF0dXJlJyk7XHJcblxyXG4gIHRlbXBHcm91cC5hcHBlbmQodGVtcENoYXJ0LCAuLi50ZW1wQ2hhcnROdW1iZXJzLCAuLi50ZW1wQ2hhcnRWZXJ0aWNlcyk7XHJcblxyXG4gIHJldHVybiB0ZW1wR3JvdXA7XHJcbn1cclxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlLCB0aW1lem9uZSA9ICdhdXRvJykge1xyXG4gIGxldCByZXNwb25zZUpzb247XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0P2xhdGl0dWRlPSR7bGF0aXR1ZGV9JmxvbmdpdHVkZT0ke2xvbmdpdHVkZX0maG91cmx5PXRlbXBlcmF0dXJlXzJtLHJlbGF0aXZlaHVtaWRpdHlfMm0sYXBwYXJlbnRfdGVtcGVyYXR1cmUscHJlY2lwaXRhdGlvbix3ZWF0aGVyY29kZSxjbG91ZGNvdmVyLHZpc2liaWxpdHksd2luZHNwZWVkXzEwbSx3aW5kZGlyZWN0aW9uXzEwbSZkYWlseT13ZWF0aGVyY29kZSx0ZW1wZXJhdHVyZV8ybV9tYXgsdGVtcGVyYXR1cmVfMm1fbWluLHN1bnJpc2Usc3Vuc2V0LHV2X2luZGV4X21heCxwcmVjaXBpdGF0aW9uX3N1bSxwcmVjaXBpdGF0aW9uX2hvdXJzLHdpbmRzcGVlZF8xMG1fbWF4LHdpbmRkaXJlY3Rpb25fMTBtX2RvbWluYW50JnRpbWV6b25lPSR7dGltZXpvbmV9JmN1cnJlbnRfd2VhdGhlcj10cnVlYCk7XHJcbiAgICByZXNwb25zZUpzb24gPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXNwb25zZUpzb24gPSBgU29tZXRoaW5nIHdlbnQgd3Jvbmc6IFxcbiR7ZXJyfWA7XHJcbiAgfVxyXG4gIHJldHVybiByZXNwb25zZUpzb247XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEdlb2NvZGluZyhsb2NhdGlvbikge1xyXG4gIGlmICghbG9jYXRpb24ubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgbGV0IHJlc3BvbnNlSnNvbjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvY2F0aW9uc0xpbWl0ID0gMTAwO1xyXG4gICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9nZW9jb2RpbmctYXBpLm9wZW4tbWV0ZW8uY29tL3YxL3NlYXJjaD9uYW1lPSR7bG9jYXRpb259JmNvdW50PSR7bG9jYXRpb25zTGltaXR9YCk7XHJcbiAgICByZXNwb25zZUpzb24gPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXNwb25zZUpzb24gPSBgU29tZXRoaW5nIHdlbnQgd3Jvbmc6IFxcbiR7ZXJyfWA7XHJcbiAgfVxyXG4gIHJldHVybiByZXNwb25zZUpzb247XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFyQWRqdXN0KGRvbUVsZW1lbnQsIGZyb21WYWx1ZSwgdG9WYWx1ZSkge1xyXG4gIGNvbnN0IHsgcGVyY2VudCB9ID0gZG9tRWxlbWVudC5kYXRhc2V0O1xyXG4gIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGRvbUVsZW1lbnQuZGF0YXNldC5wZXJjZW50LCAxMCk7XHJcbiAgY29uc3QgdGltZW91dCA9IDIwO1xyXG4gIGNvbnN0IHN0ZXAgPSBmcm9tVmFsdWUgPCB0b1ZhbHVlID8gMSA6IC0xO1xyXG4gIGNvbnN0IG1hc2sgPSBgY29uaWMtZ3JhZGllbnQocmVkICR7cGVyY2VudH0lLCB0cmFuc3BhcmVudCAke3BlcmNlbnR9JSlgO1xyXG4gIGRvbUVsZW1lbnQuc3R5bGUubWFza0ltYWdlID0gbWFzaztcclxuICBkb21FbGVtZW50LmRhdGFzZXQucGVyY2VudCA9IGN1cnJlbnRWYWx1ZSArIHN0ZXA7XHJcblxyXG4gIGlmICgoc3RlcCA+IDAgJiYgcGVyY2VudCA8IHRvVmFsdWUpXHJcbiAgICB8fCAoc3RlcCA8IDAgJiYgcGVyY2VudCA+IHRvVmFsdWUpKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYmFyQWRqdXN0KGRvbUVsZW1lbnQsIGZyb21WYWx1ZSwgdG9WYWx1ZSk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHZhbHVlQWRqdXN0IGZyb20gJy4vdmFsdWVBZGp1c3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlVW5pdHMoZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gIGNvbnN0IHVuaXRzQ2xhc3MgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXBlcmF0dXJlLXVuaXQnKVxyXG4gICAgPyAnLnRlbXBlcmF0dXJlLXVuaXQnIDogJy53aW5kLXNwZWVkLXVuaXQnO1xyXG4gIGNvbnN0IHZhbHVlc0NsYXNzID0gdW5pdHNDbGFzcyA9PT0gJy50ZW1wZXJhdHVyZS11bml0J1xyXG4gICAgPyAnLnRlbXBlcmF0dXJlLW51bWJlcicgOiAnLnNwZWVkLW51bWJlcic7XHJcbiAgLy8gY2hhbmdlIHRoZSByZXN0IG9mIHRoZSB1bml0c1xyXG4gIGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh1bml0c0NsYXNzKTtcclxuICB1bml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XHJcbiAgICB1bml0LmNoZWNrZWQgPSBuZXdWYWx1ZTtcclxuICB9KTtcclxuICAvLyBjaGFuZ2UgdGhlIHJlbGF0ZWQgdmFsdWVzXHJcbiAgY29uc3QgdmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWx1ZXNDbGFzcyk7XHJcbiAgdmFsdWVzLmZvckVhY2goKG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHZhbHVlc0NsYXNzID09PSAnLnRlbXBlcmF0dXJlLW51bWJlcicpIHtcclxuICAgICAgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXAtY3VycmVudCcpXHJcbiAgICAgIHx8IG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXAtYXBwYXJlbnQnKSkge1xyXG4gICAgICAgIHZhbHVlQWRqdXN0KFxyXG4gICAgICAgICAgbnVtYmVyLFxyXG4gICAgICAgICAgbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5jZWxzaXVzIDogbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCxcclxuICAgICAgICAgIG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCA6IG51bWJlci5kYXRhc2V0LmNlbHNpdXMsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBuZXdWYWx1ZSA/IG51bWJlci5kYXRhc2V0LmZhaHJlbmhlaXQgOiBudW1iZXIuZGF0YXNldC5jZWxzaXVzO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoJ3NwZWVkLW51bWJlcicpXHJcbiAgICAgICYmICFudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYWlseS13aW5kLXNwZWVkJykpIHtcclxuICAgICAgdmFsdWVBZGp1c3QoXHJcbiAgICAgICAgbnVtYmVyLFxyXG4gICAgICAgIG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQua2lsb21ldGVycyA6IG51bWJlci5kYXRhc2V0Lm1pbGVzLFxyXG4gICAgICAgIG5ld1ZhbHVlID8gbnVtYmVyLmRhdGFzZXQubWlsZXMgOiBudW1iZXIuZGF0YXNldC5raWxvbWV0ZXJzLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gbmV3VmFsdWUgPyBudW1iZXIuZGF0YXNldC5taWxlcyA6IG51bWJlci5kYXRhc2V0LmtpbG9tZXRlcnM7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW92ZVZpZXdCb3goZG9tUGFyZW50LCBzdmcsIHN0YXJ0RnJvbUhvdXIgPSAwLCBzdGFydEZyb21EYXkgPSAwKSB7XHJcbiAgY29uc3Qgd2lkdGggPSBwYXJzZUludChkb21QYXJlbnQuY2xpZW50V2lkdGgsIDEwKTtcclxuICBjb25zdCBoZWlnaHQgPSBwYXJzZUludChkb21QYXJlbnQuY2xpZW50SGVpZ2h0LCAxMCk7XHJcbiAgY29uc3Qgdmlld2JveFN0YXJ0ID0gKCh3aWR0aCAvIDI0KSAqIHN0YXJ0RnJvbUhvdXIpICsgKHdpZHRoICogc3RhcnRGcm9tRGF5KTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYCR7dmlld2JveFN0YXJ0fSAkezB9ICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xyXG59XHJcbiIsImltcG9ydCBkb21DaXRpZXNMaXN0IGZyb20gJy4uL2RvbS9jaXRpZXNMaXN0JztcclxuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyIH0gZnJvbSAnLi4vZmV0Y2gnO1xyXG5pbXBvcnQgdXBkYXRlQ3VycmVudFdlYXRoZXIgZnJvbSAnLi91cGRhdGVDdXJyZW50V2VhdGhlcic7XHJcbmltcG9ydCB1cGRhdGVEYWlseVdlYXRoZXIgZnJvbSAnLi91cGRhdGVEYWlseVdlYXRoZXInO1xyXG5pbXBvcnQgdXBkYXRlSG91cmx5V2VhdGhlciBmcm9tICcuL3VwZGF0ZUhvdXJseVdlYXRoZXInO1xyXG5pbXBvcnQgZ2V0V2VhdGhlcmNvZGUgZnJvbSAnLi93ZWF0aGVyY29kZSc7XHJcblxyXG5sZXQgcHJldmlvdXNTZWFyY2g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hDaXR5KHNlYXJjaCkge1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gIGNvbnN0IGNpdHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZXN1bHRzJyk7XHJcbiAgY29uc3QgbG9hZGluZ0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKTtcclxuXHJcbiAgaWYgKHNlYXJjaCA9PT0gcHJldmlvdXNTZWFyY2gpIHtcclxuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcclxuICAgIGxvYWRpbmdJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNTZWFyY2ggPSBzZWFyY2g7XHJcbiAgY29uc3QgbGlzdCA9IGF3YWl0IGRvbUNpdGllc0xpc3Qoc2VhcmNoKTtcclxuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XHJcbiAgbG9hZGluZ0ljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY2l0eUxpc3QucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY2l0eUxpc3QuYXBwZW5kKGxpc3QpO1xyXG5cclxuICBjb25zdCBkb21MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuICBkb21MaXN0LmZvckVhY2goKGNpdHkpID0+IHtcclxuICAgIGNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIGRpc2FibGUgYW5kIGF1dG9jb21wbGV0ZSBpbnB1dCB3aGlsZSBmZXRjaGluZyBkYXRhXHJcbiAgICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBjaXR5LmRhdGFzZXQubG9jYXRpb247XHJcbiAgICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcclxuICAgICAgbG9hZGluZ0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICBjaXR5TGlzdC5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgICAgY29uc3QgeyBsYXRpdHVkZSB9ID0gY2l0eS5kYXRhc2V0O1xyXG4gICAgICBjb25zdCB7IGxvbmdpdHVkZSB9ID0gY2l0eS5kYXRhc2V0O1xyXG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xyXG4gICAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgICAgLy8gZGF0YSBmb3IgY3VycmVudCB3ZWF0aGVyLCB0aGVuIHVwZGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB7XHJcbiAgICAgICAgY2l0eTogY2l0eS5kYXRhc2V0LmxvY2F0aW9uLFxyXG4gICAgICAgIHdlYXRoZXJjb2RlOiBnZXRXZWF0aGVyY29kZSh3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci53ZWF0aGVyY29kZSksXHJcbiAgICAgICAgdGVtcDogd2VhdGhlci5jdXJyZW50X3dlYXRoZXIudGVtcGVyYXR1cmUsXHJcbiAgICAgICAgdGVtcEFwcGFyZW50OiB3ZWF0aGVyLmhvdXJseS5hcHBhcmVudF90ZW1wZXJhdHVyZVtjdXJyZW50SG91cl0sXHJcbiAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXIuaG91cmx5LnJlbGF0aXZlaHVtaWRpdHlfMm1bY3VycmVudEhvdXJdLFxyXG4gICAgICAgIHdpbmRTcGVlZDogd2VhdGhlci5jdXJyZW50X3dlYXRoZXIud2luZHNwZWVkLFxyXG4gICAgICAgIHdpbmREaXJlY3Rpb246IHdlYXRoZXIuY3VycmVudF93ZWF0aGVyLndpbmRkaXJlY3Rpb24sXHJcbiAgICAgICAgc3VucmlzZTogd2VhdGhlci5kYWlseS5zdW5yaXNlLFxyXG4gICAgICAgIHN1bnNldDogd2VhdGhlci5kYWlseS5zdW5zZXQsXHJcbiAgICAgICAgbG9jYWxIb3VyOiB3ZWF0aGVyLmN1cnJlbnRfd2VhdGhlci50aW1lLFxyXG4gICAgICB9O1xyXG4gICAgICB1cGRhdGVDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlckRhdGEpO1xyXG4gICAgICAvLyBkYXRhIGZvciBkYWlseSB3ZWF0aGVyLCB0aGVuIHVwZGF0ZVxyXG4gICAgICBjb25zdCBkYWlseVdlYXRoZXJEYXRhID0ge1xyXG4gICAgICAgIHdlYXRoZXJjb2Rlczogd2VhdGhlci5kYWlseS53ZWF0aGVyY29kZSxcclxuICAgICAgICB0ZW1wc01heDogd2VhdGhlci5kYWlseS50ZW1wZXJhdHVyZV8ybV9tYXgsXHJcbiAgICAgICAgdGVtcHNNaW46IHdlYXRoZXIuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluLFxyXG4gICAgICAgIHByZWNpcGl0YXRpb25RdWFudGl0aWVzOiB3ZWF0aGVyLmRhaWx5LnByZWNpcGl0YXRpb25fc3VtLFxyXG4gICAgICAgIHByZWNpcGl0YXRpb25Ib3Vyczogd2VhdGhlci5kYWlseS5wcmVjaXBpdGF0aW9uX2hvdXJzLFxyXG4gICAgICAgIHdpbmRTcGVlZHM6IHdlYXRoZXIuZGFpbHkud2luZHNwZWVkXzEwbV9tYXgsXHJcbiAgICAgICAgc3VucmlzZXM6IHdlYXRoZXIuZGFpbHkuc3VucmlzZSxcclxuICAgICAgICBzdW5zZXRzOiB3ZWF0aGVyLmRhaWx5LnN1bnNldCxcclxuICAgICAgICB1dkluZGV4ZXM6IHdlYXRoZXIuZGFpbHkudXZfaW5kZXhfbWF4LFxyXG4gICAgICB9O1xyXG4gICAgICB1cGRhdGVEYWlseVdlYXRoZXIoZGFpbHlXZWF0aGVyRGF0YSk7XHJcbiAgICAgIC8vIGRhdGEgZm9yIGhvdXJseSB3ZWF0aGVyIGZvciAyNCBob3VycyBvZiBjdXJyZW50IGRheSwgdGhlbiB1cGRhdGVcclxuICAgICAgY29uc3QgbG9jYWxIb3VyID0gbmV3IERhdGUod2VhdGhlci5jdXJyZW50X3dlYXRoZXIudGltZSkuZ2V0SG91cnMoKTtcclxuICAgICAgY29uc3QgaG91cmx5V2VhdGhlckRhdGEgPSB7XHJcbiAgICAgICAgbG9jYWxIb3VyLFxyXG4gICAgICAgIGhvdXJzOiB3ZWF0aGVyLmhvdXJseS50aW1lLFxyXG4gICAgICAgIHRlbXBzOiB3ZWF0aGVyLmhvdXJseS50ZW1wZXJhdHVyZV8ybSxcclxuICAgICAgICBodW1pZGl0eTogd2VhdGhlci5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybSxcclxuICAgICAgICBhcHBhcmVudDogd2VhdGhlci5ob3VybHkuYXBwYXJlbnRfdGVtcGVyYXR1cmUsXHJcbiAgICAgICAgd2VhdGhlcmNvZGU6IHdlYXRoZXIuaG91cmx5LndlYXRoZXJjb2RlLFxyXG4gICAgICAgIHdpbmRzcGVlZDogd2VhdGhlci5ob3VybHkud2luZHNwZWVkXzEwbSxcclxuICAgICAgfTtcclxuICAgICAgdXBkYXRlSG91cmx5V2VhdGhlcihob3VybHlXZWF0aGVyRGF0YSk7XHJcbiAgICAgIGhpZGVTZWFyY2goKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlU2VhcmNoKCkge1xyXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXNlYXJjaCcpO1xyXG4gIHNlYXJjaC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAvLyBjbGVhciByZXN1bHRzIGFmdGVyIGhpZGluZ1xyXG4gIGRvbUNpdGllc0xpc3QoJycpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBnZXROZXh0MjQoYXJyYXksIGxvY2FsSG91cikge1xyXG4vLyAgIGNvbnN0IG5ld0FycmF5ID0gW107XHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XHJcbi8vICAgICBuZXdBcnJheS5wdXNoKGFycmF5W2kgKyBsb2NhbEhvdXJdKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiBuZXdBcnJheTtcclxuLy8gfVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY2Vsc2l1c1RvRmFocmVuaGVpdChudW1iZXIpIHtcclxuICBjb25zdCBmYWhyZW5oZWl0ID0gKG51bWJlciAqIDEuOCkgKyAzMjtcclxuICBjb25zdCBmaXhlZERlY2ltYWxzID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGZhaHJlbmhlaXQpLnRvRml4ZWQoMSkpO1xyXG4gIHJldHVybiBmaXhlZERlY2ltYWxzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2lsb21ldGVyc1RvTWlsZXMobnVtYmVyKSB7XHJcbiAgY29uc3QgbWlsZXMgPSBudW1iZXIgLyAxLjYwOTM0NDtcclxuICBjb25zdCBmaXhlZERlY2ltYWxzID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KG1pbGVzKS50b0ZpeGVkKDEpKTtcclxuICByZXR1cm4gZml4ZWREZWNpbWFscztcclxufVxyXG4iLCJpbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi93ZWF0aGVySWNvbic7XHJcbmltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQsIGtpbG9tZXRlcnNUb01pbGVzIH0gZnJvbSAnLi91bml0Q29udmVydGVyJztcclxuaW1wb3J0IHZhbHVlQWRqdXN0IGZyb20gJy4vdmFsdWVBZGp1c3QnO1xyXG5pbXBvcnQgYmFyQWRqdXN0IGZyb20gJy4vYmFyQWRqdXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY3VycmVudCAnKTtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktcGFyYScpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jdXJyZW50LWljb24nKTtcclxuICBjb25zdCB3ZWF0aGVyY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyY29kZS1wYXJhJyk7XHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWN1cnJlbnQnKTtcclxuICBjb25zdCB0ZW1wQXBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1hcHBhcmVudCcpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlHYXVnZVBlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktZ2F1Z2UtcGVyY2VudCcpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJyk7XHJcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRpcmVjdGlvbicpO1xyXG5cclxuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gIGNpdHkuaW5uZXJUZXh0ID0gZGF0YS5jaXR5O1xyXG4gIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gd2VhdGhlckljb24oXHJcbiAgICBkYXRhLndlYXRoZXJjb2RlLmljb24sXHJcbiAgICBkYXRhLmxvY2FsSG91cixcclxuICAgIGRhdGEuc3VucmlzZVswXSxcclxuICAgIGRhdGEuc3Vuc2V0WzBdLFxyXG4gICk7XHJcbiAgd2VhdGhlcmNvZGUuaW5uZXJUZXh0ID0gYCR7ZGF0YS53ZWF0aGVyY29kZS53ZWF0aGVyfSR7ZGF0YS53ZWF0aGVyY29kZS5pbnRlbnNpdHkgPyBgLCAke2RhdGEud2VhdGhlcmNvZGUuaW50ZW5zaXR5fWAgOiAnJ31gO1xyXG4gIHRlbXAuZGF0YXNldC5jZWxzaXVzID0gZGF0YS50ZW1wO1xyXG4gIHRlbXAuZGF0YXNldC5mYWhyZW5oZWl0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdChkYXRhLnRlbXApO1xyXG4gIHZhbHVlQWRqdXN0KHRlbXAsIHRlbXAuaW5uZXJUZXh0LCBkYXRhLnRlbXApO1xyXG4gIHRlbXBBcHBhcmVudC5kYXRhc2V0LmNlbHNpdXMgPSBkYXRhLnRlbXBBcHBhcmVudDtcclxuICB0ZW1wQXBwYXJlbnQuZGF0YXNldC5mYWhyZW5oZWl0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdChkYXRhLnRlbXBBcHBhcmVudCk7XHJcbiAgdmFsdWVBZGp1c3QodGVtcEFwcGFyZW50LCB0ZW1wQXBwYXJlbnQuaW5uZXJUZXh0LCBkYXRhLnRlbXBBcHBhcmVudCk7XHJcbiAgdmFsdWVBZGp1c3QoaHVtaWRpdHksIGh1bWlkaXR5LmlubmVyVGV4dCwgZGF0YS5odW1pZGl0eSk7XHJcbiAgYmFyQWRqdXN0KGh1bWlkaXR5R2F1Z2VQZXJjZW50LCBodW1pZGl0eUdhdWdlUGVyY2VudC5kYXRhc2V0LnBlcmNlbnQsIGRhdGEuaHVtaWRpdHkpO1xyXG4gIHdpbmRTcGVlZC5kYXRhc2V0LmtpbG9tZXRlcnMgPSBwYXJzZUludChkYXRhLndpbmRTcGVlZCwgMTApO1xyXG4gIHdpbmRTcGVlZC5kYXRhc2V0Lm1pbGVzID0gcGFyc2VJbnQoa2lsb21ldGVyc1RvTWlsZXMoZGF0YS53aW5kU3BlZWQpLCAxMCk7XHJcbiAgdmFsdWVBZGp1c3Qod2luZFNwZWVkLCB3aW5kU3BlZWQuaW5uZXJUZXh0LCBwYXJzZUludChkYXRhLndpbmRTcGVlZCwgMTApKTtcclxuICB3aW5kRGlyZWN0aW9uLnN0eWxlLnJvdGF0ZSA9IGAke2RhdGEud2luZERpcmVjdGlvbn1kZWdgO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgZ2V0SG91cnMsXHJcbiAgZ2V0TWludXRlcyxcclxuICBhZGREYXlzLFxyXG4gIGdldERheSxcclxuICBnZXREYXRlLFxyXG59IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IGdldFdlYXRoZXJjb2RlIGZyb20gJy4vd2VhdGhlcmNvZGUnO1xyXG5pbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi93ZWF0aGVySWNvbic7XHJcbmltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQsIGtpbG9tZXRlcnNUb01pbGVzIH0gZnJvbSAnLi91bml0Q29udmVydGVyJztcclxuXHJcbmNvbnN0IGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGFpbHlXZWF0aGVyKGRhdGEpIHtcclxuICAvLyBpY29uIGFuZCB0ZW1wc1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kYWlseScpO1xyXG4gIGNvbnN0IGRheXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1kYXknKTtcclxuICBjb25zdCBpY29ucyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gIGNvbnN0IHRlbXBzTWF4ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktdGVtcC1tYXgnKTtcclxuICBjb25zdCB0ZW1wc01pbiA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXRlbXAtbWluJyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25zID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktd2VhdGhlci1kZXNjcmlwdGlvbicpO1xyXG4gIC8vIGV4dHJhIGluZm9cclxuICBjb25zdCBwcmVjaXBpdGF0aW9uUXVhbnRpdGllcyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXByZWNpcGl0YXRpb24tcXVhbnRpdHknKTtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uSG91cnMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1wcmVjaXBpdGF0aW9ucy1ob3VycycpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZHMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS13aW5kLXNwZWVkJyk7XHJcbiAgY29uc3Qgc3VucmlzZXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1zdW5yaXNlJyk7XHJcbiAgY29uc3Qgc3Vuc2V0cyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXN1bnNldCcpO1xyXG4gIGNvbnN0IHV2SW5kZXhlcyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LXV2LWluZGV4Jyk7XHJcblxyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcblxyXG4gIGRheXMuZm9yRWFjaCgoZGF5LCBpKSA9PiB7XHJcbiAgICBkYXkuaW5uZXJUZXh0ID0gaSA9PT0gMCA/ICdUb2RheScgOiBgJHtkYXlOYW1lc1tnZXREYXkoYWRkRGF5cyhuZXcgRGF0ZSgpLCBpKSldfSAke2dldERhdGUoYWRkRGF5cyhuZXcgRGF0ZSgpLCBpKSl9YDtcclxuICB9KTtcclxuICBpY29ucy5mb3JFYWNoKChpY29uLCBpKSA9PiB7XHJcbiAgICBjb25zdCBpY29uUGFydHMgPSBnZXRXZWF0aGVyY29kZShkYXRhLndlYXRoZXJjb2Rlc1tpXSkuaWNvbjtcclxuICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gd2VhdGhlckljb24oaWNvblBhcnRzKTtcclxuICB9KTtcclxuICB0ZW1wc01heC5mb3JFYWNoKCh0ZW1wLCBpKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRhdGEudGVtcHNNYXhbaV07XHJcbiAgICB0ZW1wLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlO1xyXG4gICAgdGVtcC5kYXRhc2V0LmNlbHNpdXMgPSB0ZW1wZXJhdHVyZTtcclxuICAgIHRlbXAuZGF0YXNldC5mYWhyZW5oZWl0ID0gY2Vsc2l1c1RvRmFocmVuaGVpdCh0ZW1wZXJhdHVyZSk7XHJcbiAgfSk7XHJcbiAgdGVtcHNNaW4uZm9yRWFjaCgoYXBwYXJlbnQsIGkpID0+IHtcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZGF0YS50ZW1wc01pbltpXTtcclxuICAgIGFwcGFyZW50LmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlO1xyXG4gICAgYXBwYXJlbnQuZGF0YXNldC5jZWxzaXVzID0gdGVtcGVyYXR1cmU7XHJcbiAgICBhcHBhcmVudC5kYXRhc2V0LmZhaHJlbmhlaXQgPSBjZWxzaXVzVG9GYWhyZW5oZWl0KHRlbXBlcmF0dXJlKTtcclxuICB9KTtcclxuICBkZXNjcmlwdGlvbnMuZm9yRWFjaCgoZGVzY3JpcHRpb24sIGkpID0+IHtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBnZXRXZWF0aGVyY29kZShkYXRhLndlYXRoZXJjb2Rlc1tpXSk7XHJcbiAgICBjb25zdCB0eXBlID0gd2VhdGhlci53ZWF0aGVyO1xyXG4gICAgY29uc3QgaGFzSW50ZW5zaXR5ID0gd2VhdGhlci5pbnRlbnNpdHkgIT09IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGludGVuc2l0eSA9IGAsXFxuJHt3ZWF0aGVyLmludGVuc2l0eX1gO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7dHlwZX0ke2hhc0ludGVuc2l0eSA/IGludGVuc2l0eSA6ICcnfWA7XHJcbiAgfSk7XHJcbiAgcHJlY2lwaXRhdGlvblF1YW50aXRpZXMuZm9yRWFjaCgocXVhbnRpdHksIGkpID0+IHtcclxuICAgIHF1YW50aXR5LmlubmVyVGV4dCA9IGAke2RhdGEucHJlY2lwaXRhdGlvblF1YW50aXRpZXNbaV19bW1gO1xyXG4gIH0pO1xyXG4gIHByZWNpcGl0YXRpb25Ib3Vycy5mb3JFYWNoKChob3VycywgaSkgPT4ge1xyXG4gICAgaG91cnMuaW5uZXJUZXh0ID0gYCR7ZGF0YS5wcmVjaXBpdGF0aW9uSG91cnNbaV19aHNgO1xyXG4gIH0pO1xyXG4gIHdpbmRTcGVlZHMuZm9yRWFjaCgoc3BlZWQsIGkpID0+IHtcclxuICAgIGNvbnN0IHdpbmRTcGVlZCA9IHBhcnNlSW50KGRhdGEud2luZFNwZWVkc1tpXSwgMTApO1xyXG4gICAgc3BlZWQuaW5uZXJUZXh0ID0gd2luZFNwZWVkO1xyXG4gICAgc3BlZWQuZGF0YXNldC5raWxvbWV0ZXJzID0gd2luZFNwZWVkO1xyXG4gICAgc3BlZWQuZGF0YXNldC5taWxlcyA9IHBhcnNlSW50KGtpbG9tZXRlcnNUb01pbGVzKHdpbmRTcGVlZCksIDEwKTtcclxuICB9KTtcclxuICBzdW5yaXNlcy5mb3JFYWNoKChzdW5yaXNlLCBpKSA9PiB7XHJcbiAgICBzdW5yaXNlLmlubmVyVGV4dCA9IGAke2dldEhvdXJzKG5ldyBEYXRlKGRhdGEuc3VucmlzZXNbaV0pKX06JHtnZXRNaW51dGVzKG5ldyBEYXRlKGRhdGEuc3VucmlzZXNbaV0pKX1oc2A7XHJcbiAgfSk7XHJcbiAgc3Vuc2V0cy5mb3JFYWNoKChzdW5zZXQsIGkpID0+IHtcclxuICAgIHN1bnNldC5pbm5lclRleHQgPSBgJHtnZXRIb3VycyhuZXcgRGF0ZShkYXRhLnN1bnNldHNbaV0pKX06JHtnZXRNaW51dGVzKG5ldyBEYXRlKGRhdGEuc3Vuc2V0c1tpXSkpfWhzYDtcclxuICB9KTtcclxuICB1dkluZGV4ZXMuZm9yRWFjaCgodXYsIGkpID0+IHtcclxuICAgIHV2LmlubmVyVGV4dCA9IGRhdGEudXZJbmRleGVzW2ldID09PSBudWxsID8gJy0nIDogZGF0YS51dkluZGV4ZXNbaV07XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2Vsc2l1c1RvRmFocmVuaGVpdCB9IGZyb20gJy4vdW5pdENvbnZlcnRlcic7XHJcbmltcG9ydCB2YWx1ZUFkanVzdCBmcm9tICcuL3ZhbHVlQWRqdXN0JztcclxuaW1wb3J0IG1vdmVWaWV3Qm94IGZyb20gJy4vbW92ZVZpZXdCb3gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlSG91cmx5V2VhdGhlcihkYXRhKSB7XHJcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaG91cmx5Jyk7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1jaGFydCcpO1xyXG4gIGNvbnN0IGhvdXJzID0gMTY4O1xyXG4gIC8vIHZlcnRpY2FsIHNwYWNlIHJlc2VydmVkIG9uIHBpeGVscyBmb3IgaG91cnMgYW5kIHRlbXAgdmFsdWVzXHJcbiAgY29uc3QgdGV4dFNwYWNlID0gNDU7XHJcbiAgY29uc3Qgd2lkdGggPSBwYXJzZUludChwYXJlbnQuY2xpZW50V2lkdGgsIDEwKTtcclxuICBjb25zdCBoZWlnaHQgPSBwYXJzZUludChwYXJlbnQuY2xpZW50SGVpZ2h0LCAxMCk7XHJcbiAgY29uc3QgY2hhcnRzSGVpZ2h0VGVtcHMgPSAoKGhlaWdodCAqIDgwKSAvIDEwMCkgLSB0ZXh0U3BhY2U7XHJcbiAgLy8gY29uc3QgY2hhcnRzSGVpZ2h0V2luZEh1bWlkaXR5ID0gaGVpZ2h0IC0gdGV4dFNwYWNlO1xyXG4gIGNvbnN0IHBvc2l0aW9uc1ggPSBbMF07XHJcbiAgLy8gc2V0IHZhbHVlcyBmb3IgdmVydGV4IGhvcml6b250YWwgcG9zaXRpb25zXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VyczsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSAoKHdpZHRoICogNykgLyAoaG91cnMpKSAqIChpICsgMSk7XHJcbiAgICBwb3NpdGlvbnNYLnB1c2goY3VycmVudFZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIHBvc2l0aW9uIGhvdXIgbGluZXMgYW5kIGJhc2UgbGluZSBmb3IgdGhlIGNoYXJ0XHJcbiAgcG9zaXRpb25MaW5lc0FuZEhvdXJzKGRhdGEuaG91cnMsIHBvc2l0aW9uc1gsIHRleHRTcGFjZSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgLy8gdXBkYXRlIGN1cnJlbnQgdGVtcGVyYXR1cmUgbGluZSBjaGFydFxyXG4gIGNvbnN0IGNoYXJ0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktY2hhcnQtdGVtcGVyYXR1cmUnKTtcclxuICAvLyBkZXRlY3QgZW1wdHkgZHJhdyBvbiBmaXJzdCBsb2FkLCBwbGFjZSBkcmF3IHdpdGggdmFsdWVzIGF0IDBcclxuICBpZiAoIWNoYXJ0VGVtcC5nZXRBdHRyaWJ1dGUoJ2QnKSkge1xyXG4gICAgZW1wdHlDaGFydChjaGFydFRlbXAsIHBvc2l0aW9uc1gsIGNoYXJ0c0hlaWdodFRlbXBzKTtcclxuICB9XHJcbiAgLy8gc21hbGwgdGltZW91dCB0byBhbGxvdyBhbmltYXRpb24gYmV0d2VlbiB0aGUgZW1wdHkgY2hhcnQgYW5kIHRoZSB1cGRhdGVkIG9uZVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGVtcGVyYXR1cmUoZGF0YS50ZW1wcywgcG9zaXRpb25zWCwgY2hhcnRzSGVpZ2h0VGVtcHMsIGhvdXJzLCB0ZXh0U3BhY2UpO1xyXG4gIH0sIDUwKTtcclxuXHJcbiAgLy8gbW92ZSB2aWV3Ym94IHRvIG9ubHkgc2hvdyAyNCBob3Vyc1xyXG4gIG1vdmVWaWV3Qm94KHBhcmVudCwgc3ZnLCBkYXRhLmxvY2FsSG91ciwgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmdlUGVyY2VudChtaW4sIG1heCwgdGFyZ2V0KSB7XHJcbiAgY29uc3QgcGVyY2VudFJhbmdlID0gKCh0YXJnZXQgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwO1xyXG4gIHJldHVybiBwYXJzZUZsb2F0KHBhcnNlRmxvYXQocGVyY2VudFJhbmdlKS50b0ZpeGVkKDEpKTtcclxufVxyXG5mdW5jdGlvbiByYW5nZVBlcmNlbnRUb1BpeGVscyhwZXJjZW50LCBoZWlnaHQpIHtcclxuICBjb25zdCB0b1BpeGVscyA9ICgocGVyY2VudCAqIGhlaWdodCkgLyAxMDApO1xyXG4gIC8vIGFzIHRoZSBZIGF4aXMgYXNjZW5kIGdvaW5nIGRvd24sIHRoZSBncmFwaGljIHdpbGwgYmUgaW52ZXJ0ZWRcclxuICAvLyB1c2luZyB0aGUgYm90dG9tIG9mIGl0J3MgaGVpZ2h0IGFzIGJhc2UgZm9yIG1pbiB0ZW1wXHJcbiAgcmV0dXJuICh0b1BpeGVscyAqIC0xKSArIGhlaWdodDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUJldHdlZW4oZG9tRWxlbWVudHMpIHtcclxuICBkb21FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAvLyBpZiAoKGkgKyAyKSAlIDMgIT09IDApIHtcclxuICAgIGlmIChpICUgNCAhPT0gMCkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zaXRpb25MaW5lc0FuZEhvdXJzKGhvdXJzLCBwb3NpdGlvbnNYLCB0ZXh0U3BhY2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICBjb25zdCBob3VyTGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcnQtbGluZS1ob3VyJyk7XHJcbiAgY29uc3QgYmFzZUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtbGluZS1iYXNlJyk7XHJcbiAgY29uc3QgaG91cnNUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Vycy1jaGFydC10ZXh0Jyk7XHJcbiAgY29uc3QgaG91cnNOdW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJzLWNoYXJ0LW51bWJlcnMnKTtcclxuICAvLyBwb3NpdGlvbiBsaW5lc1xyXG4gIGJhc2VMaW5lLnNldEF0dHJpYnV0ZSgneDEnLCBgJHswfWApO1xyXG4gIGJhc2VMaW5lLnNldEF0dHJpYnV0ZSgneTEnLCBgJHtoZWlnaHQgLSAodGV4dFNwYWNlIC8gMil9YCk7XHJcbiAgYmFzZUxpbmUuc2V0QXR0cmlidXRlKCd4MicsIGAke3dpZHRoICogN31gKTtcclxuICBiYXNlTGluZS5zZXRBdHRyaWJ1dGUoJ3kyJywgYCR7aGVpZ2h0IC0gKHRleHRTcGFjZSAvIDIpfWApO1xyXG5cclxuICBob3VyTGluZXMuZm9yRWFjaCgobGluZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgcG9zaXRpb25YID0gcG9zaXRpb25zWFtpXTtcclxuICAgIGxldCBsaW5lTGVuZ3RoID0gNDtcclxuICAgIGlmIChpICUgNCA9PT0gMCkgbGluZUxlbmd0aCA9IDEwO1xyXG4gICAgaWYgKGkgJSAyNCA9PT0gMCkgbGluZUxlbmd0aCA9IDMwO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3gxJywgYCR7cG9zaXRpb25YfWApO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3kxJywgYCR7aGVpZ2h0IC0gKHRleHRTcGFjZSAvIDIpfWApO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3gyJywgYCR7cG9zaXRpb25YfWApO1xyXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3kyJywgYCR7aGVpZ2h0IC0gKHRleHRTcGFjZSAvIDIpIC0gbGluZUxlbmd0aH1gKTtcclxuICB9KTtcclxuICAvLyBwb3NpdGlvbiBob3VyIHRleHRcclxuICBob3Vyc1RleHRzLmZvckVhY2goKHRleHQsIGkpID0+IHtcclxuICAgIGNvbnN0IHRleHRNYXJnaW4gPSAxO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3gnLCBgJHtwb3NpdGlvbnNYW2ldfWApO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3knLCBgJHtoZWlnaHQgLSB0ZXh0TWFyZ2lufWApO1xyXG4gIH0pO1xyXG4gIGhpZGVCZXR3ZWVuKGhvdXJzVGV4dHMpO1xyXG4gIC8vIGFkZCBob3VyIG51bWJlcnNcclxuICBob3Vyc051bWJlcnMuZm9yRWFjaCgoaG91ciwgaSkgPT4ge1xyXG4gICAgY29uc3QgdGhpc291ciA9IG5ldyBEYXRlKGhvdXJzW2ldKS5nZXRIb3VycygpO1xyXG4gICAgaG91ci50ZXh0Q29udGVudCA9IHRoaXNvdXI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRlbXBlcmF0dXJlKHRlbXBzLCBwb3NpdGlvbnNYLCBjaGFydHNIZWlnaHRUZW1wcywgaG91cnMsIHRleHRTcGFjZSkge1xyXG4gIGNvbnN0IHRlbXBDaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktY2hhcnQtdGVtcGVyYXR1cmUnKTtcclxuICBjb25zdCB0ZW1wQ2hhcnRWZXJ0aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLWNoYXJ0LXZlcnRleCcpO1xyXG4gIGNvbnN0IHRlbXBDaGFydFRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAtY2hhcnQtdGV4dCcpO1xyXG4gIGNvbnN0IHRlbXBDaGFydE51bWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcC1jaGFydC10ZXh0IC50ZW1wZXJhdHVyZS1udW1iZXInKTtcclxuICBjb25zdCBwb3NpdGlvbnNZID0gW107XHJcbiAgLy8gc2V0IHZhbHVlcyBmb3IgdmVydGV4IHZlcnRpY2FsIHBvc2l0aW9uc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cnM7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdCh0ZW1wc1tpXSk7XHJcbiAgICBwb3NpdGlvbnNZLnB1c2goY3VycmVudFZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgbWluVmFsdWUgPSBwb3NpdGlvbnNZLnJlZHVjZSgobWluLCBjdXJyZW50KSA9PiAobWluIDwgY3VycmVudCA/IG1pbiA6IGN1cnJlbnQpKTtcclxuICBjb25zdCBtYXhWYWx1ZSA9IHBvc2l0aW9uc1kucmVkdWNlKChtYXgsIGN1cnJlbnQpID0+IChtYXggPiBjdXJyZW50ID8gbWF4IDogY3VycmVudCkpO1xyXG4gIC8vIHR1cm4gdmFsdWVzIHRvIHBpeGVsc1xyXG4gIGNvbnN0IHBvc2l0aW9uc1RvUGl4ZWxzID0gcG9zaXRpb25zWS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBwZXJjZW50ID0gcmFuZ2VQZXJjZW50KG1pblZhbHVlLCBtYXhWYWx1ZSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHJhbmdlUGVyY2VudFRvUGl4ZWxzKHBlcmNlbnQsIGNoYXJ0c0hlaWdodFRlbXBzKTtcclxuICB9KTtcclxuICAvLyB1c2UgdmFsdWVzIG9uIGRyYXdcclxuICBsZXQgZHJhd1RlbXAgPSAnJztcclxuICBwb3NpdGlvbnNYLmZvckVhY2goKHBvcywgaSkgPT4ge1xyXG4gICAgY29uc3QgbGluZUNvbW1hbmQgPSBpID09PSAwID8gJ00nIDogJ0wnO1xyXG4gICAgY29uc3QgcG9zWCA9IHBvcztcclxuICAgIGNvbnN0IHBvc1kgPSBwb3NpdGlvbnNUb1BpeGVsc1tpXTtcclxuICAgIGRyYXdUZW1wICs9IGAgJHtsaW5lQ29tbWFuZH0gJHtwb3NYfSAke3Bvc1kgKyAodGV4dFNwYWNlIC8gMil9YDtcclxuICB9KTtcclxuXHJcbiAgdGVtcENoYXJ0LnNldEF0dHJpYnV0ZSgnZCcsIGRyYXdUZW1wKTtcclxuXHJcbiAgLy8gcG9zaXRpb24gdGhlIG51bWJlcnMgb24gZWFjaCB2ZXJ0ZXhcclxuICB0ZW1wQ2hhcnRUZXh0cy5mb3JFYWNoKCh0ZXh0LCBpKSA9PiB7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgneCcsIHBvc2l0aW9uc1hbaV0pO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3knLCBwb3NpdGlvbnNUb1BpeGVsc1tpXSArICh0ZXh0U3BhY2UgLyA0KSk7XHJcbiAgfSk7XHJcbiAgaGlkZUJldHdlZW4odGVtcENoYXJ0VGV4dHMpO1xyXG4gIHRlbXBDaGFydE51bWJlcnMuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiB7XHJcbiAgICB2YWx1ZUFkanVzdChudW1iZXIsIG51bWJlci50ZXh0Q29udGVudCwgdGVtcHNbaV0pO1xyXG4gICAgbnVtYmVyLmRhdGFzZXQuY2Vsc2l1cyA9IHRlbXBzW2ldO1xyXG4gICAgbnVtYmVyLmRhdGFzZXQuZmFocmVuaGVpdCA9IGNlbHNpdXNUb0ZhaHJlbmhlaXQodGVtcHNbaV0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBwb3NpdGlvbiBjaXJjbGUgdmVydGljZXNcclxuICB0ZW1wQ2hhcnRWZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgsIGkpID0+IHtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ2N4JywgYCR7cG9zaXRpb25zWFtpXX1gKTtcclxuICAgIHZlcnRleC5zZXRBdHRyaWJ1dGUoJ2N5JywgYCR7cG9zaXRpb25zVG9QaXhlbHNbaV0gKyAodGV4dFNwYWNlIC8gMil9YCk7XHJcbiAgfSk7XHJcbiAgaGlkZUJldHdlZW4odGVtcENoYXJ0VmVydGljZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eUNoYXJ0KGRvbUVsZW1lbnQsIHBvc2l0aW9uc1gsIGhlaWdodCkge1xyXG4gIGxldCBkcmF3VGVtcCA9ICcnO1xyXG4gIHBvc2l0aW9uc1guZm9yRWFjaCgocG9zLCBpKSA9PiB7XHJcbiAgICBjb25zdCBsaW5lQ29tbWFuZCA9IGkgPT09IDAgPyAnTScgOiAnTCc7XHJcbiAgICBjb25zdCBwb3NYID0gcG9zO1xyXG4gICAgZHJhd1RlbXAgKz0gYCAke2xpbmVDb21tYW5kfSAke3Bvc1h9ICR7aGVpZ2h0fWA7XHJcbiAgfSk7XHJcbiAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2QnLCBkcmF3VGVtcCk7XHJcbn1cclxuXHJcbi8vIFRPRE86IHdpbmRvdyBsaXN0ZW5lciByZXNpemUsIGFkZCBkYXRhc2V0IGZvciBzdGFydGluZyBob3VyIGFuZCBkYXlcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWVBZGp1c3QoZG9tRWxlbWVudCwgZnJvbVZhbHVlLCB0b1ZhbHVlKSB7XHJcbiAgY29uc3QgcXVhbnRpdHkgPSA1MDtcclxuICBjb25zdCBpc0Zsb2F0ID0gZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RlbXBlcmF0dXJlLW51bWJlcicpID8gMSA6IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSArPSAxKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChmcm9tVmFsdWUpICsgKCgodG9WYWx1ZSAtIGZyb21WYWx1ZSkgLyBxdWFudGl0eSkgKiAoaSArIDEpKTtcclxuICAgICAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGkgPT09IHF1YW50aXR5IC0gMSA/IHRvVmFsdWUgOiBjdXJyZW50VmFsdWUudG9GaXhlZChpc0Zsb2F0KTtcclxuICAgIH0sIDI1ICogKGkgKyAxKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgc2V0TWludXRlcyxcclxuICBnZXRNaW51dGVzLFxyXG4gIGlzQmVmb3JlLFxyXG4gIGlzQWZ0ZXIsXHJcbn0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgY2xvdWRzSGlnaCBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2Nsb3Vkcy1oaWdoLnBuZyc7XHJcbmltcG9ydCBjbG91ZHNMb3cgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9jbG91ZHMtbG93LnBuZyc7XHJcbmltcG9ydCBjbG91ZHNNaWRkbGUgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9jbG91ZHMtbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBkcml6emxlSGlnaCBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2RyaXp6bGUtaGlnaC5wbmcnO1xyXG5pbXBvcnQgZHJpenpsZUxvdyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2RyaXp6bGUtbG93LnBuZyc7XHJcbmltcG9ydCBkcml6emxlTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvZHJpenpsZS1taWRkbGUucG5nJztcclxuaW1wb3J0IGZvZyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL2ZvZy5wbmcnO1xyXG5pbXBvcnQgaGFpbEhpZ2ggZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9oYWlsLWhpZ2gucG5nJztcclxuaW1wb3J0IGhhaWxMb3cgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9oYWlsLWxvdy5wbmcnO1xyXG5pbXBvcnQgaWNlTG93IGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaWNlLWxvdy5wbmcnO1xyXG5pbXBvcnQgaWNlTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvaWNlLW1pZGRsZS5wbmcnO1xyXG5pbXBvcnQgaWNlU21hbGwgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9pY2Utc21hbGwucG5nJztcclxuaW1wb3J0IG1vb24gZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9tb29uLnBuZyc7XHJcbmltcG9ydCBtb29uQ2xlYXJTa3kgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9tb29uLWNsZWFyLXNreS5wbmcnO1xyXG5pbXBvcnQgcmFpbkJpZ0hpZ2ggZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9yYWluLWJpZy1oaWdoLnBuZyc7XHJcbmltcG9ydCByYWluQmlnTG93IGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1iaWctbG93LnBuZyc7XHJcbmltcG9ydCByYWluQmlnTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1iaWctbWlkZGxlLnBuZyc7XHJcbmltcG9ydCByYWluSGlnaCBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4taGlnaC5wbmcnO1xyXG5pbXBvcnQgcmFpbkxvdyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3JhaW4tbG93LnBuZyc7XHJcbmltcG9ydCByYWluTWlkZGxlIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvcmFpbi1taWRkbGUucG5nJztcclxuaW1wb3J0IHNub3dCaWdIaWdoIGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc25vdy1iaWctaGlnaC5wbmcnO1xyXG5pbXBvcnQgc25vd0JpZ0xvdyBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3Nub3ctYmlnLWxvdy5wbmcnO1xyXG5pbXBvcnQgc25vd0hpZ2ggZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LWhpZ2gucG5nJztcclxuaW1wb3J0IHNub3dMb3cgZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zbm93LWxvdy5wbmcnO1xyXG5pbXBvcnQgc25vd01pZGRsZSBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3Nub3ctbWlkZGxlLnBuZyc7XHJcbmltcG9ydCBzdW4gZnJvbSAnLi4vLi4vbWVkaWEvaW1hZ2VzL3dlYXRoZXItaWNvbi1wYXJ0cy9zdW4ucG5nJztcclxuaW1wb3J0IHN1bkNsZWFyU2t5IGZyb20gJy4uLy4uL21lZGlhL2ltYWdlcy93ZWF0aGVyLWljb24tcGFydHMvc3VuLWNsZWFyLXNreS5wbmcnO1xyXG5pbXBvcnQgdGh1bmRlciBmcm9tICcuLi8uLi9tZWRpYS9pbWFnZXMvd2VhdGhlci1pY29uLXBhcnRzL3RodW5kZXIucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJJY29uKGljb25QYXJ0cywgbG9jYWxUaW1lLCBzdW5yaXNlLCBzdW5zZXQpIHtcclxuICAvLyBlYWNoIGltYWdlIHdpbGwgYmUgYWRkZWQgaGVyZSBDU1MgZm9ybWF0IGJlZm9yZSByZXR1cm5pbmcgaXRcclxuICBsZXQgaW1hZ2VzID0gJyc7XHJcbiAgLy8gYXBwbHkgbG9jYWwgbWludXRlcyB0byBjaXR5IHRpbWUgYXMgdGhlIEFQSSBhbHdheXMgcmV0dXJucyAwMFxyXG4gIGxldCBzdW5Nb29uO1xyXG4gIGlmIChsb2NhbFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY2l0eVRpbWUgPSBzZXRNaW51dGVzKG5ldyBEYXRlKGxvY2FsVGltZSksIGdldE1pbnV0ZXMobmV3IERhdGUoKSkpO1xyXG4gICAgY29uc3QgaXNEYXkgPSBpc0JlZm9yZShuZXcgRGF0ZShzdW5yaXNlKSwgbmV3IERhdGUoY2l0eVRpbWUpKVxyXG4gICAgJiYgaXNBZnRlcihuZXcgRGF0ZShzdW5zZXQpLCBuZXcgRGF0ZShjaXR5VGltZSkpO1xyXG4gICAgY29uc3QgaXNDbGVhckRheSA9IGljb25QYXJ0cy5sZW5ndGggPT09IDEgJiYgaWNvblBhcnRzWzBdID09PSAnc3VuTW9vbic7XHJcblxyXG4gICAgaWYgKGlzRGF5KSB7XHJcbiAgICAgIHN1bk1vb24gPSBpc0NsZWFyRGF5ID8gc3VuQ2xlYXJTa3kgOiBzdW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdW5Nb29uID0gaXNDbGVhckRheSA/IG1vb25DbGVhclNreSA6IG1vb247XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHN1bk1vb24gPSBzdW47XHJcbiAgfVxyXG5cclxuICAvLyBsaXN0IGltYWdlcyBzbyB0aGV5IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgZnJvbSBhIHN0cmluZ1xyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgc3VuTW9vbixcclxuICAgIGNsb3Vkc0hpZ2gsXHJcbiAgICBjbG91ZHNMb3csXHJcbiAgICBjbG91ZHNNaWRkbGUsXHJcbiAgICBkcml6emxlSGlnaCxcclxuICAgIGRyaXp6bGVMb3csXHJcbiAgICBkcml6emxlTWlkZGxlLFxyXG4gICAgZm9nLFxyXG4gICAgaGFpbEhpZ2gsXHJcbiAgICBoYWlsTG93LFxyXG4gICAgaWNlTG93LFxyXG4gICAgaWNlTWlkZGxlLFxyXG4gICAgaWNlU21hbGwsXHJcbiAgICByYWluQmlnSGlnaCxcclxuICAgIHJhaW5CaWdMb3csXHJcbiAgICByYWluQmlnTWlkZGxlLFxyXG4gICAgcmFpbkhpZ2gsXHJcbiAgICByYWluTG93LFxyXG4gICAgcmFpbk1pZGRsZSxcclxuICAgIHNub3dCaWdIaWdoLFxyXG4gICAgc25vd0JpZ0xvdyxcclxuICAgIHNub3dIaWdoLFxyXG4gICAgc25vd0xvdyxcclxuICAgIHNub3dNaWRkbGUsXHJcbiAgICB0aHVuZGVyLFxyXG4gIH07XHJcblxyXG4gIGljb25QYXJ0cy5mb3JFYWNoKChwYXJ0LCBpKSA9PiB7XHJcbiAgICBjb25zdCBjb21tYSA9IGAke2kgIT09IDAgPyAnLCAnIDogJyd9YDtcclxuICAgIGltYWdlcyArPSBgJHtjb21tYX11cmwoJHtpY29uc1twYXJ0XX0pYDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGltYWdlcztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWF0aGVyY29kZShyZXF1ZXN0ZWRDb2RlKSB7XHJcbiAgLypcclxuICAqIHNvdXJjZTogaHR0cHM6Ly9vcGVuLW1ldGVvLmNvbS9lbi9kb2NzXHJcbiAgKiBXTU8gV2VhdGhlciBpbnRlcnByZXRhdGlvbiBjb2RlcyAoV1cpXHJcbiAgKiBDb2RlIC0gRGVzY3JpcHRpb25cclxuICAqIDAgLS0tLS0tLS0tLSBDbGVhciBza3lcclxuICAqIDEsIDIsIDMgLS0tLSBNYWlubHkgY2xlYXIsIHBhcnRseSBjbG91ZHksIGFuZCBvdmVyY2FzdFxyXG4gICogNDUsIDQ4IC0tLS0tIEZvZyBhbmQgZGVwb3NpdGluZyByaW1lIGZvZ1xyXG4gICogNTEsIDUzLCA1NSAtIERyaXp6bGU6IExpZ2h0LCBtb2RlcmF0ZSwgYW5kIGRlbnNlIGludGVuc2l0eVxyXG4gICogNTYsIDU3IC0tLS0tIEZyZWV6aW5nIERyaXp6bGU6IExpZ2h0IGFuZCBkZW5zZSBpbnRlbnNpdHlcclxuICAqIDYxLCA2MywgNjUgLSBSYWluOiBTbGlnaHQsIG1vZGVyYXRlIGFuZCBoZWF2eSBpbnRlbnNpdHlcclxuICAqIDY2LCA2NyAtLS0tLSBGcmVlemluZyBSYWluOiBMaWdodCBhbmQgaGVhdnkgaW50ZW5zaXR5XHJcbiAgKiA3MSwgNzMsIDc1IC0gU25vdyBmYWxsOiBTbGlnaHQsIG1vZGVyYXRlLCBhbmQgaGVhdnkgaW50ZW5zaXR5XHJcbiAgKiA3NyAtLS0tLS0tLS0gU25vdyBncmFpbnNcclxuICAqIDgwLCA4MSwgODIgLSBSYWluIHNob3dlcnM6IFNsaWdodCwgbW9kZXJhdGUsIGFuZCB2aW9sZW50XHJcbiAgKiA4NSwgODYgLS0tLS0gU25vdyBzaG93ZXJzIHNsaWdodCBhbmQgaGVhdnlcclxuICAqIDk1ICogLS0tLS0tLSBUaHVuZGVyc3Rvcm06IFNsaWdodCBvciBtb2RlcmF0ZVxyXG4gICogOTYsIDk5ICogLS0tIFRodW5kZXJzdG9ybSB3aXRoIHNsaWdodCBhbmQgaGVhdnkgaGFpbFxyXG4gICogKCopIFRodW5kZXJzdG9ybSBmb3JlY2FzdCB3aXRoIGhhaWwgaXMgb25seSBhdmFpbGFibGUgaW4gQ2VudHJhbCBFdXJvcGVcclxuICAqL1xyXG5cclxuICBjb25zdCBjb2RlcyA9IFtcclxuICAgIHtcclxuICAgICAgY29kZTogMCxcclxuICAgICAgd2VhdGhlcjogJ2NsZWFyIHNreScsXHJcbiAgICAgIGljb246IFsnc3VuTW9vbiddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogMSxcclxuICAgICAgd2VhdGhlcjogJ21haW5seSBjbGVhcicsXHJcbiAgICAgIGljb246IFsnY2xvdWRzTG93JywgJ3N1bk1vb24nXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDIsXHJcbiAgICAgIHdlYXRoZXI6ICdwYXJ0bHkgY2xvdWR5JyxcclxuICAgICAgaWNvbjogWydjbG91ZHNNaWRkbGUnLCAnc3VuTW9vbiddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogMyxcclxuICAgICAgd2VhdGhlcjogJ292ZXJjYXN0JyxcclxuICAgICAgaWNvbjogWydjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA0NSxcclxuICAgICAgd2VhdGhlcjogJ2ZvZycsXHJcbiAgICAgIGljb246IFsnZm9nJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDQ4LFxyXG4gICAgICB3ZWF0aGVyOiAnZGVwb3NpdGluZyByaW1lIGZvZycsXHJcbiAgICAgIGljb246IFsnaWNlU21hbGwnLCAnZm9nJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDUxLFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydkcml6emxlTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDUzLFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ21vZGVyYXRlJyxcclxuICAgICAgaWNvbjogWydkcml6emxlTWlkZGxlJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDU1LFxyXG4gICAgICB3ZWF0aGVyOiAnZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2RlbnNlJyxcclxuICAgICAgaWNvbjogWydkcml6emxlSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA1NixcclxuICAgICAgd2VhdGhlcjogJ2ZyZWV6aW5nIGRyaXp6bGUnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdsaWdodCcsXHJcbiAgICAgIGljb246IFsncmFpbkRyaXp6bGVIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDU3LFxyXG4gICAgICB3ZWF0aGVyOiAnZnJlZXppbmcgZHJpenpsZScsXHJcbiAgICAgIGludGVuc2l0eTogJ2RlbnNlJyxcclxuICAgICAgaWNvbjogWydpY2VNaWRkbGUnLCAncmFpbkRyaXp6bGVIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDYxLFxyXG4gICAgICB3ZWF0aGVyOiAncmFpbicsXHJcbiAgICAgIGludGVuc2l0eTogJ3NsaWdodCcsXHJcbiAgICAgIGljb246IFsncmFpbkxvdycsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2MyxcclxuICAgICAgd2VhdGhlcjogJ3JhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsncmFpbk1pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA2NSxcclxuICAgICAgd2VhdGhlcjogJ3JhaW4nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eScsXHJcbiAgICAgIGljb246IFsncmFpbkhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNjYsXHJcbiAgICAgIHdlYXRoZXI6ICdmcmVlemluZyByYWluJyxcclxuICAgICAgaW50ZW5zaXR5OiAnbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ2ljZU1pZGRsZScsICdyYWluTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDY3LFxyXG4gICAgICB3ZWF0aGVyOiAnZnJlZXppbmcgcmFpbicsXHJcbiAgICAgIGludGVuc2l0eTogJ2hlYXZ5JyxcclxuICAgICAgaWNvbjogWydpY2VNaWRkbGUnLCAncmFpbkhpZ2gnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzEsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGZhbGwnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdzbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3Nub3dMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogNzMsXHJcbiAgICAgIHdlYXRoZXI6ICdzbm93IGZhbGwnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsnc25vd01pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA3NSxcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgZmFsbCcsXHJcbiAgICAgIGludGVuc2l0eTogJ2hlYXZ5JyxcclxuICAgICAgaWNvbjogWydzbm93SGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA3NyxcclxuICAgICAgd2VhdGhlcjogJ3Nub3cgZ3JhaW5zJyxcclxuICAgICAgaWNvbjogWydpY2VMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogODAsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluIHNob3dlcnMnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdzbGlnaHQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5CaWdMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogODEsXHJcbiAgICAgIHdlYXRoZXI6ICdyYWluIHNob3dlcnMnLFxyXG4gICAgICBpbnRlbnNpdHk6ICdtb2RlcmF0ZScsXHJcbiAgICAgIGljb246IFsncmFpbkJpZ01pZGRsZScsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOiA4MixcclxuICAgICAgd2VhdGhlcjogJ3JhaW4gc2hvd2VycycsXHJcbiAgICAgIGludGVuc2l0eTogJ3Zpb2xlbnQnLFxyXG4gICAgICBpY29uOiBbJ3JhaW5CaWdIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDg1LFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0JyxcclxuICAgICAgaWNvbjogWydzbm93QmlnTG93JywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDg2LFxyXG4gICAgICB3ZWF0aGVyOiAnc25vdyBzaG93ZXJzJyxcclxuICAgICAgaW50ZW5zaXR5OiAnaGVhdnknLFxyXG4gICAgICBpY29uOiBbJ3Nub3dCaWdIaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDk1LFxyXG4gICAgICB3ZWF0aGVyOiAndGh1bmRlcnN0b3JtJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0IHRvIG1vZGVyYXRlJyxcclxuICAgICAgaWNvbjogWyd0aHVuZGVyJywgJ3JhaW5IaWdoJywgJ2Nsb3Vkc0hpZ2gnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6IDk2LFxyXG4gICAgICB3ZWF0aGVyOiAndGh1bmRlcnN0b3JtJyxcclxuICAgICAgaW50ZW5zaXR5OiAnc2xpZ2h0IGhhaWwnLFxyXG4gICAgICBpY29uOiBbJ2hhaWxMb3cnLCAnY2xvdWRzSGlnaCddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29kZTogOTksXHJcbiAgICAgIHdlYXRoZXI6ICd0aHVuZGVyc3Rvcm0nLFxyXG4gICAgICBpbnRlbnNpdHk6ICdoZWF2eSBoYWlsJyxcclxuICAgICAgaWNvbjogWydoYWlsSGlnaCcsICdjbG91ZHNIaWdoJ10sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RlZCA9IGNvZGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSByZXF1ZXN0ZWRDb2RlKTtcclxuXHJcbiAgcmV0dXJuIGNvZGVzW3JlcXVlc3RlZF07XHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuL2RvbS9zZWFyY2gnO1xyXG5pbXBvcnQgd2VhdGhlckN1cnJlbnQgZnJvbSAnLi9kb20vd2VhdGhlckN1cnJlbnQnO1xyXG5pbXBvcnQgd2VhdGhlckRhaWx5SG91cmx5IGZyb20gJy4vZG9tL3dlYXRoZXJEYWlseUhvdXJseSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVWkoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBib2R5LmFwcGVuZChcclxuICAgIHNlYXJjaCgpLFxyXG4gICAgd2VhdGhlckN1cnJlbnQoKSxcclxuICAgIHdlYXRoZXJEYWlseUhvdXJseSgpLFxyXG4gICk7XHJcbn1cclxuIiwiY29uc3QgQ0NfUkVHRVggPSAvXlthLXpdezJ9JC9pO1xuY29uc3QgRkxBR19MRU5HVEggPSA0O1xuY29uc3QgT0ZGU0VUID0gMTI3Mzk3O1xuZnVuY3Rpb24gY291bnRyeUNvZGVFbW9qaShjYykge1xuICBpZiAoIUNDX1JFR0VYLnRlc3QoY2MpKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjYyBhcmd1bWVudCBtdXN0IGJlIGFuIElTTyAzMTY2LTEgYWxwaGEtMiBzdHJpbmcsIGJ1dCBnb3QgJyR7dHlwZSA9PT0gXCJzdHJpbmdcIiA/IGNjIDogdHlwZX0nIGluc3RlYWQuYCk7XG4gIH1cbiAgY29uc3QgY29kZVBvaW50cyA9IFsuLi5jYy50b1VwcGVyQ2FzZSgpXS5tYXAoKGMpID0+IGMuY29kZVBvaW50QXQoKSArIE9GRlNFVCk7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKTtcbn1cbmZ1bmN0aW9uIGVtb2ppQ291bnRyeUNvZGUoZmxhZykge1xuICBpZiAoZmxhZy5sZW5ndGggIT09IEZMQUdfTEVOR1RIKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBmbGFnO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGZsYWcgYXJndW1lbnQgbXVzdCBiZSBhIGZsYWcgZW1vamksIGJ1dCBnb3QgJyR7dHlwZSA9PT0gXCJzdHJpbmdcIiA/IGZsYWcgOiB0eXBlfScgaW5zdGVhZC5gKTtcbiAgfVxuICBjb25zdCBjb2RlUG9pbnRzID0gWy4uLmZsYWddLm1hcCgoYykgPT4gYy5jb2RlUG9pbnRBdCgpIC0gT0ZGU0VUKTtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpO1xufVxudmFyIHNyY19kZWZhdWx0ID0gY291bnRyeUNvZGVFbW9qaTtcbmV4cG9ydCB7XG4gIGNvdW50cnlDb2RlRW1vamksXG4gIHNyY19kZWZhdWx0IGFzIGRlZmF1bHQsXG4gIGVtb2ppQ291bnRyeUNvZGVcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=