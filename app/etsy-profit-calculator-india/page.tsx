import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Etsy Profit Calculator India (INR ₹) | Indian Etsy Fees & Margin | Sellrivo',
  description:
    'Free Etsy profit calculator for Indian sellers. Calculate 6.5% transaction charges, 4.0% + ₹15 India Etsy Payments processing fees, and net INR profit.',
};

export default function EtsyProfitCalculatorIndiaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Etsy Profit Calculator India', href: '/etsy-profit-calculator-india' }]} />
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Sellrivo Etsy Profit Calculator India',
          operatingSystem: 'Any',
          applicationCategory: 'FinanceApplication',
        }}
      />
      <EtsyCalculator initialCountry="IN" />
    </div>
  );
}
