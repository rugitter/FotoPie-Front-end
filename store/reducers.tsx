import { combineReducers } from "redux";

import counter from "./counter/counterSlice";
import auth from "./auth/authSlice";

const reducers = combineReducers({
  counter,
  auth,
});

export default reducers;
