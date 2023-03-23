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
  setCategory: Dispatch<SetStateAction<ResponseImageData[]>>;
  category:
}

// interface ResponseImageData {
//   _id: string;
//   price: number;
//   tag: string;
//   userEmail: string;
//   compressed_imageUrl: string;
//   description: string;
//   filename: string;
// }

const PostList = (props: CategoryInsidePostsProps) => {
  const [category, setCategory] = useState<ResponseImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState(true);
  const [Error, setError] = useState(null);

  let limit = 10;
  let tag = props.tagString;
  console.log(tag,"debug");

  const fetchImages = async () => {
    try {
      const res = await categoryPosts(tag, page, limit);

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
  }, [tag]);

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
