"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodo = exports.addTodo = void 0;
var idCounter = 0;

var addTodo = function addTodo(taskName) {
  return {
    type: "ADD_TASK",
    payload: {
      id: ++idCounter,
      taskName: taskName
    }
  };
};

exports.addTodo = addTodo;

var deleteTodo = function deleteTodo(id) {
  return {
    type: 'DELETE_TASK',
    payload: {
      id: id
    }
  };
};

exports.deleteTodo = deleteTodo;