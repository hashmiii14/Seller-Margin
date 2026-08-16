'use client';

import React from 'react';
import { getAffiliatePartners, AFFILIATE_DISCLAIMER_TEXT } from '@/lib/config/affiliates';
import { ExternalLink, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export interface SmartAffiliateCardProps {
  partnerId?: string;
  margin?: number;
  calculatorType?: 'etsy' | 'pod' | 'fba' | 'general';
  className?: string;
}

export const SmartAffiliateCard: React.FC<SmartAffiliateCardProps> = ({
  partnerId,
  margin,
  calculatorType = 'etsy',
  className = '',
}) => {
  const partners = getAffiliatePartners();

  // Dynamic selection logic
  let targetPartner = partnerId ? partners[partnerId] : null;

  if (!targetPartner) {
    if (margin !== undefined && margin < 20) {
      targetPartner = partners.shopify;
    } else if (calculatorType === 'pod') {
      targetPartner = partners.printify;
    } else if (calculatorType === 'etsy') {
      targetPartner = partners.everbee;
    } else {
      targetPartner = partners.pirateship;
    }
  }

  if (!targetPartner) return null;

  const handleClick = () => {
    trackEvent('affiliate_click', { partnerId: targetPartner.id, calculatorType });
  };

  return (
    <div className={`p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950 text-white border border-slate-800 shadow-xl space-y-3 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-400 text-[11px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3 h-3" /> {targetPartner.badgeText}
        </div>
        <span className="text-[10px] text-slate-400">Partner Offer</span>
      </div>

      <div className="space-y-1">
        <h4 className="font-black text-base text-white flex items-center gap-2">
          {targetPartner.name} — <span className="text-brand-300 font-medium text-xs">{targetPartner.tagline}</span>
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {targetPartner.description}
        </p>
      </div>

      <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-800/80">
        <span className="text-[10px] text-slate-400 line-clamp-1">100% Free Trial Available</span>
        <a
          href={targetPartner.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 font-bold text-xs text-white transition-all shadow-md shrink-0"
        >
          {targetPartner.ctaText} <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
