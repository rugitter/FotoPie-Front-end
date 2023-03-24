import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface avatarMenuProps {
  isMenuOpen: boolean;
  anchorEl: null | HTMLElement;
  handleMenuClose: () => void;
  handleLogout: () => void;
}

export default function avatarMenu({
  isMenuOpen,
  anchorEl,
  handleMenuClose,
  handleLogout,
}: avatarMenuProps) {
  const menuId = "primary-search-account-menu";

  return (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
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
    >
      {/* router.push(`profile/${id}`) */}
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
}
