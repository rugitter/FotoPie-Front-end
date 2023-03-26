import Container from "@mui/material/Container";
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Header";
import Box from "@mui/material/Box";
import PostList from "../src/components/PostList/PostList";
import { useCheckToken } from "../src/hooks/useCheckToken";
// import Modal from "react-modal";
import { useRouter } from "next/router";
import MainBody from "../src/components/PhotoQuickView/MainBody";
import { useEffect, useState } from "react";
////////////////////////////////////////////////////////////////
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dynamic from "next/dynamic";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  outline: "none",
  boxSizing: "border-box",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
////////////////////////////////////////////////////////////////

// Modal.setAppElement("#__next");

export default function Home() {
  const router = useRouter();
  const [selectedFilename, setSelectedFilename] = useState<
    string | undefined
  >();

  const [open, setOpen] = useState(false);
  const handleOpen = (filename: string) => {
    setSelectedFilename(filename);
    setOpen(true);
    // router.push(`/photo-quick-view/${filename}`, undefined, { shallow: true });
  };
  // const handleClose = () => setOpen(false);
  const handleClose = () => {
    setOpen(false);
    // router.replace(router.pathname, undefined, { shallow: true });
    // router.back();
  };

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     if (url.startsWith("/photo-quick-view/")) {
  //       const filename = url.replace("/photo-quick-view/", "");
  //       handleOpen(filename);
  //     } else {
  //       handleClose();
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router]);

  // const DynamicMainBody = dynamic(
  //   () => import("../src/components/PhotoQuickView/MainBody")
  // );

  return (
    // <Layout>
    <Container>
      <Box
        sx={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url(../../background.jpg)`,

          backgroundSize: "cover",
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // right: 0,
          margin: 0,
          padding: 0,
          // overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <NavBar isFixed={true} />
          <Header />
        </div>
      </Box>

      <PostList handleOpen={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MainBody filename={selectedFilename} router={router} />
          {/* {selectedFilename && (
            <DynamicMainBody filename={selectedFilename} router={router} />
          )} */}
          {/* <MainBody filename={router.query.filename} router={router} /> */}
        </Box>
      </Modal>
    </Container>
  );
}
