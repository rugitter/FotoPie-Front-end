import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "../../utils/Link";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

interface userIconsProps {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  notificationCount: number;
  avatarPath: string;
  handleNotificationClick: () => void;
  color?: string;
  fix: boolean;
}

export default function UserIcons({
  notificationCount,
  avatarPath,
  handleProfileMenuOpen,
  handleNotificationClick,
  color = "white",
  fix,
}: userIconsProps) {
  const gradientText = {
    backgroundImage:
      "linear-gradient(45deg, #ff3300, red, orange, #ff33cc, #1affa3, #33cc33, #1aff66)",
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
      <Typography>
        <Link
          variant="h6"
          underline="none"
          style={gradientText}
          href="/subscription"
          sx={{
            fontSize: 20,
            "&:hover": {
              opacity: 0.9,
              cursor: "pointer",
            },
          }}
        >
          {"FotoPie+"}
        </Link>
      </Typography>

      {/* notifications */}
      <IconButton
        size="large"
        color="inherit"
        onClick={handleNotificationClick}
        sx={{ height: 45, width: 45 }}
      >
        <Badge badgeContent={notificationCount} color="error">
          <NotificationsIcon
            sx={{
              fontSize: "2rem",
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
          width: 45,
          height: 45,
          "&:hover": {
            opacity: 0.8,
            cursor: "pointer",
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
          height: 45,
        }}
      >
        <Link href="/upload" underline="none">
          Upload
        </Link>
      </Button>
    </Box>
  );
}
