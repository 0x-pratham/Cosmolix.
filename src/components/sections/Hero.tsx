import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white bg-grid pt-24">
    {/* Background glow */}
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full opacity-30 blur-[140px] bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 relative z-10 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6">
          AI-Powered Enterprise Solutions
        </span>
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] max-w-5xl mx-auto"
>
  Build the Future with{" "}
  <span className="gradient-text">AI-Driven Systems</span>
</motion.h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
  Cosmolix builds scalable AI software, cloud platforms, and intelligent
  SaaS products designed for modern enterprises and ambitious startups.
</p>

<div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
  <span>⚡ AI Powered</span>
  <span>🚀 Startup Ready</span>
  <span>🔒 Enterprise Secure</span>
</div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
  to="/products"
  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
>
  Explore Products
</Link>
          <Link
  to="/internship"
  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted"
>
  Start Internship
</Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
