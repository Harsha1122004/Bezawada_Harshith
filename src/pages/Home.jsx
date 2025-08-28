import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  // Corrected Google Drive link for view-only
  const resumeLink =
    "https://drive.google.com/file/d/1YsTiEoPKxFlPhk4JnODBayvw59QpXgmP/view?usp=sharing";
  const whatsappNumber = "7075765587";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="home-container">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-quote">
            "I build **innovative digital solutions** with a passion for clean
            code and seamless user experiences."
          </p>
          <p className="hero-description">
            As a dedicated developer, I specialize in crafting robust and
            scalable web applications using modern technologies. My focus is on
            transforming complex challenges into elegant, efficient, and
            user-friendly products.
          </p>
          <div className="hero-buttons">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Resume
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lets-talk-button"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Harshith Bezawada"
            className="profile-img"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
