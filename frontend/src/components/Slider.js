import React, { useState, useEffect } from 'react';
import '../css/slider/slider.css';
import faunaa from '../css/landing-page/img/faunaa.jpg';
import fauna1 from '../css/landing-page/img/fauna1.png';
import fauna3 from '../css/landing-page/img/fauna3.jpg';
import fauna4 from '../css/landing-page/img/fauna4.jpg';

function ResponsiveSlideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => (prevIndex + n + 5) % 5);
  }

  function showSlides(index) {
    const slides = document.getElementsByClassName("slide");
    if (index >= slides.length) {
      setSlideIndex(0);
    }
    if (index < 0) {
      setSlideIndex(slides.length - 1);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = i === index ? "block" : "none";
    }
  }

  return (
    <div>
      {/* Your slides */}
      <div className="slides">
        <div className="slide">
        <img src={faunaa} alt=''/>
        </div>
        <div className="slide">
        <img src={fauna1} alt=''/>
        </div>
        <div className="slide">
        <img src={fauna3} alt=''/>
        </div>
        <div className="slide">
        <img src={fauna4} alt=''/>
        </div>

        <div className="navigation">
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveSlideshow;