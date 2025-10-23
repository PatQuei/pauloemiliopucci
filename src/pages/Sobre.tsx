import aboutPhoto from "@/assets/Perfil.jpg";
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

const Sobre = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section com fundo azul petróleo */}
      <section className="py-16 md:py-24 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <p className="text-accent font-inter font-semibold tracking-wide uppercase text-sm">
              Sobre mim
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
              Travessias
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Foto */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative group">
                {/* Efeito de borda dourada */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={aboutPhoto}
                    alt="Paulo Emílio Pucci"
                    className="w-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
              <div className="space-y-6 font-inter text-muted-foreground leading-relaxed text-lg">
                <p>Olá! Meu nome é Paulo Emilio Pucci | PEP.</p>

                <p>
                  Sou formado em{" "}
                  <span className="text-accent font-medium">
                    Produção Audiovisual
                  </span>{" "}
                  com pós-graduação em{" "}
                  <span className="text-accent font-medium">
                    Gestão de Projetos Culturais
                  </span>{" "}
                  e Licenciatura em{" "}
                  <span className="text-accent font-medium">Artes Visuais</span>
                  . Trabalho há{" "}
                  <span className="text-accent font-medium">20 anos</span> com
                  projetos socioculturais.
                </p>

                <p>
                  Vivenciei grandes experiências em diversas instituições:{" "}
                  <strong>Canal Futura</strong>,{" "}
                  <strong>Cidade Escola Aprendiz</strong>,{" "}
                  <strong>CENPEC</strong>, <strong>SESC</strong>, entre outras
                  do terceiro setor, além da realização de produções próprias,
                  algumas contempladas em leis de incentivo.
                </p>

                <p>
                  Trabalhei no setor público,{" "}
                  <strong>Cinemateca Brasileira</strong> e na{" "}
                  <strong>FUNDARPE</strong> (Fundação do Patrimônio Histórico e
                  Artístico de Pernambuco).
                </p>

                {/*<div className="pt-6 border-l-4 border-accent pl-6 bg-card/50 p-6 rounded-r-lg">
                  <p className="text-foreground font-medium text-xl leading-relaxed italic">
                    "Cada palavra tem poder. Cada imagem conta uma história.
                    Cada som evoca uma emoção."
                  </p>
                </div>*/}
              </div>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div className="mt-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Áreas de Atuação
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Roteiro Audiovisual",
                "Redação Publicitária",
                "Produção Cultural",
                "Direção",
                "Fotografia",
                "Comunicação Social",
                "Coordenação de Projetos",
                "Gestão de Projetos",
              ].map((area, index) => (
                <div
                  key={area}
                  className="group relative p-6 bg-card border border-border hover:border-accent rounded-lg transition-all duration-300 hover:shadow-elegant animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent shadow-gold" />
                    <h3 className="font-inter text-foreground font-medium group-hover:text-accent transition-colors">
                      {area}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades (integradas) - tom mais orgânico e menos formal */}
          <div className="mt-24 max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Habilidades em Ação
              </h2>
              <p className="font-inter text-md md:text-lg text-muted-foreground max-w-3xl mx-auto"></p>
            </div>

            <div className="mt-6">
              <div className="p-8 bg-card/10 border border-border/10 rounded-lg">
                <ul className="flex flex-col md:flex-row flex-wrap gap-6">
                  {[
                    {
                      icon: Briefcase,
                      title: "Gestão e direção de projetos",
                      desc: "",
                    },
                    {
                      icon: Pen,
                      title: "Originalidade na escrita",
                      desc: "",
                    },
                    {
                      icon: Lightbulb,
                      title:
                        "Elaboração  e articulação sofisticada das ideias. ",
                      desc: "",
                    },
                    {
                      icon: Palette,
                      title: "Articulação e mobilização social.",
                      desc: "",
                    },
                    {
                      icon: Book,
                      title: "Produção Cultural.",
                      desc: "",
                    },
                    {
                      icon: Users,
                      title: "Leitura e interpretação de texto qualificada.",
                      desc: "",
                    },
                    {
                      icon: MessageSquare,
                      title: "Comunicação assertiva e criativa.",
                      desc: "",
                    },
                  ].map((h, i) => {
                    const Icon = h.icon as React.ComponentType<{
                      className?: string;
                      size?: number;
                    }>;
                    return (
                      <li
                        key={h.title}
                        className="flex gap-4 items-start w-full md:w-[48%] lg:w-[31%] animate-fade-in-up"
                        style={{ animationDelay: `${i * 30}ms` }}
                      >
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon className="text-accent" size={18} />
                        </div>
                        <div>
                          <h3 className="font-playfair text-lg font-semibold text-foreground">
                            {h.title}
                          </h3>
                          <p className="font-inter text-sm text-muted-foreground mt-1">
                            {h.desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
