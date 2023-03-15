import Strip from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import axiosRequest from "../../utils/axiosRequest";
import { Button } from "@mui/material";

const clickToSubscribe = async () => {
  try {
    const response = await axiosRequest(
      "api/subscription/create-checkout-session",
      "POST",
      { priceId: "price_1MitMoCWJBDJNhy8OQeBC2pY" }
    );

    console.log(response);
    if (response.status === 303) {
      const url = response.session_url;
      window.open(url);
    }
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

// const Message = ({ message }: { message: string }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function SubscriptionButton() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Subscription Successful");
//     }

//     if (query.get("canceled")) {
//       setMessage("Payment Canceled");
//     }
//   }, []);

//   return message ? <Message message={message} /> : <Subscribe />;
// }
