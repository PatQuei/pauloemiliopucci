import { ExternalLink, Sparkles } from "lucide-react";

const Projetos = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <p className="text-accent font-inter font-semibold tracking-wide uppercase text-sm">
              Mais Trabalhos
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
              Outros Projetos
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Card principal com link */}
            <div className="relative group animate-fade-in-up">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Card content */}
              <div className="relative p-12 md:p-16 bg-gradient-to-br from-card to-card/80 border-2 border-accent/30 rounded-2xl shadow-elegant overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                {/* Content */}
                <div className="relative z-10 text-center space-y-8">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Sparkles
                        className="text-accent"
                        size={36}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-6">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                      Explore Meu Trabalho Completo
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
                    <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      Visite meu site para descobrir uma coleção mais ampla de
                      projetos, histórias e experiências que definem minha
                      jornada criativa.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <a
                      href="https://paulopucci.wixsite.com/paulopucci"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent/90 text-background font-inter font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-gold relative overflow-hidden"
                    >
                      <span className="relative z-10">Acessar Site</span>
                      <ExternalLink
                        className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300"
                        size={24}
                      />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    </a>
                  </div>

                  {/* URL display */}
                  <div className="pt-4">
                    <p className="font-inter text-sm text-muted-foreground">
                      <span className="text-accent font-medium">
                        paulopucci.wixsite.com/paulopucci
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações adicionais */}
            <div
              className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <h3 className="font-playfair text-2xl font-bold text-accent mb-2">
                  20+
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Anos de Experiência
                </p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <h3 className="font-playfair text-2xl font-bold text-accent mb-2">
                  100+
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Projetos Realizados
                </p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <h3 className="font-playfair text-2xl font-bold text-accent mb-2">
                  ∞
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Histórias Contadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
