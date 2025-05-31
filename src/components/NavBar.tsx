import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean | ((prevDarkMode: boolean) => boolean)) => void;
}

const NavBar = ({ darkMode, setDarkMode }: NavBarProps) => {
  return (
    <nav className="bg-background text-foreground border-b border-border shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">Home</Link>
        <Link to="/login" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">Login</Link>
        <Link to="/formpage" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">Forms</Link>
        <Link to="/web-elements" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">Web Elements</Link>
        <Link to="/widgets" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">Widgets</Link>
        <Link to="/taguides" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">TA Guides</Link>
      </div>
      <div>
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