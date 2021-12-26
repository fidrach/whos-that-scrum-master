"use strict";
(() => {
var exports = {};
exports.id = "pages/api/team";
exports.ids = ["pages/api/team"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (true) global.prisma = prisma;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/team.ts":
/*!***************************!*\
  !*** ./pages/api/team.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const team = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.team.findMany();
        res.status(200).json(team);
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({
          error: 'Error fetching posts'
        });
      }

      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/team.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3RlYW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBb0IsR0FBSUMsTUFBRCxDQUFnQkQsTUFBaEIsSUFBMEIsSUFBSUQsd0RBQUosRUFBdkQ7QUFFQSxJQUFJLE1BQXlDRSxNQUFELENBQWdCRCxNQUFoQixHQUF5QkEsTUFBekI7QUFFNUMsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBRUEsaUVBQWUsT0FBT0UsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDaEUsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWFGLEdBQW5COztBQUVBLFVBQVFFLE1BQVI7QUFDSSxTQUFLLEtBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUMsSUFBSSxHQUFHLE1BQU1MLDhEQUFBLEVBQW5CO0FBQ0FHLFFBQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxJQUFyQjtBQUNILE9BSEQsQ0FHRSxPQUFPSSxDQUFQLEVBQVU7QUFDUkMsUUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsZUFBZCxFQUErQkYsQ0FBL0I7QUFDQU4sUUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FBckI7QUFDSDs7QUFDRDs7QUFDSjtBQUNJUixNQUFBQSxHQUFHLENBQUNTLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBVCxNQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCTSxHQUFoQixDQUFxQixVQUFTVCxNQUFPLGNBQXJDO0FBQ0E7QUFiUjtBQWVILENBbEJEOzs7Ozs7Ozs7O0FDSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aG9zLXRoYXQtc2NydW0tbWFzdGVyLy4vbGliL3ByaXNtYS50cyIsIndlYnBhY2s6Ly93aG9zLXRoYXQtc2NydW0tbWFzdGVyLy4vcGFnZXMvYXBpL3RlYW0udHMiLCJ3ZWJwYWNrOi8vd2hvcy10aGF0LXNjcnVtLW1hc3Rlci9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgcHJpc21hOiBQcmlzbWFDbGllbnQgPSAoZ2xvYmFsIGFzIGFueSkucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgKGdsb2JhbCBhcyBhbnkpLnByaXNtYSA9IHByaXNtYTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG5cclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSBhd2FpdCBwcmlzbWEudGVhbS5maW5kTWFueSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odGVhbSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlcXVlc3QgZXJyb3InLCBlKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBwb3N0cycgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRlYW0iLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==