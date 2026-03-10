import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

const ProtectedRoute = ({ children }:any) => {

  const [loading,setLoading] = useState(true)
  const [authenticated,setAuthenticated] = useState(false)

  useEffect(()=>{

    const checkUser = async () => {

      const { data } = await supabase.auth.getSession()

      if(data.session){
        setAuthenticated(true)
      }

      setLoading(false)
    }

    checkUser()

  },[])

  if(loading){
    return <div className="p-10 text-center">Loading...</div>
  }

  if(!authenticated){
    return <Navigate to="/admin/login" />
  }

  return children
}

export default ProtectedRoute