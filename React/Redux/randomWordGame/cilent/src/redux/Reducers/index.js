import { combineReducers } from "redux";
import wordsReducer from "./AddWords";

const rootReducer = combineReducers({
  data: wordsReducer,
});

export default rootReducer;
