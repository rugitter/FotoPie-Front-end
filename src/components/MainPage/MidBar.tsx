import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import styles from "./MainPage.module.css";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";

export default function MidBar() {
  return (
    <Grid container sx={{ width: "50%" }}>
      {/* Home button */}
      <Grid item xs={12} sm={6} md={3}>
        <Button
          variant="outlined"
          sx={{
            fontSize: "17px",
            borderRadius: 10,
            p: 1.7,
            pl: 6,
            pr: 6,
            ":hover": { bgcolor: "#8777D9", border: "none" },
            textTransform: "none",
            backgroundColor: "#8777D9",
            border: "none",
          }}
          size="large"
        >
          <Link href="/" underline="none" sx={{ color: "white" }}>
            Home
          </Link>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        {/* Explore button */}
        <Button
          variant="outlined"
          sx={{
            fontSize: "17px",
            borderRadius: 10,
            p: 1.7,
            pl: 5,
            pr: 5,
            ":hover": { bgcolor: "#EAE6FF", border: "none" },
            textTransform: "none",
            border: "none",
          }}
          size="large"
        >
          <Link
            href="/category/category-main-page"
            underline="none"
            sx={{ color: "black" }}
          >
            Explore
          </Link>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        {/* AI Creating button */}
        <Button
          variant="outlined"
          sx={{
            fontSize: "17px",
            borderRadius: 10,
            p: 1.7,
            pl: 5,
            pr: 5,
            ":hover": { bgcolor: "#EAE6FF", border: "none" },
            textTransform: "none",
            border: "none",
          }}
          size="large"
        >
          <Link href="/create-image" underline="none">
            <span className={styles.gradientText}>AI Creating</span>
          </Link>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        {/* AI Simulating button */}
        <Button
          variant="outlined"
          sx={{
            fontSize: "17px",
            borderRadius: 10,
            p: 1.7,
            pl: 5,
            pr: 5,
            ":hover": { bgcolor: "#EAE6FF", border: "none" },
            textTransform: "none",
            border: "none",
          }}
          size="large"
        >
          <Link href="/create-variation" underline="none">
            <span className={styles.gradientText}>AI Simulating</span>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
