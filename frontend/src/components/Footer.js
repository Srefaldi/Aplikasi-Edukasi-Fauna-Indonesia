import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/footer/footer.css'

const Footer = () => {
  return (
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-item">
            <h4>Edukasi Fauna Indonesia</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Service</a></li>
              <li><a href="#">User Review</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="/login">Admin</a></li>

            </ul>
          </div>
          <div className="footer-item">
            <h4>Alternatif Link</h4>
            <ul>
              <li><a href="#">Mamalia</a></li>
              <li><a href="#">Reptil</a></li>
              <li><a href="#">Amfibi</a></li>
              <li><a href="#">Ikan</a></li>
              <li><a href="#">Burung</a></li>
              <li><a href="#">Serangga</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>Fitur</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/kategori">Kategori</a></li>
              <li><a href="/quiz">Quiz</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
