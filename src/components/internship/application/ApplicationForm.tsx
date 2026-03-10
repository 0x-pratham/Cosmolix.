import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

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
    .insert([data])

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

  <div className="flex justify-between mb-10 text-sm font-medium">

  <div className={`flex-1 text-center ${step>=1 ? "text-primary":"text-muted-foreground"}`}>
  Step 1
  </div>

  <div className={`flex-1 text-center ${step>=2 ? "text-primary":"text-muted-foreground"}`}>
  Step 2
  </div>

  <div className={`flex-1 text-center ${step>=3 ? "text-primary":"text-muted-foreground"}`}>
  Review
  </div>

  </div>

  <form onSubmit={handleSubmit(onSubmit)}>

  {/* STEP 1 */}

  {step === 1 && (

  <div className="grid md:grid-cols-2 gap-6">

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

  </div>

  )}

  {/* STEP 2 */}

  {step === 2 && (

  <div>

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

  </div>

  )}

  {/* STEP 3 */}

  {step === 3 && (

  <div className="space-y-3 text-sm bg-muted/40 p-6 rounded-lg">

  <p><strong>Name:</strong> {watch("name")}</p>
  <p><strong>Email:</strong> {watch("email")}</p>
  <p><strong>Phone:</strong> {watch("phone")}</p>
  <p><strong>College:</strong> {watch("college")}</p>
  <p><strong>Domain:</strong> {watch("domain")}</p>

  </div>

  )}

  {/* Navigation Buttons */}

  <div className="flex justify-between mt-10">

  {step > 1 && (
  <button
  type="button"
  onClick={prevStep}
  className="px-6 py-2 border rounded-lg hover:bg-muted"
  >
  Back
  </button>
  )}

  {step < 3 && (
  <button
  type="button"
  onClick={nextStep}
  className="ml-auto px-6 py-2 bg-primary text-white rounded-lg hover:brightness-110"
  >
  Next
  </button>
  )}

  {step === 3 && (
  <button
  type="submit"
  disabled={loading}
  className="ml-auto px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg"
  >
  {loading ? "Processing..." : "Continue to Payment"}
  </button>
  )}

  </div>

  </form>

  </div>

  )
}

export default ApplicationForm