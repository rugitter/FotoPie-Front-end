import { StrictMode } from "react";
import React, { useState } from "react";
import { Helmet } from "react-helmet"

import Submittable from "../src/components/upload/submitTable"
import NavBar from "../src/components/NavBar"


export default function MyDropzone() {


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="How to upload files to S3 from your react app "
        />
     
      </Helmet>
      <NavBar isFixed={false}  color='#000000'/> 
      <Submittable/>
  


    </div>

  )
}