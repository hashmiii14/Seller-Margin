import React from 'react';
import type { Metadata } from 'next';
import { AmazonFbaCalculator } from '@/components/calculators/AmazonFbaCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Amazon FBA Profit Calculator | Estimate FBA Payout | Sellrivo',
  description:
    'Calculate net profit per sale and return on investment for Amazon FBA products.',
};

export default function AmazonFbaProfitCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ name: 'Amazon FBA Profit Calculator', href: '/amazon-fba-profit-calculator' }]} />
      <AmazonFbaCalculator />
    </div>
  );
}
