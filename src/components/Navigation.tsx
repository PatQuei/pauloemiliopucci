import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-playfair text-2xl font-bold tracking-tight hover:text-accent transition-colors"
          >
            Paulo Emilio Pucci
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-inter font-medium hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-inter font-medium hover:text-accent transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-sm font-inter font-medium hover:text-accent transition-colors"
            >
              Projetos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-foreground font-inter font-medium"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in bg-background/98 backdrop-blur-md rounded-lg p-4 shadow-lg border border-border/50">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left py-2 text-sm font-inter font-medium text-gray-300 hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left py-2 text-sm font-inter font-medium text-gray-300 hover:text-accent transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-left py-2 text-sm font-inter font-medium text-gray-300 hover:text-accent transition-colors"
            >
              Projetos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-foreground font-inter font-medium w-full"
            >
              Contato
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
