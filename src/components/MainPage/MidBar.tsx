import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import styles from "./MainPage.module.css";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";

export default function MidBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (isSmallScreen) {
    return (
      <FormControl variant="outlined" size="small" sx={{ width: "80%" }}>
        <Select
          label="Menu"
          value=""
          onChange={() => {}}
          displayEmpty
          inputProps={{ "aria-label": "Menu" }}
        >
          <MenuItem value="">
            <em>Menu</em>
          </MenuItem>
          <MenuItem value="/category/category-main-page">
            <Link
              href="/category/category-main-page"
              underline="none"
              sx={{ color: "black" }}
            >
              Explore
            </Link>
          </MenuItem>
          <MenuItem value="/quality-posts">
            <Link
              href="/quality-posts"
              underline="none"
              sx={{ color: "black" }}
            >
              <span className={styles.gradientText}>AIRanking</span>
            </Link>
          </MenuItem>
          <MenuItem value="/create-image">
            <Link href="/create-image" underline="none" sx={{ color: "black" }}>
              <span className={styles.gradientText}>AIDrawing</span>
            </Link>
          </MenuItem>
          <MenuItem value="/create-variation">
            <Link
              href="/create-variation"
              underline="none"
              sx={{ color: "black" }}
            >
              <span className={styles.gradientText}>AICreating</span>
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    return (
      <Grid container sx={{ width: "480px" }}>
        {/* Home button */}
        <Grid item xs={2.4} sm={2.4} md={2.4}>
          <Button
            variant="outlined"
            sx={{
              fontSize: "15px",
              borderRadius: 10,
              p: 1.7,
              pl: 2.5,
              pr: 2.5,
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

        <Grid item xs={2.4} sm={2.4} md={2.4}>
          {/* Explore button */}
          <Button
            variant="outlined"
            sx={{
              fontSize: "15px",
              borderRadius: 10,
              p: 1.7,
              pl: 2.5,
              pr: 2.5,
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

        <Grid item xs={2.4} sm={2.4} md={2.4}>
          {/* Explore button */}
          <Button
            variant="outlined"
            sx={{
              fontSize: "15px",
              borderRadius: 10,
              p: 1.7,
              pl: 2.5,
              pr: 2.5,
              ":hover": { bgcolor: "#EAE6FF", border: "none" },
              textTransform: "none",
              border: "none",
            }}
            size="large"
          >
            <Link href="/quality-posts" underline="none" sx={{ color: "black" }}>
              <span className={styles.gradientText}>AIRanking</span>
            </Link>
          </Button>
        </Grid>

        <Grid item xs={2.4} sm={2.4} md={2.4}>
          {/* AI Creating button */}
          <Button
            variant="outlined"
            sx={{
              fontSize: "15px",
              borderRadius: 10,
              p: 1.7,
              pl: 2.5,
              pr: 2.5,
              ":hover": { bgcolor: "#EAE6FF", border: "none" },
              textTransform: "none",
              border: "none",
            }}
            size="large"
          >
            <Link href="/create-image" underline="none">
              <span className={styles.gradientText}>AIDrawing</span>
            </Link>
          </Button>
        </Grid>

        <Grid item xs={2.4} sm={2.4} md={2.4}>
          {/* AI Simulating button */}
          <Button
            variant="outlined"
            sx={{
              fontSize: "15px",
              borderRadius: 10,
              p: 1.7,
              pl: 2.5,
              pr: 2.5,
              ":hover": { bgcolor: "#EAE6FF", border: "none" },
              textTransform: "none",
              border: "none",
            }}
            size="large"
          >
            <Link href="/create-variation" underline="none">
              <span className={styles.gradientText}>AICreating</span>
            </Link>
          </Button>
        </Grid>
      </Grid>
    );
  }
}
