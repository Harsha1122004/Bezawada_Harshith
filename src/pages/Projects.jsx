import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";

// Import your images directly from the assets folder with correct filenames
import elearningImage from "../assets/E-learning.jpg";
import gamingImage from "../assets/Gaming.jpg";
import portalImage from "../assets/Portal .png"; // Make sure filename matches exactly
import profileImage from "../assets/profile.png";
import aiCrImage from "../assets/ai-cir.webp";
import imgAiImage from "../assets/img-ai.jpeg";

const projects = [
  {
    id: 1,
    title: "PHD Student Portal",
    description:
      "A centralized platform for managing PhD applications, research progress, and academic collaboration efficiently.",
    image: portalImage,
    liveLink: "https://phdportal.vercel.app/",
    githubLink: "https://github.com/Harsha1122004/PhD-Student-Portal",
  },
  {
    id: 2,
    title: "Student Counselling & Wellbeing AI",
    description:
      "Student Counselling & Wellbeing AI is an intelligent support platform designed to assist students in managing their mental health, emotional wellness, and academic stress.",
    image: imgAiImage,
    liveLink: "https://mindcure-student.vercel.app/",
    githubLink: "https://github.com/Harsha1122004/mindcure-student",
  },
  {
    id: 3,
    title: "Gaming Community",
    description:
      "An example Frontend Project using HTML, CSS, and JavaScript to create a gaming community website.",
    image: gamingImage,
    liveLink: "https://harsha1122004.github.io/Gaming-community/",
    githubLink:
      "https://github.com/Harsha1122004/Gaming-community/settings/pages",
  },
  {
    id: 4,
    title: "E-learning Platform",
    description:
      "An interactive online platform for learning, skill development, and course management. With both Student and Faculty Login.",
    image: elearningImage,
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "AI Curriculum Generator",
    description:
      "AI Curriculum is an interactive web platform designed to simplify and personalize the journey of learning Artificial Intelligence.",
    image: aiCrImage,
    liveLink: "https://ai-curriculum-tau.vercel.app/",
    githubLink: "https://github.com/Harsha1122004/ai-curriculum",
  },
  // Optional - Future Project
  /*
  {
    id: 6,
    title: "Job Application Automation Agent",
    description: "An AI agent that automatically applies to relevant jobs based on your resume and preferences.",
    image: profileImage,
    liveLink: "https://projectgalaxy.vercel.app/",
    githubLink: "https://github.com/Harsha1122004/project-galaxy",
  },
  */
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
