import "./ProjectDetail.css";
import projects from "../../data/projects";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { title } = useParams();
  const project = projects.find((p) => p.title === title);

  if (!project) {
    return (
      <div className="project-details">
        <h3>Project Not Found</h3>
        <p>The project does not exist.</p>
      </div>
    );
  }

  return (
    <div className="project-details">
      <h3>{project.title}</h3>

      <section id="project-info">
        <p>{project.description}</p>
      </section>
    </div>
  );
}
