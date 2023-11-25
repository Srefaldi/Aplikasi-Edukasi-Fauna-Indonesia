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
    `;
  },

  async afterRender() {
  },
};

export default HomePage;
