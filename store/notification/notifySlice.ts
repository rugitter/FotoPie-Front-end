import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNotifications,
  getNotificationCountAction,
  markNotificationReadAction,
} from "./notifyAction";
import { NotificationState } from "./types";

const initialState: NotificationState = {
  notifications: [],
  notificationCount: 0,
  isNotificationRead: false,
  getNotificationCountStatus: "idle",
  markNotificationReadStatus: "idle",
  status: "idle",
  error: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchNotifications
      .addCase(fetchNotifications.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })

      //getNotificationCount
      .addCase(getNotificationCountAction.pending, (state) => {
        state.getNotificationCountStatus = "loading";
      })
      .addCase(getNotificationCountAction.fulfilled, (state, action) => {
        state.getNotificationCountStatus = "succeeded";
        state.notificationCount = action.payload.count;
      })
      .addCase(getNotificationCountAction.rejected, (state, action) => {
        state.getNotificationCountStatus = "failed";
        state.error = action.error.message ?? "Unknown error";
      })

      //fetchNotificationStatus
      .addCase(markNotificationReadAction.pending, (state) => {
        state.markNotificationReadStatus = "loading";
      })
      .addCase(markNotificationReadAction.fulfilled, (state, action) => {
        state.markNotificationReadStatus = "succeeded";
        state.isNotificationRead = action.payload.acknowledged;
      })
      .addCase(markNotificationReadAction.rejected, (state, action) => {
        state.markNotificationReadStatus = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default notificationSlice.reducer;
