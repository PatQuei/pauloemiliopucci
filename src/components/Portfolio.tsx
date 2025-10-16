import { useState } from "react";
import { FileText, Video, Camera, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import project1 from "@/assets/projeto1.jpg";
import project2 from "@/assets/projeto2.jpg";
import project3 from "@/assets/projeto3.jpg";
import project4 from "@/assets/projeto4.jpg";
import project5 from "@/assets/projeto5.jpg";
import project6 from "@/assets/projeto6.jpg";
import project7 from "@/assets/projeto7.jpg";
import project8 from "@/assets/projeto8.jpg";
import project9 from "@/assets/projeto9.jpg";
import project10 from "@/assets/projeto10.jpg";
import project11 from "@/assets/projeto11.jpg";
import project12 from "@/assets/projeto12.jpg";

type Category = "all" | "copy" | "video" | "photo";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projeto 1",
    category: "copy",
    description: "Falta mensagem",
    image: project1,
  },
  {
    id: 2,
    title: "projeto 2",
    category: "video",
    description:
      "O melhor encontro mais próximo de você. Aproveite o melhor a sensação da sua conexão.",
    image: project2,
  },
  {
    id: 3,
    title: "Projeto 3",
    category: "photo",
    description:
      "Desfrute a tecnologia do futuro com o melhor presente para você.",
    image: project3,
  },
  {
    id: 4,
    title: "Projeto 4",
    category: "copy",
    description: "Falta mensagem",
    image: project4,
  },
  {
    id: 5,
    title: "Projeto 5",
    category: "video",
    description: "O salto para alcançar o  lugar que deseja.",
    image: project5,
  },
  {
    id: 6,
    title: "Projeto 6",
    category: "photo",
    description: "O reflexo de sempre para o seu novo brilho.",
    image: project6,
  },
  {
    id: 7,
    title: "Projeto 7",
    category: "copy",
    description:
      "Na sua direção o melhor caminho. Encontre a maior potência para qualquer destino.",
    image: project7,
  },
  {
    id: 8,
    title: "projeto 8",
    category: "video",
    description: "A inspiração do calor com você. Marque a sua beleza!",
    image: project8,
  },
  {
    id: 9,
    title: "Projeto 9",
    category: "photo",
    description: "falta mensagem",
    image: project9,
  },
  {
    id: 10,
    title: "Projeto 10",
    category: "copy",
    description:
      "Maciez para qualquer momento. A leveza de sentir mais conforto com você",
    image: project10,
  },
  {
    id: 11,
    title: "Projeto 11",
    category: "video",
    description:
      "O cuidado de sempre. A limpeza que renova, a beleza do novo com você.",
    image: project11,
  },
  {
    id: 12,
    title: "Projeto 12",
    category: "photo",
    description:
      "Faça a sua moda com a arte que transforma. O novo estilo para reencontrar o melhor em você!",
    image: project12,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categories = [
    { id: "all", label: "Todos", icon: null },
    { id: "copy", label: "Textos & Copy", icon: FileText },
    { id: "video", label: "Audiovisual", icon: Video },
    { id: "photo", label: "Fotografia", icon: Camera },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <p className="text-accent font-inter font-medium tracking-wide uppercase text-sm">
            Portfólio
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Projetos Selecionados
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Uma seleção de trabalhos que unem estratégia, criatividade e
            execução impecável.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`px-6 py-3 rounded-lg font-inter font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-accent text-foreground shadow-elegant"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {Icon && <Icon size={16} />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
