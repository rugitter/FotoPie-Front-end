import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
// import { useRouter } from "next/router";
import CloseButton from "../../src/components/PhotoQuickView/CloseButton";
import MainBody from "../../src/components/PhotoQuickView/MainBody";
import { useCheckToken } from "../../src/hooks/useCheckToken";


// Define a component that renders the page
const PhotoQuickView = () => {
  useCheckToken();
  // const router = useRouter();
  // const { filename } = router.query;
  // const filenameString = filename as string;

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        minWidth: "500px",
        bgcolor: "rgba(0,0,0,0.8)",
        position: "relative",
        m: "auto",
      }}
    >
      {/*  close button */}
      <CloseButton />

      {/* main body */}
      <MainBody />
      {/* <MainBody filenameString={filenameString} /> */}
    </Stack>
  );
};

export default PhotoQuickView;
