import { useState } from "react";
import { Text, Image, SimpleGrid,Group } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import Box from "@mui/material/Box";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";

export default function Demo() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        //sx={{width:"50%"}}
      />
    );
  });

  return (
    <div>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        onDrop={setFiles}
        
      >
        <Text align="center">Drop images here</Text>
        <Group position="center">
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
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
        
            <Box width="20%">{previews}</Box>
          </div>
          
        </Group>
      </Dropzone>
    </div>
  );
}
