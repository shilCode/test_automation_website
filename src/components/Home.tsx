import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen">
      <Link to="/login">Login Page</Link>
      <br />
      <Link to="/formpage">Forms</Link>
      <br />
      <Link to="/web-elements">Web Elements</Link>
      <br />
      
    </div>
  );
};

export default Home;
