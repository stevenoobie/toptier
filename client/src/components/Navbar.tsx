import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoPng from "@assets/logo_1766701825273.png";
import { useTheme } from "@/hooks/use-theme";

export function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 text-black"
          : "bg-transparent border-transparent py-5 text-black"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and Branding */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="relative h-12 w-16 overflow-hidden rounded-md transition-transform group-hover:scale-105">
            <img
              src={logoPng}
              alt="TopTier Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-lg font-bold tracking-tight transition-colors text-[#1E90FF]">
            TopTier
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-bold tracking-tight transition-colors hover:text-[#1E90FF]",
                location === link.href
                  ? "text-[#1E90FF]"
                  : "text-[#1E90FF] hover:text-[#4390dd]"
              )}
              style={{
                fontFamily:
                  '"Neue Haas Grotesk Display Pro", "Inter", sans-serif',
              }}
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }, 0);
              }}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-[#1E90FF] hover:text-primary"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            onClick={onContactClick}
            className="shadow-lg shadow-primary/20"
          >
            Request a Video
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-primary"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-medium hover:text-primary",
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }, 0);
                setIsOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <Button
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="w-full"
          >
            Request a Video
          </Button>
        </div>
      )}
    </nav>
  );
}
