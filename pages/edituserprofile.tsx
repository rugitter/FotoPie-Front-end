import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../src/components/Copyright";
import { Schema, string, object, mixed } from "yup";
import { useRouter } from "next/router";
import axiosRequest from "../src/utils/axiosRequest";
import NavBar from "../src/components/NavBar/NavBar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { getMe } from "../src/axiosRequest/api/editUser";
import EditUserProfileHeader from "../src/components/EditUserProfile/EditUserProfileHeader";
import AvatarUploadButton from "../src/components/EditUserProfile/AvatarUploadButton";
import ProfilePicture from "../src/components/EditUserProfile/ProfilePicture";
import EditUserForm from "../src/components/EditUserProfile/EditUserForm";

// Define a component that renders the form
export default function EditUserProfile() {
  const router = useRouter();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getMe().then((res) => {
      setLastName(res.data.lastName);
      setFirstName(res.data.firstName);
      setAvatar(res.data.avatarPath);
    });
  }, [avatar]);

  return (
    <>
      <NavBar isFixed={false} color="#000000" />
      <Container component="main" maxWidth="md">
        {/*Page heading, profile icon and change picture button*/}
        <EditUserProfileHeader />
        {/*change avatar button*/}
        <Grid container spacing={10}>
          <Grid item xs={2}>
            {avatar ? <ProfilePicture avatar={avatar} /> : null}
          </Grid>
          <Grid item xs={10}>
            <AvatarUploadButton setAvatar={setAvatar} />
          </Grid>
        </Grid>
        <EditUserForm firstName={firstName} lastName={lastName} />
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
