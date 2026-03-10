import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useNavigate } from "react-router-dom"
import AdminAnalytics from "@/components/admin/AdminAnalytics"

const AdminApplications = () => {

  const navigate = useNavigate()

  const [applications,setApplications] = useState<any[]>([])
  const [search,setSearch] = useState("")
  const [domainFilter,setDomainFilter] = useState("")
  const [statusFilter,setStatusFilter] = useState("")

  const logout = async () => {
    await supabase.auth.signOut()
    navigate("/admin/login")
  }

  const loadApplications = async () => {

    const { data } = await supabase
      .from("internship_applications")
      .select("*")
      .order("created_at",{ascending:false})

    setApplications(data || [])
  }

  useEffect(()=>{
    loadApplications()
  },[])

  const updateStatus = async (id: string, status: string) => {

  await supabase
    .from("internship_applications")
    .update({ status })
    .eq("id", id)

  await loadApplications()
}

  const exportCSV = () => {

  const headers = ["Name","Email","Domain","Status"]

  const rows = applications.map(app => [
    app.name,
    app.email,
    app.domain,
    app.status
  ])

  const csvContent = [
    headers.join(","),
    ...rows.map(r => r.join(","))
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv" })

  const url = window.URL.createObjectURL(blob)

  const a = document.createElement("a")

  a.href = url
  a.download = "applications.csv"
  a.click()
}

  const filtered = applications.filter(app => {

  const matchesSearch =
    app.name.toLowerCase().includes(search.toLowerCase()) ||
    app.email.toLowerCase().includes(search.toLowerCase())

  const matchesDomain =
    domainFilter === "" || app.domain === domainFilter

  const matchesStatus =
    statusFilter === "" || app.status === statusFilter

  return matchesSearch && matchesDomain && matchesStatus

})

  return (

    <main className="pt-24">

      <div className="container mx-auto px-6">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>
        <div className="mt-10">
  <AdminAnalytics />
</div>

<h2 className="text-2xl font-semibold mt-12 mb-6">
Applications
</h2>
        <div className="flex flex-wrap gap-4 mb-6">

<input
  placeholder="Search applicants..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  className="border p-3 rounded w-full max-w-sm"
/>

<select
  value={domainFilter}
  onChange={(e)=>setDomainFilter(e.target.value)}
  className="border p-3 rounded"
>

<option value="">All Domains</option>
<option value="web">Full Stack Web Development </option>
<option value="ai">Artificial Intelligence & Machine Learning</option>
<option value="cyber">Cyber Security & Ethical Hacking</option>
<option value="data">Data Science & Analytics</option>
<option value="mobile">Mobile App Development</option>
<option value="cloud">Cloud Computing & DevOps</option>
<option value="uiux">UI/UX Design</option>
<option value="soft">Software Development</option>

</select>

<select
  value={statusFilter}
  onChange={(e)=>setStatusFilter(e.target.value)}
  className="border p-3 rounded"
>

<option value="">All Status</option>
<option value="pending">Pending</option>
<option value="approved">Approved</option>
<option value="rejected">Rejected</option>

</select>

<button
  onClick={exportCSV}
  className="bg-primary text-white px-4 py-2 rounded"
>
Export CSV
</button>

</div>
        <div className="overflow-x-auto mt-4">

        <table className="w-full border">

          <thead>

            <tr className="bg-muted">

              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Domain</th>
              <th className="p-3 text-left">Resume</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map(app=>(
              <tr key={app.id} className="border-t">

                <td className="p-3">{app.name}</td>

                <td className="p-3">{app.email}</td>

                <td className="p-3">{app.domain}</td>

                <td className="p-3">
                  {app.resume_url ? (
                    <a
                      href={app.resume_url}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      View Resume
                    </a>
                  ) : "—"}
                </td>

                <td className="p-3 capitalize">
                  {app.status || "pending"}
                </td>

                <td className="p-3 space-x-2">

                  <button
                    onClick={()=>updateStatus(app.id,"approved")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={()=>updateStatus(app.id,"rejected")}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        </div>

        </div>

    </main>
  )
}

export default AdminApplications