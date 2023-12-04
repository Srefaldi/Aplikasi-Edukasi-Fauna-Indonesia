import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/Register.js";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import LandingPage from "./components/Landing-page.js";
import HomePage from "./components/Home.js";
import KategoriPage from "./components/Kategori.js";
import Quiz from "./components/Quiz.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<><Navbar/><LandingPage/><Footer/></>}/>
      <Route exact path="/login" element={<><Navbar/><Login/><Footer/></>}/>
      <Route exact path="/register" element={<><Navbar/><Register/><Footer/></>}/>
      <Route exact path="/dashboard" element={<><Navbar/><Dashboard/><Footer/></>}/>
      <Route exact path="/home" element={<><Navbar/><HomePage/><Footer/></>}/>
      <Route exact path="/kategori" element={<><Navbar/><KategoriPage/><Footer/></>}/>
      <Route exact path="/quiz" element={<><Navbar/><Quiz/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
