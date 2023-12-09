import React from "react";

import hero from '../css/home/komodo.png';
import jawa from '../css/home/pulau/jawa.jpg';
import kalimantan from '../css/home/pulau/kalimantan.jpg';
import papua from '../css/home/pulau/papua.jpg';
import sulawesi from '../css/home/pulau/sulawesi.jpg';
import sumateri from '../css/home/pulau/sumateri.jpg';
import komodo from '../css/home/pulau/komodo.jpg';
import mamalia from '../css/home/jenis/Mamalia.jpg';
import reptil from '../css/home/jenis/reptil.jpg';
import burung from '../css/home/jenis/Burung.jpg';
import ampibi from '../css/home/jenis/ampibi.jpg';
import ikan from '../css/home/jenis/ikan.jpg';
import serangga from '../css/home/jenis/serangga.jpg';
import bg from '../css/home/olga.jpeg';

const HomePage = () => {
  return (
    <div>
      <script src="https://kit.fontawesome.com/d7da709801.js" crossOrigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0/css/all.css" integrity="sha384-rnyr88LlR9QfGdTzL3ZYOvKnN4HhDlXZe7R9h1UjmHjIdp2zgBfPnFls3++Fw4ar" crossOrigin="anonymous"></link>

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" style={{ width: '100vw' }} />
            <h1 className="fw-bold mt-5 px-4 text-dark">Keindahan Pesona Fauna Indonesia</h1>
            <p className="lead px-5 text-dark" style={{ textAlign: 'justify' }}>
            Pesona Fauna Indonesia mengajak kita menjelajahi keanekaragaman yang memukau, dari hutan yang rimbun hingga lautan yang dalam. 
            Setiap sudut tanah air ini menyimpan pesona fauna yang menakjubkan, menghadirkan kecantikan tak terhingga. 
            Aplikasi Edukasi Fauna Indonesia unggul dalam menyajikan informasi komprehensif mengenai keanekaragaman fauna Indonesia. 
            Pendekatan belajar yang interaktif memungkinkan pengguna menjelajahi dunia satwa Indonesia secara mendalam. 
            Terus diperbarui, aplikasi ini menjadi sumber rujukan relevan, menjadi pilihan sempurna bagi para pecinta pengetahuan. 
            </p>
          </div>
        </div>
      </div>

      {/* Pulau Section */}

      <div className="album py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col text-left mb-5">
              <h5 style={{ fontWeight: 'bold', color: '#5FBDFF', marginBottom: '5px' }}>JELAJAHI BERBAGAI JENIS FAUNA</h5>
              <h1 style={{ fontWeight: 'bold', color: 'black', marginTop: '10px', marginBottom: '0' }}>PULAU</h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-5 g-3">
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-jawa" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={jawa} className="bd-placeholder-img card-img-top" alt="Pulau Jawa" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Jawa</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-kalimantan" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={kalimantan} className="bd-placeholder-img card-img-top" alt="Pulau Kalimantan" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Kalimantan</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-papua" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={papua} className="bd-placeholder-img card-img-top" alt="Pulau Papua" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Papua</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-sulawesi" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={sulawesi} className="bd-placeholder-img card-img-top" alt="Pulau Sulawesi" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Sulawesi</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-sumatera" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={sumateri} className="bd-placeholder-img card-img-top" alt="Pulau Sumatera" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Sumatera</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jenis Section */}

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col text-left mb-5">
              <h1 style={{ fontWeight: 'bold', color: 'black', marginTop: '10px', marginBottom: '0' }}>JENIS</h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-6 g-3">
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-mamalia" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={mamalia} className="bd-placeholder-img card-img-top" alt="Jenis Mamalia" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Mamalia</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-reptil" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={reptil} className="bd-placeholder-img card-img-top" alt="Jenis Reptil" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Reptil</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-burung" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={burung} className="bd-placeholder-img card-img-top" alt="Jenis Burung" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Burung</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-ampibi" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={ampibi} className="bd-placeholder-img card-img-top" alt="Jenis Ampibi" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Ampibi</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-ikan" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={ikan} className="bd-placeholder-img card-img-top" alt="Jenis Ikan" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Ikan</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm" style={{ position: 'relative' }}>
                <a href="/link-menuju-halaman-seranggas" style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={serangga} className="bd-placeholder-img card-img-top" alt="Jenis Serangga" style={{width: '100%', height: '230px' }}/>
                    <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Serangga</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fauna Game Section */}

      <div className="album py-1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col text-left mb-5">
              <h5 style={{ fontWeight: 'bold', color: '#5FBDFF', marginBottom: '5px' }}>FAUNA GAME</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 bg-image" style={{ backgroundImage: `url(${bg})`, borderRadius: '15px', padding: '20px', height: '350px', backgroundSize: 'cover' }}>
        <div className="row">
          <div className="col-lg-12 text-left mt-5 mb-5">
            <h2 style={{ color: 'white', fontWeight: 'bold', marginTop: '30px', paddingLeft: '20px' }}>Mengenal fauna dengan cara yang lebih menyenangkan </h2>
            <a href="/link-ke-halaman-play-now" className="btn mt-3 d-inline-block" style={{ borderRadius: '15px', backgroundColor: '#29ADB2', color: 'white', padding: '8px 20px', fontWeight: 'bold', marginLeft: '20px' }}>Play now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
