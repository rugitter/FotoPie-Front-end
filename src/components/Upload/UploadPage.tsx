import { Box, Grid, Paper } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import { NavBarStyles } from "../../components/NavBar/NavbarBaseline.style";

type PageProps = {
  children: ReactNode;
  randomphoto: string;
};

function UploadPage({ children, randomphoto }: PageProps) {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <Grid
        container
        component="main"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(${randomphoto})`,
          backgroundRepeat: "non-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "95vh",
        }}
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={9}
          lg={7}
          component={Paper}
          elevation={5}
          square
          sx={{
            position: "relative",
            borderRadius: 8,
          }}
        >
          <Box />

          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default UploadPage;
