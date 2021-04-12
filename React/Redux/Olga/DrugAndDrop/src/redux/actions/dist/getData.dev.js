"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = exports.apiData = void 0;

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

var getData = function getData(data) {
  return function (dispatch) {
    fetch('https://rickandmortyapi.com/api/character/').then(function (r) {
      return r.json();
    }).then(function (data) {
      var newData = data.results;
      console.log(newData); //   let names = newData.map(el => el.name)
      //   let id = newData.map(el => el.id)
      //   console.log(names)
      //   console.log(id)

      dispatch(apiData(newData));
    });
  };
};

exports.getData = getData;