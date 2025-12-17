import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle 2";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground/80 "> Mosu's </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/90 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-6 -mt-0.5">
            {/* Download Button */}
            <a
              href="https://drive.google.com/drive/folders/1EipzLu88u3oyM-qLtYn2EPcGUKbOCKS6"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-primary  
      inline-flex items-center gap-2
      rounded-md border border-border
      bg-background px-4 py-1
      text-sm font-medium text-foreground/90 
      shadow-xs
      transition-all duration-200
      hover:bg-muted hover:shadow
      active:scale-95
    "
            >
              ⬇ Download
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/your-username/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary 
      inline-flex items-center gap-2
      rounded-md border border-border
      bg-background px-4 py-1
      text-sm font-medium text-foreground/90 
      shadow-xs
      transition-all duration-200
      hover:bg-muted hover:shadow
      active:scale-95
    "
            >
              ⭐ GitHub
            </a>
          </div>
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-5 ">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
