import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Forms from "./components/Forms";
import WebElement from "./components/WebElement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formpage" element={<Forms />} />
        <Route path="/web-elements" element={<WebElement />} />
      </Routes>
    </Router>
  );
}

export default App;
