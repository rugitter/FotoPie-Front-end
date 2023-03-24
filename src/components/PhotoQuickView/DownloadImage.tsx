import type { NextPage } from "next";
import { NextRouter } from "next/router";
import { getDownloadImage } from "../../axiosRequest/api/photoQuickView";
import DownloadImage from "./DownloadImage";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";

export interface DownloadImageProps {
  filenameString: string | string[] | undefined;
  router: NextRouter;
  isAuthenticated: boolean;
}

const DownloadButton: NextPage<DownloadImageProps> = ({
  filenameString,
  router,
  isAuthenticated,
}) => {
  const downLoadImages = async () => {
    if (!isAuthenticated) router.push("/login");
    // if (isAuthenticated) {
      const response = await getDownloadImage(filenameString);
      const presignedUrl = response.data.url;
      console.log(response);
      console.log(response.status);
      switch (response.status) {
        case 200: {
          // try {
          // Use the proxy url to fetch photo
          const proxyUrl = `/api/download-image?presignedUrl=${encodeURIComponent(
            presignedUrl
          )}`;
          const response = await fetch(proxyUrl);
          console.log("response", response);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = `${filenameString}`;
          link.click();
          URL.revokeObjectURL(url);
          break;
          // } catch (error) {
          // console.error("Failed to download the image:", error);
          // }
        }

        case 403: {
          console.log(response.data.message);
          router.push("/subscription");
          break;
        }
        default: {
          break;
        }
      // }
    }
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{
          opacity: { xs: 0, sm: 1 },
          bgcolor: "secondary.main",
        }}
        startIcon={<DownloadIcon />}
        onClick={downLoadImages}
      >
        Download
      </Button>
    </>
  );
};
export default DownloadButton;
