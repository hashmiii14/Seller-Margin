import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Etsy Digital Downloads Profit Calculator 2026 | Sellrivo',
  description:
    'Free Etsy digital downloads calculator. Calculate net profit for digital planners, printables, Canva templates, and SVG files with zero material and zero shipping costs.',
};

export default function EtsyDigitalDownloadsCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'Etsy Digital Downloads Calculator', href: '/etsy-digital-downloads-calculator' },
        ]}
      />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Etsy Digital Downloads Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />

      <AdSlot type="leaderboard" />

      {/* Pre-configured for digital goods: $0 cost of goods, $0 shipping */}
      <EtsyCalculator initialParams={{ productCost: 0, shippingCost: 0, shippingCharged: 0, sellingPrice: 9.99 }} />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          Etsy Digital Products Profit Margin Guide (2026)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Digital downloads (Canva templates, printable art, digital planners, spreadsheet tools) offer incredible <strong>85%–95% net profit margins</strong> because physical manufacturing and shipping costs are zero. Etsy still deducts the standard $0.20 listing fee, 6.5% transaction fee, and payment processing fees.
        </p>
      </section>
    </div>
  );
}
