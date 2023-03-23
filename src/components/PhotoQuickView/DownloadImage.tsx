import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import axiosRequest from "../../utils/axiosRequest";
import { getDownloadImage } from "../../axiosRequest/api/photoQuickView";
import { NextRouter } from "next/router";

export interface DownloadImageProps {
  filenameString: string | string[] | undefined;
  router: NextRouter;
  isAuthenticated: boolean;
}

//Photo quick view page download button
const DownloadImage = (props: DownloadImageProps) => {
  const [presignedUrl, setPresignedUrl] = useState("");
  const downLoadImages = async () => {
    try {
      const response = await getDownloadImage(props.filenameString);
      // const response = await getDownloadImage(props.filename);
      // const response = await axiosRequest(
      //   `/api/download?filename=${props.filename}`,
      //   "GET"
      // { responseType: "blob" }

      console.log(response);
      console.log(response.data);
      setPresignedUrl(response.data);
      // const url = response.data;
      // download(url);
      // download(response.data);
      // saveAs(response.data, "filename");
      ////////////////////////////////////////////////////////
      //1. open in a new window
      // const downloadLink = document.createElement("a");
      // console.log(downloadLink);
      // downloadLink.href = presignedUrl;
      // downloadLink.download = `${props.filename}`;
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      // document.body.removeChild(downloadLink);
      ////////////////////////////////////////////////////////////////
      // downloadLink.dispatchEvent(new MouseEvent('click')
      window.open(response.data, "_blank");
      // router.push(`${response.data}`);

      //2. blob
      // const buffer = await response.data.arrayBuffer();
      // const url = window.URL.createObjectURL(new Blob([response.data]));
      // console.log(url);
      // const link: HTMLAnchorElement = document.createElement("a");
      // link.href = url;
      // link.setAttribute("download", `${props.filename}`);
      // document.body.appendChild(link);
      // link.click();
      // link.remove();
      ////////////////////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////
      // fetch(response.data, { mode: "no-cors" })
      //   .then((response) => response.blob())
      //   .then((blob) => {
      //     let blobUrl = window.URL.createObjectURL(blob);
      //     let a = document.createElement("a");
      //     // a.download = response.data.replace(/^.*[\\\/]/, "");
      //     a.download = response.data;
      //     a.href = blobUrl;
      //     document.body.appendChild(a);
      //     a.click();
      //     // a.remove();
      //   });
      ////////////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////
      // router.push(`${response.data}`);
      // const buffer = await response.data.arrayBuffer();
      // const blob = new Blob([buffer], { type: "image/jpeg" });
      // const link: HTMLAnchorElement = document.createElement("a");
      // link.href = URL.createObjectURL(blob);
      // link.download = `${filename}`;
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      ////////////////////////////////////////////////////////////////
      // router.push("/payment");
    } catch (error: any) {
      return error.message;
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
        {/* <Link
          // href={`/download/${filename}`}
          href={presignedUrl}
          sx={{ textDecoration: "none", color: "#fff" }}
          download
          // target={"_blank"}
        > */}
        <a href={presignedUrl}>d</a>
        {/* <a href={presignedUrl} download={props.filename}>
          d
        </a> */}
        Download
        {/* </Link> */}
      </Button>
    </>
  );
};

export default DownloadImage;
