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
              <li><a href="/#AboutUs">About Us</a></li>
              <li><a href="/#OurService">Our Service</a></li>
              <li><a href="/#UserReviews">User Review</a></li>
              <li><a href="/#Team">Our Team</a></li>
              <li><a href="/#Contact">Contact</a></li>
              <li><a href="/login">Admin</a></li>

            </ul>
          </div>
          <div className="footer-item">
            <h4>Alternatif Link</h4>
            <ul>
              <li><a href="/kategori">Mamalia</a></li>
              <li><a href="/kategori">Reptil</a></li>
              <li><a href="/kategori">Amfibi</a></li>
              <li><a href="/kategori">Ikan</a></li>
              <li><a href="/kategori">Burung</a></li>
              <li><a href="/kategori">Serangga</a></li>
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
              <a href="https://www.facebook.com/profile.php?id=61554381522504&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/edfa_id"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/edfa_id"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
