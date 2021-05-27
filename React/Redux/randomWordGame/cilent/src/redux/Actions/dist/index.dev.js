"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWords = fetchWords;

var types = _interopRequireWildcard(require("../constants/action-types"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* export function addWord(payload) {
  return { type: types.ADD_WORD, payload };
}

 */
var fetchWordsStart = function fetchWordsStart() {
  return {
    type: types.FETCH_WORD_START
  };
};

var fetchWordsSuccess = function fetchWordsSuccess(words) {
  return {
    type: types.FETCH_WORD_SUCCESS,
    payload: words
  };
};

var fetchWordsFail = function fetchWordsFail(error) {
  return {
    type: types.FETCH_WORD_FAIL,
    payload: error
  };
};

function fetchWords() {
  return function (dispatch) {
    dispatch(fetchWordsStart());

    _axios["default"].get("https://random-word-api.herokuapp.com//word?number=10").then(function (response) {
      // const words = response.data;
      dispatch(fetchWordsSuccess(response.data));
    })["catch"](function (error) {
      return dispatch(fetchWordsFail(error.message));
    });
  };
}
/* const  getData = async () => {
  const response = await fetch("https://random-word-api.herokuapp.com//word?number=10");
  const json = await response.json();
  return { type: "DATA_LOADED", payload: json };
} */