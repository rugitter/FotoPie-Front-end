import Link from "next/link";
import Button from "@mui/material/Button";

function UserNotExist() {
  return (
    <>
      <h1>User Not Exist, Please Go Back and Try Again</h1>
      <div>
        <Button variant="contained">
          <Link href="/ResetRequest">Reset Password</Link>
        </Button>
      </div>
    </>
  );
}

export default UserNotExist;
