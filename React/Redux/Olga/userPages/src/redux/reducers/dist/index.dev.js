"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _allUsersReducer = _interopRequireDefault(require("./allUsersReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  allUsersReducer: _allUsersReducer["default"]
});

exports["default"] = _default;