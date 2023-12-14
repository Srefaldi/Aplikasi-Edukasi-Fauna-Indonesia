import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/quiz/home-quiz.css';
import leaderboard from '../../public/quiz/winner.png';
import quiz from '../../public/quiz/quiz.png';

const Quiz = () => {
  const navigate = useNavigate();

  const handlePlayNow = () => {
    navigate('/selection-quiz');
  };

  const handleLeaderboard = () => {
    navigate('/leaderboard');
  };

  const imgContainer = {
    width: '100vw',
  };

  return (
    <div>
      
      {/* Quiz Section */}
      <div className='quiz-container'>
        <div className='item-1'>
          <h1>Ayo Mainkan Quiz</h1>
          <p>
          Selamat datang di Quiz Edukasi Fauna! Temukan keanekaragaman hayati Indonesia melalui serangkaian pertanyaan yang menarik. 
          Jawab dengan cermat, rasakan keseruan belajar dan lihat seberapa banyak yang bisa Anda ketahui tentang hewan unik negara kita. 
          Ayo mulai petualangan pengetahuan Anda sekarang
          </p>
          <button className="btn-play-now" type="button" onClick={handlePlayNow}>Play Now</button>
        </div>
        <div className='item-2'>
          <img src={quiz} className="img-fluid" alt="Img 1" />
        </div>
      </div>

      <div className='quiz-container'>
        <div className='item-3'>
            <img src={leaderboard} className="img-fluid" alt="Img 1" />
        </div>
        <div className='item-4'>
          <h1>Leaderboard Edukasi Fauna</h1>
          <p>
          Selamat datang di halaman Leaderboard Edukasi Fauna! Saksikan peringkat tertinggi dari para penguasa pengetahuan fauna Indonesia. 
          Leaderboard kami mencerminkan prestasi para penjelajah yang telah menguji dan mendalami pengetahuan mereka melalui kuis edukasi fauna. 
          Jawab setiap pertanyaan dengan penuh semangat, dan lihatlah bagaimana Anda bersaing dengan yang terbaik.
          </p>
          <button className="btn-leaderboard" type="button" onClick={handleLeaderboard}>Leaderboard</button>
        </div>
      </div>


    </div>
  );
};

export default Quiz;
