import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getUserPosts } from "../../axiosRequest/api/user-post";

interface GalleryProps {
  profileUserId: string | string[] | undefined;
  handleOpen: (filename: string) => void;
}

interface ResponseImageData {
  _id: string;
  price: number;
  tag: string;
  userEmail: string;
  compressFilePath: string;
  filename: string;
}

export default function Gallery(props: GalleryProps) {
  const [galleryFilePath, setGalleryFilePath] = useState<string[]>([]);
  const [galleryFileName, setGalleryFileName] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getGalleryFileName = async () => {
    const response = await getUserPosts(props.profileUserId);
    const imageFileName = response.data.map((image: ResponseImageData) => image.filename);
    setGalleryFileName(imageFileName);
  }

  useEffect(() => {
    const getGalleryFilePath = async () =>{
      const response = await getUserPosts(props.profileUserId);
      const imageFilePaths = response.data.map((image: ResponseImageData) => image.compressFilePath);
      setGalleryFilePath(imageFilePaths);
    }
    getGalleryFilePath();
  }, [props.profileUserId]);

  return (
    <>
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ImageList
            sx={{ columnCount: { sm: `2 !important`, md: `3 !important` } }}
            variant="masonry"
            gap={8}
          >
            {galleryFilePath.map((compressFilePath, i) => (
              <ImageListItem key={i}>
                <img src={`${compressFilePath}?w=500`} loading="lazy" alt="gallery image" />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
    </>
  );
}