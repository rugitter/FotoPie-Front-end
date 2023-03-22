import Post from "./Post";
import Loader from "../Loader/Loader";
import NoMore from "../Loader/NoMore";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";

interface ResponseImageData {
  _id: string;
  price: number;
  tag: string;
  userEmail: string;
  compressed_imageUrl: string;
  description: string;
  filename: string;
}

interface PostListProps {
  category: ResponseImageData[];
  loaderHandler: boolean;
  fetchImages: () => void;
}

const PostList = ({ category, loaderHandler, fetchImages }: PostListProps) => {
  return (
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
  );
};

export default PostList;
