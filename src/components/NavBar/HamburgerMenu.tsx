import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "../../utils/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import LoginIcon from "@mui/icons-material/Login";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { getMe } from "../../axiosRequest/api/editUser";
import { count } from "../../axiosRequest/api/notification"
import { logout } from "../../../store/auth/authAciton";

interface Props {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function hamburgerMenu (props:Props) {

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [avatarPath, setAvatarPath] = useState("");
  const [newNotificationCount, setNewNotificationCount] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      getMe().then((res) => {
        setAvatarPath(res.data["avatarPath"]);
      });
      
      count().then((res) => {
        setNewNotificationCount(res.data.count);
      });
    }
  }, []);
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    {isAuthenticated ? (
      <Box>
        <MenuItem>
          <IconButton href="/upload" size="large" color="inherit" onClick={() => setNewNotificationCount(0)}>
            <Badge badgeContent={newNotificationCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem>
          <Avatar
            alt="Avatar"
            src={avatarPath}
            onClick={handleProfileMenuOpen}
            sx={{ width: 40, height: 40, marginRight: 1 }}
          />
          <p>Profile</p>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <UploadIcon />
          </IconButton>
          <p>Upload</p>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <IconButton size="large" color="inherit">
            <LogoutOutlinedIcon />
          </IconButton>
          <p>Log Out</p>
        </MenuItem>
      </Box>
    ) : (
      <MenuItem>
        <IconButton size="large" color="inherit">
          <LoginIcon />
        </IconButton>
        <Link href="/login" style={{ textDecoration: "none" }}>
          Log In
        </Link>
      </MenuItem>
    )}
    </Menu>
  );
}



