import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="Test-header">Test Automation Demo Site</h1>
      <br />
      <div className="home-links">
      <Link id="login" to="/login">Login Page</Link>
      <br />
      <Link id="login" to="/formpage">Forms</Link>
      <br />
      <Link id="login" to="/web-elements">Web Elements</Link>
      <br />
      <Link id="login" to="/Widgets">Widgets</Link>
      <br />
      </div>
    </div>
  );
};

export default Home;
