import Post from "../PostList/Post";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import NoMore from "../Loader/NoMore";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import { categoryPosts } from "../../axiosRequest/api/category";
import { ResponseImageData } from "../../../pages/category/[tag]";


interface CategoryInsidePostsProps {
  tagString: string | string[] | undefined;
  category: ResponseImageData[];
  setCategory: Dispatch<SetStateAction<ResponseImageData[]>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  loaderHandler: boolean;
  setLoaderHandler: Dispatch<SetStateAction<boolean>>;
  Error: null;
  setError: Dispatch<SetStateAction<null>>;
}

const PostList = ({
  tagString,
  category,
  setCategory,
  page,
  setPage,
  loaderHandler,
  setLoaderHandler,
  Error,
  setError,
}: CategoryInsidePostsProps) => {

  let limit = 10;
  let tag = tagString;

  const fetchImages = async () => {
    try {
      const res = await categoryPosts(tagString, page, limit);

      if (res.status === 200) {
        setCategory([...category, ...res.data]);
        setPage(page + 1);
        if ([...res.data].length === 0) {
          setLoaderHandler(false);
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [tagString]);

  return (
    <>
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <InfiniteScroll
          dataLength={category.length}
          next={fetchImages}
          hasMore={true}
          loader={loaderHandler ? <Loader /> : <NoMore />}
        >
          <Masonry
            columns={{ sm: 2, md: 3 }}
            spacing={2}
            sx={{ m: "auto", mt: 15 }}
          >
            {category.map((category) => (
              <Post
                url={category.compressed_imageUrl}
                filename={category.filename}
                key={category._id}
              />
            ))}
          </Masonry>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default PostList;
