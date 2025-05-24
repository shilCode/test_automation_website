import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 sm:p-8 lg:p-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-dark leading-tight">Test Automation Playground</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Welcome to Test Automation Playground! This platform is dedicated to providing comprehensive resources and tools for automating software testing processes. Whether you are a beginner looking to learn the basics or an experienced professional seeking advanced techniques, we have something for everyone. Explore our tutorials, guides, and community forums to enhance your test automation skills and ensure the quality and reliability of your software projects.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <Button asChild className="px-8 py-3 text-lg font-semibold">
            <Link to="/login">Login Page</Link>
          </Button>
          <Button asChild className="px-8 py-3 text-lg font-semibold" variant="secondary">
            <Link to="/formpage">Forms</Link>
          </Button>
          <Button asChild className="px-8 py-3 text-lg font-semibold" variant="secondary">
            <Link to="/web-elements">Web Elements</Link>
          </Button>
          <Button asChild className="px-8 py-3 text-lg font-semibold" variant="secondary">
            <Link to="/widgets">Widgets</Link>
          </Button>
        </div>
        <div className="mt-10 text-sm text-primary dark:text-primary-dark underline hover:text-accent dark:hover:text-accent transition-colors">
          <Link to="/taguides">Test Automation Resources</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
