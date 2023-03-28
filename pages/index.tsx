import Container from "@mui/material/Container";
import NavBar from "../src/components/NavBar/NavBar";
import Header from "../src/components/Header";
import Box from "@mui/material/Box";
import PostList from "../src/components/PostList/PostList";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { PhotoQuickViewStyles } from "../src/components/PhotoQuickView/PhotoQuickView.style";
import PhotoQuickView from "../src/components/PhotoQuickView/PhotoQuickView";

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
      <Box
        sx={{
          backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.1)
              ),
              url(../../background.jpg)`,

          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          backgroundPosition: "center", 
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <NavBar isFixed={true} />
          <Header />
        </div>
      </Box>

      <Box
        sx={{
          maxWidth: "1440px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box sx={{ marginLeft: "30px", marginRight: "30px" }}>
          <PostList handleOpen={handleOpen} />
        </Box>
      </Box>
      {/* Modal popup window -- Photo Quick View page*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={PhotoQuickViewStyles}>
          <PhotoQuickView filename={selectedFilename} router={router} />
        </Box>
      </Modal>
    </Box>
  );
}
