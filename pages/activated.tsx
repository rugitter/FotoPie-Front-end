import React from 'react'
import Link from 'next/link'
import { Alert } from '@mui/material'
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "../src/components/Copyright";
// import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import axios from "axios";

export default function Activated () {
  
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
        </Alert>

        <Button
          href="login"
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

