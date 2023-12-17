import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AddReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    review: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarClick = (ratingValue) => {
    setFormData({
      ...formData,
      rating: ratingValue,
    });
  };

  const handleAddReview = async (e) => {
    e.preventDefault();

    try {
      const formDataReview = {
        name: formData.name,
        rating: formData.rating,
        review: formData.review,
      };

      await axios.post(`${process.env.API_ENDPOINT}/add-review`, formDataReview);

      setFormData({
        name: '',
        rating: 0,
        review: '',
      });

      window.location.reload();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          onClick={() => handleStarClick(i)}
          style={{ color: formData.rating >= i ? '#FFD700' : '#ddd', cursor: 'pointer' }}
        />
      );
    }
    return stars;
  };

  return (
    <div className='container-form'>
      <div className="form-review">
        <form onSubmit={handleAddReview}>
          <h5>Your Name</h5>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <h5>Your Rating</h5>
          <div className="stars">
            {renderStars()}
          </div>
          <h5>Your Review</h5>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewForm;
