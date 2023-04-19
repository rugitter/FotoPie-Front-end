import React from "react";
import PhotoCategory from "../../src/components/Category/PhotoCategory";
import CategoryHeader from "../../src/components/Category/CategoryHeader";
import Copyright from "../../src/components/Copyright";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import { motion, AnimatePresence } from "framer-motion";
import { Box, CssBaseline } from "@mui/material";

const CategoryMainPage: React.FC = () => {
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
              <CategoryHeader />
              <PhotoCategory />
            </motion.div>
          </AnimatePresence>
        </Box>
        <Copyright />
      </Box>
    </>
  );
};

export default CategoryMainPage;
