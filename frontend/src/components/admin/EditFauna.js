import React, { useState } from 'react';
import './styles/Admin.css';

const EditFaunaContainer = () => {
  const [namaFauna, setNamaFauna] = useState('');
  const [gambarFauna, setGambarFauna] = useState('');
  const [pulau, setPulau] = useState('');
  const [jenis, setJenis] = useState('');
  const [habitat, setHabitat] = useState('');
  const [populasi, setPopulasi] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSimpanClick = () => {
    console.log('Data disimpan:', {
      namaFauna,
      gambarFauna,
      pulau,
      jenis,
      habitat,
      populasi,
      deskripsi,
    });
  };

  const styles = {
    container: {
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid #ddd',
      borderRadius: '5px',
    },
    textarea: {
      marginBottom: '10px',
      padding: '8px',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid #ddd',
      borderRadius: '5px',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px 15px', // Mengurangi ukuran panjang tombol
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Edit Fauna</h1>
      <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
      <p>Edit Data Fauna</p>

      <input
        type="text"
        placeholder="Nama Fauna"
        style={styles.input}
        value={namaFauna}
        onChange={(e) => setNamaFauna(e.target.value)}
      />

      <input
        type="text"
        placeholder="Gambar Fauna URL"
        style={styles.input}
        value={gambarFauna}
        onChange={(e) => setGambarFauna(e.target.value)}
      />

      <input
        type="text"
        placeholder="Pulau"
        style={styles.input}
        value={pulau}
        onChange={(e) => setPulau(e.target.value)}
      />

      <input
        type="text"
        placeholder="Jenis"
        style={styles.input}
        value={jenis}
        onChange={(e) => setJenis(e.target.value)}
      />

      <input
        type="text"
        placeholder="Habitat"
        style={styles.input}
        value={habitat}
        onChange={(e) => setHabitat(e.target.value)}
      />

      <input
        type="text"
        placeholder="Populasi"
        style={styles.input}
        value={populasi}
        onChange={(e) => setPopulasi(e.target.value)}
      />

      <textarea
        placeholder="Deskripsi"
        style={styles.textarea}
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
      ></textarea>

      <div style={styles.button} onClick={handleSimpanClick}>
        Simpan
      </div>
    </div>
  );
};

export default EditFaunaContainer;
