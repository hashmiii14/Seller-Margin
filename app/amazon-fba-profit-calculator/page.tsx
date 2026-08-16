import React from 'react';
import type { Metadata } from 'next';
import { AmazonFbaCalculator } from '@/components/calculators/AmazonFbaCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Amazon FBA Profit Calculator | Estimate FBA Payout | SellerMargin',
  description: 'Calculate net Amazon FBA payout after referral fees, fulfillment weight fees, storage costs, and PPC ad spend.',
};

export default function AmazonFbaProfitCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Amazon FBA Profit Calculator', href: '/amazon-fba-profit-calculator' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Amazon FBA Net Profit Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Estimate your net unit payout and margin percentage on Amazon FBA.
        </p>
      </div>

      <AmazonFbaCalculator />
    </div>
  );
}
