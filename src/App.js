import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
