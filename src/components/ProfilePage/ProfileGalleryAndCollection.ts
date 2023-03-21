import { Grid } from "@mui/material";
import { FC } from "react";
import Collection from "./Collection";
import Gallery from "./Gallery";

interface ProfileGalleryAndCollectionProps {
  id: string | string[] | undefined;
  isGallery: boolean;
}

const ProfileGalleryAndCollection: FC<ProfileGalleryAndCollectionProps> = ({
  id,
  isGallery,
}: ProfileGalleryAndCollectionProps) => {
  return (
    <Grid sx={{ m: 5 }}>
      {isGallery ? (
        <Gallery id={id} />
      ) : (
        <Collection id={id} />
      )}
    </Grid>
  )
};
export default ProfileGalleryAndCollection;
