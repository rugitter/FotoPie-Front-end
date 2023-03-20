import { Stripe } from "@stripe/stripe-js";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id: any = req.query.id;

  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession ID");
    }
    const checkout_session = await stripe.checkout.sessions.retrive(id);

    res.status(200).json(checkout_session);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
