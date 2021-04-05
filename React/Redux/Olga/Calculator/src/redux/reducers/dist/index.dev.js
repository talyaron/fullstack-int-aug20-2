"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _windowReducer = _interopRequireDefault(require("./windowReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import todoReducer from './todo';
var _default = (0, _redux.combineReducers)({
  windowReducer: _windowReducer["default"]
});

exports["default"] = _default;