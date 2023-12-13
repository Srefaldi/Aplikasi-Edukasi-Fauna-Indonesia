import React from 'react';
import '../css/selection-quiz/style.css'; 
import { useNavigate } from 'react-router-dom';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
import kategori1 from '../../public/kategori/kategori-1.jpg';
import kategori2 from '../../public/kategori/kategori-2.jpg';
import kategori3 from '../../public/kategori/kategori-3.jpg';
import kategori4 from '../../public/kategori/kategori-4.jpg';
import kategori5 from '../../public/kategori/kategori-5.jpg';
import kategori6 from '../../public/kategori/kategori-6.jpg';



const QuizSelection = ({ onSelectQuiz }) => {
  const navigate = useNavigate();

  const handleInputName = (selectedPackage) => {
    navigate(`/input-name-quiz/${selectedPackage}`);
  };
  
  
  const packageDescriptions = {
    A: 'Deskripsi untuk Paket A: Lorem ipsum dodasdasdadashhhhhhhhhhhhhhhhhhhhhsadasdhgasgdhasghdgasdasdasdasdasdsdasdaslor sit amet, consectetur adipiscing elit.',
    B: 'Deskripsi untuk Paket B: Sed do eiusmod temporasdasadhasdhasdgahsdsdasdasdasdasdasdasdasdas incididunt ut labore et dolore magna aliqua.',
    C: 'Deskripsi untuk Paket C: Ut enim ad minim venidashgdhasgdhasgdjahsghdgashdghasgdhasgdhgasdgam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    D: 'Deskripsi untuk Paket D: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    E: 'Deskripsi untuk Paket E: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    F: 'Deskripsi untuk Paket F: Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  const categoryImages = [
    kategori1,
    kategori2,
    kategori3,
    kategori4,
    kategori5,
    kategori6,
  ];
  const renderImages = () => {
    return categoryImages.map((image, index) => (
      <img
        key={index}
        className="img-fluid"
        src={image}
        alt={`Foto Kategori ${index + 1}`}
      />
    ));
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

      <div className="welcome-text">
        <h2>Selamat Datang di Halaman Quiz!</h2>
        <p>Temukan informasi lengkap mengenai fauna yang menarik di Indonesia.</p>
        <p>Jelajahi detail spesies, habitat, dan informasi menarik lainnya.</p>
        <p>Selamat menikmati penjelajahan Anda!</p>
      </div>

      <div className="quiz-selection-container">
        <h1>Mari Uji Pengatahuan Anda</h1>
        <div className="row">
          {['A', 'B', 'C', 'D', 'E', 'F'].map((packageLetter, index) => {
            const imageURL = categoryImages[index]; 

            return (
              <div key={index} className="col-md-4 mt-3 mb-5">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                  <div className="cover-image" style={{ backgroundImage: `url(${imageURL})` }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Paket {packageLetter}</h2>
                      <p className="text-white mb-5">
                        {packageDescriptions[packageLetter]}
                      </p>
                      <button 
                        className="btn mx-auto mt-auto mt-3 d-block" 
                        style={{ 
                          color: 'white',
                          backgroundColor: '#112546',
                          lineHeight: 'normal',
                          padding: '0.375rem 0.75rem',
                          width: 'auto',
                          whiteSpace: 'nowrap',
                          fontSize: 'inherit',
                          maxWidth: 'auto',
                          transition: 'background-color 0.3s ease',
                          cursor: 'pointer',
                          border: 'none',
                        }}
                        onClick={() => handleInputName(packageLetter)}
                        onMouseOver={(e) => { e.target.style.backgroundColor = '#224a6f'; }}
                        onMouseOut={(e) => { e.target.style.backgroundColor = '#112546'; }}
                      >
                        Play Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default QuizSelection;
