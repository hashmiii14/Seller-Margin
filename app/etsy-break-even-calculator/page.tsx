import React from 'react';
import type { Metadata } from 'next';
import { BreakEvenCalculator } from '@/components/calculators/BreakEvenCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Etsy Break-Even Calculator | Calculate Minimum Etsy Price | Sellrivo',
  description:
    'Calculate the lowest price you can charge on Etsy without losing money.',
};

export default function EtsyBreakEvenCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ name: 'Etsy Break-Even Calculator', href: '/etsy-break-even-calculator' }]} />
      <BreakEvenCalculator />
    </div>
  );
}
