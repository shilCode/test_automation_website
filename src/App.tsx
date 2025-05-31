import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Forms from "./components/Forms";
import WebElement from "./components/WebElement";
import Register from "./components/Register";
import Widgets from "./components/Widgets";
import TAGuides from "./components/TAGuides";
import "./index.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-background text-foreground">
      <Router>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/formpage" element={<Forms />} />
            <Route path="/web-elements" element={<WebElement />} />
            <Route path="/register" element={<Register />} />
            <Route path="/widgets" element={<Widgets darkMode={darkMode} />} />
            <Route path="/taguides" element={<TAGuides />} />
          </Routes>
     
      </Router>
    </div>
  );
}

export default App;
