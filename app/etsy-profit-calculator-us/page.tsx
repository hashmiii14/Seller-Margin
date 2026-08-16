import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Etsy Profit Calculator US ($ USD) | Etsy Fees & Net Profit | Sellrivo',
  description:
    'Free Etsy profit calculator for US sellers. Calculate $0.20 listing fees, 6.5% transaction charges, 3.0% + $0.25 US Etsy Payments, and net profit in USD.',
};

export default function EtsyProfitCalculatorUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Etsy Profit Calculator US', href: '/etsy-profit-calculator-us' }]} />
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Sellrivo Etsy Profit Calculator US',
          operatingSystem: 'Any',
          applicationCategory: 'FinanceApplication',
        }}
      />
      <EtsyCalculator initialCountry="US" />
    </div>
  );
}
