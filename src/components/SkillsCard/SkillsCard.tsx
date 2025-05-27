import "./SkillsCard.css";

export default function SkillsCard({skillName, imgPath}) {
  return(
    <section className="skill-card">
      <img src={imgPath} />
      <p>{skillName}</p>
    </section>
  )
}
