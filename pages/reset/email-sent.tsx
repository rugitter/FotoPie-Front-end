import Link from "next/link";
import Button from "@mui/material/Button";

function EmailSent() {
  return (
    <>
      <h1>
        Email Sent Successfully, Please Click the Verify Button in the Email to
        Verify
      </h1>
      <div>
        <Button variant="contained">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </>
  );
}

export default EmailSent;
