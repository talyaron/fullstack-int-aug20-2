"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSymbol = void 0;

// let idCounter = 0;
// export const addTodo = taskName=>({
//     type:"ADD_TASK",
//     payload:{
//         id: ++idCounter,
//         taskName
//     }
// })
// export const deleteTodo = id => ({
//     type: 'DELETE_TASK',
//     payload: {id}
// })
var addSymbol = function addSymbol(symbol) {
  return {
    type: 'ADD_SYMBOL',
    payload: symbol
  };
};

exports.addSymbol = addSymbol;