import "../styles/PageLoader.css";
import logo from "../assets/logo.png";

const PageLoader = ({ show }) => {
  return (
    <div className={`page-loader ${show ? "show" : "hide"}`}>
      <div className="loader-inner">
        <img src={logo} alt="Batman Logo" className="loader-logo" />
        <p className="loader-text">I AM VENGEANCE</p>
      </div>
    </div>
  );
};

export default PageLoader;
