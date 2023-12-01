import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/Register.js";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/dashboard" element={<><Navbar/><Dashboard/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
