import React from 'react';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
import '../css/quiz/style.css';
import { useNavigate } from 'react-router-dom';

const QuizSelection = ({ onSelectQuiz }) => {
  const handleQuizSelection = (selectedPackage) => {
    onSelectQuiz(selectedPackage);
  };

  const handleInputName = (selectedPackage) => {
    navigate(`/input-name-quiz/${selectedPackage}`);
  };

  const navigate = useNavigate();

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
        <h1>Pilih Paket Kuis Terlebih Dahulu</h1>
        <div className="row">
          {['A', 'B', 'C', 'D', 'E'].map((packageLetter) => (
            <div key={packageLetter} className="col-md-4 mt-3">
              <div className="quiz-selection-content">
                <div className="quiz-info">
                  <a
                    href={`/input-name-quiz/${packageLetter}`}
                    className="quiz-link"
                    onClick={() => handleInputName(packageLetter)}
                  >
                    Paket {packageLetter}
                  </a>
                </div>
                <p>
                  Penjelasan paket {packageLetter}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
