"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addComment = void 0;

var addComment = function addComment(imgId, userId, Comment) {
  return {
    type: "ADD_Comment",
    payload: {
      imgId: imgId,
      userId: userId,
      Comment: Comment
    }
  };
};

exports.addComment = addComment;