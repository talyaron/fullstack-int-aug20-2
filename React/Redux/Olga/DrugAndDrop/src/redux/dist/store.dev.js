"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./reducers"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {composeWithDevTools} from 'redux-devtools-extension'
var _default = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));

exports["default"] = _default;