import { Avatar, Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Notification } from "../../../store/notification/types";
import Item from "./Notification.style";
import { PhotoQuickViewStyles } from "../PhotoQuickView/PhotoQuickView.style";
import PhotoQuickView from "../PhotoQuickView/PhotoQuickView";
import { useRouter } from "next/router";
import Image from "mui-image";

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
    <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "secondary",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: { xs: 1, md: 3 },
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            fontWeight: 700,
          }}
        >
          My Notification
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
                      height: { xs: 50, md: 100 },
                      color: "primary",
                      margin: "5px",
                      p: 2,
                      // pt: { xs: -2, md: 2 },
                      // pb: { xs: -2, md: 2 },
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
                        sx={{
                          width: { xs: 30, md: 70 },
                          height: { xs: 30, md: 70 },
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.5rem", md: "1.2rem" },
                        width: { xs: "9rem", md: "15rem" },
                      }}
                    >
                      {notification.userName} Liked Your Post
                    </Typography>
                    <img
                      alt="image"
                      src={notification.post}
                      style={{
                        objectFit: "contain",
                        width: "5rem",
                      }}
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
          sx={{
            fontSize: { xs: "0.5rem", md: "1rem" },
            borderRadius: "10px",
            p: { xs: 1.2, md: 1.5 },
            pr: { xs: 1.7, md: 2 },
            pl: { xs: 1.7, md: 2 },
          }}
        >
          Homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default NotificationList;
