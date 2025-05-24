import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark:text-zinc-100">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center dark:text-zinc-100">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4 text-center">Test Automation Playground</h1>
        <p className="text-center text-zinc-600 dark:text-zinc-300 mb-8">
          Welcome to Test Automation Playground! This platform is dedicated to providing comprehensive resources and tools for automating software testing processes. Whether you are a beginner looking to learn the basics or an experienced professional seeking advanced techniques, we have something for everyone. Explore our tutorials, guides, and community forums to enhance your test automation skills and ensure the quality and reliability of your software projects.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Button asChild className="flex-1 py-4 text-lg" variant="secondary">
            <Link to="/login">Login Page</Link>
          </Button>
          <Button asChild className="flex-1 py-4 text-lg" variant="secondary">
            <Link to="/formpage">Forms</Link>
          </Button>
          <Button asChild className="flex-1 py-4 text-lg" variant="secondary">
            <Link to="/web-elements">Web Elements</Link>
          </Button>
          <Button asChild className="flex-1 py-4 text-lg" variant="secondary">
            <Link to="/widgets">Widgets</Link>
          </Button>
        </div>
        <div className="pt-8 text-xs text-primary dark:text-primary underline dark:underline hover:text-accent dark:hover:text-accent transition-colors">
          <Link to="/taguides">Test Automation Resources</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
