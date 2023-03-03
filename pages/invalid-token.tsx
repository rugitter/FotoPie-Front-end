import Link from "next/link";
import Button from "@mui/material/Button";

function InvalidToken() {
  return (
    <>
      <h2>Invalid Token</h2>
      <div>
        <Button variant="contained">
          <Link href="/reset-request">Go Back</Link>
        </Button>
      </div>
    </>
  );
}

export default InvalidToken;
