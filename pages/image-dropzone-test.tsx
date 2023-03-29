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
import { imageVariations } from "../src/axiosRequest/api/imageVariations";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Image from "mui-image";
import { useState } from "react";
export default function DropzoneExample() {
  return (
    <Dropzone
      multiple={false}
      onDrop={(files) => {
        console.log(files);
        // const formData = new FormData();
        // formData.append("file", files[0]);
        // fetch("http://MY_UPLOAD_SERVER.COM/api/upload", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        //   body: formData,
        // })
        //   .then((res) => {
        //     const respJson = res.json();
        //     // console.log("File uploaded", respJson);
        //     // TODO: Update ui and states....
        //     // setUploads(respJson.url);
        //     return respJson;
        //   })
        //   .catch((err) => {
        //     console.log("File upload error", err);
        //     // TODO: Update ui and states with error....
        //   });
      }}
      onReject={(files) => console.log("rejected files", files)}
      accept={IMAGE_MIME_TYPE}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}

const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
  <Group
    position="center"
    spacing="xl"
    style={{ minHeight: 220, pointerEvents: "none" }}
  >
    <ImageUploadIcon
      status={status}
      style={{ color: getIconColor(status, theme) }}
      size={80}
    />

    <div>
      <Text size="xl" inline>
        Drag images here or click to select files
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach as many files as you like, each file should not exceed 5mb
      </Text>
    </div>
  </Group>
);