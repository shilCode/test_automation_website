import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div>
      <div className="uppercase ">
        <h1 className="test-header  ">Test Automation Playground</h1>

        <br />
        <p className="lowercase text-center justify-center items-center place-content-center  p-10 lg:mr-60 lg:ml-60">
          Welcome to Test Automation Playground! This platform is dedicated to
          providing comprehensive resources and tools for automating software
          testing processes. Whether you are a beginner looking to learn the
          basics or an experienced professional seeking advanced techniques, we
          have something for everyone. Explore our tutorials, guides, and
          community forums to enhance your test automation skills and ensure the
          quality and reliability of your software projects.
        </p>
        <br />

        <div>
          <div className="home-links">
            <Button className="button-container  ">
              <Link className="p-10" to="/login">
                Login Page
              </Link>
            </Button>
            <br />
            <Button className="button-container ">
              <Link className="p-10" to="/formpage">
                Forms
              </Link>
            </Button>
            <br />
            <Button className="button-container ">
              <Link className="p-10" to="/web-elements">
                Web Elements
              </Link>
            </Button>
            <br />
            <Button className="button-container ">
              <Link className="p-10" to="/widgets">
                Widgets
              </Link>
            </Button>
            <br />
          </div>
        </div>

        <div className="pt-40  text-xs justify-center flex underline">
          <Link to="/taguides">Test Automation Resources</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
