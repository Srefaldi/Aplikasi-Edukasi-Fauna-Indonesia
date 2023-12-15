import React from 'react';
import slide1 from '../../public/slider/slide1.jpg';
import slide2 from '../../public/slider/slide2.jpg';
import slide3 from '../../public/slider/slide3.jpg';

function Slider() {
  const imageStyle = {
    height: '600px',
    objectFit: 'cover', 
  };

  const carouselStyle = {
    marginTop: '50px',
  };

  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" style={carouselStyle}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img data-src={slide1} className="lazyload d-block w-100 img-fluid" alt="Slide 1" style={imageStyle} loading="lazy" />
          <div className="container">
          </div>
        </div>
        <div className="carousel-item">
          <img data-src={slide2} className="lazyload d-block w-100 img-fluid" alt="Slide 2" style={imageStyle} loading="lazy" />
          <div className="container">
          </div>
        </div>
        <div className="carousel-item">
          <img data-src={slide3} className="lazyload d-block w-100 img-fluid" alt="Slide 3" style={imageStyle} loading="lazy" />
          <div className="container">
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
