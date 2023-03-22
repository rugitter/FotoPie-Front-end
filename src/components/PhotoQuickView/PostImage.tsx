import Image from "mui-image";
import Box from "@mui/material/Box";

export interface PostImageProps {
  postPhoto: string;
}

const PostImage = ({ postPhoto }: PostImageProps) => {
  return (
    <>
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
      </Box>
    </>
  );
};

export default PostImage;
