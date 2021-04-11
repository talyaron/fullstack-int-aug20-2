"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boardPokemons = void 0;

var boardPokemons = function boardPokemons(name, url) {
  return {
    type: "GET_POKEMONS",
    payload: {
      name: name,
      url: url
    }
  };
};

exports.boardPokemons = boardPokemons;