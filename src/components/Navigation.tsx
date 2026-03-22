import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-minimal text-foreground">
          THEO DINH
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          <Link to="/experience" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            EXPERIENCE
          </Link>
          <Link to="/expertise" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            EXPERTISE
          </Link>
          <Link to="/about" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            ABOUT
          </Link>
          <Link to="/contact" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            CONTACT
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <Link to="/experience" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              EXPERIENCE
            </Link>
            <Link to="/expertise" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              EXPERTISE
            </Link>
            <Link to="/about" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              ABOUT
            </Link>
            <Link to="/contact" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              CONTACT
            </Link>
            <div className="pt-4 border-t border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
