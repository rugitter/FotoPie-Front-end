import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container } from "@mui/system";
import BasicStack from "../../src/components/notification/Notice-stack";
import ButtonAppBar from "../../src/components/TopBar-notification";
import Navbar from "../../src/components/NavBar";
import { Box } from "@mui/material";

export default function notification(){

    return( 
        <div>
            <Navbar isFixed={false} color="#000000" />
            <BasicStack />
        </div>
        
    )
}

