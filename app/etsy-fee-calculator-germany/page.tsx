import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Etsy Fee Calculator Germany (2026 EUR €) | Sellrivo',
  description:
    'Calculate exact Etsy selling fees, German payment processing rates (4% + €0.30), VAT, shipping, and net profit margins in EUR (€).',
};

export default function EtsyFeeCalculatorGermanyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Etsy Fee Calculator Germany', href: '/etsy-fee-calculator-germany' }]} />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Etsy Fee Calculator Germany (EUR €)',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Any',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
          },
        }}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Etsy Fee Calculator Germany (2026 EUR €)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Calculate your exact Etsy seller fees in Germany. Incorporates official 2026 Etsy Payments rates for Germany (4% + €0.30), 6.5% transaction fee, listing fees, and shipping costs in Euros (€).
        </p>
      </div>

      <EtsyCalculator initialCountry="DE" initialParams={{ currency: 'EUR', sellingPrice: 29.99, productCost: 8.0, shippingCost: 4.5, shippingCharged: 4.5 }} />

      <AdSlot type="leaderboard" />

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 text-slate-700 dark:text-slate-300 text-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          How Etsy Fees Work for German Sellers (EU Regulations & Rates)
        </h2>
        <p>
          Selling on Etsy from Germany involves specific localized payment processing structures:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Etsy Payments Germany</strong>: 4.0% + €0.30 per transaction.</li>
          <li><strong>Listing Fee</strong>: $0.20 USD (approx €0.18 EUR) per item.</li>
          <li><strong>Transaction Fee</strong>: 6.5% of retail price + shipping collected.</li>
          <li><strong>Offsite Ads (Optional)</strong>: 15% for sellers under $10,000 annual sales.</li>
        </ul>
      </div>
    </div>
  );
}
