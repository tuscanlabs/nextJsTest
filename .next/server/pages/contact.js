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
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactUs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"emailjs-com\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/raghu/Documents/GitHub/nextJsTest/pages/contact.js\";\n\n\n\nfunction ContactUs() {\n  function sendEmail(e) {\n    console.log(\"Hello\" + e.target);\n    e.preventDefault();\n    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default().sendForm('service_qv5rf4j', 'template_yb4s5du', e.target, 'user_zwXFACRqpbUlyuAmu03Mj').then(result => {\n      console.log(result.text);\n      e.target.reset;\n    }, error => {\n      console.log(error.text);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n    height: \"100vh\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      id: \"frm1\",\n      action: \"submit\",\n      onSubmit: sendEmail,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        height: \"50vh\",\n        backgroundColor: \"Orange.100\",\n        direction: \"column\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n            children: \"Material\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n            id: \"material\",\n            type: \"text\",\n            placeholder: \"TV\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 14\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n            children: \"Date\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n            id: \"date\",\n            type: \"date\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n            children: \"Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n            id: \"to_name\",\n            type: \"text\",\n            placeholder: \"Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n            children: \"Message\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n            id: \"message\",\n            type: \"text\",\n            placeholder: \"Message\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n          mt: 4,\n          colorScheme: \"teal\",\n          type: \"submit\",\n          children: \"Contact Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVpc3RfZmluZGVyLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInNlbmRFbWFpbCIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbGpzIiwidGhlbiIsInJlc3VsdCIsInRleHQiLCJyZXNldCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLFNBQVQsR0FBcUI7QUFFbEMsV0FBU0MsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVVGLENBQUMsQ0FBQ0csTUFBeEI7QUFDRkgsS0FBQyxDQUFDSSxjQUFGO0FBRUFDLCtEQUFBLENBQWlCLGlCQUFqQixFQUFvQyxrQkFBcEMsRUFBd0RMLENBQUMsQ0FBQ0csTUFBMUQsRUFBa0UsNEJBQWxFLEVBQ0dHLElBREgsQ0FDU0MsTUFBRCxJQUFZO0FBQ2ROLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxNQUFNLENBQUNDLElBQW5CO0FBQ0FSLE9BQUMsQ0FBQ0csTUFBRixDQUFTTSxLQUFUO0FBQ0gsS0FKSCxFQUlNQyxLQUFELElBQVc7QUFDVlQsYUFBTyxDQUFDQyxHQUFSLENBQVlRLEtBQUssQ0FBQ0YsSUFBbEI7QUFDSCxLQU5IO0FBUUQ7O0FBRUQsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFNLEVBQUMsT0FBYjtBQUFxQixjQUFVLEVBQUMsUUFBaEM7QUFBeUMsa0JBQWMsRUFBQyxRQUF4RDtBQUFBLDJCQUNJO0FBQU0sUUFBRSxFQUFDLE1BQVQ7QUFBZ0IsWUFBTSxFQUFDLFFBQXZCO0FBQWdDLGNBQVEsRUFBRVQsU0FBMUM7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLGNBQU0sRUFBQyxNQUFiO0FBQW9CLHVCQUFlLEVBQUMsWUFBcEM7QUFBaUQsaUJBQVMsRUFBQyxRQUEzRDtBQUFBLGdDQUNDLDhEQUFDLHlEQUFEO0FBQUEsa0NBQ0MsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQyw4REFBQyxtREFBRDtBQUFPLGNBQUUsRUFBQyxVQUFWO0FBQXFCLGdCQUFJLEVBQUMsTUFBMUI7QUFBaUMsdUJBQVcsRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUtBLDhEQUFDLHlEQUFEO0FBQUEsa0NBQ0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSw4REFBQyxtREFBRDtBQUFPLGNBQUUsRUFBQyxNQUFWO0FBQWlCLGdCQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEEsZUFTQSw4REFBQyx5REFBRDtBQUFBLGtDQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTyxjQUFFLEVBQUMsU0FBVjtBQUFvQixnQkFBSSxFQUFDLE1BQXpCO0FBQWdDLHVCQUFXLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEEsZUFhQSw4REFBQyx5REFBRDtBQUFBLGtDQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTyxjQUFFLEVBQUMsU0FBVjtBQUFvQixnQkFBSSxFQUFDLE1BQXpCO0FBQWdDLHVCQUFXLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkEsZUFpQkEsOERBQUMsb0RBQUQ7QUFDQSxZQUFFLEVBQUUsQ0FESjtBQUVBLHFCQUFXLEVBQUMsTUFGWjtBQUdBLGNBQUksRUFBQyxRQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7ICBcbmltcG9ydCB7IEZsZXgsIElucHV0LCBGb3JtLCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBUZXh0LCBJbnB1dEdyb3VwLCBCdXR0b24sXG5TdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdFVzKCkge1xuXG4gIGZ1bmN0aW9uIHNlbmRFbWFpbChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIgKyBlLnRhcmdldCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9xdjVyZjRqJywgJ3RlbXBsYXRlX3liNHM1ZHUnLCBlLnRhcmdldCwgJ3VzZXJfendYRkFDUnFwYlVseXVBbXUwM01qJylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XG4gICAgICAgICAgZS50YXJnZXQucmVzZXQ7XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcbiAgICAgIH0pO1xuICAgICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGhlaWdodD1cIjEwMHZoXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIDxmb3JtIGlkPVwiZnJtMVwiIGFjdGlvbj0nc3VibWl0JyBvblN1Ym1pdD17c2VuZEVtYWlsfSA+XG4gICAgICAgICAgICA8RmxleCBoZWlnaHQ9XCI1MHZoXCIgYmFja2dyb3VuZENvbG9yPVwiT3JhbmdlLjEwMFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5NYXRlcmlhbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJtYXRlcmlhbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUVlwiIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkRhdGU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCIgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPk5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IGlkPVwidG9fbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5NZXNzYWdlPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCBpZD1cIm1lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIG10PXs0fVxuICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCIgXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L0ZsZXg+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("emailjs-com");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/contact.js"));
module.exports = __webpack_exports__;

})();