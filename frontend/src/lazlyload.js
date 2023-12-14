import React, { Suspense } from 'react';

const LazyLogin = React.lazy(() => import("./components/login.js"));
const LazyRegister = React.lazy(() => import("./components/Register.js"));
const LazyNavbar = React.lazy(() => import("./components/Navbar.js"));
const LazyLandingPage = React.lazy(() => import("./components/Landing-page.js"));
const LazyHomePage = React.lazy(() => import("./components/Home.js"));
const LazyKategoriPage = React.lazy(() => import("./components/Kategori.js"));
const LazyQuiz = React.lazy(() => import("./components/Quiz.js"));
const LazyFooter = React.lazy(() => import("./components/Footer.js"));
const LazyHomeAdmin = React.lazy(() => import("./components/admin/HomeAdmin.js"));
const LazySetFauna = React.lazy(() => import("./components/admin/SetFauna.js"));
const LazySetQuiz = React.lazy(() => import('./components/admin/SetQuiz.js'));
const LazyDetailPage = React.lazy(() => import("./components/detail.js")); 
const LazyPlayQuiz = React.lazy(() => import("./components/Play-quiz.js")); 
const LazyLeaderboard = React.lazy(() => import("./components/leaderboard.js"));
const LazyQuizSelection = React.lazy(() => import("./components/Selection-quiz.js"));
const LazyNavAdmin = React.lazy(() => import("./components/admin/NavAdmin.js"));
const LazySideBar = React.lazy(() => import("./components/admin/Sidebar.js"));
const LazyInputName = React.lazy(() => import("./components/Before-quiz.js"));
const LazySetReview = React.lazy(() => import("./components/admin/SetReview.js"));
const LazyLeaderboardAdmin = React.lazy(() => import("./components/admin/Leaderboard.js"));
const LazySlider = React.lazy(() => import("./components/Slider.js"));
const LazyResultQuiz = React.lazy(() => import("./components/Result-quiz.js"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLogin />
        <LazyRegister />
        <LazyNavbar />
        <LazyLandingPage />
        <LazyHomePage />
        <LazyKategoriPage />
        <LazyQuiz />
        <LazyFooter />
        <LazyHomeAdmin />
        <LazySetFauna />
        <LazySetQuiz />
        <LazyDetailPage />
        <LazyPlayQuiz />
        <LazyLeaderboard />
        <LazyQuizSelection />
        <LazyNavAdmin />
        <LazySideBar />
        <LazyInputName />
        <LazySetReview />
        <LazyLeaderboardAdmin />
        <LazySlider />
        <LazyResultQuiz />
      </Suspense>
    </div>
  );
};

export default App;
