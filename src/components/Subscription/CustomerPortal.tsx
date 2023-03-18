import axiosRequest from "../../utils/axiosRequest";
import { Button } from "@mui/material";

const clickToPortal = async () => {
  try {
    const response = await axiosRequest(
      "api/subscription/create-portal-session",
      "POST"
    );

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
