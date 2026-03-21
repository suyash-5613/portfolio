import "./Projects.css";
import project1 from "../../Assets/ecommerce.png";
import project2 from "../../Assets/portfolio.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform featuring a modern UI, seamless cart management, secure checkout, and a responsive design. Specifically built for high-performance shopping experiences.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      repoLink: "https://github.com/suyash-5613/flipzone",
      demoLink: "https://suyash-5613.github.io/flipzone",
      image: project1,
    },
    {
      name: "Modern Portfolio",
      description:
        "A premium software developer portfolio featuring dark mode aesthetics, glassmorphism, responsive bento-grids, and interactive animations to showcase projects and skills.",
      techStack: ["React", "TypeScript", "CSS Modules"],
      repoLink: "https://github.com/suyash-5613/react-portfolio",
      demoLink: "https://suyash-5613.github.io/react-portfolio",
      image: project2,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-overlay">
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="project-link" aria-label="Github Repository">
                    <FaGithub /> <span>Code</span>
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link primary" aria-label="Live Demo">
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
