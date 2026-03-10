import { useState } from "react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabaseClient"
import { toast } from "sonner"

const CTASection = () => {

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const submitLead = async (e: any) => {
    e.preventDefault()

    if (!email.includes("@")) {
      toast.error("Please enter your email")
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from("cta_leads")
      .insert([{ email }])

    setLoading(false)

    if (error) {
      toast.error("Something went wrong")
    } else {
      toast.success("Thank you! We'll contact you soon 🚀")
      setEmail("")
    }
  }

  return (
    <section className="section-spacing relative overflow-hidden">

      <div className="absolute inset-0 bg-glow pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto rounded-2xl"
        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Build the Next Generation of AI Systems{" "}
            <span className="gradient-text">Together</span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Partner with us to transform your enterprise with AI-driven innovation.
          </p>

          <form
            onSubmit={submitLead}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-80 px-5 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Request Consultation"}
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  )
}

export default CTASection