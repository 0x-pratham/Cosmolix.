export interface InternshipApplication {
  id: string
  name: string
  email: string
  phone: string
  college: string
  domain: string
  resume_url?: string
  status: "pending" | "approved" | "rejected"
}