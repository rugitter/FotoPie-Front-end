import React, { useEffect, useState, ChangeEvent } from "react";
import { createImage } from "../../axiosRequest/api/createImage";
import Image from "mui-image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";

// Create the component
const NewImage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [url_1, setUrl_1] = useState("");
  const [url_2, setUrl_2] = useState("");
  const [url_3, setUrl_3] = useState("");
  const [url_4, setUrl_4] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await createImage({
        prompt: inputValue,
      });
      if (response.data) {
        setUrl_1(response.data.url_1);
        setUrl_2(response.data.url_2);
        setUrl_3(response.data.url_3);
        setUrl_4(response.data.url_4);
      }
    } catch (error) {
      console.error("Error fatching URLs", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
          width: "75%",
        }}
      >
        <TextField
          fullWidth
          label="Create anything in your mind.."
          value={inputValue}
          onChange={handleChange}
          variant="outlined"
          sx={{ marginRight: 1, flexGrow: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          endIcon={<SendIcon />}
          sx={{
            backgroundColor: "white",
            color: "purple",
            height: "100%",
            p: 1.7,
          }}
          size="medium"
        >
          Generate
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px",
          "& > img": {
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: {
              xs: "calc(100% - 8px)",
              sm: "calc(50% - 8px)",
              md: "calc(25% - 8px)",
            },
            maxWidth: "20%",
            objectFit: "cover",
          },
        }}
      >
        <Image src={url_1} alt="image" />
        <Image src={url_2} alt="image" />
        <Image src={url_3} alt="image" />
        <Image src={url_4} alt="image" />
      </Box>
    </Box>
  );
};

export default NewImage;
