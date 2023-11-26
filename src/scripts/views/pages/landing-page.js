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
  
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default LandingPage;
