"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import CookiePolicyModal from './CookiePolicyModal';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cosmolix_cookie_consent');
    if (!consent) {
      // Professional delay before appearing
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cosmolix_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cosmolix_cookie_consent', 'false');
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>

        {isVisible && !isModalOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }} // Slides down from top
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-8 left-8 right-8 z-[140] flex justify-center pointer-events-none"
          >
            <div className="w-full max-w-5xl bg-[#0F172A] text-white p-5 md:p-6 rounded-[2rem] shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto backdrop-blur-xl bg-opacity-95">
              <div className="flex items-center gap-5 ml-2">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Cookie size={20} />
                </div>
                <div className="max-w-2xl">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-1">Cookie Governance</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                    Cosmolix utilizes proprietary identifiers to optimize our digital ecosystems and AI research. 
                    Acceptance ensures a high-fidelity experience aligned with our professional standards.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto mr-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2.5 text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Preferences
                </button>
                <button 
                  onClick={handleDecline}
                  className="px-6 py-2.5 text-[11px] font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all uppercase tracking-wider"
                >
                  Decline
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="px-8 py-2.5 text-[11px] font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-lg shadow-blue-600/20 uppercase tracking-wider"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookiePolicyModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          const finalConsent = localStorage.getItem('cosmolix_cookie_consent');
          if (finalConsent) {
            setIsVisible(false);
          }
        }} 
      />
    </>
  );
}
