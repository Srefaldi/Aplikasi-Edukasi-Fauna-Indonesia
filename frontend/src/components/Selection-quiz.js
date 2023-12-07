import React from 'react';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
import '../css/quiz/style.css';
import { useNavigate } from 'react-router-dom';

const QuizSelection = ({ onSelectQuiz }) => {
  const handleQuizSelection = (quizNumber) => {
    onSelectQuiz(quizNumber);
  };
  const navigate = useNavigate();

  const handleInputName = () => {
    navigate('/input-name-quiz');
  };

  return (
    <div>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" />
          </div>
        </div>
      </div>

      <div className="quiz-selection-container">
        <h1>Pilih Quiz Terlebih Dahulu</h1>
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quizNumber) => (
            <div key={quizNumber} className="col-md-4 mt-3">
              <div className="quiz-selection-content">
                <div className="quiz-info">
                  <a
                    href="/input-name-quiz" 
                    className="quiz-link"
                    onClick={handleInputName}
                  >
                    Quiz {quizNumber}
                  </a>
                </div>
                <p>
                  Penjelasan kuis {quizNumber}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;
