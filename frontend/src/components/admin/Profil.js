import React, { useState } from 'react';
import './styles/Admin.css';

const Profil = () => {
  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [konfirmasiPasswordBaru, setKonfirmasiPasswordBaru] = useState('');

  const handleSimpanClick = () => {
    console.log('Data disimpan:', {
      passwordLama,
      passwordBaru,
      konfirmasiPasswordBaru,
    });
  };

  const styles = {
    container: {
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    profilContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profilPicture: {
      width: '150px',
      height: '160px', 
      borderRadius: '50%',
      marginBottom: '10px',
    },
    ubahPasswordContainer: {
      marginBottom: '20px',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Profil</h1>
      <hr style={{ border: '1px solid black', marginBottom: '20px' }} />

      <div style={styles.profilContainer}>
        <img
        className='lazyload'
          data-src="nanda.jpeg" 
          alt="Profil"
          style={styles.profilPicture}
        />
        <p>Nama Pengguna: Difana Nanda</p>
      </div>

      <div style={styles.ubahPasswordContainer}>
        <h2>Ubah Password</h2>
        <input
          type="password"
          placeholder="Password Lama"
          style={styles.input}
          value={passwordLama}
          onChange={(e) => setPasswordLama(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password Baru"
          style={styles.input}
          value={passwordBaru}
          onChange={(e) => setPasswordBaru(e.target.value)}
        />
        <input
          type="password"
          placeholder="Konfirmasi Password Baru"
          style={styles.input}
          value={konfirmasiPasswordBaru}
          onChange={(e) => setKonfirmasiPasswordBaru(e.target.value)}
        />
      </div>

      <div style={styles.button} onClick={handleSimpanClick}>
        Simpan
      </div>
    </div>
  );
};

export default Profil;
