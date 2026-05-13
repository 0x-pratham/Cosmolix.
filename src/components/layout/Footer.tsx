"use client";
import { motion, type Variants } from 'framer-motion';
import {
  ExternalLink,
  GitBranch,
  Globe,
  ArrowRight,
  Lock,
  Cookie,
  Scale,
  RefreshCcw, // Icon for Refund
  MapPin,    // Icon for Address
  Mail       // Icon for Email
} from 'lucide-react';
import { useState } from 'react';
import PrivacyPolicyModal from '../legal/PrivacyPolicyModal';
import TermsModal from '../legal/TermsModal';
import CookiePolicyModal from '../legal/CookiePolicyModal';
import RefundPolicyModal from '../legal/RefundPolicyModal'; // New Modal Import

const socials = [
  { icon: ExternalLink, label: 'LinkedIn', href: 'https://www.linkedin.com/company/cosmolix-pvt-ltd' },
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com/cosmolix' },
  { icon: Globe, label: 'Instagram', href: 'https://www.instagram.com/cosmolix.in' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false); // New state

  return (
    <footer className="relative bg-[#FAFAF8] pt-16 pb-12 overflow-hidden border-t border-slate-200/60">

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="footer-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#2563EB" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-10 items-start"
        >

          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-xl bg-white border-2 border-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/10"
              >
                <span className="font-serif font-black text-[10px] text-[#0F172A]">CX</span>
              </motion.div>
              <span className="font-serif font-bold text-2xl tracking-tighter text-[#0F172A]">
                COSMO<span className="text-blue-600">LIX</span>
              </span>
            </div>

            <p className="text-slate-500 text-base leading-relaxed max-w-sm mb-10 font-medium">
              Architecting high-performance digital ecosystems. We bridge the gap between
              ambitious concepts and global technological scale through precision engineering.
            </p>

            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 mb-10 ">

              <div className="flex items-start gap-4 text-slate-600 max-w-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-600/5 flex items-center justify-center  border border-blue-600/10">
                  <MapPin size={18} className="text-blue-600" />
                </div>
                <div className="text-sm font-medium leading-relaxed">
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                    Registered Office
                  </span>
                  <p className="text-slate-500">
                    GAT NO 198 PLOT NO 165, VRINDAVAN COLONY GOVIND, Ambethan, Khed, <br />
                    Pune, Maharashtra 410501, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-slate-600 mt-5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/5 flex items-center justify-center border border-blue-600/10">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div className="text-sm font-medium leading-relaxed">
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                    Official Mail
                  </span>
                  <a
                    href="mailto:info@cosmolix.co.in"
                    className="text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    info@cosmolix.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <span className="font-mono text-[10px] font-black text-blue-600 tracking-[0.3em] uppercase opacity-60">
                Compliance
              </span>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">

                <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => setIsPrivacyOpen(true)}
                    className="group flex items-center gap-3 text-sm font-semibold text-slate-600 no-underline transition-colors hover:text-blue-600 bg-transparent border-none p-0 cursor-pointer"
                  >
                    <Lock size={16} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                    Privacy Policy
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-300" />
                  </button>
                </motion.li>

                <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => setIsTermsOpen(true)}
                    className="group flex items-center gap-3 text-sm font-semibold text-slate-600 no-underline transition-colors hover:text-blue-600 bg-transparent border-none p-0 cursor-pointer"
                  >
                    <Scale size={16} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                    Terms of Service
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-300" />
                  </button>
                </motion.li>

                {/* Refund Policy Trigger */}
                <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => setIsRefundOpen(true)}
                    className="group flex items-center gap-3 text-sm font-semibold text-slate-600 no-underline transition-colors hover:text-blue-600 bg-transparent border-none p-0 cursor-pointer"
                  >
                    <RefreshCcw size={16} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                    Refund Policy
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-300" />
                  </button>
                </motion.li>

                <motion.li variants={itemVariants} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => setIsCookieOpen(true)}
                    className="group flex items-center gap-3 text-sm font-semibold text-slate-600 no-underline transition-colors hover:text-blue-600 bg-transparent border-none p-0 cursor-pointer"
                  >
                    <Cookie size={16} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                    Cookie Policy
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-300" />
                  </button>
                </motion.li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <span className="font-mono text-[10px] font-black text-blue-600 tracking-[0.3em] uppercase opacity-60">
                Network
              </span>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {socials.map((social) => (
                  <motion.li key={social.label} variants={itemVariants} whileHover={{ x: 5 }}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm font-semibold text-slate-600 no-underline transition-colors hover:text-blue-600"
                    >
                      <social.icon size={16} strokeWidth={2.5} className="text-slate-300 group-hover:text-blue-400 " />
                      {social.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-slate-200/60 text-center">
          <p className="pt-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] m-0">
            © 2026 COSMOLIX PRIVATE LIMITED
          </p>
        </div>
      </div>

      {/* Legal Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <CookiePolicyModal isOpen={isCookieOpen} onClose={() => setIsCookieOpen(false)} />
      <RefundPolicyModal isOpen={isRefundOpen} onClose={() => setIsRefundOpen(false)} />
    </footer>
  );
}