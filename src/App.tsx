import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import MemoryCare from "./pages/MemoryCare";
import Safety from "./pages/Safety";
import Nature from "./pages/Nature";
import Legacy from "./pages/Legacy";
import AssistedLiving from "./pages/AssistedLiving";
import WellnessPrograms from "./pages/WellnessPrograms";
import SocialActivities from "./pages/SocialActivities";
import Testimonials from "./pages/Testimonials";
import CommunityLife from "./pages/CommunityLife";
import Contact from "./pages/Contact";
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
          <Route path="/safety" element={<Safety />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/assisted-living" element={<AssistedLiving />} />
          <Route path="/memory-care" element={<MemoryCare />} />
          <Route path="/wellness-programs" element={<WellnessPrograms />} />
          <Route path="/social-activities" element={<SocialActivities />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/community-life" element={<CommunityLife />} />
          <Route path="/contact" element={<Contact />} />
          {/* Backward-compatible redirects from legacy Spanish URLs */}
          <Route path="/seguridad" element={<Navigate to="/safety" replace />} />
          <Route path="/naturaleza" element={<Navigate to="/nature" replace />} />
          <Route path="/legado" element={<Navigate to="/legacy" replace />} />
          <Route path="/actividades-sociales" element={<Navigate to="/social-activities" replace />} />
          <Route path="/testimonios" element={<Navigate to="/testimonials" replace />} />
          <Route path="/vida-en-comunidad" element={<Navigate to="/community-life" replace />} />
          <Route path="/contacto" element={<Navigate to="/contact" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
