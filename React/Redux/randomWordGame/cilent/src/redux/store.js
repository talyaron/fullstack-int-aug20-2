import { createStore ,applyMiddleware } from 'redux';
import thunk from "redux-thunk";


import rootReducer from './Reducers';
 import { composeWithDevTools } from 'redux-devtools-extension';





const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;

