const HomePage = {
  imagePaths: [
    '/images/home/komodo.png'
  ],

  async render() {
    return `
      <div class="container-fluid px-0"> 
        <div class="row mx-0"> 
          <div class="col-lg-12 px-0"> 
            <img id="homeImage" class="img-fluid" src="${this.imagePaths[0]}" alt="Foto Home" style="width: 100vw;">
            <h1 class="fw-bold mt-5 px-4 text-dark">Keindahan Pesona Fauna Indonesia</h1>
            <p class="lead px-5 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.</p>
          </div>
        </div>
      </div>
      <div class="album py-5 bg-light">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-6 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <img src="/images/home/pulau/jawa.jpg" class="bd-placeholder-img card-img-top" alt="Pulau Jawa" width="100%" height="225">
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://via.placeholder.com/100" class="bd-placeholder-img card-img-top" alt="Linux" width="100%" height="225">
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://via.placeholder.com/100" class="bd-placeholder-img card-img-top" alt="Linux" width="100%" height="225">
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://via.placeholder.com/100" class="bd-placeholder-img card-img-top" alt="Linux" width="100%" height="225">
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://via.placeholder.com/100" class="bd-placeholder-img card-img-top" alt="Linux" width="100%" height="225">
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="https://via.placeholder.com/100" class="bd-placeholder-img card-img-top" alt="Linux" width="100%" height="225">
        </div>
      </div>
    </div>
  </div>
</div>

    
    `;
  },

  async afterRender() {
  },
};

export default HomePage;
