import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { IFileWithMeta, StatusValue } from 'react-dropzone-uploader';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import axios, { AxiosRequestConfig, Method } from "axios";



export default function Uploader() {
  const [status, setStatus] = useState([]);

  const API_ENDPOINT = "https://882yhgxvdh.execute-api.ap-southeast-2.amazonaws.com/getPresignedImageURL";

  const handleChangeStatus = async (
    file: IFileWithMeta,
    status: any,
  ): Promise<void|{ meta: { [name: string]: any } }> => {
    const { meta } = file;
    console.log(status, meta);
    setStatus(status);

    if (status === "done") {
      try {
        const f = file.file;
        console.log(f);

        // Get request:presignedURL
        const response = await axios({
          method: "GET",
          url: API_ENDPOINT,
        });

        console.log("Response", response);

        // #put request:upload file to S3
        const result = await fetch(response.data.uploadURL, {
          method: "PUT",
          headers: {
            "Content-Type": "image/jpeg",
          },
          body: f,
        });

        console.log("Result:", result.url);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const styles = {
    dropzone: {
      width: 600, height: 300, border: '4px dashed gray', // set border style
      borderRadius: '10px', // set border radius
      padding: '20px',
      overflow: "hidden"
    },
    dropzoneActive: { borderColor: "green" },
    inputLabel: { color: "grey" },
    submitButtonContainer: { display: "none" },
    input: {
      display: "none",
    },
    previewImage: {
      maxWidth: "100%",
      maxHeight: "100%",
      display: "block",
      margin: "0 auto"
    },
    previewContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      borderBottom: "1px solid #ccc",
      overflow: "hidden"
    },
    preview: {
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }
  }


  const inputContentWithIcon = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <FontAwesomeIcon icon={faUpload} style={{ marginBottom: "10px", transform: "scale(1.5)" }} />
    <div style={{ fontSize: "20px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
      <span>Drop files here or click to upload</span>
    </div>
  </div>
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
    <Dropzone
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent={inputContentWithIcon}
      inputContainerStyle={{ border: "none" }}  

      accept="image/*"
     
      styles={styles}
      />
       </div>
  );
}
