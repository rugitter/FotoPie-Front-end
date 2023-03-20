import Stack from "@mui/material/Stack";
import Link from "../../utils/Link";
import { Button, Avatar, Typography } from "@mui/material";

export interface UserNameProps {
  userID: string;
  userName: string;
  userAvatar: string;
}

const UserName = (props: UserNameProps) => {
  return (
    <>
      <Stack>
        <Stack display="flex" direction="row">
          <Button>
            <Link href={`/profile/${props.userID}`}>
              {<Avatar alt="avatar" src={props.userAvatar}></Avatar>}
            </Link>
          </Button>
          <Button>
            <Link
              href={`/profile/${props.userID}`}
              sx={{ textDecoration: "none" }}
            >
              {<Typography variant="body1">{props.userName}</Typography>}
            </Link>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default UserName;
