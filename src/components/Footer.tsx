import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-playfair text-2xl font-bold mb-2">Paulo Emílio Pucci</p>
            <p className="font-inter text-sm text-background/70">
              Copywriting, Storytelling & Audiovisual
            </p>
          </div>

          <div className="flex items-center gap-2 font-inter text-sm text-background/70">
            <span>Feito com</span>
            <Heart size={16} className="text-accent fill-accent" />
            <span>© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
