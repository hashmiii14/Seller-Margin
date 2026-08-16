'use client';

import React, { useState } from 'react';
import { X, Code, Copy, Check } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export interface EmbedWidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  calculatorSlug?: string;
}

export const EmbedWidgetModal: React.FC<EmbedWidgetModalProps> = ({
  isOpen,
  onClose,
  calculatorSlug = 'etsy-profit-calculator',
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const embedCode = `<iframe src="https://www.sellrivo.site/${calculatorSlug}" width="100%" height="700" frameborder="0" style="border:1px solid #e2e8f0;border-radius:16px;" title="Sellrivo Profit Calculator"></iframe><p style="font-size:12px;text-align:center;margin-top:8px;">Powered by <a href="https://www.sellrivo.site" target="_blank" rel="noopener">Sellrivo Seller Calculators</a></p>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent('embed_code_copied', { calculatorSlug });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Code className="w-5 h-5 text-brand-600" /> Embed Calculator on Your Site
          </h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          Copy and paste this HTML snippet into your WordPress blog, Shopify page, or website to give your readers a free interactive seller calculator.
        </p>

        <div className="relative">
          <textarea
            readOnly
            rows={5}
            value={embedCode}
            className="w-full font-mono text-xs p-3 rounded-xl bg-slate-900 text-brand-300 border border-slate-800 focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 py-1.5 px-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>
    </div>
  );
};
