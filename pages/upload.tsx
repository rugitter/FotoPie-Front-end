import { StrictMode } from "react";
import React, { useState } from "react";
import NavBar from "../src/components/NavBar/NavBar";
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

interface IFormInput {
  description: string;
  tag: string;
  price: number;
}

// Define a component that renders the form
export default function Upload() {
  const [tagValue, setTagValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [desValue, setDesValue] = useState("");
  const [filename, setUploadfileName] = useState({});
  const [OrginalFilePath, setOrginalFilePath] = useState({});
  const [CompressFilePath, setCompressFilePath] = useState({});
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

      try {
        const response = await uploadPhoto(formData);
        console.log(
          response.data.filename,
          response.data.original_path,
          response.data.compression_path
        );
        setUploadfileName(response.data.filename);
        setOrginalFilePath(response.data.original_path);
        setCompressFilePath(response.data.compression_path);
        return { meta: response };
      } catch (error) {
        console.error(error);
        return error;
      }
    }
  };

  // const getUploadParams = () => {
  //   return { url: 'http://localhost:3000/upload' }
  // }

  const formSchema = yup.object().shape({
    description: yup.string().max(50),
    tag: yup.string().max(15),
    price: yup.number(),
  });
  const router = useRouter();
  const methods = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
  });
  // Define a submit handler for the form
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      console.log(filename);

      const response = await uploadPost({
        ...data,
        filename: filename,
        orginalFilePath: OrginalFilePath,
        compressFilePath: CompressFilePath,
      });
      console.log(response);

      if (response.status === 200) {
        router.push("verifyemail");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const priceInputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <AttachMoney />
        {priceValue ? null : "Enter Price"}
      </InputAdornment>
    ),
    onChange: (e: any) => setPriceValue(e.target.value),
  };

  const tagInputProps = {
    startAdornment: (
      <InputAdornment position="start">
        {tagValue ? null : "Enter Tag"}
      </InputAdornment>
    ),
    onChange: (e: any) => setTagValue(e.target.value),
  };

  const DesInputProps = {
    startAdornment: (
      <InputAdornment position="start">
        {desValue ? null : "Enter Description"}
      </InputAdornment>
    ),
    onChange: (e: any) => setDesValue(e.target.value),
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
          }}
        >
          <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={methods.handleSubmit(onSubmit)}
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

              <FormTextField
                name="description"
                label="Description (optional)"
                id="Description"
                autoComplete="Description"
                InputProps={DesInputProps}
              />

              <FormTextField
                name="tag"
                label="Tag (optional)"
                id="Tag"
                autoComplete="Tag"
                InputProps={tagInputProps}
              />

              <FormTextField
                name="price"
                label="Price(optional)"
                id="price"
                type="number"
                autoComplete="price"
                InputProps={priceInputProps}
              />

              <FormControlLabel
                style={{ marginTop: "16px" }}
                control={
                  <Checkbox value="allowExtraEmails" color="primary" required />
                }
                label="I understand that only uploaded photos and
                                 videos that you own the copyright to and that
                                 I have created myself."
              />

              <FormControlLabel
                style={{ marginTop: "16px" }}
                control={
                  <Checkbox value="allowExtraEmails" color="primary" required />
                }
                label="I understand that any depicted people or owners of depicted property
                          gave you the permission to publish the photos and videos."
              />

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
          </FormProvider>
        </Box>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
