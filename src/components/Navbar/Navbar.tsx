import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navItems: string[] = ["Home", "Projects", "About", "Contact"];

  return (
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
  );
}
