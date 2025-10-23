import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home as HomeIcon, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-24">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          {/* 404 */}
          <div className="space-y-4">
            <h1 className="font-playfair text-9xl md:text-[12rem] font-bold text-accent leading-none">
              404
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
          </div>

          {/* Mensagem */}
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
              Página Não Encontrada
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
              Parece que você se perdeu nas histórias. Esta página não existe ou
              foi movida.
            </p>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              to="/"
              className="group px-8 py-4 bg-accent hover:bg-accent/90 text-background font-inter font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-gold flex items-center gap-3 relative overflow-hidden"
            >
              <HomeIcon size={20} className="relative z-10" />
              <span className="relative z-10">Voltar ao Início</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 border-2 border-accent/50 hover:border-accent bg-accent/10 hover:bg-accent/20 text-foreground font-inter font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
