"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCcw, AlertCircle, Clock, CreditCard, CheckCircle2, Shield } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RefundPolicyModal({ isOpen, onClose }: ModalProps) {
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const agreement = localStorage.getItem('cosmolix_refund_agreement');
    if (agreement === 'true') {
      setHasAgreed(true);
    }
  }, [isOpen]);

  const handleAgreement = () => {
    localStorage.setItem('cosmolix_refund_agreement', 'true');
    setHasAgreed(true);
    setTimeout(onClose, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-sm"
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-[#FAFAF8]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <RefreshCcw size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0F172A]">Refund & Cancellation</h2>
                  <p className="text-xs font-sans text-slate-400 uppercase tracking-widest">Effective Date: April 2, 2026</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400">
                <X size={24} />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 text-slate-600">
              
              {hasAgreed && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3 text-emerald-700 mb-8"
                >
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-bold">You have acknowledged the Refund and Cancellation terms.</span>
                </motion.div>
              )}

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#0F172A]">1. Policy Objective</h3>
                <p className="leading-relaxed text-sm">
                  At Cosmolix, we maintain high standards for our professional training modules and software services. This policy outlines the conditions under which cancellations are processed and refunds are issued, ensuring transparency in our commercial operations.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">2. Industrial Training & Internships</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Commitment Fee", desc: "The ₹4,999/- fee for the Industrial Internship Program is a one-time professional commitment fee used to allocate industrial resources." },
                    { title: "Non-Refundable Clause", desc: "Fees are non-refundable once the candidate has been granted access to our proprietary training environments or project repositories." },
                    { title: "Cancellation Window", desc: "Enrollment cancellations are only accepted if requested within 24 hours of payment, provided no technical resources have been accessed." },
                    { title: "Merit Track", desc: "Candidates on the stipend-based track who fail to meet professional standards may have their engagement terminated without refund of prior dues." }
                  ].map((item, i) => (
                    <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-sm text-[#0F172A] mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">3. Refund Processing Timeline</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Approved refund requests are processed within **5 to 7 business days**. The actual credit to the user's account may vary depending on the banking institution or the payment gateway (PhonePe/Razorpay) utilized during the transaction.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">4. Software Services & SaaS</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Cancellations for customized software solutions or subscription-based SaaS products must be initiated 15 days prior to the next billing cycle. Refunds for partially utilized subscription periods are not provided unless mandated by specific service-level agreements.
                </p>
              </section>

              <section className="p-6 bg-blue-50 rounded-3xl border border-blue-100 space-y-4">
                <div className="flex items-center gap-3 text-blue-700">
                  <Shield size={20} />
                  <h3 className="text-lg font-bold">5. Dispute Resolution</h3>
                </div>
                <p className="text-sm text-blue-900/70 leading-relaxed">
                  All refund disputes should be formally directed to our support department at **info@cosmolix.co.in**. We adhere to standard industrial benchmarks to ensure fair resolution for both the firm and the client.
                </p>
              </section>
            </div>

            <div className="p-8 border-t border-slate-100 flex justify-end bg-white gap-4">
              {hasAgreed ? (
                <div className="flex items-center gap-2 px-6 py-3.5 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-sm border border-emerald-100">
                  <CheckCircle2 size={18} />
                  Policy Acknowledged
                </div>
              ) : (
                <button 
                  onClick={handleAgreement}
                  className="px-10 py-3.5 bg-[#0F172A] text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10"
                >
                  Agree and Continue
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}