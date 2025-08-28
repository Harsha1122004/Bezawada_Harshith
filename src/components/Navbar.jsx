import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
      </div>
      <div className="nav-center">
        <span className="nav-brand">HARSHITH BEZAWADA</span>
      </div>
      <div className="nav-right">
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Harsha1122004"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshith-bezawada-970487282"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="close-icon-container">
          <IoClose className="close-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
