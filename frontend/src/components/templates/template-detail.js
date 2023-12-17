import React from 'react';
import backgroundImage from './bg.jpg';

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
    <div>
    
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container position-relative d-flex flex-column align-items-center">
          <h2>Detail Fauna</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li><a href="/kategori">Kategori</a></li>
          </ol>
        </div>
      </div>


      <div className="fauna-detail">
        <h2 className="fauna__name">{name}</h2>
        <img className="lazyload fauna__image" data-src={image_url} alt={image_name} />
        <div className="fauna__info">
          <h3>Information</h3>
          <h4>Nama</h4>
          <p>{name}</p>
          <h4>Pulau</h4>
          <p>{kategori_1}</p>
          <h4>Jenis</h4>
          <p>{kategori_2}</p>
          <h4>Habitat</h4>
          <p>{desc_habitat}</p>
          <h4>Populasi</h4>
          <p>{desc_populasi}</p>
        </div>
        <div className="fauna__description">
          <h3>Description</h3>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>

      </div>
    </div>
  );
};

const styles = `

  .breadcrumbs {
    background-size: cover;
    background-position: center;
    color: #112546;
    padding: 50px 0;
    margin-top: 50px;
  }

  .breadcrumbs .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .breadcrumbs h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .breadcrumbs ol {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .breadcrumbs li {
    margin-right: 10px;
    font-size: 16px;
  }

  .breadcrumbs li:last-child {
    margin-right: 0;
  }

  .breadcrumbs a {
    color: #112546;
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    background-color: white;
    text-decoration: none;
    padding : 8px 12px;
    border-radius: 10px;
  }

  .welcome-text {
    padding: 20px;
    margin: 20px;
    text-align: center;
  }

  .welcome-text h2 {
    font-size: 24px;
    font-weight: bold;
    color: #0B2447;
    margin-bottom: 10px;
  }

  .welcome-text p {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  .fauna-detail {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
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
  .fauna__info p{
    font-size: 16px;
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
    font-weight: bold;
  }

  .fauna__description {
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;
  }

  .fauna__description h3 {
    font-size: 20px;
    font-weight: bold;
    color: #0B2447;
  }

.fauna__description p {
  justify-content: center;
  text-align: justify;
  
  margin: 0 auto;
  font-size: 16px;
  color: #333;
  text-align: justify;
  overflow-wrap: break-word; 
  white-space: normal; 
}

`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default createFaunaDetailTemplate;
