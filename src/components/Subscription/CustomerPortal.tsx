import axiosRequest from "../../utils/axiosRequest";
import { Button } from "@mui/material";
import { createPortalSession } from "../../axiosRequest/api/subscription";

const clickToPortal = async () => {
  try {
    // Send POST request to api/subscription/create-portal-session
    const response = await createPortalSession();

    const url = response.data.session_url;
    console.log(url);
    // window.location.href = url;
    window.open(url);
  } catch (error) {
    return "Create checkout session failed";
  }
};

export default function CustomerPortal() {
  return (
    <Button type="submit" variant="contained" onClick={clickToPortal}>
      Manage Your Subscription
    </Button>
  );
}
