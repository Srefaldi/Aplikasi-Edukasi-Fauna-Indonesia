import React, { useState } from 'react';

const TemplateQuiz = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      alert('Pilih jawaban terlebih dahulu');
      return;
    }

    const userAnswer = selectedAnswer;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
      alert('Jawaban Anda benar!');
    } else {
      alert('Maaf, jawaban Anda salah.');
    }

    setSelectedAnswer(null);
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Ini adalah pertanyaan terakhir!');
    }
  };

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const { question, options } = quizData[currentQuestionIndex];

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
              {Object.keys(options).map((key, index) => (
                <div className="ans ml-2" style={{ marginBottom: '10px' }} key={index}>
                  <label className="radio">
                    <input
                      type="radio"
                      name="answer"
                      value={key}
                      checked={selectedAnswer === key}
                      onChange={handleOptionChange}
                    />
                    <span style={{ color: 'black' }}>{options[key]}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
              <button className="btn btn-primary d-flex align-items-center btn-danger" type="button">
                <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Previous
              </button>
              <button className="btn btn-primary border-success align-items-center btn-success" type="button" onClick={handleCheckAnswer}>
                Next<i className="fa fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateQuiz;
