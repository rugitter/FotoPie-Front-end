import ResetPassword from "../../src/components/Reset/ResetPassword";
import Copyright from "../../src/components/Copyright";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

const resetPassword: React.FC = () => {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <ResetPassword />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default resetPassword;
