import { useEffect, FC } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { NextRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData } from "../../axiosRequest/api/photoQuickView";
import { AppDispatch, RootState } from "../../../store/store";
import {
  setQuickViewData,
  setLoading,
} from "../../../store/photoQuickView/quickViewSlice";
import DownloadImage from "./DownloadImage";
import PostImage from "./PostImage";
import CollectButton from "./CollectButton";
import LikeButton from "./LikeButton";
import UserName from "./UserName";
import DeletePostButton from "../PostDelete/DeletePost";
import Loader from "../Loader/Loader";

interface PhotoQuickViewProps {
  filename: string | string[] | undefined;
  router: NextRouter;
}

// Define a main body component that renders the Photo Quick View part
const PhotoQuickView: FC<PhotoQuickViewProps> = ({ filename, router }) => {
  //Redux toolkit
  const {
    isAuthenticated,
    userName,
    userAvatar,
    postPhoto,
    userCollects,
    userLikes,
    userID,
    collected,
    liked,
    isLoading,
  } = useSelector((state: RootState) => ({
    ...state.auth,
    ...state.quickView,
  }));

  const dispatch = useDispatch<AppDispatch>();

  // fetch get user avatar,username,post image, collect/like status, collect/like count
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true)); // Set loading state to true before fetching data
        const response = await getInitialData(filename);
        dispatch(setQuickViewData(response.data));
      } catch (error: any) {
        console.error(error);
      } finally {
        dispatch(setLoading(false)); // Set loading state to false after fetching data
      }
    };
    fetchData();
  }, [filename, dispatch]);

  return (
    <>
      {/* main body */}
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Stack
            display="flex"
            sx={{
              width: "75vw",
              height: "auto",
              minWidth: "50vw",
              borderRadius: "10px",
              m: "auto",
              bgcolor: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* User infos and buttons */}
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
              position="relative"
              sx={{ m: 1, mt: 3, mb: 3 }}
            >
              {/* Avatar and username */}
              <Stack>
                <UserName
                  userID={userID}
                  userAvatar={userAvatar}
                  userName={userName}
                />
              </Stack>
              {/* Collect, like, download buttons */}
              <Stack
                display="flex"
                direction="row"
                justifyContent="space-around"
                spacing={2}
                sx={{ mr: 2 }}
              >
                <CollectButton
                  isAuthenticated={isAuthenticated}
                  filenameString={filename}
                  userCollects={userCollects}
                  collected={collected}
                  router={router}
                />

                <LikeButton
                  isAuthenticated={isAuthenticated}
                  filenameString={filename}
                  userLikes={userLikes}
                  liked={liked}
                  router={router}
                />

                <DownloadImage
                  isAuthenticated={isAuthenticated}
                  filenameString={filename}
                  router={router}
                />
              </Stack>
            </Stack>

            {/* Post image */}
            {postPhoto && <PostImage postPhoto={postPhoto} />}
          </Stack>
          <DeletePostButton filenameString={filename} />
        </Box>
      )}
    </>
  );
};

export default PhotoQuickView;
