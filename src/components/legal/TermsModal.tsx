"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Scale, Globe, BookOpen, CheckCircle2, Award } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: ModalProps) {
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const agreement = localStorage.getItem('cosmolix_terms_agreement');
    if (agreement === 'true') {
      setHasAgreed(true);
    }
  }, [isOpen]);

  const handleAgreement = () => {
    localStorage.setItem('cosmolix_terms_agreement', 'true');
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
                  <Scale size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0F172A]">Terms and Conditions</h2>
                  <p className="text-xs font-sans text-slate-400 uppercase tracking-widest">Version: 2026.01.A</p>
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
                  <span className="text-sm font-bold">You have formally accepted these Terms and Conditions.</span>
                </motion.div>
              )}

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#0F172A]">1. Scope of Services</h3>
                <p className="leading-relaxed text-sm">
                  Cosmolix provides a comprehensive range of professional services, including software customization, artificial intelligence model deployment, and cloud-based solutions. By accessing our platform or enrolling in our programs, you agree to comply with the operational standards required for high-fidelity project execution.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">2. Training and Professional Development</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Certification Standards", desc: "Enrollment in training programs, workshops, and certification courses is subject to rigorous merit assessment and project completion requirements." },
                    { title: "Recruitment Protocol", desc: "The recruitment and deployment of professionals and interns are governed by internal selection criteria and professional conduct standards." },
                    { title: "Academic Integrity", desc: "Candidates must provide accurate academic credentials for internship modules and stipend-based engineering tracks." },
                    { title: "Industry Accreditation", desc: "Certifications issued are verified industrial credentials provided upon the successful execution of production-grade modules." }
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
                  <ShieldCheck className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">3. Intellectual Property and Research</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  All scientific findings, algorithms, deep learning models, and proprietary software packages developed or utilized by Cosmolix remain the exclusive intellectual property of the firm. Users may not reproduce, distribute, or deal in our software solutions or research whitepapers without explicit written authorization.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">4. Commercial Terms and Licensing</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Access to customized software services, SaaS, and PaaS delivery models is provided on a subscription or pay-per-use basis. Fees for professional training modules are non-refundable commitments toward the provision of industrial resources and specialized instruction.
                </p>
              </section>

              <section className="p-6 bg-blue-50 rounded-3xl border border-blue-100 space-y-4">
                <div className="flex items-center gap-3 text-blue-700">
                  <Award size={20} />
                  <h3 className="text-lg font-bold">5. Governance and Compliance</h3>
                </div>
                <p className="text-sm text-blue-900/70 leading-relaxed">
                  Cosmolix adheres to standard industrial benchmarks for all IT-enabled services and back-office operations. We maintain the right to terminate access or professional engagements if user conduct fails to meet our security or operational protocols.
                </p>
              </section>
            </div>

            {/* Footer Action */}
            <div className="p-8 border-t border-slate-100 flex justify-end bg-white gap-4">
              {hasAgreed ? (
                <div className="flex items-center gap-2 px-6 py-3.5 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-sm border border-emerald-100">
                  <CheckCircle2 size={18} />
                  Terms Accepted
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