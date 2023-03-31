import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <MuiLink
        color="inherit"
        href="/"
        sx={{
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        2023 FotoPie Inc. All rights reserved.
      </MuiLink>
    </Typography>
  );
}
