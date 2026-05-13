"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from "react-hook-form";
import {
    CheckCircle2,
    Briefcase,
    ArrowRight,
    ShieldCheck,
    Cpu,
    Database,
    Smartphone,
    Lock,
    Activity,
    Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PrivacyPolicyModal from '../components/legal/PrivacyPolicyModal';
import TermsModal from '../components/legal/TermsModal';

type EnrollmentData = {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    legalConsent: boolean;
};

const DOMAINS = [
    { id: 'fs', name: 'Full Stack Web Development', icon: <Cpu className="text-blue-600" /> },
    { id: 'ai', name: 'Machine Learning & AI', icon: <Activity className="text-blue-600" /> },
    { id: 'cs', name: 'Cybersecurity & Ethical Hacking', icon: <Lock className="text-blue-600" /> },
    { id: 'ma', name: 'Mobile App Development', icon: <Smartphone className="text-blue-600" /> },
    { id: 'iot', name: 'Internet of Things (IoT)', icon: <Users className="text-blue-600" /> },
    { id: 'ds', name: 'Data Science & Analytics', icon: <Database className="text-blue-600" /> },
];

export default function CareersPage() {
    const [selectedDomain, setSelectedDomain] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<EnrollmentData>({
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

    const handleApply = (domainName: string) => {
        setSelectedDomain(domainName);
        setIsModalOpen(true);
    };

    const processPayment = async (data: EnrollmentData) => {
        const policyAgreed = localStorage.getItem('cosmolix_policy_agreement') === 'true';
        const termsAgreed = localStorage.getItem('cosmolix_terms_agreement') === 'true';

        if (!policyAgreed) {
            setIsPrivacyOpen(true);
            return;
        }

        if (!termsAgreed) {
            setIsTermsOpen(true);
            return;
        }

        setIsSubmitting(true);
        const razorpayKey = (import.meta.env.VITE_RZP_KEY as string);

        const options = {
            key: razorpayKey,
            amount: 499900,
            currency: "INR",
            name: "Cosmolix Private Limited",
            description: `Industrial Training - ${selectedDomain}`,
            handler: async function (response: any) {
                try {
                    const payload = {
                        name: data.fullName,
                        email: data.email,
                        phone: data.phone,
                        college: data.college,
                        domain: selectedDomain,
                        paymentId: response.razorpay_payment_id,
                        policy_agreed: true,
                        terms_agreed: true
                    };

                    const res = await fetch('http://localhost:3001/api/internship/apply', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (res.ok) {
                        alert("Enrollment successful. Onboarding documentation has been sent to your email.");
                        setIsModalOpen(false);
                        reset();
                    } else {
                        alert("Submission failed. Please contact our support department.");
                    }
                } catch (error) {
                    console.error("Backend Process Error:", error);
                } finally {
                    setIsSubmitting(false);
                }
            },
            prefill: {
                name: data.fullName,
                email: data.email,
                contact: data.phone
            },
            theme: { color: "#2563EB" }
        };

        const rzp = (window as any).Razorpay(options);
        rzp.open();
    };

    return (
        <div className="bg-[#FAFAF8] min-h-screen pt-32 pb-20 px-8">

            <section id="jobs" className="max-w-7xl mx-auto mb-32">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-[#2563EB] font-bold tracking-widest text-xs uppercase">Opportunities</span>
                        <h2 className="text-5xl font-serif font-bold text-[#0F172A] mt-4 mb-6">Corporate Engineering Teams</h2>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8">
                            In accordance with our core objectives of software development and artificial intelligence research, we are scaling our engineering divisions. Professionals may connect via our recruitment desk for upcoming vacancies.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {['Full Stack Developer', 'AI/ML Specialist', 'Cloud Architect', 'Cybersecurity Lead', 'Product Manager'].map(role => (
                                <div key={role} className="flex items-center gap-2 text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200">
                                    <CheckCircle2 size={18} className="text-[#2563EB]" /> {role}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 bg-white p-10 rounded-[3rem] border border-blue-100 shadow-xl relative overflow-hidden">
                        <Briefcase className="absolute -right-10 -bottom-10 text-blue-50/40 w-64 h-64" />
                        <h3 className="text-2xl font-bold text-[#0F172A] relative z-10">Application Protocol</h3>
                        <p className="text-slate-500 mt-4 relative z-10 leading-relaxed">
                            We are currently processing professional applications through direct recruitment channels while our automated portal is under technical maintenance.
                        </p>
                        <Link to="/#contact" className="mt-8 inline-flex items-center gap-2 text-blue-600 font-bold no-underline group relative z-10">
                            Contact Recruitment Department <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* INDUSTRIAL TRAINING */}
            <section id="internships" className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-blue-600/10 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Industrial Training</span>
                    <h2 className="text-5xl font-serif font-bold text-[#0F172A] mt-6">Industrial Internship Program 2026</h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                        A specialized professional training program focused on software customization and AI research designed for Diploma and Engineering students.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {DOMAINS.map(domain => (
                        <motion.div
                            key={domain.id}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-blue-300 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                {domain.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-4">{domain.name}</h3>
                            {/* <button
                                onClick={() => handleApply(domain.name)}
                                className="w-full py-4 rounded-2xl bg-slate-50 text-[#0F172A] font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                            >
                                Enroll Now <ArrowRight size={16} />
                            </button> */}
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                        <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Program Investment</h4>
                        <p className="text-4xl font-bold text-[#0F172A]">₹4,999/-</p>
                        <p className="text-sm text-slate-500 mt-2">Professional commitment fee for a comprehensive 3-month industrial module.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <ShieldCheck size={16} className="text-blue-600" />
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Accreditation</span>
                        </div>
                        <p className="text-xl font-bold text-[#0F172A]">ISO Certified Certification</p>
                        <p className="text-sm text-slate-500 mt-2">Verified industrial credentials issued upon project completion.</p>
                    </div>
                </div>
            </section>

            {/* ENROLLMENT FORM MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6"
                    >
                        <motion.form
                            onSubmit={handleSubmit(processPayment)}
                            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl overflow-hidden border border-slate-200"
                        >
                            <h2 className="text-2xl font-serif font-bold text-[#0F172A]">Enrollment Form</h2>
                            <p className="text-slate-400 text-xs font-mono mt-2 uppercase tracking-widest">Selected: {selectedDomain}</p>

                            <div className="mt-8 space-y-4">
                                <div>
                                    <input
                                        type="text" placeholder="Full Legal Name"
                                        className={`w-full p-4 rounded-2xl bg-slate-50 border ${errors.fullName ? 'border-red-500' : 'border-slate-100'} focus:bg-white focus:border-blue-600 outline-none transition-all text-sm`}
                                        {...register("fullName", { required: "Name is required" })}
                                    />
                                    {errors.fullName && <p className="text-[10px] text-red-500 font-bold mt-1 ml-2 uppercase">{errors.fullName.message}</p>}
                                </div>

                                <input
                                    type="email" placeholder="Email Address"
                                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 outline-none transition-all text-sm"
                                    {...register("email", { required: "Email is required" })}
                                />
                                <input
                                    type="text" placeholder="Contact Number"
                                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 outline-none transition-all text-sm"
                                    {...register("phone", { required: "Required" })}
                                />
                                <input
                                    type="text" placeholder="Institution Name"
                                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 outline-none transition-all text-sm"
                                    {...register("college", { required: "Required" })}
                                />
                            </div>

                            <div className={`mt-8 flex items-start gap-3 p-4 rounded-2xl border transition-all ${errors.legalConsent ? 'bg-red-50 border-red-100' : 'bg-blue-50/50 border-blue-100'}`}>
                                <input
                                    type="checkbox"
                                    id="consent"
                                    className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                    {...register("legalConsent", { required: "Acknowledgement is mandatory" })}
                                />
                                <label htmlFor="consent" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer">
                                    I acknowledge that I have read and agree to the
                                    <button type="button" onClick={() => setIsPrivacyOpen(true)} className="text-blue-600 font-bold mx-1 hover:underline">
                                        Privacy Policy
                                    </button>
                                    and the
                                    <button type="button" onClick={() => setIsTermsOpen(true)} className="text-blue-600 font-bold mx-1 hover:underline">
                                        Terms and Conditions
                                    </button>
                                    regarding professional training and data processing.
                                </label>
                            </div>
                            {errors.legalConsent && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-wider">{errors.legalConsent.message}</p>}

                            <div className="mt-10 flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-4 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-[2] py-4 bg-[#0F172A] text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/10 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? "Processing..." : "Confirm & Pay ₹4,999"} <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>


            <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        </div>
    );
}