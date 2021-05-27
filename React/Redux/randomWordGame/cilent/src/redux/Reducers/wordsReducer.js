import * as types from "../constants/action-types";
const initialState = {
  words: [],
  loading: false,
  error: null,
  listWords: []
};
const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WORD_START:
      return { ...state, loading: true };
    case types.FETCH_WORD_SUCCESS:
      return { ...state, loading: false, words: action.payload, };
    case types.FETCH_WORD_FAIL:
      return { ...state, loading: false, error: action.payload, };
    case types.ADD_WORD:
      let newWords = state.words.filter(word=>word !== action.payload)
      return { ...state, listWords: [...state.listWords, action.payload],words:newWords }
    case types.REMOVE_WORD:
      let newListWords = state.listWords.filter(word=>word !== action.payload)
      return { ...state, listWords:newListWords, words:[...state.words, action.payload] }
    default:
      return state;
  }
};

export default wordsReducer;
