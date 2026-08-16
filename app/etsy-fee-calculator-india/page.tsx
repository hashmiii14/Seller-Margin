import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'India Etsy Fee Calculator 2026 (INR ₹) | Sellrivo',
  description:
    'Free India Etsy fee calculator. Calculate 4.0% + ₹15 INR Etsy Payments processing fees, 6.5% transaction fees, and net profit in Indian Rupees.',
};

export default function EtsyFeeCalculatorIndiaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'India Etsy Fee Calculator', href: '/etsy-fee-calculator-india' },
        ]}
      />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'India Etsy Fee Calculator 2026',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        }}
      />

      <AdSlot type="leaderboard" />

      <EtsyCalculator initialCountry="India" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          Indian Etsy Seller Fee & Profit Calculator (2026 INR ₹)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Calculate net earnings in Indian Rupees (₹) for Indian Etsy sellers exporting handmade goods, jewelry, and apparel globally. Features official <strong>4.0% + ₹15 INR</strong> processing rates and 6.5% transaction fees.
        </p>
      </section>
    </div>
  );
}
