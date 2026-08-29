export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#" className="logo">
          Mohammed Anas
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="theme-button">
          <span className="theme-dot"></span>
          Light
        </button>

      </div>
    </header>
  );
}