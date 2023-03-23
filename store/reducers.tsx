import { combineReducers } from "redux";

import counter from "./counter/counterSlice";
import auth from "./auth/authSlice";
import notifySlice from "./notification/notifySlice";

const reducers = combineReducers({
  counter,
  auth,
  notifySlice
});

export default reducers;
