import "./Home.css";

export default function Home() {
  return (
    <>
      <header id="hero" className="flex-container">
        <section id="hero-contents" className="flex-container">
          <section id="hero-text" className="flex-container">
            <h2>Hi, I'm...</h2>
            <h1>Usman Khalid</h1>
            <h3>
              Born to create solutions to complex challenges, driven by a love
              for mathematics.
            </h3>
          </section>
          <div id="hero-buttons" className="flex-container">
            <button id="view-projects" className="flex-container button">
              View Projects
            </button>
            <button id="about-me" className="flex-container button">
              About Me
            </button>
          </div>
        </section>
        <figure id="hero-profile" className="flex-container"></figure>
      </header>

      <main id="featured-projects-body">
        <h3>Featured Projects</h3>
        <section id="featured-projects"></section>
        <button id="view-all-projects" className="flex-container button">
          View All Projects
        </button>
      </main>
    </>
  );
}
