import AboutCard from "../../components/AboutCard/AboutCard";
import "./Experience.css";

export default function Experience() {
  return(
    <main className="about-sub-body">
      <h3>Experience</h3>

      <AboutCard
        title="Freelance Software Developer"
        subtitle="2024 – Present"
        description="Built and optimized web apps for small businesses. Developed database-driven tools to enhance operations."
      />
      <AboutCard
        title="Automotive Business Operations"
        subtitle="2022 – Present"
        description="Oversaw car sales, third-party dealership operations, and team coordination. Streamlined business processes using technical problem-solving."
      />

    </main>
  )
}
