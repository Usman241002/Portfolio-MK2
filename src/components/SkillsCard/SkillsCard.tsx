import "./SkillsCard.css";

type props = {
  skillName: string;
  imgPath: string;
}

export default function SkillsCard({skillName, imgPath}: props) {
  return(
    <section className="skill-card">
      <img src={imgPath} />
      <p>{skillName}</p>
    </section>
  )
}
