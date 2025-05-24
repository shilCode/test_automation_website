import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean | ((prevDarkMode: boolean) => boolean)) => void;
}

const NavBar = ({ darkMode, setDarkMode }: NavBarProps) => {
  return (
    <nav className="bg-white dark:bg-zinc-800 shadow-md py-4 px-6 flex justify-between ">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Home</Link>
        <Link to="/login" className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Login</Link>
        <Link to="/formpage" className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Forms</Link>
        <Link to="/web-elements" className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Web Elements</Link>
        <Link to="/widgets" className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Widgets</Link>
        <Link to="/taguides" className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary-dark transition-colors">TA Guides</Link>

        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? "🌙" : "☀️"}
        </Button>
      </div>
    </nav>
  );
};

export default NavBar; 