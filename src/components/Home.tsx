import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen">
      <h1>Test Automation Demo Site</h1>
      <br />
      <Link to="/login">Login Page</Link>
      <br />
      <Link to="/formpage">Forms</Link>
      <br />
      <Link to="/web-elements">Web Elements</Link>
      <br />
      <Link to="/Widgets">Widgets</Link>
      <br />
    </div>
  );
};

export default Home;
