import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import ResumeUpload from "./ResumeUpload"

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone"),
  college: z.string().min(2, "College required"),
  domain: z.string().min(1, "Select domain"),
})

type FormData = z.infer<typeof schema>

const ApplicationForm = () => {

  const navigate = useNavigate()
  const [params] = useSearchParams()

  const [loading,setLoading] = useState(false)
  const [step,setStep] = useState(1)
  const [resumeUrl,setResumeUrl] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState:{errors}
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  // Auto-select domain if passed in URL
  useEffect(()=>{
    const domain=params.get("domain")
    if(domain){
      setValue("domain",domain)
    }
  },[params,setValue])

  const nextStep = () => setStep((prev)=>prev+1)
  const prevStep = () => setStep((prev)=>prev-1)

  const onSubmit = async(data:FormData)=>{

    setLoading(true)

    const { error } = await supabase
    .from("internship_applications")
    .insert([
{
...data,
resume_url: resumeUrl,
status: "pending",
payment_status: "unpaid"
}
])

    setLoading(false)

    if(error){
      alert("Submission failed")
      return
    }

    localStorage.setItem(
      "internshipApplication",
      JSON.stringify(data)
    )

    navigate("/internship/payment")
  }

  return (

  <div>

  {/* Progress Indicator */}

  <div className="mb-10">

<div className="flex justify-between text-xs font-semibold mb-3">

<span className={step>=1 ? "text-primary":"text-muted-foreground"}>
Basic Info
</span>

<span className={step>=2 ? "text-primary":"text-muted-foreground"}>
Domain
</span>

<span className={step>=3 ? "text-primary":"text-muted-foreground"}>
Review
</span>

</div>

<div className="w-full h-2 bg-muted rounded-full overflow-hidden">

<motion.div
className="h-full bg-gradient-to-r from-primary to-accent"
initial={{width:0}}
animate={{width:`${(step/3)*100}%`}}
transition={{duration:0.4}}
/>

</div>

</div>

<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
  {/* STEP 1 */}

  <AnimatePresence mode="wait">

{step === 1 && (

<motion.div
key="step1"
initial={{opacity:0, x:50}}
animate={{opacity:1, x:0}}
exit={{opacity:0, x:-50}}
transition={{duration:0.3}}
>

  <div>
  <input
  {...register("name")}
  placeholder="Full Name"
  className="w-full border border-border/60 bg-background px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
  />
  <p className="text-xs text-red-500 mt-1">{errors.name?.message}</p>
  </div>

  <div>
  <input
  {...register("email")}
  placeholder="Email Address"
  className="w-full border border-border/60 bg-background px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
  />
  <p className="text-xs text-red-500 mt-1">{errors.email?.message}</p>
  </div>

  <div>
  <input
  {...register("phone")}
  placeholder="Phone Number"
  className="w-full border border-border/60 bg-background px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
  />
  <p className="text-xs text-red-500 mt-1">{errors.phone?.message}</p>
  </div>

  <div>
  <input
  {...register("college")}
  placeholder="College Name"
  className="w-full border border-border/60 bg-background px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
  />
  <p className="text-xs text-red-500 mt-1">{errors.college?.message}</p>
  </div>

  </motion.div>

  )}

  {/* STEP 2 */}

  {step === 2 && (

<motion.div
key="step2"
initial={{opacity:0, x:50}}
animate={{opacity:1, x:0}}
exit={{opacity:0, x:-50}}
transition={{duration:0.3}}
>

  <select
  {...register("domain")}
  className="w-full border border-border/60 bg-background px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
  >
  <option value="">Select Domain</option>
  <option value="web">Full Stack Web Development</option>
  <option value="ai">AI & Machine Learning</option>
  <option value="cyber">Cyber Security</option>
  <option value="data">Data Science</option>
  <option value="mobile">Mobile Development</option>
  <option value="cloud">Cloud Computing</option>
  <option value="uiux">UI / UX Design</option>
  <option value="software">Software Development</option>
  </select>

  <p className="text-xs text-red-500 mt-1">{errors.domain?.message}</p>

  <div className="mt-6">
  <ResumeUpload setResumeUrl={setResumeUrl} />
</div>

  </motion.div>

  )}

  {/* STEP 3 */}

  {step === 3 && (

  <motion.div
  key="step3"
  initial={{opacity:0, x:50}}
  animate={{opacity:1, x:0}}
  exit={{opacity:0, x:-50}}
  transition={{duration:0.3}}
  >

  <p><strong>Name:</strong> {watch("name")}</p>
  <p><strong>Email:</strong> {watch("email")}</p>
  <p><strong>Phone:</strong> {watch("phone")}</p>
  <p><strong>College:</strong> {watch("college")}</p>
  <p><strong>Domain:</strong> {watch("domain")}</p>

  </motion.div>

  )}
  </AnimatePresence>

  {/* Navigation Buttons */}

  <div className="flex justify-between mt-10">

{step > 1 && (
<button
type="button"
onClick={prevStep}
className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition"
>
Back
</button>
)}

{step < 3 && (
<button
type="button"
onClick={nextStep}
className="ml-auto px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:brightness-110 transition"
>
Continue
</button>
)}

{step === 3 && (
<button
type="submit"
disabled={loading}
className="ml-auto px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:brightness-110 transition disabled:opacity-60"
>
{loading ? "Submitting..." : "Continue to Payment"}
</button>
)}

</div>

  </form>

  </div>

  )
}

export default ApplicationForm