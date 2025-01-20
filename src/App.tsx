import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import Forms from "./components/pages/Forms";
import WebElement from "./components/pages/WebElement";
import Register from "./components/pages/Register";
import Widgets from "./components/pages/Widgets";
import TAGuides from "./components/pages/TAGuides";
import "./index.css";
import AddRemoveElement from "./components/pages/AddRemoveElement";
import DragAndDrop from "./components/pages/DragAndDrop";
import FloatingMenu from "./components/pages/FloatingMenu";
import Redirection from "./components/pages/Redirection";
import Typos from "./components/pages/Typos";
import NotificationMessage from "./components/pages/NotificationMessage";

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
          <Route path="/add-remove-element" element={<AddRemoveElement />} />
          <Route path="/drag-and-drop" element={<DragAndDrop />} />
          <Route path="/floating-menu" element={<FloatingMenu />} />
          <Route path="/redirection" element={<Redirection />} />
          <Route path="/typos" element={<Typos />} />
          <Route
            path="/notification-message"
            element={<NotificationMessage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
