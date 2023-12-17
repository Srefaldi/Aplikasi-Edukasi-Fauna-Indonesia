import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './styles/Admin.css';
import Sidebar from './Sidebar';
import './styles/set-fauna-responsive.css';

const SetReview = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  const [reviewListItem, setReviewList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    review: '',
  });
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: '',
      rating: '',
      review: '',
    });
    setEditId(null);
  };

  const openEditModal = (id) => {
    const reviewToEdit = reviewListItem.find((review) => review.id === id);

    setEditId(id);
    setFormData({
      name: reviewToEdit.name,
      rating: reviewToEdit.rating,
      review: reviewToEdit.review,
    });

    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddReview = async () => {
    try {
      const formDataReview = new FormData();
      formDataReview.append('name', formData.name);
      formDataReview.append('rating', formData.rating);
      formDataReview.append('review', formData.review);

      await axios.post(`${process.env.API_ENDPOINT}/add-review`, formDataReview);

      fetchData();
      closeModal();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const handleEditReview = async () => {
    try {
      const formDataReview = new FormData();
      formDataReview.append('name', formData.name);
      formDataReview.append('rating', formData.rating);
      formDataReview.append('review', formData.review);

      await axios.put(`${process.env.API_ENDPOINT}/edit-review/${editId}`, formDataReview);

      fetchData();
      closeModal();
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`${process.env.API_ENDPOINT}/delete-review/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.API_ENDPOINT}/get-allreview`);
      setReviewList(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${process.env.API_ENDPOINT}/token`);
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
        const response = await axios.get(`${process.env.API_ENDPOINT}/token`);
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

  const handleSearch = () => {
    const filteredData = reviewListItem.filter((review) =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setReviewList(filteredData);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    fetchData();
  };

  useEffect(() => {
    refreshToken();
    fetchData();
  }, [searchTerm]);

  return (
    <>
      <div className="setfauna-container content">
        <h1>Data Reviewer</h1>
        <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column">
            <input
              type="text"
              placeholder="Cari Data..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />  
            <div className="btn btn-primary cari" onClick={() => handleSearch()}>
              Cari
            </div>
          </div>
          </div>
        </div> 

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <form onSubmit={(e) => e.preventDefault()}>
                <label>Nama :</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label>Rating :</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                />
                <label>Review :</label>
                <input
                  type="text"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                />

                <button
                  className="btn-modal"
                  type="submit"
                  onClick={editId ? handleEditReview : handleAddReview}
                >
                  {editId ? 'Simpan Edit' : 'Simpan'}
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
              <th>Rating</th>
              <th>Review</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {reviewListItem.map((review, index) => (
              <tr key={index} className="td">
                <td>{index + 1}</td>
                <td>{review.name}</td>
                <td>{review.rating}</td>
                <td>{review.review}</td>
                <td className="actionButtonsCell">
                  <div
                    className="btn btn-danger"
                    onClick={() => handleDeleteReview(review.id)}
                  >
                    Hapus
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SetReview;