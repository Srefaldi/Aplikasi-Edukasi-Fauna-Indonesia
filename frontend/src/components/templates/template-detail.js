import React from 'react';

const createFaunaDetailTemplate = (fauna) => {
  const {
    image_url,
    image_name,
    name,
    kategori_1,
    kategori_2,
    desc_habitat,
    desc_populasi,
    description,
  } = fauna;

  return (
    
    <div className="fauna-detail">
      <h2 className="fauna__name">{name}</h2>
      <img className="fauna__image" src={image_url} alt={image_name} />
      <div className="fauna__info">
        <h3>Information</h3>
        <h4>Nama</h4>
        <p>{name}</p>
        <h4>Jenis</h4>
        <p>{kategori_1}</p>
        <h4>Pulau</h4>
        <p>{kategori_2}</p>
        <h4>Habitat</h4>
        <p>{desc_habitat}</p>
        <h4>Populasi</h4>
        <p>{desc_populasi}</p>
      </div>
      <div className="fauna__description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default createFaunaDetailTemplate;

const styles = `
  .fauna-detail {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 20px;
  }

  .fauna__name {
    font-size: 24px;
    font-weight: bold;
    color: #0B2447;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .fauna__image {
    width: 70%;
    height: auto;
    border-radius: 8px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fauna__info {
    margin-bottom: 20px;
  }

  .fauna__info h3 {
    font-size: 20px;
    font-weight: bold;
    color: #0B2447;
  }

  .fauna__info h4 {
    font-size: 16px;
    color: #0B2447;
    margin-top: 10px;
  }

  .fauna__description {
    margin-bottom: 20px;
  }

  .fauna__description h3 {
    font-size: 20px;
    font-weight: bold;
    color: #0B2447;
  }

  .fauna__description p {
    font-size: 16px;
    color: #333;
    text-align: justify;
    white-space: normal; 
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);