export default function About() {
  return (
    <section id="about" className="section section-shell">
      <div className="section-heading">
        <p className="eyebrow">01 — ABOUT ME</p>

        <h2>
          Building practical software with
          <span> AI, data and modern web technologies.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-card about-main">
          <p className="about-intro">
            I&apos;m Mohammed Anas, a Computer Science Engineering graduate
            with hands-on experience across full-stack development, backend
            systems, data analytics and AI-driven applications.
          </p>

          <p>
            I enjoy turning real-world problems into practical software
            solutions — from responsive web applications and REST APIs to
            data-processing workflows, business intelligence dashboards and
            AI-powered applications.
          </p>

          <p>
            My technical foundation includes Python, JavaScript, React.js,
            Next.js, SQL, Power BI and modern AI/ML tools. I&apos;m currently
            open to opportunities where I can contribute to software
            development, backend engineering, data analytics or AI-focused
            projects.
          </p>
        </div>

        <div className="about-card">
          <div className="card-label">CURRENT FOCUS</div>

          <ul className="focus-list">
            <li>
              <span>01</span>
              Full Stack Development
            </li>

            <li>
              <span>02</span>
              Backend & REST APIs
            </li>

            <li>
              <span>03</span>
              Data Analytics & BI
            </li>

            <li>
              <span>04</span>
              AI-driven Applications
            </li>
          </ul>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <strong>2026</strong>
          <span>CSE Graduate</span>
        </div>

        <div>
          <strong>03+</strong>
          <span>Featured Projects</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Internships</span>
        </div>

        <div>
          <strong>01</strong>
          <span>AI Analytics Certification</span>
        </div>
      </div>
    </section>
  );
}