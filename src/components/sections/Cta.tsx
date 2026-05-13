"use client";
import { useRef, useState, useEffect } from 'react'
import { Sparkles, Send, ShieldCheck, Cpu } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion'
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import PrivacyPolicyModal from '../legal/PrivacyPolicyModal';
import TermsModal from '../legal/TermsModal';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  legalConsent: boolean;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 }
  }
};

const orbVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 360],
    transition: { duration: 20, repeat: Infinity, ease: "linear" }
  }
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const AnimatedText = ({ text }: { text: string }) => (
  <span className="inline-block py-1">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={letterVariants}
        className="inline-block"
        style={{ whiteSpace: "pre" }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const FormField = ({ label, register, error, placeholder, type = "text", isTextarea = false }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const Component = isTextarea ? "textarea" : "input";
  const { onBlur: formOnBlur, ...restRegister } = register;

  return (
    <div className="relative w-full group">
      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">
        {label}
      </label>

      <div className="relative">
        <AnimatePresence>
          {isFocused && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -inset-2 border border-blue-600/20 rounded-xl pointer-events-none z-0"
              />
              <motion.div
                initial={{ height: 0 }} animate={{ height: '100%' }}
                className="absolute -left-1 top-0 w-[2px] bg-blue-600/40"
              />
            </>
          )}
        </AnimatePresence>

        <Component
          {...restRegister}
          onFocus={() => setIsFocused(true)}
          onBlur={(e: any) => {
            formOnBlur(e);
            setIsFocused(false);
          }}
          type={type}
          placeholder={placeholder}
          className={`
            relative z-10 w-full bg-white border border-slate-200 rounded-xl px-5 py-3 
            text-slate-900 text-sm outline-none transition-all duration-500
            focus:border-blue-600/40 focus:shadow-lg focus:shadow-blue-900/5
            ${error ? "border-red-500" : ""}
            ${isTextarea ? "min-h-[120px] resize-none" : ""}
          `}
        />
      </div>
      {error && <span className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-wider">{error.message}</span>}
    </div>
  );
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
    mode: "onChange"
  });

  // Synchronize both legal agreements with local storage
  useEffect(() => {
    const privacyConsent = localStorage.getItem('cosmolix_policy_agreement') === 'true';
    const termsConsent = localStorage.getItem('cosmolix_terms_agreement') === 'true';

    if (privacyConsent && termsConsent) {
      setValue("legalConsent", true);
    } else {
      setValue("legalConsent", false);
    }
  }, [isPrivacyOpen, isTermsOpen, setValue]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const onSubmit = async (data: FormData) => {
    const policyAgreed = localStorage.getItem('cosmolix_policy_agreement') === 'true';
    const termsAgreed = localStorage.getItem('cosmolix_terms_agreement') === 'true';

    if (!policyAgreed) {
      setIsPrivacyOpen(true);
      toast.error("Acknowledgement of the Privacy Policy is required.");
      return;
    }

    if (!termsAgreed) {
      setIsTermsOpen(true);
      toast.error("Acknowledgement of the Terms and Conditions is required.");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Processing your inquiry...");

    try {
      const response = await fetch('/api/transmit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          policy_agreed: true,
          terms_agreed: true
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message successfully received, We usually reply within 24 hours ", { id: loadingToast });
        reset();
      } else {
        throw new Error(result.error || "System error occurred");
      }
    } catch (error) {
      toast.error("Failed to process request. Please verify your connection.", { id: loadingToast });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-10 lg:py-20 bg-[#FAFAF8] overflow-hidden">
      <Toaster position="bottom-right" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="contact-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#2563EB" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>

          <div className="mb-16 lg:mb-24 text-left">
            <motion.div variants={badgeVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 mb-8">
              <Sparkles size={14} className="text-blue-600 animate-pulse" />
              <span className="text-[10px] font-black text-blue-600 tracking-[0.25em] uppercase">Inquiry Portal</span>
            </motion.div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter">
              <AnimatedText text="Establish a Professional " />
              <span className="italic text-blue-600 inline-block px-2 py-1">Partnership</span>
            </h2>

            <motion.p variants={letterVariants} className="text-slate-500 text-xl max-w-4xl mt-4 font-medium">
              Consult with our engineering division to discuss project architecture and strategic deployment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative flex justify-center items-center py-10">
              <motion.div variants={orbVariants} animate="animate" style={{ rotate: orbRotate }} className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 blur-[80px] opacity-20 absolute" />
              <motion.div className="relative z-10 p-10 bg-[#0F172A] border border-slate-800 rounded-[2.5rem] shadow-2xl max-w-sm text-center">
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Let’s Work <br /><span className="italic text-blue-400">Together.</span> 🤝</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">Our teams are available for technical consultation and professional collaboration.</p>
                <div className="pt-6 border-t border-slate-800 space-y-4">
                  <div className="flex items-center gap-3 text-slate-500 text-left"><ShieldCheck size={16} className="text-blue-500/50" /><span className="text-[9px] font-bold uppercase tracking-widest">Verified Security</span></div>
                  <div className="flex items-center gap-3 text-slate-500 text-left"><Cpu size={16} className="text-blue-500/50" /><span className="text-[9px] font-bold uppercase tracking-widest">Advanced Solutions</span></div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.form onSubmit={handleSubmit(onSubmit)} className="bg-white/40 backdrop-blur-md border border-slate-200 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="First Name" placeholder="Legal first name" register={register("firstName", { required: "Name is required" })} error={errors.firstName} />
                  <FormField label="Last Name" placeholder="Legal last name" register={register("lastName")} />
                </div>
                <FormField label="Email Address" type="email" placeholder="official@domain.com" register={register("email", { required: "Email is required" })} error={errors.email} />
                <FormField label="Message" isTextarea={true} placeholder="Please detail your requirements or strategic objectives" register={register("message", { required: "Message is required" })} error={errors.message} />

                <div className={`flex items-start gap-3 p-4 rounded-2xl border transition-all ${errors.legalConsent ? 'bg-red-50 border-red-100' : 'bg-blue-50/50 border-blue-100'}`}>
                  <input
                    type="checkbox"
                    id="contact-consent"
                    {...register("legalConsent", { required: "Acknowledgement is mandatory" })}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="contact-consent" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer">
                    I acknowledge that I have read and agree to the
                    <button type="button" onClick={() => setIsPrivacyOpen(true)} className="text-blue-600 font-bold mx-1 hover:underline">
                      Privacy Policy
                    </button>
                    and the
                    <button type="button" onClick={() => setIsTermsOpen(true)} className="text-blue-600 font-bold mx-1 hover:underline">
                      Terms and Conditions
                    </button>
                    regarding the processing of personal data.
                  </label>
                </div>
                {errors.legalConsent && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-wider">{errors.legalConsent.message}</p>}

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className={`group w-full flex items-center justify-between pl-8 pr-3 py-3 rounded-2xl bg-[#0F172A] text-white font-bold text-xs uppercase tracking-widest overflow-hidden relative ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10">{isSubmitting ? "Processing..." : "Send Message"}</span>
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                    <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                  </div>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Legal Governance Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </section>
  );
}