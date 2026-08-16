import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';
import { SmartAffiliateCard } from '@/components/monetization/SmartAffiliateCard';

export const metadata: Metadata = {
  title: 'Gelato Profit Calculator | Local Print-on-Demand Fees | Sellrivo',
  description:
    'Free Gelato profit calculator. Calculate local print production costs, global shipping, store transaction fees, and net profit for print-on-demand sellers.',
};

export default function GelatoProfitCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'Gelato Profit Calculator', href: '/gelato-profit-calculator' },
        ]}
      />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Gelato Profit Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />

      <AdSlot type="leaderboard" />

      <PodCalculator />

      <SmartAffiliateCard partnerId="gelato" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          Gelato Print-on-Demand Profit & Margin Analysis
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Gelato prints locally across 32 countries to reduce international shipping costs and shipping times for apparel, wall art, and mugs. Calculate your exact net profit margin before launching new custom print lines.
        </p>
      </section>
    </div>
  );
}
