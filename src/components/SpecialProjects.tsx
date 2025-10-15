import { Lightbulb, Users, Award } from "lucide-react";

const SpecialProjects = () => {
  const projects = [
    {
      icon: Lightbulb,
      title: "Oficinas de Storytelling",
      description:
        "Workshops práticos e imersivos sobre narrativas visuais e escrita criativa para profissionais e empresas.",
    },
    {
      icon: Users,
      title: "Colaborações Artísticas",
      description:
        "Projetos autorais em parceria com artistas visuais, músicos e criadores de conteúdo independentes.",
    },
    {
      icon: Award,
      title: "Projetos Premiados",
      description:
        "Trabalhos reconhecidos em festivais de cinema, design e comunicação, destacando excelência criativa.",
    },
  ];

  return (
    <section id="projetos" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <p className="text-accent font-inter font-medium tracking-wide uppercase text-sm">
            Projetos Especiais
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Além do Portfólio
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Iniciativas que expandem fronteiras criativas e compartilham conhecimento.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-500 hover:shadow-elegant animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="text-accent" size={28} />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialProjects;
