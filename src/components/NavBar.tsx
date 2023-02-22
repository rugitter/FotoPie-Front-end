import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button"
import Link from "../utils/Link";
import Image from "mui-image"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react'




export default function Navbar() {

  const [ fix, setFix ] = useState(false);

  const setFixed =() => {
    if (window.scrollY >= 250) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", setFixed)
  }
  

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
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

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Collections</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>

    </Menu>
  );


  return (
    <Box 
      sx={{ flexGrow: 1 }}
 
    >
      <AppBar 
        position="fixed"
        color='transparent'
        elevation={0}
        z-index={0}
      >
        <Toolbar>
          {/* Logo  */}
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            <Image src="/logo.png" 
              alt="Fotopie_Logo"
              width={30}
              height={30}
            />
          </Link>
     
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{ fontSize: 24 }}
            >
              {"FotoPie"}         
            </Link>
          
          </Typography>

          {/* notifications */}
          <IconButton
              size="large"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
          </IconButton>

          {/* User Profile */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            >
            <AccountCircle />
          </IconButton>

          {/* Upload */}
          <Button 
            variant="contained" 
            component="label"
            sx={{
              bgcolor: fix ? "primary.main" : "gray",
            }}
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          
          {/* Log In  */}
          <Button 
            variant="contained" 
            color="success"
            href="login"
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
