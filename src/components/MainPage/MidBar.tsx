import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from "@mui/material/Link";

export default function MidBar() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>
        <Link href="#" underline="none">
          Home
        </Link>
      </Button>
      <Button>
        <Link href="#" underline="none">
          Explore
        </Link>
      </Button>
      <Button>
        <Link href="#" underline="none">
          AI Image
        </Link>
      </Button>
    </ButtonGroup>
  );
}
