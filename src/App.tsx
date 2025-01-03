import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Forms from "./components/Forms";
import WebElement from "./components/WebElement";
import Register from "./components/Register";
import Widgets from "./components/Widgets";
import TAGuides from "./components/TAGuides";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formpage" element={<Forms />} />
          <Route path="/web-elements" element={<WebElement />} />
          <Route path="/register" element={<Register />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/taguides" element={<TAGuides />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
