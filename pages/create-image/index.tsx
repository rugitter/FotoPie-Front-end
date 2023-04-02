import NewImage from "../../src/components/CreateImage/NewImage";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

export default function CreateImage() {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <NewImage />
    </>
  );
}
