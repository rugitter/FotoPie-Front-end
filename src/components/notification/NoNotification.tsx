import { Box, Button, Paper, styled } from "@mui/material";
import Item from "./Notification.style";

const NoNotification = () => {
  return (
    //tips when no unread notifications
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Item sx={{ width: "60%", mt: "5%" }}>
        <h1>No new notifications found</h1>
        <p>Please check back later</p>
        <Button
          variant="outlined"
          sx={{ bgcolor: "white", marginTop: "2%" }}
          href={"/upload"}
        >
          Upload Photos
        </Button>
      </Item>
    </Box>
  );
};

export default NoNotification;
