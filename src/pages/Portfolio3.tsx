import PortfolioLayout from "@/components/PortfolioLayout";
import project2 from "@/assets/projeto2.jpg";
import project3 from "@/assets/projeto3.png";
import project7 from "@/assets/projeto7.png";

const Portfolio3 = () => {
  const projects = [
    { id: 2, title: "Projeto 2", image: project2 },
    { id: 3, title: "Projeto 3", image: project3 },
    { id: 7, title: "Projeto 7", image: project7 },
  ];

  return (
    <PortfolioLayout
      title="Trabalhos Recentes"
      subtitle="Os projetos mais recentes que demonstram a evolução e versatilidade criativa."
      projects={projects}
      pageNumber={3}
    />
  );
};

export default Portfolio3;
