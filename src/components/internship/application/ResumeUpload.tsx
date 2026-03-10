import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

const ResumeUpload = ({setResumeUrl}:any) => {

  const [uploading,setUploading]=useState(false)

  const uploadResume = async(e:any)=>{

    const file=e.target.files[0]

    if(!file) return

    setUploading(true)

    const filePath=`resumes/${Date.now()}_${file.name}`

    const { error } = await supabase.storage
      .from("resumes")
      .upload(filePath,file)

    if(error){
      alert("Upload failed")
      setUploading(false)
      return
    }

    const { data } = supabase.storage
      .from("resumes")
      .getPublicUrl(filePath)

    setResumeUrl(data.publicUrl)

    setUploading(false)
  }

  return(

    <div>

      <label className="block mb-2 font-medium">
        Upload Resume
      </label>

      <input
        type="file"
        accept=".pdf"
        onChange={uploadResume}
        className="w-full border p-3 rounded-lg"
      />

      {uploading && (
        <p className="text-sm mt-2">Uploading...</p>
      )}

    </div>
  )
}

export default ResumeUpload