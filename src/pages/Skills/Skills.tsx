import SkillsCard from "../../components/SkillsCard/SkillsCard";
import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      id: 1,
      skillName: "HTML5",
      imgPath: "html.svg",
    },
    {
      id: 2,
      skillName: "CSS",
      imgPath: "css.svg",
    },
    {
      id: 3,
      skillName: "JavaScript",
      imgPath: "JavaScript.svg",
    },
    {
      id: 4,
      skillName: "PHP",
      imgPath: "Php.svg",
    },
    {
      id: 5,
      skillName: "C",
      imgPath: "C.svg",
    },
    {
      id: 6,
      skillName: "C++",
      imgPath: "C++.svg",
    },
    {
      id: 7,
      skillName: "Python",
      imgPath: "Python.svg",
    },
    {
      id: 8,
      skillName: "React",
      imgPath: "React.svg",
    },
    {
      id: 9,
      skillName: "NodeJS",
      imgPath: "NodeJs.svg",
    },
    {
      id: 10,
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
            key={skill.id}
            skillName={skill.skillName}
            imgPath={skill.imgPath}
          />
        ))}
      </div>
    </main>
  );
}
