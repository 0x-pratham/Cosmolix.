"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A] pt-24">
    
    <div className="absolute inset-0">
      <motion.img
        src="https://i.ibb.co/b5wvgHNL/Hero2.jpg"
        alt=""
        className="w-full h-full object-cover opacity-[0.2]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Dark gradient overlay to blend the image into the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/40 to-[#0F172A]" />
    </div>

    {/* Ambient Brand Glow - Blue & Green based on logo */}
    <div
      className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[800px] h-[500px] rounded-full opacity-20 blur-[120px]
      bg-gradient-to-br from-cosmo-blue via-cosmo-green to-transparent
      pointer-events-none"
    />
    
    <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-10">

      {/* LEFT COLUMN — CONTENT */}
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {/* Brand Tagline */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-cosmo-blue mb-6">
          <span className="h-[6px] w-[6px] rounded-full bg-cosmo-green animate-pulse"></span>
          AI-Powered Enterprise Solutions
        </span>

        {/* Heading - Increased contrast with white text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white leading-[1.05] max-w-2xl mx-auto lg:mx-0">
          Engineering the Future with{" "}
          <span className="bg-gradient-to-r from-cosmo-blue to-cosmo-green bg-clip-text text-transparent">
            AI-Driven Systems
          </span>
        </h1>

        {/* Description - Muted gray for elegance */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          We design and develop scalable AI software, cloud-native platforms, and intelligent SaaS infrastructure for modern enterprises.
        </p>

        {/* Feature Badges - Dark styled */}
        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs">
          <span className="px-4 py-1.5 rounded-full bg-cosmo-blue/10 border border-cosmo-blue/20 text-cosmo-blue font-medium">
            AI Powered
          </span>
          <span className="px-4 py-1.5 rounded-full bg-cosmo-green/10 border border-cosmo-green/20 text-cosmo-green font-medium">
            Startup Ready
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium">
            Enterprise Secure
          </span>
        </div>

        {/* CTA Buttons - Matching Logo "X" */}
        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5">
          <Link
            to="/products"
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cosmo-blue to-cosmo-green px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            Explore Products →
          </Link>

          <Link
            to="/internship"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/5 transition-all"
          >
            Start Internship
          </Link>
        </div>
      </motion.div>

      {/* RIGHT COLUMN — THE VISUAL PANEL (Dark Glassmorphism) */}
      <motion.div
        className="hidden lg:flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-[450px] h-[450px] rounded-[2.5rem] border border-white/10 bg-[#1A1F2C]/40 backdrop-blur-3xl shadow-2xl flex items-center justify-center overflow-hidden group">
            
            {/* Inner Glow Image */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <img
                src="https://i.ibb.co/BKny65gV/AI-ROBOT-UNIVERSE.jpg"
                alt=""
                className="w-full h-full object-cover scale-110"
              />
            </div>
            
            {/* Dark tint to keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/90" />
            
            <div className="relative z-10 text-center p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-cosmo-blue to-cosmo-green rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-cosmo-blue/20">
                <span className="text-white font-bold text-xl">CX</span>
              </div>

              <p className="text-xs text-cosmo-blue font-bold mb-2 uppercase tracking-[0.2em]">
                AI Intelligence Core
              </p>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Autonomous Systems
              </h3>

              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Processing complex datasets through neural architectures for real-time enterprise decision making.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 text-[10px] font-bold text-cosmo-blue uppercase tracking-widest">
                <div className="rounded-lg bg-white/5 border border-white/10 py-3">Neural</div>
                <div className="rounded-lg bg-white/5 border border-white/10 py-3">Cloud</div>
                <div className="rounded-lg bg-white/5 border border-white/10 py-3">Edge</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs animate-bounce flex flex-col items-center gap-2">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cosmo-blue to-transparent" />
      </div>

    </div>
  </section>
);

export default Hero;