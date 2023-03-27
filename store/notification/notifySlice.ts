import { createSlice } from "@reduxjs/toolkit"
import { fetchNotifications, getNotificationCount, fetchNotificationStatus } from "./notifyAction"
import { NotificationState } from "./types";

const initialState: NotificationState={
    notifications:[],
    notificationCount: 0,
    notificationStatus: false, 
    status:'idle',
    error: null,

}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //fetchNotifications
            .addCase(fetchNotifications.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNotifications.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.notifications = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state, action)=>{
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            })


            //getNotificationCount
            .addCase(getNotificationCount.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getNotificationCount.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.notificationCount = action.payload.count;
            })
            .addCase(getNotificationCount.rejected, (state, action)=>{
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            })


            //fetchNotificationStatus
            .addCase(fetchNotificationStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNotificationStatus.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.notificationStatus = action.payload.status;
            })
            .addCase(fetchNotificationStatus.rejected, (state, action)=>{
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            })
    }
})

export default notificationSlice.reducer