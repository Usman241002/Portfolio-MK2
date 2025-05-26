import { Outlet, NavLink } from "react-router-dom";
import "./About.css";

export default function About() {
  const aboutNavItems: string[] = ["Overview", "Experience", "Education", "Skills"];

  return (
    <main id="about-body">
      <nav id="about-nav">
        <ul>
          {aboutNavItems.map((item) => (
            <li key={item}>
              <NavLink
                end={item === "Overview"}
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item === "Overview" ? "/about" : `/about/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </main>
  );
}
