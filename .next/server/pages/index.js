(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(459);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);



function Card(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (Card);

/***/ }),

/***/ 76:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(548);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(422);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(957);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js






function MeetupItem(props) {
  const router = (0,router_.useRouter)();

  function showDetailsHandler() {
    // navigate programmatically 
    router.push('/' + props.id); // adds props.id from meetuplist
  }

  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: (MeetupItem_module_default()).item,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).image,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: props.image,
          alt: props.title
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MeetupItem_module_default()).content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: props.title
        }), /*#__PURE__*/jsx_runtime_.jsx("address", {
          children: props.address
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).actions,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        })
      })]
    })
  });
}

/* harmony default export */ var meetups_MeetupItem = (MeetupItem);
// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(982);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js




function MeetupList(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: (MeetupList_module_default()).list,
    children: props.meetups.map(meetup => /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupItem, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id))
  });
}

/* harmony default export */ var meetups_MeetupList = (MeetupList);
;// CONCATENATED MODULE: ./pages/index.js





 // // const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: " A first Meetup",
//     image:
//       "https://www.fcbarcelona.com/photo-resources/2022/05/04/ef85145d-c714-468f-a6ae-814b676805fd/3200x2000-noticia-horaris-memphis-betis-EN.jpg?width=1200&height=750",
//     address: " Somecity in some state Barcelona ",
//     description: " This is our first visit",
//   },
//   {
//     id: "m2",
//     title: " A second Meetup",
//     image:
//       "https://www.fcbarcelona.com/photo-resources/2022/05/04/ef85145d-c714-468f-a6ae-814b676805fd/3200x2000-noticia-horaris-memphis-betis-EN.jpg?width=1200&height=750",
//     address: " Somecity in some state Barcelona ",
//     description: " This is our second visit",
//   },
// ];
// //pass down props argument

function HomePage(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: " React Meetups"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Browse a huge list of highly active React Meetups "
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupList, {
      meetups: props.meetups
    })]
  }); // import component MeetupList and pass DUMYMY Meetyupos
} // export async function getServerSideProps(context){
//   const req=context.req;
//   const res=context.res;
//   // will run on the server on every incomking request
//   return {
//     props:{
//       meetups:DUMMY_MEETUPS
//     }
//   };
// }


async function getStaticProps() {
  // const data=req.body; // obtain data from request bodyu
  const client = await external_mongodb_.MongoClient.connect("mongodb+srv://saiken:lvOJWcSrCerwOXCo@cluster0.2fgwr.mongodb.net/Meetup?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray(); // find documents and convert it to an array

  client.close(); //fetch data from an API

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1 // regenerates the page every couple of seconds on the server

  };
} // calls this function before the component and is executed in the server

/* harmony default export */ var pages = (HomePage);

/***/ }),

/***/ 957:
/***/ (function(module) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ 982:
/***/ (function(module) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ 459:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ 548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__(76));
module.exports = __webpack_exports__;

})();