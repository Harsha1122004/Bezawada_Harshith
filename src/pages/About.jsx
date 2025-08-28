import React from "react";
import {
  FaJava,
  FaReact,
  FaAws,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  //   SiVisualstudiocode,
  //   SiMicrosoftpowerbi,
  SiGit,
  SiSqlite,
} from "react-icons/si";

import Navbar from "../components/Navbar";
import "../styles/About.css";

const skills = [
  { name: "Java", icon: <FaJava />, type: "Languages" },
  { name: "JavaScript", icon: <SiJavascript />, type: "Languages" },
  { name: "AWS", icon: <FaAws />, type: "Cloud" },
  { name: "HTML", icon: <FaHtml5 />, type: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt />, type: "Frontend" },
  { name: "React.js", icon: <FaReact />, type: "Frontend" },
  { name: "MongoDB", icon: <SiMongodb />, type: "Backend" },
  { name: "SQL", icon: <SiSqlite />, type: "Backend" },
  { name: "Node.js", icon: <FaNodeJs />, type: "Backend" },
  //   { name: "VS Code", icon: <SiVisualstudiocode />, type: "Tools" },
  { name: "GitHub", icon: <FaGithub />, type: "Tools" },
  //   { name: "PowerBI", icon: <SiMicrosoftpowerbi />, type: "Tools" },
  { name: "Git", icon: <SiGit />, type: "Tools" },
];

const About = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.type] = acc[skill.type] || []).push(skill);
    return acc;
  }, {});

  return (
    <div>
      {" "}
      <Navbar />
      <div className="about-page-container">
        <section className="about-me-section">
          <h2>About Me</h2>
          <p className="bio-text">
            I am a passionate and dedicated professional with a strong
            foundation in software engineering and a deep interest in building
            innovative digital solutions. My expertise spans across both
            front-end and back-end development, allowing me to create robust and
            scalable applications from the ground up. I am a detail-oriented
            problem-solver who thrives on new challenges and constantly seeks to
            learn and grow in the ever-evolving tech landscape.
          </p>
        </section>

        <section className="skills-section">
          <h2>What I Do</h2>
          <div className="skills-grid-container">
            {Object.entries(groupedSkills).map(([type, skills]) => (
              <div key={type} className="skill-category">
                <h3>{type}</h3>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="skill-category soft-skills">
              <h3>Soft Skills</h3>
              <div className="skills-list">
                <span className="soft-skill-item">Leadership</span>
                <span className="soft-skill-item">Problem-Solving</span>
                <span className="soft-skill-item">Communication</span>
                <span className="soft-skill-item">Adaptability</span>
                <span className="soft-skill-item">Perseverance</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
