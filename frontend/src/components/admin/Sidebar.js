import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Admin.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/home-admin">Beranda</Link></li>
        <li><Link to="/set-fauna">Set Fauna Content</Link></li>
        <li><Link to="/#">Set Quiz Content</Link></li>
        <li><Link to="/#">Set Review Content</Link></li>
        <li><Link to="/profil">Profil</Link></li>
        <li><Link to="/keluar">Keluar</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;