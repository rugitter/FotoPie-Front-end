import { useState } from "react";
import { Button } from "@mui/material";
import axiosRequest from "../../utils/axiosRequest";
import { useRouter } from "next/router";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getLikeNumber } from "../../axiosRequest/api/photoQuickView";

export interface LikeButtonProps {
  filenameString: string ;
  // filename: string | string[] | undefined;
  liked: boolean;
  userLikes: number;
}

//Toggle like button and add/delete like number
const LikeButton = (props: LikeButtonProps) => {
  const [userLikes, setUserLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const addToLiked = async () => {
    try {
      const response = await getLikeNumber(props.filenameString);
      // const response = await getLikeNumber(props.filename);

      // const response = await axiosRequest(
      //   `/api/like/${props.filename}`,
      //   "POST",
      //   {
      //     filename: `${props.filename}`,
      //   }
      // );
      const data = response.data;
      setUserLikes(data);
      setLiked((liked) => !liked);
    } catch (error: any) {
      router.push("/login");
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
