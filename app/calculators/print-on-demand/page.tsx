import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { SEO_PAGES } from '@/lib/config/seo-pages';

export const metadata: Metadata = {
  title: SEO_PAGES['pod-profit-calculator'].title,
  description: SEO_PAGES['pod-profit-calculator'].description,
};

export default function PodCalculatorPage() {
  const pageData = SEO_PAGES['pod-profit-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Calculators', href: '/calculators/print-on-demand' }, { name: 'Print-on-Demand Calculator', href: '/pod-profit-calculator' }]} />

      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'Print-on-Demand Profit Calculator',
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

      <PodCalculator />
    </div>
  );
}
