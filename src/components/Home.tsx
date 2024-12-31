import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <h1 className="test-header">Test Automation Playground</h1>
      <br />
      <div className="home-links justify-between">
        <Link id="home" to="/login">
          Login Page
        </Link>
        <br />
        <Link id="home" to="/formpage">
          Forms
        </Link>
        <br />
        <Link id="home" to="/web-elements">
          Web Elements
        </Link>
        <br />
        <Link id="home" to="/Widgets">
          Widgets
        </Link>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Link id="ta-guide" to="/taguides">Test Automation Resources</Link>
      </div>
    </div>
  );
};

export default Home;
