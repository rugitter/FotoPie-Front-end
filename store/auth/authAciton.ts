import { IFormInput } from "./../../pages/login";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, logoutRequest } from "../../src/axiosRequest/api/auth";

import {
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken,
} from "../../src/utils/token";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: IFormInput, { rejectWithValue }) => {
    try {
      const response = await loginRequest(payload);
      setAccessToken(response.data.access_token);
      setRefreshToken(response.data.refresh_token);
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
  async (_, { rejectWithValue }) => {
    try {
      await logoutRequest();
      removeAccessToken();
      removeRefreshToken();
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);
