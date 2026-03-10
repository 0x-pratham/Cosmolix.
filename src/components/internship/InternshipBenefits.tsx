import { Award, Briefcase, Users, GitBranch } from "lucide-react"

const benefits = [
  {
    icon: Briefcase,
    title:"Real Industry Projects",
    desc:"Work on production systems used by real users."
  },
  {
    icon: Users,
    title:"Mentorship",
    desc:"Direct guidance from experienced engineers."
  },
  {
    icon: Award,
    title:"Internship Certificate",
    desc:"Verified certificate from Cosmolix."
  },
  {
    icon: GitBranch,
    title:"Portfolio Development",
    desc:"Build GitHub projects that showcase your skills."
  }
]

const InternshipBenefits = () => {
  return (
    <section className="section-spacing relative">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          What You'll Gain
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {benefits.map((b,i)=>{

            const Icon=b.icon

            return(
              <div key={i} className="glass-card-hover p-6 text-center">

                <Icon className="w-10 h-10 mx-auto text-primary mb-4"/>

                <h3 className="font-semibold">
                  {b.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {b.desc}
                </p>

              </div>
            )

          })}

        </div>

      </div>

    </section>
  )
}

export default InternshipBenefits