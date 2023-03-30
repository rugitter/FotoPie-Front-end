import NewVariation from "../../src/components/CreateVariation/NewVariation";
import Navbar from "../../src/components/NavBar/NavBar";

export default function CreateVariation() {
  return (
    <>
      <Navbar isFixed={false} color="#000000" />
      <NewVariation />
    </>
  );
}
