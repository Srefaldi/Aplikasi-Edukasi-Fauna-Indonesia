import React, { useEffect, useState } from 'react';
import search from '../css/icon/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/kategori/kategori.css';

const KategoriPage = () => {
  const [faunaData, setFaunaData] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { itemName } = useParams();
  const [filteredFauna, setFilteredFauna] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-allfauna');
        setFaunaData(response.data);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
        setError('There was a problem fetching the data.');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory || selectedSubCategory) {
      const filteredData = faunaData.filter(item => {
        return (
          (!selectedCategory || item.kategori_1 === selectedCategory) &&
          (!selectedSubCategory || item.kategori_2 === selectedSubCategory)
        );
      });
      setFilteredFauna(filteredData);
    } else {
      // If no category selected, show all fauna
      setFilteredFauna(faunaData);
    }
  }, [selectedCategory, selectedSubCategory, faunaData]);

 const truncatedDescription = (description) => description.substring(0, 150);
  const handleReadMore = (id) => {
    navigate(`/detail/${id}`);
  };
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

    const initSubmenuPulau = () => {
      const submenuPulau = document.querySelector('.submenu-pulau');
    
      if (submenuPulau) {
        submenuPulau.addEventListener('mouseenter', function () {
          const dropdownMenu = this.querySelector('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.classList.add('show', 'position-absolute');
            dropdownMenu.style.left = '100%';
            dropdownMenu.style.top = '0';
          }
        });
    
        submenuPulau.addEventListener('mouseleave', function () {
          const dropdownMenu = this.querySelector('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
          }
        });
      }
    };

    const initSubmenuJenisFauna = () => {
      const submenuJenisFauna = document.querySelector('.submenu-jenis-fauna');
    
      if (submenuJenisFauna) {
        submenuJenisFauna.addEventListener('mouseenter', function () {
          const dropdownMenu = this.querySelector('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.classList.add('show', 'position-absolute');
            dropdownMenu.style.left = '100%';
            dropdownMenu.style.top = '35px';
          }
        });
    
        submenuJenisFauna.addEventListener('mouseleave', function () {
          const dropdownMenu = this.querySelector('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
          }
        });
      }
    };

    initDropdown();
    initSubmenuPulau();
    initSubmenuJenisFauna();

    return () => {
      const dropdownToggle = document.getElementById('dropdownMenuButton');
      if (dropdownToggle) {
        dropdownToggle.removeEventListener('click', initDropdown);
      }

      const submenuPulau = document.querySelector('.submenu-pulau');
      if (submenuPulau) {
        submenuPulau.removeEventListener('mouseenter', initSubmenuPulau);
        submenuPulau.removeEventListener('mouseleave', initSubmenuPulau);
      }

      const submenuJenisFauna = document.querySelector('.submenu-jenis-fauna');
      if (submenuJenisFauna) {
        submenuJenisFauna.removeEventListener('mouseenter', initSubmenuJenisFauna);
        submenuJenisFauna.removeEventListener('mouseleave', initSubmenuJenisFauna);
      }
    };
  }, []);

  return (
    <div className='mt-5'>
      <div className="welcome-text">
        <h2>Selamat Datang di Halaman Kategori Fauna!</h2>
        <p>Temukan berbagai jenis fauna dari berbagai pulau dan jenis di Indonesia.</p>
        <p>Pilih kategori fauna berdasarkan pulau atau jenisnya menggunakan dropdown di atas.</p>
        <p>Nikmati penjelajahan Anda!</p>
      </div>


      <div className="dropdown-container">
      <button
          className="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: '#112546', color: 'white', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px' }}
      >
            <img src={search} alt="Search" width="32" height="32" className="rounded-circle" style={{ marginRight: '8px' }} />
            {selectedSubCategory ? selectedSubCategory : (selectedCategory ? selectedCategory : 'Semua Kategori')}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item" onClick={() => { setSelectedCategory(null); setSelectedSubCategory(null); }}>Semua</p>
            {/* Pulau */}
            <li className="submenu-pulau dropdown-submenu">
              <p className="dropdown-item dropdown-toggle">Pulau</p>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item" onClick={() => { setSelectedCategory('Jawa'); setSelectedSubCategory(null); }}>Jawa</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedCategory('Kalimantan'); setSelectedSubCategory(null); }}>Kalimantan</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedCategory('Sumatera'); setSelectedSubCategory(null); }}>Sumatera</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedCategory('Sulawesi'); setSelectedSubCategory(null); }}>Sulawesi</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedCategory('Papua'); setSelectedSubCategory(null); }}>Papua</p></li>
              </ul>
            </li>
            {/* Jenis Fauna */}
            
            <li className="submenu-jenis-fauna dropdown-submenu">
              <p className="dropdown-item dropdown-toggle">Jenis Fauna</p>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item" onClick={() => { setSelectedSubCategory('Mamalia'); setSelectedCategory(null) }}>Mamalia</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedSubCategory('Reptil'); setSelectedCategory(null) }}>Reptil</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedSubCategory('Burung'); setSelectedCategory(null) }}>Burung</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedSubCategory('Ampibi'); setSelectedCategory(null) }}>Ampibi</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedSubCategory('Ikan'); setSelectedCategory(null) }}>Ikan</p></li>
                <li><p className="dropdown-item" onClick={() => { setSelectedSubCategory('Serangga'); setSelectedCategory(null) }}>Serangga</p></li>
              </ul>
            </li>
          </ul>  
        </div>


      <div className="kategori-content">
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            {filteredFauna.map((item) => (
              <div className='fauna-item' key={item.id}>
                <div className='fauna-item-header'>
                  <img src={item.image_url} className="fauna-item-image" alt={item.name} loading="lazy" />
                </div>
                <div className='fauna-item-content'>
                  <p className='fauna-title'><a href={`/detail/${item.id}`}>{item.name} | {item.kategori_1}</a></p>
                  <h5>{item.kategori_2}</h5>
                  <p>{truncatedDescription(item.description)}...</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default KategoriPage;
