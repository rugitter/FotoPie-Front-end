import GalleryPost from "./GalleryPosts";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import PhotoQuickView from "../PhotoQuickView/PhotoQuickView";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
interface GalleryProps {
  profileUserId: string | string[] | undefined;
}
export default function Gallery(props: GalleryProps) {
  //define necessary states for quick-view modal
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
    <>
      <GalleryPost
        profileUserId={props.profileUserId}
        handleOpen={handleOpen}
      />
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
       <Container sx={{ outline: "none" }}>
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
          <PhotoQuickView filename={selectedFilename} router={router} />
        </Container>
      </Modal>
    </>
  );
}
