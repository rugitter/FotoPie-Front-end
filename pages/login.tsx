import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "../src/utils/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../src/components/Copyright";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema, string, object } from "yup";
import FormTextField from "../src/components/textField/formTextField";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../src/utils/token";
import Alert from "@mui/material/Alert";
import { AppDispatch, RootState } from "../store/store";
import { login } from "../store/auth/authAciton";

// Define a type with the shape of the form values
export interface IFormInput {
  email: string;
  password: string;
}

// Define a schema for the form values
const formSchema: Schema<IFormInput> = object({
  email: string().email().required(),
  password: string().min(2).max(20).required(),
});

// Define a component that renders the form
export default function LogIn() {
  const router = useRouter();
  const { loginStatus, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  // Use the useForm hook to create a form controller
  const methods = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
  });
  // Define a submit handler for the form
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <Container component="main" maxWidth="xs">
      {error && (
        <Alert variant="filled" severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={methods.handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <FormTextField
              name="email"
              label="Email Address"
              id="email"
              autoComplete="email"
            />

            <FormTextField
              name="password"
              label="Password"
              id="password"
              type="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {status === "loading" ? "Loading..." : "Log In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
