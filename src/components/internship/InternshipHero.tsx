import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const InternshipHero = () => {
  return (
    <section className="relative pt-36 pb-24 text-center overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-30 blur-[120px] bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 pointer-events-none" />

      <div className="container mx-auto px-6">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.7, ease:"easeOut"}}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto"
        >
          Build Real Tech Skills with the{" "}
          <span className="gradient-text">Cosmolix Internship Program</span>
        </motion.h1>

        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
          Work on real AI products, collaborate with engineers, and build a
          portfolio that actually gets you hired.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">

<span>⚡ 30-Day Project Based Internship</span>

<span>🚀 Real Product Development</span>

<span>💰 Top Performers Get ₹10k Stipend</span>

</div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/internship/apply"
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:scale-105"
          >
            Apply Now
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 border border-border rounded-lg font-semibold transition-all duration-300 hover:bg-muted hover:scale-[1.02]"
          >
            Ask Questions
          </Link>
        </div>

      </div>
    </section>
  )
}

export default InternshipHero