import React from 'react';
import type { Metadata } from 'next';
import { AmazonFbaCalculator } from '@/components/calculators/AmazonFbaCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { SEO_PAGES } from '@/lib/config/seo-pages';

export const metadata: Metadata = {
  title: SEO_PAGES['amazon-fba-calculator'].title,
  description: SEO_PAGES['amazon-fba-calculator'].description,
};

export default function AmazonFbaCalculatorPage() {
  const pageData = SEO_PAGES['amazon-fba-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Calculators', href: '/calculators/amazon-fba' }, { name: 'Amazon FBA Calculator', href: '/amazon-fba-calculator' }]} />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Amazon FBA Profit Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        }}
      />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {pageData.h1}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          {pageData.intro}
        </p>
      </div>

      <AmazonFbaCalculator />
    </div>
  );
}
