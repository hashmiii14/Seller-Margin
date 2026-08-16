import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';
import { SmartAffiliateCard } from '@/components/monetization/SmartAffiliateCard';

export const metadata: Metadata = {
  title: 'Printify Profit Calculator | Print-on-Demand Margins | Sellrivo',
  description:
    'Free Printify profit calculator. Calculate blank item costs, print provider shipping, Etsy/Shopify fees, and net profit for print-on-demand sellers.',
};

export default function PrintifyProfitCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'Printify Profit Calculator', href: '/printify-profit-calculator' },
        ]}
      />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Printify Profit Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />

      <AdSlot type="leaderboard" />

      <PodCalculator />

      <SmartAffiliateCard partnerId="printify" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How to Calculate Printify POD Profit Margins (2026)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Printify sellers must carefully balance blank garment costs (e.g. Bella+Canvas 3001, Gildan 18000), print provider shipping, marketplace transaction fees (Etsy 6.5%, Shopify 2.9%), and advertising. A healthy POD net margin ranges between <strong>25% and 40%</strong>.
        </p>
      </section>
    </div>
  );
}
