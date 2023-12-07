import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BeforeQuiz = ({ onStartQuiz }) => {
  const [nama, setNama] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNama(e.target.value);
  };

  const handleStartQuiz = () => {
    onStartQuiz(nama);
    navigate('/play-quiz'); 
  };

  return (
    <div className="container py-4">
      <div className="row align-items-md-stretch">
        <div className="col-md-12 mt-5">
          <div className="h-100 p-5 border rounded-3">
            <div className="row">
              <div className="col-md-8">
                <h2>Masukkan Nama Anda untuk Memulai Quiz</h2>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Masukkan Nama Anda"
                  value={nama}
                  onChange={handleInputChange}
                />
                <p style={{ color: 'black' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className="btn btn-outline-secondary" type="button" onClick={handleStartQuiz}>
                  Mulai Kuis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeQuiz;
