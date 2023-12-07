import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './styles/Admin.css';

const SetFauna = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  const [faunaListItem, setFaunaList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-allfauna');
      setFaunaList(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/login');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);

        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
    fetchData();
  }, []);

  const styles = {
    container: {
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    addButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    actionButtons: {
      display: 'flex',
      alignItems: 'center',
    },
    printButton: {
      backgroundColor: '#2ecc71',
      color: 'white',
      padding: '10px',
      marginLeft: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    searchInput: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      marginRight: '10px',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: '#04AA6D',
      color: 'white',
      padding: '15px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #ddd',
      textAlign: 'left',
    },
    actionButtonsCell: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      gap: '5px',
    },
    editButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    deleteButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.addButton}>Tambah Fauna</div>
        <div style={styles.actionButtons}>
          <div style={styles.printButton}>Cetak</div>
        </div>
      </div>
      <input type="text" placeholder="Cari Fauna..." style={styles.searchInput} />
      <table style={styles.table}>
        <thead>
          <tr style={styles.th}>
            <th>No</th>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>kategori 1</th>
            <th>kategori 2</th>
            <th>Deskripsi Habitat</th>
            <th>Deskripsi populasi</th>
            <th style={styles.actionButtonsCell}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {faunaListItem.map((fauna, index) => (
            <tr key={index} style={styles.td}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={fauna.image_url}
                  alt={`Gambar ${fauna.name}`}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </td>
              <td>{fauna.name}</td>
              <td>{fauna.description}</td>
              <td>{fauna.kategori_1}</td>
              <td>{fauna.kategori_2}</td>
              <td>{fauna.desc_habitat}</td>
              <td>{fauna.desc_populasi}</td>
              <td style={styles.actionButtonsCell}>
                <div style={styles.editButton}>Edit</div>
                <div style={styles.deleteButton}>Hapus</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SetFauna;
