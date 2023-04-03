import ResetRequest from "../../src/components/Reset/ResetRequest";
import Copyright from "../../src/components/Copyright";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

const resetRequest: React.FC = () => {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <ResetRequest />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default resetRequest;
