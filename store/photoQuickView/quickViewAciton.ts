import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getLikeNumber,
  getCollectNumber,
} from "../../src/axiosRequest/api/photoQuickView";

export const updateCollect = createAsyncThunk(
  "photoQuickView/updateCollect",
  async (filenameString: string, { rejectWithValue }) => {
    try {
      const response = await getCollectNumber(filenameString);
      console.log("response.data", response.data);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export const updateLike = createAsyncThunk(
  "photoQuickView/updateLike",
  async (filenameString: string, { rejectWithValue }) => {
    try {
      const response = await getLikeNumber(filenameString);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);
