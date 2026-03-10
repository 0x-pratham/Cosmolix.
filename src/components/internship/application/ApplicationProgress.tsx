import { CheckCircle2 } from "lucide-react"

interface Props {
status: string
}

const steps = [
{ key: "submitted", label: "Application Submitted" },
{ key: "pending", label: "Under Review" },
{ key: "approved", label: "Approved" },
{ key: "rejected", label: "Rejected" }
]

const ApplicationProgress = ({ status }: Props) => {

const currentIndex = steps.findIndex(s => s.key === status)

return (

<div className="mt-4 space-y-4">

{steps.map((step, i) => {

const completed = i <= currentIndex

return (

<div key={step.key} className="flex items-center gap-3">

<div className={`w-6 h-6 rounded-full flex items-center justify-center border

${completed
? "bg-primary text-white border-primary"
: "bg-background border-border"}

`}>

{completed ? <CheckCircle2 size={14}/> : i+1}

</div>

<p className={`text-sm

${completed ? "text-foreground font-medium" : "text-muted-foreground"}

`}>

{step.label}

</p>

</div>

)

})}

</div>

)

}

export default ApplicationProgress
