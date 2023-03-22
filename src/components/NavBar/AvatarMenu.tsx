import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { logout } from "../../../store/auth/authAciton";

export default function avatarMenu () {

  const dispatch = useDispatch<AppDispatch>();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };

  return (

    <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
    >
    {/* router.push(`profile/${id}`) */}
    <MenuItem onClick={handleMenuClose}>My Gallery</MenuItem>
    <MenuItem onClick={handleMenuClose}>My Collections</MenuItem>
    <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
    <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
}