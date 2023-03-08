import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { IFileWithMeta, StatusValue } from 'react-dropzone-uploader';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImages} from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosRequestConfig, Method } from "axios";


export default function Uploader() {
  const [status, setStatus] = useState("");

  const handleChangeStatus = async(file: IFileWithMeta, status: StatusValue): Promise<any>=> {
    const { meta } = file;
    console.log(status, meta);
    setStatus(status);
  
    const formData = new FormData();
    formData.append("file", file.file);
  
    if (status === "done") {
      
      try {
        const response = await axios.patch("http://localhost:9090/api/posts/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        return { meta: response.data };
      } catch (error) {
        console.error(error);
      }
    }
  
    // return an empty object if the upload is not done

  };

  // const getUploadParams = () => {
  //   return { url: 'http://localhost:3000/upload' }
  // };

  const styles = {
    dropzone: {
    width: 650, height: 300, border: '4px dashed grey', // set border style
    borderRadius: '10px', // set border radius
    padding: '20px',
    overflow: "hidden"
    },
    dropzoneActive: { borderColor: "green" },
    inputLabel: { color: "#424242" },
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
    progressBar: {
      backgroundColor: "black",
      color:"black"
    },
    preview: {
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }
  };

  const inputContentWithIcon = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <FontAwesomeIcon icon={faImages} style={{ marginBottom: "10px", transform: "scale(3)"}} />
    <div style={{  margin: "30px 0",  fontSize: "20px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
      <span>Drop files here or click to upload</span>
    </div>
  </div>
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "35vh" }} >
      <Dropzone
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        inputContent={inputContentWithIcon}
        // inputContainerStyle={{ border: "none" }}  
        // getUploadParams={getUploadParams} 
        accept="image/*"
        styles={styles}
      />
    </div>
  );
}