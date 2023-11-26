const HomePage = {
  imagePaths: [
    '/images/home/komodo.png'
  ],

  async render() {
    return `
    <!-- Hero Section -->

    <div class="container-fluid px-0"> 
        <div class="row mx-0"> 
          <div class="col-lg-12 px-0"> 
            <img id="homeImage" class="img-fluid" src="${this.imagePaths[0]}" alt="Foto Home" style="width: 100vw;">
            <h1 class="fw-bold mt-5 px-4 text-dark">Keindahan Pesona Fauna Indonesia</h1>
            <p class="lead px-5 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae sapiente exercitationem tenetur. Cumque porro tempora, repudiandae neque adipisci magnam laborum reprehenderit. Beatae ratione voluptatibus soluta repellat voluptate nam recusandae nihil quae ipsam, voluptas aperiam dolorem esse eligendi consequuntur, veritatis, similique totam et aliquam fugit repudiandae laboriosam? Nostrum libero dolorum tenetur odit dignissimos, consectetur asperiores accusantium. Reprehenderit deserunt nesciunt vero provident.</p>
          </div>
        </div>
      </div>
      
      <!-- Pulau Section -->


      <div class="album py-4 bg-light">
        <div class="container">
        <div class="row">
        <div class="col text-left mb-5">
          <h5 style="font-weight: bold; color:#5FBDFF; margin-bottom: 5px;">JELAJAHI BERBAGAI JENIS FAUNA</h5>
          <h1 style="font-weight: bold; color: black; margin-top:10px; margin-bottom: 0;">PULAU</h1>
        </div>
      </div>
          <div class="row row-cols-1 row-cols-md-6 g-3">
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-jawa" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/pulau/jawa.jpg" class="bd-placeholder-img card-img-top" alt="Pulau Jawa" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Jawa
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-kalimantan" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/pulau/kalimantan.jpg" class="bd-placeholder-img card-img-top" alt="Pulau Kalimantan" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Kalimantan
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-papua" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/pulau/papua.jpg" class="bd-placeholder-img card-img-top" alt="Pulau Papua" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Papua
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-sulawesi" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/pulau/sulawesi.jpg" class="bd-placeholder-img card-img-top" alt="Pulau Sulawesi" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Sulawesi
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-sumatera" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/pulau/sumateri.jpg" class="bd-placeholder-img card-img-top" alt="Pulau Sumatera" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Sumatera
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-komodo" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/pulau/komodo.jpg" class="bd-placeholder-img card-img-top" alt="Pulau Komodo" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Komodo
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Jenis Section -->
      
      <div class="album py-5 bg-light">
        <div class="container">
        <div class="row">
        <div class="col text-left mb-5">
          <h1 style="font-weight: bold; color: black; margin-top:10px; margin-bottom: 0;">JENIS</h1>
        </div>
      </div>
          <div class="row row-cols-1 row-cols-md-6 g-3">
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-mamalia" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/jenis/Mamalia.jpg" class="bd-placeholder-img card-img-top" alt="Jenis Mamalia" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Mamalia
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-reptil" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/jenis/reptil.jpg" class="bd-placeholder-img card-img-top" alt="Jenis Reptil" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Reptil
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-burung" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/jenis/Burung.jpg" class="bd-placeholder-img card-img-top" alt="Jenis Burung" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Burung
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-ampibi" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/jenis/ampibi.jpg" class="bd-placeholder-img card-img-top" alt="Jenis Ampibi" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Ampibi
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-ikan" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/jenis/ikan.jpg" class="bd-placeholder-img card-img-top" alt="Jenis Ikan" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Ikan
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style="position: relative;">
                <a href="/link-menuju-halaman-seranggas" style="text-decoration: none;">
                  <div style="position: relative;">
                    <img src="/images/home/jenis/serangga.jpg" class="bd-placeholder-img card-img-top" alt="Jenis Serangga" width="100%" height="230px">
                    <div style="position: absolute; top: 90%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                      Serangga
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Fauna Game Section -->
      <div class="album py-1 mt-5">
      <div class="container">
      <div class="row">
        <div class="col text-left mb-5">
          <h5 style="font-weight: bold; color:#5FBDFF; margin-bottom: 5px;">FAUNA GAME</h5>
        </div>
      </div>
      </div>
      </div>

      <div class="container mb-5 bg-image" style="background-image: url('/images/home/olga.jpeg'); border-radius: 15px; padding: 20px; height: 350px; background-size: cover;">
      <div class="row">
        <div class="col-lg-12 text-left mt-5 mb-5">
          <h2 style="color: white; font-weight: bold; margin-top: 30px; padding-left: 20px;">Mengenal fauna dengan cara yang<br> lebih menyenangkan</h2>
          <a href="/link-ke-halaman-play-now" class="btn mt-3 d-inline-block" style="border-radius: 15px; background-color: #29ADB2; color: white; padding: 8px 20px; font-weight: bold; margin-left: 20px;">Play now</a>
        </div>
      </div>
    </div>
    
    
      

      

    
    `;
  },

  async afterRender() {
  },
};

export default HomePage;
