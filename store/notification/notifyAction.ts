import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNotification, getNewNotificationCount, markNotificationRead} from "../../src/axiosRequest/api/notification";

export const fetchNotifications = createAsyncThunk(
    'notification/fetchNotifications',
    async()=>{
        const response = await getNotification();
        return response.data;
    }
)

export const getNotificationCount = createAsyncThunk(
    'notification/getNotificationCount',
    async()=>{
        const response = await getNewNotificationCount();
        return response.data;
    }
)

export const fetchNotificationStatus = createAsyncThunk(
    'notification/fetchNotificationStatus',
    async()=>{
        const response = await markNotificationRead();
        return response.data;
    }
)