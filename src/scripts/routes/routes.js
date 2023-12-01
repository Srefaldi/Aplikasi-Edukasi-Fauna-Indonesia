import KategoriPage from '../views/pages/kategori';
import KuisPage from '../views/pages/kuis';
import HomePage from '../views/pages/home';
import LandingPage from '../views/pages/landing-page';
import LoginPage from '../views/pages/login';
import RegisterPage from '../views/pages/register';
import HomeAdmin from '../views/pages/home-admin';
<<<<<<< HEAD

=======
import DetailPage from '../views/pages/detail';
>>>>>>> 56a855bc88607bbd71c31fc8728ed2d38a51bb61

const routes = {
  '/': LandingPage,
  '/home': HomePage,
  '/kategori': KategoriPage,
  '/quiz': KuisPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/home-admin': HomeAdmin,
<<<<<<< HEAD
=======
  '/detail/:id': DetailPage,  
>>>>>>> 56a855bc88607bbd71c31fc8728ed2d38a51bb61
};


export default routes;
