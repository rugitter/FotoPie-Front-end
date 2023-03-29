import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container } from "@mui/system";
import BasicStack from "../src/components/Notification/NoticeStack";
import Navbar from "../src/components/NavBar/NavBar";
import { Box } from "@mui/material";
import { NavBarStyles } from "../src/components/NavBar/NavbarBaseline.style";

export default function notification(){

    return( 
        <div>
            <Navbar isFixed={false} color="#000000" baseLine={NavBarStyles}/>
            <BasicStack />
        </div>
        
    )
}
