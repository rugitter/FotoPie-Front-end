import React, { FC, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CollectButton from "./CollectButton";
import LikeButton from "./LikeButton";
import DownloadImage from "./DownloadImage";

interface HamburgerMenuProps {
  isAuthenticated: boolean;
  filenameString: string | string[] | undefined;
  userCollects: number;
  collected: boolean;
  userLikes: number;
  liked: boolean;
  router: any;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isAuthenticated,
  filenameString,
  userCollects,
  collected,
  userLikes,
  liked,
  router,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <CollectButton
            isAuthenticated={isAuthenticated}
            filenameString={filenameString}
            userCollects={userCollects}
            collected={collected}
            router={router}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LikeButton
            isAuthenticated={isAuthenticated}
            filenameString={filenameString}
            userLikes={userLikes}
            liked={liked}
            router={router}
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DownloadImage
            isAuthenticated={isAuthenticated}
            filenameString={filenameString}
            router={router}
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
