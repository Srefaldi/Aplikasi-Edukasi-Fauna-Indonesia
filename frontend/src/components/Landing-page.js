import React from 'react';

import '../css/landing-page/landing.css';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
import bg from '../css/landing-page/img/bg.jpg';
import quiz from '../css/landing-page/img/quiz.png';
import materi from '../css/landing-page/img/materi.png'
import winner from '../css/landing-page/img/winner.png'
import nanda from '../css/landing-page/img/nanda.jpeg';
import faunaa from '../css/landing-page/img/faunaa.jpg';
import fauna1 from '../css/landing-page/img/fauna1.png';
import fauna2 from '../css/landing-page/img/fauna2.jpg';
import fauna3 from '../css/landing-page/img/fauna3.jpg';
import fauna4 from '../css/landing-page/img/fauna4.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const LandingPage = () => {
  return (
    
    <div>
        <h1 class="headings"> <span>Aplikasi Edukasi</span> Fauna Indonesia </h1>
        <div className="containerr mb-5">
            <div className="container__leftt">
                <div className="left__contentt">
                </div>
            </div>
            <div className="container__rightt">
                <div className="right__contentt">
                    <h1>EduFauna</h1>
                    <h4>Aplikasi Edukasi Fauna Indonesia</h4>
                    <p>
                    Selamat datang di Aplikasi Edukasi Fauna Indonesia! Temukan keindahan dan keragaman satwa Indonesia melalui perjalanan edukatif. 
                    Mari bersama-sama menjelajahi keajaiban alam dan memahami kehidupan fauna Indonesia yang menakjubkan.
                    </p>
                    <div className="action__btnss">
                        <button className="btn primary__btnn">Explore</button>
                        <button className="btn secondary__btnn">See More</button>
                    </div>
                </div> 
            </div>
        </div>

        <h1 className="headings"> <span>About</span> Us </h1>
        <div className="row-landing">
            <div className="img-container">
                <img src={bg} alt=''/>
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

      <h1 class="headings"> <span>Our</span> Service </h1>
      <div class="icons-container">
      <div class="icons-item">
        <img src={materi} alt=""/>
        <div class="icons-info">
          <h3>Materi</h3>
          <span>Edukasi Fauna indonesia</span>
        </div>
      </div>
      <div class="icons-item">
        <img src={quiz} alt=""/>
        <div class="icons-info">
          <h3>Quiz</h3>
          <span>Edukasi Fauna indonesia</span>
        </div>
      </div>
      <div class="icons-item">
        <img src={winner} alt=""/>
        <div class="icons-info">
          <h3>Leaderboard</h3>
          <span>Edukasi Fauna indonesia</span>
        </div>
      </div>
    </div>

    <h1 class="headings"> <span>Fauna</span> Indonesia </h1>
    <div class="foto-container">
      <div class="box1">
        <img src={faunaa} alt=""/>
      </div>
      <div class="box2">
        <img src={fauna1} alt="" />
        <img src={fauna2} alt="" />
        <img src={fauna3} alt="" />
        <img src={fauna4} alt="" />
      </div>
     
    </div>

    <h3 className="team-headings"> <span>Users</span> Review </h3>
      <div className="review-container">
        <div className="review-box">
          <h5>John Doe</h5>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.
          </p>
          <span className="fas fa-quote-right"></span>
        </div>
        <div className="review-box">
          <h5>John Doe</h5>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.
          </p>
          <span className="fas fa-quote-right"></span>
        </div>
        <div className="review-box">
          <h5>John Doe</h5>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.
          </p>
          <span className="fas fa-quote-right"></span>
        </div>
        <div className="review-box">
          <h5>John Doe</h5>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.
          </p>
          <span className="fas fa-quote-right"></span>
        </div>
        <div className="review-box">
          <h5>John Doe</h5>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.
          </p>
          <span className="fas fa-quote-right"></span>
        </div>
        <div className="review-box">
          <h5>John Doe</h5>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.
          </p>
          <span className="fas fa-quote-right"></span>
        </div>
      </div>

      <div className='container-form'>
      <div className="form-review">
        <form action="#" method="post" id="reviewForm">
          <h5>Your Name</h5>
          <input type="text" name="name" required />
          <h5>Your Rating</h5>
          <div className="stars">
            <input type="radio" id="star1" name="rating" value="1" required />
            <label htmlFor="star1"><FontAwesomeIcon icon={faStar} /></label>

            <input type="radio" id="star2" name="rating" value="2" required />
            <label htmlFor="star2"><FontAwesomeIcon icon={faStar} /></label>

            <input type="radio" id="star3" name="rating" value="3" required />
            <label htmlFor="star3"><FontAwesomeIcon icon={faStar} /></label>

            <input type="radio" id="star4" name="rating" value="4" required />
            <label htmlFor="star4"><FontAwesomeIcon icon={faStar} /></label>

            <input type="radio" id="star5" name="rating" value="5" required />
            <label htmlFor="star5"><FontAwesomeIcon icon={faStar} /></label>
          </div>
          <h5>Your Review</h5>
          <textarea name="message" rows="4" required></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
      </div>

    <h3 class="team-headings"> <span>Our</span> Team </h3>
    <div className='team-container'>
    <div class="member" data-aos="fade-up">
    <div class="pic"><img src={nanda} class="img-fluid" alt=""/></div>
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
      <div class="pic"><img src={nanda} class="img-fluid" alt=""/></div>
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
      <div class="pic"><img src={nanda} class="img-fluid" alt=""/></div>
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
      <div class="pic"><img src={nanda} class="img-fluid" alt=""/></div>
      <div class="member-info">
        <h4>Marzaq Syihab</h4>
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
      <div class="pic"><img src={nanda} class="img-fluid" alt=""/></div>
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


    <h3 class="team-headings"> Contact </h3>
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