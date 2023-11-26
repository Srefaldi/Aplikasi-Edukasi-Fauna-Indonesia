import 'regenerator-runtime';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/appbar/appbar.css';
import '../styles/responsive/responsive.css';
import '../styles/landing-page/landing.css';
import '../styles/main.css';
import './components/cust-footer';
import App from './views/app-bar';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
