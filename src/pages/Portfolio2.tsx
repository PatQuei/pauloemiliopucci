import PortfolioLayout from "@/components/PortfolioLayout";
import project6 from "@/assets/projeto6.jpg";
import project10 from "@/assets/projeto10.png";
import project11 from "@/assets/projeto11.png";

const Portfolio2 = () => {
  const projects = [
    { id: 6, title: "Projeto 6", image: project6 },
    { id: 10, title: "Projeto 10", image: project10 },
    { id: 11, title: "Projeto 11", image: project11 },
  ];

  return (
    <PortfolioLayout
      title="Mais Projetos"
      subtitle="Continuação da jornada criativa através de narrativas visuais e textuais."
      projects={projects}
      pageNumber={2}
    />
  );
};

export default Portfolio2;
