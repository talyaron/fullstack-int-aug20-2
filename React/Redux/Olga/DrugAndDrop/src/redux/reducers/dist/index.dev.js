"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _getPokemonsReducer = _interopRequireDefault(require("./getPokemonsReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  getPokemons: _getPokemonsReducer["default"]
});

exports["default"] = _default;