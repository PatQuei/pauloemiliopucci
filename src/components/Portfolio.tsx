import { useState } from "react";
import { FileText, Video, Camera, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    title: "Campanha de Lançamento - Tech Brand",
    category: "copy",
    description: "Copy estratégico e storytelling para lançamento de produto inovador no mercado tech.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    id: 2,
    title: "Documentário Corporativo",
    category: "video",
    description: "Direção e produção de documentário sobre cultura organizacional e impacto social.",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
  },
  {
    id: 3,
    title: "Ensaio Editorial Fashion",
    category: "photo",
    description: "Fotografia editorial para marca de moda sustentável, com narrativa visual forte.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
  },
  {
    id: 4,
    title: "Manifesto de Marca",
    category: "copy",
    description: "Redação de manifesto e posicionamento para startup de impacto social.",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80",
  },
  {
    id: 5,
    title: "Vídeo Institucional",
    category: "video",
    description: "Direção de vídeo institucional com abordagem cinematográfica e storytelling emocional.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
  },
  {
    id: 6,
    title: "Portfólio Artístico",
    category: "photo",
    description: "Série fotográfica autoral explorando luz natural e composição minimalista.",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80",
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
            Uma seleção de trabalhos que unem estratégia, criatividade e execução impecável.
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
