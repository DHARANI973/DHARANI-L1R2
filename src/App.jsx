import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import LoginPage from "./Login";
import Manager from "./manager";
import TeamLead from "./lead";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/lead" element={<TeamLead />} />
      </Routes>
    </Router>
  );
};

export default App;
