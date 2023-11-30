const KategoriPage = {
  imagePaths: [
    '/images/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg'
  ],

  async render() {
    let faunaItemsHTML = '';

    try {
      const response = await fetch('/data/data-fauna.json');

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      data.faunaData.forEach(item => {
        
        let truncatedDescription = item.deskripsi.substring(0, 50); 

        faunaItemsHTML += `
          <div class="col-md-3">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto">
                <img class="bd-placeholder-img w-100" src="${item.foto}" alt="${item.nama}">
              </div>
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${item.jenis}</strong>
                <h3 class="mb-0">${item.nama}</h3>
                <div class="mb-1 text-muted">${item.pulau}</div>
                <p class="mb-auto">${truncatedDescription}...</p>
                <a href="#/detail/${item.nama}" class="stretched-link" style="text-decoration: none;">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        `;
      });
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
      faunaItemsHTML = '<p>There was a problem fetching the data.</p>';
    }

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
              <a class="dropdown-item dropdown-toggle">Pulau</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Kalimantan</a></li>
                <li><a class="dropdown-item">Sumatera</a></li>
                <li><a class="dropdown-item">Jawa</a></li>
                <li><a class="dropdown-item"></a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle">Jenis Fauna</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Semua</a></li>
                <li><a class="dropdown-item">Mamalia</a></li>
                <li><a class="dropdown-item">Reptil</a></li>
                <li><a class="dropdown-item">Burung</a></li>
                <li><a class="dropdown-item">Ampibi</a></li>
                <li><a class="dropdown-item">Ikan</a></li>
                <li><a class="dropdown-item">Serangga</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="row mb-5 mt-4">
          ${faunaItemsHTML}
        </div>
      </div>
    `;
  },

  async afterRender() {
    $(document).ready(function () {
      $('.dropdown-submenu a.dropdown-toggle').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
  
      // Navigasi ke halaman detail saat "Baca Selengkapnya" diklik
      $('.stretched-link').on('click', function(event) {
        event.preventDefault();
        const itemId = $(this).attr('href').split('#/detail/')[1];
        window.location.hash = `/detail/${itemId}`;
      });
    });
  },
};

export default KategoriPage;
