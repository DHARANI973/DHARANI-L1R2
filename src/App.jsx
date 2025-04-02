import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import LoginPage from "./Login";
import Manager from  "./manager";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
};

export default App;
