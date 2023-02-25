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
import Image from "next/image";
import { useRouter } from "next/router";

import axiosRequest from "../src/utils/axiosRequest";
import image from "../src/components/image.jpg"; //test
import image2 from "../src/components/image2.jpg";

// Define a component that renders the page
const PhotoQuickView = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    user_name: "AB",
    user_image: "image",
    photo: "photo",
  });

  const [collected, setCollected] = useState(false);
  const [liked, setLiked] = useState(false);

  const { postid } = router.query;
  //fetch user data
  // useEffect(() => {
  //   try {
  //     const response = axiosRequest(`/api/quickView/${postid}`, "GET");
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

  //Toggle collect button
  const addToCollection = () => {
    setCollected(!collected);
  };
  //Toggle like button
  const addToLiked = () => {
    setLiked(!liked);
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
              {collected ? "Collected" : "Collect"}
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
              {liked ? "Unlike" : "Like"}
            </Button>
            <Button
              // href="/users/:id/photo/:id"
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
        <Box sx={{ m: "auto" }} maxWidth={1000}>
          <Image
            src={image2}
            alt="image"
            height={500}
            // layout="fill"
            layout="responsive"
            // sizes="max-width:50vh,
            //         min-width:20vh"
          />
          {/* <Image src={userInfo.photo} alt="Image" width={400} /> */}
        </Box>
      </Stack>
    </Stack>
  );
};

export default PhotoQuickView;
