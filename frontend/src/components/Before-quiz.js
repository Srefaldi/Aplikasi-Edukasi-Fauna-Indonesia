import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { right } from '@popperjs/core';
import '../css/quiz/before-quiz.css';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';

const BeforeQuiz = ({ onStartQuiz }) => {
  const [nama, setNama] = useState('');
  const { package: selectedPackage } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNama(e.target.value);
  };

  const handleStartQuiz = () => {
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

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" style={imgContainer} />
          </div>
        </div>
      </div>
    

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
