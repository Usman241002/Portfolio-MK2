import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";
import "./Home.css";

export default function Home() {
  const projectsReversed = projects.slice().reverse();

  return (
    <>
      <header id="hero" className="flex-container">
        <section id="hero-contents" className="flex-container">
          <section id="hero-text" className="flex-container">
            <h2>Hi, I'm...</h2>
            <h1>Usman Khalid</h1>
            <h3>
              Born to create solutions to complex challenges, driven by a love
              for mathematics.
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
        <figure id="hero-profile" className="flex-container">
          <img src="/images/profilePicture/Subject.png" alt="Profile Picture" />
        </figure>
      </header>

      <main id="featured-projects-body">
        <h3>Featured Projects</h3>
        <section id="featured-projects">
          {projectsReversed.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageurl={project.image}
            />
          ))}
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
