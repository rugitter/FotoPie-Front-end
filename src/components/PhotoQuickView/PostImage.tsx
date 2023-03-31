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
        <img
          alt="image"
          src={postPhoto}
          style={{ maxWidth: "100%", objectFit: "contain", height: "600px" }}
        />
      </Container>
    </>
  );
};

export default PostImage;
