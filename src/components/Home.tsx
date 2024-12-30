import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="test-header">Test Automation Demo Site</h1>
      <br />
      <div className="home-links"  >
      <button>
      <Link id="login" to="/login">Login Page</Link>
      </button>
      <br />
      <button>
      <Link id="login" to="/formpage">Forms</Link>
      </button>
      <br />
      <button>
      <Link id="login" to="/web-elements">Web Elements</Link>
      </button>
      <br />
      <button>
      <Link id="login" to="/Widgets">Widgets</Link>
      </button>
      <br />
      </div>
    </div>
  );
};

export default Home;
