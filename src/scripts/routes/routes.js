import KategoriPage from '../views/pages/kategori';
import KuisPage from '../views/pages/kuis';
import HomePage from '../views/pages/home';
import LandingPage from '../views/pages/landing-page';

const routes = {
  '/': LandingPage,
  '/home': HomePage,
  '/kategori': KategoriPage,
  '/quiz': KuisPage,
};

export default routes;
