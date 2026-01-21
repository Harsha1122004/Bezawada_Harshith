import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

// Images
import elearningImage from "../assets/E-learning.jpg";
import gamingImage from "../assets/Gaming.jpg";
import portalImage from "../assets/Portal .png";
import aiCrImage from "../assets/ai-cir.webp";
import imgAiImage from "../assets/img-ai.jpeg";

const projects = [
  {
    id: 1,
    title: "PhD Student Portal",
    description:
      "A centralized MERN-based platform for managing PhD applications, research tracking, and academic collaboration.",
    image: portalImage,
    liveLink: "https://phd-student-portal.onrender.com/",
    githubLink: "https://github.com/Harsha1122004/PhD-Student-Portal",
  },
  {
    id: 2,
    title: "Student Wellbeing AI",
    description:
      "An AI-powered platform that supports student mental health using sentiment analysis and intelligent feedback.",
    image: imgAiImage,
    liveLink: "https://mindcure-student.vercel.app/",
    githubLink: "https://github.com/Harsha1122004/mindcure-student",
  },
  {
    id: 3,
    title: "Gaming Community",
    description:
      "A frontend gaming community website built using HTML, CSS, and JavaScript.",
    image: gamingImage,
    liveLink: "https://harsha1122004.github.io/Gaming-community/",
    githubLink: "https://github.com/Harsha1122004/Gaming-community",
  },
  {
    id: 4,
    title: "E-learning Platform",
    description:
      "An interactive learning platform with structured courses, progress tracking, and responsive design.",
    image: elearningImage,
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "AI Curriculum Generator",
    description:
      "An AI-driven curriculum generation platform that personalizes learning pathways for AI aspirants.",
    image: aiCrImage,
    liveLink: "https://ai-curriculum-tau.vercel.app/",
    githubLink: "https://github.com/Harsha1122004/ai-curriculum",
  },
];

const Projects = () => {
  return (
    <>
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
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
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
    </>
  );
};

export default Projects;
