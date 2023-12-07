import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

    const styles = {
      host: {
        display: 'block',
        backgroundColor: '#112546',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        margin: '0 auto',
        fontSize: '0.8em',
        width: '100vw',
      },
        footer: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginLeft: '50px',
          marginRight: '50px',
        },
        footerSection: {
          width: '30%',
          marginBottom: '20px',
          textAlign: 'left',
          marginTop: '30px',
        },
        p: {
          color: 'white',
        },
        h2: {
          fontSize: '1.2em',
          paddingBottom: '5px',
          marginBottom: '10px',
          borderBottom: 'none',
        },
        ul: {
          listStyle: 'none',
          padding: '0',
          margin: '0',
        },
        li: {
          marginBottom: '5px',
        },
        socialMediaIcons: {
          display: 'flex',
          color: 'white',
        },
        socialMediaIconsA: {
          color: 'white',
          marginRight: '10px',
          textDecoration: 'none',
        },
        socialMediaIconsI: {
          fontSize: '24px',
        },
        faunaGame: {
          textAlign: 'left',
          marginTop: '20px',
        },
        faunaGameButton: {
          backgroundColor: '#29ADB2',
          color: 'white',
          padding: '10px 50px',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          marginTop: '15px'
        },
        copyright: {
          width: '100%',
          textAlign: 'center',
          borderTop: '1px solid #fff',
          paddingTop: '10px',
        },
        a: {
          color: 'white',
          textDecoration: 'none', 
        },
        iconStyle: {
          marginLeft: '10px', // Jarak kiri ikon
          marginRight: '10px', // Jarak kanan ikon
        },
      };  

  return (
    <div style={styles.host}>
      <div style={styles.footer}>
        <div  style={styles.footerSection}>
          <h1 className='mb-3'>EduFauna</h1>
          <ul>
            <li className='mb-2'>Hubungi Kami</li>
            <p style={{ color: 'white' }}>edukasifauna@gmail.com</p>
            <a href="/login" style={styles.a}>
              Masuk Sebagai Admin
            </a>
            <li className='mt-2'>
                <FontAwesomeIcon icon={faYoutube} style={styles.iconStyle} />
                <FontAwesomeIcon icon={faInstagram} style={styles.iconStyle} />
                <FontAwesomeIcon icon={faFacebook} style={styles.iconStyle} />
                <FontAwesomeIcon icon={faTwitter} style={styles.iconStyle} />
              </li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h2 style={styles.h2}>Jenis Fauna</h2>
          <div className="fauna-types">
            <p style={{ color: 'white' }}>Mamalia</p>
            <p style={{ color: 'white' }}>Reptil</p>
            <p style={{ color: 'white' }}>Burung</p>
            <p style={{ color: 'white' }}>Amfibi</p>
            <p style={{ color: 'white' }}>Ikan</p>
          </div>
        </div>

        <div style={styles.footerSection}>
          <h2 style={styles.h2}>Fauna Game</h2>
          <div style={styles.faunaGame}>
            <p style={{ color: 'white' }}>Mengenal Fauna dengan cara yang lebih menyenangkan.</p>
            <button style={styles.faunaGameButton}>Play Now</button>
          </div>
        </div>

        <div style={styles.copyright}>
          <p style={{ color: 'white' }}>@2023 - Edukasi Fauna</p>
        </div>
      </div>
    </div>
  );
};


export default Footer
