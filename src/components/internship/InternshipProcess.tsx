const steps = [
  "Apply for Internship",
  "Application Review",
  "Start Training",
  "Work on Projects",
  "Receive Certification"
]

const InternshipProcess = () => {
  return (
    <section className="section-spacing relative">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Internship Process
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">

          {steps.map((step,i)=>(
            <div key={i} className="flex flex-col items-center">

              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {i+1}
              </div>

              <p className="mt-4 text-sm max-w-[140px]">
                {step}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default InternshipProcess