import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <p className="text-accent font-inter font-medium tracking-wide uppercase text-sm">
              Contato
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Vamos criar algo incrível juntos?
            </h2>
            <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
              Entre em contato para discutir projetos, parcerias ou apenas
              trocar ideias.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Info & Social */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h3 className="font-playfair text-2xl font-semibold text-foreground text-center">
                  Entre em Contato
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <a
                    href="mailto:paulo@exemplo.com"
                    className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-accent transition-all hover:shadow-lg group"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail size={24} className="text-accent" />
                    </div>
                    <div className="text-center">
                      <p className="font-inter font-medium text-foreground mb-1">
                        E-mail
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        paulo@exemplo.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-accent transition-all hover:shadow-lg group"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MessageCircle size={24} className="text-accent" />
                    </div>
                    <div className="text-center">
                      <p className="font-inter font-medium text-foreground mb-1">
                        WhatsApp
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        (11) 99999-9999
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/paulo-emilio-pucci-b2863b52/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-accent transition-all hover:shadow-lg group"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Linkedin size={24} className="text-accent" />
                    </div>
                    <div className="text-center">
                      <p className="font-inter font-medium text-foreground mb-1">
                        LinkedIn
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        Conecte-se
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/pauloemiliopucci/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-accent transition-all hover:shadow-lg group"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Instagram size={24} className="text-accent" />
                    </div>
                    <div className="text-center">
                      <p className="font-inter font-medium text-foreground mb-1">
                        Instagram
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        @pauloemiliopucci
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <p className="font-inter text-sm text-muted-foreground leading-relaxed text-center">
                  💡 <span className="font-medium text-foreground">Dica:</span>{" "}
                  Para projetos urgentes ou consultorias personalizadas, prefira
                  o contato direto via WhatsApp ou e-mail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
