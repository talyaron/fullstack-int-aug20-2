"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chackNorrisJoke = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var chackNorrisJoke = function chackNorrisJoke() {
  return new Promise(function (resolve, reject) {
    _axios["default"].get('https://api.chucknorris.io/jokes/random').then(function (_ref) {
      var data = _ref.data;
      resolve(data);
    })["catch"](function (e) {
      return reject(e);
    });
  });
};

exports.chackNorrisJoke = chackNorrisJoke;