import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./dash.css";
const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.name}!</p>
      <p>Email: {currentUser.email}</p>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
