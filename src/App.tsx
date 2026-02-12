import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MemoryCare from "./pages/MemoryCare";
import Seguridad from "./pages/Seguridad";
import Naturaleza from "./pages/Naturaleza";
import Legado from "./pages/Legado";
import AssistedLiving from "./pages/AssistedLiving";
import WellnessPrograms from "./pages/WellnessPrograms";
import ActividadesSociales from "./pages/ActividadesSociales";
import Testimonios from "./pages/Testimonios";
import VidaComunidad from "./pages/VidaComunidad";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/seguridad" element={<Seguridad />} />
          <Route path="/naturaleza" element={<Naturaleza />} />
          <Route path="/legado" element={<Legado />} />
          <Route path="/assisted-living" element={<AssistedLiving />} />
          <Route path="/memory-care" element={<MemoryCare />} />
          <Route path="/wellness-programs" element={<WellnessPrograms />} />
          <Route path="/actividades-sociales" element={<ActividadesSociales />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/vida-en-comunidad" element={<VidaComunidad />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
