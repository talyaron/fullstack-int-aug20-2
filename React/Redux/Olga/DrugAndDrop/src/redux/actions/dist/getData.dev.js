"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = exports.addToTarget = exports.deleteFromData = exports.getId = exports.apiData = void 0;

// let idCounter = 0;
// export const addTodo = taskName=>({
//     type:"ADD_TASK",
//     payload:{
//         id: ++idCounter,
//         taskName
//     }
// })
var apiData = function apiData(data) {
  return {
    type: 'GET_NAMES',
    payload: data
  };
};

exports.apiData = apiData;

var getId = function getId(id) {
  return {
    type: 'GET_ID',
    payload: {
      id: id
    }
  };
};

exports.getId = getId;

var deleteFromData = function deleteFromData() {
  return {
    type: 'DELETE_ITEM'
  };
};

exports.deleteFromData = deleteFromData;

var addToTarget = function addToTarget(target) {
  return {
    type: 'ADD_TO_TARGET',
    payload: target
  };
};

exports.addToTarget = addToTarget;

var getData = function getData(data) {
  return function (dispatch) {
    fetch('https://rickandmortyapi.com/api/character/').then(function (r) {
      return r.json();
    }).then(function (data) {
      var newData = data.results;
      console.log(newData);
      dispatch(apiData(newData));
    });
  };
};

exports.getData = getData;