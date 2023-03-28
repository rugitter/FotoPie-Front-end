import Copyright from "../../src/components/Copyright";
import SuccessDisplay from "../../src/components/Subscription/CustomerPortalButton";
import PaymentSuccessful from "../../src/components/Subscription/PaymentSuccessful";

export default function SubscriptionPage() {
  return (
    <>
      <PaymentSuccessful />
      <br />
      <Copyright />
    </>
  );
}
