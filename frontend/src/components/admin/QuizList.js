import React, { useState, useEffect } from 'react';
import './styles/Admin.css';

const QuizList = () => {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    const fakeQuizData = [
      { id: 1, soal: 'Apa ibukota Indonesia?', opsiA: 'Jakarta', opsiB: 'Surabaya', opsiC: 'Bandung', opsiD: 'Medan', jawaban: 'A' },
      { id: 2, soal: 'Berapakah hasil dari 5 + 7?', opsiA: '10', opsiB: '11', opsiC: '12', opsiD: '13', jawaban: 'C' },
      { id: 3, soal: 'Siapakah presiden Indonesia sekarang?', opsiA: 'Joko Widodo', opsiB: 'Prabowo Subianto', opsiC: 'Susilo Bambang Yudhoyono', opsiD: 'Megawati Sukarnoputri', jawaban: 'A' },
    ];

    setQuizList(fakeQuizData);
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
      <h1>Data Quiz</h1>
      <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
      <div style={styles.header}>
        <div style={styles.addButton}>Tambah Quiz</div>
        <div style={styles.actionButtons}>
          <div style={styles.printButton}>Cetak</div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Cari Quiz..."
        style={styles.searchInput}
      />
      <table style={styles.table}>
        <thead>
          <tr style={styles.th}>
            <th>No</th>
            <th>Soal</th>
            <th>Opsi A</th>
            <th>Opsi B</th>
            <th>Opsi C</th>
            <th>Opsi D</th>
            <th>Jawaban Benar</th>
            <th style={styles.actionButtonsCell}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {quizList.map((quiz, index) => (
            <tr key={index} style={styles.td}>
              <td>{index + 1}</td>
              <td>{quiz.soal}</td>
              <td>{quiz.opsiA}</td>
              <td>{quiz.opsiB}</td>
              <td>{quiz.opsiC}</td>
              <td>{quiz.opsiD}</td>
              <td>{quiz.jawaban}</td>
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

export default QuizList;
