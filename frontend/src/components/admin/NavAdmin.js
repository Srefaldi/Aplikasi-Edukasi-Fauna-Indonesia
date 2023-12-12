import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavAdmin = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const navbarStyle = {
    backgroundColor: '#112546',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container">
        <div className="navbar-brand mr-auto">
          <h1 className="logo mt-2">Admin Site</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home-admin">
                Home Admin
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link logout-button" onClick={Logout}>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
