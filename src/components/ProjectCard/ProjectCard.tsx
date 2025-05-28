import "./ProjectCard.css";

type props = {
  title: string;
  description: string;
}

//add imageurl
export default function ProjectCard({title, description}: props) {
  return (
    <section className="project-card">
      <div className="project-img">
      </div>
      <div className="project-info">
        <h4>
          {title}
        </h4>
        <p>
          {description}
        </p>
      </div>
    </section>
  );
}
