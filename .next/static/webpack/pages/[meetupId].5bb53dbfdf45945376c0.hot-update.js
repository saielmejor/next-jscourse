/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/saikenho/Downloads/React Projects/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js\";\n//own-domain/[meetupId]\n\n\n\n\nfunction MeetupDetails(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: props.meetupData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 12\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 12\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__.default, {\n      image: props.meetupData.image,\n      title: props.meetupData.title,\n      address: props.meetupData.address,\n      description: props.meetupData.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }, this);\n}\n\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetupDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz85MmE2Il0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQTZCO0FBQ3pCLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRztBQUFBLGtCQUFRQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLHFFQUFEO0FBQ0YsV0FBSyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFLEtBRHRCO0FBRUYsV0FBSyxFQUFFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBRnRCO0FBR0YsYUFBTyxFQUFHRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJHLE9BSHpCO0FBSUYsaUJBQVcsRUFBRUosS0FBSyxDQUFDQyxVQUFOLENBQWlCSTtBQUo1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlSDs7S0FoQlFOLGE7O0FBNERULCtEQUFlQSxhQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vb3duLWRvbWFpbi9bbWVldHVwSWRdXG5pbXBvcnQgeyBNb25nb0NsaWVudCAsT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpeyBcbiAgICByZXR1cm4oIFxuICAgICAgPEZyYWdtZW50PiBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICA8bWV0YT48L21ldGE+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE1lZXR1cERldGFpbFxuICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XG4gICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cbiAgICAgIGFkZHJlc3M9IHtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XG4gICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyAoKXsgXG4gIGNvbnN0IGNsaWVudD0gYXdhaXQgIE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vc2Fpa2VuOmx2T0pXY1NyQ2Vyd09YQ29AY2x1c3RlcjAuMmZnd3IubW9uZ29kYi5uZXQvTWVldHVwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuICBjb25zdCBkYj1jbGllbnQuZGIoKTsgXG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb249ZGIuY29sbGVjdGlvbignbWVldHVwcycpIFxuICBcbiAgY29uc3QgbWVldHVwcz0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSx7X2lkOjF9KS50b0FycmF5KCk7IFxuICBjbGllbnQuY2xvc2UoKSBcbiAgcmV0dXJuIHsgXG4gICAgZmFsbGJhY2s6ZmFsc2UsIC8vIGFsbG93cyB0byBwcmUtZ2VuZXJhdGUgcGFnZXMgLlxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcChtZWV0dXA9Pih7XG4gICAgICBwYXJhbXM6e21lZXR1cElkOm1lZXR1cC5faWQudG9TdHJpbmcoKX0sXG4gICAgfSkpXG4gICAgXG4gIH1cbn0gXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7IFxuICAvL2ZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cCBcbiBjb25zdCBtZWV0dXBJZD1jb250ZXh0LnBhcmFtcy5tZWV0dXBJZDsvLyB5b3UgY2FuIGFjY2VzcyB0aGUgbWVldHVwSWQgdXNlIGNvbnRleHQucGFyYW1zICBcblxuIGNvbnNvbGUubG9nKG1lZXR1cElkKTsgXG4gY29uc3QgY2xpZW50PSBhd2FpdCAgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9zYWlrZW46bHZPSldjU3JDZXJ3T1hDb0BjbHVzdGVyMC4yZmd3ci5tb25nb2RiLm5ldC9NZWV0dXA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XG4gIGNvbnN0IGRiPWNsaWVudC5kYigpOyBcblxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbj1kYi5jb2xsZWN0aW9uKCdtZWV0dXBzJykgXG4gIFxuICBjb25zdCBzZWxlY3RlZE1lZXR1cD0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7X2lkOk9iamVjdElkKG1lZXR1cElkKX0pIC8vZmluZHMgb25lIHNlbGVjdGVkIG1lZXR1cCAgXG4gIFxuICBjbGllbnQuY2xvc2UoKVxuIFxuICByZXR1cm4geyBcbiAgICBwcm9wczp7IFxuICAgICBtZWV0dXBEYXRhOntcbiAgICAgICBpZDpzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSwgIC8vIGNvbnZlcnQgdGhpcyB0byBhIHN0cmluZyBcbiAgICAgICB0aXRsZTpzZWxlY3RlZE1lZXR1cC50aXRsZSwgXG4gICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcywgXG4gICAgICAgaW1hZ2U6c2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXG4gICAgICAgZGVzY3JpcHRpb246c2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24gXG4gICAgIH1cbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsczsgXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

});