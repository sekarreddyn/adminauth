import { combineReducers } from "redux";
import { auth } from "./auth.reducer";
import { dashboard } from "./dashboard.reducer";
import { superadmin } from "./superadmin.reducer";
const rootReducer = combineReducers({
  auth,
  dashboard,
  superadmin,
});

export default rootReducer;
