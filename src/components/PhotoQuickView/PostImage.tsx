import Image from "mui-image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export interface PostImageProps {
  postPhoto: string;
}

const PostImage = ({ postPhoto }: PostImageProps) => {
  return (
    <>
      <Container
        sx={{
          m: "auto",
          width: "auto",
          height: "70vh",
        }}
      >
        <Image
          alt="image"
          src={postPhoto}
          width="auto"
          style={{ objectFit: "contain" }}
        />
      </Container>
    </>
  );
};

export default PostImage;
