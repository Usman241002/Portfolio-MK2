import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      {isHome ? "" : <Header title="" description="" />}
      <Outlet />
      <Footer />
    </>
  );
}
