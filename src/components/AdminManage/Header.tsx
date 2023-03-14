import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

//Render header part of admin manager page
const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    accessToken !== null ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  //remover access token to redirect to admin sign in page
  const logOutHandler = () => {
    window.localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    //redirect to admin sign in page
    router.push("/admin-signin");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          minHeight: "80px",
          bgcolor: "secondary.main",
          color: "primary",
        }}
      >
        <Box sx={{ ml: "30px" }}>
          <Typography variant="h5" sx={{ minWidth: 100 }}>
            FotoPie Admin Manager
          </Typography>
        </Box>
        {isLoggedIn ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              mr: "30px",
            }}
          >
            <Button variant="outlined" onClick={logOutHandler}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              mr: "30px",
            }}
          >
            <Button variant="outlined" onClick={logOutHandler}>
              Login
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Header;
