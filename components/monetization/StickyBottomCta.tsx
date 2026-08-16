'use client';

import React, { useState } from 'react';
import { getAffiliatePartners } from '@/lib/config/affiliates';
import { ExternalLink, X, Sparkles } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export const StickyBottomCta: React.FC = () => {
  const [dismissed, setDismissed] = useState<boolean>(false);
  const partners = getAffiliatePartners();
  const printify = partners.printify;

  if (dismissed || !printify) return null;

  const handleClick = () => {
    trackEvent('sticky_cta_click', { partnerId: 'printify' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-900/95 text-white border-t border-slate-800 backdrop-blur-md shadow-2xl animate-in slide-in-from-bottom-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-xs shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">
              {printify.name}: <span className="font-normal text-slate-300">{printify.tagline}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={printify.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="py-1.5 px-3 rounded-lg bg-brand-500 hover:bg-brand-600 font-bold text-xs text-white flex items-center gap-1 transition-colors"
          >
            {printify.ctaText} <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss sticky CTA"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
