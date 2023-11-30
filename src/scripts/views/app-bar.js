import DrawerInitiator from '../utils/appbar-initiator';
import UrlParser from '../routes/url-route';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
  
    if (page) {
      try {
        this._content.innerHTML = await page.render();
        if (typeof page.afterRender === 'function') {
          await page.afterRender();
        }
      } catch (error) {
        console.error('Error rendering page:', error);
        
      }
    } else {
      console.error('Page not found for URL:', url);
      
    }
  }
}

export default App;
