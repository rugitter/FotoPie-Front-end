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
import Hidden from "@mui/material/Hidden";
import HamburgerMenu from "./HamburgerMenu";
import { Grid } from "@mui/material";

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
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={2} md={4} width="100%">
            {/* User infos and buttons */}
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* Avatar and username */}
              <Grid item xs={8} md={4}>
                <UserName
                  userID={userID}
                  userAvatar={userAvatar}
                  userName={userName}
                />
              </Grid>
              {/* Collect, like, download buttons */}
              <Grid item xs={4} md={8}>
                {/* HamburgerMenu or collect like download button */}
                {/* desktop */}
                <Hidden mdDown>
                  <Grid container justifyContent="flex-end" spacing={2}>
                    {/* collect button */}
                    <Grid item>
                      <CollectButton
                        isAuthenticated={isAuthenticated}
                        filenameString={filename}
                        userCollects={userCollects}
                        collected={collected}
                        router={router}
                      />
                    </Grid>
                    {/* like button */}
                    <Grid item>
                      <LikeButton
                        isAuthenticated={isAuthenticated}
                        filenameString={filename}
                        userLikes={userLikes}
                        liked={liked}
                        router={router}
                      />
                    </Grid>
                    {/* down button */}
                    <Grid item>
                      <DownloadImage
                        isAuthenticated={isAuthenticated}
                        filenameString={filename}
                        router={router}
                      />
                    </Grid>
                  </Grid>
                </Hidden>
                {/* mobile */}
                <Hidden mdUp>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <HamburgerMenu
                        isAuthenticated={isAuthenticated}
                        filenameString={filename}
                        userCollects={userCollects}
                        collected={collected}
                        userLikes={userLikes}
                        liked={liked}
                        router={router}
                      />
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>

          {/* Post image */}
          <Grid item xs={8} md={6}>
            {postPhoto && <PostImage postPhoto={postPhoto} />}
          </Grid>

          {/* Delete post button */}
          <Grid item xs={2} md={2}>
            <DeletePostButton filenameString={filename} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default PhotoQuickView;
///////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, FC } from "react";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import { NextRouter } from "next/router";
// import { useDispatch, useSelector } from "react-redux";
// import { getInitialData } from "../../axiosRequest/api/photoQuickView";
// import { AppDispatch, RootState } from "../../../store/store";
// import {
//   setQuickViewData,
//   setLoading,
// } from "../../../store/photoQuickView/quickViewSlice";
// import DownloadImage from "./DownloadImage";
// import PostImage from "./PostImage";
// import CollectButton from "./CollectButton";
// import LikeButton from "./LikeButton";
// import UserName from "./UserName";
// import DeletePostButton from "../PostDelete/DeletePost";
// import Loader from "../Loader/Loader";
// import Hidden from "@mui/material/Hidden";
// import HamburgerMenu from "./HamburgerMenu";
// import Grid from "@mui/material/Grid";

// interface PhotoQuickViewProps {
//   filename: string | string[] | undefined;
//   router: NextRouter;
// }

// // Define a main body component that renders the Photo Quick View part
// const PhotoQuickView: FC<PhotoQuickViewProps> = ({ filename, router }) => {
//   //Redux toolkit
//   const {
//     isAuthenticated,
//     userName,
//     userAvatar,
//     postPhoto,
//     userCollects,
//     userLikes,
//     userID,
//     collected,
//     liked,
//     isLoading,
//   } = useSelector((state: RootState) => ({
//     ...state.auth,
//     ...state.quickView,
//   }));

//   const dispatch = useDispatch<AppDispatch>();

//   // fetch get user avatar,username,post image, collect/like status, collect/like count
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         dispatch(setLoading(true)); // Set loading state to true before fetching data
//         const response = await getInitialData(filename);
//         dispatch(setQuickViewData(response.data));
//       } catch (error: any) {
//         console.error(error);
//       } finally {
//         dispatch(setLoading(false)); // Set loading state to false after fetching data
//       }
//     };
//     fetchData();
//   }, [filename, dispatch]);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Grid
//           container
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//         >
//           {/* 1.User info and buttons */}
//           <Grid item>
//             <Grid container justifyContent="space-between" direction="row">
//               {/* Avatar and username */}
//               <Grid item>
//                 <UserName
//                   userID={userID}
//                   userAvatar={userAvatar}
//                   userName={userName}
//                 />
//               </Grid>
//               {/* Buttons */}
//               <Grid item xs={12} md={6}>
//                 <Grid
//                   container
//                   direction="row"
//                   justifyContent="space-around"
//                   spacing={2}
//                   sx={{ mr: 2 }}
//                 >
//                     <Hidden mdDown>
//                   <Grid item>
//                       <CollectButton
//                         isAuthenticated={isAuthenticated}
//                         filenameString={filename}
//                         userCollects={userCollects}
//                         collected={collected}
//                         router={router}
//                         /></Grid>
//                       <Grid item>
//                       <LikeButton
//                         isAuthenticated={isAuthenticated}
//                         filenameString={filename}
//                         userLikes={userLikes}
//                         liked={liked}
//                         router={router}
//                         /></Grid>
//                       <Grid item>
//                       <DownloadImage
//                         isAuthenticated={isAuthenticated}
//                         filenameString={filename}
//                         router={router}
//                       /></Grid>
//                     </Hidden>
//                     {/* </Grid> */}
//                     {/* <Grid item> */}
//                     <Hidden mdUp>
//                       <HamburgerMenu
//                         isAuthenticated={isAuthenticated}
//                         filenameString={filename}
//                         userCollects={userCollects}
//                         collected={collected}
//                         userLikes={userLikes}
//                         liked={liked}
//                         router={router}
//                       />
//                     </Hidden>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//           {/* 2. Post image */}
//           <Grid item>{postPhoto && <PostImage postPhoto={postPhoto} />}</Grid>
//           {/* 3. Delete button */}
//           <Grid item>
//             <DeletePostButton filenameString={filename} />
//           </Grid>
//         </Grid>
//       )}
//     </>
//   );
// };

// export default PhotoQuickView;
