import {
  Lightbulb,
  Pen,
  Video,
  Camera,
  FileText,
  Users,
  Target,
  Book,
  Briefcase,
  MessageSquare,
  Film,
  Palette,
} from "lucide-react";

const Habilidades = () => {
  const habilidades = [
    {
      icon: Briefcase,
      title: "Gestão e direção de projetos",
      description: "Coordenação estratégica e liderança de equipes criativas.",
    },
    {
      icon: Pen,
      title: "Originalidade na escrita",
      description: "Criação de textos únicos e impactantes que conectam.",
    },
    {
      icon: Lightbulb,
      title: "Elaboração e articulação sofisticada das ideias",
      description: "Transformação de conceitos complexos em narrativas claras.",
    },
    {
      icon: Palette,
      title: "Produção Cultural",
      description:
        "Desenvolvimento e execução de projetos culturais relevantes.",
    },
    {
      icon: Book,
      title: "Leitura e interpretação de texto qualificada",
      description: "Análise profunda e compreensão de contextos narrativos.",
    },
    {
      icon: Users,
      title: "Articulação e mobilização social",
      description: "Conexão entre pessoas, instituições e comunidades.",
    },
    {
      icon: MessageSquare,
      title: "Copywriting",
      description: "Textos persuasivos que convertem e engajam audiências.",
    },
    {
      icon: FileText,
      title: "Storytelling",
      description: "Construção de narrativas envolventes e memoráveis.",
    },
    {
      icon: Film,
      title: "Direção de Vídeo",
      description: "Criação visual com propósito e estética cinematográfica.",
    },
    {
      icon: Camera,
      title: "Fotografia",
      description: "Captura de momentos e criação de imagens impactantes.",
    },
    {
      icon: Video,
      title: "Produção Audiovisual",
      description: "Gestão completa de projetos de vídeo e áudio.",
    },
    {
      icon: Target,
      title: "Roteiros",
      description: "Desenvolvimento de roteiros para cinema, TV e digital.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle relative overflow-hidden">
        {/* Efeitos de luz cinematográficos */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
            <p className="text-accent font-inter font-semibold tracking-wide uppercase text-sm">
              Expertise & Capacidades
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
              Minhas Habilidades
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
            <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed pt-4">
              Competências desenvolvidas ao longo de duas décadas de
              experiência, unindo criatividade, técnica e visão estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Habilidades */}
      <section className="py-16 md:py-24 bg-background relative">
        {/* Raios de luz sutis */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {habilidades.map((habilidade, index) => {
              const Icon = habilidade.icon;
              return (
                <div
                  key={habilidade.title}
                  className="group relative p-8 bg-card border border-border hover:border-accent rounded-lg transition-all duration-500 hover:shadow-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Glow effect no hover */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Icon
                        className="text-accent"
                        size={28}
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Light ray effect */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {habilidade.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-accent/50 group-hover:w-full transition-all duration-500" />
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                      {habilidade.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statement final */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative p-12 bg-gradient-to-br from-card to-card/50 border border-accent/30 rounded-lg shadow-elegant overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/50" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/50" />

              <blockquote className="relative z-10 space-y-6">
                <p className="font-playfair text-2xl md:text-3xl text-foreground leading-relaxed italic text-center">
                  "Não crio apenas conteúdo.
                  <br />
                  <span className="text-accent">
                    Crio conexões genuínas entre marcas e pessoas.
                  </span>
                  "
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-0.5 bg-accent shadow-gold" />
                  <p className="font-inter text-sm text-muted-foreground font-medium uppercase tracking-wide">
                    Filosofia de Trabalho
                  </p>
                  <div className="w-16 h-0.5 bg-accent shadow-gold" />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Habilidades;
