import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.API_ENDPOINT}/get-allreview`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    return stars;
  };

  return (
    <div>
    <h3 className="headings"> <span>Users</span> Review </h3>
    <div className="review-container mt-5">
      {reviews.map((review, index) => (
        <div className="review-box" key={index}>
          <h5>{review.name}</h5>
          <div className="stars">{renderStars(review.rating)}</div>
          <p>{review.review}</p>
          <span className="fas fa-quote-right"></span>
        </div>
      ))}
      <style>{`
       .team-headings {
        text-align: center;
        font-size: 1.5rem;
        color: #444444;
        padding: 1rem;
        margin: 2rem 0;
        background: rgba(17, 37, 70, 0.05);
      }
      .review-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 20px;
        margin: 0 20px; 
        margin-bottom: 30px;
      }
      
      
      .review-box {
        padding: 12px;
        border-radius: 5px;
        width: 100%; 
        overflow: hidden;
        box-sizing: border-box;
      }
      
      .stars {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
        color: #FFD700;
      }
      
      
      h5 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        color: #444444;
      }
      
      p {
        font-size: 0.8rem;
        line-height: 1.6;
        color: #444444;

        overflow: hidden;
      }
      
      .user-review {
        display: flex;
        align-items: center;
        margin-top: 20px;
      }
      /* review form */
      .container-form .form-review {
        border: 3px solid #ddd;
        padding: 12px;
        border-radius: 5px;
        width: 50%;
        overflow: hidden;
        box-sizing: border-box;
        grid-column: span 3; 
      }
      
      .form-review form {
        display: grid;
        gap: 10px;
      }
      
      .form-review h5 {
        font-size: 1rem;
        margin-bottom: 5px;
        color: #444444;
      }
      
      .form-review input[type="text"],
      .form-review textarea {
        width: 100%;
        padding: 8px;
        border: 3px solid #ddd;
        border-radius: 5px;
      }
      
      .form-review .stars {
        display: flex;
        gap: 5px;
      }
      
      .form-review .stars input {
        display: none;
      }
      
      .form-review .stars label {
        font-size: 1.5rem;
        color: #ddd; 
        cursor: pointer;
      }
      .form-review .stars input:checked ~ label {
        color: #FFD700;
      }
      
      .form-review .stars label:hover,
      .form-review .stars input:checked ~ label:hover,
      .form-review .stars input:checked + label:hover ~ label {
        color: #ddd;
      }
      #star1:checked ~ #star1-label,
      #star2:checked ~ #star2-label,
      #star3:checked ~ #star3-label,
      #star4:checked ~ #star4-label,
      #star5:checked ~ #star5-label {
        color: #FFD700;
      }
      
      
      .form-review button {
        background-color: #29ADB2;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      
      .form-review button:hover {
        background-color: green;
      }
      `}</style>
    </div>
    </div>
  );
};

export default UserReviews;