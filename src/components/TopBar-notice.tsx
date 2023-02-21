import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "../utils/Link";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

export default function ButtonAppNoticeBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="#"
              sx={{ fontSize: 24 }}
            >
              {"FotoPie"}
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="#"
              sx={{ fontSize: 24}}
            >
              {"Notification Page"}
            </Link>
          </Typography>

          <Link
            variant="h6"
            underline="none"
            href="notification"
            sx={{ ...rightLink, color: "secondary.main" }}
          >
            {"Notification"}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
