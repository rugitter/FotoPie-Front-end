import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Turn off the check for actions and state to be serializable, since redux-persist uses some non-serializable values.
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
