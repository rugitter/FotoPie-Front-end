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

  console.log("notificationCount:", notificationCount);
  
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
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