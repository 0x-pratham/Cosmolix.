import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts"

const AdminAnalytics = () => {

const [applications,setApplications] = useState<any[]>([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

const loadData = async()=>{

const { data } = await supabase
.from("internship_applications")
.select("*")

setApplications(data || [])
setLoading(false)

}

loadData()

},[])

if(loading){
return <p className="text-muted-foreground">Loading analytics...</p>
}

const total = applications.length
const paid = applications.filter(a=>a.payment_status==="paid").length

const unpaid = applications.filter(
a=>!a.payment_status || a.payment_status==="unpaid"
).length

const revenue = paid * 250
const approved = applications.filter(a=>a.status==="approved").length
const rejected = applications.filter(a=>a.status==="rejected").length
const pending = applications.filter(a=>!a.status || a.status==="pending").length

const domainStats:any = {}

applications.forEach(app=>{
if(!domainStats[app.domain]){
domainStats[app.domain] = 0
}
domainStats[app.domain]++
})

const chartData = Object.keys(domainStats).map(domain=>({
domain,
count: domainStats[domain]
}))

return (

<div className="space-y-10">

<div className="grid grid-cols-2 md:grid-cols-5 gap-6">

<div className="glass-card-hover p-6 text-center">
<p className="text-muted-foreground text-sm">Total Applications</p>
<h3 className="text-3xl font-bold mt-2">{total}</h3>
</div>

<div className="glass-card-hover p-6 text-center">
<p className="text-muted-foreground text-sm">Pending</p>
<h3 className="text-3xl font-bold mt-2">{pending}</h3>
</div>

<div className="glass-card-hover p-6 text-center">
<p className="text-muted-foreground text-sm">Approved</p>
<h3 className="text-3xl font-bold mt-2">{approved}</h3>
</div>

<div className="glass-card-hover p-6 text-center">

<p className="text-muted-foreground text-sm">
Paid Applications
</p>

<h3 className="text-3xl font-bold mt-2">
{paid}
</h3>

</div>

<div className="glass-card-hover p-6 text-center">

<p className="text-muted-foreground text-sm">
Revenue Generated
</p>

<h3 className="text-3xl font-bold mt-2 text-green-600">
₹{revenue}
</h3>

</div>

<div className="glass-card-hover p-6 text-center">
<p className="text-muted-foreground text-sm">Rejected</p>
<h3 className="text-3xl font-bold mt-2">{rejected}</h3>
</div>

</div>

<div className="glass-card-hover p-8">

<h3 className="text-lg font-semibold mb-6">
Applications by Domain
</h3>

<div style={{width:"100%",height:300}}>

<ResponsiveContainer>

<BarChart data={chartData}>

<XAxis dataKey="domain" />

<YAxis />

<Tooltip />

<Bar dataKey="count" radius={[6,6,0,0]} />

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>

)

}

export default AdminAnalytics
