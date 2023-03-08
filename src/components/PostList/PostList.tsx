import React, { useEffect, useState, useRef } from "react";

import axios from "axios";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axiosRequest from "../../utils/axiosRequest";

interface ImageData {
  //path: string;
  _id: string;
  filename: string;
  compressFilePath: string;
}

const PostList = () => {
  const [posts, setPost] = useState<ImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState<ImageData[]>([]);

  const [Error, setError] = useState(null);

  let limit = 10;

  const fetchImages = async () => {
    try {
      const res = await axiosRequest(
        `/api/posts?page=${page}&limit=${limit}`,
        "GET"
      );
      if (res.status === 200) {
        setPost([...posts, ...res.data]);
        setLoaderHandler([...res.data]);
        setPage(page + 1);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      {/* {posts.map((post, index) => {
        <Post url={post.path} key={index} />;
      })} */}
      <p>{Error}</p>
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchImages}
          hasMore={true}
          loader={
            loaderHandler.length === 0 ? <p>No more images</p> : <Loader />
          }
        >
          <ImageList
            sx={{ columnCount: { sm: `2 !important`, md: `3 !important` } }}
            variant="masonry"
            gap={8}
          >
            {posts.map((post) => (
              <ImageListItem key={post._id}>
                <Post url={post.compressFilePath} filename={post.filename} />
              </ImageListItem>
            ))}
          </ImageList>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default PostList;
