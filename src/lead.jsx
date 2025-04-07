import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./lead.css";

const TeamLead = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUsername = location.state?.username || "";

  useEffect(() => {
    if (!loggedInUsername) {
      navigate("/login");
    }
  }, [loggedInUsername, navigate]);

  const [tasks] = useState([
    {
      Task_name: "Database Optimization",
      Task_description: "Optimize SQL queries and improve DB performance",
      Task_deadline: "2025-04-05",
      Assigned_Lead: "lead1",
      Status: "In Progress"
    },
    {
      Task_name: "UI/UX Design",
      Task_description: "Design user-friendly interfaces for the app",
      Task_deadline: "2025-03-28",
      Assigned_Lead: "lead1",
      Status: "To-Do"
    },
    {
      Task_name: "Bug Fixing Sprint",
      Task_description: "Fix all critical and major bugs from QA",
      Task_deadline: "2025-03-18",
      Assigned_Lead: "lead1",
      Status: "Completed"
    },
    {
      Task_name: "Authentication Module",
      Task_description: "Implement secure login and user roles",
      Task_deadline: "2025-03-22",
      Assigned_Lead: "lead2",
      Status: "In Progress"
    },
    {
      Task_name: "Payment Gateway Integration",
      Task_description: "Integrate Razorpay and PayPal options",
      Task_deadline: "2025-04-01",
      Assigned_Lead: "lead2",
      Status: "To-Do"
    },
    {
      Task_name: "Admin Dashboard",
      Task_description: "Develop dashboard for admin analytics and control",
      Task_deadline: "2025-04-10",
      Assigned_Lead: "lead2",
      Status: "Pending"
    },
    {
      Task_name: "Documentation",
      Task_description: "Write end-user and developer documentation",
      Task_deadline: "2025-03-30",
      Assigned_Lead: "lead3",
      Status: "To-Do"
    },
    {
      Task_name: "Unit Testing",
      Task_description: "Add unit test cases for service layer",
      Task_deadline: "2025-03-19",
      Assigned_Lead: "lead3",
      Status: "In Progress"
    },
    {
      Task_name: "Responsive Design Fix",
      Task_description: "Ensure compatibility on all screen sizes",
      Task_deadline: "2025-03-25",
      Assigned_Lead: "lead2",
      Status: "To-Do"
    },
    {
      Task_name: "Deployment to Production",
      Task_description: "Deploy final build to production server",
      Task_deadline: "2025-04-15",
      Assigned_Lead: "lead1",
      Status: "Planned"
    }
  ]
  );

  const myTasks = tasks.filter((task) => task.Assigned_Lead === loggedInUsername);

  return (
    <div className="team-lead-container">
      <nav className="team-nav">
        <h2>Welcome, {loggedInUsername}!</h2>
        <div className="nav-links">
          <a href="#">My Projects</a>
          <a href="#">Change Password</a>
          <a href="#">Logout</a>
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
