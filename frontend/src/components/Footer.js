import React from 'react';

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
        },
        copyright: {
          width: '100%',
          textAlign: 'center',
          borderTop: '1px solid #fff',
          paddingTop: '10px',
        },
        a: {
          color: 'white',
        },
      };

  return (
    <div style={styles.host}>
      <div style={styles.footer}>
        <div style={styles.footerSection}>
          <h1>EduFauna</h1>
          <ul>
            <li>Hubungi Kami</li>
            <p>edukasifauna@gmail.com</p>
            <a href="/login" style={styles.a}>
              Masuk Sebagai Admin
            </a>
            <li>
              <div style={styles.socialMediaIcons}>
                <a href="/" style={styles.socialMediaIconsA}>
                  <i className="fab fa-youtube" style={styles.socialMediaIconsI}></i>
                </a>
                <a href="/" style={styles.socialMediaIconsA}>
                  <i className="fab fa-instagram" style={styles.socialMediaIconsI}></i>
                </a>
                <a href="/" style={styles.socialMediaIconsA}>
                  <i className="fab fa-facebook" style={styles.socialMediaIconsI}></i>
                </a>
                <a href="/" style={styles.socialMediaIconsA}>
                  <i className="fab fa-twitter" style={styles.socialMediaIconsI}></i>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h2 style={styles.h2}>Jenis Fauna</h2>
          <div className="fauna-types">
            <p>Mamalia</p>
            <p>Reptil</p>
            <p>Burung</p>
            <p>Amfibi</p>
            <p>Ikan</p>
          </div>
        </div>

        <div style={styles.footerSection}>
          <h2 style={styles.h2}>Fauna Game</h2>
          <div style={styles.faunaGame}>
            <p>Mengenal Fauna dengan cara yang lebih menyenangkan.</p>
            <button style={styles.faunaGameButton}>Play Now</button>
          </div>
        </div>

        <div style={styles.copyright}>
          <p>@2023 - Edukasi Fauna</p>
        </div>
      </div>
    </div>
  );
};


export default Footer
