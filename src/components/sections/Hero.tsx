import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 bg-grid pt-24">

    {/* Ambient Background Glow */}
    <div
      className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[700px] h-[480px] rounded-full opacity-35 blur-[140px]
      bg-gradient-to-br from-indigo-400/30 via-blue-300/30 to-cyan-300/30
      pointer-events-none"
    />
    {/* Subtle Grid Sweep Light */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  <div
    className="absolute -left-[40%] top-0 w-[180%] h-full
    bg-gradient-to-r from-transparent via-white/40 to-transparent
    opacity-30 blur-[80px]"
    style={{ animation: "gridSweep 12s linear infinite" }}
  />
</div>

    <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">

      {/* LEFT COLUMN — CONTENT */}
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {/* Tagline */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 mb-6">
  <span className="h-[6px] w-[6px] rounded-full bg-indigo-600"></span>
  AI-Powered Enterprise Solutions
</span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-slate-900 leading-[1.05] max-w-2xl mx-auto lg:mx-0">
          Build the Future with{" "}
          <span className="gradient-text">AI-Driven Systems</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Cosmolix builds scalable AI software, cloud platforms, and intelligent
          SaaS products designed for modern enterprises and ambitious startups.
        </p>

        {/* Feature Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium">
            AI Powered
          </span>

          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium">
            Startup Ready
          </span>

          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
            Enterprise Secure
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5">

          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl"
          >
            Explore Products
          </Link>

          <Link
            to="/internship"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-100"
          >
            Start Internship
          </Link>

        </div>

        {/* Trust Signal */}
        <div className="mt-12 text-sm text-slate-500">
          Used by startups, engineering teams, and enterprises building AI-driven platforms.
        </div>
        

      </motion.div>

      {/* RIGHT COLUMN — VISUAL PANEL */}
      <motion.div
        className="hidden lg:flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
>
<div className="relative w-[420px] h-[420px] rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden">
{/* Background Image */}
<div className="absolute inset-0 opacity-[0.99]">
  <img
    src="https://i.ibb.co/BKny65gV/AI-ROBOT-UNIVERSE.jpg"
    alt=""
    className="w-full h-full object-cover grayscale"
  />
  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-400/10" />
</div>

{/* White overlay to keep text readable */}
<div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/70" />
          <div className="relative z-10 text-center p-10 mt-6">

            <p className="text-xs text-indigo-500 font-medium mb-2 uppercase tracking-wider">
AI Platform
</p>

<h3 className="text-xl font-semibold text-slate-800">
Cosmolix Intelligence Core
</h3>

<p className="text-sm text-slate-500 mt-3">
Autonomous AI workflows, scalable cloud architecture, and intelligent SaaS infrastructure.
</p>

<div className="mt-6 grid grid-cols-3 gap-3 text-xs text-slate-600">
  <div className="rounded-md bg-slate-100 py-2">AI</div>
  <div className="rounded-md bg-slate-100 py-2">Cloud</div>
  <div className="rounded-md bg-slate-100 py-2">Data</div>
</div>

          </div>

        </div>
</motion.div>
</motion.div>

    </div>

  </section>
);

export default Hero;