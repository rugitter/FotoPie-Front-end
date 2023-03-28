import React, { useState, useEffect } from "react";
import Copyright from "../../src/components/Copyright";
import Navbar from "../../src/components/NavBar/NavBar";
import SubscriptionComponent from "../../src/components/Subscription/SubscriptionComponent";
import CustomerPortalComponent from "../../src/components/Subscription/CustomerPortalComponent";
import { getSubscriptionStatus } from "../../src/axiosRequest/api/subscription";

const CreateImage: React.FC = () => {
  const [status, setStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const getSubscription = async () => {
      try {
        // Send Get request to /api/subscription/get-subscription-status
        const response = await getSubscriptionStatus();
        setStatus(response.data.subscription_status);
      } catch (error) {
        console.error({ message: error });
        setStatus(false);
      }
    };
    getSubscription();
  }, []);

  return (
    <>
      <Navbar isFixed={false} color="#000000" />
      {status ? <CustomerPortalComponent /> : <SubscriptionComponent />}
    </>
  );
};

export default CreateImage;
