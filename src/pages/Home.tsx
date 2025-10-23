import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/Capa.png";

const Home = () => {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Paulo Emílio Pucci - Storyteller"
            className="w-full h-full object-cover"
          />
          {/* Gradiente cinematográfico */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            {/* Nome */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-wide">
              Paulo Emilio Pucci
              {/* Paulo Emilio Pucci*/}
            </h1>

            {/* Tagline com destaque dourado */}
            <div className="space-y-4">
              <p className="font-inter text-xl md:text-3xl lg:text-4xl text-accent font-light tracking-wide">
                Redator | Direção Criativa
              </p>
              <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
            </div>

            {/* Frase principal */}
            <p className="font-inter text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 max-w-4xl mx-auto leading-relaxed pt-6">
              Transformo ideias em histórias.
              <br />
              <span className="text-accent">
                {/*com palavras, imagens e som.*/}
              </span>
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <Link
                to="/portfolio-1"
                className="group px-10 py-5 bg-accent hover:bg-accent/90 text-background font-inter font-semibold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:shadow-gold relative overflow-hidden"
              >
                <span className="relative z-10">Ver Portfólio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>

              <Link
                to="/contato"
                className="px-10 py-5 border-2 border-accent/50 hover:border-accent bg-accent/10 hover:bg-accent/20 backdrop-blur-sm text-white font-inter font-semibold text-lg rounded-md transition-all duration-300 hover:scale-105"
              >
                Fale Comigo
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-accent hover:text-accent/80 transition-colors animate-bounce"
          aria-label="Scroll para baixo"
        >
          <ArrowDown size={36} strokeWidth={1.5} />
        </button>

        {/* Efeito de vinheta */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]" />
      </section>

      {/* Seção de apresentação breve */}
      <section className="py-24 md:py-32 bg-gradient-subtle relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Criando <span className="text-accent">conexões</span> através de
              histórias
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
              Com 20 anos de experiência em produção audiovisual e comunicação,
              desenvolvo narrativas que unem estratégia criativa, técnica
              apurada e sensibilidade artística. Cada projeto é uma oportunidade
              de transformar conceitos em grandes experiências.
            </p>
            {/*<div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-playfair font-bold text-accent">
                    20+
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Anos de Experiência
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Projetos socioculturais e audiovisuais
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-playfair font-bold text-accent">
                    3
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Especializações
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Produção Audiovisual, Gestão e Artes Visuais
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-playfair font-bold text-accent">
                    ∞
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Histórias Contadas
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Cada palavra, imagem e som importa
                </p> 
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
