import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/quiz/result.css';

const ResultQuiz = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || typeof state.percentageScore === 'undefined') {
    return null;
  }

  const { totalCorrectAnswers, percentageScore } = state;
  const formattedPercentageScore = percentageScore.toFixed(2);
  const isPassed = percentageScore >= 60;

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
        <p>Skor Anda: {formattedPercentageScore}</p>
        <p>Total Jawaban Benar: {totalCorrectAnswers}</p>
        <p>Status Kelulusan: {isPassed ? 'Lulus' : 'Tidak Lulus'}</p>
      </div>
    </div>
  );
};

export default ResultQuiz;
