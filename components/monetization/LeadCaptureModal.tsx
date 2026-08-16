'use client';

import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem('sellrivo_lead_email', email);
    setSubmitted(true);
    trackEvent('lead_captured', { email });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">Check Your Inbox!</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We've sent your <strong>Free 2026 Etsy Fee Cheat Sheet & Tax Deductions Checklist</strong> to <strong>{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="py-2.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors shadow-md mt-2"
            >
              Continue Calculating
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block">
                Free Seller Toolkit (2026 PDF)
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 leading-snug">
                Get the Free Etsy Fee Cheat Sheet & Tax Checklist
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Instantly download our printable reference guide featuring fee formulas, country rates, and write-off checklists.
              </p>
            </div>

            <div className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your primary email address..."
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Download className="w-4 h-4" /> Download PDF Checklist Now
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> 100% Free. Zero spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
