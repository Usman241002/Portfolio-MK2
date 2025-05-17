import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navItems: string[] = ["Home", "Projects", "About", "Contact"];

  return (
    <header id="header" className="flex-container">
      <div id="logo" className="flex-container">
        <h3>Usman Khalid</h3>
        <h4>Full Stack Developer | Mathematician</h4>
      </div>
      <nav id="navbar" className="flex-container">
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
