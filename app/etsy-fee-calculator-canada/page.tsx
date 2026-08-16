import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { HelpCircle } from 'lucide-react';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Canada Etsy Fee Calculator 2026 (CAD $) | Sellrivo',
  description:
    'Free Canadian Etsy fee calculator. Calculate 3.0% + CA$0.25 Etsy Payments processing rates, 6.5% transaction fees, and net seller profit in CAD.',
};

export default function EtsyFeeCalculatorCanadaPage() {
  const faqs = [
    {
      question: 'What are Etsy payment processing fees in Canada?',
      answer:
        'In Canada, Etsy Payments processing rates are 3.0% + CA$0.25 CAD per transaction.',
    },
    {
      question: 'Does Etsy charge GST/HST on Canadian seller fees?',
      answer:
        'Yes, Etsy automatically collects applicable Canadian GST/HST/PST on seller fees based on your province.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'Canada Etsy Fee Calculator', href: '/etsy-fee-calculator-canada' },
        ]}
      />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Canada Etsy Fee Calculator 2026',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
        }}
      />
      <JsonLd type="FAQPage" data={{ faqs }} />

      <AdSlot type="leaderboard" />

      <EtsyCalculator initialCountry="Canada" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          Canadian Etsy Seller Fee & Profit Calculation (2026)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Accurately calculate net CAD $ profit for Canadian Etsy sellers. Incorporates official 2026 Canadian payment processing rates (<strong>3.0% + CA$0.25 CAD</strong>), 6.5% transaction fees, and shipping deductions.
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" /> Canadian Seller FAQs
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{faq.question}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
