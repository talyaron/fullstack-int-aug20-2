import {combineReducers} from 'redux';
import allUsersReducer from './allUsersReducer';
import allUserPhotoReducer from './userPageReducer ';

export default combineReducers({allUsersReducer, allUserPhotoReducer})