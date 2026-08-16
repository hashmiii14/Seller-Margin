import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Etsy Profit Calculator Canada (CAD $) | Canadian Etsy Fees | Sellrivo',
  description:
    'Free Etsy profit calculator for Canadian sellers. Calculate 6.5% transaction charges, 3.0% + CA$0.25 Canada Etsy Payments, and net CAD profit.',
};

export default function EtsyProfitCalculatorCanadaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Etsy Profit Calculator Canada', href: '/etsy-profit-calculator-canada' }]} />
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Sellrivo Etsy Profit Calculator Canada',
          operatingSystem: 'Any',
          applicationCategory: 'FinanceApplication',
        }}
      />
      <EtsyCalculator initialCountry="CA" />
    </div>
  );
}
