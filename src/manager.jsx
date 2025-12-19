import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Manager.css";

const Manager = (props) => {
  console.log(props.tasks);
  const navigate = useNavigate();

  // Team Leads State
  const [teamLeads, setTeamLeads] = useState([
    { username: "lead1", password: "lead1@123", role: "TeamLead" },
    { username: "lead2", password: "lead2@123", role: "TeamLead" },
    { username: "lead3", password: "lead3@123", role: "TeamLead" }
  ]);
  const [newLead, setNewLead] = useState({ username: "", password: "" });
  const [editLeadIndex, setEditLeadIndex] = useState(null);

  // Tasks State
  const [tasks, setTasks] = useState(props.tasks);
  const [newTask, setNewTask] = useState({ Task_name: "", Task_description: "", Task_deadline: "", Assigned_Lead: "", Status: "To-Do" });
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  /*** Team Lead Management ***/
  const handleTeamLeadSubmit = () => {
    if (!newLead.username || !newLead.password) {
      alert("Please enter valid details!");
      return;
    }

    if (editLeadIndex !== null) {
      const updatedLeads = [...teamLeads];
      updatedLeads[editLeadIndex] = { ...newLead, role: "Team lead" };
      setTeamLeads(updatedLeads);
      setEditLeadIndex(null);
    } else {
      setTeamLeads([...teamLeads, { ...newLead, role: "Team lead" }]);
    }

    setNewLead({ username: "", password: "" });
  };

  const editTeamLead = (index) => {
    setNewLead(teamLeads[index]);
    setEditLeadIndex(index);
  };

  const deleteTeamLead = (index) => {
    setTeamLeads(teamLeads.filter((_, i) => i !== index));
    setEditLeadIndex(null);
  };

  /*** Task Management ***/
  const handleTaskSubmit = () => {
    if (!newTask.Task_name || !newTask.Task_description || !newTask.Task_deadline || !newTask.Assigned_Lead) {
      alert("All fields are required!");
      return;
    }

    if (editTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = newTask;
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setNewTask({ Task_name: "", Task_description: "", Task_deadline: "", Assigned_Lead: "", Status: "To-Do" });
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditTaskIndex(index);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>Welcome to Manager Dashboard</h2>
        <div className="nav-links">
          <button onClick={() => navigate("/")}>Home Page</button>
          <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </nav>

      <div className="dashboard-content">
        {/* Register Team Lead Section */}
        <div className="team-lead-section">
          <h3>{editLeadIndex !== null ? "Edit Team Lead" : "Register Team Lead"}</h3>
          <input type="text" placeholder="Username" value={newLead.username} onChange={(e) => setNewLead({ ...newLead, username: e.target.value })} />
          <input type="password" placeholder="Password" value={newLead.password} onChange={(e) => setNewLead({ ...newLead, password: e.target.value })} />
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
