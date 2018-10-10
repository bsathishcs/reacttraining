import { combineReducers } from "redux";
import userReducer from "./userReducer";
import CounterReducer from "./ConterReducer";

const combineAllReducer = combineReducers({
  user: userReducer,
  count: CounterReducer
});

export default combineAllReducer;
