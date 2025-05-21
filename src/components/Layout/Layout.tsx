import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const locationObj = {
    "/": {title: "Home", description: ""},
    "/projects" : {title: "Projects", description: "A selection of personal, academic, and freelance projects I've worked on."},
    "/about": {title: "About Me", description: "A brief history on my personal and academic experience"},
    "/contact": {title: "Contact Me", description: "Get in touch with me for work inquiries or collaborations."}
  }

  return (
    <>
      <Navbar />
      {isHome ? "" : <Header title={locationObj[location.pathname].title} description={locationObj[location.pathname].description} />}
      <Outlet />
      <Footer />
    </>
  );
}
