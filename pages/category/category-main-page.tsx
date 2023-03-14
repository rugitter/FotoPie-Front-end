import React, { useState, useEffect } from "react";
import PhotoCategory from "../../src/components/Category/PhotoCategory";
import CategoryHeader from "../../src/components/Category/CategoryHeader";
import Copyright from "../../src/components/Copyright";
import Header from "../../src/components/Header";
import NavBar from "../../src/components/NavBar";

const CategoryMainPage: React.FC = () => {
  return (
    <>
      <NavBar isFixed={false} color="#000000" />
      <CategoryHeader />
      <PhotoCategory />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default CategoryMainPage;
