import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Header from "../src/components/AdminManage/Header";
import Main from "../src/components/AdminManage/Main";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center" m="20px auto">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        FotoPie
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function AdminManage() {
  return (
    <>
      <Stack>
        <Header />
        <Main />
        <Copyright />
      </Stack>
    </>
  );
}
