import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import contatoImage from "@/assets/contato.jpg";

const Contato = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <p className="text-accent font-inter font-semibold tracking-wide uppercase text-sm">
              Entre em Contato
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
              Vamos Conversar?
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto shadow-gold" />
            <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed pt-4">
              Estou sempre aberto a novos projetos, parcerias e conversas
              inspiradoras.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Coluna Esquerda - Imagem */}
              <div className="animate-fade-in">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative rounded-lg overflow-hidden shadow-elegant">
                    <img
                      src={contatoImage}
                      alt="Paulo Emilio Pucci - Contato"
                      className="w-full object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Overlay com gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Coluna Direita - Informações e Frase */}
              <div className="space-y-8 animate-fade-in-up">
                {/* Informações de Contato */}
                <div className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-foreground">
                    Informações de Contato
                  </h2>

                  <div className="space-y-4">
                    <a
                      href="mailto:paulopucci@gmail.com"
                      className="flex items-center gap-4 p-4 bg-card border border-border hover:border-accent rounded-lg transition-all duration-300 hover:shadow-elegant group"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Mail className="text-accent" size={20} />
                      </div>
                      <div>
                        <p className="font-inter text-sm text-muted-foreground">
                          E-mail
                        </p>
                        <p className="font-inter font-medium text-foreground">
                          paulopucci@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+5511958799188"
                      className="flex items-center gap-4 p-4 bg-card border border-border hover:border-accent rounded-lg transition-all duration-300 hover:shadow-elegant group"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Phone className="text-accent" size={20} />
                      </div>
                      <div>
                        <p className="font-inter text-sm text-muted-foreground">
                          Telefone / WhatsApp
                        </p>
                        <p className="font-inter font-medium text-foreground">
                          (11) 95879-9188
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Redes Sociais */}
                  <div className="pt-6">
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                      Redes Sociais
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/in/pauloemiliopucci/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-card border border-border hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-elegant"
                      >
                        <Linkedin className="text-accent" size={20} />
                      </a>
                      <a
                        href="https://www.instagram.com/pauloemiliopucci/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-card border border-border hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-elegant"
                      >
                        <Instagram className="text-accent" size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Frase de encerramento */}
                <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-accent/30 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                  <blockquote className="relative z-10 space-y-4">
                    <p className="font-playfair text-xl md:text-2xl text-foreground italic leading-relaxed">
                      "Construo e compartilho novos caminhos para criar{" "}
                      <span className="text-accent">melhores destinos.</span>"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-0.5 bg-accent shadow-gold" />
                      <p className="font-inter text-sm text-muted-foreground font-medium">
                        Paulo Emilio Pucci
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
