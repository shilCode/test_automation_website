import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="test-header">Test Automation Playground</h1>
      <br />
      <div className="home-links">
        <button className="button-container">
          <Link id="login" to="/login">
            Login Page
          </Link>
        </button>
        <br />
        <button className="button-container">
          <Link id="login" to="/formpage">
            Forms
          </Link>
        </button>
        <br />
        <button className="button-container">
          <Link id="login" to="/web-elements">
            Web Elements
          </Link>
        </button>
        <br />
        <button className="button-container">
          <Link id="login" to="/web-elements">
            Web Elements
          </Link>
        </button>
        <br />
      </div>
      <div className="home-links">
        <button className="button-container">
          <Link id="login" to="/taguides">
            Test Automation Resources
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
