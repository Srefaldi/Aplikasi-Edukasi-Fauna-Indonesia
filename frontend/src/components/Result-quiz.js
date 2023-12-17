import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/quiz/result.css';

const ResultQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [leaderboardAdded, setLeaderboardAdded] = useState(false);

  const addLeaderboardEntry = async () => {
    try {
      // Pengecekan apakah leaderboard sudah ditambahkan sebelumnya
      if (leaderboardAdded) {
        return;
      }

      const response = await fetch(`${process.env.API_ENDPOINT}/add-leaderboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: state?.nama || '',
          paket: state?.selectedPackage || '',
          score: state?.percentageScore || 0,
        }),
      });

      if (response.ok) {
        console.log('Leaderboard entry added successfully');
        setLeaderboardAdded(true);
      } else {
        console.error('Failed to add leaderboard entry');
      }
    } catch (error) {
      console.error('Error adding leaderboard entry:', error);
    }
    navigate('/quiz');
  };


  if (!state || typeof state.percentageScore === 'undefined') {
    return null;
  }

  const { totalCorrectAnswers, percentageScore, nama } = state;
  const formattedPercentageScore = percentageScore.toFixed(2);
  const isPassed = percentageScore >= 60;
  const selectedPackage = state?.selectedPackage || '';

  return (
    <div className="result-container">
      <h2>Hasil Quiz</h2>
      <div className="result-content">
        <div className="icon-container">
          {isPassed ? (
            <FontAwesomeIcon icon={faCheck} className="icon passed-icon" />
          ) : (
            <FontAwesomeIcon icon={faTimes} className="icon failed-icon" />
          )}
        </div>
        <h2>{nama}</h2>
        <p>Anda Telah Menyelesaikan Kuis {selectedPackage}</p>
        <p>Skor Anda: {formattedPercentageScore}</p>
        <p>Total Jawaban Benar: {totalCorrectAnswers}</p>
        <p>Status Kelulusan: {isPassed ? 'Lulus' : 'Tidak Lulus'}</p>
        <button className='btn-add-leaderboard' onClick={addLeaderboardEntry}>Selesai</button>
      </div>
    </div>
  );
};

export default ResultQuiz;
