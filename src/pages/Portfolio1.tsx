import PortfolioLayout from "@/components/PortfolioLayout";
import project5 from "@/assets/projeto5.png";
import project8 from "@/assets/projeto8.png";
import project12 from "@/assets/projeto12.png";

const Portfolio1 = () => {
  const projects = [
    { id: 5, title: "Projeto 5", image: project5 },
    { id: 8, title: "Projeto 8", image: project8 },
    { id: 12, title: "Projeto 12", image: project12 },
  ];

  return (
    <PortfolioLayout
      title="Projetos Selecionados"
      subtitle="Uma curadoria de trabalhos que unem estratégia, criatividade e execução impecável."
      projects={projects}
      pageNumber={1}
    />
  );
};

export default Portfolio1;
