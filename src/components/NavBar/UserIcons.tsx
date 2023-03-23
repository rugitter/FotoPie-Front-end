import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "../../utils/Link";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

interface hamburgerMenuProps {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  setNewNotificationCount: React.Dispatch<React.SetStateAction<number>>;
  newNotificationCount: number;
  avatarPath: string;
  handleNotificationClick: () => void;
  isFixed: boolean;
  color?: string;
  bgColor?: string;
}

export default function UserIcons ({
  newNotificationCount,
  avatarPath,
  handleProfileMenuOpen,
  handleNotificationClick,
  isFixed,
  color,
  bgColor,
}: hamburgerMenuProps) {
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
        href="/notification"
        size="large"
        color="inherit"
        onClick={handleNotificationClick}
      >
        <Badge badgeContent={newNotificationCount} color="error">
          <NotificationsIcon
            sx={{
              color: isFixed ? "black" : color,
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
          bgcolor: isFixed ? "#F4DADA" : "#FBF1F1",
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