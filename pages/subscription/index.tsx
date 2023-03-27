import SubscriptionButton from "../../src/components/Subscription/SubscriptionButton";
import Copyright from "../../src/components/Copyright";
import CustomerPortal from "../../src/components/Subscription/CustomerPortalButton";
import Navbar from "../../src/components/NavBar";
import SubscriptionComponent from "../../src/components/Subscription/SubscriptionComponent";

export default function SubscriptionPage() {
  return (
    <>
      <Navbar isFixed={true} />
      <SubscriptionComponent />
      <Copyright />
    </>
  );
}
