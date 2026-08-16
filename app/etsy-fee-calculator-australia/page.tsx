import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { HelpCircle } from 'lucide-react';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Australia Etsy Fee Calculator 2026 (AUD $) | Sellrivo',
  description:
    'Free Australian Etsy fee calculator. Calculate 3.0% + A$0.25 Etsy Payments processing rates, 6.5% transaction fees, and net profit in AUD.',
};

export default function EtsyFeeCalculatorAustraliaPage() {
  const faqs = [
    {
      question: 'What are Australian Etsy processing fees?',
      answer:
        'For Australian Etsy shops, processing fees are 3.0% + A$0.25 AUD per order.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'Australia Etsy Fee Calculator', href: '/etsy-fee-calculator-australia' },
        ]}
      />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Australia Etsy Fee Calculator 2026',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
        }}
      />

      <AdSlot type="leaderboard" />

      <EtsyCalculator initialCountry="Australia" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          Australian Etsy Seller Fee Calculator (2026 AUD $)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Determine exact Australian Dollar profit margins after accounting for official 2026 processing fees (<strong>3.0% + A$0.25 AUD</strong>), 6.5% transaction fees, and shipping costs.
        </p>
      </section>
    </div>
  );
}
