import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">HB</div>

      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/about">ABOUT</Link>
      </div>

      <div className="nav-socials">
        <a
          href="https://www.linkedin.com/in/harshith-bezawada-970487282/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Harsha1122004"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
