export default function swDev() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register(
          new URL('../public/sw.js', import.meta.url),
          { type: 'module' }
        )
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
      });
    }
  }
  