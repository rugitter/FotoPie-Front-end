import NewVariation from "../../src/components/CreateVariation/NewVariation";
import Navbar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

export default function CreateVariation() {
  return (
    <>
      <Navbar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <NewVariation />
    </>
  );
}
