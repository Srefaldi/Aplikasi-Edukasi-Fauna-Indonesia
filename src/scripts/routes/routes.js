import KategoriPage from '../views/pages/kategori';
import KuisPage from '../views/pages/kuis';
import HomePage from '../views/pages/home';
import LandingPage from '../views/pages/landing-page';
import LoginPage from '../views/pages/login';
import RegisterPage from '../views/pages/register';
import HomeAdmin from '../views/pages/home-admin';


const routes = {
  '/': LandingPage,
  '/home': HomePage,
  '/kategori': KategoriPage,
  '/quiz': KuisPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/home-admin': HomeAdmin,
};

export default routes;
