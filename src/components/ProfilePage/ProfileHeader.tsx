import { Avatar, Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { User } from "../../../pages/profile/[profileUserId]";

interface ProfileHeaderProps {
  user: User | null;
  isGallery: boolean;
  setIsGallery: (isGallery: boolean) => void;
}
const ProfileHeader: FC<ProfileHeaderProps> = ({
  user,
  isGallery,
  setIsGallery,
}: ProfileHeaderProps) => {
  if (!user) return null;
  const { firstName, lastName, avatarPath } = user;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ mt: 10, width: "100%" }}
    >
      {/* avatar */}
      <Grid item>
        <Avatar
          alt="avatar"
          src={avatarPath}
          sx={{ width: 180, height: 180 }}
        />
      </Grid>

      {/* name */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ mt: 5 }}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h3">{firstName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{lastName}</Typography>
        </Grid>
      </Grid>

      {/* Gallery & Collection button*/}
      <Grid container justifyContent="center" sx={{ mt: 5 }} spacing={5}>
        <Grid item>
          <Button
            variant={isGallery ? "contained" : "outlined"}
            sx={{ borderRadius: 10, p: 1.5, pl: 3, pr: 3 ,width: 150}}
            size="large"
            onClick={() => {
              setIsGallery(true);
            }}
          >
            <Typography>Gallery</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={!isGallery ? "contained" : "outlined"}
            sx={{ borderRadius: 10, p: 1.5, pl: 3, pr: 3,width: 150 }}
            size="large"
            onClick={() => {
              setIsGallery(false);
            }}
          >
            <Typography>Collection</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
