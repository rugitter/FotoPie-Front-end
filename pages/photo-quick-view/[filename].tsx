import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Image from "mui-image";

import axiosRequest from "../../src/utils/axiosRequest";
import Link from "../../src/utils/Link";
import Comment from "../../src/components/Comment/Comment";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import DeletePostButton from "../../src/components/PostDelete/DeletePost";

// Define a component that renders the page
const PhotoQuickView = () => {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [postPhoto, setPostPhoto] = useState("");
  const [userCollects, setUserCollects] = useState("");
  const [userLikes, setUserLikes] = useState("");
  const [userID, setUserID] = useState("");

  const [collected, setCollected] = useState(false);
  const [liked, setLiked] = useState(false);

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  // const [requestError, setRequestError] = useState();

  const router = useRouter();
  const { filename } = router.query;

  // fetch get user avatar,username,post image, collect/like status, collect/like count
  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      try {
        const response = await axiosRequest(
          `/api/quick-view?filename=${filename}`,
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
  }, [router.isReady, filename]);

  //Toggle collect button and add/delete collect number
  const addToCollection = async () => {
    try {
      const response = await axiosRequest(`/api/collect/${filename}`, "POST", {
        filename: `${filename}`,
      });
      const data = response.data;
      setUserCollects(data);
      setCollected((collected) => !collected);
    } catch (error: any) {
      router.push("/login");
    }
  };

  //Toggle like button and add/delete like number
  const addToLiked = async () => {
    try {
      const response = await axiosRequest(`/api/like/${filename}`, "POST", {
        filename: `${filename}`,
      });
      const data = response.data;
      setUserLikes(data);
      setLiked((liked) => !liked);
    } catch (error: any) {
      router.push("/login");
    }
  };

  //Redirect to download page-- to be done in the next sprint
  const downLoadImages = async () => {
    try {
      const response = await axiosRequest(`/api/download/${filename}`, "POST", {
        filename: `${filename}`,
      });
      const data = response.data;
      router.push("/payment");
    } catch (error: any) {
      return error.message;
      // setRequestError(error.message);
    }
  };

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        minWidth: "500px",
        bgcolor: "rgba(0,0,0,0.8)",
        position: "relative",
        m: "auto",
      }}
    >
      {/*  close button */}
      <Stack
        sx={{
          position: "absolute",
          top: { xs: 0, md: 40 },
          left: { sm: 20, md: 60 },
          opacity: "1",
        }}
      >
        <Button>
          <Link href="/" sx={{ color: "#fff" }}>
            {<CloseIcon />}
          </Link>
        </Button>
      </Stack>

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
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          position="relative"
          sx={{ m: 1, mt: 3 }}
        >
          {/* Avatar and username */}
          <Stack>
            <Stack display="flex" direction="row">
              <Button>
                <Link href={`/profile/${userID}`}>
                  {<Avatar alt="avatar" src={userAvatar}></Avatar>}
                </Link>
              </Button>
              <Button>
                <Link
                  href={`/profile/${userID}`}
                  sx={{ textDecoration: "none" }}
                >
                  {<Typography variant="body1">{userName}</Typography>}
                </Link>
              </Button>
            </Stack>
          </Stack>

          {/* Collect, like, download button */}
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-around"
            spacing={2}
            sx={{ mr: 2 }}
          >
            <Button
              variant="outlined"
              sx={{
                opacity: { xs: 0, sm: 0, md: 1 },
                color: collected ? "orange" : "primary.main",
              }}
              onClick={addToCollection}
              startIcon={<AddToPhotosIcon />}
            >
              {collected
                ? "Collected" + " " + `${userCollects}`
                : "Collect" + " " + `${userCollects}`}
            </Button>
            <Button
              variant="outlined"
              sx={{
                opacity: { xs: 0, sm: 0, md: 1 },
                color: liked ? "secondary.main" : "primary.main",
              }}
              startIcon={<FavoriteBorderIcon />}
              onClick={addToLiked}
            >
              {liked
                ? "Unlike" + " " + `${userLikes}`
                : "Like" + " " + `${userLikes}`}
            </Button>
            <Button
              variant="contained"
              sx={{
                opacity: { xs: 0, sm: 1 },
                bgcolor: "secondary.main",
              }}
              startIcon={<DownloadIcon />}
              onClick={downLoadImages}
            >
              <Link
                href={`/users/download/${userID}`}
                // to be changed in the next sprint
                sx={{ textDecoration: "none", color: "#fff" }}
              >
                Download
              </Link>
            </Button>
          </Stack>
        </Stack>

        {/* Post image */}
        <Box
          sx={{
            m: "auto",
            width: "60vw",
            height: "70vh",
          }}
        >
          {/* <p>{requestError}</p> */}
          <Image
            alt="image"
            src={postPhoto}
            width="60vw"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Comment />
      </Stack>
    </Stack>
  );
};

export default PhotoQuickView;
