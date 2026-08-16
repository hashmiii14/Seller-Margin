'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('sellrivo_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sellrivo_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sellrivo_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-4 rounded-2xl bg-slate-900/95 text-white backdrop-blur-md border border-slate-800 shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-brand-400 font-bold text-sm">
          <ShieldCheck className="w-4 h-4" /> Privacy & Cookie Consent
        </div>
        <button
          onClick={handleDecline}
          className="text-slate-400 hover:text-slate-200 transition-colors p-1"
          aria-label="Close cookie consent"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        Sellrivo uses essential cookies to save your calculation preferences and deliver personalized AdSense ads & affiliate content. Read our{' '}
        <Link href="/privacy-policy" className="text-brand-400 hover:underline">
          Privacy Policy
        </Link>.
      </p>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-3 rounded-lg bg-brand-500 hover:bg-brand-600 font-bold text-xs text-white transition-colors text-center"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-slate-300 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
};
