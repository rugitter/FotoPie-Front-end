import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Post from "../PostList/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import Masonry from "@mui/lab/Masonry";
import NoMore from "../Loader/NoMore";
import { getUserPosts } from "../../axiosRequest/api/user-post";
import ErrorAlert from "../LoginForm/ErrorAlert";

interface GalleryPostsProps {
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
// export interface PostListProps {
//   handleOpen: (filename: string) => void;
// }


const GalleryPost = ({ profileUserId, handleOpen }: GalleryPostsProps) => {
  const [galleryFilePath, setGalleryFilePath] = useState<ResponseImageData[]>([]);
  const [loaderHandler, setLoaderHandler] = useState(true);
  const [error, setError] = useState(null);

  let limit = 10;


  const fetchImages = async () => {
    try {
      const res = await getUserPosts(profileUserId);
      if (res.status === 200) {
        setGalleryFilePath(res.data);
        if (res.data.length === 0) {
          setLoaderHandler(false);
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if(!profileUserId) return
    fetchImages();
  }, [profileUserId]);

  return (
    <>
      {/*<h2>{props.id}</h2>*/}
      {error && <ErrorAlert error={error}></ErrorAlert>}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        <Masonry columns={{ sm: 2, md: 3 }} spacing={2} sx={{ m: "auto" }}>
          {galleryFilePath.map((gallery) => (
            <Post
              url={gallery.compressFilePath}
              filename={gallery.filename}
              key={gallery._id}
              handleOpen={() => handleOpen(gallery.filename)}
            />
          ))}
        </Masonry>
      </Box>
    </>
  );
};

export default GalleryPost;