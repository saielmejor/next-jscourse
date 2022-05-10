(function() {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(548);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
 //api/new-meetup 
// POST request for this API 

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // obtain data from request bodyu

    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://saiken:lvOJWcSrCerwOXCo@cluster0.2fgwr.mongodb.net/Meetup?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data); //insert new document 

    console.log(result);
    client.close();
    res.status(201).json({
      message: ' Meetup Inserted'
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(737));
module.exports = __webpack_exports__;

})();