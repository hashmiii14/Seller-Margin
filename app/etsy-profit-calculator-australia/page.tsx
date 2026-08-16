import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Etsy Profit Calculator Australia (AUD $) | Australian Etsy Fees | Sellrivo',
  description:
    'Free Etsy profit calculator for Australian sellers. Calculate 6.5% transaction charges, 3.0% + A$0.25 Australia Etsy Payments, and net AUD profit.',
};

export default function EtsyProfitCalculatorAustraliaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Etsy Profit Calculator Australia', href: '/etsy-profit-calculator-australia' }]} />
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Sellrivo Etsy Profit Calculator Australia',
          operatingSystem: 'Any',
          applicationCategory: 'FinanceApplication',
        }}
      />
      <EtsyCalculator initialCountry="AU" />
    </div>
  );
}
