import "./App.css";

// React Router Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Component Imports
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

// Page Imports
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {window.location.pathname === "/admin" ? null : <Navbar />}
        <Routes>
          <Route path="/" exact element={<HeroSection />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
