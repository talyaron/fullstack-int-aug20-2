"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOperator = exports.addNumber = void 0;

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
var addNumber = function addNumber(number) {
  return {
    type: 'ADD_NUMBER',
    payload: number
  };
};

exports.addNumber = addNumber;

var addOperator = function addOperator(operator) {
  return {
    type: 'ADD_OPERATOR',
    operator: operator
  };
};

exports.addOperator = addOperator;