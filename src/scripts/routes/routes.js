import KategoriPage from '../views/pages/kategori';
import KuisPage from '../views/pages/kuis';
import HomePage from '../views/pages/home';
import LandingPage from '../views/pages/landing-page';
import LoginPage from '../views/pages/login';
import RegisterPage from '../views/pages/register';
<<<<<<< HEAD
import HomeAdmin from '../views/pages/home-admin';

=======
import DetailPage from '../views/pages/detail'; 
>>>>>>> e8ee215f402e4245a5da91086fc74615b72df788

const routes = {
  '/': LandingPage,
  '/home': HomePage,
  '/kategori': KategoriPage,
  '/quiz': KuisPage,
<<<<<<< HEAD
  '/login': LoginPage,
  '/register': RegisterPage,
  '/home-admin': HomeAdmin,
=======
  '/login' : LoginPage,
  '/register' : RegisterPage,
  '/detail': DetailPage, 
>>>>>>> e8ee215f402e4245a5da91086fc74615b72df788
};

export default routes;
