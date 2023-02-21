import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import DataTable from "../../utils/DataTable/DataTable";
import axiosRequest from "../../utils/axiosRequest";

const Main = () => {
  const [active, setActive] = useState("");

  const getAllUser = async () =>{
    try {
      const response = await axiosRequest("/admin/user", "GET");
      console.log(response);
      
    } catch (error) {
      
    }

  }
  return (
    <>
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
          borderBottom: "1px solid #3d3d3d",
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "80vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Box display="flex" flexDirection="column" mt="10px">
            <Button color="primary" onClick={getAllUser}>
              <PeopleIcon /> All Users
            </Button>
            <Button color="primary" onClick={() => setActive("Posts")}>
              <PermMediaOutlinedIcon /> Posts
            </Button>

            <Button color="primary" onClick={() => setActive("Storage")}>
              <StorageIcon />
              Storage
            </Button>

            <Button color="primary" onClick={() => setActive("Settings")}>
              <SettingsIcon />
              Settings
            </Button>
          </Box>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "80vh", flex: 2 }}>
          <Box>
            {active === "All Users" && <DataTable />}
            {active === "Posts" && "Posts"}
            {active === "Storage" && "Storage"}
            {active === "Settings" && "Settings"}
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Main;
