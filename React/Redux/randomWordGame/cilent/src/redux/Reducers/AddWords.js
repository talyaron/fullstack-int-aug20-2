import * as types from "../constants/action-types";
const initialState = {
  words: [],
  loading: false,
  error: null,
};
const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WORD_START:
      return { ...state, loading: true, };
    case types.FETCH_WORD_SUCCESS:
      return { ...state, loading: false, words: action.payload, };
    case types.FETCH_WORD_FAIL:
      return { ...state,loading: false, error: action.payload, };
    default:
      return state;
  }
};

export default wordsReducer;
