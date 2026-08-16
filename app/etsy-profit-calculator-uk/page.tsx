import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Etsy Profit Calculator UK (£ GBP) | UK Etsy Fees & Profit | Sellrivo',
  description:
    'Free Etsy profit calculator for UK sellers. Calculate 6.5% transaction fees, 4.0% + £0.20 UK Etsy Payments processing, listing charges, and net GBP profit.',
};

export default function EtsyProfitCalculatorUkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Etsy Profit Calculator UK', href: '/etsy-profit-calculator-uk' }]} />
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Sellrivo Etsy Profit Calculator UK',
          operatingSystem: 'Any',
          applicationCategory: 'FinanceApplication',
        }}
      />
      <EtsyCalculator initialCountry="UK" />
    </div>
  );
}
