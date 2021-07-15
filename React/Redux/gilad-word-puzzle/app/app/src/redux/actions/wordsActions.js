import {ADD_WORD} from './actionTypes'

export const addWord = word => ({
    type: ADD_WORD,
    payload: {
        word,
    }
})