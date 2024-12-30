import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <h1 className="test-header">Test Automation Demo Site</h1>
      <br />
      <div className="home-links justify-between">
        <Link id="login" to="/login">
          Login Page
        </Link>
        <br />
        <Link id="login" to="/formpage">
          Forms
        </Link>
        <br />
        <Link id="login" to="/web-elements">
          Web Elements
        </Link>
        <br />
        <Link id="login" to="/Widgets">
          Widgets
        </Link>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Link to="/taguides">Test Automation Resources</Link>
      </div>
    </div>
  );
};

export default Home;
