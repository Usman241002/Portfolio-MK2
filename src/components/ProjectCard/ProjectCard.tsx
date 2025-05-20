import "./ProjectCard.css";

export default function ProjectCard({imageurl, title, description}) {
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
