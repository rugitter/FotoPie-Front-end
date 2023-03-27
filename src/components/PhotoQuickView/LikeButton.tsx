import { Button } from "@mui/material";
import { NextRouter } from "next/router";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { updateLike } from "../../../store/photoQuickView/quickViewAciton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";

export interface LikeButtonProps {
  filenameString: string | string[] | undefined;
  liked: boolean;
  userLikes: number;
  router: NextRouter;
  isAuthenticated: boolean;
}

//Toggle like button and add/delete like
const LikeButton = ({
  filenameString,
  liked,
  userLikes,
  router,
  isAuthenticated,
}: LikeButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const addToLiked = async () => {
    if (!isAuthenticated) router.push("/login");
    if (isAuthenticated) {
      dispatch(updateLike(filenameString));
    }
  };

  return (
    <>
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
    </>
  );
};

export default LikeButton;
