import React, { useState } from 'react';
import '../css/landing-page/responsive.css';
import '../css/landing-page/landing.css';
import bg from '../../public/landing/bg.jpg';
import backgroundImage from '../../public/landing/rajaampat.jpg';
import quiz from '../../public/landing/quiz.png';
import materi from '../../public/landing/materi.png'
import winner from '../../public/landing/winner.png'
import nanda from '../../public/landing/nanda.jpeg';
import fauna1 from '../../public/landing/fauna1.png';
import fauna4 from '../../public/landing/fauna4.jpg';
import faldi from '../../public/landing/faldi.jpg';
import alda from '../../public/landing/alda.png';
import roy2 from '../../public/landing/roy2.jpg';
import marzaq from '../../public/landing/marzaq.png';



import UserReviews from './UserReview'; 
import AddReviewForm from './FormReview'; 


const LandingPage = () => {
  console.log('MyComponent is loaded!');
  const [triggerFetch, setTriggerFetch] = useState(false);

  const fetchReviews = () => {
    setTriggerFetch(!triggerFetch);
  };

  return (
    
    <div>
        <h1 class="headings"> <span>Aplikasi Edukasi</span> Fauna Indonesia </h1>
        <div className="containerr mb-5">
        <div className="container__leftt" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="left__contentt">
                </div>
            </div>
            <div className="container__rightt">
                <div className="right__contentt">
                    <h1>EDFA ID</h1>
                    <h4>Aplikasi Edukasi Fauna Indonesia</h4>
                    <p>
                    Selamat datang di Aplikasi Edukasi Fauna Indonesia! Temukan keindahan dan keragaman satwa Indonesia melalui perjalanan edukatif. 
                    Mari bersama-sama menjelajahi keajaiban alam dan memahami kehidupan fauna Indonesia yang menakjubkan.
                    </p>
                </div> 
            </div>
        </div>

        <h1 className="headings" id="AboutUs"> <span>About</span> Us </h1>
        <div className="row-landing">
            <div className="img-container">
                <img className='lazyload' data-src={bg} alt=''/>
                <h4>Best Education Website</h4>
            </div>
            <div className="about-content">
                <h3>Why Choose Us</h3>
                <p>Aplikasi Edukasi Fauna Indonesia unggul karena menyajikan informasi komprehensif mengenai keanekaragaman fauna 
                  Indonesia dengan pendekatan belajar yang interaktif. Melalui gambar dan fitur interaktif, pengguna dapat menjelajahi dunia 
                  satwa Indonesia secara mendalam. Aplikasi ini terus diperbarui dan menjadi sumber rujukan yang relevan, 
                  menjadikannya pilihan sempurna bagi para pecinta pengetahuan.</p>
            </div>
        </div>

      <h1 class="headings" id="OurService"> <span>Our</span> Service </h1>
      <div class="icons-container">
      <div class="icons-item">
        <img className="lazyload" data-src={materi} alt=""/>
        <div class="icons-info">
          <h3>Materi</h3>
          <span>Edukasi Fauna indonesia</span>
        </div>
      </div>
      <div class="icons-item">
        <img className="lazyload" data-src={quiz} alt=""/>
        <div class="icons-info">
          <h3>Quiz</h3>
          <span>Edukasi Fauna indonesia</span>
        </div>
      </div>
      <div class="icons-item">
        <img className="lazyload" data-src={winner} alt=""/>
        <div class="icons-info">
          <h3>Leaderboard</h3>
          <span>Edukasi Fauna indonesia</span>
        </div>
      </div>
    </div>

    <h1 class="headings" id="FaunaIndonesia"> <span>Fauna</span> Indonesia </h1>
    <div class="foto-container">
      <div class="box1">
        <img className="lazyload" data-src={fauna1} alt=""/>
      </div>
      <div class="box1">
        <img className="lazyload" data-src={fauna4} alt=""/>
      </div>
    </div>

    <div id="UserReviews">
    {/* User Review */}
    <UserReviews triggerFetch={triggerFetch}/>
    
    {/* Review  */}
    <AddReviewForm fetchReviews={fetchReviews} />
    </div>




    {/* Team  */}

    <h3 class="headings" id="Team"> <span>Our</span> Team </h3>
    <div className='team-container'>
    <div class="member" data-aos="fade-up">
    <div class="pic"><img data-src={roy2} class="lazyload img-fluid" alt=""/></div>
      <div class="member-info">
        <h4>Khoyrur Roykhan</h4>
        <span>Project Manager and Backend</span>
        <div class="social">
          <a href="/"><i class="bi bi-twitter"></i></a>
          <a href="/"><i class="bi bi-facebook"></i></a>
          <a href="/"><i class="bi bi-instagram"></i></a>
          <a href="/"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img data-src={alda} class="lazyload img-fluid" alt=""/></div>
      <div class="member-info">
        <h4>Alda Amorita Azza</h4>
        <span>Backend</span>
        <div class="social">
          <a href="/"><i class="bi bi-twitter"></i></a>
          <a href="/"><i class="bi bi-facebook"></i></a>
          <a href="/"><i class="bi bi-instagram"></i></a>
          <a href="/"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img data-src={faldi} class="lazyload img-fluid" alt=""/></div>
      <div class="member-info">
        <h4>Sopia Refaldi</h4>
        <span>Frontend</span>
        <div class="social">
          <a href="/"><i class="bi bi-twitter"></i></a>
          <a href="/"><i class="bi bi-facebook"></i></a>
          <a href="/"><i class="bi bi-instagram"></i></a>
          <a href="/"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img data-src={marzaq} class="lazyload img-fluid" alt=""/></div>
      <div class="member-info">
        <h4>Marzaq Syihab</h4>
        <span>UI/UX Design and Frontend</span>
        <div class="social">
          <a href="/"><i class="bi bi-twitter"></i></a>
          <a href="/"><i class="bi bi-facebook"></i></a>
          <a href="/"><i class="bi bi-instagram"></i></a>
          <a href="/"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img data-src={nanda} class="lazyload img-fluid" alt=""/></div>
      <div class="member-info">
        <h4>Difana Nanda PZ</h4>
        <span>Frontend</span>
        <div class="social">
          <a href="/"><i class="bi bi-twitter"></i></a>
          <a href="/"><i class="bi bi-facebook"></i></a>
          <a href="/"><i class="bi bi-instagram"></i></a>
          <a href="/"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>
    </div>


    <h3 class="headings" id="Contact"> Contact </h3>
        <div className='row'>
            <div class="col-lg-4 col-md-4">
                <div class="info-box mb-4">
                    <i class="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>Banjarmasin, Kalimantan Selatan, Indonesia</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-4">
                <div class="info-box mb-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>edukasifauna@gmail.com</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-4">
                <div class="info-box mb-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>+62 895340751951</p>
                </div>
            </div>
        </div>
      </div>
  
  )
}

export default LandingPage;