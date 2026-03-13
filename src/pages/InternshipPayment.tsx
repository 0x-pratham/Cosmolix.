import { motion } from "framer-motion"
import { openRazorpayPayment } from "@/services/paymentService"

const domainMap: any = {
  web: "Full Stack Web Development",
  ai: "Artificial Intelligence & Machine Learning",
  cyber: "Cyber Security & Ethical Hacking",
  data: "Data Science & Analytics",
  mobile: "Mobile App Development",
  cloud: "Cloud Computing",
  uiux: "UI/UX Design",
  software: "Software Development"
}

const InternshipPayment = () => {

  const storedApplication = localStorage.getItem("internshipApplication")

  const application = storedApplication
    ? JSON.parse(storedApplication)
    : null

  return (

<motion.main
className="pt-32 pb-24 relative overflow-hidden"
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ duration:0.6 }}
>

{/* Background glow */}
<div className="absolute inset-0 bg-glow pointer-events-none"/>

<motion.div
className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-primary via-secondary to-accent"
animate={{ scale:[1,1.2,1] }}
transition={{ duration:10, repeat:Infinity }}
/>

<div className="container mx-auto px-6 max-w-4xl relative z-10">

{/* Page title */}

<h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
Complete Your Registration
</h1>

<p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
Secure your spot in the Cosmolix Internship Program by completing the registration payment.
</p>


{/* Payment layout */}

<motion.div
className="grid md:grid-cols-2 gap-10 items-start"
initial={{ opacity:0, y:40 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.6, delay:0.2 }}
>


{/* Application summary */}

<motion.div
className="glass-card p-8 rounded-2xl shadow-sm"
initial={{ opacity:0, x:-40 }}
animate={{ opacity:1, x:0 }}
transition={{ duration:0.6, delay:0.3 }}
>

<h2 className="text-xl font-semibold mb-6">
Application Summary
</h2>

<div className="space-y-3 text-sm">

<p>
<span className="text-muted-foreground">Name:</span>
<span className="ml-2 font-medium">{application?.name}</span>
</p>

<p>
<span className="text-muted-foreground">Email:</span>
<span className="ml-2 font-medium">{application?.email}</span>
</p>

<p>
<span className="text-muted-foreground">Phone:</span>
<span className="ml-2 font-medium">{application?.phone}</span>
</p>

<p>
<span className="text-muted-foreground">College:</span>
<span className="ml-2 font-medium">{application?.college}</span>
</p>

<p>
<span className="text-muted-foreground">Domain:</span>
<span className="ml-2 font-medium capitalize">
{domainMap[application?.domain] || application?.domain}
</span>
</p>

</div>

</motion.div>



{/* Payment card */}

<motion.div
className="glass-card p-8 rounded-2xl text-center shadow-sm"
initial={{ opacity:0, x:40 }}
animate={{ opacity:1, x:0 }}
transition={{ duration:0.6, delay:0.3 }}
>

<p className="text-sm text-muted-foreground">
Internship Registration Fee
</p>

<motion.h2
className="text-4xl font-bold mt-2"
initial={{ scale:0.8, opacity:0 }}
animate={{ scale:1, opacity:1 }}
transition={{ duration:0.4, delay:0.4 }}
>
₹250
</motion.h2>


<ul className="mt-6 space-y-2 text-sm text-muted-foreground text-left">

<li>✔ 30-Day Project-Based Internship</li>
<li>✔ Work on Real Tech Projects</li>
<li>✔ Internship Offer Letter</li>
<li>✔ Completion Certificate</li>
<li>✔ Top Performers Get ₹10,000 Stipend Opportunity</li>

</ul>


<p className="text-xs text-muted-foreground mt-4">
One-time payment for program enrollment
</p>


<motion.button
whileHover={{ scale:1.03 }}
whileTap={{ scale:0.97 }}
onClick={openRazorpayPayment}
className="mt-8 w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold shadow-md"
>
Pay ₹250 with Razorpay
</motion.button>


<p className="text-xs text-muted-foreground mt-4">
🔒 Secure payment powered by Razorpay
</p>

<p className="text-xs text-muted-foreground">
All transactions are encrypted and protected.
</p>

</motion.div>

</motion.div>

</div>

</motion.main>

  )
}

export default InternshipPayment