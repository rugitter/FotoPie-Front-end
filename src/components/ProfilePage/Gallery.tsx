import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axiosRequest from "../../utils/axiosRequest";
import { getUserPosts } from "../../axiosRequest/api/user-post";

interface GalleryProps {
  profileUserId: string | string[] | undefined;
}

interface ResponseImageData {
  _id: string;
  price: number;
  tag: string;
  userEmail: string;
  imageUrl: string;
}

export default function Gallery(props: GalleryProps) {
  const [galleryPosts, setGalleryPosts] = useState([]);

  useEffect(() => {
    getUserPosts(props.profileUserId).then((res) => {
      const image = res.data.map((image: ResponseImageData) => image.imageUrl);
      setGalleryPosts(image);
    });
  }, [props.profileUserId]);
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <ImageList
          sx={{ columnCount: { sm: `2 !important`, md: `3 !important` } }}
          variant="masonry"
          gap={8}
        >
          {galleryPosts.map((imageUrl, i) => (
            <ImageListItem key={i}>
              <img src={`${imageUrl}?w=500`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
