import { supabase } from "@/lib/supabaseClient"

export async function updatePayment(email:string){

await supabase
.from("internship_applications")
.update({ payment_status: "paid" })
.eq("email", email)

}
