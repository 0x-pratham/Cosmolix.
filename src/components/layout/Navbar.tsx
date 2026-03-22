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

  // 🔥 Combined scroll logic (FIXED)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile + scroll top
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/50 backdrop-blur-xl backdrop-saturate-150 shadow-sm border-b border-slate-200/40 h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-6 md:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-300 hover:scale-[1.04]"
        >
          <img
            src="https://i.ibb.co/Kp4P1Q5p/CX-logo-page-0003.png"
            alt="Cosmolix"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const isActive =
              location.pathname === l.href ||
              location.pathname.startsWith(l.href + "/");

            return (
              <Link
                key={l.href}
                to={l.href}
                className="relative text-sm font-medium group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  {l.label}
                </span>

                {/* Clean underline (no flicker) */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="md:hidden relative z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="flex flex-col gap-6 px-6 py-8 text-center"
              >
                {navLinks.map((l) => {
                  const isActive =
                    location.pathname === l.href ||
                    location.pathname.startsWith(l.href + "/");

                  return (
                    <motion.div
                      key={l.href}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        to={l.href}
                        className={`text-base font-medium ${
                          isActive
                            ? "text-primary font-semibold"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* CTA */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:scale-105 transition-all"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;