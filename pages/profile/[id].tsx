import { Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axiosRequest from "../../src/utils/axiosRequest";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ProfilePage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [avatar, setAvatar] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    axiosRequest(`/api/user/${id}`, "GET").then((res) => {
      if (id !== res.data.id) return router.push("/404");
      setLastName(res.data.lastName);
      setFirstName(res.data.firstName);
      setAvatar(res.data.avatar);
    });
  }, [id]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ mt: 10, width: "100%" }}
    >
      <Grid item>
        <Avatar alt="avatar" src={avatar} sx={{ width: 180, height: 180 }} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ mt: 5 }}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h3">{firstName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{lastName}</Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 5, ml: 10 }} spacing={5}>
        <Grid item>
          <Button variant="contained" sx={{borderRadius:10 }}>Gallery</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Gallery</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
