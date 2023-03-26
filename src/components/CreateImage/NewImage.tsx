import React, { useState, ChangeEvent } from "react";
import { createImage } from "../../axiosRequest/api/createImage";
import Image from "mui-image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import Copyright from "../Copyright";
import styles from "./NewImage.module.css";

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
      console.error("Error fetching URLs", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          marginBottom: "60px",
          marginTop: "30px",
        }}
      >
        <h2 className={styles.bgText}>
          Start with some detailed descriptions, It may take a few seconds to
          surprise you with the
          <span className={styles.gradientText}> astonishing images</span> ...
        </h2>
        <img src="/create-image.jpg" alt="" className={styles.bgImage} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 8,
          width: "90%",
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
        <Image src={url_1} alt="" />
        <Image src={url_2} alt="" />
        <Image src={url_3} alt="" />
        <Image src={url_4} alt="" />
      </Box>
      <Copyright />
      <br />
    </Box>
  );
};

export default NewImage;
