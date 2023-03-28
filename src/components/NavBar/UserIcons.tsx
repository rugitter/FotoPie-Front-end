import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "../../utils/Link";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

interface userIconsProps {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  notificationCount: number;
  avatarPath: string;
  handleNotificationClick: () => void;
  color?: string;
  fix: boolean;
}

export default function UserIcons ({
  notificationCount,
  avatarPath,
  handleProfileMenuOpen,
  handleNotificationClick,
  color="white",
  fix,
}: userIconsProps) {
  
  const gradientText = {
    backgroundImage: "linear-gradient(45deg, red, orange, green, blue, indigo, violet)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* FotoPie+ */}
      <Button
        variant="contained"
        sx={{
          bgcolor: fix ? "#F4DADA" : "#FBF1F1",
          "&:hover": {
            backgroundColor: "#F4DADA",        
          },
          textTransform: "none",
        }}
      >
        <Link href="/subscription" underline="none">
          <span style={gradientText}>FotoPie+</span>
        </Link>
      </Button>
      {/* notifications */}
      <IconButton
        size="large"
        color="inherit"
        onClick={handleNotificationClick}
      >
        <Badge badgeContent={notificationCount} color="error">
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
        onClick={handleProfileMenuOpen}
        sx={{
          width: 40,
          height: 40,
          "&:hover": {
            opacity: 0.8,
            cursor: 'pointer'
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