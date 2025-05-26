import AboutCard from "../../components/AboutCard/AboutCard";
import "./Education.css";

export default function Education() {
  return(
    <main className="about-sub-body">
      <h3>Education</h3>

      <AboutCard
        title="BSc (Hons) Software Engineering"
        subtitle="Coventry University (2023 – Present)"
        description="Relevant coursework: Data Structures & Algorithms, Web Development, Software Design Patterns"
      />
      <AboutCard
        title="A-Levels"
        subtitle="Washwood Heath Sixth Form (2019 – 2021)"
        description="Mathematics (A*) | Physics (A) | Biology (A)"
      />
    </main>
  )
}
