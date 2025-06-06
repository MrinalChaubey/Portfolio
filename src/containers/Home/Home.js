import React from "react";
import { useNavigate } from "react-router-dom"; // import for navigation
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // hook to navigate

  const handleHireClick = () => {
    navigate("/contact");
  };

  return (
    <div className="home-container">
      <div className="intro-header">
        {/* <img src={profilePic} alt="Profile" className="profile-img" /> */}
        <div className="profile-img-placeholder" />
        <h1 className="headline">
          Hi, I'm Mrinal Chaubey, a third-year Information Technology student<br />
          at the National Institute of Technology, Raipur.<br />
          I'm passionate about coding, personal growth,<br />
          and actively participating in sports activities.
        </h1>
      </div>

      <div className="hire-section">
        <button className="hire-button" onClick={handleHireClick}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Home;
