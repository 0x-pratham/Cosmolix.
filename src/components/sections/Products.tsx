"use client";
import { useEffect, useRef, useState } from 'react'
import { Zap, PieChart, Shield, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from 'framer-motion'

const products = [
  {
    tag: 'Ongoing Beta Testing',
    name: 'CosmoWork',
    icon: Zap,
    desc: 'An advanced marketplace for hybrid work environments, utilizing proprietary matching algorithms to optimize workspace utilization and professional productivity.',
    href: '#cosmowork',
    color: '#2563EB',
    status: 'PRODUCTION READY'
  },
  {
    tag: 'Under Development',
    name: 'CosmoAnalytics',
    icon: PieChart,
    desc: 'A comprehensive analytical suite that evaluates cloud infrastructure diagrams to provide data-driven cost reduction strategies and performance-centric redesigns.',
    href: '#cosmoanalytics',
    color: '#2563EB',
    status: 'ENTERPRISE STABLE'
  },
  {
    tag: 'Under Development',
    name: 'CosmoCyber',
    icon: Shield,
    desc: 'Automated security auditing framework designed for modern cloud-native architectures, delivering real-time threat detection and vulnerability assessments.',
    href: '#cosmocyber',
    color: '#2563EB',
    status: 'ACTIVE PROTECTION'
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  })
}

function ProductModule({ product, index }: { product: (typeof products)[0], index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (cardRef.current && isHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [isHovered]);

  const Icon = product.icon;

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white border border-slate-200/60 p-8 rounded-[2.5rem] flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:border-blue-600/20 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.1)]"
    >

      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(37,99,235,0.06), transparent)`
        }}
      />

      <div className="flex items-center justify-between relative z-10">
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[15px] font-bold tracking-[0.2em] text-slate-400">
            {product.tag}
          </span>

          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-sans text-[9px] font-black text-blue-600 uppercase tracking-widest">
                  {product.status}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          whileHover={{ scale: 1.1 }} 
          className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-100 transition-all group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/20"
        >
          <Icon size={20} className="text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="relative z-10">
        <h3 className="font-serif text-2xl font-black text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed min-h-[80px]">
          {product.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={containerRef}
      id="products"
      className="relative py-20 lg:py-24 bg-[#FAFAF8] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <pattern id="prod-grid-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#2563EB" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#prod-grid-dots)" />
          </svg>
        </div>
        <motion.div 
          style={{ y: bgY }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-600/[0.04] blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        {/* ── HEADER ── */}
        <div className="flex flex-col items-start gap-4 mb-16 lg:mb-20">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[10px] font-black text-blue-600 tracking-[0.25em] uppercase">Our Products</span>
          </motion.div>
          
          <div className="flex flex-col gap-6 w-full">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter">
              Proprietary Products, <span className="italic text-blue-600">Enterprise Impact.</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl max-w-6xl font-medium leading-relaxed border-l-4 border-blue-600/20 pl-8"
            >
              We engineer scalable software assets designed to streamline architectural decision-making and enhance operational security across the enterprise.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <ProductModule key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}