import Stack from "@mui/material/Stack";
import Header from "../src/components/AdminManage/Header";
import Main from "../src/components/AdminManage/Main";
import Copyright from "../src/components/Copyright";
import { useCheckToken } from "../src/hooks/useCheckToken";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

// Define a component that renders the page
export default function AdminManager() {
  useCheckToken();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Stack>
        <Header />
        {isAuthenticated ? <Main /> : ""}
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Stack>
    </>
  );
}
