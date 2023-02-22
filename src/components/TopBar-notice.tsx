import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "../utils/Link";
import { Avatar, DialogTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

export default function ButtonAppNoticeBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{
          display:'flex',
          alignItems:'center'
        }}>
          <Box sx={{
          display:'flex',
          alignItems:'center',
          margin:'0',
          
        }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 1, }}
          >
            <DialogTitle
            color='red'
            />
          </IconButton> */}
          <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="#"
              sx={{ 
                fontSize: 24,
                position: 'relative',
              }}>
           <CloseIcon color="red" src=""/>
           </Link>
          <img src='FotopieIcon.png' width='10%' />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="#"
              sx={{ 
                fontSize: 40
              }}
            >
              {"Notification"}
            </Link>
          </Typography>

          <Link
            variant="h6"
            underline="none"
            href="notification"
            sx={{ ...rightLink, color: "secondary.main" }}
          >
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
