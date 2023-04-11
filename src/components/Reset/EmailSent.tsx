import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Copyright from "../Copyright";
import { CssBaseline } from "@mui/material";

function EmailSent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <img src="/email-sent.jpg" alt="" />
            <h3>Email Has Been Sent Successfully</h3>
            <h3>Please Verify Your Email Before Logging In</h3>
            <div>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#8777D9", // Set background color
                  color: "#fff", // Set text color
                  "&:hover": {
                    bgcolor: "#8000ff", // Set background color on hover
                  },
                }}
              >
                <Link href="/login" color="inherit" underline="none">
                  Login
                </Link>
              </Button>
            </div>
            <br />
            <br />
            <br />
          </Box>
        </Box>
      </Box>
      <Copyright />
    </Box>
  );
}

export default EmailSent;
