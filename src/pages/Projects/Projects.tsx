import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
  const projectsReversed = projects.slice().reverse();

  return (
    <section id="projects-body">
      {projectsReversed.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          imageurl={project.image}
        />
      ))}
    </section>
  );
}
