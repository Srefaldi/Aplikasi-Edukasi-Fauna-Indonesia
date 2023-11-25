class AppFooter extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #112546;
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                    margin: 0 auto;
                    font-size: 0.8em;
                }

                .footer {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start; 
                    flex-wrap: wrap; 
                    margin-left: 50px;
                    margin-right: 50px;
                }

                .footer-section {
                    width: 30%;
                    margin-bottom: 20px;
                    text-align: left;
                    margin-top: 30px;
                }

                h2 {
                    font-size: 1.2em;
                    padding-bottom: 5px;
                    margin-bottom: 10px;
                    border-bottom: none;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                li {
                    margin-bottom: 5px;
                }

                .social-media-icons {
                    display: flex;
                }

                .social-media-icons a {
                    color: white;
                    margin-right: 10px;
                    text-decoration: none;
                }

                .social-media-icons i {
                    font-size: 24px;
                }

                .fauna-types {
                    font-weight: bold;
                }

                .fauna-types ul {
                    padding-left: 20px;
                }

                .fauna-game {
                    text-align: left;
                    margin-top: 20px;
                }

                .fauna-game button {
                    background-color: #29ADB2;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .copyright {
                    width: 100%; 
                    text-align: center;
                    border-top: 1px solid #fff;
                    padding-top: 10px;
                }
            </style>
            <div class="footer">
                <div class="footer-section">
                    <h1>EduFauna</h1>
                    <ul>
                        <li>Hubungi Kami</li>
                        <p>edukasifauna@gmail.com</p>
                        <li>
                            <div class="social-media-icons">
                                <a href="#">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h2>Jenis Fauna</h2>
                    <div class="fauna-types">
                        <ul>
                            <li>Mamalia</li>
                            <li>Reptil</li>
                            <li>Burung</li>
                            <li>Amfibi</li>
                            <li>Ikan</li>
                        </ul>
                    </div>
                </div>

                <div class="footer-section">
                    <h2>Fauna Game</h2>
                    <div class="fauna-game">
                        <p>Mengenal Fauna dengan cara yang lebih menyenangkan.</p>
                        <button>Play Now</button>
                    </div>
                </div>

                <div class="copyright">
                    <p>@2023 - Edukasi Fauna</p>
                </div>
            </div>
        `;
    }
}

customElements.define('cust-footer', AppFooter);
