import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="animated-logo">Work Flow Management System</h1>
      <div className="home-content">
        <header className="hero-section">
          <h2>Streamline Your Workflow</h2>
          <p>Manage tasks, collaborate, and track progress seamlessly.</p>
          <button className="get-started-btn" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </header>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-container">
            <div className="feature-box">
              <h3>Task Management</h3>
              <p>Organize your tasks efficiently and never miss a deadline.</p>
            </div>
            <div className="feature-box">
              <h3>Team Collaboration</h3>
              <p>Communicate with your team and keep projects on track.</p>
            </div>
            <div className="feature-box">
              <h3>Progress Tracking</h3>
              <p>Visualize project progress with real-time insights.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
