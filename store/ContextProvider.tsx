
import { createContext, useContext, useReducer, ReactNode } from 'react';
// import reducer from './reducers';

interface State {
  currentUser: string | null;
}

interface ContextValue {
  // state: State;
  dispatch: React.Dispatch<Action>;
}

interface Props {
  children: ReactNode;
}

interface Action {
  type: 'UPDATE_USER';
  payload: string;
}

const initialState: State = {
  currentUser: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {...state, currentUser: action.payload};
    default:
      throw new Error('No matched action!');
  }
};


// creates a new context object that can store values of type ContextValue or null, and initializes it with a default value of null.
const Context = createContext<ContextValue | null>(null);


export const useValue = () => {
  return useContext(Context);
};



const ContextProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = { state, dispatch };
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;



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


// const AuthContext = createContext<{
//   authState: AuthState;
//   authDispatch: React.Dispatch<AuthAction>;
// }>({
//   authState: { isLoggedIn: false },
//   authDispatch: () => null,
// });

// export const useAuth = () => useContext(AuthContext);


// const authReducer = (state: AuthState, action: AuthAction): AuthState => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { isLoggedIn: true };
//     case 'LOGOUT':
//       return { isLoggedIn: false };
//     default:
//       return state;
//   }
// };

// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [authState, authDispatch] = useReducer(authReducer, { isLoggedIn: false });

//   return (
//     <AuthContext.Provider value={{ authState, authDispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider
