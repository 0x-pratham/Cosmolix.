"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Database, Globe, Scale, Cpu, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: ModalProps) {
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cosmolix_policy_agreement');
    if (consent === 'true') {
      setHasAgreed(true);
    }
  }, [isOpen]);

  const handleAgreement = () => {
    localStorage.setItem('cosmolix_policy_agreement', 'true');
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
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0F172A]">Privacy Policy</h2>
                  <p className="text-xs font-sans text-slate-400 uppercase tracking-widest">Effective Date: April 2, 2026</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400">
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 text-slate-600">
              
              {hasAgreed && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3 text-emerald-700 mb-8"
                >
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-bold">You have accepted the terms of this Privacy Policy.</span>
                </motion.div>
              )}

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#0F172A]">Introduction</h3>
                <p className="leading-relaxed text-sm">
                  Cosmolix is committed to protecting the privacy and security of the personal information entrusted to us. This policy outlines our practices regarding the collection, use, and disclosure of personal data in relation to our software development, artificial intelligence research, and cloud-based services.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Database className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">1. Information Collection</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Research & AI Data", desc: "Technical data utilized for the research, design, and fine-tuning of machine learning and deep learning models." },
                    { title: "Service Delivery Data", desc: "Data processed through our SaaS, PaaS, and customized software solutions." },
                    { title: "Recruitment Data", desc: "Personal identifiers collected for the recruitment and deployment of professionals and interns." },
                    { title: "Operational Data", desc: "Administrative information required for IT-enabled services, including data processing and back-office management." }
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
                  <Cpu className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">2. Use of Information</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  We use collected information to fulfill our business objectives, which include software customization, executing government and private sector contracts, providing IT-enabled services, and conducting scientific research.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">3. Data Sharing and Disclosure</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Cosmolix may share necessary data with subcontractors, development centers, and third-party software distributors as required to deliver our services or fulfill contractual obligations.
                </p>
              </section>

              <section className="p-6 bg-blue-50 rounded-3xl border border-blue-100 space-y-4">
                <div className="flex items-center gap-3 text-blue-700">
                  <Scale size={20} />
                  <h3 className="text-lg font-bold">4. Security and User Rights</h3>
                </div>
                <p className="text-sm text-blue-900/70 leading-relaxed">
                  We implement rigorous security benchmarking to protect our digital solutions and proprietary software. Users retain all rights provided under applicable data protection laws regarding their personal identifiers.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-slate-100 flex justify-end bg-white gap-4">
              {hasAgreed ? (
                <div className="flex items-center gap-2 px-6 py-3.5 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-sm border border-emerald-100">
                  <CheckCircle2 size={18} />
                  Policy Accepted
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