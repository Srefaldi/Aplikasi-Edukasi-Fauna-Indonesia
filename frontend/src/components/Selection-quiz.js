import React from 'react';
import '../css/selection-quiz/style.css'; 
import { useNavigate } from 'react-router-dom';
import kategori1 from '../../public/selection/paketA.jpg';
import kategori2 from '../../public/selection/paketB.jpg';
import kategori3 from '../../public/selection/paketC.jpg';
import kategori4 from '../../public/selection/paketD.jpg';
import kategori5 from '../../public/selection/paketE.jpg';
import kategori6 from '../../public/selection/paketF.jpg';

const QuizSelection = ({ onSelectQuiz }) => {
  const navigate = useNavigate();

  const handleInputName = (selectedPackage) => {
    navigate(`/input-name-quiz/${selectedPackage}`);
  };
  
  const packageDescriptions = {
    Kalimantan: 'Paket ini mengajak Anda untuk menjelajahi spesies-spesies khas Kalimantan, termasuk informasi tentang habitatnya, serta fakta-fakta menarik yang membuatnya unik.',
    Sulawesi: 'Petualangan ini membawa Anda dalam eksplorasi keanekaragaman hayati di Pulau Sulawesi. Anda akan menemukan spesies-spesies langka yang hanya ada di pulau ini.',
    Sumatera: 'Mengajak Anda untuk menjelajahi habitat hutan Sumatera dan melihat bagaimana kehidupan fauna beradaptasi di lingkungan unik ini.',
    Jawa: 'Paket ini memberikan informasi komprehensif tentang spesies, habitat, dan fakta menarik tentang fauna di Pulau Jawa. ',
    Papua: 'Mengajak Anda untuk memahami keunikan fauna di Pulau Papua, termasuk penjelajahan spesies endemik dan melodi hutan hujan Papua. ',
    Nusantara: 'Paket ini mengundang Anda untuk merayakan kesatuan keanekaragaman hayati di seluruh nusantara Indonesia. Ini menggabungkan informasi tentang fauna dari berbagai pulau yang ada di Indonesia'
  };
  
    

  const categoryImages = [
    kategori1,
    kategori2,
    kategori3,
    kategori4,
    kategori5,
    kategori6,
  ];

  return (
    <div>
    
      <div className="welcome-text">
        <h2>Selamat Datang di Halaman Selection Quiz!</h2>
        <p>
          Selamat datang, penjelajah ilmu! Sebelum Anda memulai petualangan pengetahuan melalui kuis yang menarik ini, mari pilih paket 
          pengetahuan Anda. Setiap paket memiliki fokus uniknya sendiri, membawa Anda melalui berbagai aspek fauna yang mengagumkan di 
          Indonesia. Pilihlah dengan bijak, dan nikmati pengalaman belajar yang menyenangkan!
        </p>
      </div>

      <div className="selection-container">
      {['Kalimantan', 'Sulawesi', 'Sumatera', 'Jawa', 'Papua', 'Nusantara'].map((packageLetter, index) => {
        const imageURL = categoryImages[index];

        return (
          <div key={index} className="selection-card">
            <div className="cover-image-container">
              <img
                data-src={imageURL}
                alt={`Paket ${packageLetter}`}
                className="lazyload cover-image"
              />
            </div>
            <div className="card-content">
              <h2 className="card-headings">Pulau {packageLetter}</h2>
              <p className="card-desc">{packageDescriptions[packageLetter]}</p>
              <button
                className="btn-card"
                onClick={() => handleInputName(packageLetter)}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#224a6f';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#112546';
                }}
              >
                Play Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default QuizSelection;