import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight text-center">
        Test Writing Playground
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        <Button asChild className="px-8 py-3 text-lg font-semibold">
          <Link to="/login">Login Page</Link>
        </Button>
        <Button
          asChild
          className="px-8 py-3 text-lg font-semibold"
          variant="secondary"
        >
          <Link to="/formpage">Forms</Link>
        </Button>
        <Button
          asChild
          className="px-8 py-3 text-lg font-semibold"
          variant="secondary"
        >
          <Link to="/web-elements">Web Elements</Link>
        </Button>
        <Button
          asChild
          className="px-8 py-3 text-lg font-semibold"
          variant="secondary"
        >
          <Link to="/widgets">Widgets</Link>
        </Button>
      </div>
      <div className="mt-10 text-sm text-primary underline hover:text-accent transition-colors">
        <Link to="/taguides">Test Automation Resources</Link>
      </div>
    </div>
  );
};

export default Home;
