import Link from "../../utils/Link";
import { Avatar, Typography, Grid } from "@mui/material";

export interface UserNameProps {
  userID: string;
  userName: string;
  userAvatar: string;
}

const UserName = ({ userID, userName, userAvatar }: UserNameProps) => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      columnSpacing={{ xs: 1, md: 2 }}
    >
      <Grid item>
        <Link href={`/profile/${userID}`}>
          <Avatar
            alt={`${userID}`}
            src={userAvatar}
            sx={{
              width: { xs: 20, md: 50 },
              height: { xs: 20, md: 50 },
              ":hover": {
                opacity: 0.8,
              },
            }}
          ></Avatar>
        </Link>
      </Grid>
      <Grid item>
        <Link href={`/profile/${userID}`} sx={{ textDecoration: "none" }}>
          {
            <Typography
              variant="h2"
              fontSize={{
                xs: "0.7rem",
                sm: "1rem",
                md: "1.2rem",
              }}
              color={"primary"}
              fontWeight={700}
              sx={{
                ":hover": { color: "primary.light" },
              }}
            >
              {userName}
            </Typography>
          }
        </Link>
      </Grid>
    </Grid>
  );
};

export default UserName;
