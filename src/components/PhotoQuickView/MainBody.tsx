import { useEffect, FC } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { NextRouter } from "next/router";
import DownloadImage from "./DownloadImage";
import { getInitialData } from "../../axiosRequest/api/photoQuickView";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setQuickViewData } from "../../../store/photoQuickView/quickViewSlice";
import PostImage from "./PostImage";
import CollectButton from "./CollectButton";
import LikeButton from "./LikeButton";
import UserName from "./UserName";

interface MainBodyProps {
  filenameString: string | string[] | undefined;
  router: NextRouter;
}

// Define a main body component that renders the main part
const MainBody: FC<MainBodyProps> = ({ filenameString, router }) => {
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
  } = useSelector((state: RootState) => ({
    ...state.auth,
    ...state.quickView,
  }));

  const dispatch = useDispatch<AppDispatch>();

  // fetch get user avatar,username,post image, collect/like status, collect/like count
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getInitialData(filenameString);
        dispatch(setQuickViewData(response.data));
      } catch (error: any) {
        return error.message;
      }
    };
    fetchData();
  }, [filenameString, dispatch]);

  return (
    <>
      {/* main body */}
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
            sx={{ m: 1, mt: 3 }}
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
                filenameString={filenameString}
                userCollects={userCollects}
                collected={collected}
                router={router}
              />

              <LikeButton
                isAuthenticated={isAuthenticated}
                filenameString={filenameString}
                userLikes={userLikes}
                liked={liked}
                router={router}
              />

              {/* to be updated */}
              <DownloadImage
                isAuthenticated={isAuthenticated}
                filenameString={filenameString}
                router={router}
              />
            </Stack>
          </Stack>

          {/* Post image */}
          {postPhoto && <PostImage postPhoto={postPhoto} />}
        </Stack>
      </Box>
    </>
  );
};

export default MainBody;
