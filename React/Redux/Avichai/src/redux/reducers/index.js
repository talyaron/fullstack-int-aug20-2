import { combineReducers } from 'redux'
import todoReducer from './todo'
import testingThunk from './testingThunk'

export default combineReducers({ todoReducer, testingThunk })