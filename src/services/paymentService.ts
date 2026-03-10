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

    handler: function () {

      window.location.href="/internship/success"
    },

    theme: {
      color: "#6366f1"
    }

  }

  const rzp=new window.Razorpay(options)

  rzp.open()
}