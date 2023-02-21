import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import DataTable from "./DataTable";

//Render the main part of the admin manager page with navigation and contents
const Main = () => {
  const [active, setActive] = useState("");

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          borderBottom: "1px solid #3d3d3d",
        }}
      >
        {/* Navigation */}
        <Box
          sx={{
            height: { sx: "auto", md: "80vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Box display="flex" flexDirection="column" mt="10px" minWidth="200">
            <Button
              color="primary"
              onClick={() => setActive("All Users")}
              startIcon={<PeopleIcon />}
            >
              All Users
            </Button>
            <Button
              color="primary"
              onClick={() => setActive("Posts")}
              startIcon={<PermMediaOutlinedIcon />}
            >
              Posts
            </Button>

            <Button
              color="primary"
              onClick={() => setActive("Storage")}
              startIcon={<StorageIcon />}
            >
              Storage
            </Button>

            <Button
              color="primary"
              onClick={() => setActive("Settings")}
              startIcon={<SettingsIcon />}
            >
              Settings
            </Button>
          </Box>
        </Box>

        {/* Content */}
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
