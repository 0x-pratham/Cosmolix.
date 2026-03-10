import ApplicationForm from "@/components/internship/application/ApplicationForm"
import { motion } from "framer-motion"

const InternshipApply = () => {
  return (
    <main className="pt-32 pb-24 relative overflow-hidden">

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-30 blur-[140px] bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 pointer-events-none"/>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="flex justify-center mb-4">
  <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
    Internship Program
  </span>
</div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
          Internship Application
        </h1>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
Complete the form below to apply for the Cosmolix Project-Based Internship.
Our team will review your application and contact you shortly.
</p>

<div className="flex flex-wrap justify-center gap-4 text-sm mb-12">

<span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
⚡ 30-Day Intensive Program
</span>

<span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
🚀 Real Product Development
</span>

<span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
💰 Top Performers Get ₹10k Stipend
</span>

</div>
<div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full opacity-60"/>

        <motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7, ease:"easeOut"}}
className="glass-card p-8 md:p-12 rounded-2xl shadow-md border border-border/40"
>

<ApplicationForm/>
</motion.div>

</div>

    </main>
  )
}

export default InternshipApply