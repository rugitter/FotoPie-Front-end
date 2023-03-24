import { StrictMode } from "react";
import React, { useState } from "react";
import NavBar from "../src/components/NavBar";
import Button from "@mui/material/Button";
import { AttachMoney } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup, { Alert, AlertTitle } from "@mui/material";
import FormHelperText from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  useForm,
  SubmitHandler,
  FormState,
  FormProvider,
} from "react-hook-form";
import Copyright from "../src/components/Copyright";
import FormTextField from "../src/components/LoginForm/FormTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import InputAdornment from "@mui/material/InputAdornment";
import * as yup from "yup";
import axiosRequest from "../src/utils/axiosRequest";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, { IFileWithMeta, StatusValue } from "react-dropzone-uploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosRequestConfig, Method } from "axios";
import { uploadPhoto, uploadPost } from "../src/axiosRequest/api/posts";
import { imageVariations } from "../src/axiosRequest/api/imageVariations";


export default function imageVariation() {
  const [status, setStatus] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  
  const handleChangeStatus = (file: IFileWithMeta, status: StatusValue) => {
    const { meta } = file;
    console.log(status, meta);
    setStatus(status);
  };

  const handleSubmit = async (files: any) => {
    const f = files[0];
    console.log(f)
    const formData = new FormData();
    formData.append("file", f);
    try {
      const response = await imageVariations(formData);
      if (response.status === 200) {
        console.log(response)
        //setAvatar(response.data.avatarPath);
      }
    } catch (error) {
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Error occurred, unknown origin — <strong>check it out!</strong>
      </Alert>;
      console.error(error);
    }
  };
  
  const inputContentWithIcon = (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FontAwesomeIcon
        icon={faImages}
        style={{ marginBottom: "10px", transform: "scale(3)" }}
      />
      <div
        style={{
          margin: "30px 0",
          fontSize: "24px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Drop files here or click to upload</span>
      </div>
    </div>
  );
    
  const styles = {
    dropzone: {
      width: 700,
      height: 350,
      border: "4px dashed grey", // set border style
      borderRadius: "10px", // set border radius
      padding: "20px",
      overflow: "hidden",
    },
    dropzoneActive: { borderColor: "green" },
    inputLabel: { color: "#424242" },
    input: {
      display: "none",
    },
    previewImage: {
      maxWidth: "100%",
      maxHeight: "100%",
      display: "block",
      margin: "0 auto",
    },
    previewContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      borderBottom: "1px solid #ccc",
      overflow: "hidden",
    },
    progressBar: {
      backgroundColor: "black",
      color: "black",
    },
    preview: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
  };
    
  return (
    <>
      <NavBar isFixed={false} color="#000000" bgColor="#f8f8ff" />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "35vh",
            }}>
            <Dropzone
              onChangeStatus={handleChangeStatus}
              maxFiles={1}
              multiple={false}
              canCancel={false}
              onSubmit ={handleSubmit}
              inputContent={inputContentWithIcon}
              accept="image/*"
              styles={styles}
            />
          </div>
        </Box>
        <Copyright sx={{ mt: 6}} />
      </Container>
    </>
  )
}
