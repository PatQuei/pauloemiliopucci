import aboutPhoto from "@/assets/Perfil.png";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-lg blur-2xl" />
              <img
                src={aboutPhoto}
                alt="Paulo Emilio Pucci"
                className="relative rounded-lg shadow-elegant w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-accent font-inter font-medium tracking-wide uppercase text-sm">
                Sobre mim
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                Travessias
              </h2>
            </div>

            <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
              <p>Olá! Meu nome é Paulo Emilio Pucci I PEP. </p>
              <p>
                Sou formado em Produção Audiovisual com pós-graduação em Gestão
                de Projetos Culturais e Licenciatura em Artes Visuais. Trabalho
                há 20 anos com projetos socioculturais. Vivenciei grandes
                experiências em diversas instituições, Canal Futura, Cidade
                Escola Aprendiz, CENPEC, SESC , entre outras do terceiro setor,
                além da realização de produções próprias, algumas contempladas
                em leis de incentivo.
              </p>
              <p>
                Trabalhei no setor público, Cinemateca Brasileira e na FUNDARPE
                (Fundação do Patrimônio Histórico e Artístico de Pernambuco).
                Minhas áreas de atuação: roteiro audiovisual, redação
                publicitária, produção cultural, direção, fotografia,
                comunicação social, coordenação e gestão de projetos.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="font-playfair text-xl font-semibold text-foreground">
                Minhas especialidades
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Copywriting",
                  "Storytelling",
                  "Direção de Vídeo",
                  "Fotografia",
                  "Produção Audiovisual",
                  "Roteiros",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 font-inter text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
