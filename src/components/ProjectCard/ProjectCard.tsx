import "./ProjectCard.css";
import { Link } from "react-router-dom";

type props = {
  id: number;
  title: string;
  description: string;
  imageurl: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  imageurl,
}: props) {
  const base = "src/images/projectImages/";
  return (
    <section className="project-card">
      <Link to={`/projects/${id}`}>
        <div className="project-img">
          <img src={base + imageurl} alt={title} />
        </div>
        <div className="project-info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </Link>
    </section>
  );
}
