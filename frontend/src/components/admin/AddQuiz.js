import React, { useState } from 'react';

const AddQuizContainer = () => {
  const [soal, setSoal] = useState('');
  const [opsiA, setOpsiA] = useState('');
  const [opsiB, setOpsiB] = useState('');
  const [opsiC, setOpsiC] = useState('');
  const [opsiD, setOpsiD] = useState('');
  const [jawabanBenar, setJawabanBenar] = useState('');

  const handleSimpanClick = () => {
    console.log('Data disimpan:', {
      soal,
      opsiA,
      opsiB,
      opsiC,
      opsiD,
      jawabanBenar,
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
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Tambah Quiz</h1>
      <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
      <p>Masukkan Data Quiz</p>

      <input
        type="text"
        placeholder="Soal"
        style={styles.input}
        value={soal}
        onChange={(e) => setSoal(e.target.value)}
      />

      <input
        type="text"
        placeholder="Opsi A"
        style={styles.input}
        value={opsiA}
        onChange={(e) => setOpsiA(e.target.value)}
      />

      <input
        type="text"
        placeholder="Opsi B"
        style={styles.input}
        value={opsiB}
        onChange={(e) => setOpsiB(e.target.value)}
      />

      <input
        type="text"
        placeholder="Opsi C"
        style={styles.input}
        value={opsiC}
        onChange={(e) => setOpsiC(e.target.value)}
      />

      <input
        type="text"
        placeholder="Opsi D"
        style={styles.input}
        value={opsiD}
        onChange={(e) => setOpsiD(e.target.value)}
      />

      <input
        type="text"
        placeholder="Jawaban Benar"
        style={styles.input}
        value={jawabanBenar}
        onChange={(e) => setJawabanBenar(e.target.value)}
      />

      <div style={styles.button} onClick={handleSimpanClick}>
        Simpan
      </div>
    </div>
  );
};

export default AddQuizContainer;
