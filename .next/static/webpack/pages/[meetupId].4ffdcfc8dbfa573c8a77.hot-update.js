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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/saikenho/Downloads/React Projects/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js\";\n//own-domain/[meetupId]\n\n\n\n\nfunction MeetupDetails(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: props.meetupData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 12\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: props.meetupData.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 12\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__.default, {\n      image: props.meetupData.image,\n      title: props.meetupData.title,\n      address: props.meetupData.address,\n      description: props.meetupData.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }, this);\n}\n\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetupDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz85MmE2Il0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQTZCO0FBQ3pCLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRztBQUFBLGtCQUFRQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUVHO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLHFFQUFEO0FBQ0YsV0FBSyxFQUFFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJHLEtBRHRCO0FBRUYsV0FBSyxFQUFFSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBRnRCO0FBR0YsYUFBTyxFQUFHRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJJLE9BSHpCO0FBSUYsaUJBQVcsRUFBRUwsS0FBSyxDQUFDQyxVQUFOLENBQWlCRTtBQUo1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlSDs7S0FoQlFKLGE7O0FBNERULCtEQUFlQSxhQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vb3duLWRvbWFpbi9bbWVldHVwSWRdXG5pbXBvcnQgeyBNb25nb0NsaWVudCAsT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpeyBcbiAgICByZXR1cm4oIFxuICAgICAgPEZyYWdtZW50PiBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0+PC9tZXRhPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxNZWV0dXBEZXRhaWxcbiAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxuICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XG4gICAgICBhZGRyZXNzPSB7cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxuICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCl7IFxuICBjb25zdCBjbGllbnQ9IGF3YWl0ICBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3NhaWtlbjpsdk9KV2NTckNlcndPWENvQGNsdXN0ZXIwLjJmZ3dyLm1vbmdvZGIubmV0L01lZXR1cD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiAgY29uc3QgZGI9Y2xpZW50LmRiKCk7IFxuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uPWRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKSBcbiAgXG4gIGNvbnN0IG1lZXR1cHM9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30se19pZDoxfSkudG9BcnJheSgpOyBcbiAgY2xpZW50LmNsb3NlKCkgXG4gIHJldHVybiB7IFxuICAgIGZhbGxiYWNrOmZhbHNlLCAvLyBhbGxvd3MgdG8gcHJlLWdlbmVyYXRlIHBhZ2VzIC5cbiAgICBwYXRoczogbWVldHVwcy5tYXAobWVldHVwPT4oe1xuICAgICAgcGFyYW1zOnttZWV0dXBJZDptZWV0dXAuX2lkLnRvU3RyaW5nKCl9LFxuICAgIH0pKVxuICAgIFxuICB9XG59IFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpeyBcbiAgLy9mZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXAgXG4gY29uc3QgbWVldHVwSWQ9Y29udGV4dC5wYXJhbXMubWVldHVwSWQ7Ly8geW91IGNhbiBhY2Nlc3MgdGhlIG1lZXR1cElkIHVzZSBjb250ZXh0LnBhcmFtcyAgXG5cbiBjb25zb2xlLmxvZyhtZWV0dXBJZCk7IFxuIGNvbnN0IGNsaWVudD0gYXdhaXQgIE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vc2Fpa2VuOmx2T0pXY1NyQ2Vyd09YQ29AY2x1c3RlcjAuMmZnd3IubW9uZ29kYi5uZXQvTWVldHVwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuICBjb25zdCBkYj1jbGllbnQuZGIoKTsgXG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb249ZGIuY29sbGVjdGlvbignbWVldHVwcycpIFxuICBcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe19pZDpPYmplY3RJZChtZWV0dXBJZCl9KSAvL2ZpbmRzIG9uZSBzZWxlY3RlZCBtZWV0dXAgIFxuICBcbiAgY2xpZW50LmNsb3NlKClcbiBcbiAgcmV0dXJuIHsgXG4gICAgcHJvcHM6eyBcbiAgICAgbWVldHVwRGF0YTp7XG4gICAgICAgaWQ6c2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksICAvLyBjb252ZXJ0IHRoaXMgdG8gYSBzdHJpbmcgXG4gICAgICAgdGl0bGU6c2VsZWN0ZWRNZWV0dXAudGl0bGUsIFxuICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsIFxuICAgICAgIGltYWdlOnNlbGVjdGVkTWVldHVwLmltYWdlLFxuICAgICAgIGRlc2NyaXB0aW9uOnNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uIFxuICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7IFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

});