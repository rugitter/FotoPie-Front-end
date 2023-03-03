import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container } from "@mui/system";
import BasicStack from "../src/components/Notice-stack";
import ButtonAppBar from "../src/components/TopBar-notification";

export default function notification(){

    return( 
        <Container>
            <ButtonAppBar />
            <BasicStack />
        </Container>
        
    )
}

