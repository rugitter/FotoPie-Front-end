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
          p: "0",
          // width: "auto",
          width: { xs: "80vw", sm: "auto", md: "auto" },
          // height: { xs: "50%", md: "70vh" },
          height: "auto",
        }}
      >
        <img
          alt="image"
          src={postPhoto}
          style={{ maxWidth: "100%", objectFit: "contain", height: "auto" }}
        />
      </Container>
    </>
  );
};

export default PostImage;

////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import Container from "@mui/material/Container";

// export interface PostImageProps {
//   postPhoto: string;
// }

// const PostImage = ({ postPhoto }: PostImageProps) => {
//   const [height, setHeight] = useState<number>(0);

//   const handleImageLoad = (
//     event: React.SyntheticEvent<HTMLImageElement, Event>
//   ) => {
//     const target = event.target as HTMLImageElement;
//     setHeight(target.offsetHeight);
//   };

//   return (
//     <Container
//       sx={{
//         m: "auto",
//         p: "0",
//         width: "auto",
//         height: height ? `${height}px` : "70vh",
//       }}
//     >
//       <img
//         alt="image"
//         src={postPhoto}
//         style={{ maxWidth: "100%", objectFit: "contain", height: "100%" }}
//         onLoad={handleImageLoad}
//       />
//     </Container>
//   );
// };

// export default PostImage;
