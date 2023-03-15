import Strip from "stripe";
import { loadStripe } from "@stripe/stripe-js";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SubscriptionButton() {
  return (
    <a href="https://buy.stripe.com/test_5kAg2a3sng4EeKk7ss">
      <Button
        style={{
          borderRadius: 10,
          backgroundColor: "#21b6ae",
          padding: "12px 20px",
          fontSize: "14px",
        }}
        variant="contained"
      >
        Subscribe
      </Button>
    </a>
  );
}
