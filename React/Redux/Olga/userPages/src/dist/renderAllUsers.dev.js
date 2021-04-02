"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var RenderAllUsers = function RenderAllUsers() {
  var users = (0, _reactRedux.useSelector)(function (state) {
    return state.allUsersReducer.allUsers;
  });
  console.log(users);
  return div;
};

var _default = RenderAllUsers;
exports["default"] = _default;