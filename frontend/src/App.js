import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/Register.js";
import Navbar from "./components/Navbar.js";
import LandingPage from "./components/Landing-page.js";
import HomePage from "./components/Home.js";
import KategoriPage from "./components/Kategori.js";
import Quiz from "./components/Quiz.js";
import Footer from "./components/Footer.js";
import HomeAdmin from "./components/admin/HomeAdmin.js";
import SetFauna from "./components/admin/SetFauna.js";
import SetQuiz from './components/admin/SetQuiz.js';
import DetailPage from "./components/detail.js"; 
import PlayQuiz from "./components/Play-quiz.js"; 
import Leaderboard from "./components/leaderboard.js";
import QuizSelection from "./components/Selection-quiz.js";
import NavAdmin from "./components/admin/NavAdmin.js";
import SideBar from "./components/admin/Sidebar.js";
import InputName from "./components/Before-quiz.js";
import SetReview from "./components/admin/SetReview.js";
import LeaderboardAdmin from "./components/admin/Leaderboard.js";
import Slider from "./components/Slider.js";
import ResultQuiz from "./components/Result-quiz.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* User Routes */}
        <Route exact path="/" element={<><Navbar/><Slider/><LandingPage/><Footer/></>}/>
        <Route exact path="/home" element={<><Navbar/><HomePage/><Footer/></>}/>
        <Route exact path="/kategori" element={<><Navbar/><Slider/><KategoriPage/><Footer/></>}/>
        <Route exact path="/quiz" element={<><Navbar/><Slider/><Quiz/><Footer/></>}/>
        <Route path="/detail/:itemName" element={<><Navbar/><DetailPage/><Footer/></>}/>
        <Route path="/selection-quiz" element={<><Navbar/><Slider /><QuizSelection/><Footer/></>}/>
        <Route path="/input-name-quiz/:package" element={<><Navbar /><Slider /><InputName /><Footer /></>} />
        <Route path="/play-quiz/:package" element={<><Navbar/><Slider /><PlayQuiz/><Footer/></>}/>
        <Route path="/result-quiz" element={<><Navbar/><Slider /><ResultQuiz/><Footer/></>}/>
        <Route exact path="/leaderboard" element={<><Navbar /><Slider /><Leaderboard /><Footer /></>} />

        {/* Admin Route */}
        <Route exact path="/login" element={<><Login/><Footer/></>}/>
        <Route exact path="/register" element={<><Register/><Footer/></>}/>
        <Route exact path="/home-admin" element={<><NavAdmin/><SideBar/><HomeAdmin/></>}/>
        <Route exact path="/set-fauna" element={<><NavAdmin/><SetFauna/></>}/>
        <Route exact path="/set-quiz" element={<><NavAdmin/><SideBar/><SetQuiz/></>}/>
        <Route exact path="/set-review" element={<><NavAdmin /><SideBar/><SetReview /></>} />
        <Route path="/leaderboard-admin" element={<><NavAdmin /><SideBar/><LeaderboardAdmin /></>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;