import { motion } from "framer-motion";
import { Brain, Code2, Cloud, BarChart3, Monitor, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Custom ML models, NLP, computer vision, and predictive analytics tailored to your domain." },
  { icon: Code2, title: "Custom Software Development", desc: "End-to-end engineering of scalable applications built for performance and reliability." },
  { icon: Cloud, title: "SaaS & Cloud Platforms", desc: "Cloud-native SaaS products designed for multi-tenancy, scale, and global availability." },
  { icon: BarChart3, title: "Data Analytics & Research", desc: "Transform raw data into actionable intelligence with advanced analytics pipelines." },
  { icon: Monitor, title: "IT-Enabled Services", desc: "Enterprise IT solutions including infrastructure modernization and digital transformation." },
  { icon: GraduationCap, title: "Training & Certification", desc: "Upskill teams with industry-recognized programs in AI, cloud, and cybersecurity." },
];

const ServicesPreview = () => (
  <section className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 bg-glow-bottom pointer-events-none" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <SectionHeader
        badge="What We Do"
        title="Services Built for Scale"
        description="From AI research to enterprise cloud platforms, we deliver solutions that drive measurable impact."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
            className="group relative glass-card-hover hover:glow-purple p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
  <s.icon className="w-6 h-6" strokeWidth={1.8} />
</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  Learn More →
</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
