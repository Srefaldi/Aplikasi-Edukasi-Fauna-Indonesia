import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavAdmin = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete(`${process.env.API_ENDPOINT}/logout`);
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

  const centerText = {
    textAlign: 'center', // Untuk membuat teks berada di tengah secara horizontal
    width: '100%', // Menetapkan lebar agar fleksibel
    display: 'flex', // Menggunakan flexbox
    justifyContent: 'center', // Menengahkan secara horizontal
    alignItems: 'center', // Menengahkan secara vertikal
    height: '100%', // Menetapkan tinggi agar fleksibel
  };

  const logoStyle = {
    margin: '0', // Menghilangkan margin
  };

  return (
    <nav className="navbarr navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="text">
        <div className="navbar-brand mr-auto">
          <h1 className="logo mt-3" style={{...centerText, ...logoStyle}}>Admin Site</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
