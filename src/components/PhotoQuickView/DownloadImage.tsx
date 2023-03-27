import type { NextPage } from "next";
import { NextRouter } from "next/router";
import { getDownloadImage } from "../../axiosRequest/api/photoQuickView";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";

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
    if (isAuthenticated) {
      try {
        //get presigned url
        const response = await getDownloadImage(filenameString);
        const presignedUrl = response.data.url;

        //use proxy url to download image
        const proxyUrl = `/api/download-image?presignedUrl=${encodeURIComponent(
          presignedUrl
        )}`;
        const res = await fetch(proxyUrl);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${filenameString}`;
        link.click();
        URL.revokeObjectURL(url);

      } catch (error: any) {
        if (error?.response?.status === 404) {
          router.push("/subscription");
        }
      }
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
