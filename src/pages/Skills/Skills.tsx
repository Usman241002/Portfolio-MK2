import SkillsCard from "../../components/SkillsCard/SkillsCard";
import "./Skills.css";

export default function Skills() {
  const basePath = "images/skillIcons/";

  const skills = [
    {
      skillName: "HTML5",
      imgPath: "html.svg",
    },
    {
      skillName: "CSS",
      imgPath: "css.svg",
    },
    {
      skillName: "JavaScript",
      imgPath: "JavaScript.svg",
    },
    {
      skillName: "PHP",
      imgPath: "Php.svg",
    },
    {
      skillName: "C",
      imgPath: "C.svg",
    },
    {
      skillName: "C++",
      imgPath: "C++.svg",
    },
    {
      skillName: "Python",
      imgPath: "Python.svg",
    },
    {
      skillName: "React",
      imgPath: "React.svg",
    },
    {
      skillName: "NodeJS",
      imgPath: "NodeJs.svg",
    },
    {
      skillName: "PostgreSQL",
      imgPath: "Postgre.svg",
    },
  ];

  return (
    <main id="skill-subpage" className="about-sub-body">
      <h3>Skills</h3>

      <div id="skills">
        {skills.map((skill) => (
          <SkillsCard
            skillName={skill.skillName}
            imgPath={basePath + skill.imgPath}
          />
        ))}
      </div>
    </main>
  );
}
