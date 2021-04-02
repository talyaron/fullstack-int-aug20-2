"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _index = _interopRequireDefault(require("./reducers/index"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var composedEnhancer = (0, _reduxDevtoolsExtension.composeWithDevTools)();
var store = (0, _redux.createStore)(_index["default"], composedEnhancer);
var _default = store;
exports["default"] = _default;