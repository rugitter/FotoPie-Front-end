import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getLikeNumber,
  getCollectNumber,
} from "../../src/axiosRequest/api/photoQuickView";

export const updateCollect = createAsyncThunk(
  "photoQuickView/updateCollect",
  async (filenameString: string, { rejectWithValue }) => {
    console.log("filenameString:", filenameString);

    try {
      const response = await getCollectNumber(filenameString);
      // const response = await getCollectNumber(
      // "ee901d26-a908-4fe0-ae18-2e6ff5e114c9.jpeg"
      // );
      return response.data;
      console.log("getCollectNumber response:", response);
      // return { payload: response.data };
    } catch (error: any) {
      console.log("updateCollect error:", error);
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

// export const download = createAsyncThunk(
//   "auth/logout",
//   async (payload, { rejectWithValue }) => {
//     try {
//       await logoutRequest();
//       removeAccessToken();
//     } catch (error: any) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue("Something went wrong");
//       }
//     }
//   }
// );
