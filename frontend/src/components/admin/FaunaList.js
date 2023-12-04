import React, { useState, useEffect } from 'react';
import './styles/Admin.css';

const FaunaList = () => {
  const [faunaList, setFaunaList] = useState([]);

  useEffect(() => {
    const fakeFaunaData = [
      { id: 1, jenis: 'Harimau', deskripsi: 'Sebuah harimau yang kuat', imageUrl: 'harimau.jpg' },
      { id: 2, jenis: 'Gajah', deskripsi: 'Seekor gajah yang besar', imageUrl: 'gajah.jpg' },
      { id: 3, jenis: 'Kucing', deskripsi: 'Kucing disebut juga kucing domestik atau kucing rumah adalah sejenis mamalia karnivora dari keluarga Felidae. Kata "kucing" biasanya merujuk kepada "kucing" yang telah dijinakkan, tetapi bisa juga bisa merujuk kepada "kucing besar" seperti singa dan harimau yang juga termasuk jenis kucing. ', imageUrl: 'kucing.jpg' },
    ];

    setFaunaList(fakeFaunaData);
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
      backgroundColor: '#fff',
      overflow: 'hidden',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#04AA6D',
      color: 'white',
      padding: '20px',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      border: '1px solid #ddd',
    },
    td: {
      padding: '20px',
      borderBottom: '1px solid #ddd',
      textAlign: 'left',
      border: '1px solid #ddd',
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
      <h1>Data Fauna</h1>
      <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
      <div style={styles.header}>
        <div style={styles.addButton}>Tambah Fauna</div>
        <div style={styles.actionButtons}>
          <div style={styles.printButton}>Cetak</div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Cari Fauna..."
        style={styles.searchInput}
      />
      <table style={styles.table}>
        <thead>
          <tr style={styles.th}>
            <th>No</th>
            <th>Gambar Fauna</th>
            <th>Jenis Fauna</th>
            <th>Deskripsi</th>
            <th style={styles.actionButtonsCell}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {faunaList.map((fauna, index) => (
            <tr key={index} style={styles.td}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={fauna.imageUrl}
                  alt={`Gambar ${fauna.jenis}`}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </td>
              <td>{fauna.jenis}</td>
              <td>{fauna.deskripsi}</td>
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

export default FaunaList;
