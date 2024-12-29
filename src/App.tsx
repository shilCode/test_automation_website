import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Forms from "./components/Forms";
import WebElement from "./components/WebElement";
import Register from "./components/Register";
import Widgets from "./components/Widgets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formpage" element={<Forms />} />
        <Route path="/web-elements" element={<WebElement />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Widgets" element={<Widgets />} />
      </Routes>
    </Router>
  );
}

export default App;
