(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./components/layout/MainNavigation.module.css
var MainNavigation_module = __webpack_require__(990);
var MainNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MainNavigation_module);
;// CONCATENATED MODULE: external "next/Link"
var Link_namespaceObject = require("next/Link");;
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
;// CONCATENATED MODULE: ./components/layout/MainNavigation.js





function MainNavigation() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (MainNavigation_module_default()).header,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MainNavigation_module_default()).logo,
      children: "React Meetups"
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "/",
            children: "All Meetups"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "/new-meetup",
            children: "Add New Meetup"
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var layout_MainNavigation = (MainNavigation);
// EXTERNAL MODULE: ./components/layout/Layout.module.css
var Layout_module = __webpack_require__(365);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/layout/Layout.js





function Layout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_MainNavigation, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: (Layout_module_default()).main,
      children: props.children
    })]
  });
}

/* harmony default export */ var layout_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //root component 

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_Layout, {
    children: [" ", /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 365:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "Layout_main__2Mwq5"
};


/***/ }),

/***/ 990:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "MainNavigation_header__t8YPG",
	"logo": "MainNavigation_logo__Qwpy5",
	"active": "MainNavigation_active__sxu85"
};


/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(421));
module.exports = __webpack_exports__;

})();