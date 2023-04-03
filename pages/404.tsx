import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Copyright from "../src/components/Copyright";

function NotFound() {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "30px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src="/404.jpg"
          alt=""
          style={{ objectFit: "contain", maxHeight: "60vh", maxWidth: "100%" }}
        />
        <h3>Oops, Something Went Wrong...</h3>

        <div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#2196f3", // Set background color
              color: "#fff", // Set text color
              "&:hover": {
                bgcolor: "#1976d2", // Set background color on hover
              },
            }}
          >
            <Link href="/" color="inherit" underline="none">
              Go Back
            </Link>
          </Button>
        </div>
        <br />
        <br />
        <br />
        <Copyright />
      </Box>
    </Box>
  );
}

export default NotFound;
