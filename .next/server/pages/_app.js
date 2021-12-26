"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CssBaseline */ "@mui/material/CssBaseline");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/createEmotionCache */ "./utility/createEmotionCache.ts");
/* harmony import */ var _utility_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/theme */ "./utility/theme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Fidra\\Desktop\\Projects\\whos-that-scrum-master\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Client-side cache, shared for the whole session of the user in the browser.


const clientSideEmotionCache = (0,_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_6__.default)();
function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {
    value: emotionCache,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Who's that Scrum Master!?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("link", {
        rel: "icon",
        href: "/pikachu.webp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
      theme: _utility_theme__WEBPACK_IMPORTED_MODULE_7__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType.isRequired),
  emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)
};

/***/ }),

/***/ "./utility/createEmotionCache.ts":
/*!***************************************!*\
  !*** ./utility/createEmotionCache.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "@emotion/cache");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);
 // prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

function createEmotionCache() {
  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
    key: 'css',
    prepend: true
  });
}

/***/ }),

/***/ "./utility/theme.ts":
/*!**************************!*\
  !*** ./utility/theme.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/colors */ "@mui/material/colors");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.red.A400
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7OztBQUNBLE1BQU1RLHNCQUFzQixHQUFHRixvRUFBa0IsRUFBakQ7QUFFZSxTQUFTRyxLQUFULENBQWVDLEtBQWYsRUFBZ0M7QUFDM0MsUUFBTTtBQUNGQyxJQUFBQSxTQURFO0FBRUZDLElBQUFBLFlBQVksR0FBR0osc0JBRmI7QUFHRkssSUFBQUE7QUFIRSxNQUlGSCxLQUpKO0FBTUEsc0JBQ0ksOERBQUMseURBQUQ7QUFBZSxTQUFLLEVBQUVFLFlBQXRCO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGVBQU8sRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVNJLDhEQUFDLCtEQUFEO0FBQWUsV0FBSyxFQUFFTCxtREFBdEI7QUFBQSw4QkFFSSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSw4REFBQyxTQUFELG9CQUFlTSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDtBQUVESixLQUFLLENBQUNLLFNBQU4sR0FBa0I7QUFDZEgsRUFBQUEsU0FBUyxFQUFFUCwwRUFERztBQUVkUSxFQUFBQSxZQUFZLEVBQUVSLDBEQUZBO0FBR2RTLEVBQUFBLFNBQVMsRUFBRVQscUVBQTJCWTtBQUh4QixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7OztDQ3RDQTtBQUNBOztBQUNlLFNBQVNWLGtCQUFULEdBQThCO0FBQ3pDLFNBQU9ZLHFEQUFXLENBQUM7QUFBRUMsSUFBQUEsR0FBRyxFQUFFLEtBQVA7QUFBY0MsSUFBQUEsT0FBTyxFQUFFO0FBQXZCLEdBQUQsQ0FBbEI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7Q0FHQTs7QUFDQSxNQUFNYixLQUFLLEdBQUdlLGlFQUFXLENBQUM7QUFDdEJDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FESjtBQUlMQyxJQUFBQSxTQUFTLEVBQUU7QUFDUEQsTUFBQUEsSUFBSSxFQUFFO0FBREMsS0FKTjtBQU9MRSxJQUFBQSxLQUFLLEVBQUU7QUFDSEYsTUFBQUEsSUFBSSxFQUFFSiwwREFBUU87QUFEWDtBQVBGO0FBRGEsQ0FBRCxDQUF6QjtBQWNBLGlFQUFlckIsS0FBZjs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aG9zLXRoYXQtc2NydW0tbWFzdGVyLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXNjcnVtLW1hc3Rlci8uL3V0aWxpdHkvY3JlYXRlRW1vdGlvbkNhY2hlLnRzIiwid2VicGFjazovL3dob3MtdGhhdC1zY3J1bS1tYXN0ZXIvLi91dGlsaXR5L3RoZW1lLnRzIiwid2VicGFjazovL3dob3MtdGhhdC1zY3J1bS1tYXN0ZXIvZXh0ZXJuYWwgXCJAZW1vdGlvbi9jYWNoZVwiIiwid2VicGFjazovL3dob3MtdGhhdC1zY3J1bS1tYXN0ZXIvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovL3dob3MtdGhhdC1zY3J1bS1tYXN0ZXIvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXNjcnVtLW1hc3Rlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXNjcnVtLW1hc3Rlci9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXNjcnVtLW1hc3Rlci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dob3MtdGhhdC1zY3J1bS1tYXN0ZXIvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXNjcnVtLW1hc3Rlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXNjcnVtLW1hc3Rlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi91dGlsaXR5L2NyZWF0ZUVtb3Rpb25DYWNoZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlsaXR5L3RoZW1lJztcclxuXHJcbi8vIENsaWVudC1zaWRlIGNhY2hlLCBzaGFyZWQgZm9yIHRoZSB3aG9sZSBzZXNzaW9uIG9mIHRoZSB1c2VyIGluIHRoZSBicm93c2VyLlxyXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wczogQXBwUHJvcHMpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBDb21wb25lbnQsXHJcbiAgICAgICAgZW1vdGlvbkNhY2hlID0gY2xpZW50U2lkZUVtb3Rpb25DYWNoZSxcclxuICAgICAgICBwYWdlUHJvcHMsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+V2hvJ3MgdGhhdCBTY3J1bSBNYXN0ZXIhPzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9waWthY2h1LndlYnBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvQ2FjaGVQcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICBlbW90aW9uQ2FjaGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuIiwiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcclxuXHJcbi8vIHByZXBlbmQ6IHRydWUgbW92ZXMgTVVJIHN0eWxlcyB0byB0aGUgdG9wIG9mIHRoZSA8aGVhZD4gc28gdGhleSdyZSBsb2FkZWQgZmlyc3QuXHJcbi8vIEl0IGFsbG93cyBkZXZlbG9wZXJzIHRvIGVhc2lseSBvdmVycmlkZSBNVUkgc3R5bGVzIHdpdGggb3RoZXIgc3R5bGluZyBzb2x1dGlvbnMsIGxpa2UgQ1NTIG1vZHVsZXMuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcclxuICAgIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgIG1haW46ICcjNTU2Y2Q2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgICAgICBtYWluOiAnIzE5ODU3YicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICBtYWluOiByZWQuQTQwMCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY2FjaGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkNhY2hlUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJIZWFkIiwiUHJvcFR5cGVzIiwiUmVhY3QiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJ0aGVtZSIsImNsaWVudFNpZGVFbW90aW9uQ2FjaGUiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiY3JlYXRlQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIiwicmVkIiwiY3JlYXRlVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsIkE0MDAiXSwic291cmNlUm9vdCI6IiJ9