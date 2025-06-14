import "./ProjectCard.css";
import { Link } from "react-router-dom";

type props = {
  id: number;
  title: string;
  subtitle: string;
  imageurl: string;
};

export default function ProjectCard({ title, subtitle, imageurl }: props) {
  const base = "images/projectImages/";
  return (
    <Link to={`/projects/${title}`} className="project-card">
      <div className="project-img">
        <img src={base + imageurl} alt={title} />
      </div>
      <div className="project-info">
        <h4>{title}</h4>
        <p>
          <i>{subtitle}</i>
        </p>
      </div>
    </Link>
  );
}
