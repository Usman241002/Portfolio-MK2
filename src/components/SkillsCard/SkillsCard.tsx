import "./SkillsCard.css";

type props = {
  skillName: string;
  imgPath: string;
};

export default function SkillsCard({ skillName, imgPath }: props) {
  const basePath = "/images/skillIcons/";

  return (
    <section className="skill-card">
      <img src={basePath + imgPath} />
      <p>{skillName}</p>
    </section>
  );
}
