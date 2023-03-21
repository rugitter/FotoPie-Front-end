import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CloseButton from "../../src/components/PhotoQuickView/CloseButton";
import MainBody from "../../src/components/PhotoQuickView/MainBody";
import { useCheckToken } from "../../src/hooks/useCheckToken";

// Define a component that renders the page
const PhotoQuickView = () => {
  useCheckToken();
  const router = useRouter();
  const { filename } = router.query;
  const [filenameString, setFilenameString] = useState<
    string | string[] | undefined
  >("");
  useEffect(() => {
    if (router.isReady && filename) {
    }
    setFilenameString(filename);
  }, [filename, router.isReady]);

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
      {filenameString && <MainBody filename={filenameString} router={router} />}
      {/* <MainBody filenameString={filenameString} /> */}
    </Stack>
  );
};

export default PhotoQuickView;
