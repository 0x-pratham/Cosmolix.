"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/internship", label: "Internship" },
  { href: "/application-status", label: "Application Status" },
  { href: "/products", label: "Products" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
  ? "bg-white/70 backdrop-blur-2xl shadow-md border-b border-slate-200/60"
  : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-24 md:h-28 px-4 md:px-8">
        <Link
  to="/"
  className="flex items-center transition-transform duration-300 hover:scale-110"
>
          <img
  src="https://i.ibb.co/Kp4P1Q5p/CX-logo-page-0003.png"
  alt="Cosmolix"
  className="h-24 md:h-[110px] w-auto object-contain"
/>
</Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname.startsWith(l.href)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    location.pathname === l.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
  to="/contact"
  className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white"
>
Get in Touch
</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
