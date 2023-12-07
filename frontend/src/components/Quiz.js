import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
import '../css/quiz/style.css';

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
      <script src="https://kit.fontawesome.com/d7da709801.js" crossOrigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0/css/all.css" integrity="sha384-rnyr88LlR9QfGdTzL3ZYOvKnN4HhDlXZe7R9h1UjmHjIdp2zgBfPnFls3++Fw4ar" crossOrigin="anonymous"></link>

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" style={imgContainer} />
          </div>
        </div>
      </div>

      {/* Menu Quiz Section */}
      <div className="container py-4">
        <div className="row align-items-md-stretch">
          <div className="col-md-12 mt-5">
            <div className="h-100 p-5 border rounded-3">
              <div className="row">
                <div className="col-md-8">
                  <h2>Ayo Mainkan Quiz</h2>
                  <p style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <button className="btn btn-outline-secondary mb-4" type="button" onClick={handlePlayNow}>
                    Play Now
                  </button>
                </div>
                <div className="col-md-4">
                  <img src={hero} className="img-fluid" alt="Img 1" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="h-100 p-5 border rounded-3">
              <div className="row">
                <div className="col-md-8">
                  <h2>Leaderboard</h2>
                  <p style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a href="/leaderboard" className="btn btn-outline-secondary mb-4" type="button" onClick={handleLeaderboard}>
                    Lihat Peringkat Anda
                  </a>
                </div>
                <div className="col-md-4">
                  <img src={hero} className="img-fluid" alt="Img 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
