import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './styles/Admin.css';
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

  return (
    <div className="nav-admin"> 
      <div className="left-content">
        <div className="logo">Admin Site</div>
      </div>
      <div className="right-content">
        <Link to="/home-admin" className="nav-link">Home Admin</Link>
        <div className="logout-button" onClick={Logout}>Logout</div>
      </div>
    </div>
  );
};

export default NavAdmin;