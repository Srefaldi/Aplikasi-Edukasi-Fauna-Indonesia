import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Admin.css';

const NavAdmin = () => {
  const handleLogout = () => {
    // Implement logout logic here
    // Redirect user to the login page or perform any necessary actions
  };

  return (
    <div className="nav-admin"> 
      <div className="left-content">
        <div className="logo">Admin Site</div>
      </div>
      <div className="right-content">
        <Link to="/home-admin" className="nav-link">Home Admin</Link>
        <div className="logout-button" onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default NavAdmin;