import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/Register.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
