declare global {
  interface Window {
    Razorpay: any
  }
}

export const openRazorpayPayment = () => {

  const options = {

    key: "RAZORPAY_KEY_ID",

    amount: 25000,

    currency: "INR",

    name: "Cosmolix Internship",

    description: "Internship Registration",

    handler: async function () {

const application = JSON.parse(
localStorage.getItem("internshipApplication") || "{}"
)

if(application?.email){

await fetch("/api/update-payment",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
email: application.email
})
})

}

window.location.href="/internship/success"

},

    theme: {
      color: "#6366f1"
    }

  }

  const rzp=new window.Razorpay(options)

  rzp.open()
}