import NavBar from "../src/components/NavBar/NavBar";
import Header from "../src/components/Header";
import Box from "@mui/material/Box";
import PostList from "../src/components/PostList/PostList";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import PhotoQuickView from "../src/components/PhotoQuickView/PhotoQuickView";
import MidBar from "../src/components/MainPage/MidBar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export default function Home() {
  const router = useRouter();
  const [selectedFilename, setSelectedFilename] = useState<
    string | undefined
  >();

  const [open, setOpen] = useState(false);
  //open modal popup window
  const handleOpen = (filename: string) => {
    setSelectedFilename(filename);
    setOpen(true);
  };
  //close modal popup window
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* Navbar and header */}
      <Box
        sx={{
          backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.3)
              ),
              url(https://source.unsplash.com/random)`,
          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          height: "600px",
          backgroundPosition: "center",
          // overflow: "auto",
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <NavBar isFixed={true} />
          <Header />
        </div>
      </Box>

      {/* MidBar */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <MidBar />
      </Box>

      {/* Photowall */}
      <Box
        sx={{
          maxWidth: "1600px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "25px",
            marginLeft: "43px",
            marginBottom: "20px",
            fontFamily: "Work Sans', sans-serif",
          }}
        >
          Trending Photos
        </Typography>

        <Box sx={{ marginLeft: "30px", marginRight: "50px" }}>
          <PostList handleOpen={handleOpen} />
        </Box>
      </Box>

      {/* Modal popup window -- Photo Quick View page*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backgroundImage: `
        linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.3)
        )`,
        }}
      >
        <div>
          {/* <CloseButton /> */}
          <Button
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              color: "white",
            }}
            onClick={handleClose}
          >
            {<CloseIcon sx={{ fontSize: 40 }} />}
          </Button>
          {/* Photo quick view popup window */}
          <PhotoQuickView filename={selectedFilename} router={router} />
        </div>
      </Modal>
    </Box>
  );
}
