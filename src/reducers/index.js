import { combineReducers } from "redux";
import { auth } from "./auth.reducer";
import { dashboard } from "./dashboard.reducer";
import { superadmin } from "./superadmin.reducer";
import { session } from "./session.reducer";
import { scenario } from "./scenario.reducer";
const rootReducer = combineReducers({
  auth,
  dashboard,
  superadmin,
  session,
  scenario,
});

export default rootReducer;
