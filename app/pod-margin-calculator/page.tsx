import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'POD Margin Calculator | Printify & Gelato Margin | Sellrivo',
  description:
    'Calculate profit margins for print-on-demand products fulfilled via Printify or Gelato.',
};

export default function PodMarginCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ name: 'POD Margin Calculator', href: '/pod-margin-calculator' }]} />
      <PodCalculator />
    </div>
  );
}
