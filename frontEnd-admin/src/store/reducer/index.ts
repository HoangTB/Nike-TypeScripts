import { combineReducers } from "redux";
import LoginSlice from "../slice/LoginSlice";

const rootReducer = combineReducers({
  login: LoginSlice,
});

export default rootReducer;
