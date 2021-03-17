self["webpackHotUpdatejs_testing"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_get_ny_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get-ny-date */ "./src/modules/get-ny-date.js");
/* harmony import */ var _modules_get_ny_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_get_ny_date__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_sign_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sign-local */ "./src/modules/sign-local.js");
/* harmony import */ var _modules_sign_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_sign_local__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_get_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-cookie */ "./src/modules/get-cookie.js");





var output = document.querySelector('.lang');
var lang = (0,_modules_get_cookie__WEBPACK_IMPORTED_MODULE_2__.default)('local');

if (!lang) {
  lang = _modules_sign_local__WEBPACK_IMPORTED_MODULE_1___default()();
}

output.textContent = lang; //const output = document.querySelector('.output');
//output.innerHTML = getNYDate().toUTCString();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8856fb65d4fc369aa847")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bfb7e61b8ffc9009ea28.hot-update.js.map