import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary' background-color="secondary" >
        <Toolbar color='secondary' background-color="secondary">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="close"
            sx={{ mr: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="secondary">Notification</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}