import axiosRequest from "../../utils/axiosRequest";
import { Button } from "@mui/material";
import { createCheckoutSession } from "../../axiosRequest/api/subscription";

const clickToSubscribe = async () => {
  try {
    // Send POST request to api/subscription/create-checkout-session
    const response = await createCheckoutSession({
      priceId: "price_1MitMoCWJBDJNhy8OQeBC2pY",
    });

    console.log(response.data);

    const url = response.data.session_url;
    console.log(url);
    // window.location.href = url;
    window.open(url);
  } catch (error) {
    return "Create checkout session failed";
  }
};

export default function SubscriptionButton() {
  return (
    <Button type="submit" variant="contained" onClick={clickToSubscribe}>
      Subscribe
    </Button>
  );
}
