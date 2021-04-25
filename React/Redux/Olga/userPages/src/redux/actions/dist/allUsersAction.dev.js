"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = void 0;
var idCounter = 0;

var addUser = function addUser(userName, urlImage) {
  return {
    type: "ADD_USER",
    payload: {
      id: ++idCounter,
      userName: userName,
      urlImage: urlImage
    }
  };
};

exports.addUser = addUser;