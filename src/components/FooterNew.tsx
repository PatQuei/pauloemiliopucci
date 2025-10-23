import { Heart, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Coluna 1 - Branding */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-foreground">
              Paulo Emilio Pucci
            </h3>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Redator e Direção Criativa com 20 anos de experiência
              transformando ideias em histórias memoráveis.
            </p>
            <div className="w-16 h-1 bg-accent shadow-gold" />
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-inter text-sm font-semibold text-foreground uppercase tracking-wide">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { path: "/", label: "Capa" },
                { path: "/sobre", label: "Sobre" },
                { path: "/habilidades", label: "Habilidades" },
                { path: "/portfolio-1", label: "Portfólio" },
                { path: "/projetos", label: "Projetos" },
                { path: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 - Contato e Redes Sociais */}
          <div className="space-y-4">
            <h4 className="font-inter text-sm font-semibold text-foreground uppercase tracking-wide">
              Conecte-se
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:paulopucci@gmail.com"
                className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                <Mail size={16} />
                paulopucci@gmail.com
              </a>
              <p className="font-inter text-sm text-muted-foreground">
                (11) 95879-9188
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/paulo-emilio-pucci-b2863b52/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 border border-border hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={18}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                />
              </a>
              <a
                href="https://www.instagram.com/pauloemiliopucci/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent/20 border border-border hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram
                  size={18}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Paulo Emílio Pucci. Todos os direitos reservados.
          </p>
          <p className="font-inter text-sm text-muted-foreground flex items-center gap-2">
            Feito com <Heart size={14} className="text-accent fill-accent" /> e
            dedicação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
