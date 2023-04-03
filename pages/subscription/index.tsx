import React, { useState, useEffect } from "react";
import NavBar from "../../src/components/NavBar/NavBar";
import SubscriptionComponent from "../../src/components/Subscription/SubscriptionComponent";
import CustomerPortalComponent from "../../src/components/Subscription/CustomerPortalComponent";
import { getSubscriptionStatus } from "../../src/axiosRequest/api/subscription";
import Loader from "../../src/components/Loader/Loader";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

const CreateImage: React.FC = () => {
  const [status, setStatus] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSubscription = async () => {
      try {
        setIsLoading(true);
        // Send Get request to /api/subscription/get-subscription-status
        const response = await getSubscriptionStatus();
        setStatus(response.data.subscription_status);
      } catch (error) {
        console.error({ message: error });
        setStatus(false);
      } finally {
        setIsLoading(false);
      }
    };
    getSubscription();
  }, []);

  if (isLoading === true || status === null) {
    return <Loader />;
  } else if (status === false) {
    return (
      <>
        <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
        <SubscriptionComponent />
      </>
    );
  } else {
    return (
      <>
        <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
        <CustomerPortalComponent />
      </>
    );
  }
};

export default CreateImage;
