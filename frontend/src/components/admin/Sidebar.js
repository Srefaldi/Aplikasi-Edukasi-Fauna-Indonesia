import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Admin.css'

const Sidebar = () => {
  const adminData = {
    fotoProfil: 'nanda.jpeg',
    namaAdmin: 'Difana Nanda',
  };

  const styles = {
    adminInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profilPicture: {
      width: '130px', 
      height: '140px', 
      borderRadius: '50%',
      marginBottom: '10px',
    },
  };

  return (
    <div className="sidebar" style={styles.sidebar}>
      <div className="logo" style={styles.logo}>EduFauna Indonesia</div>
      <div className="admin-info" style={styles.adminInfo}>
        <img src={adminData.fotoProfil} alt="Profil" className="profil-picture" style={styles.profilPicture} />
        <p className="admin-name" style={styles.adminName}>{adminData.namaAdmin}</p>
      </div>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/beranda">Beranda</Link></li>
        <li style={styles.li}><Link to="/fauna">Fauna</Link></li>
        <li style={styles.li}><Link to="/quiz">Quiz</Link></li>
        <li style={styles.li}><Link to="/profil">Profil</Link></li>
        <li style={styles.li}><Link to="/keluar">Keluar</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
