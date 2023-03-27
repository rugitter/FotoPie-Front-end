import ResetPassword from "../../src/components/Reset/ResetPassword";
import Copyright from "../../src/components/Copyright";

const resetPassword: React.FC = () => {
  return (
    <>
      <ResetPassword />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default resetPassword;
