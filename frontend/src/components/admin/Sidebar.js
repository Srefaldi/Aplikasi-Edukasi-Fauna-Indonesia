import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Admin.css';
import axios from 'axios';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sidebar">
      <button className="menu-toggle" onClick={handleToggleMenu}>
        ☰
      </button>
      <ul className={`menu ${showMenu ? 'active' : ''}`}>
        <li><Link to="/home-admin">Beranda</Link></li>
        <li><Link to="/set-fauna">Set Fauna Content</Link></li>
        <li><Link to="/set-quiz">Set Quiz</Link></li>
        <li><Link to="/set-review">Set Review Content</Link></li>
        <li><Link to="/leaderboard-admin">Leaderbard</Link></li>
        <li><Link to="/profil">Profil</Link></li>
        <li><Link to="/keluar" onClick={Logout}>Keluar</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
