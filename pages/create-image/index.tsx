import NewImage from "../../src/components/CreateImage/NewImage";
import Navbar from "../../src/components/NavBar";

export default function CreateImage() {
  return (
    <>
      <Navbar isFixed={false} color="#000000" />
      <NewImage />
    </>
  );
}
