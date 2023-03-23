import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled, makeStyles } from "@mui/material/styles";
import { Avatar, CircularProgress, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import axios from "axios";
import axiosRequest from "../../utils/axiosRequest";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Image from "mui-image";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { getNotification } from "../../axiosRequest/api/notification";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "../../../store/notification/notifyAction";
import { AppDispatch, RootState } from "../../../store/store";
import Loading from "./Loading";
import NoNotification from "./NoNotification";
import NotificationList from "./NotificationList";

export default function BasicStack() {
  // const [notifications, setNotifications]= useState<Notification[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, status } = useSelector(
    (state: RootState) => state.notifySlice
  );
  const [loading, setLoading] = useState(true);

  //fetch data
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      setLoading(false);
    }
  }, [status]);

  if (status === "loading" || status === "idle") {
    return <Loading />;
  } else if (notifications.length === 0) {
    return <NoNotification />;
  } else {
    return <NotificationList notifications={notifications} />;
  }
}
