import NoticeStack from "../src/components/Notification/NoticeStack";
import Navbar from "../src/components/NavBar/NavBar";
import { NavBarStyles } from "../src/components/NavBar/NavbarBaseline.style";
import { motion, AnimatePresence } from "framer-motion";
import Copyright from "../src/components/Copyright";
import { Box, CssBaseline } from "@mui/material";

export default function notification() {
  return (
    <>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <div>
                <Navbar isFixed={false} color="#000000" baseLine={NavBarStyles} />
                <NoticeStack />
              </div>
            </motion.div>
          </AnimatePresence>
        </Box>
        <Copyright />
      </Box>
    </>
  );
}
