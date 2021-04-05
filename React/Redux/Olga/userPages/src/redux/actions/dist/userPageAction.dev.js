"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPage = void 0;
var idCounter = 0;

var userPage = function userPage(userId, userName, urlImage, urlPhoto) {
  return {
    type: "ADD_PHOTO",
    payload: {
      userId: userId,
      userName: userName,
      urlImage: urlImage,
      photoId: ++idCounter,
      urlPhoto: urlPhoto
    }
  };
};

exports.userPage = userPage;