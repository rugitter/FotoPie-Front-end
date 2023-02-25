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
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import UploadIcon from '@mui/icons-material/Upload';
import LoginIcon from '@mui/icons-material/Login'


export default function Navbar() {


  const [ fix, setFix ] = useState(false);

  const setFixed =() => {
    if (window.scrollY >= 410) {
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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        > 
          <UploadIcon />
        </IconButton>
        <p>Upload</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        > 
          <LoginIcon />
        </IconButton>
        <p>Log In</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box 
      sx={{ flexGrow: 1}}
    >
      <AppBar 
        color='transparent'
        elevation={0}
        sx={{
          position: fix? "fixed" : "relative",
          bgcolor: fix? '#B0C4DE' : '',
        }}
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
            <Image src="/logo2.jpg" 
              style={{ borderRadius:10}}
              alt="Fotopie_Logo"
              width={50}
              height={50}
            />
          </Link>
     
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:2}}>
            
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

        <Box sx={{ flexGrow: 1 }} >
         </Box>
          <Box 
            sx={{
              display: { xs: 'none', md: 'flex'},
              flexGrow: 0.05,
              justifyContent: 'space-between'
              
            }}
          >
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
              href='upload'
              sx={{
                bgcolor: fix ? "primary.main" : "gray",
              }}
            >
              {/* <UploadIcon /> */}
              Upload
            </Button>
            
            {/* Log In  */}
            <Button 
              variant="contained" 
              color="success"
              href="login"
              sx={{
                bgcolor: fix ? "#3CB371" : "white",
              }}
            >
              Log In
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
