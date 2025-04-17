import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import LoginPage from "./Login";
import Manager from "./manager";
import TeamLead from "./lead";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [tasks, setTasks] = useState([
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
      Assigned_Lead: "lead3",
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
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
        <Route path="/manager" element={<Manager tasks={tasks} setTasks={setTasks} />} />
        <Route path="/lead" element={<TeamLead tasks={tasks} loggedInUser={loggedInUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
