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



export default function BaseDemo(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  
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

  return (
    <>
      <Dropzone
        onDrop={async (files) => {
          console.log("accepted files", files);
          setFiles(files);

          const formData = new FormData();
          formData.append("file", files[0]);
          try {
            const response = await imageVariations(formData);
            console.log(response.data);
            console.log(response.data.urls);
            console.log(response.data.urls.url_1);
            console.log(response.data.urls.url_2);
            setImage1(response.data.urls.url_1);
            setImage2(response.data.urls.url_2);

            //return { meta: response };
          } catch (error) {
            console.error("Error fetching URLs", error);
            //return error;
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
          minHeight: rem(120),
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
            backgroundColor: theme.colors.green[2],
          },
        })}
        {...props}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: rem(220), pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              // color={
              //   theme.colors[theme.primaryColor][
              //     theme.colorScheme === "dark" ? 4 : 6
              //   ]
              // }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              // color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
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
              Attach one image file with standard format, size limit 4mb
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
          {/* <SimpleGrid
            cols={1}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            mt={previews.length > 0 ? "xl" : 0}
          >
            {previews}
          </SimpleGrid> */}
        </Group>
      </Dropzone>

      <Container component="main" sx={{ maxWidth: "80%" }}>
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
              gap: "18px",
              "& > img": {
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: {
                  xs: "calc(100% - 8px)",
                  sm: "calc(50% - 8px)",
                  md: "calc(25% - 8px)",
                },
                maxWidth: "100%",
                objectFit: "cover",
              },
            }}
          >
            <Image src={image1} alt="" />
            <Image src={image2} alt="" />
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 6 }} /> */}
      </Container>
    </>
  );
}

