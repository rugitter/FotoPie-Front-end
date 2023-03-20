import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import axiosRequest from "../../utils/axiosRequest";
import UserName from "./UserName";
import CollectButton from "./CollectButton";
import DownloadImage from "./DownloadImage";
import LikeButton from "./LikeButton";
import PostImage from "./PostImage";

// Define a component that renders the page
export interface MainBodyProps {
  filename: string | string[] | undefined;
}

const MainBody = (props: MainBodyProps) => {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [postPhoto, setPostPhoto] = useState("");
  const [userCollects, setUserCollects] = useState(0);
  const [userLikes, setUserLikes] = useState(0);
  const [userID, setUserID] = useState("");

  const [collected, setCollected] = useState(false);
  const [liked, setLiked] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [requestError, setRequestError] = useState();

  const router = useRouter();
  // const { filename } = router.query;

  // fetch get user avatar,username,post image, collect/like status, collect/like count
  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      try {
        const response = await axiosRequest(
          `/api/quick-view?filename=${props.filename}`,
          "GET"
        );
        setUserName(response.data.user_name);
        setUserAvatar(response.data.avatar_url);
        setPostPhoto(response.data.photo_url);
        setUserCollects(response.data.collect_count);
        setUserLikes(response.data.like_count);
        setCollected(response.data.collect_status);
        setLiked(response.data.like_status);
        setUserID(response.data.user_id);
      } catch (error: any) {
        return error.message;
        // setRequestError(error.message);
      }
    };
    fetchData();
  }, [router.isReady, props.filename]);

  return (
    <>
      {/* main body */}
      <Stack
        display="flex"
        sx={{
          width: "75vw",
          height: "90vh",
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
          <UserName
            userID={userID}
            userAvatar={userAvatar}
            userName={userName}
          />

          {/* Collect, like, download buttons */}
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-around"
            spacing={2}
            sx={{ mr: 2 }}
          >
            <CollectButton
              userCollects={userCollects}
              collected={collected}
              filename={props.filename}
            />
            <LikeButton
              filename={props.filename}
              liked={liked}
              userLikes={userLikes}
            />
            <DownloadImage filename={props.filename} />
          </Stack>
        </Stack>

        {/* Post image */}
        <PostImage postPhoto={postPhoto} />
      </Stack>
    </>
  );
};

export default MainBody;
