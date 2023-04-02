import NewVariation from "../../src/components/CreateVariation/NewVariation";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

export default function CreateVariation() {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <NewVariation />
    </>
  );
}
