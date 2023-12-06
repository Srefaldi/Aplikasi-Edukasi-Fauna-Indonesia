
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
import FaunaList from "./components/admin/FaunaList.js";
import DetailPage from "./components/detail.js"; 
import PlayQuiz from "./components/Play-quiz.js"; 
import Leaderboard from "./components/leaderboard.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Navbar/><LandingPage/><Footer/></>}/>
        <Route exact path="/login" element={<><Navbar/><Login/><Footer/></>}/>
        <Route exact path="/register" element={<><Navbar/><Register/><Footer/></>}/>
        <Route exact path="/home" element={<><Navbar/><HomePage/><Footer/></>}/>
        <Route exact path="/kategori" element={<><Navbar/><KategoriPage/><Footer/></>}/>
        <Route exact path="/quiz" element={<><Navbar/><Quiz/><Footer/></>}/>
        <Route exact path="/home-admin" element={<><Navbar/><HomeAdmin/></>}/>
        <Route exact path="/fauna-list" element={<><Navbar/><FaunaList/></>}/>
        <Route path="/detail/:itemName" element={<><Navbar/><DetailPage/><Footer/></>}/>
        <Route path="/play-quiz" element={<><Navbar/><PlayQuiz/><Footer/></>}/>
        <Route exact path="/leaderboard" element={<><Navbar /><Leaderboard /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
