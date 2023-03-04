import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { AttachMoney } from "@mui/icons-material"
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material";
import FormHelperText from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, SubmitHandler,FormState, FormProvider} from "react-hook-form";
import Copyright from "../../components/Copyright"
import FormTextField from "../textField/formTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema, string, object } from "yup";
import { useRouter } from "next/router";
import InputAdornment from '@mui/material/InputAdornment'



import Uploader from "./uploader";




// Define a type with the shape of the form values
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Define a schema for the form values
const formSchema: Schema<IFormInput> = object({
  firstName: string().max(15).required(),
  lastName: string().max(15).required(),
  email: string().email().required(),
  password: string().min(2).max(20).required(),
});

// Define a component that renders the form
export default function Submittable() {

  const router = useRouter();
  const methods = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
  });

    const [tagValue, setTagValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [desValue, setDesValue] = useState("");
  // Define a submit handler for the form
//   const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
//     try {
//       const response = await axiosRequest("/api/user/create", "POST", data);
//       console.log(response);

//       if (response.status === 200) {
//         router.push("verifyemail");
//       }
      
//     } catch (error) {
//       alert('Email is already been used,please go to the login page.')
//       console.log(error);
//     }
//   };
    
const inputProps = {
  startAdornment: (
        <InputAdornment position="start">
        
            <AttachMoney />
            {priceValue ? null : "Enter Price"}
        </InputAdornment>
    ),
    onChange: (e:any) =>setPriceValue(e.target.value),
};

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
              }}
        >
    
          <FormProvider {...methods}>
            <Box component="form" 
                    
            //   onSubmit={methods.handleSubmit(onSubmit)}
                      sx={{  mt: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end", }}       
                  >
                      <Uploader />
                      
                
                <FormTextField
            
                  name="description"
                  label="Description (optional)"
                  id="Description"
                          autoComplete="Description"
                          InputProps={{
                            startAdornment: (
                             <InputAdornment position="start">
                                {desValue ? null : "Enter Description"}
                              </InputAdornment>
                            ),
                            onChange: (e:any) => setDesValue(e.target.value),
                          }}      
                      />
            
                <FormTextField
                  name="tag"
                  label="Tag (optional)"
                  id="Tag"
                          autoComplete="Tag"
                          InputProps={{
                            startAdornment: (
                             <InputAdornment position="start">
                                {tagValue ? null : "Enter tag"}
                              </InputAdornment>
                            ),
                            onChange: (e:any) => setTagValue(e.target.value),
                          }}          
                />

                <FormTextField
                  name="price"
                  label="Price(optional)"
                  id="price"
                  type="number"
                  autoComplete="price"
                  InputProps={inputProps}                
                          
                />
                
                <FormControlLabel
                style={{ marginTop: '16px' }} 
                control={
                <Checkbox value="allowExtraEmails" color="primary"  required/> }
                          label="I understand that only uploaded photos and
                                 videos that you own the copyright to and that
                                 I have created myself."
                />
                      
                <FormControlLabel
                style={{ marginTop: '16px' }} 
                control={
                <Checkbox value="allowExtraEmails" color="primary"  required/> }
                          label="I understand that any depicted people or owners of depicted property
                          gave you the permission to publish the photos and videos."
                />      
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              > 
                Send
                {/* <Link href="verifyemail"></Link> */}
                      </Button>
                  
              <Grid container justifyContent="flex-end">
                <Grid item>
                  
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
          </Box>
          
        <Copyright sx={{ mt: 5 }} />
      </Container>
    
  );
}
