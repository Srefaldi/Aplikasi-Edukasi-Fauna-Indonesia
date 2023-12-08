import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './styles/Admin.css';
import axios from 'axios';


const Sidebar = () => {
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
    <div className="sidebar">
      <ul>
        <li><Link to="/home-admin">Beranda</Link></li>
        <li><Link to="/set-fauna">Set Fauna Content</Link></li>
        <li><Link to="/#">Set Quiz Content</Link></li>
        <li><Link to="/#">Set Review Content</Link></li>
        <li><Link to="/profil">Profil</Link></li>
        <li><Link to="/keluar" onClick={Logout}>Keluar</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;