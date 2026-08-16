import React from 'react';
import type { Metadata } from 'next';
import { ProfitGoalCalculator } from '@/components/calculators/ProfitGoalCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Seller Profit Goal Calculator | Calculate Sales Target Volume | Sellrivo',
  description:
    'Calculate how many unit sales you need per day and month to hit $500, $1,000, or $5,000 in net profit on Etsy, Amazon FBA, or Shopify.',
};

export default function ProfitGoalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Profit Goal Calculator', href: '/profit-goal-calculator' }]} />
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Sellrivo Profit Goal Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Any',
        }}
      />
      <ProfitGoalCalculator />
    </div>
  );
}
