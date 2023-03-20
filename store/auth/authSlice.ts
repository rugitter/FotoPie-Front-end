import { getAccessToken } from "./../../src/utils/token";
import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./authAciton";
import { AuthState } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
  loginStatus: "idle",
  logoutStatus: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutSync: (state) => {
      state.isAuthenticated = false;
      state.logoutStatus = "success";
    },
    setLoginStatusIdle: (state) => {
      state.loginStatus = "idle";
    },
    setLogoutStatusIdle: (state) => {
      state.logoutStatus = "idle";
    },
    checkToken: (state) => {
      const accessToken = getAccessToken();
      state.isAuthenticated = !!accessToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(login.fulfilled, (state) => {
        state.loginStatus = "success";
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.payload as string;
      })
      .addCase(logout.pending, (state) => {
        state.logoutStatus = "loading";
      })
      .addCase(logout.fulfilled, (state) => {
        state.logoutStatus = "success";
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutStatus = "failed";
        state.error = action.payload as string;
      });
  },
});
export const {
  logoutSync,
  setLoginStatusIdle,
  setLogoutStatusIdle,
  checkToken,
} = authSlice.actions;

export default authSlice.reducer;
