import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="availability">
          <span className="status-dot"></span>
          Open to Software, AI & Data opportunities
        </div>

        <div className="profile-wrapper">
          <Image
            src="/profile.jpeg"
            alt="Mohammed Anas"
            width={180}
            height={225}
            className="profile-image"
            priority
          />
        </div>

        <p className="eyebrow">
          FULL STACK • AI • DATA ANALYTICS • BACKEND
        </p>

        <h1>
          I Build{" "}
          <span>Practical Software, AI & Data Solutions</span>
        </h1>

        <p className="hero-description">
          Computer Science Engineering graduate building full-stack
          applications, REST APIs, AI-powered solutions and data analytics
          workflows using modern web and data technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            Explore Projects
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>
    </section>
  );
}