// detail-page-template.js
const createFaunaDetailTemplate = (fauna) => {
  const {
    foto,
    nama,
    jenis,
    pulau,
    habitat,
    populasi,
    deskripsi,
  } = fauna;

  return `
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-12 mt-4">
          <h1 class="mt-3">Edukasi Fauna</h1>
          <div class="fauna-detail mt-5">
            <div class="row">
              <div class="col-lg-6">
                <img class="img-fluid mb-4 mt-3" src="${foto}" alt="${nama}" />
              </div>
              <div class="col-lg-6 mt-2">
                <div class="fauna__info">
                  <h4 class="mb-0 pl-3">Nama</h4>          
                  <p class="fauna__name pl-3">${nama}</p>
                  <div class="mb-3">
                    <h4 class="mb-0 pl-3">Jenis</h4>
                    <p class="pl-3">${jenis}</p>
                  </div>
                  <div class="mb-3">
                    <h4 class="mb-0 pl-3">Pulau</h4>
                    <p class="pl-3">${pulau}</p>
                  </div>
                  <div class="mb-3">
                    <h4 class="mb-0 pl-3">Habitat</h4>
                    <p class="pl-3">${habitat}</p>
                  </div>
                  <div class="mb-3">
                    <h4 class="mb-0 pl-3">Populasi</h4>
                    <p class="pl-3">${populasi}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="fauna__description mt-4">
                  <h3>Ringkasan</h3>
                  <p>${deskripsi}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default createFaunaDetailTemplate;
