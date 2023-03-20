import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import CloseButton from "../../src/components/PhotoQuickView/CloseButton";
import MainBody from "../../src/components/PhotoQuickView/MainBody";

// Define a component that renders the page
const PhotoQuickView = () => {
  const router = useRouter();
  const { filename } = router.query;

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
      <MainBody filename={filename} />
    </Stack>
  );
};

export default PhotoQuickView;
