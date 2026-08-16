import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'POD Margin Calculator | Printify & Gelato Margin | SellerMargin',
  description: 'Calculate net profit margin percentages for print-on-demand products across Etsy, Shopify, and Amazon.',
};

export default function PodMarginCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'POD Margin Calculator', href: '/pod-margin-calculator' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Print-on-Demand Profit Margin Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Calculate your net margin percentage after deducting POD blank costs, supplier shipping, platform fees, and marketing spend.
        </p>
      </div>

      <PodCalculator />
    </div>
  );
}
