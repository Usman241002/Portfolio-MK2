import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header id="header" className="flex-container">
      <div id="logo" className="flex-container">
        <h3>Usman Khalid</h3>
        <h4>Full Stack Developer | Mathematician</h4>
      </div>
      <Navbar />
    </header>
  );
}
