"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = void 0;
var idCounter = 0;

var addUser = function addUser(UserName, urlImage) {
  return {
    type: "ADD_USER",
    payload: {
      id: ++idCounter,
      UserName: UserName,
      urlImage: urlImage
    }
  };
};

exports.addUser = addUser;