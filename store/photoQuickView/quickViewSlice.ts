import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateCollect, updateLike } from "./quickViewAciton";

interface QuickViewState {
  userName: string;
  userAvatar: string;
  postPhoto: string;
  userCollects: number;
  userLikes: number;
  userID: string;
  collected: boolean;
  liked: boolean;
}

const initialState: QuickViewState = {
  userName: "",
  userAvatar: "",
  postPhoto: "",
  userCollects: 0,
  userLikes: 0,
  userID: "",
  collected: false,
  liked: false,
};

export const quickViewSlice = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    setQuickViewData: (state, action) => {
      // return action.payload;
      state.userName = action.payload.user_name;
      state.userAvatar = action.payload.avatar_url;
      state.postPhoto = action.payload.photo_url;
      state.userCollects = action.payload.collect_count;
      state.userLikes = action.payload.like_count;
      state.userID = action.payload.user_id;
      state.collected = action.payload.collect_status;
      state.liked = action.payload.like_status;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateCollect.fulfilled, (state, action) => {
      state.userCollects = action.payload;
      state.collected = !state.collected;
    });
    builder.addCase(updateLike.fulfilled, (state, action) => {
      state.userLikes = action.payload;
      state.liked = !state.liked;
    });
  },
});
export const { setQuickViewData } = quickViewSlice.actions;

export default quickViewSlice.reducer;
