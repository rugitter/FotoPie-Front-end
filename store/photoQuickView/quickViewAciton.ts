import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getLikeNumber,
  getCollectNumber,
  getDownloadImage,
} from "../../src/axiosRequest/api/photoQuickView";

export const updateCollect = createAsyncThunk(
  "photoQuickView/updateCollect",
  async (
    filenameString: string | string[] | undefined,
    { rejectWithValue }
  ) => {
    try {
      const response = await getCollectNumber(filenameString);
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
  async (
    filenameString: string | string[] | undefined,
    { rejectWithValue }
  ) => {
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
// export const downloadImage = createAsyncThunk(
//   "photoQuickView/downloadImage",
//   async (
//     presignedUrl: string | string[] | undefined,
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await getDownloadImage(filenameString);
//       return response.data.presignedUrl;
//     } catch (error: any) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue("Something went wrong");
//       }
//     }
//   }
// );
