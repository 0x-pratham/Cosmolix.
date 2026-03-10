import { Toaster } from "@/components/ui/toaster";
import MainLayout from "@/components/layout/MainLayout";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Internship from "./pages/Internship";
import InternshipApply from "./pages/InternshipApply"
import InternshipPayment from "./pages/InternshipPayment"
import InternshipSuccess from "./pages/InternshipSuccess"
import AdminApplications from "./pages/AdminApplications"
import AdminLogin from "./pages/AdminLogin"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import ApplicationStatus from "./pages/ApplicationStatus"
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
         <Routes>

  <Route element={<MainLayout />}>

    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:slug" element={<ProductDetail />} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/internship" element={<Internship />} />
    <Route path="/internship/apply" element={<InternshipApply />} />
    <Route path="/internship/payment" element={<InternshipPayment />} />
    <Route path="/internship/success" element={<InternshipSuccess />} />
    <Route path="/application-status" element={<ApplicationStatus />} />

  </Route>

  <Route path="/admin/login" element={<AdminLogin />} />

  <Route
    path="/admin/applications"
    element={
      <ProtectedRoute>
        <AdminApplications />
      </ProtectedRoute>
    }
  />

  <Route path="*" element={<NotFound />} />

</Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
