import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Lazy Loaded Pages (Performance Boost)
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Internship = lazy(() => import("./pages/Internship"));
const InternshipApply = lazy(() => import("./pages/InternshipApply"));
const InternshipPayment = lazy(() => import("./pages/InternshipPayment"));
const InternshipSuccess = lazy(() => import("./pages/InternshipSuccess"));
const ApplicationStatus = lazy(() => import("./pages/ApplicationStatus"));

const AdminApplications = lazy(() => import("./pages/AdminApplications"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
          <Routes>

            {/* Public Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* Internship */}
              <Route path="/internship" element={<Internship />} />
              <Route path="/internship/apply" element={<InternshipApply />} />
              <Route path="/internship/payment" element={<InternshipPayment />} />
              <Route path="/internship/success" element={<InternshipSuccess />} />
              <Route path="/application-status" element={<ApplicationStatus />} />
            </Route>

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/applications"
              element={
                <ProtectedRoute>
                  <AdminApplications />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;