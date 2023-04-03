import React, { useState, useEffect } from "react";
import PhotoCategory from "../../src/components/Category/PhotoCategory";
import CategoryHeader from "../../src/components/Category/CategoryHeader";
import Copyright from "../../src/components/Copyright";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

const CategoryMainPage: React.FC = () => {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles}/>
      <CategoryHeader />
      <PhotoCategory />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default CategoryMainPage;
