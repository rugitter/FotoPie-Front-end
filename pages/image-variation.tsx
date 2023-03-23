import { StrictMode } from "react";
import React, { useState } from "react";
import NavBar from "../src/components/NavBar";
import Button from "@mui/material/Button";
import { AttachMoney } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material";
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


export default function imageVariation() {

    const [status, setStatus] = useState("");

    const handleChangeStatus = (file: IFileWithMeta, status: StatusValue) => {
        testhandleChangeStatus(file, status);
    };
    
    const testhandleChangeStatus = async (
        file: IFileWithMeta,
        status: StatusValue
      ) => {
        const { meta } = file;
        console.log(status, meta);
        setStatus(status);
        if (status === "done") {
          const formData = new FormData();
          formData.append("file", file.file);
    
        //   try {
        //     const response = await uploadPhoto(formData);
        //     console.log(
        //       response.data.filename,
        //       response.data.original_path,
        //       response.data.compression_path
        //     );
          
        //     return { meta: response };
        //   } catch (error) {
        //     console.error(error);
        //     return error;
        //   }
            
            
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
              fontSize: "20px",
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
          width: 650,
          height: 300,
          border: "4px dashed grey", // set border style
          borderRadius: "10px", // set border radius
          padding: "20px",
          overflow: "hidden",
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
    
    //   const router = useRouter();
    
    //   const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    //     try {
          
    
        //   const response = await uploadPost({
        //     ...data,
        //     filename: filename,
        //     orginalFilePath: OrginalFilePath,
        //     compressFilePath: CompressFilePath,
        //   });
        //   console.log(response);
    
    //       if (response.status === 200) {
    //         router.push("verifyemail");
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    

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
            }}
                >
           
            {/* <FormProvider {...methods}> */}
              <Box
                component="form"
                // onSubmit={methods.handleSubmit(onSubmit)}
                sx={{
                  mt: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "35vh",
                  }}
                >
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
  
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send
                  {/* <Link href="verifyemail"></Link> */}
                </Button>
  
                <Grid container justifyContent="flex-end">
                  <Grid item></Grid>
                </Grid>
              </Box>
            {/* </FormProvider> */}
          </Box>
  
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </>

    )
    
   

   



    
 }
