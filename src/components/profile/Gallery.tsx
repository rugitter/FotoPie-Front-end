import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getUserPost } from "../../axiosRequest/api/userPost";

interface GalleryProps {
  id: string;
}

interface ResponseImageData {
  _id: string,
  price: number,
  tag: string,
  userEmail: string,
  imageUrl: string,
}

export default function Gallery(props: GalleryProps) {

  const [galleryPosts, setGalleryPosts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    getUserPost(id).then((res) => {
      const image = res.data.map((image: ResponseImageData) => (image.imageUrl
      ))
      setGalleryPosts(image);
    });
  }, [id]);
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <ImageList
          sx={{ columnCount: { sm: `2 !important`, md: `3 !important` } }}
          variant="masonry"
          gap={8}
        >
          {galleryPosts.map((imageUrl, i) => (
            <ImageListItem key={i} >
              <img
                src={`${imageUrl}?w=500`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
