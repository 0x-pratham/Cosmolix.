import { internshipDomains } from "@/data/internshipDomains"
import {
  Brain,
  Code2,
  Shield,
  BarChart3,
  Smartphone,
  Cloud,
  Palette,
  Cpu
} from "lucide-react"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const icons: any = {
  brain: Brain,
  code: Code2,
  shield: Shield,
  chart: BarChart3,
  mobile: Smartphone,
  cloud: Cloud,
  design: Palette,
  cpu: Cpu
}

const InternshipDomains = () => {
  return (

<motion.section
className="section-spacing relative"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
>

<div className="container mx-auto px-6">

{/* Section Header */}

<div className="text-center max-w-2xl mx-auto mb-16">

<h2 className="text-3xl md:text-4xl font-bold">
Choose Your Internship Domain
</h2>

<p className="text-muted-foreground mt-4">
Select the field you want to specialize in and build a real
end-to-end project during the Cosmolix 30-Day Internship Program.
</p>

</div>

{/* Grid */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

{internshipDomains.map((domain, i) => {

const Icon = icons[domain.icon]

return (

<motion.div
key={domain.id}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: i * 0.08 }}
className="group relative glass-card p-7 rounded-2xl border border-border/50 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40"
>

<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition">
<Icon className="w-6 h-6 text-primary"/>
</div>

<h3 className="text-lg font-semibold text-foreground">
{domain.title}
</h3>

<p className="text-sm text-muted-foreground mt-2 leading-relaxed">
{domain.description}
</p>

<div className="flex flex-wrap gap-2 mt-4">
{domain.skills.map((skill)=>(
<span
key={skill}
className="text-xs bg-muted px-2 py-1 rounded-md"
>
{skill}
</span>
))}
</div>

<p className="text-xs text-muted-foreground mt-4">
🎯 Outcome: {domain.outcome}
</p>

<div className="border-t border-border/40 my-6"/>

<Link
to={`/internship/apply?domain=${domain.id}`}
className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold transition-all hover:brightness-110 hover:scale-[1.02]"
>

Apply for this Track

</Link>

</motion.div>

)

})}

</div>

</div>

</motion.section>

  )
}

export default InternshipDomains