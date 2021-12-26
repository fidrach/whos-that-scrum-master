"use strict";
(() => {
var exports = {};
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ team)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

const prisma = global.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const lib_prisma = (prisma);
;// CONCATENATED MODULE: ./pages/api/team.ts

/* harmony default export */ const team = (async (req, res) => {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const team = await lib_prisma.team.findMany();
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(104));
module.exports = __webpack_exports__;

})();