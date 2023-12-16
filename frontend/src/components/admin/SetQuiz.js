  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { jwtDecode } from 'jwt-decode';
  import { useNavigate } from 'react-router-dom';
  import './styles/Admin.css';
  import './styles/responsive-quiz.css';

  const SetQuizContainer = () => {
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const navigate = useNavigate();
    const [quizList, setQuizList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      question: '',
      option_1: '',
      option_2: '',
      option_3: '',
      option_4: '',
      answer: '',
      paket: '',
    });
    const [editId, setEditId] = useState(null);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      resetFormAndEditId();
    };

    const resetFormAndEditId = () => {
      setFormData({
        question: '',
        option_1: '',
        option_2: '',
        option_3: '',
        option_4: '',
        answer: '',
        paket: '',
      });
      setEditId(null);
    };

    const openEditModal = (id) => {
      const quizToEdit = quizList.find((quiz) => quiz.id === id);

      setEditId(id);
      setFormData({
        question: quizToEdit.question,
        option_1: quizToEdit.option_1,
        option_2: quizToEdit.option_2,
        option_3: quizToEdit.option_3,
        option_4: quizToEdit.option_4,
        answer: quizToEdit.answer,
        paket: quizToEdit.paket,
      });

      setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSaveQuiz = async () => {
      try {
        if (editId) {
          await axios.put(`http://localhost:5000/edit-quiz/${editId}`, formData);
        } else {
          await axios.post('http://localhost:5000/add-quiz', formData);
        }

        fetchData();
        closeModal();
      } catch (error) {
        console.error(`Error ${editId ? 'editing' : 'adding'} quiz:`, error);
      }
    };

    const handleDeleteQuiz = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/delete-quiz/${id}`);
        fetchData();
      } catch (error) {
        console.error('Error deleting quiz:', error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-allquizzes');
        setQuizList(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
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
          await refreshToken(); // Refresh the token
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      fetchData();
      refreshToken();
    }, []);

    const styles = {
      container: {
        marginTop: '100px',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative', 
      },
      addButton: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
      },
      modal: {
          display: isModalOpen ? 'block' : 'none',
          position: 'fixed',
          zIndex: '1',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          overflow: 'auto',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '130px',
      },
      modalContent: {
        backgroundColor: '#fefefe',
        margin: 'auto',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '600px',
        marginTop: '35px',
        left: '0',
      },
      close: {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
        cursor: 'pointer',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
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
        marginTop: '10px',
      },
      quizList: {
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
      <div className="setfauna-container mt-5 content">
      <h1 className="left">Data Quiz</h1>
      <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
      <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="d-flex flex-column">
      <div className="btn btn-primary mb-2 cetak" onClick={openModal}>
      Tambah Quiz
    </div>
      </div>
      
    </div>


        {/* Modal for adding/editing quiz */}
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.close} onClick={closeModal}>
              &times;
            </span>
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Soal"
                style={styles.input}
                name="question"
                value={formData.question}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Opsi A"
                style={styles.input}
                name="option_1"
                value={formData.option_1}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Opsi B"
                style={styles.input}
                name="option_2"
                value={formData.option_2}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Opsi C"
                style={styles.input}
                name="option_3"
                value={formData.option_3}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Opsi D"
                style={styles.input}
                name="option_4"
                value={formData.option_4}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Jawaban Benar"
                style={styles.input}
                name="answer"
                value={formData.answer}
                onChange={handleInputChange}
              />
              <label>Paket:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paket"
                    value="A"
                    checked={formData.paket === 'A'}
                    onChange={handleInputChange}
                  />
                  A
                </label>
                <label>
                  <input
                    type="radio"
                    name="paket"
                    value="B"
                    checked={formData.paket === 'B'}
                    onChange={handleInputChange}
                  />
                  B
                </label>
                <label>
                  <input
                    type="radio"
                    name="paket"
                    value="C"
                    checked={formData.paket === 'C'}
                    onChange={handleInputChange}
                  />
                  C
                </label>
                <label>
                  <input
                    type="radio"
                    name="paket"
                    value="D"
                    checked={formData.paket === 'D'}
                    onChange={handleInputChange}
                  />
                  D
                </label>
                <label>
                  <input
                    type="radio"
                    name="paket"
                    value="E"
                    checked={formData.paket === 'E'}
                    onChange={handleInputChange}
                  />
                  E
                </label>
                <label>
                  <input
                    type="radio"
                    name="paket"
                    value="F"
                    checked={formData.paket === 'F'}
                    onChange={handleInputChange}
                  />
                  F
                </label>
              </div>
              <button type="submit" style={styles.button} onClick={handleSaveQuiz}>
                {editId ? 'Simpan Edit' : 'Simpan'}
              </button>
            </form>
          </div>
        </div>

        {/* Quiz list rendering */}
        <table className='table'>
          <thead>
            <tr className='bg-primary text-white'>
              <th>Soal</th>
              <th>Opsi A</th>
              <th>Opsi B</th>
              <th>Opsi C</th>
              <th>Opsi D</th>
              <th>Jawaban Benar</th>
              <th>Paket</th>
              <th className='text-center'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {quizList.map((quiz) => (
              <tr key={quiz.id} style={styles.td}>
                <td>{quiz.question}</td>
                <td>{quiz.option_1}</td>
                <td>{quiz.option_2}</td>
                <td>{quiz.option_3}</td>
                <td>{quiz.option_4}</td>
                <td>{quiz.answer}</td>
                <td>{quiz.paket}</td>
                <td style={styles.actionButtonsCell}>
                  <div style={styles.editButton} onClick={() => openEditModal(quiz.id)}>
                    Edit
                  </div>
                  <div style={styles.deleteButton} onClick={() => handleDeleteQuiz(quiz.id)}>
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default SetQuizContainer;
