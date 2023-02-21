import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import ButtonAppNoticeBar from "../src/components/TopBar-notice";
import { Container } from "@mui/system";
import BasicStack from "../src/components/Notice-stack";

export default function notification(){
    return(
        
        <Container>
            <ButtonAppNoticeBar />
            <BasicStack />
        </Container>
        
    )
}

