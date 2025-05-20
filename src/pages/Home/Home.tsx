import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header id="hero" className="flex-container">
        <section id="hero-contents" className="flex-container">
          <section id="hero-text" className="flex-container">
            <h2>Hi, I'm...</h2>
            <h1>Usman Khalid</h1>
            <h3>
              Born to create solutions to complex challenges, driven by a love for mathematics.
            </h3>
          </section>
          <div id="hero-buttons" className="flex-container">
            <Link
              to="/projects"
              id="view-projects"
              className="flex-container button"
            >
              View Projects
            </Link>
            <Link to="/about" id="about-me" className="flex-container button">
              About Me
            </Link>
          </div>
        </section>
        <figure id="hero-profile" className="flex-container"></figure>
      </header>

      <main id="featured-projects-body">
        <h3>Featured Projects</h3>
        <section id="featured-projects">
          {/* Add arr.map */}
          <ProjectCard imageurl="" title="Title 1" description="Description 1"/>
          <ProjectCard imageurl="" title="Title 2" description="Description 2"/>
          <ProjectCard imageurl="" title="Title 3" description="Description 3"/>
        </section>
        <div id="featured-projects-button" className="flex-container">
          <Link
            to="/projects"
            id="view-all-projects"
            className="flex-container button"
          >
            View All Projects
          </Link>
        </div>
      </main>
    </>
  );
}
