import React from "react";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import axiosRequest from "../../utils/axiosRequest";
import Link from "../../utils/Link";
// import { saveAs } from "file-saver";
import { getDownloadImage } from "../../axiosRequest/api/photoQuickView";

export interface DownloadImageProps {
  filenameString: string;
  // filename: string | string[] | undefined;
}

//Photo quick view page download button
const DownloadImage = (props: DownloadImageProps) => {
  const [presignedUrl, setPresignedUrl] = useState("");
  const downLoadImages = async () => {
    // setIsLoading(true);
    try {
      // const response = await getDownloadImage(props.filename);
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
      // download(response.data);
      // getBase64(response.data);

      // const blob = new Blob([response.data],{type:response.headers['content-type']})
      // const url = response.data;
      // const url = window.URL.createObjectURL(new Blob([response.data]));
      // // const url = window.URL.createObjectURL(response.data);
      // const link = document.createElement("a");
      // link.href = url;
      // link.href = window.URL.createObjectURL(blob);
      // link.download = `${filename}`;
      // link.href = response.data;
      // link.setAttribute("download", "image.jpg");
      // document.body.appendChild(link);
      // link.setAttribute("target", "_blank");
      // document.body.appendChild(link);
      // link.click();

      // downloadImage(presignedUrl);
      // const downloadLink = document.createElement("a");
      // console.log(downloadLink)
      // downloadLink.href = presignedUrl;
      // downloadLink.download = `${filename}`;
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      // document.body.removeChild(downloadLink);
      // return response.data;
      // blobImage(response.data);
      ////////////////////////////////////////////////////////////////
      // // return response.data;
      // setPresignedUrl(response.data)
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
      // setRequestError(error.message);
    }
  };
  // const download = async(url: string) => {
  //   let eleA = document.createElement("a");
  //   let blob = await url.blob().catch((e) => {
  //     console.log(e);
  //   });
  //   if (!blob) {
  //     return;
  //   }
  //   eleA.href = URL.createObjectURL(blob);
  //   eleA.download = "test.jpg";

  //   eleA.click();
  // };
  // function getBase64(imgUrl: string) {
  //   window.URL = window.URL || window.webkitURL;
  //   let xhr = new XMLHttpRequest();
  //   xhr.open("get", imgUrl, true);
  //   xhr.responseType = "blob";
  //   xhr.onload = function () {
  //     if (this.status == 200) {
  //       let blob = this.response;
  //       console.log("blob:", blob);
  //       let oFileReader = new FileReader();
  //       oFileReader.onload = function (e) {
  //         let base64 = e.target.result;
  //         console.log(base64);
  //       };
  //       oFileReader.readAsDataURL(blob);
  //     }
  //   };

  //3. canvas
  // const download=() => {
  //   let img = new Image()
  //   img.setAttribute('crossOrigin', 'Anonymous')
  //   img.onload = function(){
  //     let canvas = document.createElement('canvas')
  //     let context = canvas.getContext('2d')
  //     canvas.width = img.width
  //     canvas.height = img.height
  //     context.drawImage(img, 0, 0, img.width, img.height)
  //     let url = canvas.toDataURL('images/png')
  //     let a = document.createElement('a')
  //     let event = new MouseEvent('click')
  //     a.download = picName || 'default.png'
  //     a.href = url
  //     a.dispatchEvent(event)
  // }

  ////////////////////////////////////////////////////////////////

  // const download = (url: string) => {
  //   fetch(url, {
  //     method: "GET",
  //     mode: "cors",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.blob();
  //       }
  //       throw new Error("Network response was not ok.");
  //     })
  //     .then((blob) => {
  //       // 创建一个 <a> 元素并设置它的 download 属性
  //       const a = document.createElement("a");
  //       a.href = URL.createObjectURL(blob);
  //       a.download = "image.jpg";
  //       a.style.display = "none";
  //       // 将 <a> 元素添加到文档中
  //       document.body.appendChild(a);
  //       // 模拟点击 <a> 元素来开始下载
  //       a.click();
  //       // 从文档中移除 <a> 元素
  //       document.body.removeChild(a);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // };

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
        <Link
          // href={`/download/${filename}`}
          href={presignedUrl}
          sx={{ textDecoration: "none", color: "#fff" }}
          download
          // target={"_blank"}
        >
          <a href={presignedUrl}>d</a>
          {/* <a href={presignedUrl} download={props.filename}>
          d
        </a> */}
          Download
        </Link>
      </Button>
    </>
  );
};

export default DownloadImage;
