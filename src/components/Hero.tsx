import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/Capa.png";

const Hero = () => {
  const scrollToNext = () => {
    const sobreSection = document.getElementById("sobre");
    if (sobreSection) {
      sobreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Transformo ideias em histórias
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Com palavras, imagens e som.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-foreground font-inter font-medium rounded-md transition-all duration-300 hover:scale-105"
            >
              Ver Portfólio
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-inter font-medium rounded-md transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
