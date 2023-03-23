import { combineReducers } from "redux";

import counter from "./counter/counterSlice";
import auth from "./auth/authSlice";
import quickView from "./photoQuickView/quickViewSlice";
import notifySlice from "./notification/notifySlice";

const reducers = combineReducers({
  counter,
  auth,
  quickView,
  notifySlice
});

export default reducers;
