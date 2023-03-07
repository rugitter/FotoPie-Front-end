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

// Define a component that renders the page
const PhotoQuickView = () => {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [postPhoto, setPostPhoto] = useState("");
  const [userCollects, setUserCollects] = useState("");
  const [userLikes, setUserLikes] = useState("");

  const [collected, setCollected] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const { filename } = router.query;

  // fetch post user avatar,username,post image
  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      try {
        const response = await axiosRequest(
          `/api/quickView?filename=${filename}`,
          "GET"
        );
        if (!response) {
          return;
        }
        setUserName(response.data.user_name);
        setUserAvatar(response.data.avatar_url);
        setPostPhoto(response.data.photo_url);
        setUserCollects(response.data.collects);
        setUserLikes(response.data.likes);
      } catch (error: any) {
        return error.message;
      }
    };
    fetchData();
  }, [router.isReady, filename]);

  //check if view user is logged in
  const checkLogin = () => {
    const accessToken = window.localStorage.getItem("accessToken");
    accessToken !== null ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };

  //click close button to redirect back to home page
  const onClickCloseButton = () => {
    router.push("/");
  };

  //Toggle collect button and add/delete collect number
  const addToCollection = async () => {
    checkLogin();
    if (isLoggedIn === false) return router.push("/login");
    if (isLoggedIn === true) {
      setCollected((collected) => !collected);
      //click collect button to update number
      try {
        const response = await axiosRequest(
          `/api/collect/${filename}`,
          "POST",
          {
            filename: `${filename}`,
          }
        );
        if (response.status === 401) {
          router.push("/login");
        }
        const data = response.data || response;
        setUserCollects(data);
      } catch (error: any) {
        return error.message;
      }
    }
  };

  //Toggle like button and add/delete like number
  const addToLiked = async () => {
    checkLogin();
    if (isLoggedIn === false) return router.push("/login");
    if (isLoggedIn === true) {
      setLiked((liked) => !liked);
      //click like button to update number
      try {
        const response = await axiosRequest(`/api/like/${filename}`, "POST", {
          filename: `${filename}`,
        });
        if (response.status === 401) {
          router.push("/login");
        }
        const data = response.data || response;
        setUserLikes(data);
      } catch (error: any) {
        return error.message;
      }
    }
  };

  //Redirect to download page
  const downLoadImages = () => {};

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
        <Button sx={{ color: "#fff" }} onClick={onClickCloseButton}>
          <CloseIcon />
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
              <Button href="/" sx={{ m: 0 }}>
                <Avatar alt="avatar" src={userAvatar}></Avatar>
              </Button>
              <Button href="/">
                <Typography variant="body1">{userName}</Typography>
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
              // href="/users/download/:id/photo/:id"
              variant="contained"
              sx={{
                opacity: { xs: 0, sm: 1 },
                bgcolor: "secondary.main",
              }}
              startIcon={<DownloadIcon />}
              onClick={downLoadImages}
            >
              Download
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
          <Image
            alt="image"
            src={postPhoto}
            width="60vw"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default PhotoQuickView;
