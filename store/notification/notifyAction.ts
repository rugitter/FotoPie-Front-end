import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getNotification,
  getNotificationCountRequest,
  markNotificationReadRequest,
} from "../../src/axiosRequest/api/notification";

export const fetchNotifications = createAsyncThunk(
  "notification/fetchNotifications",
  async () => {
    const response = await getNotification();
    return response.data;
  }
);

export const getNotificationCountAction = createAsyncThunk(
  "notification/getNotificationCount",
  async () => {
    const response = await getNotificationCountRequest();
    return response.data;
  }
);

export const markNotificationReadAction = createAsyncThunk(
  "notification/fetchNotificationStatus",
  async () => {
    const response = await markNotificationReadRequest();
    return response.data;
  }
);
