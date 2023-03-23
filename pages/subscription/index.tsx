import SubscriptionButton from "../../src/components/Subscription/SubscriptionButton";
import Copyright from "../../src/components/Copyright";
import CustomerPortal from "../../src/components/Subscription/CustomerPortal";
import Navbar from "../../src/components/NavBar";

export default function SubscriptionPage() {
  return (
    <>
      <Navbar />
      <h1>Click Here to Subscribe</h1>
      <SubscriptionButton />
      <br />
      <br />
      <br />
      <CustomerPortal />
      <Copyright />
    </>
  );
}
