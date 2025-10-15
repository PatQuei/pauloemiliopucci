import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Diretora de Marketing, TechCorp",
      content:
        "O Paulo tem um talento raro de entender a essência de uma marca e traduzi-la em palavras que realmente conectam. Nosso lançamento foi um sucesso absoluto graças ao trabalho dele.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    },
    {
      name: "Ricardo Almeida",
      role: "Fundador, Startup Impact",
      content:
        "A direção de vídeo do Paulo trouxe uma dimensão emocional que não imaginávamos ser possível. Cada frame conta uma história, e isso fez toda a diferença para nossa comunicação.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    },
    {
      name: "Mariana Costa",
      role: "Designer & Empreendedora",
      content:
        "Trabalhei com o Paulo em diversos projetos e sempre me impressiono com sua capacidade de unir técnica e sensibilidade. É um profissional completo e um verdadeiro parceiro criativo.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <p className="text-accent font-inter font-medium tracking-wide uppercase text-sm">
            Depoimentos
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            O que dizem sobre o trabalho
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-500 hover:shadow-elegant animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 text-accent/20" size={40} />
              
              <div className="relative space-y-6">
                <p className="font-inter text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-playfair font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="font-inter text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
