import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
