import { motion } from "framer-motion"
const InternshipProgramInfo = () => {
  return (
    <motion.section
className="section-spacing"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
>

      <div className="container mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">
            Internship Program Details
          </h2>

          <p className="text-muted-foreground mt-4">
            A structured 30-day internship designed to help students
            build real-world technology projects.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">

          <div className="glass-card-hover p-6 text-center">
            <h3 className="font-semibold">Duration</h3>
            <p className="text-muted-foreground mt-2">
              30 Days
            </p>
          </div>

          <div className="glass-card-hover p-6 text-center">
            <h3 className="font-semibold">Mode</h3>
            <p className="text-muted-foreground mt-2">
              Online
            </p>
          </div>

          <div className="glass-card-hover p-6 text-center">
            <h3 className="font-semibold">Registration Fee</h3>
            <p className="text-primary font-semibold mt-2">
              ₹250
            </p>
          </div>

          <div className="glass-card-hover p-6 text-center">
            <h3 className="font-semibold">Certificate</h3>
            <p className="text-muted-foreground mt-2">
              Verified Completion
            </p>
          </div>

        </div>

      </div>

    </motion.section>  )
}

export default InternshipProgramInfo