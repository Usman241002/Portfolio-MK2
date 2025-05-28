import "./AboutCard.css"

type props = {
  title: string;
  subtitle: string;
  description: string;
};

export default function AboutCard({title, subtitle, description}: props) {
  return(
    <div className="about-card">
      <div className="about-card-heading">
        <h4 className="about-card-title">{title}</h4>
        <p className="about-card-subtitle"><i>{subtitle}</i></p>
      </div>
      <p className="about-card-description">{description}</p>
    </div>
  )
}
