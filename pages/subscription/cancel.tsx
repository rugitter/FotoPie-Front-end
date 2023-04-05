import Copyright from "../../src/components/Copyright";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import NavBar from "../../src/components/NavBar/NavBar";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "mui-image";

export default function SubscriptionPage() {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "30%" }}>
          <Image src="/payment-cancelled.jpg" alt=""></Image>
        </Box>
        <h1>Payment Cancelled</h1>
        <br />
        <Link href="/" passHref style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Home Page
          </Button>
        </Link>
      </Box>
      <Copyright />
    </>
  );
}
