import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const InternshipApplyCTA = () => {
  return (

<motion.section
className="section-spacing"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
>

<div className="container mx-auto px-6">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.6}}
className="glass-card text-center p-10 md:p-16 max-w-4xl mx-auto rounded-2xl"
>

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Ready to Build Real Tech Projects?
</h2>

<p className="text-muted-foreground max-w-xl mx-auto">
Join the Cosmolix 30-Day Project Based Internship and work with real engineering teams.
</p>

<Link
to="/internship/apply"
className="inline-flex mt-8 items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
>
Apply Now
</Link>

</motion.div>

</div>

</motion.section>
  )
}

export default InternshipApplyCTA