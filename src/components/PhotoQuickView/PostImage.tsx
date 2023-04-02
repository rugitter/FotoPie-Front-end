import { useMediaQuery } from "@mui/material";
import Image from "mui-image";

export interface PostImageProps {
  postPhoto: string;
}

const PostImage = ({ postPhoto }: PostImageProps) => {
  const matches390px = useMediaQuery("(min-width:390px)");
  const matches600px = useMediaQuery("(min-width:600px)");
  const matches900px = useMediaQuery("(min-width:900px)");
  const matches1200px = useMediaQuery("(min-width:1200px)");
  const matches1536px = useMediaQuery("(min-width:1536px)");
  let imageHeight = 0;
  if (matches1536px) {
    imageHeight = 650;
  } else if (matches1200px) {
    imageHeight = 600;
  } else if (matches900px) {
    imageHeight = 500;
  } else if (matches600px) {
    imageHeight = 350;
  } else if (matches390px) {
    imageHeight = 200;
  } else {
    imageHeight = 150;
  }

  return (
    <>
      <Image
        alt="image"
        src={postPhoto}
        fit="contain"
        duration={0.5}
        height={imageHeight}
      />
    </>
  );
};

export default PostImage;
