"use client";
import { useState, useEffect } from 'react'; // Added useState and useEffect
import { Play, ArrowRight } from 'lucide-react'
import HeroIllustration from './HeroIllustration'
import { motion, AnimatePresence, type Variants } from 'framer-motion' // Added AnimatePresence

const words = ["Faster.", "Better.", "Smarter.", "Further.", "Beyond."];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const illustrationVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
    },
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24 "
      style={{ background: 'linear-gradient(160deg, #FAFAF8 0%, #EFF6FF 50%, #FAFAF8 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-2/3 h-2/3"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgba(37,99,235,0.06), transparent 70%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-1/2 h-1/2"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, rgba(37,99,235,0.04), transparent 70%)',
          }}
        />
        
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.035 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#2563EB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </motion.svg>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div 
          className="flex flex-col gap-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full w-fit bg-[#2563EB]/5 border border-[#2563EB]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
            </span>
            <span className="text-sm font-medium text-[#2563EB] font-sans tracking-wide">
              Next-Gen Technology Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif font-black text-[#0F172A] tracking-tighter leading-[1.1]"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
          >
            Build Smarter.
            <br />
            <div className="flex items-center gap-x-3 overflow-hidden">
              <span>Scale</span>
              <div className="relative h-[1.2em] min-w-[150px]">
                <AnimatePresence mode="wait">
                  <motion.em
                    key={words[index]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute left-0 top-0 italic text-[#2563EB] font-normal"
                  >
                    {words[index]}
                  </motion.em>
                </AnimatePresence>
              </div>
            </div>
            Go Further.
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="w-16 h-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6]"
          />

          <motion.p
            variants={itemVariants}
            className="text-slate-600 leading-relaxed max-w-[460px] text-lg"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Cosmolix delivers enterprise IT services, cloud infrastructure,
            digital transformation, and talent programs — turning ambitious
            ideas into global impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-7 py-3 rounded-full text-white font-bold text-sm no-underline shadow-xl shadow-blue-600/20"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }}
            >
              Explore Services
              <ArrowRight size={15} />
            </motion.a>

            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05, background: '#f8fafc' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm text-[#0F172A] bg-white border border-slate-200 shadow-sm no-underline"
            >
              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-600/10 text-blue-600">
                <Play size={10} fill="currentColor" />
              </span>
              View Careers
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[
                { color: '#2563EB', char: 'A' },
                { color: '#10B981', char: 'B' },
                { color: '#0F172A', char: 'C' },
                { color: '#334155', char: 'D' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, zIndex: 10 }}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black shadow-sm"
                  style={{ background: item.color, zIndex: 4 - i }}
                >
                  {item.char}
                </motion.div>
              ))}
            </div>
            <p className="text-slate-400 text-xs font-medium tracking-wide">
              Trusted in <strong className="text-slate-700">42+ countries</strong> by industry leaders
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT — ANIMATED ILLUSTRATION */}
        <motion.div 
          variants={illustrationVariants}
          initial="hidden"
          animate="visible"
          className="relative flex items-center justify-center h-[520px]"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-full h-full bg-blue-600/20 blur-[100px] rounded-full"
          />
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full relative z-10"
          >
            <HeroIllustration />
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #FAFAF8, transparent)' }}
      />
    </section>
  )
}