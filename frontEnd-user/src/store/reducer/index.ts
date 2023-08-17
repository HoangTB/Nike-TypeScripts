import { combineReducers } from "redux";
import LoginRegister from "../slice/LoginRegisterSlice";
import UpdateProSlice from "../slice/UpdateProSlice";
import SideBarSlice from "../slice/GetProductSlice";
const rootReducer = combineReducers({
  user: LoginRegister,
  update: UpdateProSlice,
  sidebar: SideBarSlice,
});

export default rootReducer;
