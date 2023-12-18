import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Ripple, initMDB } from 'mdb-ui-kit';
const TemplateQuiz = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [lastQuestionReached, setLastQuestionReached] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state: { nama, selectedPackage } } = location;
  const [userAnswers, setUserAnswers] = useState({});
  const [answeredCorrectly, setAnsweredCorrectly] = useState([]);


  useEffect(() => {
    console.log('Skor Sementara:', score);
  }, [score]);

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      alert('Pilih jawaban sebelum melanjutkan!');
      return;
    }
  
    const userAnswer = selectedAnswer;
    const correctAnswer = (quizData[currentQuestionIndex] && quizData[currentQuestionIndex].answer) || '';
  
    if (userAnswer !== null && correctAnswer !== null) {
      const updatedTotalCorrectAnswers = totalCorrectAnswers + (userAnswer === correctAnswer ? 1 : 0);
      setTotalCorrectAnswers(updatedTotalCorrectAnswers);
  
      if (userAnswer === correctAnswer && !answeredCorrectly.includes(currentQuestionIndex)) {
        setScore(score + 1);
        setAnsweredCorrectly([...answeredCorrectly, currentQuestionIndex]);
      }
    }
  
    setSelectedAnswer(null);
  
    const nextQuestionIndex = currentQuestionIndex + 1;
  
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setLastQuestionReached(true);
    }
    console.log('Nama:', nama, 'Skor Sementara:', score);
  
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: selectedAnswer,
    });
  };
  
  
  
  const finishQuiz = () => {
    const totalQuestions = quizData.length;
    const percentageScore = (totalCorrectAnswers / totalQuestions) * 100;
    console.log(`Total Jawaban Benar: ${totalCorrectAnswers}`);
    console.log(selectedPackage);
    navigate('/result-quiz', {
      state: {
        totalCorrectAnswers,
        percentageScore,
        nama,
        selectedPackage,
      },
    });
  };

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const { question, option_1, option_2, option_3, option_4 } = quizData[currentQuestionIndex] || {
    question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    option_4: '',
  };

  const options = [option_1, option_2, option_3, option_4].filter(Boolean);

  useEffect(() => {
    initMDB({ Ripple });
  }, []); 

  useEffect(() => {
    setSelectedAnswer(userAnswers[currentQuestionIndex] || null);
  }, [currentQuestionIndex, userAnswers]);

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
          <div className="border">
            <div className="question bg-white p-3 border-bottom">
              <div className="d-flex flex-row justify-content-between align-items-center mcq">
                <h4>Edukasi Fauna</h4>
                <span>Soal {currentQuestionIndex + 1} / {quizData.length}</span>
              </div>
            </div>
            <div className="question bg-white p-3 border-bottom">
              <div className="d-flex flex-row align-items-center question-title" style={{ marginBottom: '15px' }}>
                <h5 className="mt-1 ml-2">{question}</h5>
              </div>
              {options.length > 0 ? (
              <div className="options-container">
                {options.map((option, index) => (
                  <div className="btn-group" key={index}>
                    <label
                      className="btn btn-secondary"
                      style={{
                        backgroundColor: selectedAnswer === option ? '#3498db' : '#F3F8FF',
                        textAlign: 'left', 
                      }}
                    >
                      <input
                        type="radio"
                        name="answer"
                        className="btn-check"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={handleOptionChange}
                        style={{ marginRight: '6px' }}
                      />
                      <span style={{ color: 'black' }}>{option}</span>
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <p>No options available</p>
            )}

            </div>
            <div className="d-flex justify-content-center">
  <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white w-50">
    {lastQuestionReached ? (
      <button
        className="btn btn-primary border-success align-items-center btn-success w-100"
        type="button"
        onClick={finishQuiz}
      >
        Selesai
      </button>
    ) : (
      <button
        className="btn btn-primary border-success align-items-center btn-success w-100"
        type="button"
        onClick={handleCheckAnswer}
      >
        Next<i className="fa fa-angle-right ml-2"></i>
      </button>
    )}
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateQuiz;
