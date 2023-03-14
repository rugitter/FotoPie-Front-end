import Strip from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import axiosRequest from "../../utils/axiosRequest";

// const clickToSubscribe = async () => {
//   try {

//   }
// }

const SubscribeButton = () => {
  return (
    <form action="'/subscription/create-checkout-session" method="POST">
      <input
        type="hidden"
        name="priceId"
        value="price_1MitMoCWJBDJNhy8OQeBC2pY"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

const Message = ({ message }: { message: string }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Subscribe() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Subscription Successful");
    }

    if (query.get("canceled")) {
      setMessage("Payment Canceled");
    }
  }, []);

  return message ? <Message message={message} /> : <SubscribeButton />;
}
