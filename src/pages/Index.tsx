import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Portfolio from "@/components/Portfolio";
import SpecialProjects from "@/components/SpecialProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Values />
      <Portfolio />
      <SpecialProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
