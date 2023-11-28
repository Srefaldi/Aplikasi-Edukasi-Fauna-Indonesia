const LandingPage = {
  imagePaths: [
    '/images/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg'
  ],
  async render() {
    return `
    <!-- Hero Section -->
    <div class="container-fluid px-0 overflow-hidden"> 
      <div class="row mx-0"> 
        <div class="col-lg-12 px-0"> 
          <img id="homeImage" class="img-fluid w-100" src="${this.imagePaths[0]}" alt="Foto Home">
        </div>
      </div>
    </div>
  <div class="containerr mb-5">
    <div class="container__leftt">
      <div class="left__contentt">
      </div>
    </div>
    <div class="container__rightt">
      <div class="right__contentt">
        <h1>EduFauna</h1>
        <h4>Aplikasi Edukasi Fauna Indonesia</h4>
        <p>
          Selamat datang di Aplikasi Edukasi Fauna Indonesia! Temukan keindahan dan keragaman satwa Indonesia melalui perjalanan edukatif. 
          Mari bersama-sama menjelajahi keajaiban alam dan memahami kehidupan fauna Indonesia yang menakjubkan.
        </p>
        <div class="action__btnss">
          <button class="btn primary__btnn">Explore</button>
          <button class="btn secondary__btnn">See More</button>
        </div>
      </div> 
    </div>
  </div>


    <h1 class="headings"> <span>about</span> us </h1>
    <div class="row-landing">
      <div class="img-container">
        <img src="../images/landing/bg.jpg">
        <h4>Best Education Website</h4>
      </div>
      <div class="about-content">
        <h3>Why Choose Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet vitae sapiente exercitationem tenetur. 
        Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. 
        Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, 
        veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. 
        Reprehenderit deserunt nesciunt vero provident.</p>
        <a href="#" class="btn-learn">Learn More</a>
      </div>
    </div>


    <div class="icons-container">
      <div class="icons-item">
        <img src="../images/landing/quizz.png" alt="">
        <div class="icons-info">
          <h3>Materi</h3>
          <span>edukasi indonesia</span>
        </div>
      </div>
      <div class="icons-item">
        <img src="../images/landing/quizz.png" alt="">
        <div class="icons-info">
          <h3>Pemantauan</h3>
          <span>edukasi indonesia</span>
        </div>
      </div>
      <div class="icons-item">
        <img src="../images/landing/quizz.png" alt="">
        <div class="icons-info">
          <h3>Game</h3>
          <span>edukasi indonesia</span>
        </div>
      </div>
      <div class="icons-item">
        <img src="../images/landing/quizz.png" alt="">
        <div class="icons-info">
          <h3>Quiz</h3>
          <span>edukasi indonesia</span>
        </div>
      </div>
    </div>

    <h3 class="team-headings"> <span>our</span> team </h3>
    <div class="team-container">
      <div class="member" data-aos="fade-up">
      <div class="pic"><img src="../images/landing/nanda.jpeg" class="img-fluid" alt=""></div>
      <div class="member-info">
        <h4>Khoyrur Roykhan</h4>
        <span>Chief Executive Officer</span>
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img src="../images/landing/nanda.jpeg" class="img-fluid" alt=""></div>
      <div class="member-info">
        <h4>Sopia Refaldi</h4>
        <span>Chief Executive Officer</span>
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img src="../images/landing/nanda.jpeg" class="img-fluid" alt=""></div>
      <div class="member-info">
        <h4>Marzaq Syihab</h4>
        <span>Chief Executive Officer</span>
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img src="../images/landing/nanda.jpeg" class="img-fluid" alt=""></div>
      <div class="member-info">
        <h4>Alda Amorita Azza</h4>
        <span>Chief Executive Officer</span>
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div>

      <div class="member" data-aos="fade-up">
      <div class="pic"><img src="../images/landing/nanda.jpeg" class="img-fluid" alt=""></div>
      <div class="member-info">
        <h4>Difana Nanda PZ</h4>
        <span>Chief Executive Officer</span>
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      </div> 
    </div>

    <h3 class="contact-headings"> contact </h3>
    <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="info-box mb-4">
              <i class="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>Banjarmasin, Kalimantan Selatan, Indonesia</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-4">
            <div class="info-box  mb-4">
              <i class="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>edukasifauna@gmail.com</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-4">
            <div class="info-box  mb-4">
              <i class="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+62 895340751951</p>
            </div>
          </div>

        </div>


    

    





  
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default LandingPage;
