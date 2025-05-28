import "./ProjectDetail.css";
import projects from "../../data/projects";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <p>The project with ID {id} does not exist.</p>
      </div>
    );
  }

  return (
    <div className="project-details">
      <h1>Project Detail</h1>
      <p>ID: {id}</p>
      <p>Project Name: {project.title}</p>
      <p>Project Description: {project.description}</p>
    </div>
  );
}
