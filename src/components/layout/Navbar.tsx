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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-cosmo-dark/80 backdrop-blur-xl border-b border-white/5 h-16 shadow-2xl shadow-black/20"
          : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-6 md:px-10">
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] group/logo"
        >
          <div className="relative h-10 w-10 md:h-11 md:w-11 rounded-xl overflow-hidden border border-white/10 bg-white/5 p-1 shadow-2xl transition-all duration-300 group-hover/logo:border-cosmo-blue/50">
            <img
              src="/logo.png" 
              alt="Cosmolix Logo"
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white flex flex-col leading-none">
            Cosmolix
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const isActive =
              location.pathname === l.href ||
              location.pathname.startsWith(l.href + "/");

            return (
              <Link
                key={l.href}
                to={l.href}
                className="relative text-sm font-medium tracking-wide group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-cosmo-blue"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {l.label}
                </span>

                {/* Animated Underline using Logo Gradient */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cosmo-blue to-cosmo-green rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA Button - Matches the "X" gradient in your logo */}
          <Link
            to="/contact"
            className="px-6 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-br from-cosmo-blue to-cosmo-green hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white hover:text-cosmo-blue transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-cosmo-dark/60 backdrop-blur-md z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] z-50 bg-cosmo-dark border-l border-white/10 shadow-2xl"
            >
              <div className="flex flex-col gap-8 px-8 py-12">
                <div className="flex justify-end">
                   <button onClick={() => setMobileOpen(false)} className="text-white">
                      <X size={28} />
                   </button>
                </div>
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className={`text-lg font-semibold transition-all ${
                      location.pathname === l.href
                        ? "text-cosmo-blue translate-x-2"
                        : "text-gray-300 hover:text-white hover:translate-x-2"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 text-center py-3 rounded-xl bg-gradient-to-r from-cosmo-blue to-cosmo-green text-white font-bold"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;