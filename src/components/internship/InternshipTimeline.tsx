import { motion } from "framer-motion"
const InternshipTimeline = () => {
  return (
    <motion.section
className="section-spacing"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
>
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          How the 30-Day Internship Works
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          <div className="glass-card-hover p-8">
            <h3 className="font-semibold text-lg">
              Days 1-15 — Learning Phase
            </h3>

            <p className="text-muted-foreground mt-3">
              Intensive immersion in the technology stack and system
              architecture of the project you will build.
            </p>
          </div>

          <div className="glass-card-hover p-8">
            <h3 className="font-semibold text-lg">
              Days 16-30 — Project Execution
            </h3>

            <p className="text-muted-foreground mt-3">
              Work in teams to build and ship a complete end-to-end project
              under mentor guidance.
            </p>
          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default InternshipTimeline