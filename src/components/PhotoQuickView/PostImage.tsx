import Image from "mui-image";
import Box from "@mui/material/Box";

export interface PostImageProps {
  postPhoto: string;
}

const PostImage = (props: PostImageProps) => {
  return (
    <>
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
          src={props.postPhoto}
          width="60vw"
          style={{ objectFit: "contain" }}
        />
      </Box>
    </>
  );
};

export default PostImage;
