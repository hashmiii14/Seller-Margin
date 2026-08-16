import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Etsy Offsite Ads Fee Calculator 2026 (12% vs 15%) | Sellrivo',
  description:
    'Free Etsy Offsite Ads calculator. Calculate the exact profit impact when Etsy auto-promotes your listing on Google, Facebook, Instagram, and Pinterest.',
};

export default function EtsyOffsiteAdsCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'Etsy Offsite Ads Fee Calculator', href: '/etsy-offsite-ads-calculator' },
        ]}
      />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Etsy Offsite Ads Fee Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />

      <AdSlot type="leaderboard" />

      {/* Pre-configured with Offsite Ads enabled */}
      <EtsyCalculator initialParams={{ offsiteAdsEnabled: true, offsiteAdsRate: 15 }} />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How Etsy Offsite Ads Work & Fee Rules (2026)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Etsy advertises listings on external web channels (Google Search, Facebook, Instagram, Pinterest, Bing). If a buyer clicks an offsite ad and purchases from your shop within 30 days, Etsy charges an additional fee:
        </p>
        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2">
          <li><strong>Shops under $10,000 USD/year:</strong> Optional 15% offsite ad fee per sale.</li>
          <li><strong>Shops over $10,000 USD/year:</strong> Mandatory 12% discounted offsite ad fee.</li>
        </ul>
      </section>
    </div>
  );
}
