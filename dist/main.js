/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_get_ny_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get-ny-date */ \"./src/modules/get-ny-date.js\");\n/* harmony import */ var _modules_get_ny_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_get_ny_date__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_sign_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sign-local */ \"./src/modules/sign-local.js\");\n/* harmony import */ var _modules_sign_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_sign_local__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nconst local = _modules_sign_local__WEBPACK_IMPORTED_MODULE_1___default()();\nconsole.log('local: ', local);\n\n//const output = document.querySelector('.output');\n//output.innerHTML = getNYDate().toUTCString();\n\n//# sourceURL=webpack://js-testing/./src/index.js?");

/***/ }),

/***/ "./src/modules/get-ny-date.js":
/*!************************************!*\
  !*** ./src/modules/get-ny-date.js ***!
  \************************************/
/***/ ((module) => {

eval("const getNYDate = () => {\n    const today = new Date();\n    return new Date(`December 31, ${today.getFullYear()} 23:59:59 GMT-0000`).toUTCString();\n};\n\nmodule.exports = getNYDate;\n\n//# sourceURL=webpack://js-testing/./src/modules/get-ny-date.js?");

/***/ }),

/***/ "./src/modules/sign-local.js":
/*!***********************************!*\
  !*** ./src/modules/sign-local.js ***!
  \***********************************/
/***/ ((module) => {

eval("const signLocal = () => {\n    return prompt('Введите локаль (RU, EN, DE)', 'RU');\n};\n\nmodule.exports = signLocal;\n\n//# sourceURL=webpack://js-testing/./src/modules/sign-local.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;