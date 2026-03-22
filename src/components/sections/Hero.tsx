import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 pt-24">

    {/* 🔥 Background Image Layer */}
<div className="absolute inset-0">
  <motion.img
    src="https://i.ibb.co/b5wvgHNL/Hero2.jpg"
    alt=""
    className="w-full h-full object-cover opacity-[0.6]"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
  />
  
  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-slate-100" />

</div>
    {/* Ambient Background Glow */}
    <div
      className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[700px] h-[480px] rounded-full opacity-15 blur-[140px]
      bg-gradient-to-br from-indigo-400/30 via-blue-300/30 to-cyan-300/30
      pointer-events-none"
    />
    
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-slate-950 drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)] leading-[1.05] max-w-2xl mx-auto lg:mx-0">
          Engineering the Future with{" "}
          <span className="gradient-text">AI-Driven Systems</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          We design and develop AI-powered software, cloud platforms, and scalable SaaS solutions for startups and enterprises.
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

          {/* PRIMARY CTA */}
<Link
  to="/products"
  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Explore Products →
</Link>

{/* SECONDARY CTA */}
<Link
  to="/internship"
  className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-slate-700 border border-slate-300 hover:bg-slate-100 transition"
>
  Start Internship
</Link>

        </div>

        {/* Trust Signal */}
        <div className="mt-12 text-sm text-slate-500">
          Build Scalable AI Products for the Future
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
<div className="relative w-[420px] h-[420px] rounded-3xl border border-white/40 bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden">
{/* Subtle glow effect */}
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#6366f1,transparent)]" />
{/* Background Image */}
<div className="absolute inset-0 opacity-[1.25]">
  <img
  src="https://i.ibb.co/BKny65gV/AI-ROBOT-UNIVERSE.jpg"
  alt=""
 className="w-full h-full object-cover grayscale opacity-80"
/>
</div>
{/* White overlay to keep text readable */}
<div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/60" />
          <div className="relative z-10 text-center p-10">

            <p className="text-xs text-indigo-500 font-medium mb-2 uppercase tracking-wider">
AI Platform
</p>

<h3 className="text-xl font-semibold text-slate-800">
Cosmolix Intelligence Core
</h3>

<p className="text-sm text-slate-500 mt-3">
Autonomous AI workflows, scalable cloud architecture, and intelligent SaaS infrastructure.
</p>

<div className="mt-6 grid grid-cols-3 gap-3 text-xs text-slate-700">
  <div className="rounded-md bg-slate-100 py-2">AI</div>
  <div className="rounded-md bg-slate-100 py-2">Cloud</div>
  <div className="rounded-md bg-slate-100 py-2">Data</div>
</div>

          </div>
        </div>
</motion.div>
</motion.div>
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-800 text-xs animate-bounce">
↓
</div>

    </div>

  </section>
);

export default Hero;