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
      <div class="fauna-detail">
        <h2 class="fauna__name">${nama}</h2>
        <img class="fauna__image" src="${foto}" alt="${nama}" />
        <div class="fauna__info">
          <h3>Information</h3>
          <h4>Jenis</h4>
          <p>${jenis}</p>
          <h4>Pulau</h4>
          <p>${pulau}</p>
          <h4>Habitat</h4>
          <p>${habitat}</p>
          <h4>Populasi</h4>
          <p>${populasi}</p>
        </div>
        <div class="fauna__description">
          <h3>Description</h3>
          <p>${deskripsi}</p>
        </div>
      </div>
    `;
  };
  
  export default createFaunaDetailTemplate;
  