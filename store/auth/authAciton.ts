import { IFormInput } from "./../../pages/login";
import { removeAccessToken } from "./../../src/utils/token";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, logoutRequest } from "../../src/axiosRequest/api/auth";
import { setAccessToken } from "../../src/utils/token";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: IFormInput, { rejectWithValue }) => {
    try {
      const response = await loginRequest(payload);
      setAccessToken(response.data.access_token);
      localStorage.setItem("currentUserId", response.data._id);
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
  async (payload, { rejectWithValue }) => {
    try {
      await logoutRequest();
      removeAccessToken();
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);
