import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  image: string;
}

interface PortfolioLayoutProps {
  title: string;
  subtitle: string;
  projects: Project[];
  pageNumber: number;
}

const PortfolioLayout = ({
  title,
  subtitle,
  projects,
  pageNumber,
}: PortfolioLayoutProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <p className="text-accent font-inter font-semibold tracking-wide uppercase text-sm">
              Portfólio — Parte {pageNumber}
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
              {title}
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
            <p className="font-inter text-lg text-muted-foreground pt-4">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de Projetos */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden bg-card border border-border hover:border-accent shadow-elegant hover:shadow-hover transition-all duration-500 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay escuro no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 text-accent">
                        <ZoomIn size={24} />
                        <span className="font-inter font-medium">
                          Ver ampliado
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Borda dourada sutil */}
                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-500" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog para imagem ampliada */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden border-2 border-accent/50 bg-black">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none bg-background/90 backdrop-blur-sm p-3 hover:bg-background">
            <X className="h-6 w-6 text-accent" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
          {selectedImage && (
            <div className="flex items-center justify-center w-full h-full p-4 bg-black">
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioLayout;
