import React from 'react';
import type { Metadata } from 'next';
import { PricingAssistant } from '@/components/calculators/PricingAssistant';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Smart Pricing Assistant | What Should I Charge? | Sellrivo',
  description:
    'Calculate the exact retail price required to achieve your target 20%, 30%, or 50% net profit margin after marketplace fees.',
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ name: 'Pricing Assistant', href: '/calculators/pricing' }]} />
      <PricingAssistant />
    </div>
  );
}
