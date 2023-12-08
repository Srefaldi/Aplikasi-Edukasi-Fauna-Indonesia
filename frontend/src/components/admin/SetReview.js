import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './styles/Admin.css';
import Sidebar from './Sidebar';

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

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form data when the modal is closed
    setFormData({
        name: '',
        rating: '',
        review: '',
      // Reset other form fields here
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


      await axios.post('http://localhost:5000/add-review', formDataReview);
      

      fetchData();
      // Close the modal
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

      await axios.put(`http://localhost:5000/edit-review/${editId}`, formDataReview);

      fetchData();
      closeModal();
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-review/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-allreview');
      setReviewList(response.data);
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

  return (
    <>
      <Sidebar />

      <div className="setfauna-container">
        <h1>Data Reviewer</h1>
        <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
        <div className="header">
          <div className="addButton" onClick={openModal}>Tambah Review</div>
          <div className="actionButtons">
            <div className="printButton">Cetak</div>
          </div>
        </div>
        <input type="text" placeholder="Cari Fauna..." className="searchInput" />

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

                {/* Add more input fields as needed */}
                <button className='btn-modal' type="submit" onClick={editId ? handleEditReview : handleAddReview}>
                  {editId ? 'Simpan Edit' : 'Simpan'}
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
              <th>Rating</th>
              <th>Review</th>
              <th className="actionButtonsCell">Aksi</th>
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
                  <div className="editButton" onClick={() => openEditModal(review.id)}>
                    Edit
                  </div>
                  <div className="deleteButton" onClick={() => handleDeleteReview(review.id)}>
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






























