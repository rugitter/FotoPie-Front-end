import {
  Avatar,
  Box,
  Modal,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../../store/notification/notifyAction";
import { AppDispatch, RootState } from "../../../store/store";
import { Notification } from "../../../store/notification/types";
import Item from "./Notification.style";
import { PhotoQuickViewStyles } from "../PhotoQuickView/PhotoQuickView.style";
import PhotoQuickView from "../PhotoQuickView/PhotoQuickView";
import router, { useRouter } from "next/router";
import Link from "next/link";

interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList = ({ notifications }: NotificationListProps) => {
  const router = useRouter();

  const [selectedFilename, setSelectedFilename] = useState<
    string | undefined
  >();

  const [open, setOpen] = useState(false);
  //open modal popup window
  const handleOpen = (filename: string) => {
    setSelectedFilename(filename);
    setOpen(true);
  };
  //close modal popup window
  const handleClose = () => {
    setOpen(false);
  };
  return (
    //Notification list
    <Box sx={{ width: "100%", marginTop: 2 }}>
      <Stack
        spacing={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "secondary",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          {/* to get notification mapped into Stack  */}
          {notifications.map((notification) => (
            // <a
            //   href={`/photo-quick-view/${notification.directFilename}`}
            //   style={{ textDecoration: "none" }}
            // >
            <>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={PhotoQuickViewStyles}>
                  <PhotoQuickView
                    filename={selectedFilename}
                    router={router}
                  />
                </Box>
              </Modal>
              <div onClick={() => handleOpen(notification.directFilename)}>
                <Box
                  key={notification.id}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: "70%",
                      color: "primary",
                      margin: "2px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flexbox",
                        flexDirection: "row",
                        alignItem: "center",
                        color: "primary",
                      }}
                    >
                      <Avatar alt="avatar" src={notification.userAvatar} />
                      <Typography>{notification.userName}</Typography>
                    </Box>
                    <Typography>Liked Your Post</Typography>
                    <img
                      alt="image"
                      src={notification.post}
                      width={50}
                      height={45}
                    />
                  </Item>
                </Box>
              </div>
            </>
            // </a>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default NotificationList;
