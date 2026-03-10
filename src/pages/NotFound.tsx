import { openRazorpayPayment } from "@/services/paymentService"

const InternshipPayment = () => {

  const data = JSON.parse(
    localStorage.getItem("internshipApplication") || "{}"
  )

  return (

    <main className="pt-28">

      <div className="container mx-auto px-6 max-w-md">

        <h1 className="text-3xl font-bold text-center mb-10">
          Complete Registration
        </h1>

        <div className="glass-card-hover p-8">

          <p className="text-muted-foreground">
            Applicant
          </p>

          <h3 className="font-semibold">
            {data.name}
          </h3>

          <div className="mt-6 border-t pt-6">

            <p className="text-muted-foreground">
              Internship Registration Fee
            </p>

            <h2 className="text-3xl font-bold">
              ₹250
            </h2>

          </div>

          <button
            onClick={openRazorpayPayment}
            className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold"
          >
            Pay with Razorpay
          </button>

        </div>

      </div>

    </main>

  )
}

export default InternshipPayment