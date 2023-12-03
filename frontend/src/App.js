import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/Register.js";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import LandingPage from "./components/Landing-page.js";
import HomePage from "./components/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<><Navbar/><LandingPage/></>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/dashboard" element={<><Navbar/><Dashboard/></>}/>
      <Route exact path="/home" element={<><Navbar/><HomePage/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
