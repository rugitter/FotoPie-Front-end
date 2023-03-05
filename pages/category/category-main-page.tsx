import React, { useState, useEffect } from "react";
import PhotoCategory from "../../src/components/Category/PhotoCategory";
import CategoryHeader from "../../src/components/Category/CategoryHeader";
import Copyright from "../../src/components/Copyright";

const CategoryMainPage: React.FC = () => {
  return (
    <>
      <CategoryHeader />
      <PhotoCategory />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default CategoryMainPage;
