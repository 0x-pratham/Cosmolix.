import { Award, Briefcase, Gift, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const perks = [
  {
    icon: Briefcase,
    title: "Industry Exposure",
    desc: "Understand how real engineering teams design and build technology products."
  },
  {
    icon: Rocket,
    title: "Portfolio Project",
    desc: "Build and ship a complete end-to-end project during the internship."
  },
  {
    icon: Award,
    title: "Certificate & Offer Letter",
    desc: "Receive internship offer letter and completion certificate."
  },
  {
    icon: Gift,
    title: "Cosmolix Swags",
    desc: "Top performers receive exclusive Cosmolix goodies."
  }
]

const InternshipPerks = () => {
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
          Internship Perks
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {perks.map((perk, i) => {

            const Icon = perk.icon

            return (
              <div key={i} className="glass-card-hover p-7 text-center">

                <Icon className="w-10 h-10 mx-auto text-primary mb-4"/>

                <h3 className="font-semibold">
                  {perk.title}
                </h3>

                <p className="text-muted-foreground text-sm mt-3">
                  {perk.desc}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </motion.section>
  )
}

export default InternshipPerks