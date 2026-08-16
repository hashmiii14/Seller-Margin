import React from 'react';
import type { Metadata } from 'next';
import { AmazonFbaCalculator } from '@/components/calculators/AmazonFbaCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Amazon FBA Fee Calculator | Referral & Fulfillment Fee Breakdown | SellerMargin',
  description: 'Break down Amazon referral fees (15%), FBA pick & pack fulfillment fees, monthly storage, and customer returns allowance.',
};

export default function AmazonFbaFeeCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Amazon FBA Fee Calculator', href: '/amazon-fba-fee-calculator' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Amazon FBA Fee Breakdown Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Get a line-by-line breakdown of Amazon selling costs before sourcing inventory.
        </p>
      </div>

      <AmazonFbaCalculator />
    </div>
  );
}
