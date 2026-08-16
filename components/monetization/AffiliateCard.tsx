'use client';

import React from 'react';
import { getAffiliatePartners, AFFILIATE_DISCLAIMER_TEXT } from '@/lib/config/affiliates';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Sparkles } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export const AffiliateDisclosure: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-3 mt-4 ${className || ''}`}>
      {AFFILIATE_DISCLAIMER_TEXT}
    </div>
  );
};

export const AffiliateCard: React.FC<{ partnerId: 'printify' | 'gelato' }> = ({ partnerId }) => {
  const partners = getAffiliatePartners();
  const partner = partners[partnerId];

  if (!partner) return null;

  return (
    <div className="rounded-xl border border-brand-200 dark:border-brand-900/50 bg-gradient-to-br from-brand-50/40 to-white dark:from-brand-950/20 dark:to-slate-900 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-800 dark:text-brand-300">
            <Sparkles className="w-3 h-3" /> {partner.badgeText}
          </span>
          <span className="text-[11px] text-slate-400 font-mono">Sponsored</span>
        </div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{partner.name}</h4>
        <p className="text-xs font-medium text-brand-700 dark:text-brand-300 mt-0.5">{partner.tagline}</p>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{partner.description}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-brand-100 dark:border-brand-900/30">
        <a
          href={partner.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          onClick={() => trackEvent('affiliate_click', { provider: partner.name })}
          className="w-full"
        >
          <Button variant="primary" size="sm" className="w-full gap-2">
            {partner.ctaText} <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export const AffiliateProviderGrid: React.FC = () => {
  return (
    <div className="my-8">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Compare Top Print-on-Demand Suppliers
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          Fulfill your products with zero inventory risk. Connect your store in minutes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AffiliateCard partnerId="printify" />
        <AffiliateCard partnerId="gelato" />
      </div>
      <AffiliateDisclosure />
    </div>
  );
};
