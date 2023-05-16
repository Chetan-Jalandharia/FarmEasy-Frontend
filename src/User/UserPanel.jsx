import { Outlet } from "react-router-dom";
import Footer from "../Common/Components/Footer";
import NavBar from "./Components/NavBar";

export default function Main() {
  
  return (
    <div>

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
