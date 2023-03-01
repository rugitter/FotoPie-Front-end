import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Button, Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/router";

import axiosRequest from "../src/utils/axiosRequest";
import image from "../src/components/image.jpg"; //test
import image2 from "../src/components/image2.jpg"; //test

// Define a component that renders the page
const PhotoQuickView = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    user_name: "AB",
    user_image: "image",
    photo: "photo",
  });

  const [collected, setCollected] = useState(false);
  const [collectNumber, setCollectNumber] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);

  const { filename } = router.query;
  //fetch user data
  // useEffect(() => {
  //   try {
  //     const response = axiosRequest(`/api/quickView/${filename}`, "GET");
  //     if (response === null || response === undefined) {
  //       return;
  //       console.log("error");
  //     }
  //     response.then(
  //       (user) => setUserInfo(user.data) //｛user_name，user_image，photo｝
  //     );

  //     // TODO: handle error and set error type
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // }, []);

  //click close button to redirect back to home page
  const onClickCloseButton = () => {
    router.push("/");
  };

  //Toggle collect button and add/delete collect number
  const addToCollection = () => {
    setCollected(!collected);
    // const response = axiosRequest(`/api/collect/${filename}`, "POST", {
    // filename
    // });
    setCollectNumber(collectNumber);
  };
  //Toggle like button
  const addToLiked = () => {
    setLiked(!liked);
    // const response = axiosRequest(`/api/like/${filename}`, "POST", {
    //   filename
    // });
    setLikeNumber(likeNumber);
  };

  //Redirect to download page
  const downLoadImages = () => {};

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
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
          // width: { xs: "20vw", sm: "40vw", md: "60vw", lg: "70vw", xl: "75vw" },
          height: "90vh",
          minWidth: "600px",
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
                {/* <Avatar>{userInfo.user_image}</Avatar> */}
                <Avatar>
                  {/* <Image src={image} alt="Image" width={400} /> */}
                </Avatar>
              </Button>
              <Button href="/">
                {/* <Typography variant="body1">{userInfo.user_name}</Typography> */}
                <Typography variant="body1">username</Typography>
              </Button>
            </Stack>
          </Stack>

          {/* Collect, like, download button */}
          <Stack display="flex" direction="row" justifyContent="space-around">
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                color: collected ? "orange" : "primary.main",
              }}
              onClick={addToCollection}
              startIcon={<AddToPhotosIcon />}
            >
              {collected
                ? "Collected" + " " + `${collectNumber}`
                : "Collect" + " " + `${collectNumber}`}
            </Button>
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                color: liked ? "secondary.main" : "primary.main",
              }}
              startIcon={<FavoriteBorderIcon />}
              onClick={addToLiked}
            >
              {liked
                ? "Unlike" + " " + `${likeNumber}`
                : "Like" + " " + `${likeNumber}`}
            </Button>
            <Button
              // href="/users/download/:id/photo/:id"
              variant="contained"
              sx={{ mr: 2, bgcolor: "secondary.main" }}
              startIcon={<DownloadIcon />}
              onClick={downLoadImages}
            >
              Download
            </Button>
          </Stack>
        </Stack>

        {/* Post image */}
        <Box
          // maxWidth="sm"
          sx={{
            m: "auto",
            position: "relative",
            width: "60vw",
            height: "70vh",
          }}
        >
          <Image
            src={image2}
            alt="image"
            fill={true}
            style={{ objectFit: "contain" }}
          />
          {/* <Image src={userInfo.photo} alt="Image" width={400} /> */}
        </Box>
      </Stack>
    </Stack>
  );
};

export default PhotoQuickView;
