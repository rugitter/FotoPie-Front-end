import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Header from "../src/components/AdminManage/Header";
import Main from "../src/components/AdminManage/Main";
import Copyright from "../src/components/Copyright";

// Define a component that renders the page
export default function AdminManager() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    accessToken !== null ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return (
    <>
      <Stack>
        <Header />
        {isLoggedIn ? <Main /> : ""}
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Stack>
    </>
  );
}
