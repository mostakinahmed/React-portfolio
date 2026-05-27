import { cn } from "@/lib/utils";
import { Menu, X, Github, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle 2";
import { Link } from "react-router-dom";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
  { name: "Social-Work", href: "/social-work-video", isRoute: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border shadow-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-tight"
        >
          <span className="text-primary">Mostakin</span>{" "}
          <span className="text-foreground/80">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">

          {/* Links */}
          {navItems.map((item, key) =>
            item.isRoute ? (
              <Link
                key={key}
                to={item.href}
                className="text-sm text-foreground/80 hover:text-primary transition"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={key}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-primary transition"
              >
                {item.name}
              </a>
            )
          )}

          {/* GitHub */}
          <a
            href="https://github.com/mostakinahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition"
          >
            <Github size={16} className="group-hover:rotate-12 transition" />
            GitHub
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/drive/folders/1EipzLu88u3oyM-qLtYn2EPcGUKbOCKS6"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition duration-700"></span>
            <Download size={16} />
            Download
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/90 backdrop-blur-xl transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6 text-center">

          {/* Links */}
          {navItems.map((item, key) =>
            item.isRoute ? (
              <Link
                key={key}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-foreground/80 hover:text-primary transition"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-foreground/80 hover:text-primary transition"
              >
                {item.name}
              </a>
            )
          )}

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">

            <a
              href="https://github.com/mostakinahmed"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://drive.google.com/drive/folders/1EipzLu88u3oyM-qLtYn2EPcGUKbOCKS6"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Download size={16} />
              Download
            </a>

          </div>

          {/* Theme */}
          <div className="mt-6">
            <ThemeToggle />
          </div>

        </div>
      </div>
    </nav>
  );
};