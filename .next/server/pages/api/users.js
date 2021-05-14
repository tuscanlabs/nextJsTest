/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  //res.status(200).json({ name: 'John Doe' })\n  const contacts = await prisma.contact.findMany();\n  console.log(contacts);\n  res.status(200).json(contacts);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVpc3RfZmluZGVyLy4vcGFnZXMvYXBpL3VzZXJzLmpzPzU3NGQiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwiY29udGFjdHMiLCJjb250YWN0IiwiZmluZE1hbnkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVBLCtEQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNSixNQUFNLENBQUNLLE9BQVAsQ0FBZUMsUUFBZixFQUF2QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNBRCxLQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQk4sUUFBckI7QUFFRCxDQU5IIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG4gXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6ICdKb2huIERvZScgfSlcbiAgICBjb25zdCBjb250YWN0cyA9IGF3YWl0IHByaXNtYS5jb250YWN0LmZpbmRNYW55KCk7XG4gICAgY29uc29sZS5sb2coY29udGFjdHMpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29udGFjdHMpXG5cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/users.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/users.js"));
module.exports = __webpack_exports__;

})();