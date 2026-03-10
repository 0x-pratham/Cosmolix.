import { motion } from "framer-motion"
const InternshipOverview = () => {
  return (
    <motion.section
className="section-spacing"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
>

      <div className="container mx-auto px-6 max-w-3xl text-center">

        <h2 className="text-3xl font-bold">
          Stop Paying for Coaching Disguised as Internships
        </h2>

        <p className="text-muted-foreground mt-6 leading-relaxed">
          Most internships today are just glorified coaching classes —
          repetitive tasks, recorded videos, and a certificate that adds
          little value to your career.
        </p>

        <p className="text-muted-foreground mt-4 leading-relaxed">
          At Cosmolix we focus on <strong>Project-Based Learning</strong>.
          Instead of shadowing someone, you will work with a team and ship
          a complete end-to-end project.
        </p>

      </div>

    </motion.section>
  )
}

export default InternshipOverview