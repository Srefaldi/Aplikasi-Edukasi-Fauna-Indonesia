import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Admin.css';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  const [leaderboardList, setLeaderboardList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    paket: '',
    score: '',
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [editId, setEditId] = useState(null);

  const [filterByPackage, setFilterByPackage] = useState('');

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      nama: '',
      paket: '',
      score: '',
    });
    setSelectedPackage('');
    setEditId(null);
  };

  const fetchData = async () => {
    try {
      const url = filterByPackage
        ? `http://localhost:5000/get-leaderboard-by-package/${filterByPackage}`
        : 'http://localhost:5000/get-allleaderboard';

      const response = await axios.get(url);
      setLeaderboardList(response.data);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };

  const handleAddLeaderboard = async () => {
    try {
      await axios.post('http://localhost:5000/add-leaderboard', {
        nama: formData.nama,
        paket: selectedPackage,
        score: formData.score,
      });
      fetchData();
      closeModal();
    } catch (error) {
      console.error('Error adding leaderboard entry:', error);
    }
  };

  const handleEditLeaderboard = async () => {
    try {
      await axios.put(`http://localhost:5000/edit-leaderboard/${editId}`, {
        nama: formData.nama,
        paket: selectedPackage,
        score: formData.score,
      });
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

  // Handler untuk memperbarui nilai filterByPackage saat memilih paket
  const handlePackageFilterChange = (e) => {
    setFilterByPackage(e.target.value);
  };

  useEffect(() => {
    refreshToken();
    fetchData();
  }, [filterByPackage]);

  return (
    <>
      <div className="setfauna-container content">
        <h1>Leaderboard</h1>

        {/* Tambahkan dropdown untuk memilih paket */}
        <div className="filter-container">
          <label>Filter by Package:</label>
          <select
            value={filterByPackage}
            onChange={handlePackageFilterChange}
          >
            <option value="">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>

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
                <label>Paket:</label>
                <select
                  name="paket"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <label>Score:</label>
                <input
                  type="number"
                  name="score"
                  value={formData.score}
                  onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                />
                <button className='btn-modal mt-3' type="submit" onClick={editId ? handleEditLeaderboard : handleAddLeaderboard}>
                  {editId ? 'Simpan Edit' : 'Tambah'}
                </button>
              </form>
            </div>
          </div>
        )}

        <table className="table">
          <thead>
            <tr className="bg-primary text-white">
              <th>No</th>
              <th>Nama</th>
              <th>Paket</th>
              <th>Score</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(leaderboardList) && leaderboardList.length > 0 ? (
              leaderboardList
                .filter((leaderboard) =>
                  filterByPackage ? leaderboard.paket === filterByPackage : true
                )
                .map((leaderboard, index) => (
                  <tr key={index} className="td">
                    <td>{index + 1}</td>
                    <td>{leaderboard.nama}</td>
                    <td>{leaderboard.paket}</td>
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
                          setSelectedPackage(leaderboard.paket);
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
