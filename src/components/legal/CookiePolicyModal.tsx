"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, ShieldCheck, PieChart, Settings, CheckCircle2, Lock } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiePolicyModal({ isOpen, onClose }: ModalProps) {
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const agreement = localStorage.getItem('cosmolix_cookie_consent');
    if (agreement === 'true') {
      setHasAgreed(true);
    }
  }, [isOpen]);

  const handleAgreement = () => {
    localStorage.setItem('cosmolix_cookie_consent', 'true');
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
                  <Cookie size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0F172A]">Cookie Policy</h2>
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
                  <span className="text-sm font-bold">Your cookie preferences have been established and saved.</span>
                </motion.div>
              )}

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#0F172A]">1. Policy Overview</h3>
                <p className="leading-relaxed text-sm">
                  Cosmolix utilizes cookies and similar tracking technologies to enhance the functionality of our software services, manage secure authorizations, and optimize our cloud-based infrastructure. This policy details our use of these technologies in alignment with our professional data processing standards.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">2. Essential Technologies</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  These technologies are required for the secure operation of our IT-enabled services and SaaS delivery models. They facilitate user authentication, session management, and the protection of proprietary software environments. Without these, core services such as internship enrollment and professional dashboards cannot function.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <PieChart className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">3. Performance and Analytics</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  In support of our artificial intelligence research and market analysis objectives, we utilize analytical cookies to understand how our platforms are navigated. These identifiers provide technical data that assists in the fine-tuning of machine learning algorithms and the improvement of digital transformation projects.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Settings className="text-slate-400" size={20} />
                  <h3 className="text-lg font-bold text-[#0F172A]">4. Functional and Preference Settings</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  To provide customized software solutions across various industries, we use cookies that remember your professional preferences and service configurations. This allows for a tailored interface during project testing and implementation phases.
                </p>
              </section>

              <section className="p-6 bg-blue-50 rounded-3xl border border-blue-100 space-y-4">
                <div className="flex items-center gap-3 text-blue-700">
                  <Lock size={20} />
                  <h3 className="text-lg font-bold">5. Governance of Preferences</h3>
                </div>
                <p className="text-sm text-blue-900/70 leading-relaxed">
                  Users maintain the right to manage or restrict cookie settings through their browser configurations. However, restricting essential cookies may impact the performance and security of our high-fidelity digital ecosystems.
                </p>
              </section>
            </div>

            {/* Footer Action */}
            <div className="p-8 border-t border-slate-100 flex justify-end bg-white gap-4">
              {hasAgreed ? (
                <div className="flex items-center gap-2 px-6 py-3.5 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-sm border border-emerald-100">
                  <CheckCircle2 size={18} />
                  Preferences Saved
                </div>
              ) : (
                <button 
                  onClick={handleAgreement}
                  className="px-10 py-3.5 bg-[#0F172A] text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10"
                >
                  Accept and Continue
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}