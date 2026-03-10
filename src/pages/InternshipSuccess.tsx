import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

const InternshipSuccess = () => {

const storedApplication = localStorage.getItem("internshipApplication")
const application = storedApplication
? JSON.parse(storedApplication)
: null

const [showPopup,setShowPopup] = useState(false)

const { width, height } = useWindowSize()

useEffect(()=>{

const timer = setTimeout(()=>{
setShowPopup(true)
},2000)

return () => clearTimeout(timer)

},[])

return (

<motion.main
className="pt-32 pb-24 relative overflow-hidden"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.6}}
>

  <Confetti
width={width}
height={height}
numberOfPieces={200}
recycle={false}
/>

<div className="absolute inset-0 bg-glow pointer-events-none"/>

<div className="container mx-auto px-6 max-w-lg text-center relative z-10">

<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{duration:0.5}}
className="flex justify-center"
>

<div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-lg">

✔

</div>

</motion.div>

<h1 className="text-3xl md:text-4xl font-bold mt-6">
Congratulations {application?.name || "Intern"} 🎉
</h1>

<p className="text-muted-foreground mt-4">
Your internship application has been successfully submitted.
</p>

<p className="text-muted-foreground mt-2">
Our team will contact you shortly with onboarding details.
</p>

<div className="mt-8 space-y-3 text-sm text-muted-foreground">

<p>✔ Your application has been received</p>

<p>✔ Our team will review your application</p>

<p>✔ You will receive onboarding instructions via email</p>

</div>

<a
href="/application-status"
className="inline-block mt-8 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold transition-all hover:brightness-110 hover:scale-[1.02]"
>
Check Application Status
</a>

</div>

{showPopup && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
>

<motion.div
initial={{scale:0.8}}
animate={{scale:1}}
className="bg-white rounded-xl p-8 max-w-sm text-center shadow-xl"
>

<h2 className="text-xl font-semibold mb-3">
Join Our Internship Community
</h2>

<p className="text-sm text-muted-foreground mb-6">
Stay updated with announcements, tasks, and support by joining our official WhatsApp group.
</p>

<a
href="https://chat.whatsapp.com/Fx3z6ZMIJl7EgB4CDwlxyw?mode=gi_t"
target="_blank"
className="block bg-green-500 text-white py-3 rounded-lg font-semibold hover:brightness-110"
>
Join WhatsApp Community
</a>

<button
onClick={()=>setShowPopup(false)}
className="mt-4 text-sm text-muted-foreground"
>
Maybe Later
</button>

</motion.div>

</motion.div>

)}

</motion.main>

)
}

export default InternshipSuccess
