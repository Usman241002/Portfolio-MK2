import "./ProjectDetail.css";
import projects from "../../data/projects";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { title } = useParams();
  const project = projects.find((p) => p.title === title);
  const base = "/images/projectImages/";

  if (!project) {
    return (
      <div className="project-details">
        <h3>Project Not Found</h3>
        <p>The project does not exist.</p>
      </div>
    );
  }

  return (
    <div id="project-body">
      <h3>{project.title}</h3>

      <section id="project-info">
        <div id="project-details">
          <p>{project.description}</p>
        </div>
        <div id="project-image">
          <img src={base + project.image} alt={project.title} />
        </div>
      </section>

      <div id="project-links">
        <button className="flex-container button" onClick={() => navigate(-1)}>
          Back
        </button>
        <Link className="icon" to={project.githubLink}>
          <img
            src="/images/favicons/Github.svg"
            alt="Github link to {project.title}"
          />
        </Link>
      </div>
    </div>
  );
}
