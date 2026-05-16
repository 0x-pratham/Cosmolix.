"use client";
import { useState } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'


const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    dropdown: [
      { label: 'IT Consulting', href: '/it-consulting' },
      { label: 'Our Products', href: '/#products' },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
    dropdown: [
      { label: 'Jobs', href: '/careers#jobs' },
      { label: 'Internships', href: '/careers#internships' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const { scrollY } = useScroll()
  const navBackground = useTransform(scrollY, [0, 50], ['rgba(250,250,248,0)', 'rgba(250,250,248,0.92)'])
  const navPadding = useTransform(scrollY, [0, 50], ['24px', '16px'])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8"
      style={{
        background: navBackground,
        paddingTop: navPadding,
        paddingBottom: navPadding,
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
        boxShadow: '0 1px 32px rgba(0,0,0,0.06)',
      }}
    >
      {/* LOGO */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border-2 border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.1)] transition-transform duration-500 group-hover:rotate-[360deg]">
            <span className="font-serif font-black text-sm text-[#0F172A]">cx</span>
          </div>
          <span className="font-serif font-bold text-xl tracking-tighter text-[#0F172A]">
            COSMO<span className="text-[#2563EB]">LIX</span>
          </span>
        </Link>
      </motion.div>

      <div className="hidden md:flex items-center gap-2 relative">
        <AnimatePresence>
          {hoveredLink && (
            <motion.div
              layoutId="nav-hover-pill"
              className="absolute h-9 bg-[#2563EB]/5 rounded-full z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </AnimatePresence>

        {navLinks.map((link) => (
          <div
            key={link.label}
            className="relative z-10"
            onMouseEnter={() => {
              setHoveredLink(link.label)
              if (link.dropdown) setOpenDropdown(link.label)
            }}
            onMouseLeave={() => {
              setHoveredLink(null)
              setOpenDropdown(null)
            }}
          >
            <Link
              to={link.href}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors duration-300 no-underline ${hoveredLink === link.label || openDropdown === link.label ? 'text-[#2563EB]' : 'text-[#334155]'
                }`}
            >
              {link.label}
              {link.dropdown && (
                <motion.div animate={{ rotate: openDropdown === link.label ? 180 : 0 }}>
                  <ChevronDown size={14} className="text-[#2563EB]" />
                </motion.div>
              )}
            </Link>

            <AnimatePresence>
              {link.dropdown && openDropdown === link.label && (
                <motion.div
                  initial={{ opacity: 0, y: 15, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 10, rotateX: -15 }}
                  style={{ perspective: '1000px' }}
                  className="absolute top-full left-0 mt-2 py-3 rounded-2xl min-w-[220px] bg-white border border-blue-600/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] origin-top"
                >
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center justify-between px-5 py-2.5 text-sm text-[#334155] no-underline hover:text-[#2563EB] hover:bg-blue-600/5 transition-all group/item"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        {item.label}
                      </motion.div>
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/#contact" className="text-sm font-medium text-slate-600 hover:text-[#2563EB] transition-colors no-underline">
          Contact
        </Link>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/careers#jobs"
            className="px-7 py-2.5 rounded-full text-sm font-bold text-white no-underline bg-gradient-to-r from-[#2563EB] to-[#3B82F6]"
          >
            Join Us
          </Link>
        </motion.div>
      </div>

      <button className="md:hidden p-2 text-[#0F172A]" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>


      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-slate-900 z-[60] flex flex-col md:hidden"
          >
            <div className="flex pt-4 justify-between items-center px-8 border-b border-white/10">
              <span className="font-serif font-bold text-xl text-white">COSMOLIX</span>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col justify-center flex-grow py-8 px-12 gap-12 bg-slate-900">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={link.href}
                    className="text-3xl font-serif font-bold text-white no-underline hover:text-[#2563EB] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {/* Optional: Show dropdown items in mobile view */}
                  {link.dropdown && (
                    <div className="flex flex-col gap-3 mt-3 ml-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-lg text-white/60 no-underline"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/careers#internships"
                  className="mt-4 block px-8 py-4 rounded-2xl bg-[#2563EB] text-center font-bold no-underline text-white shadow-xl hover:bg-blue-700 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Start Your Journey
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}