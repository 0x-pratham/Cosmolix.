import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import { Search, Loader2, AlertCircle } from "lucide-react"
import ApplicationProgress from "@/components/internship/application/ApplicationProgress"

const domainMap:any = {
web: "Full Stack Web Development",
ai: "Artificial Intelligence & Machine Learning",
cyber: "Cyber Security & Ethical Hacking",
data: "Data Science & Analytics",
mobile: "Mobile App Development",
cloud: "Cloud Computing",
uiux: "UI/UX Design",
software: "Software Development"
}

const ApplicationStatus = () => {

const [email,setEmail] = useState("")
const [application,setApplication] = useState<any>(null)
const [loading,setLoading] = useState(false)
const [searched,setSearched] = useState(false)

const checkStatus = async () => {

const emailRegex = /\S+@\S+\.\S+/

if(!emailRegex.test(email)){
toast.error("Please enter a valid email address")
return
}

setApplication(null)
setLoading(true)
setSearched(true)

const { data, error } = await supabase
  .from("internship_applications")
  .select("*")
  .ilike("email", email.trim())
  .limit(1)
  .single()

if(error){
  console.error(error)
  toast.error("Something went wrong")
  setLoading(false)
  return
}

if(!data){
  toast.error("Application not found")
  setLoading(false)
  return
}

setApplication(data)
setLoading(false)

}

return (

<motion.main
className="pt-32 pb-24 relative overflow-hidden"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.6}}
>

<div className="absolute inset-0 bg-glow pointer-events-none"/>

<div className="container mx-auto px-6 max-w-md relative z-10">

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="text-center mb-12"
>

<h1 className="text-4xl md:text-5xl font-bold mb-4">
Track Your Internship Application
</h1>

<p className="text-muted-foreground max-w-xl mx-auto text-lg">
Enter your email address to check the real-time status of your Cosmolix internship application.
</p>

</motion.div>

<div className="glass-card p-8 rounded-2xl space-y-5 shadow-sm border border-border/50 backdrop-blur-xl">

<div className="relative">

<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />

<input
type="email"
placeholder="Enter your email address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
onKeyDown={(e)=>{ if(e.key==="Enter") checkStatus() }}
className="w-full border border-border/60 bg-background pl-10 pr-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
/>

</div>

<button
onClick={checkStatus}
disabled={loading}
className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold transition-all hover:brightness-110 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
>

{loading ? "Checking..." : "Check Status"}

</button>

</div>

{loading && (

<div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">

<Loader2 className="animate-spin" size={18}/>
<p>Checking application status...</p>

</div>

)}

{!loading && searched && !application && (

<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="mt-8 glass-card p-6 rounded-xl text-center text-sm text-muted-foreground border border-border/50"
>

<AlertCircle className="mx-auto mb-2 text-muted-foreground" size={24}/>

<p className="font-semibold text-base">
No application found
</p>

<p className="mt-2">
Make sure you entered the correct email used during application.
</p>

</motion.div>

)}

{application && (

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
className="mt-8 glass-card p-8 rounded-2xl shadow-sm space-y-3"
>

<div className="space-y-4 text-sm">

<div className="flex justify-between">
<span className="text-muted-foreground">Applicant</span>
<span className="font-medium">{application.name}</span>
</div>

<div className="flex justify-between">
<span className="text-muted-foreground">Domain</span>
<span className="font-medium">
{domainMap[application.domain] || application.domain}
</span>
</div>

<div className="flex justify-between items-center">

<span className="text-muted-foreground">Status</span>

<span className={`px-3 py-1 rounded-full text-xs font-semibold

${application.status === "approved"
? "bg-green-100 text-green-700"
: application.status === "rejected"
? "bg-red-100 text-red-700"
: "bg-yellow-100 text-yellow-700"}

`}>

{application.status || "pending"}

</span>

</div>

<div className="flex justify-between">
<span className="text-muted-foreground">Application ID</span>
<span className="font-medium">
CX-{application.id?.slice(0,6).toUpperCase()}
</span>
</div>

</div>

<div className="mt-6 border-t border-border pt-6">

<p className="text-sm font-semibold mb-4">
Application Progress
</p>

<ApplicationProgress status={application.status || "pending"} />

</div>

</motion.div>

)}

<div className="text-center mt-8">

<Link
to="/internship"
className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-muted hover:bg-muted/70 transition text-sm font-medium"
>

Apply for another internship domain

</Link>

</div>

</div>

</motion.main>

)

}

export default ApplicationStatus