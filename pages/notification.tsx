import NoticeStack from "../src/components/Notification/NoticeStack";
import Navbar from "../src/components/NavBar/NavBar";
import { NavBarStyles } from "../src/components/NavBar/NavbarBaseline.style";

export default function notification() {
  return (
    <div>
      <Navbar isFixed={false} color="#000000" baseLine={NavBarStyles}/>
      <NoticeStack />
    </div>
  );
}
