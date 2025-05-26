import AboutCard from "../../components/AboutCard/AboutCard";
import "./Overview.css";

export default function Overview() {
  return(
    <main className="about-sub-body">
      <h3>Overview</h3>

      <AboutCard
        title="AboutCard Title"
        subtitle="AboutCard Subtitle"
        description="AboutCard Description"
      />
      <AboutCard
        title="AboutCard Title"
        subtitle="AboutCard Subtitle"
        description="AboutCard Description"
      />

    </main>
  )
}
