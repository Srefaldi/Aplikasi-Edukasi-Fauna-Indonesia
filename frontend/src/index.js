import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";
import swDev from './swDev';
axios.defaults.withCredentials = true;

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register(new URL('./sw.js', import.meta.url))
//       .then(registration => {
//         console.log('Service Worker registered:', registration);
//       })
//       .catch(error => {
//         console.error('Service Worker registration failed:', error);
//       });
//   });
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
swDev();