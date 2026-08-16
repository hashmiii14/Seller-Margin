import React from 'react';
import type { Metadata } from 'next';
import { AmazonFbaCalculator } from '@/components/calculators/AmazonFbaCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Amazon FBA Fee Calculator | Referral & Fulfillment Fee Breakdown | Sellrivo',
  description:
    'Calculate exact Amazon FBA fees, category referral percentages, monthly inventory storage charges, and seller net margin.',
};

export default function AmazonFbaFeeCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ name: 'Amazon FBA Fee Calculator', href: '/amazon-fba-fee-calculator' }]} />
      <AmazonFbaCalculator />
    </div>
  );
}
