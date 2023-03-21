import { combineReducers } from "redux";

import counter from "./counter/counterSlice";
import auth from "./auth/authSlice";
import quickView from "./photoQuickView/quickViewSlice";

const reducers = combineReducers({
  counter,
  auth,
  quickView,
});

export default reducers;
