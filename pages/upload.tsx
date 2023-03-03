import { StrictMode } from "react";
import React, { useState } from "react";
import { Helmet } from "react-helmet"
import Uploader from "../src/components/upload/uploader";


export default function MyDropzone() {


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="How to upload files to S3 from your react app "
        />
        
      </Helmet>
      
      <Uploader/>


    </div>

    // <Dropzone
    //   getUploadParams={getUploadParams}
    //   onChangeStatus={handleChangeStatus}
    //   onSubmit={handleSubmit}
    //   accept="image/*,audio/*,video/*"
    // />
  )
}