import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postheader from "./components/Postheader";
import Userprofile from "./components/Userprofile";
import Message from "./components/Message";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Postheader />} />
          <Route path="/Userprofile/:userId" element={<Userprofile />} />
          <Route path="/Message/:userId" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
