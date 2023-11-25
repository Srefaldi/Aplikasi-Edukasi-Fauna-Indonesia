const KategoriPage = {
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

    <!-- Hewan Section --> 
    
  <div class="container w-100 mt-5">
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="background-color: #112546;">
          <img src="/images/icon/search.png" alt="Search" width="32" height="32" class="rounded-circle"> Semua Kategori
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li class="dropdown-submenu">
            <a class="dropdown-item dropdown-toggle" href="#">Pulau</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Kalimantan</a></li>
              <li><a class="dropdown-item" href="#">Sumatera</a></li>
              <li><a class="dropdown-item" href="#">Jawa</a></li>
              <li><a class="dropdown-item" href="#"></a></li>
            </ul>
          </li>
          <li class="dropdown-submenu">
            <a class="dropdown-item dropdown-toggle" href="#">Jenis Fauna</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Semua</a></li>
              <li><a class="dropdown-item" href="#">Mamalia</a></li>
              <li><a class="dropdown-item" href="#">Reptil</a></li>
              <li><a class="dropdown-item" href="#">Burung</a></li>
              <li><a class="dropdown-item" href="#">Ampibi</a></li>
              <li><a class="dropdown-item" href="#">Ikan</a></li>
              <li><a class="dropdown-item" href="#">Serangga</a></li>
            </ul>
          </li>
        </ul>
      </div>



      <div class="row mb-5 mt-4">
        <div class="col-md-3">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto">
              <img class="bd-placeholder-img w-100" src="${KategoriPage.imagePaths[0]}" alt="Placeholder">
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Burung</strong>
              <h3 class="mb-0">Ayam Kampung</h3>
              <div class="mb-1 text-muted">Jawa</div>
              <p class="card-text mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="stretched-link" style="text-decoration: none;">Baca Selengkapnya...</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto">
              <img class="bd-placeholder-img w-100" src="${KategoriPage.imagePaths[0]}" alt="Placeholder">
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Mamalia</strong>
              <h3 class="mb-0">Bunglon Surai</h3>
              <div class="mb-1 text-muted">Jawa</div>
              <p class="mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="stretched-link" style="text-decoration: none;">Baca Selengkapnya...</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto">
              <img class="bd-placeholder-img w-100" src="${KategoriPage.imagePaths[0]}" alt="Placeholder">
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Reptil</strong>
              <h3 class="mb-0">Buaya Muara</h3>
              <div class="mb-1 text-muted">Jawa</div>
              <p class="mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="stretched-link" style="text-decoration: none;">Baca Selengkapnya...</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto">
              <img class="bd-placeholder-img w-100" src="${KategoriPage.imagePaths[0]}" alt="Placeholder">
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Reptil</strong>
              <h3 class="mb-0">Komodo</h3>
              <div class="mb-1 text-muted">Komodo</div>
              <p class="mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="stretched-link" style="text-decoration: none;">Baca Selengkapnya...</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto">
              <img class="bd-placeholder-img w-100" src="${KategoriPage.imagePaths[0]}" alt="Placeholder">
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Papua</strong>
              <h3 class="mb-0">Kakak Tua Raja</h3>
              <div class="mb-1 text-muted">Burung</div>
              <p class="mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="stretched-link" style="text-decoration: none;">Baca Selengkapnya...</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto">
              <img class="bd-placeholder-img w-100" src="${KategoriPage.imagePaths[0]}" alt="Placeholder">
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Mamalia</strong>
              <h3 class="mb-0">Harimau Sumatera</h3>
              <div class="mb-1 text-muted">Sumatera</div>
              <p class="mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" class="stretched-link" style="text-decoration: none;">Baca Selengkapnya...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    $(document).ready(function () {
      $('.dropdown-submenu a.dropdown-toggle').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });
  },
};

export default KategoriPage;
