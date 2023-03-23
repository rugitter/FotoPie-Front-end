import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "../../utils/Link";
import Stack from "@mui/material/Stack";

const CloseButton = () => {
  return (
    <>
      <Stack
        sx={{
          position: "absolute",
          top: { xs: 0, md: 40 },
          left: { sm: 20, md: 60 },
          opacity: "1",
        }}
      >
        <Button>
          <Link href="/" sx={{ color: "#fff" }}>
            {<CloseIcon />}
          </Link>
        </Button>
      </Stack>
    </>
  );
};

export default CloseButton;
