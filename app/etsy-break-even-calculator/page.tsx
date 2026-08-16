import React from 'react';
import type { Metadata } from 'next';
import { BreakEvenCalculator } from '@/components/calculators/BreakEvenCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Etsy Break-Even Calculator | Calculate Minimum Etsy Price | SellerMargin',
  description: 'Find your minimum required Etsy selling price to break even after material costs, listing fees, transaction fees, and shipping.',
};

export default function EtsyBreakEvenCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Etsy Break-Even Calculator', href: '/etsy-break-even-calculator' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Etsy Break-Even Price Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Calculate the exact price floor required to avoid taking a loss on your Etsy handmade or POD listings.
        </p>
      </div>

      <BreakEvenCalculator />
    </div>
  );
}
