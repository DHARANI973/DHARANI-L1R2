import React, { useState } from "react";
import "./Manager.css";

const Manager = () => {
  // Team Leads State
  const [teamLeads, setTeamLeads] = useState([
    { username: "lead1", password: "lead1@123", role: "TeamLead" },
    { username: "lead2", password: "lead2@123", role: "TeamLead" },
    { username: "lead3", password: "lead3@123", role: "TeamLead" }
  ]);
  const [newLead, setNewLead] = useState({ username: "", password: "" });
  const [editLeadIndex, setEditLeadIndex] = useState(null); // Track editing index

  // Tasks State
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
  ]);
  const [newTask, setNewTask] = useState({ Task_name: "", Task_description: "", Task_deadline: "", Assigned_Lead: "", Status: "To-Do" });
  const [editTaskIndex, setEditTaskIndex] = useState(null); // Track editing index

  /*** Team Lead Management ***/

  // Add or Update Team Lead
  const handleTeamLeadSubmit = () => {
    if (!newLead.username || !newLead.password) {
      alert("Please enter valid details!");
      return;
    }

    if (editLeadIndex !== null) {
      // Update existing team lead
      const updatedLeads = [...teamLeads];
      updatedLeads[editLeadIndex] = { ...newLead, role: "Team lead" };
      setTeamLeads(updatedLeads);
      setEditLeadIndex(null);
    } else {
      // Add new team lead
      setTeamLeads([...teamLeads, { ...newLead, role: "Team lead" }]);
    }

    setNewLead({ username: "", password: "" }); // Reset input fields
  };

  // Edit Team Lead
  const editTeamLead = (index) => {
    setNewLead(teamLeads[index]); // Load selected team lead into input fields
    setEditLeadIndex(index);
  };

  // Delete Team Lead
  const deleteTeamLead = (index) => {
    setTeamLeads(teamLeads.filter((_, i) => i !== index));
    setEditLeadIndex(null); // Reset edit state if editing lead is deleted
  };

  /*** Task Management ***/

  // Create or Update Task
  const handleTaskSubmit = () => {
    if (!newTask.Task_name || !newTask.Task_description || !newTask.Task_deadline || !newTask.Assigned_Lead) {
      alert("All fields are required!");
      return;
    }

    if (editTaskIndex !== null) {
      // Update Existing Task
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = newTask;
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    } else {
      // Create New Task
      setTasks([...tasks, newTask]);
    }

    // Reset Input Fields
    setNewTask({ Task_name: "", Task_description: "", Task_deadline: "", Assigned_Lead: "", Status: "To-Do" });
  };

  // Edit Task
  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditTaskIndex(index);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>Manager Dashboard</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Tasks</a>
          <a href="#">Logout</a>
        </div>
      </nav>

      <div className="dashboard-content">
        {/* Register Team Lead Section */}
        <div className="team-lead-section">
          <h3>{editLeadIndex !== null ? "Edit Team Lead" : "Register Team Lead"}</h3>
          <input 
            type="text" 
            placeholder="Username" 
            value={newLead.username} 
            onChange={(e) => setNewLead({ ...newLead, username: e.target.value })} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={newLead.password} 
            onChange={(e) => setNewLead({ ...newLead, password: e.target.value })} 
          />
          <button className="addlead" onClick={handleTeamLeadSubmit}>
            {editLeadIndex !== null ? "Update Team Lead" : "Add Team Lead"}
          </button>

          <ul>
            {teamLeads.map((lead, index) => (
              <li key={index}>
                {lead.username} 
                <div>
                  <button className="edit-btn1" onClick={() => editTeamLead(index)}>Edit</button>
                  &nbsp;&nbsp;
                  <button className="delete-btn1" onClick={() => deleteTeamLead(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Create Task Section */}
        <div className="task-section">
          <h3>{editTaskIndex !== null ? "Edit Task" : "Create Task"}</h3>
          <input type="text" placeholder="Task Name" value={newTask.Task_name} onChange={(e) => setNewTask({ ...newTask, Task_name: e.target.value })} />
          <textarea placeholder="Task Description" value={newTask.Task_description} onChange={(e) => setNewTask({ ...newTask, Task_description: e.target.value })}></textarea>
          <input type="date" value={newTask.Task_deadline} onChange={(e) => setNewTask({ ...newTask, Task_deadline: e.target.value })} />
          
          <select value={newTask.Assigned_Lead} onChange={(e) => setNewTask({ ...newTask, Assigned_Lead: e.target.value })}>
            <option value="">Select Team Lead</option>
            {teamLeads.map((lead, index) => (
              <option key={index} value={lead.username}>{lead.username}</option>
            ))}
          </select>

          <button className="createtask" onClick={handleTaskSubmit}>{editTaskIndex !== null ? "Update Task" : "Create Task"}</button>
        </div>
      </div>

      {/* Task List */}
      <div className="task-list">
        <h3>Assigned Tasks</h3>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Team Lead</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.Task_name}</td>
                <td>{task.Task_description}</td>
                <td>{task.Task_deadline}</td>
                <td>{task.Assigned_Lead}</td>
                <td>{task.Status}</td>
                <td className="task-actions">
                  <button className="edit-btn" onClick={() => editTask(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manager;
