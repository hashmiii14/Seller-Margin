import React from 'react';
import type { Metadata } from 'next';
import { PricingAssistant } from '@/components/calculators/PricingAssistant';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'POD Pricing Calculator | How to Price Print-on-Demand Products | SellerMargin',
  description: 'Calculate retail prices for custom t-shirts, mugs, hoodies, and posters to ensure a 30%+ net profit margin.',
};

export default function PodPricingCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'POD Pricing Calculator', href: '/pod-pricing-calculator' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Print-on-Demand Pricing Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Enter your supplier base cost and shipping to calculate the retail price needed to achieve a 30%+ profit margin.
        </p>
      </div>

      <PricingAssistant />
    </div>
  );
}
