"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomWords = exports.randomWords = void 0;

// let idCounter = 0;
// export const addTodo = taskName=>({
//     type:"ADD_TASK",
//     payload:{
//         id: ++idCounter,
//         taskName
//     }
// })
var randomWords = function randomWords(data) {
  return {
    type: 'GET_WORDS',
    payload: data
  };
};

exports.randomWords = randomWords;

var getRandomWords = function getRandomWords() {
  return function (dispatch) {
    fetch('http://jsonplaceholder.typicode.com/users').then(function (r) {
      return r.json();
    }).then(function (data) {
      return dicpatch(getWordsAction(data));
    });
  };
};

exports.getRandomWords = getRandomWords;