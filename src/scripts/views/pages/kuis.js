const KuisPage = {
  imagePaths: [
    '/images/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg'
  ],
  async render() {
    return `
    <!-- Hero Section -->

    <div class="container-fluid px-0"> 
        <div class="row mx-0"> 
          <div class="col-lg-12 px-0"> 
            <img id="homeImage" class="img-fluid" src="${this.imagePaths[0]}" alt="Foto Home" style="width: 100vw;">
          </div>
        </div>
      </div>

      <!-- Menu Quiz Section -->
<div class="container py-4">
  <div class="row align-items-md-stretch">
    <div class="col-md-12 mt-5">
      <div class="h-100 p-5 border rounded-3">
        <div class="row">
          <div class="col-md-8">
            <h2>Ayo Mainkan Quiz</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#/play" class="btn btn-outline-secondary" type="button">Play Now</a>
          </div>
          <div class="col-md-4">
            <img src="${this.imagePaths[0]}" class="img-fluid" alt="Image 1">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 mt-5">
      <div class="h-100 p-5  border rounded-3">
        <div class="row">
          <div class="col-md-8">
            <h2>Leaderboard</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#/leaderboard" class="btn btn-outline-secondary"  type="button">Lihat Peringkat Anda</a>
          </div>
          <div class="col-md-4">
            <img src="${this.imagePaths[0]}" class="img-fluid" alt="Image 2">
          </div>
        </div>
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

export default KuisPage;
