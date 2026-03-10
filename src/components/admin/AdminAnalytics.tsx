import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const AdminAnalytics = () => {

  const [stats,setStats] = useState({
    total:0,
    approved:0,
    pending:0,
    revenue:0
  })

  const [domainData,setDomainData] = useState<any[]>([])

  useEffect(()=>{

    const loadAnalytics = async () => {

      const { data } = await supabase
        .from("internship_applications")
        .select("*")

      if(!data) return

      const total = data.length

      const approved = data.filter(d => d.status === "approved").length

      const pending = data.filter(d => d.status === "pending").length

      const revenue = total * 250

      setStats({
        total,
        approved,
        pending,
        revenue
      })

      const domainCounts:any = {}

      data.forEach(app => {

        domainCounts[app.domain] =
          (domainCounts[app.domain] || 0) + 1

      })

      const chartData = Object.keys(domainCounts).map(domain => ({
        domain,
        count:domainCounts[domain]
      }))

      setDomainData(chartData)

    }

    loadAnalytics()

  },[])

  return (

    <div className="space-y-10">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="glass-card-hover p-6 text-center">
          <p>Total Applications</p>
          <h2 className="text-3xl font-bold">{stats.total}</h2>
        </div>

        <div className="glass-card-hover p-6 text-center">
          <p>Approved</p>
          <h2 className="text-3xl font-bold text-green-600">{stats.approved}</h2>
        </div>

        <div className="glass-card-hover p-6 text-center">
          <p>Pending</p>
          <h2 className="text-3xl font-bold text-yellow-500">{stats.pending}</h2>
        </div>

        <div className="glass-card-hover p-6 text-center">
          <p>Revenue</p>
          <h2 className="text-3xl font-bold">₹{stats.revenue}</h2>
        </div>

      </div>

      <div className="glass-card-hover p-8">

        <h3 className="text-xl font-semibold mb-6">
          Domain Popularity
        </h3>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={domainData}>

            <XAxis dataKey="domain" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="count" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}

export default AdminAnalytics