import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { right } from '@popperjs/core';
import '../css/quiz/before-quiz.css';

const BeforeQuiz = ({ onStartQuiz }) => {
  const [nama, setNama] = useState('');
  const { package: selectedPackage } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNama(e.target.value);
  };

  const handleStartQuiz = () => {
    if (nama.trim() === '') {
      alert('Mohon masukkan nama Anda sebelum memulai Quiz.');
      return;
    }
    
    navigate(`/play-quiz/${selectedPackage}`, { state: { nama, selectedPackage } });
  };

  const imgContainer = {
    width: '100vw',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div>
    

      {/* Input Name Quiz */}
      <div className='input-quiz-container'>
      <div className='input-container'>
        <h1>Masukkan Nama Anda untuk Memulai Quiz</h1>
        <p>
          Sebelum memulai petualangan pengetahuan melalui kuis yang menarik ini, kami ingin mengenal Anda lebih baik. 
          Mohon masukkan nama Anda di bawah ini dan mulailah perjalanan belajar Anda!
          </p>
        <input  className="input-quiz"
            type="text"
            id="nama"
            name="nama"
            placeholder="Masukkan Nama Anda"
            value={nama}
            onChange={handleInputChange}
        /> 
        <button className="btn-start-quiz" type="button" onClick={handleStartQuiz}>Mulai Kuis</button>

      </div>
      </div>
     
    </div>
  );
};

export default BeforeQuiz;
