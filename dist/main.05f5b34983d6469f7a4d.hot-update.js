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
var local = _modules_sign_local__WEBPACK_IMPORTED_MODULE_1___default()();
output.textContent = local; //const output = document.querySelector('.output');
//output.innerHTML = getNYDate().toUTCString();

/***/ }),

/***/ "./src/modules/get-cookie.js":
/*!***********************************!*\
  !*** ./src/modules/get-cookie.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCookie)
/* harmony export */ });
function getCookie() {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bae1a0279e4d58ae84ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.05f5b34983d6469f7a4d.hot-update.js.map