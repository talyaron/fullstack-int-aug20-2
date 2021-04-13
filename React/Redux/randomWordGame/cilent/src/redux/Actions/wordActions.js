import * as types from "../constants/action-types";
import axios from "axios";


export function addWord(word) {
  return {
    type: types.ADD_WORD,
    payload: word
  };
}

export function removeWord(word) {
  return {
    type: types.REMOVE_WORD,
    payload: word
  };
}



const fetchWordsStart = () => ({
  type: types.FETCH_WORD_START,
});

const fetchWordsSuccess = (words) => ({
  type: types.FETCH_WORD_SUCCESS,
  payload: words,
});

const fetchWordsFail = (error) => ({
  type: types.FETCH_WORD_FAIL,
  payload: error,
});

export function fetchWords() {
  return function (dispatch) {
    dispatch(fetchWordsStart());
    axios
      .get("https://random-word-api.herokuapp.com//word?number=10")
      .then((response) => {
        // const words = response.data;

        dispatch(fetchWordsSuccess(response.data));
      }).catch((error) =>
        dispatch(fetchWordsFail(error.message)))
  };
}


/* const  getData = async () => {
  const response = await fetch("https://random-word-api.herokuapp.com//word?number=10");
  const json = await response.json();
  return { type: "DATA_LOADED", payload: json };
} */