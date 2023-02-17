import React from 'react'
import Link from 'next/link'
import { Alert } from '@mui/material'
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Copyright from "../src/components/Copyright";

const theme = createTheme();

function VerifyEmail () {
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
           sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

      <Typography component="h1" variant="h6">
        Verify Your Email Address
      </Typography>
    
      <div>
        Before proceeding, please check your email for a validation link. If you did not receive the email, 
        <Link underline="hover" color="inherit" href='#'>
          {'click here to request another.'}
        </Link>
      </div>

        <Button
              href="activated"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Verified
        </Button>
        
      </Box>
      <Copyright sx={{ mt: 5 }} />
     </Container>
    </ThemeProvider>
  )
}

export default VerifyEmail