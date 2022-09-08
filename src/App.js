import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";
import Chats from "./Pages/Chats/Chats";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat/:chatId" element={<Chats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
