import React, { useEffect, useState, useRef } from "react";

import axios from "axios";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface ImageData {
  //path: string;
  id: number;
  src: {
    medium: string;
  };
}

const PostList = () => {
  // const [posts, setPost] = useState<ImageData[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   axios
  //     .get<ImageData[]>(
  //       `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/posts?page=${page}&limit=${limit}`
  //     )
  //     .then((res) => setPost([...posts, ...res.data]));
  // }, []);
  let limit = 10;

  const fetchImages = () => {
    axios
      .get(`https://api.pexels.com/v1/curated?page=${page}&per_page=${limit}`, {
        headers: {
          Authorization: process.env.PEXELS_KEY,
        },
      })
      .then((res) => {
        setImages([...images, ...res.data.photos]);
        setPage(page + 1);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      {/* {posts.map((post, index) => {
        <Post url={post.path} key={index} />;
      })} */}
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.map((image) => (
              <ImageListItem key={image.id}>
                <Post url={image.src.medium} />
              </ImageListItem>
            ))}
          </ImageList>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default PostList;
