import Stack from "@mui/material/Stack";
import Header from "../src/components/AdminManage/Header";
import Main from "../src/components/AdminManage/Main";
import Copyright from "../src/components/Copyright";

// Define a component that renders the form
export default function AdminManager() {
  return (
    <>
      <Stack>
        <Header />
        <Main />
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Stack>
    </>
  );
}
