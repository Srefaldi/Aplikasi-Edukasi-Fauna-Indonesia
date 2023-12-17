import React, { useEffect, useState } from 'react';
import search from '../css/icon/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/kategori/kategori.css';
import '../css/kategori/responsive-kategori.css';

const KategoriPage = () => {
  const [faunaData, setFaunaData] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { itemName } = useParams();
  const [filteredFauna, setFilteredFauna] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.API_ENDPOINT}/get-allfauna`);
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
      setFilteredFauna(faunaData);
    }
  }, [selectedCategory, selectedSubCategory, faunaData]);

  const truncatedDescription = (description) => {
    const cleanedDescription = description.replace(/<[^>]*>/g, ' ');
    return cleanedDescription.substring(0, 50);
  };

  const handleReadMore = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedCategory(null);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.API_ENDPOINT}/get-allfauna?search=${searchTerm}`);
      setFaunaData(response.data);
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
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
        <p>Pilih kategori fauna berdasarkan pulau atau jenisnya menggunakan dropdown di bawah.</p>
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
          <img data-src={search} alt="Search" width="32" height="32" className="lazyload rounded-circle" style={{ marginRight: '8px' }} />
          {selectedSubCategory ? selectedSubCategory : (selectedCategory ? selectedCategory : 'Semua Kategori')}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item" onClick={() => { handleCategoryClick(null); }}>Semua</p>
          {/* Pulau */}
          <li className="submenu-pulau dropdown-submenu">
            <p className="dropdown-item dropdown-toggle">Pulau</p>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" onClick={() => handleCategoryClick('Jawa')}>Jawa</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryClick('Kalimantan')}>Kalimantan</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryClick('Sumatera')}>Sumatera</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryClick('Sulawesi')}>Sulawesi</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryClick('Papua')}>Papua</p></li>
            </ul>
          </li>
          {/* Jenis Fauna */}
          <li className="submenu-jenis-fauna dropdown-submenu">
            <p className="dropdown-item dropdown-toggle">Jenis Fauna</p>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" onClick={() => handleSubCategoryClick('Mamalia')}>Mamalia</p></li>
              <li><p className="dropdown-item" onClick={() => handleSubCategoryClick('Reptil')}>Reptil</p></li>
              <li><p className="dropdown-item" onClick={() => handleSubCategoryClick('Burung')}>Burung</p></li>
              <li><p className="dropdown-item" onClick={() => handleSubCategoryClick('Ampibi')}>Ampibi</p></li>
              <li><p className="dropdown-item" onClick={() => handleSubCategoryClick('Ikan')}>Ikan</p></li>
              <li><p className="dropdown-item" onClick={() => handleSubCategoryClick('Serangga')}>Serangga</p></li>
            </ul>
          </li>
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginRight: '20px', marginBottom: '40px' }}>
        <input
          type="text"
          placeholder="Cari Fauna..."
          className="form-control1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%',
           marginRight: '20px',
           marginLeft:'10px',
              maxWidth:'400px' }}
        />
        <div
          className="btn btn-primary cari1"
          onClick={fetchData}
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '200px',
            maxWidth: '100px',
            backgroundColor: '#112546',
            color: 'white',
          }}
        >
          Cari
        </div>
      </div>

      <div className="kategori-content">
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            {filteredFauna.map((item) => (
              <div className='fauna-item' key={item.id}>
                <div className='fauna-item-header'>
                  <img data-src={item.image_url} className="lazyload fauna-item-image" alt={item.name} loading="lazy" />
                </div>
                <div className='fauna-item-content'>
                  <p className='fauna-title'><a href={`/detail/${item.id}`}>{item.name}</a></p>
                  <h5>{item.kategori_1} | {item.kategori_2}</h5>
                  <p dangerouslySetInnerHTML={{ __html: truncatedDescription(item.description) + '...' }}></p>
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
