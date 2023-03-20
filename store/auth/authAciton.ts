import { IFormInput } from "./../../pages/login";
import { removeAccessToken } from "./../../src/utils/token";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, logoutRequest } from "../../src/axiosRequest/api/auth";
import { setAccessToken } from "../../src/utils/token";
import { setLoginStatusIdle, setLogoutStatusIdle } from "./authSlice";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: IFormInput, { rejectWithValue, dispatch }) => {
    try {
      const response = await loginRequest(payload);
      setAccessToken(response.data.access_token);
      // setTimeout(() => {
      //   dispatch(setLoginStatusIdle());
      // }, 1000 * 3);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      await logoutRequest();
      removeAccessToken();
      // setTimeout(() => {
      //   dispatch(setLogoutStatusIdle());
      // }, 1000 * 3);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);
