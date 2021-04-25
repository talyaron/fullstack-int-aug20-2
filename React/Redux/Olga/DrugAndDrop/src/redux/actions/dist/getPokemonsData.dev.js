"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPokemonsData = exports.pokemonsData = void 0;

// let idCounter = 0;
// export const addTodo = taskName=>({
//     type:"ADD_TASK",
//     payload:{
//         id: ++idCounter,
//         taskName
//     }
// })
var pokemonsData = function pokemonsData(data) {
  return {
    type: 'GET_WORDS',
    payload: data
  };
};

exports.pokemonsData = pokemonsData;

var getPokemonsData = function getPokemonsData(data) {
  return function (dispatch) {
    fetch('https://rickandmortyapi.com/api/character/').then(function (r) {
      return r.json();
    }).then(function (data) {
      console.log(data.results);
      dispatch(pokemonsData(data.results));
    });
  };
};

exports.getPokemonsData = getPokemonsData;