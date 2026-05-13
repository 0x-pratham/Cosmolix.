"use client";
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  Zap, 
  BarChart3, 
  ArrowRight,
  Search,
  Settings,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CONSULTING_SERVICES = [
  {
    title: "Enterprise Architecture",
    desc: "Designing resilient, scalable digital infrastructures that align with long-term business objectives.",
    icon: <Layout className="text-blue-600" size={24} />
  },
  {
    title: "Cloud Transformation",
    desc: "Strategic migration and optimization protocols for multi-cloud and hybrid environments.",
    icon: <Globe className="text-blue-600" size={24} />
  },
  {
    title: "Cybersecurity Strategy",
    desc: "Implementing rigorous security benchmarking and zero-trust protocols to protect proprietary data.",
    icon: <ShieldCheck className="text-blue-600" size={24} />
  },
  {
    title: "AI & ML Implementation",
    desc: "Integrating deep learning models into existing workflows for enhanced operational intelligence.",
    icon: <Cpu className="text-blue-600" size={24} />
  },
  {
    title: "Data Strategy",
    desc: "Optimizing data processing and back-office management systems for high-performance analytics.",
    icon: <Database className="text-blue-600" size={24} />
  },
  {
    title: "Digital Transformation",
    desc: "End-to-end modernization of legacy systems using agile methodologies and modern tech stacks.",
    icon: <Zap className="text-blue-600" size={24} />
  }
];

const PROCESS_STEPS = [
  { title: "Audit & Discovery", icon: <Search size={20} /> },
  { title: "Strategic Roadmap", icon: <Settings size={20} /> },
  { title: "Execution & Integration", icon: <Rocket size={20} /> },
  { title: "Optimization", icon: <BarChart3 size={20} /> }
];

export default function ITConsultingPage() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen pt-32 pb-20 overflow-hidden">
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 mb-8"
            >
              <ShieldCheck size={14} className="text-blue-600" />
              <span className="text-[10px] font-black text-blue-600 tracking-[0.25em] uppercase">Strategic Advisory</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold text-[#0F172A] leading-[1.1] tracking-tighter mb-8"
            >
              Engineering <span className="italic text-blue-600">Strategic</span> Digital Futures.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-xl font-medium leading-relaxed"
            >
              Cosmolix provides high-fidelity IT consulting to bridge the gap between complex technological challenges and real world.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full relative"
          >
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONSULTING_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-blue-300 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="bg-[#0F172A] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid-dark" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#FFFFFF" /></pattern><rect width="100%" height="100%" fill="url(#grid-dark)" /></svg>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-16 leading-tight">Our Operational <span className="italic text-blue-400">Methodology.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-blue-400/30 flex items-center justify-center text-blue-400 mb-6 font-mono text-xs">
                  {step.icon}
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{step.title}</h4>
                <div className="w-8 h-[1px] bg-slate-700 mt-4 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="max-w-4xl mx-auto px-8 mt-32 text-center">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-12 md:p-20 rounded-[3rem] border border-blue-100 shadow-xl"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0F172A] mb-8 leading-tight">
            Ready to <span className="text-blue-600">Architect</span> Your Strategy?
          </h2>
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#0F172A] text-white rounded-2xl font-bold text-sm transition-all hover:bg-blue-600 no-underline shadow-lg"
          >
            Initiate Consultation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}       