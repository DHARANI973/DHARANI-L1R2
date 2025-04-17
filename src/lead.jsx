import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./lead.css";

const TeamLead = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUsername = location.state?.username || "";

  useEffect(() => {
    if (!loggedInUsername) {
      navigate("/login");
    }
  }, [loggedInUsername, navigate]);

  const [tasks] = useState(props.tasks);

  const myTasks = tasks.filter((task) => task.Assigned_Lead === loggedInUsername);

  return (
    <div className="team-lead-container">
      <nav className="team-nav">
        <h2>Welcome, {loggedInUsername}!</h2>
        <div className="nav-links">
        <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </nav>

      <div className="task-table-container">
        <h3>My Projects</h3>
        <table className="task-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task, index) => (
              <tr key={index}>
                <td>{task.Task_name}</td>
                <td>{task.Task_description}</td>
                <td>{task.Task_deadline}</td>
                <td>{task.Status}</td>
              </tr>
            ))}
            {myTasks.length === 0 && (
              <tr>
                <td colSpan="6">No projects assigned to you.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamLead;
