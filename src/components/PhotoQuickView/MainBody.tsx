import { useState, useEffect } from "react";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Button, Avatar, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "mui-image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
// import UserName from "./UserName";
// import CollectButton from "./CollectButton";
// import LikeButton from "./LikeButton";
// import CloseButton from "./CloseButton";
// import PostImage from "./PostImage";
import DownloadImage from "./DownloadImage";
import Link from "../../utils/Link";
import {
  getLikeNumber,
  getCollectNumber,
  getInitialData,
  getDownloadImage,
} from "../../axiosRequest/api/photoQuickView";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuickViewData,
  // setUserCollects,
  // toggleCollected,
  // setUserLikes,
  // toggleLiked,
} from "../../../store/photoQuickView/quickViewSlice";
import {
  updateCollect,
  updateLike,
} from "../../../store/photoQuickView/quickViewAciton";

// export interface MainBodyProps {
//   filenameString: string;
// }
// Define a component that renders the page
const MainBody = () => {
  // const MainBody = (props: MainBodyProps) => {
  const router = useRouter();
  const { filename } = router.query;
  const filenameString = filename as string;
  console.log(filenameString,filename)

  // const [userName, setUserName] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  // const [postPhoto, setPostPhoto] = useState("");
  // const [userCollects, setUserCollects] = useState(0);
  // const [userLikes, setUserLikes] = useState(0);
  // const [userID, setUserID] = useState("");

  // const [collected, setCollected] = useState(false);
  // const [liked, setLiked] = useState(false);

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
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const fetchData = async () => {
  //     try {
  //       const response = await getInitialData(filenameString);
  //       // const response = await getInitialData(props.filenameString);
  //       // const response = await getInitialData(filename);
  //       setUserName(response.data.user_name);
  //       setUserAvatar(response.data.avatar_url);
  //       setPostPhoto(response.data.photo_url);
  //       setUserCollects(response.data.collect_count);
  //       setUserLikes(response.data.like_count);
  //       setCollected(response.data.collect_status);
  //       setLiked(response.data.like_status);
  //       setUserID(response.data.user_id);
  //     } catch (error: any) {
  //       return error.message;
  //     }
  //   };
  //   fetchData();
  // }, [router.isReady, filename]);
  // }, [router.isReady, filenameString]);
  // }, [props.filenameString]);
  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      try {
        const response = await getInitialData(filenameString);
        dispatch(setQuickViewData(response.data));
      } catch (error: any) {
        return error.message;
      }
    };
    fetchData();
  }, [router.isReady, filenameString, dispatch]);

  //Toggle collect button and add/delete collect number
  // const addToCollection = async () => {
  //   if (!isAuthenticated) router.push("/login");
  //   if (isAuthenticated) {
  //     try {
  //       // const response = await axiosRequest(
  //       //   `/api/collect/${props.filename}`,
  //       //   "POST",
  //       //   {
  //       //     filename: `${props.filename}`,
  //       //   }
  //       // );
  //       // const response = await getCollectNumber(filename);
  //       // const response = await getCollectNumber(props.filenameString);
  //       const response = await getCollectNumber(filenameString);
  //       const data = response.data;
  //       setUserCollects(data);
  //       setCollected((collected) => !collected);
  //     } catch (error: any) {
  //       return error.message;
  //     }
  //   }
  // };
  const addToCollection = () => {
    if (!isAuthenticated) router.push("/login");
    if (isAuthenticated) {
      dispatch(updateCollect(filenameString));
    }
  };
  // try {
  // const response = await getCollectNumber(filenameString);
  // const data = response.data;
  // console.log(data);
  // dispatch(setUserCollects(response.data));
  // } catch (error: any) {
  // return error.message;
  // dispatch(toggleCollected());
  // }

  //Toggle like button and add/delete like number
  // const addToLiked = async () => {
  //   if (!isAuthenticated) router.push("/login");
  //   if (isAuthenticated) {
  //     try {
  //       const response = await getLikeNumber(filenameString);
  //       // const response = await getLikeNumber(props.filenameString);
  //       // const response = await getLikeNumber(props.filename);

  //       // const response = await axiosRequest(
  //       //   `/api/like/${props.filename}`,
  //       //   "POST",
  //       //   {
  //       //     filename: `${props.filename}`,
  //       //   }
  //       // );
  //       const data = response.data;
  //       setUserLikes(data);
  //       setLiked((liked) => !liked);
  //     } catch (error: any) {
  //       return error.message;
  //     }
  //   }
  // };
  const addToLiked = () => {
    if (!isAuthenticated) router.push("/login");
    if (isAuthenticated) {
      dispatch(updateLike(filenameString));
    }
  };
  //   try {
  //     const response = await getLikeNumber(filenameString);
  //     const data = response.data;
  //     dispatch(setUserLikes(data));
  // dispatch(toggleLiked());
  // } catch (error: any) {
  //   return error.message;
  // }

  return (
    <>
      {/* main body */}
      <Box
        sx={{
          width: "100%", // Adjust the width as needed
          height: "100%", // Adjust the height as needed
          overflowY: "auto", // Enable vertical scrolling
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
            {/* <UserName
            userID={userID}
            userAvatar={userAvatar}
            userName={userName}
          /> */}
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
            {/* Collect, like, download buttons */}
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-around"
              spacing={2}
              sx={{ mr: 2 }}
            >
              {/* <CollectButton
              userCollects={userCollects}
              collected={collected}
              filenameString={filenameString}
              setCollected={setCollected}
              setUserCollects={setUserCollects}
              // filename={filename}
            /> */}
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
              {/* <LikeButton
                filenameString={filenameString}
                // filename={filename}
                liked={liked}
                userLikes={userLikes}
              /> */}
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
              <DownloadImage filenameString={filenameString} />
              {/* <DownloadImage filenameString={props.filenameString} /> */}
              {/* <DownloadImage filename={filename} /> */}
            </Stack>
          </Stack>

          {/* Post image */}
          {/* <PostImage postPhoto={postPhoto} /> */}
          <Box
            sx={{
              m: "auto",
              width: "auto",
              height: "auto",
            }}
          >
            <Image
              alt="image"
              src={postPhoto}
              width="40vw"
              style={{ objectFit: "contain" }}
            />
            <Image
              alt="image"
              src={postPhoto}
              width="40vw"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default MainBody;
