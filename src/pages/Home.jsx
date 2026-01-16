import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import heroImage from "../assets/hero.png";

const Home = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.6;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", playSound);
    };

    window.addEventListener("click", playSound);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("click", playSound);
    };
  }, []);

  return (
    <div className="home">
      <Navbar />

      <audio ref={audioRef} src="/sounds/vengeance.mp3" preload="auto" />

      <section className="hero motion-enter">
        <div className="hero-bg-text">
          <span className="main-text">I BUILD IN THE SHADOWS</span>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Harshith Bezawada" />
        </div>

        <div className="hero-foreground">
          <p className="hero-name">HARSHITH BEZAWADA</p>
          <p className="hero-role">Full Stack Developer • MERN • Cloud • AI</p>

          <div className="hero-actions">
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
            <a href="https://wa.me/7075765587" target="_blank" rel="noreferrer">
              LET’S TALK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
