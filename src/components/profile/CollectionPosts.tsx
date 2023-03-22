import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Post from "../PostList/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import Masonry from "@mui/lab/Masonry";
import NoMore from "../Loader/NoMore";
import { profileCollection } from "../../axiosRequest/api/userCollection";

interface CollectionPostsProps {
  id: string;
}

interface ResponseImageData {
  collect_user_email: string;
  collected_user_email: string;
  imageUrl: string;
  _id: string;
}


const PostList = (props: CollectionPostsProps) => {
  const [collection, setCollection] = useState<ResponseImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState(true);

  const [Error, setError] = useState(null);

  let limit = 10;

  let id = props.id;
  const fetchImages = async () => {
    try {
      const res = await profileCollection(id, page, limit);
      if (res.status === 200) {
        setCollection([...collection, ...res.data]);
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
  }, []);

  return (
    <>
      
      {/*<h2>{props.id}</h2>*/}
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <InfiniteScroll
          dataLength={collection.length}
          next={fetchImages}
          hasMore={true}
          loader={loaderHandler ? <Loader /> : <NoMore />}
        >
          <Masonry columns={{ sm: 2, md: 3 }} spacing={2} sx={{ m: "auto" }}>
            {collection.map((collection) => (
              <Post
                url={collection.imageUrl}
                filename={collection.imageUrl}
                key={collection._id}
              />
            ))}
          </Masonry>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default PostList;