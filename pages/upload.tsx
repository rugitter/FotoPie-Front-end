import { StrictMode } from "react";
import NavBar from "../src/components/NavBar/NavBar";

import { AttachMoney } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material";
import FormHelperText from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import {
  useForm,
  SubmitHandler,
  FormState,
  FormProvider,
} from "react-hook-form";
import FormTextField from "../src/components/LoginForm/FormTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import InputAdornment from "@mui/material/InputAdornment";
import * as yup from "yup";
import axiosRequest from "../src/utils/axiosRequest";
import "react-dropzone-uploader/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosRequestConfig, Method } from "axios";
import { uploadPhoto, uploadPost } from "../src/axiosRequest/api/posts";
import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Image,
  SimpleGrid,
  MantineTheme,
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import {
  Dropzone,
  DropzoneProps,
  IMAGE_MIME_TYPE,
  FileWithPath,
} from "@mantine/dropzone";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Image from "mui-image";
import React, { useState, useEffect, useRef } from "react";
import Copyright from "../src/components/Copyright";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./NewVariation.module.css";
import Button from "@mui/material/Button";

interface IFormInput {
  description: string;
  tag: string;
  price: number;
}

// Define a component that renders the form
export default function Upload(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  const [tagValue, setTagValue] = useState("");
  // const [priceValue, setPriceValue] = useState("");
  const [desValue, setDesValue] = useState("");
  const [filename, setUploadfileName] = useState({});
  const [OrginalFilePath, setOrginalFilePath] = useState({});
  const [CompressFilePath, setCompressFilePath] = useState({});
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        sx={{ width: "20%" }}
      />
    );
  });
 


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

      if (response.status === 201) {
        router.push("/upload");
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  

  // const priceInputProps = {
  //   startAdornment: (
  //     <InputAdornment position="start">
  //       <AttachMoney />
  //       {priceValue ? null : "Enter Price"}
  //     </InputAdornment>
  //   ),
  //   onChange: (e: any) => setPriceValue(e.target.value),
  // };

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
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles}/>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
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
                mt: 2,

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Dropzone
                  onDrop={async (files) => {
                    console.log("accepted files", files);
                    setFiles(files);

                    const formData = new FormData();
                    formData.append("file", files[0]);
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
                  }}
                  onReject={(files) => console.log("rejected files", files)}
                  maxSize={4 * 1024 ** 2}
                  accept={IMAGE_MIME_TYPE}
                  //accept={["image/png", "image/jpeg", "image/sgv+xml", "image/gif"]}
                  multiple={false}
                  //autoFocus={true}
                  radius="xl"
                  sx={(theme) => ({
                    minHeight: rem(100),
                    maxWidth: rem(800),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],

                    "&[data-accept]": {
                      color: theme.white,
                      backgroundColor: theme.colors.blue[6],
                    },

                    "&[data-reject]": {
                      color: theme.white,
                      backgroundColor: theme.colors.red[6],
                    },
                    "&[data-idle]": {
                      color: theme.black,
                      backgroundColor: "#eae6ff",
                    },
                  })}
                  {...props}
                >
                  <Group
                    position="center"
                    spacing="xl"
                    style={{ minHeight: rem(120), pointerEvents: "none" }}
                  >
                    <Dropzone.Accept>
                      <IconUpload
                        size="3.2rem"
                        stroke={1.5}
                        color={
                          theme.colors[theme.primaryColor][
                            theme.colorScheme === "dark" ? 4 : 6
                          ]
                        }
                      />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <IconX
                        size="3.2rem"
                        stroke={1.5}
                        color={
                          theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                        }
                      />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <IconPhoto size="3.2rem" stroke={1.5} />
                    </Dropzone.Idle>
                    <div>
                      <Text size="xl" inline>
                        Drag image here or click to select file
                      </Text>
                      <Text size="sm" color="dimmed" inline mt={7}>
                        Attach one image file with a standard format
                      </Text>
                    </div>
                    <Container maxWidth="xs">
                      <SimpleGrid
                        cols={1}
                        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                        mt={previews.length > 0 ? "xl" : 0}
                      >
                        {previews}
                      </SimpleGrid>
                    </Container>
                  </Group>
                </Dropzone>
              </Box>

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

              {/* <FormTextField
                name="price"
                label="Price(optional)"
                id="price"
                type="number"
                autoComplete="price"
                InputProps={priceInputProps}
              /> */}

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
