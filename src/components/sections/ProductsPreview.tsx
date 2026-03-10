import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { products } from "@/data/products";

const ProductsPreview = () => (
  <section className="section-spacing relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8">
      <SectionHeader
        badge="Our Products"
        title="Intelligent Products, Real Impact"
        description="Enterprise-grade platforms built with cutting-edge AI to solve complex problems."
      />
      <div className="group relative glass-card-hover p-8 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
            className="glass-card-hover p-8 flex flex-col"
          >
            <div className="mb-4">
  <span className="text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
    Product
  </span>
</div>

<h3 className="text-xl font-semibold text-foreground mb-3">
  {p.name}
</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
              {p.shortDescription}
            </p>
            <Link
              to={`/products/${p.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
            >
              View Details <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsPreview;
