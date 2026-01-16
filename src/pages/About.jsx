import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import aboutImage from "../assets/profile.png";

const skills = [
  { name: "Java", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "MERN", level: 90 },
  { name: "Flutter", level: 80 },
  { name: "SQL", level: 95 },
  { name: "AWS", level: 70 },
  { name: "Git/Github", level: 95 },
  { name: "PowerBI", level: 70 },
  { name: "Firebase", level: 95 },
];

const About = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    skillsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div className="about-page">
        <section className="about-hero">
          <div className="about-image">
            <img src={aboutImage} alt="Harshith Bezawada" />
          </div>

          <div className="about-content">
            <h1>ABOUT ME</h1>
            <p>
              I am a Full Stack Developer specializing in MERN stack,
              cloud, scalable application development and cinematic UI.
            </p>
            <p>
              I build efficient, secure and visually intentional experiences —
              where every line of code serves a purpose.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <h2>MY SKILLS</h2>

          <div className="skills-wrapper">
            {skills.map((skill, index) => (
              <div
                className="skill-bar"
                key={skill.name}
                ref={(el) => (skillsRef.current[index] = el)}
              >
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="bar-bg">
                  <div
                    className="bar-fill"
                    style={{ "--level": `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
