import React from 'react'
import Link from 'next/link'
import { Alert } from '@mui/material'
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "../../src/components/Copyright"
import axios from "axios";
import axiosRequest from "../../src/utils/axiosRequest";

export default function Activated() {
    const router = useRouter()
    // const{token} = router.query.token
    const { token } = router.query

    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    axiosRequest( 
        "user/signup", "POST", {"token":token}, config)
        .then(response => response.status)
        .catch(err => console.log(err));
  

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        }}
      >

        <Typography component="h1" variant="h6">
          User Activation 
        </Typography>
    
        <Alert severity='success'>
                  You have been successfully activated. You can login now!
                  {/* {token} */}

        </Alert>

        <Button
          href="http://localhost:3000/login"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>
    
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}
