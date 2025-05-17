import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComplaintsLog from "./pages/ComplaintsLog";
import ComplaintsResolve from "./pages/ComplaintsResolve";
import NotFound from "./pages/NotFound";
import Branches from "./pages/Branches";
import Roles from "./pages/Roles";
import Users from "./pages/Users";
import ComplaintDetail from "./pages/ComplaintDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/complaints-log" element={<ComplaintsLog />} />
          <Route path="/complaints-resolve" element={<ComplaintsResolve />} />
          <Route path="/complaints-resolve/:id" element={<ComplaintDetail />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
