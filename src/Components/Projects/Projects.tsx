import "./Projects.css";
import project1 from "../../Assets/ecommerce.png";
import project2 from "../../Assets/portfolio.png";

function Projects() {
  let projects = [
    {
      name: "E-Commerce Website",
      description:
        "Discover the latest trends and timeless fashion with our curated selection of high-quality clothing for men, women, and kids. Whether you're looking for everyday essentials or statement pieces for special occasions, we offer a variety of styles to suit every taste.",
      "repo-link": "https://github.com/suyash-5613/flipzone",
      "demo-link": "https://suyash-5613.github.io/flipzone",
      image: project1,
    },
    {
      name: "Portfolio",
      description:
        "Welcome to my portfolio, a showcase of my work as a web developer. Explore my journey through code and creativity, and get in touch to collaborate on future innovations!",
      "repo-link": "https://github.com/suyash-5613/react-portfolio",
      "demo-link": "https://suyash-5613.github.io/react-portfolio",
      image: project2,
    },
  ];
  return (
    <div id="projects" className="projects">
      <h1 className="heading">My Creations</h1>
      <div className="projects-list">
        {projects.map((i,idx) => {
          return (
            <div key={idx} className="horizontal-card-container">
              <div className="horizontal-card">
                <div className="horizontal-card-image">
                  <img src={i.image} alt="Project Image" />
                </div>
                <div className="horizontal-card-content">
                  <div>
                    <div className="title">
                      <h3>{i.name}</h3>
                      <a href={i["repo-link"]} target="_blank">
                        <svg
                          width="800px"
                          height="800px"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L10.7071 10.7071Z" />
                          <path d="M15 15V11.5C15 10.9477 15.4477 10.5 16 10.5C16.5523 10.5 17 10.9477 17 11.5V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3H8.5C9.05228 3 9.5 3.44772 9.5 4C9.5 4.55228 9.05228 5 8.5 5H5V15H15Z" />
                          <path d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4V8Z" />
                          <path d="M12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H12Z" />
                        </svg>
                      </a>
                    </div>
                    <p>{i.description}</p>
                  </div>
                  <a href={i["demo-link"]} className="button" target="_blank">
                    Open Demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
