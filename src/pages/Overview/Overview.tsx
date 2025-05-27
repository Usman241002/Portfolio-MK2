import AboutCard from "../../components/AboutCard/AboutCard";
import "./Overview.css";

export default function Overview() {
  return(
    <main className="about-sub-body">
      <h3>Overview</h3>

      <AboutCard
        title="Full Stack Developer"
        subtitle="Web Developer"
        description="I’m a full-stack developer with a solid foundation in mathematics, blending analytical precision with creative problem-solving to craft impactful web applications. I specialize in building intuitive, scalable solutions that turn complex challenges into seamless user experiences—both on the frontend and backend."
      />
      <AboutCard
        title="Development Philosophy"
        subtitle="Clean Code, Real Impact"
        description="My approach centers around writing clean, maintainable code with an emphasis on scalability, performance, and accessibility. I’m committed to continuous learning, rigorous testing, and collaborative teamwork—ensuring that every solution I deliver is not just functional, but truly user-focused and future-ready."
      />
      <AboutCard
        title="Passion & Vision"
        subtitle="Innovating Through Purpose"
        description="Beyond the code, I’m driven by a desire to create technology that solves real-world problems. With a long-term vision of building smart, user-centric systems, I stay curious, adaptable, and always eager to explore new tools and ideas that push boundaries and deliver meaningful results."
      />
    </main>
  )
}
