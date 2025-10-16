import { Quote } from "lucide-react";

const Values = () => {
  const values = [
    {
      id: 1,
      quote:
        "Cada palavra tem poder. Cada imagem conta uma história. Cada som evoca uma emoção.",
      author: "Sobre o Processo Criativo",
    },
    {
      id: 2,
      quote:
        "Não crio apenas conteúdo. Crio conexões genuínas entre marcas e pessoas.",
      author: "Filosofia de Trabalho",
    },
    {
      id: 3,
      quote:
        "A arte de comunicar está em transformar o ordinário em extraordinário.",
      author: "Visão Criativa",
    },
    {
      id: 4,
      quote:
        "Estratégia sem alma é vazia. Criatividade sem propósito é apenas ruído.",
      author: "Equilíbrio Profissional",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <p className="text-accent font-inter font-medium tracking-wide uppercase text-sm">
            Valores & Filosofia
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            O que me move
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Princípios que guiam cada projeto, cada palavra, cada frame.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="group relative p-8 rounded-lg bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent transition-all duration-500 animate-fade-in-up hover:shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-accent" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <p className="font-playfair text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{value.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-accent" />
                  <p className="font-inter text-sm text-muted-foreground font-medium">
                    {value.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-8 rounded-lg bg-accent/5 border border-accent/20">
            <p className="font-playfair text-2xl md:text-3xl text-foreground leading-relaxed">
              "Meu compromisso é transformar{" "}
              <span className="text-accent font-semibold">
                ideias em histórias memoráveis
              </span>
              , que não apenas informam, mas{" "}
              <span className="text-accent font-semibold">
                inspiram e transformam
              </span>
              ."
            </p>
            <p className="font-inter text-sm text-muted-foreground mt-4 tracking-wider">
              — PAULO EMÍLIO PUCCI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
