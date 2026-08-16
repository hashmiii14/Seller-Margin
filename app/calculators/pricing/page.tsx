import React from 'react';
import type { Metadata } from 'next';
import { PricingAssistant } from '@/components/calculators/PricingAssistant';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Smart Pricing Assistant | What Should I Charge? | SellerMargin',
  description: 'Calculate what retail price to charge to achieve your target profit margin or dollar goal on Etsy, Amazon, or custom store.',
};

export default function PricingAssistantPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Calculators', href: '/calculators/pricing' }, { name: 'Smart Pricing Assistant', href: '/calculators/pricing' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Smart Product Pricing Assistant
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Enter your material costs, shipping fees, and target margin percentage to calculate the exact retail price you should charge.
        </p>
      </div>

      <PricingAssistant />
    </div>
  );
}
