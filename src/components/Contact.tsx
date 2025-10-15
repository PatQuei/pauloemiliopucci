import { useState } from "react";
import { Mail, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Entre em contato para discutir projetos, parcerias ou apenas trocar ideias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-inter font-medium text-foreground mb-2"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="font-inter"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-inter font-medium text-foreground mb-2"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="font-inter"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-inter font-medium text-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="font-inter resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-foreground font-inter font-medium"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <div className="space-y-6">
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  Outras formas de contato
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:paulo@exemplo.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span className="font-inter">paulo@exemplo.com</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Linkedin size={18} className="text-accent" />
                    </div>
                    <span className="font-inter">LinkedIn</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Instagram size={18} className="text-accent" />
                    </div>
                    <span className="font-inter">Instagram</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full font-inter font-medium border-accent text-accent hover:bg-accent hover:text-foreground"
                >
                  <Download className="mr-2" size={18} />
                  Download Portfólio (PDF)
                </Button>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  💡 <span className="font-medium text-foreground">Dica:</span> Para projetos urgentes ou
                  consultorias personalizadas, prefira o contato direto via e-mail ou LinkedIn.
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
