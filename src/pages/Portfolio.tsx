import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

import project2 from "@/assets/projeto2.png";
import project3 from "@/assets/projeto3.png";
import project5 from "@/assets/projeto5.png";
import project6 from "@/assets/projeto6.jpg";
import project7 from "@/assets/projeto7.png";
import project8 from "@/assets/projeto8.png";
import project10 from "@/assets/projeto10.png";
import project11 from "@/assets/projeto11.png";
import project12 from "@/assets/projeto12.png";

interface Project {
  id: number;
  title: string;
  image: string;
}

const Portfolio = ({ initialSection = 1 }: { initialSection?: number }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const section1: Project[] = [
    { id: 5, title: "Projeto 5", image: project5 },
    { id: 8, title: "Projeto 8", image: project8 },
    { id: 12, title: "Projeto 12", image: project12 },
  ];

  const section2: Project[] = [
    { id: 6, title: "Projeto 6", image: project6 },
    { id: 10, title: "Projeto 10", image: project10 },
    { id: 11, title: "Projeto 11", image: project11 },
  ];

  const section3: Project[] = [
    { id: 2, title: "Projeto 2", image: project2 },
    { id: 3, title: "Projeto 3", image: project3 },
    { id: 7, title: "Projeto 7", image: project7 },
  ];

  useEffect(() => {
    if (initialSection) {
      const el = document.getElementById(`portfolio-${initialSection}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [initialSection]);

  const renderGallery = (projects: Project[]) => (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-accent">
                  <ZoomIn size={24} />
                  <span className="font-inter font-medium">Ver ampliado</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-500" />
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <p className="text-accent font-inter font-semibold tracking-wide uppercase text-sm">
              Portfólio
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
              Projetos
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
            <p className="font-inter text-lg text-muted-foreground pt-4"></p>
          </div>
        </div>
      </section>

      <section id="portfolio-1" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground"></h2>
            <p className="font-inter text-muted-foreground mt-2"></p>
          </div>
          {renderGallery(section1)}
        </div>
      </section>

      <section id="portfolio-2" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground"></h2>
            <p className="font-inter text-muted-foreground mt-2"></p>
          </div>
          {renderGallery(section2)}
        </div>
      </section>

      <section id="portfolio-3" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground"></h2>
            <p className="font-inter text-muted-foreground mt-2"></p>
          </div>
          {renderGallery(section3)}
        </div>
      </section>

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

export default Portfolio;
