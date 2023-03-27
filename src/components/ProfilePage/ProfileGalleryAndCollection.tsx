import { Grid } from "@mui/material";
import { FC, useState } from "react";
import Collection from "./Collection";
import Gallery from "./Gallery";

interface ProfileGalleryAndCollectionProps {
  profileUserId: string | string[] | undefined;
  isGallery: boolean;
}

const ProfileGalleryAndCollection: FC<ProfileGalleryAndCollectionProps> = ({
  profileUserId,
  isGallery,
}: ProfileGalleryAndCollectionProps) => {
  const [selectedFilename, setSelectedFilename] = useState<
    string | undefined
  >();
  const [open, setOpen] = useState(false);
  //open modal popup window
  const handleOpen = (filename: string) => {
    setSelectedFilename(filename);
    setOpen(true);
  };
  //close modal popup window
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid sx={{ m: 5 }}>
      {isGallery ? <Gallery handleOpen={handleOpen} profileUserId={profileUserId} /> : <Collection profileUserId={profileUserId} />}
    </Grid>
  );
};
export default ProfileGalleryAndCollection;
