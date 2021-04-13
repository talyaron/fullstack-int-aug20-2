import { combineReducers } from "redux";
import wordsReducer from "./wordsReducer";

const rootReducer = combineReducers({
   wordsReducer,
});

export default rootReducer;
