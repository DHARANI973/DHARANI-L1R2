import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const users = [
  { username: "manager", password: "manager@123", role: "Manager" },
  { username: "lead1", password: "lead1@123", role: "TeamLead" },
  { username: "lead2", password: "lead2@123", role: "TeamLead" },
  { username: "lead3", password: "lead3@123", role: "TeamLead" },
];

const LoginPage = ({ setLoggedInUser }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
      setError("Invalid Username or Password!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setLoggedInUser(user.username);

      if (user.role === "Manager") navigate("/manager");
      else if (user.role === "TeamLead") navigate("/lead", { state: { username: user.username } });
    }, 2000);
  };

  return (
    <div className={`login-container ${loading ? "blurred" : ""}`}>
      {!loading && (
        <div className="login-box">
          <h1>Welcome Back!</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      )}
      {loading && <div className="spinner"></div>}
    </div>
  );
};

export default LoginPage;
