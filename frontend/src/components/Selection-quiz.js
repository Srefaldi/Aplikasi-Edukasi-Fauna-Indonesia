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
    A: 'Anda akan menjawab pertanyaan-pertanyaan yang menguji pengetahuan Anda tentang spesies-spesies khas Kalimantan, habitatnya, serta fakta menarik yang membuatnya unik. Selamat menjawab dan selamat menikmati petualangan pengetahuan Anda!',
    B: 'Membawa Anda dalam petualangan eksplorasi keanekaragaman hayati di Pulau Sulawesi. Temukan spesies-spesies langka yang hanya dapat ditemui di pulau ini, dan uji pengetahuan Anda melalui kuis yang menantang. Dengan fokus pada spesies unik Sulawesi, siapkan diri Anda untuk mengungkap keajaiban fauna yang memikat.',
    C: 'Mengajak Anda menjelajahi habitat hutan Sumatera dan melihat bagaimana kehidupan fauna beradaptasi di lingkungan unik ini. Pelajari tentang spesies langka, ekosistem khas, dan tantang diri Anda dengan kuis yang mendalam. Temukan keindahan fauna Sumatera dan dukung pelestariannya.',
    D: 'Memberikan kombinasi lengkap dari informasi spesies, habitat, dan fakta menarik tentang fauna di Pulau Jawa. Jelajahi keanekaragaman hayati yang luar biasa dan uji pengetahuan Anda melalui kuis yang mencakup berbagai aspek. Raih pemahaman menyeluruh tentang kehidupan fauna di Pulau Jawa.',
    E: 'Mengajak Anda untuk memahami keunikan fauna di Pulau Papua. Jelajahi spesies endemik, terdengar melodi hutan hujan Papua, dan uji pengetahuan Anda melalui kuis yang menggugah rasa ingin tahu. Siapkan diri Anda untuk meresapi keanekaragaman luar biasa di salah satu destinasi biodiversitas tertinggi di dunia.',
    F: 'Mengundang Anda untuk merayakan kesatuan keanekaragaman hayati di seluruh nusantara. Paket ini menggabungkan informasi tentang fauna dari berbagai pulau, membawa Anda ke dalam kekayaan alam Indonesia dengan spesies-spesies khas, habitatnya, dan fakta menarik yang mencerminkan keindahan ragam hayati.',
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

      <div className='selection-container'>
        {['A', 'B', 'C', 'D', 'E', 'F'].map((packageLetter, index) => {
          const imageURL = categoryImages[index]; 

          return (
            <div key={index} className='selection-card'>
              <div className="cover-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
              <div className='card-content'>
                <h2 className="card-headings">Paket {packageLetter}</h2>
                <p className="card-desc">
                  {packageDescriptions[packageLetter]}
                </p>
                <button 
                  className="btn-card" 
                  onClick={() => handleInputName(packageLetter)}
                  onMouseOver={(e) => { e.target.style.backgroundColor = '#224a6f'; }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = '#112546'; }}
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
