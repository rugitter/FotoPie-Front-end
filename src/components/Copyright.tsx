import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

export const Copyright: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#091e4221",
        opacity: 0.7,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        mt: "70px"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              <Link href="/" underline="none" color="inherit"> {`Copyright @ ${new Date().getFullYear()} FotoPie Inc. All rights reserved. `}</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Copyright;