import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "../../utils/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { getMe } from "../../axiosRequest/api/editUser";
import { count } from "../../axiosRequest/api/notification"
import HamburgerMenu from "./HamburgerMenu";
import AvatarMenu from "./AvatarMenu";

const dispatch = useDispatch<AppDispatch>();
const [avatarPath, setAvatarPath] = useState("");
const [newNotificationCount, setNewNotificationCount] = useState(0);

const [fix, setFix] = useState(false);

const setFixed = () => {
  if (window.scrollY >= 410) {
    setFix(true);
  } else {
    setFix(false);
  }
};

useEffect(() => {
  if (isFixed && typeof window !== "undefined") {
    window.addEventListener("scroll", setFixed);
  }
  return () => {
    if (isFixed && typeof window !== "undefined") {
      window.removeEventListener("scroll", setFixed);
    }
  };
}, [isFixed]);


export default function UserIcons () {
  return(
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* notifications */}
      <IconButton href="/upload" size="large" color="inherit" onClick={() => setNewNotificationCount(0)}>
        <Badge badgeContent={newNotificationCount} color="error">
          <NotificationsIcon
            sx={{
              color: fix ? "black" : color,
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        </Badge>
      </IconButton>

      {/* User Profile */}
      <Avatar
        alt="Avatar"
        src={avatarPath}
        // onClick={handleProfileMenuOpen}
        sx={{
          width: 40,
          height: 40,
          "&:hover": {
            opacity: 0.8,
          },
        }}
      />

      <Button
        variant="contained"
        sx={{
          bgcolor: fix ? "#F4DADA" : "#FBF1F1",
          "&:hover": {
            backgroundColor: "#F4DADA",
          },
        }}
      >
      <Link href="/upload" underline="none">
        Upload
      </Link>
      </Button>
     </Box>
  )
}