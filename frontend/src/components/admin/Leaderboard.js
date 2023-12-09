import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Admin.css'; 
import Sidebar from './Sidebar';
// Update
const Leaderboard = () => {
  const [leaderboardList, setLeaderboardList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    score: '',
  });
  const [editId, setEditId] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      nama: '',
      score: '',
    });
    setEditId(null);
  };


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-allleaderboard');
      setLeaderboardList(response.data);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };
  
  

  const handleAddLeaderboard = async () => {
    try {
      await axios.post('http://localhost:5000/add-leaderboard', formData);
      fetchData();
      closeModal();
    } catch (error) {
      console.error('Error adding leaderboard entry:', error);
    }
  };

  const handleEditLeaderboard = async () => {
    try {
      console.log('Edit ID:', editId);
      console.log('Form Data:', formData);
  
      await axios.put(`http://localhost:5000/edit-leaderboard/${editId}`, formData);
      fetchData();
      closeModal();
    } catch (error) {
      console.error('Error editing leaderboard entry:', error);
    }
  };
  

  const handleDeleteLeaderboard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-leaderboard/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting leaderboard entry:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Sidebar />

      <div className="setfauna-container">
        <h1>Leaderboard</h1>
        <hr style={{ border: '1px solid black', marginBottom: '20px' }} />

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <form onSubmit={(e) => e.preventDefault()}>
                <label>Nama:</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                />
                <label>Score:</label>
                <input
                  type="number"
                  name="score"
                  value={formData.score}
                  onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                />
                <button className='btn-modal' type="submit" onClick={editId ? handleEditLeaderboard : handleAddLeaderboard}>
                  {editId ? 'Simpan Edit' : 'Tambah'}
                </button>
              </form>
            </div>
          </div>
        )}

        <table className="table">
          <thead>
            <tr className="th">
              <th>No</th>
              <th>Nama</th>
              <th>Score</th>
              <th className="actionButtonsCell">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(leaderboardList) && leaderboardList.length > 0 ? (
              leaderboardList.map((leaderboard, index) => (
                <tr key={index} className="td">
                  <td>{index + 1}</td>
                  <td>{leaderboard.nama}</td>
                  <td>{leaderboard.score}</td>
                  <td className="actionButtonsCell">
                    <div
                      className="editButton"
                      onClick={() => {
                        openModal();
                        setEditId(leaderboard.id);
                        setFormData({
                          nama: leaderboard.nama,
                          score: leaderboard.score,
                        });
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="deleteButton"
                      onClick={() => {
                        if (leaderboard.id !== undefined) {
                          handleDeleteLeaderboard(leaderboard.id);
                        } else {
                          console.error('ID tidak valid:', leaderboard.id);
                        }
                      }}
                    >
                      Hapus
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Leaderboard data is not available</td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </>
  );
};

export default Leaderboard;
