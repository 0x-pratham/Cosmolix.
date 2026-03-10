import {
  InternshipHero,
  InternshipOverview,
  InternshipTimeline
} from "@/components/internship";
import InternshipProgramInfo from "@/components/internship/InternshipProgramInfo"
import InternshipDomains from "@/components/internship/InternshipDomains"
import InternshipPerks from "@/components/internship/InternshipPerks"
import InternshipApplyCTA from "@/components/internship/InternshipApplyCTA"

const Internship = () => {
  return (
    <main className="pt-24 space-y-4">

      <InternshipHero/>

      <InternshipOverview/>

      <InternshipTimeline/>

      <InternshipDomains/>

      <InternshipPerks/>

      <InternshipProgramInfo/>

      <InternshipApplyCTA/>

    </main>
  )
}

export default Internship