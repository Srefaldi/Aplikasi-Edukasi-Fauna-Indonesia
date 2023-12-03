import React, { useEffect, useState } from 'react';
import hero from '../css/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
import search from '../css/icon/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const KategoriPage = () => {
  const [faunaData, setFaunaData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data-fauna.json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setFaunaData(data.faunaData);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
        setError('There was a problem fetching the data.');
      }
    };
    fetchData();
  }, []);

  const truncatedDescription = (description) => description.substring(0, 50);

  useEffect(() => {
    const initDropdown = () => {
      const dropdownToggle = document.getElementById('dropdownMenuButton');
      const dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function () {
          dropdownMenu.classList.toggle('show');
        });
      }
    };

    initDropdown();
  }, []);

  const handleReadMore = (itemId) => {
    window.location.hash = `/detail/${itemId}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid px-0 overflow-hidden">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <img id="homeImage" className="img-fluid w-100" src={hero} alt="Foto Home"/>
          </div>
        </div>
      </div>

      {/* Hewan Section */}
      <div className="container w-100 mt-5">
        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#112546', color: 'white', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px' }}>
            <img src={search} alt="Search" width="32" height="32" className="rounded-circle" style={{ marginRight: '8px' }}/>Semua Kategori</button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* Pulau */}
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle">Pulau</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Kalimantan</a></li>
                <li><a className="dropdown-item">Sumatera</a></li>
                <li><a className="dropdown-item">Jawa</a></li>
                <li><a className="dropdown-item"></a></li>
              </ul>
            </li>
            {/* Jenis Fauna */}
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle">Jenis Fauna</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Semua</a></li>
                <li><a className="dropdown-item">Mamalia</a></li>
                <li><a className="dropdown-item">Reptil</a></li>
                <li><a className="dropdown-item">Burung</a></li>
                <li><a className="dropdown-item">Ampibi</a></li>
                <li><a className="dropdown-item">Ikan</a></li>
                <li><a className="dropdown-item">Serangga</a></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Fauna Items */}
        <div className="row mb-5 mt-4">
          {error ? (<p>{error}</p>) : (
            faunaData.map((item) => (
              <div className="col-md-3" key={item.nama}>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col-auto">
                    <img className="bd-placeholder-img w-100" src={item.foto} alt={item.nama}/>
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{item.jenis}</strong>
                    <h3 className="mb-0">{item.nama}</h3>
                    <div className="mb-1 text-muted">{item.pulau}</div>
                    <p className="mb-auto">{truncatedDescription(item.deskripsi)}...</p>
                    <a href={`/detail/${item.nama}`} className="stretched-link" style={{ textDecoration: 'none' }} onClick={() => handleReadMore(item.nama)}>Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default KategoriPage;
