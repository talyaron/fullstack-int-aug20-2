"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _Users = _interopRequireDefault(require("./Users"));

var _Images = _interopRequireDefault(require("./Images"));

var _Comments = _interopRequireDefault(require("./Comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  Users: _Users["default"],
  Images: _Images["default"],
  Comments: _Comments["default"]
});

exports["default"] = _default;