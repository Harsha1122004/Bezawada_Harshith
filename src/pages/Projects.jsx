import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

// Import your images directly from the assets folder with correct filenames
import elearningImage from "../assets/E-learning.jpg";
import gamingImage from "../assets/Gaming.jpg";
import portalImage from "../assets/Portal .png"; // Note the space in the filename
import profileImage from "../assets/profile.jpg";

const projects = [
  {
    id: 1,
    title: "PHD Student Portal",
    description:
      "A centralized platform for managing PhD applications, research progress, and academic collaboration efficiently.",
    image: portalImage, // Use the imported image variable
    liveLink: "#",
    githubLink: "https://github.com/Harsha1122004/PhD-Student-Portal",
  },
  {
    id: 2,
    title: "E-learning Platform",
    description:
      "An interactive online platform for learning, skill development, and course management.With Both Student and Faculty Login .",
    image: elearningImage, // Use the imported image variable
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Gaming Commmunity",
    description:
      "An example Frontend Project using HTML, CSS, and JavaScript to create a gaming community website.",
    image: gamingImage, // Use the imported image variable
    liveLink: "https://harsha1122004.github.io/Gaming-community/",
    githubLink:
      "https://github.com/Harsha1122004/Gaming-community/settings/pages",
  },
  // {
  //   id: 4,
  //   title: "Project 4 Title",
  //   description:
  //     "A data visualization project using PowerBI to analyze large datasets and generate interactive reports.",
  //   image: imahgeNone, // Using the profile image as a placeholder
  //   liveLink: "#",
  //   githubLink: "#",
  // },
];

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-page-container">
        <section className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
