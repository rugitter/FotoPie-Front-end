import { combineReducers } from "redux";

import counter from "./counter/counterSlice";

const reducers = combineReducers({
  counter,
});

export default reducers;


// interface AuthState {
//   isLoggedIn: boolean;
// }

// interface AuthAction {
//   type: 'LOGIN' | 'LOGOUT';
// }


// export const reducer = (state: AuthState, action: AuthAction): AuthState => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { isLoggedIn: true };
//     case 'LOGOUT':
//       return { isLoggedIn: false };
//     default:
//       return state;
//   }
// };


// interface State {
//   // Define the types of properties in your state
//   currentUser: string;
// }

// interface Action {
//   // Define the types of properties in your action
//   type: 'UPDATE_USER';
//   payload: string;
// }

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'UPDATE_USER':
//       // Here you use a spread operator to merge the old state with the new one
//       return {...state, currentUser: action.payload};
//     default:
//       throw new Error('No matched action!');
//   }
// };

// export default reducer;




