// FaunaDetailTemplate.js
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
    
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <h1 className="mt-3" style={{ color: 'black' }}>Edukasi Fauna</h1>
          <div className="fauna-detail mt-5">
            <div className="row">
              <div className="col-lg-6">
                <img className="img-fluid mb-4 mt-3" src={image_url} alt={image_name} />
              </div>
              <div className="col-lg-6 mt-2">
                <div className="fauna__info" style={{ color: 'black' }}>
                  <h4 className="mb-0 pl-3" style={{ color: 'black' }}>Nama</h4>
                  <p className="fauna__name pl-3" style={{ color: 'black' }}>{name}</p>
                  <div className="mb-3">
                    <h4 className="mb-0 pl-3" style={{ color: 'black' }}>Jenis</h4>
                    <p className="pl-3" style={{ color: 'black' }}>{kategori_1}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="mb-0 pl-3" style={{ color: 'black' }}>Pulau</h4>
                    <p className="pl-3" style={{ color: 'black' }}>{kategori_2}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="mb-0 pl-3" style={{ color: 'black' }}>Habitat</h4>
                    <p className="pl-3" style={{ color: 'black' }}>{desc_habitat}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="mb-0 pl-3" style={{ color: 'black' }}>Populasi</h4>
                    <p className="pl-3" style={{ color: 'black' }}>{desc_populasi}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="fauna__description mt-4">
                  <h3 style={{ color: 'black' }}>Ringkasan</h3>
                  <p style={{ color: 'black' }}>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createFaunaDetailTemplate;
