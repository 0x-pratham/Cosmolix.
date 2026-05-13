"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Brain,
  Code2,
  Cloud,
  BarChart3,
  Monitor,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Custom ML models, NLP, and predictive analytics tailored to your domain.",
  },
  {
    icon: Code2,
    title: "Custom Software Engineering",
    desc: "End-to-end engineering of scalable applications built for performance.",
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud Platforms",
    desc: "Cloud-native products designed for multi-tenancy and global scale.",
  },
  {
    icon: BarChart3,
    title: "Data Intelligence & Research",
    desc: "Transforming raw data into strategic intelligence with advanced pipelines.",
  },
  {
    icon: Monitor,
    title: "IT-Enabled Services",
    desc: "Enterprise IT solutions including infrastructure modernization and digital shifts.",
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    desc: "Upskill teams with industry-recognized programs in AI, Cloud, and Security.",
  },
];

function ServiceNode({ service, index, isLeft }: { service: (typeof services)[0]; index: number; isLeft: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex w-full mb-8 md:mb-0 ${isLeft ? "md:justify-end" : "md:justify-start"}`}
    >
      <div className={`flex items-center gap-6 lg:gap-10 max-w-xl group ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        
        {/* Content Side */}
        <div className={`flex flex-col ${isLeft ? "md:text-right" : "md:text-left"}`}>
          <div className={`flex items-center gap-2 mb-1.5 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            <span className="text-[9px] font-black text-blue-600/40 tracking-[0.3em]">NODE_0{index + 1}</span>
            <div className={`h-[1px] bg-blue-600/30 transition-all duration-500 ${isHovered ? "w-10" : "w-0"}`} />
          </div>
          
          <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0F172A] mb-2 transition-colors group-hover:text-blue-600">
            {service.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed transition-colors group-hover:text-slate-700 line-clamp-2 lg:line-clamp-none">
            {service.desc}
          </p>
          
          <div className={`mt-3 flex items-center gap-2 text-[10px] font-bold text-blue-600 tracking-widest transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
            {isLeft && <ArrowRight size={12} className="rotate-180" />}
            Explore More
            {!isLeft && <ArrowRight size={12} />}
          </div>
        </div>

        {/* Icon Node */}
        <div className="relative flex-shrink-0">
          <motion.div 
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 bg-white border ${
              isHovered ? "border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.15)]" : "border-slate-100 shadow-sm"
            }`}
          >
            <service.icon size={24} className={isHovered ? "text-blue-600" : "text-slate-400"} strokeWidth={1.5} />
          </motion.div>
          
          {/* Connecting "Wire" to Center Spine */}
          <div className={`absolute top-1/2 h-[1px] bg-blue-600/20 hidden md:block transition-all duration-500 ${
            isHovered ? "w-12 opacity-100" : "w-6 opacity-0"
          } ${isLeft ? "left-full" : "right-full"}`} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} id="services" className="relative py-16 lg:py-24 bg-[#FAFAF8] overflow-hidden">
      
      {/* ── Blueprint Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <pattern id="blueprint-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#2563EB" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#blueprint-dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Header Section - Tightened Margins */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/5 border border-blue-600/10 mb-6"
          >
            <Sparkles size={12} className="text-blue-600" />
            <span className="text-[9px] font-black text-blue-600 tracking-[0.2em] uppercase">Our Team's Expertise</span>
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-7xl font-black text-[#0F172A] leading-none tracking-tighter mb-6">
            Services <span className="text-blue-600 italic">We Offer</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium">
            Engineering scalable digital ecosystems designed for massive impact.
          </p>
        </div>

        {/* ── THE BLUEPRINT GRID ── */}
        <div className="relative">
          
          {/* Central Spine (Shortened Path) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-slate-200/40" />
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute inset-0 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" 
            />
          </div>

          {/* Nodes Container - Reduced Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-8 gap-x-16 lg:gap-x-32 relative">
            {services.map((s, i) => (
              <div key={s.title} className={i % 2 === 0 ? "md:pt-0" : "md:pt-16"}>
                <ServiceNode 
                  service={s} 
                  index={i} 
                  isLeft={i % 2 === 0} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Tightened */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent mb-8"
          />
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-6 pl-8 pr-3 py-3 rounded-full bg-[#0F172A] text-white no-underline shadow-xl transition-all hover:bg-blue-600"
          >
            <span className="font-bold tracking-widest text-xs uppercase">Get a product Developed for yourself</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
              <ArrowRight size={18} />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}