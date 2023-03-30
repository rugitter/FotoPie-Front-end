import { Avatar, Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Notification } from "../../../store/notification/types";
import Item from "./Notification.style";
import { PhotoQuickViewStyles } from "../PhotoQuickView/PhotoQuickView.style";
import PhotoQuickView from "../PhotoQuickView/PhotoQuickView";
import { useRouter } from "next/router";

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
  //homepage button

  const handleClick = () => {
    router.push("/");
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
        <Typography sx={{ mt: "0.5%", mb: "-3%" }}>
          <h2>My Notification</h2>
        </Typography>
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
            border: "1px solid #EAE6FF",
            backgroundColor: "#EAE6FF",
            borderRadius: "20px",
            pt: "10px",
            pb: "10px",
          }}
        >
          {/* to get notification mapped into Stack  */}
          {notifications.map((notification) => (
            <>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={PhotoQuickViewStyles}>
                  <PhotoQuickView filename={selectedFilename} router={router} />
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
                      width: "80%",
                      maxWidth: "90%",
                      color: "primary",
                      margin: "5px",
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "primary",
                      }}
                    >
                      <Avatar
                        alt="avatar"
                        src={notification.userAvatar}
                        sx={{ width: 70, height: 70 }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "1.2rem" }}>
                      {notification.userName} Liked Your Post
                    </Typography>
                    <img
                      alt="image"
                      src={notification.post}
                      width={70}
                      height={65}
                    />
                  </Item>
                </Box>
              </div>
            </>
          ))}
        </Box>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ fontSize: "1rem", borderRadius: "10px", p: 1.5, pr: 2, pl: 2 }}
        >
          Homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default NotificationList;
