import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrolltoTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Cta from './components/sections/Cta';
import CareersPage from './pages/Careers';
import CookieConsentBanner from './components/legal/CookieConsentBanner';
import ITConsultingPage from './pages/ITConsulting';
import About from './pages/About';
import News from './pages/News';

const Home = () => (
  <>
    <Hero />
    <section id="services"><Services /></section>
    <section id="products"><Products /></section>
    <Cta />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/it-consulting" element={<ITConsultingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <CookieConsentBanner />
        <Footer />
      </div>
    </Router>
  );
}