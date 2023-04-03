import Copyright from "../../src/components/Copyright";
import SuccessDisplay from "../../src/components/Subscription/CustomerPortalButton";
import PaymentSuccessful from "../../src/components/Subscription/PaymentSuccessful";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import NavBar from "../../src/components/NavBar/NavBar";

export default function SubscriptionPage() {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <PaymentSuccessful />
      <br />
      <Copyright />
    </>
  );
}
