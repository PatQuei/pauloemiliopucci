import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterNew from "./components/FooterNew";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import Portfolio from "./pages/Portfolio";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/habilidades" element={<Sobre />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route
                path="/portfolio-1"
                element={<Portfolio initialSection={1} />}
              />
              <Route
                path="/portfolio-2"
                element={<Portfolio initialSection={2} />}
              />
              <Route
                path="/portfolio-3"
                element={<Portfolio initialSection={3} />}
              />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <FooterNew />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
