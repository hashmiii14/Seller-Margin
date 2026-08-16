import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'POD Pricing Calculator | How to Price Print-on-Demand Products | Sellrivo',
  description:
    'Calculate the right retail price for custom t-shirts, hoodies, mugs, and wall art.',
};

export default function PodPricingCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ name: 'POD Pricing Calculator', href: '/pod-pricing-calculator' }]} />
      <PodCalculator />
    </div>
  );
}
