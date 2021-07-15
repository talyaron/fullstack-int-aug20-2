import { findAllInRenderedTree } from 'react-dom/test-utils';
import { ADD_USER } from './actionTypes';
import { EDIT_USER } from './actionTypes';

const initialState = { users: [] }

const wordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD: {
            console.log(ADD_WORD)
            return { ...state, words: [...state.words, action.payload] }
        }
  
        default: {
            return state
        }
    }
}

export default wordsReducer